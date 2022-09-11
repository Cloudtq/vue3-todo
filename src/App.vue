<template>
  <todo-list
    :todoList="todoList"
  ></todo-list>
  <todo-input></todo-input>

</template>

<script lang="ts" setup>
import TodoList from './components/TodoList/index.vue'
import TodoInput from './components/TodoInput/index.vue'
import { IUseTodo, useTodo } from './hooks';
import { onMounted } from 'vue';
import { Store, useStore } from 'vuex';
import { computed } from '@vue/reactivity';

const { setTodoList }: IUseTodo = useTodo();
const store: Store<any> = useStore();
const todoList = computed(() => store.state.list)

onMounted(() => {
  setTodoList();
  const a = 1;
  console.log(a);
  console.log(''+a);
  
})

</script>

<style>

</style>
