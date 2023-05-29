<template>
    <div>
       
        
        <div class="container mx-auto ">
            <div class="flex justify-between border rounded-lg py-3 px-3">
                <div>
                    <p class="mb-0 font-semibold">Kết quả tìm kiếm:</p>
                </div>
                <div>
                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option selected>Choose a country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                </div>
            </div>
            <div class="grid grid-cols-4 gap-4 my-5">
                <div class="border rounded-lg" v-for="item in products" :key="item.id">
                    
                    <div class="px-3 py-2">
                        <h2 class="font-bold text-2xl">{{ item.name }}</h2>
                        <h2 class="font-semibold text-xl">price: {{ item.price }}</h2>
                        <button class="py-2 px-3 border rounded-2xl hover:bg-yellow-500 hover:text-white" @click="addToCart(product)">Add To Cart</button>
                    </div>
                </div>
            </div>

            <h1>List Cart</h1>

    <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 cartItems">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        #
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Product
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Price
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Quantity
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Delete
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Total
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"  v-for="item in cartItems" :key="item.id">
                    <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        1
                    </td>
                    <td class="px-6 py-4">
                        {{item.name}}
                    </td>
                    <td class="px-6 py-4">
                        {{item.price}}
                    </td>
                    <td class="px-6 py-4">
                        <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                            <button data-action="decrement" class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                                <span class="m-auto text-2xl font-thin">−</span>
                            </button>
                            <input type="number" class="outline-none focus:outline-none text-center w-8 bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" value="0"></input>
                            <button data-action="increment" class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                                <span class="m-auto text-2xl font-thin">+</span>
                            </button>
                        </div>
                    
                    </td>
                    <td class="px-6 py-4">
                        <button class="py-2 px-3 rounded-lg bg-red-600 text-white">Delete</button>
                    </td>
                    <td class="px-6 py-4">
                        $16
                    </td>
                </tr>
                
            </tbody>
        </table>
        <div class="flex justify-between mt-4">
            <h2 class="text-xl font-semibold">Tổng Thanh Toán:</h2>
            <h2 class="text-xl font-semibold mr-5">$888</h2>
        </div>
    </div>
        </div>
       
    </div>
</template>
<script>
import {mapActions, mapGetters} from "vuex"
export default {
    name: "addToCart",
    data(){
        return {
            
        }
    },
    computed: {
        ...mapGetters({
      'cartItems': 'getCartItems'
    }),
       products (){
        return this.$store.state.products
       }
    },
    methods:{
        ...mapActions({
            'addToCart': 'addToCart',
        }),
        addToCart(product){
            this.addToCart(product)
        }
    }

}
</script>