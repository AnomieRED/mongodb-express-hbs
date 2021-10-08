const { customAlphabet, urlAlphabet } = require('nanoid');

module.exports = function transform(url) {
	const baseUrl = `http://localhost:${process.env.SERVER_PORT}`;
	const nanoid = customAlphabet(urlAlphabet, 5);
	const transUrl = nanoid();
	const shortUrl = baseUrl + '/' + transUrl;
	return [transUrl, shortUrl];
};
