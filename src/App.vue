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
  const b = 1;
  console.log(b);
  
  let map = [1,1];
  console.log(map[a]);
  
})

const b = 2;
console.log(b);


</script>

<style>

</style>
