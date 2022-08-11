<template>
    <div>
        <todo-item
            v-for="item of todoList"
            :key="item.id"
            :item="item"
            @removeTodo="removeTodo"
            @setStatus="setStatus"
            @setDoing="setDoing"
        ></todo-item>
    </div>
</template>
<script lang="ts" setup name="TodoList">
import { IUseTodo, useTodo } from '@/hooks';
import { ITodo } from '@/typings';
import { PropType } from 'vue';
import TodoItem from './item.vue'
const props = defineProps({
    todoList: Array as PropType<ITodo[]>
})

const { removeTodo, setStatus, setDoing }:IUseTodo = useTodo();

</script>
<style lang="less" scoped>
    
</style>