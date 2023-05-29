import { products } from './products.js';

export const productService = {
    getProducts: () => {
        return products;
    },
    products: (productId) => {
        return products.find((product) => product.id === productId);
    },
};
