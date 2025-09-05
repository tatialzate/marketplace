import { transformProducts } from "./utils/transform-products.js";

export const productsService = () => {
    const getProducts = async (query) => {
        try {
            const response = await fetch(`https://api.escuelajs.co/api/v1/products?title=${query}`);
            const data = await response.json();
        
            return await transformProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error);
            throw error;
        }
    };
    
    return { getProducts };
}