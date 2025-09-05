import { productById } from "../services/product-by-id-service.js"

export const productByIdController = () => {
    const getProductById = async (req, res) =>{
        const id = req.params.id
        const service = productById();
        try {
            const product = await service.getProductById(id);
            res.status(200).json(product);
        } catch (error) {
            res.status(500).json({ error: 'Error fetching product by Id'});
        };
    }

    return { getProductById };
}
