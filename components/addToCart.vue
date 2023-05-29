<template>
    <div>
        <div class="container mx-auto">
            <div class="flex justify-between border rounded-lg py-3 px-3">
                <div>
                    <p class="mb-0 font-semibold">Kết quả tìm kiếm:</p>
                </div>
                <div>
                    <select
                        id="countries"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                        <option selected>Choose a country</option>
                        <option value="US">United States</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                </div>
            </div>
            <div class="grid grid-cols-4 gap-4 my-5">
                <div v-for="item in products" :key="item.id" class="border rounded-lg">
                    <div class="px-3 py-2">
                        <h2 class="font-bold text-2xl">{{ item.name }}</h2>
                        <h2 class="font-semibold text-xl">price: {{ item.price }}</h2>
                        <button
                            class="py-2 px-3 border rounded-2xl hover:bg-yellow-500 hover:text-white"
                            @click="addToCart(item.id)"
                        >
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'AddToCart',
    data() {
        return {};
    },
    computed: {
        products() {
            return this.$store.state.products;
        }
    },
    watch: {
       
    },
    created() {
        this.$store.dispatch('fetchProducts');
    },
    methods: {
        addToCart(id) {
            this.$store.dispatch('addToCart', id);
        }
    }
};
</script>
