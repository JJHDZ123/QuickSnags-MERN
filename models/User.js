import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema(
	{
		username : {
			type     : String,
			required : true
		},
		email    : {
			type     : String,
			required : true,
			unique   : true,
			index    : true
		},
		password : {
			type     : String,
			required : true
		},
		isAdmin  : {
			type    : Boolean,
			default : false
		},
		orders   : {
			type    : Array,
			default : []
		}
	},
	{ minimize: false }
);

export default mongoose.model('User', userSchema);
