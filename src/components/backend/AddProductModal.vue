<script setup lang="ts">
    import { ref } from 'vue'

    const props = defineProps({
        show: {
            type: Boolean,
            required: true
        }
    })

    const options = ref([
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' }
    ])

</script>

<template>
    <div v-if="show" class="fixed w-full h-full overflow-y-auto bg-opacity-500">
        <div class="relative w-1/2 p-5 mx-40 bg-white border rounded-md shadow-lg top-20">
            <div class="mt-3 text-left">
                <h3 class="text-lg font-medium leading-6 text-gray-900">Add New Product</h3>
                <div class="mt-2">
                    <form>
                        <div class="mb-0">
                            <label for="" class="mb-[10px] block text-base font-medium text-dark dark:text-white">
                            Default Input
                            </label>
                            <input
                            type="text"
                            placeholder="Default Input"
                            class="w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 py-[10px] px-5 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2"
                            />
                        </div>

                        <div class="mb-2">
                            <label for="" class="mb-[10px] block text-base font-medium text-dark dark:text-white">
                            Default Select
                            </label>
                            <div class="relative z-20">
                            <select
                                class="relative z-20 w-full appearance-none rounded-lg border border-stroke dark:border-dark-3 bg-transparent py-[10px] px-5 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2"
                            >
                                <option value="" class="dark:bg-dark-2">Option</option>
                                <option value="" class="dark:bg-dark-2">Option</option>
                                <option value="" class="dark:bg-dark-2">Option</option>
                            </select>
                            <span
                                class="absolute right-4 top-1/2 z-10 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-r-2 border-b-2 border-body-color"
                            ></span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>