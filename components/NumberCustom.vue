<template lang="">
    <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
        <button
            class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
            @click="decrement"
        >
            <span class="m-auto text-2xl font-thin">−</span>
        </button>
        <input
            type="number"
            :value="number"
            class="outline-none focus:outline-none text-center w-8 bg-gray-300 font-semibold text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700 outline-none"
            name="custom-input-number"
        />
        <button
            class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
            @click="increment"
        >
            <span class="m-auto text-2xl font-thin">+</span>
        </button>
    </div>
</template>
<script>
export default {
    name: 'NumberCustom',
    props: ['numberDefault'],
    data() {
        return {
            number: this.numberDefault
        };
    },
    methods: {
        increment() {
            this.number++;
        },
        decrement() {
            if (this.number > 0) {
                this.number--;
            }
        }
    }
};
</script>
