import { GraphQLID, GraphQLInt, GraphQLString, GraphQLNonNull } from 'graphql'
import { GraphQLUpload } from 'graphql-upload'

import PaymentType from '../type'
import { create, remove, update, selfUpdate } from '../resolvers'

export const paymentCreate = {
	type: PaymentType,
	args: {
		nominal: {
			name: 'nominal',
			type: GraphQLInt,
		},
		buktiTransfer: {
			name: 'buktiTransfer',
			type: GraphQLUpload,
		},
	},
	resolve: create,
}

export const paymentAdminUpdate = {
	type: PaymentType,
	args: {
		id: {
			name: 'id',
			type: GraphQLNonNull(GraphQLID),
		},
		verifiedBy: {
			name: 'verifiedBy',
			type: GraphQLID,
		},
		nominal: {
			name: 'nominal',
			type: GraphQLInt,
		},
		buktiTransfer: {
			name: 'buktiTransfer',
			type: GraphQLUpload,
		},
	},
	resolve: update,
}

export const paymentUpdate = {
	type: PaymentType,
	args: {
		nominal: {
			name: 'nominal',
			type: GraphQLInt,
		},
		buktiTransfer: {
			name: 'buktiTransfer',
			type: GraphQLUpload,
		},
	},
	resolve: selfUpdate,
}

export const paymentRemove = {
	type: PaymentType,
	args: {
		id: {
			name: 'id',
			type: GraphQLID,
		},
	},
	resolve: remove,
}
