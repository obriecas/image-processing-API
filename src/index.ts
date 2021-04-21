import express from "express";

const app = express();
const port = 3000;

app.get('/images', (req, res) => {
    console.log('/images reached');
})

app.listen(port, () => {
    console.log(`Express server running on port ${port}`);
})