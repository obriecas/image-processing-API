import express from 'express';
import path from 'path';

import ImageController from '../../controllers/images';

const images = express.Router();
const rootPath = path.resolve(__dirname + '../../../../');
const outputPath = rootPath + '/assets/thumb/';

images.get('/', async (req, res) => {
	const image = String(req.query.filename);
	const width = Number(req.query.width);
	const height = Number(req.query.height);
	console.log(
		'images api ' + image + ' width = ' + width + ' height = ' + height
	);
	console.log(__dirname);
	if (image && width && height) {
		await ImageController.resize(image, width, height).catch((error) => {
			res.send(error.toString());
		});

		res.sendFile(outputPath + `${image}-${width}x${height}.jpg`, (err) => {
			if (err) {
				res.status(404).end();
			}
		});
	} else {
		res.send(
			'Missing query parameters. Must include filename, width and height.'
		).end();
	}
});

export default images;
