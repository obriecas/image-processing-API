import supertest from 'supertest';
import app from '../index';
import path from 'path';
import fs from 'fs';
import ImageController from '../controllers/images';

const rootPath = path.resolve(__dirname + '../../../');
const outputPath = rootPath + '/assets/thumb/';

const request = supertest(app);
describe('Test endpoint responses', () => {
	afterAll((done) => {
		if (fs.existsSync(outputPath + 'testimage-100x100.jpg')) {
			fs.unlinkSync(outputPath + 'testimage-100x100.jpg');
		}
		done();
	});

	it('gets the images endpoint', async () => {
		const response = await request.get('/api/images');
		expect(response.status).toBe(200);
	});
	it('creates resized image', async () => {
		await request.get(
			'/api/images?filename=testimage&width=100&height=100'
		);
		expect(fs.existsSync(outputPath + 'testimage-100x100.jpg'));
	});
});

describe('Test sharp resizing', () => {
	it('throws missing input error', async () => {
		const errorMessage = 'Input file is missing';
		await expectAsync(
			ImageController.resize('', 100, 100)
		).toBeRejectedWith(new Error(errorMessage));
	});
});
