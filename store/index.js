// import vuex from 'vuex'
// const createStore = () => {
//     return new vuex.Store({
//         state: {

//         },
//         mutations: {

//         },
//         actions: {

//         },
//         getters: {

//         },
        
//     })
// }
export const state = () => ({
    cart: [],
    products: [
        {
            id:1,
            name:'Product 1',
            price: '$4',   
        },
        {
            id:2,
            name:'Product 2',
            price: '$6',   
        },
        {
            id:3,
            name:'Product 3',
            price: '$6',   
        },
        {
            id:4,
            name:'Product 4',
            price: '$6',   
        },
        {
            id:5,
            name:'Product 5',
            price: '$5',   
        },
        {
            id:6,
            name:'Product 6',
            price: '$6',   
        },
        {
            id:7,
            name:'Product 7',
            price: '$7',   
        },
    ]   
  })
  
  export const getters = {
    getCartItems(state) {
        return state.cart
      },
  }
  
  export const mutations = {
//    addToCart: (state, productId) => {
//     const product = state.products.find((product) => product.id === productId);
//     const cartProduct = state.cart.find((product) => product.id === productId );
//     if (cartProduct){
//         cartProduct.quantity ++;
//     }
//     else{
//         state.cart.push({
//             ...product,
//             stock: product.quantity,
//             quantity:1,
//         })
//     }
//     product.quantity--;
//    }

ADD_ITEM(state, product){
        // state.cart.push(product);
        // localStorage.setItem('cart', JSON.stringify(state.cart));
        const inCart = state.cart.find ( p => p.id === product.id)
        if(!inCart) {
            state.cart.push(product)
            localStorage.setItem('cart', JSON.stringify(state.cart))
          }else {
            console.log("Item already added")
          }
    },
  }
  
  export const actions = {
    addToCart({ commit }, item) {
        commit('ADD_ITEM', item)
      },
  }