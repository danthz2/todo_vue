import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Task from './components/Task.vue'
import { createPinia } from 'pinia'
import UpdateTask from './components/UpdateTask.vue'

const routes = [
    {
        path: '/',
        children: [
            {
                path: "",
                component: Task
            },
            {
                name: 'task-edit',
                path: "edit/:id",
                component: UpdateTask,
                props: true
            },

        ]
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
});

const pinia = createPinia();


createApp(App).use(router).use(pinia).mount('#app')
