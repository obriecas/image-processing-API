import express from 'express';
import routes from './routes/index';

const app = express();
const port = 3000;

app.use('/api', routes);

app.listen(port, () => {
	console.log(`Express server running on port ${port}`);
});

export default app;
