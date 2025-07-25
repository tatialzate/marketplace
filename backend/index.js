import express from 'express';

const app = express();

app.get('/api', async (req, res) => {
    res.status(200).json({ 
        message: 'OK'
    })
})

app.listen(4000, () => console.log('Estoy escuchando por el puerto 4000'));

