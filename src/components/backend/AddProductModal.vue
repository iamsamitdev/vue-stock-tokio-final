<script setup lang="ts">
    import { ref } from 'vue'

    defineProps({
        show: {
            type: Boolean,
            required: true
        }
    })

    const productName = ref('')
    const slug = ref('')
    const price = ref('')
    const category = ref('')
    const description = ref('')
    const image = ref(null)
    const imagePreview: any = ref(null)

    const categories = ref([
        { id: 1, name: 'Mobile' },
        { id: 2, name: 'Tablet' },
        { id: 3, name: 'Smart Watch' },
        { id: 4, name: 'Laptop' },
        { id: 5, name: 'Desktop' },
        { id: 6, name: 'Camera' },
        { id: 7, name: 'Headphone' },
        { id: 8, name: 'Speaker' },
        { id: 9, name: 'Accessories' },
        { id: 10, name: 'Gaming' }
    ])

    const handleImageUpload = (event: any) => {
        const file = event.target.files[0]
        image.value = file

        const reader = new FileReader()
        reader.onload = (e: any) => {
            imagePreview.value = e.target.result
        }
        reader.readAsDataURL(file)
    }

    const removeImage = () => {
        image.value = null
        imagePreview.value = null
        // Clear file input
        const fileInput: any = document.querySelector('input[type="file"]')
        if (fileInput) {
            fileInput.value = ''
        }
    }

    const submitForm = () => {
        const newProduct = {
            name: productName.value,
            slug: slug.value,
            price: price.value,
            category: category.value,
            description: description.value,
            image: image.value
        }
        emit('submit', newProduct)
        closeModal()
    }

    // Close modal
    const emit = defineEmits(['close', 'submit'])

    const closeModal = () => {
        emit('close')
    }

</script>

<template>
    <div v-if="show" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
    <div class="relative top-20 mx-auto p-5 border w-2/5 shadow-lg rounded-md bg-white">
      <div class="mt-3">
        <h3 class="text-lg leading-6 font-medium text-gray-900 text-center">Add New Product</h3>
        <div class="mt-2">
          <form @submit.prevent="submitForm">
            <!-- Product Name -->
            <div class="mb-4">
              <label class="block text-gray-700 text-sm mb-2">Product Name</label>
              <input v-model="productName" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" required />
            </div>
            <!-- Slug -->
            <div class="mb-4">
              <label class="block text-gray-700 text-sm mb-2">Slug</label>
              <input v-model="slug" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" required />
            </div>
            <!-- Price -->
            <div class="mb-4">
              <label class="block text-gray-700 text-sm mb-2">Price</label>
              <input v-model="price" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" required />
            </div>
            <!-- Category -->
            <div class="mb-4">
              <label class="block text-gray-700 text-sm mb-2">Category</label>
              <select v-model="category" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
                <option value="" disabled>Select a category</option>
                <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
              </select>
            </div>
            <!-- Description -->
            <div class="mb-4">
              <label class="block text-gray-700 text-sm mb-2">Description</label>
              <textarea v-model="description" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="3"></textarea>
            </div>
            <!-- Image Upload -->
            <div class="mb-4">
              <label class="block text-gray-700 text-sm mb-2">Image</label>
              <input @change="handleImageUpload" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="file" accept="image/*" />
              <!-- Image Preview -->
              <div v-if="imagePreview" class="relative mt-2 text-center">
                <img :src="imagePreview" alt="Image Preview" class="w-full h-1/2 object-cover text-center">
                <button @click="removeImage" class="absolute top-4 right-4 bg-red-500 text-white rounded-full p-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <!-- Buttons -->
            <div class="flex items-center justify-center">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-3" type="submit">Add Product</button>
              <button @click="closeModal" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">close</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>