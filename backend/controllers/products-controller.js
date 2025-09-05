import { productsService } from "../services/products-service.js";

export const productsController = () => {
    const getProducts = async (req, res) => {
        const query = req.query.title;
        const service = productsService();
        try {
            const products = await service.getProducts(query);
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ error: 'Error fetching products' });
        }
    };
    
    return { getProducts };
}