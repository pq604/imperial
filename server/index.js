import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const server = express();
const port = process.env.PORT || 8080;
const router = express.Router();

server.use(cors());
server.use(express.json());

router.post('/mail-send', (req, res) => {
    const { name, phone } = req.body;
    console.log(name, phone);
});

server.use('/api/v1', router);

server.listen(port, () => {
    console.log(`Server is running http://localhost:${port}`);
});