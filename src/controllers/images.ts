import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const rootPath = path.resolve(__dirname + '../../../');
const outputPath = rootPath + '/assets/thumb/';
const inputPath = rootPath + '/assets/full/';

const thumbExists = (image: string, width: number, height: number): boolean => {
	try {
		if (fs.existsSync(outputPath + `${image}-${width}x${height}.jpg`)) {
			console.log('image exists');
			return true;
		}
	} catch (err) {
		console.error(err);
	}
	return false;
};

class ImageController {
	static async resize(
		image: string,
		width: number,
		height: number
	): Promise<void> {
		if (!thumbExists(image, width, height)) {
			await sharp(inputPath + `${image}.jpg`)
				.resize(width, height)
				.toFile(`assets/thumb/${image}-${width}x${height}.jpg`);
		}
	}
}

export default ImageController;
