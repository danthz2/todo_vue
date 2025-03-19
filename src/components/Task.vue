<script setup>
import { PlusIcon } from "@heroicons/vue/16/solid";
import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";
import KButton from "./KButton.vue";
import TaskItem from "./TaskItem.vue";
import { useTaskList } from "../useTaskList";
import { useRouter } from "vue-router";

const items = ref([]);
const taskList = useTaskList();
const task = ref("");


function addTask() {
    const uid = uuidv4();
    console.log("uid => ", uid);
    console.log("value => ", task.value);
    if (task.value) {
        taskList.add(task.value)
        task.value = "";
    }
}

function deleteTask(id) {
    console.log("ud ", id);

    console.log("length before ", items.value.length);
    taskList.remove(id)
    console.log("length after ", items.value.length);
}

function deleteAll() {
    taskList.removeAll()
}

function deleteCompleted() {
    console.log(taskList)
    taskList.removeCompleted();
}

</script>

<template>
    <div class="bg-white h-auto size-120 mx-auto m-4 rounded-lg p-3">
        <div class="font-bold text-center text-[2.2rem] mb-2 text-gray-700">
            To Do List
        </div>
        <div class="relative">
            <input class="w-full text-[1.2rem] p-3 pr-10 border border-gray-300 rounded-lg bg-gray-100" type="text"
                placeholder="New Task" v-model="task" @keyup.enter="addTask" />
            <button @click="addTask"
                class="absolute inset-y-2 right-2 flex items-center justify-center hover:bg-teal-600 hover:rounded-sm text-teal-600 hover:text-white w-10 h-10 cursor-pointer">
                <PlusIcon class="size-6" />
            </button>
        </div>
        <template v-if="taskList.tasks.length === 0">
            <div class="mx-1 my-2 text-gray-700 text-center">No Data</div>
        </template>

        <TaskItem v-for="(item, index) in taskList.tasks" :key="item.id" :task="item" :index="index"
            @deleteTask="deleteTask(item.id)" @updateTask="updateTask(item)">
        </TaskItem>

        <div class="flex space-x-1 mt-2">
            <KButton class="flex-1" @click="deleteCompleted">
                Clear Completed
            </KButton>
            <KButton class="flex-1" @click="deleteAll"> Clear All </KButton>
        </div>
        <div class="mt-2">Pending Task : {{ taskList.countPending }}</div>
    </div>
</template>
