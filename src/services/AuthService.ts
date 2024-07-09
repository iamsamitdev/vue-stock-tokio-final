import axios from "axios"

const authService = axios.create({
    baseURL: import.meta.env.VITE_APP_URL_API,
    withCredentials: false,
    headers: {
        "Content-Type": "application/json",
    },
})

// Login function
function login(email: string, password: string) {
    return authService.post("login", {
      email: email,
      password: password,
    })
}

// Register function
function register(
    fullname: string,
    username: string,
    email: string,
    password: string,
    password_confirmation: string,
    tel: string,
    role: string
  ) {
    return authService.post("register", {
      fullname: fullname,
      username: username,
      email: email,
      password: password,
      password_confirmation: password_confirmation,
      tel: tel,
      role: role,
    })
}
  
// Logout function
function logout() {
    return backendService.post("logout")
}

export {
    login,
    register,
    logout
}