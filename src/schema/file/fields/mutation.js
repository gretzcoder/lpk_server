import { GraphQLID, GraphQLNonNull } from 'graphql'
import { GraphQLUpload } from 'graphql-upload'

import FileType from '../type'
import { create, remove, update, selfUpdate } from '../resolvers'

export const fileCreate = {
	type: FileType,
	args: {
		cv: {
			name: 'cv',
			type: GraphQLNonNull(GraphQLUpload),
		},
		ktp: {
			name: 'ktp',
			type: GraphQLNonNull(GraphQLUpload),
		},
		pasPhoto: {
			name: 'pasPhoto',
			type: GraphQLNonNull(GraphQLUpload),
		},
		ijazah: {
			name: 'ijazah',
			type: GraphQLNonNull(GraphQLUpload),
		},
		transkripNilai: {
			name: 'transkripNilai',
			type: GraphQLNonNull(GraphQLUpload),
		},
		sertifikat: {
			name: 'sertifikat',
			type: GraphQLNonNull(GraphQLUpload),
		},
		skck: {
			name: 'skck',
			type: GraphQLNonNull(GraphQLUpload),
		},
		suratKesehatan: {
			name: 'suratKesehatan',
			type: GraphQLNonNull(GraphQLUpload),
		},
		suratPersetujuanOrangtua: {
			name: 'suratPersetujuanOrangtua',
			type: GraphQLNonNull(GraphQLUpload),
		},
	},
	resolve: create,
}

export const fileAdminUpdate = {
	type: FileType,
	args: {
		id: {
			name: 'id',
			type: GraphQLNonNull(GraphQLID),
		},
		selectionBy: {
			name: 'selectionBy',
			type: GraphQLID,
		},
		cv: {
			name: 'cv',
			type: GraphQLUpload,
		},
		ktp: {
			name: 'ktp',
			type: GraphQLUpload,
		},
		pasPhoto: {
			name: 'pasPhoto',
			type: GraphQLUpload,
		},
		ijazah: {
			name: 'ijazah',
			type: GraphQLUpload,
		},
		transkripNilai: {
			name: 'transkripNilai',
			type: GraphQLUpload,
		},
		sertifikat: {
			name: 'sertifikat',
			type: GraphQLUpload,
		},
		skck: {
			name: 'skck',
			type: GraphQLUpload,
		},
		suratKesehatan: {
			name: 'suratKesehatan',
			type: GraphQLUpload,
		},
		suratPersetujuanOrangtua: {
			name: 'suratPersetujuanOrangtua',
			type: GraphQLUpload,
		},
	},
	resolve: update,
}

export const fileUpdate = {
	type: FileType,
	args: {
		cv: {
			name: 'cv',
			type: GraphQLUpload,
		},
		ktp: {
			name: 'ktp',
			type: GraphQLUpload,
		},
		pasPhoto: {
			name: 'pasPhoto',
			type: GraphQLUpload,
		},
		ijazah: {
			name: 'ijazah',
			type: GraphQLUpload,
		},
		transkripNilai: {
			name: 'transkripNilai',
			type: GraphQLUpload,
		},
		sertifikat: {
			name: 'sertifikat',
			type: GraphQLUpload,
		},
		skck: {
			name: 'skck',
			type: GraphQLUpload,
		},
		suratKesehatan: {
			name: 'suratKesehatan',
			type: GraphQLUpload,
		},
		suratPersetujuanOrangtua: {
			name: 'suratPersetujuanOrangtua',
			type: GraphQLUpload,
		},
	},
	resolve: selfUpdate,
}

export const profileRemove = {
	type: FileType,
	args: {
		id: {
			name: 'id',
			type: GraphQLID,
		},
	},
	resolve: remove,
}
