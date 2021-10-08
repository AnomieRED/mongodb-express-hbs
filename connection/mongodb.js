const mongoose = require('mongoose');

const DB_CONNECT = process.env.DB_URL || 'mongodb://localhost:27017/url';

async function mongoStart() {
	try {
		await mongoose.connect(DB_CONNECT);
		console.log('Successfylly connected to database');
	} catch (error) {
		console.log('Server error', error.message);
	}
}

mongoStart();

module.exports = mongoose;
