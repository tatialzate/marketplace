import { Router } from 'express';

import { productsController } from '../controllers/products-controller.js';
import { productByIdController } from '../controllers/product-by-id-controller.js';


export const productsRoutes = () => {
    const router = Router();

    router.get('/product', async (req, res) => {
        const controller = productsController();
        await controller.getProducts(req, res);
    });

    router.get('/product/:id', async (req, res) => {
        const controller = productByIdController();
        await controller.getProductById(req, res);
    });

    return router;
}

