import mongoose from 'mongoose';

const { Schema } = mongoose;

const productSchema = new Schema({
	name         : {
		type     : String,
		required : true
	},
	description  : {
		type     : String,
		required : true
	},
	price        : {
		type     : Number,
		required : true
	},
	countInStock : {
		type     : Number,
		required : true
	},
	imageUrl     : {
		type     : String,
		required : true
	}
});

export default mongoose.model('Product', productSchema);
