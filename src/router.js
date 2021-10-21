import HomePage from "./components/HomePage";
import {createRouter} from "vue-router"

const routes = [
    {path:'/', component: HomePage, name: 'HomePage'}
]

const router = createRouter({
    routes : routes
})

export default router