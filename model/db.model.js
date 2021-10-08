const { Schema, model } = require('mongoose');

const urlSchema = new Schema(
	{
		codeId: { type: String },
		originUrl: { type: String, required: true },
		transformUrl: { type: String, required: true },
	},
	{
		timestamps: true,
	}
);

module.exports = model('URL', urlSchema);
