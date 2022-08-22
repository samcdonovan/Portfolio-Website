import { createMemoryHistory, createRouter } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'
import Projects from '../components/Projects.vue'
import Success from '../components/Success.vue'

const routes = [
    {
        path: "/",
        name: "HomePage",
        component: Home
    },
    {
        path: "/about",
        name: "AboutPage",
        component: About
    },
    {
        path: "/contact",
        name: "ContactPage",
        component: Contact
    },
    {
        path: "/projects",
        name: "ProjectsPage",
        component: Projects
    },
    {
        path: "/success",
        name: "SuccessPage",
        component: Success
    }
]

const router = createRouter({
    mode: 'abstract',
    history: createMemoryHistory(),
    //history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
