export const productById = () => {
    const getProductById = async (id) => {
        try {
            const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
            const data = await response.json();
            console.log('product by id:', data);
            return data
        } catch (error) {
            console.error('Error fetching product by ID:', error);
            throw error;
        }
    }

    return { getProductById };
}