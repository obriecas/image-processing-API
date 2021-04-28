# image processing api

Image processing api resizes an image stored in the filesystem.

## Installation

Use the package manager [npm](https://nodejs.org/en/) to install image processing api.

Install local dependencies
```bash
npm i
```
Build and start production server
```bash
npm run build
```
Start local server
```bash
npm run start
```
Run tests
```bash
npm run test
```
Run lint
```bash
npm run lint
```
Run prettier
```bash
npm run prettier
```

## Usage

Resize a jpg image in the assets/full directory, resized jpg image will be in the assets/thumb directory.

Example: resize the file fjord.jpg to have width=500 and height=400.
```
http:localhost:3000/api/images?filename=fjord&width=500&height=500
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)