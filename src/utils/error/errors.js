export default {
	accepted: 'field must be accepted.',
	active_url: 'field is not a valid URL.',
	after: 'field must be a date after :date.',
	alpha: 'field may only contain letters.',
	alpha_dash: 'field may only contain letters, numbers, and dashes.',
	alpha_num: 'field may only contain letters and numbers.',
	array: 'field must be an array.',
	before: 'field must be a date before :date.',
	len: {
		numeric: 'field must be between',
		file: 'field must be between',
		string: 'field must be between',
		array: 'field must have between',
	},
	boolean: 'field must be true or false.',
	confirmed: 'field confirmation does not match.',
	date: 'field is not a valid date.',
	date_format: 'field does not match the format :format.',
	different: 'field and :other must be different.',
	digits: 'field must be :digits digits.',
	digits_between: 'field must be between :min and :max digits.',
	distinct: 'field has a duplicate value.',
	isEmail: 'field must be a valid email address.',
	exists: 'field The selected :attribute is invalid.',
	filled: 'field is required.',
	image: 'field must be an image.',
	in: 'field The selected :attribute is invalid.',
	in_array: 'field does not exist in :other.',
	isInt: 'field must be an integer.',
	ip: 'field must be a valid IP address.',
	json: 'field must be a valid JSON string.',
	max: {
		numeric: 'field may not be greater than',
		file: 'field may not be greater than',
		string: 'field may not be greater than',
		array: 'field may not have more than',
	},
	mimes: 'field must be a file of type: :values.',
	min: {
		numeric: 'field must be at least',
		file: 'field must be at least',
		string: 'field must be at least',
		array: 'field must have at least',
	},
	not_in: 'field The selected :attribute is invalid.',
	isNumeric: 'field must be a number.',
	present: 'field must be present.',
	regex: 'field format is invalid.',
	notNull: 'field is required.',
	required_if: 'field is required when :other is :value.',
	required_unless: 'field is required unless :other is in :values.',
	required_with: 'field is required when :values is present.',
	required_with_all: 'field is required when :values is present.',
	required_without: 'field is required when :values is not present.',
	required_without_all: 'field is required when none of :values are present.',
	same: 'field and :other must match.',
	size: {
		numeric: 'field must be :size.',
		file: 'field must be :size kilobytes.',
		string: 'field must be :size characters.',
		array: 'field must contain :size items.',
	},
	string: 'field must be a string.',
	timezone: 'field must be a valid zone.',
	unique: 'field has already been taken.',
	url: 'field format is invalid.',
}