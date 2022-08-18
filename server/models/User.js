import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema(
	{
		username      : {
			type     : String,
			required : true
		},
		email         : {
			type     : String,
			required : true,
			unique   : true,
			index    : true
		},
		password      : {
			type     : String,
			required : true
		},
		isAdmin       : {
			type    : Boolean,
			default : false
		},
		cart          : {
			type    : Object,
			default : {
				total : 0,
				count : 0
			}
		},
		notifications : {
			type    : Array,
			default : []
		},
		orders        : [ { type: Schema.Types.ObjectId, ref: 'Order' } ]
	},
	{ minimize: false }
);

export default mongoose.model('User', userSchema);
