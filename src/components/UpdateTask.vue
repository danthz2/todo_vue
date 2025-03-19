<script setup>
import { ref } from 'vue';
import { useTaskList } from '../useTaskList';
import KButton from './KButton.vue';
import { useRouter } from 'vue-router';


const { id } = defineProps(['id'])

const taskList = useTaskList();

const task = ref(taskList.getOne(id));

const router = useRouter();


console.log("dapet, " + task.id)

function updateTask() {
    taskList.updateTask(task);
    router.replace('/')
}


</script>



<template>
    <div class="bg-white h-auto size-120 mx-auto m-4 rounded-lg p-3">
        <div class="font-bold text-center text-[2.2rem] mb-2 text-gray-700">
            Update Task
        </div>
        <input class="w-full text-[1.2rem] p-3 pr-10 border border-gray-300 rounded-lg bg-gray-100" type="text"
            placeholder="New Task" v-model="task.task" />

        <KButton class="w-full mt-2" @click="updateTask"> Update </KButton>

    </div>
</template>