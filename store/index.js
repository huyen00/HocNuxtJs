import { productService } from '../service';

export const state = {
    products: null,
    cart: [],
};

export const getters = {
    cartSize: (state) => {
        return state.cart.length;
    },
    cartTotalAmount: (state) => {
        return state.cart.reduce((total, product) => {
            return total + product.price * product.quantity;
        }, 0);
    },
};

export const mutations = {
    setUpProducts: (state, productsPayload) => {
        state.products = productsPayload;
    },
    addToCart: (state, productId) => {
        const product = state.products.find((product) => product.id === productId);
        const cartProduct = state.cart.find((product) => product.id === productId);

        if (cartProduct) {
            cartProduct.quantity++;
        } else {
            state.cart.push({
                ...product,
                stock: product.quantity,
                quantity: 1,
            });
        }
        product.quantity--;
    },
    removeFromCart: (state, productId) => {
        const product = state.products.find((product) => product.id === productId);
        const cartProduct = state.cart.find((product) => product.id === productId);
        cartProduct.quantity--;
        product.quantity++;
    },
    deleteFromCart: (state, productId) => {
        const product = state.products.find((product) => product.id === productId);
        const cartProductIndex = state.cart.findIndex((product) => product.id === productId);
        product.quantity = state.cart[cartProductIndex].stock;
        state.cart.splice(cartProductIndex, 1);
    },
};

export const actions = {
    fetchProducts: ({ commit }) => {
        const products = productService.getProducts();
        commit('setUpProducts', products);
    },
    addToCart: ({ commit }, productId) => {
        const product = productService.products(productId);
        commit('addToCart', product.id);
    },
    removeFromCart: ({ commit }, productId) => {
        const product = productService.products(productId);
        commit('removeFromCart', product.id);
    },
    deleteFromCart: ({ commit }, productId) => {
        const product = productService.products(productId);
        commit('deleteFromCart', product.id);
    },
};
