export default function (err) {
	if (err.message.includes(':')) {
		let jsonString = '{'
		if (err.message.includes('Syntax')) {
			let items = err.message.split(',')
			for (let i = 0; i < 1; i++) {
				let current = items[i].split(':')
				jsonString += '"' + current[0] + '":"' + current[1].trim() + '",'
			}
			jsonString = jsonString.substr(0, jsonString.length - 1)
			jsonString = jsonString.replace('Name', 'Arguments')
			jsonString = jsonString.replace('")".', 'Arguments')
			jsonString = jsonString.replace(' "', ' Arguments')
			jsonString += '}'
			let errors = JSON.parse(jsonString)
			return { message: errors }
		} else {
			jsonString += '"ValidationError":"'
			let step1 = err.message.split(',\n')
			for (let i = 0; i < step1.length; i++) {
				let current = step1[i].split(':')
				jsonString += current[1].trim() + ','
			}
			jsonString = jsonString.substr(0, jsonString.length - 1)
			jsonString += '"}'
			let errors = JSON.parse(jsonString)
			let step2 = errors.ValidationError.split(',')
			let jsonString2 = '{"'
			let uniqArgs = []
			for (let i = 0; i < step2.length; i++) {
				let current = step2[i].split('|')
				for (let j = 1; j < current.length; j = j + 2) {
					uniqArgs.push(current[1])
				}
			}
			let uniq = Array.from(new Set(uniqArgs))

			for (let k = 0; k < uniq.length; k++) {
				jsonString2 += uniq[k] + '":"'
				for (let i = 0; i < step2.length; i++) {
					var current = step2[i].split('|')
					for (let j = 1; j < current.length; j = j + 2) {
						if (current[1] == uniq[k]) {
							jsonString2 += current[2]
							jsonString2 += ','
						}
					}
				}
				jsonString2 = jsonString2.substr(0, jsonString2.length - 1)
				jsonString2 += '","'
			}
			jsonString2 = jsonString2.substr(0, jsonString2.length - 2)
			jsonString2 += '}'

			let errors2 = JSON.parse(jsonString2)
			for (let key in errors2) {
				errors2[key] = errors2[key].split(',')
			}
			errors.ValidationError = errors2
			return { message: errors }
		}
	} else {
		return { message: err.message }
	}
}
