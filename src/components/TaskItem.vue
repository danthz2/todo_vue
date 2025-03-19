<script setup>
import { TrashIcon, PencilSquareIcon } from "@heroicons/vue/16/solid";
import { RouterLink } from "vue-router";

const { task, index } = defineProps(["task", "index"]);

const emit = defineEmits(["deleteTask"]);
</script>

<template>
    <div class="flex mx-1 my-2">
        <div :class="[
            'flex-1 px-1 text-md text-gray-700 hover:text-white cursor-pointer hover:bg-teal-800',
            task.completed ? 'line-through' : '',
        ]" @click="task.completed = !task.completed">
            {{ index + 1 }}. {{ task.task }}
        </div>
        <TrashIcon @click.keyup.enter="emit('deleteTask')" class="size-5 text-red-700 cursor-pointer" />
        <RouterLink :to="{ name: 'task-edit', params: { id: task.id } }">
            <PencilSquareIcon class="size-5 text-yellow-700 cursor-pointer" />
        </RouterLink>
    </div>
</template>

<!-- Optional Pemanggilan Class yang ada salah satu class dengna kondisi -->

<!-- --Bentuk Object-- -->
<!-- :class="{
'flex-1 px-1 text-md text-gray-700 hover:text-white cursor-pointer hover:bg-teal-800': true,
'line-through': task.completed,
}"  -->

<!-- --Bentuk Array-- -->
<!-- :class="[
'flex-1 px-1 text-md text-gray-700 hover:text-white cursor-pointer hover:bg-teal-800',
task.completed ? 'line-through' : '',
]" -->
