import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import FrontendLayout from "@/layouts/FrontendLayout.vue"
import BackendLayout from "@/layouts/BackendLayout.vue"
import Home from "@/views/frontend/Home.vue"
import About from "@/views/frontend/About.vue"
import Portfolio from "@/views/frontend/Portfolio.vue"
import Service from "@/views/frontend/Service.vue"
import Contact from "@/views/frontend/Contact.vue"
import Login from "@/views/frontend/Login.vue"
import Register from "@/views/frontend/Register.vue"
import Dashboard from "@/views/backend/Dashboard.vue"
import Product from "@/views/backend/Product.vue"

// ฟังก์ชันสำหรับทำ Route Guard
function authGuard(_to: any, _from: any, _next: any) {
  // อ่าน Token จาก LocalStorage
  let token = ""
  // เช็คว่ามี token หรือไม่
  try {
    token = localStorage.getItem("token") || ""
    if (token != "") {
      _next() // มี token ให้ไปต่อ
    } else {
      _next({name:"Login"}) // ไม่มี token ให้ไปหน้า login
    }
  } catch (error) {
    console.error(error)
  }
}

const routes: Array<RouteRecordRaw> = [
  // Frontend Route
  {
    // เรียกตัว Frontend Layout (แม่)
    path: "/",
    name: "Frontend",
    component: FrontendLayout,

    // เรียกตัวลูกมาใส่
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
        meta: {
          title: "Home",
        },
      },
      {
        path: "about",
        name: "About",
        component: About,
        meta: {
          title: "About",
        },
      },
      {
        path: "portfolio",
        name: "Portfolio",
        component: Portfolio,
        meta: {
          title: "Portfolio",
        },
      },
      {
        path: "service",
        name: "Service",
        component: Service,
        meta: {
          title: "Service",
        },
      },
      {
        path: "contact",
        name: "Contact",
        component: Contact,
        meta: {
          title: "Contact",
        },
      },
      {
        path: "login",
        name: "Login",
        component: Login,
        meta: {
          title: "Login",
        },
      },
      {
        path: "register",
        name: "Regiser",
        component: Register,
        meta: {
          title: "Register",
        },
      },
    ],
  },
  // Backend Route
  {
    path: "/backend",
    component: BackendLayout,
    beforeEnter: authGuard,
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard,
        meta: {
          title: "Dahsboard",
        },
      },
      {
        path: "product",
        name: "Product",
        component: Product,
        meta: {
          title: "Prouduct",
        },
      },
    ],
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.URL),
  routes,
})

// การเรียกทำงานก่อนที่ route จะโหลด
router.beforeEach((to, _, next) => {
  if (typeof to.meta.title == "string") {
    document.title = to.meta.title
  }
  next()
})

export default router