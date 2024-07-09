import axios from 'axios'

// Create an instance of axios
const BackendService = axios.create({
    baseURL: import.meta.env.VITE_APP_URL_API,
    withCredentials: false,
})

// Add a request interceptor to add the token
BackendService.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token') || ''
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

// CRUD Product -----------------------------------
// Read All Products
function getAllProducts(page: number, limit: number) {
    return BackendService.get('products', {
        params: {
            page: page,
            limit: limit
        }
    })
}

// Read One Product
function getOneProduct(id: string) {
    return BackendService.get('products/' + id)
}

export {
    BackendService,
    getAllProducts,
    getOneProduct
}
