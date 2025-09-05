import express from 'express';
import cors from 'cors';

import { productsRoutes } from './routes/products-routes.js';

const app = express();
app.use(cors());

app.get('/api', async (req, res) => {
    res.status(200).json({ 
        message: 'OK'
    })
})

app.use('/api', productsRoutes());

app.listen(4000, () => console.log('Estoy escuchando por el puerto 4000'));

