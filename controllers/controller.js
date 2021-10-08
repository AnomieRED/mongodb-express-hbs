const urlSchema = require('../model/db.model');
const validUrl = require('valid-url');
const transform = require('../service/transform.service');

class Controller {
	async renderMain(req, res) {
		try {
			const renderLink = await urlSchema
				.find({})
				.lean()
				.sort({ _id: -1 })
				.limit(1);
			res.render('index', {
				title: 'Url',
				renderLink,
			});
		} catch (error) {
			return res.status(500).send({ error: error.message });
		}
	}

	async redirectUrl(req, res) {
		try {
			const link = req.params.code;
			const url = await urlSchema.findOne({ codeId: link });
			if (url) {
				return res.redirect(url.originUrl);
			}
		} catch (error) {
			return res.status(500).send({ error: error.message });
		}
	}

	async renderUrl(req, res) {
		try {
			const userUrl = req.body.url;
			const newUrl = transform(userUrl);
			if (!validUrl.isUri(userUrl)) {
				return res.status(401).json('Invalid your URL');
			}
			const createUrl = await urlSchema.create({
				codeId: newUrl[0],
				originUrl: userUrl,
				transformUrl: newUrl[1],
			});
			res.status(201).redirect('/');
		} catch (error) {
			return res.status(500).send({ error: error.message });
		}
	}
}

module.exports = new Controller();
