import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";
import { v4 as uuidv4 } from "uuid";



export const useTaskList = defineStore('taskList', () => {
    const tasks = reactive([]);

    function add(task) {
        const uid = uuidv4();
        console.log("uid => ", uid);
        console.log("value => ", task.value);
        tasks.push({
            id: uid,
            task: task,
            completed: false
        })
    }

    function remove(id) {
        const index = tasks.findIndex(task => task.id === id);
        if (index !== -1) {
            tasks.splice(index, 1)
        }
    }

    function removeAll() {
        tasks.splice(0, tasks.length)
    }

    function removeCompleted() {
        const filtered = tasks.filter(task => !task.completed)
        tasks = tasks.splice(0, tasks.length, ...filtered)
    }

    function updateTask(objTask) {
        const index = tasks.findIndex(task => task.id === objTask.id);
        if (index !== -1) {
            tasks[index].task = objTask.name
        }
    }

    function getOne(id) {
        return tasks.find(item => item.id === id);
    }

    const countPending = computed(() => tasks.filter(task => !task.completed).length);

    return { tasks, add, remove, removeAll, removeCompleted, updateTask, getOne, countPending }
})