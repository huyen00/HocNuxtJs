<template>
    <div class="container mx-auto">
        <h1>List Cart</h1>

        <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead
                    class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
                >
                    <tr>
                        <th scope="col" class="px-6 py-3">#</th>
                        <th scope="col" class="px-6 py-3">Product</th>
                        <th scope="col" class="px-6 py-3">Price</th>
                        <th scope="col" class="px-6 py-3">Quantity</th>
                        <th scope="col" class="px-6 py-3">Delete</th>
                        <th scope="col" class="px-6 py-3">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="cartItem in listCart"
                        :key="cartItem.id"
                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                        <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            {{ cartItem.id }}
                        </th>
                        <td class="px-6 py-4">
                            {{ cartItem.name }}
                        </td>
                        <td class="px-6 py-4">${{ cartItem.price }}</td>
                        <td class="px-6 py-4">
                            <NumberCustom :numberDefault="cartItem.quantity" />
                        </td>
                        <td class="px-6 py-4">
                            <button
                                class="py-2 px-3 rounded-lg bg-red-600 text-white"
                                @click="deleteCart(cartItem.id)"
                            >
                                Delete
                            </button>
                        </td>
                        <td class="px-6 py-4">${{ cartItem.price }}</td>
                    </tr>
                </tbody>
            </table>
            <div class="flex justify-between mt-4">
                <h2 class="text-xl font-semibold">Tổng Thanh Toán:</h2>
                <h2 class="text-xl font-semibold mr-5">${{total}}</h2>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CartProduct',
    computed: {
        listCart() {
            return this.$store.state.cart;
        },
        totalItem() {
            return this.listCart.reduce((a,b) => a + b.quantity, 0);
        },
        total() {
            return this.listCart.reduce((a,b) => a + b.price * b.quantity, 0);
        }
    },
    methods: {
        deleteCart(id) {
            this.$store.dispatch('deleteFromCart', id);
        }
    }
};
</script>
