import { GraphQLID, GraphQLNonNull } from 'graphql'
import { GraphQLUpload } from 'graphql-upload'

import CertificateType from '../type'
import { remove, update, selfUpdate } from '../resolvers'

export const certificateUpdate = {
	type: CertificateType,
	args: {
		jft: {
			name: 'jft',
			type: GraphQLUpload,
		},
		ssw: {
			name: 'ssw',
			type: GraphQLUpload,
		},
	},
	resolve: selfUpdate,
}

export const certificateAdminUpdate = {
	type: CertificateType,
	args: {
		id: {
			name: 'id',
			type: GraphQLNonNull(GraphQLID),
		},
		verifiedBy: {
			name: 'verifiedBy',
			type: GraphQLID,
		},
		jft: {
			name: 'jft',
			type: GraphQLUpload,
		},
		ssw: {
			name: 'ssw',
			type: GraphQLUpload,
		},
	},
	resolve: update,
}

export const certificateRemove = {
	type: CertificateType,
	args: {
		id: {
			name: 'id',
			type: GraphQLID,
		},
	},
	resolve: remove,
}
