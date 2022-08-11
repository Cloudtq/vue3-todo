<template>
    <div>
        <input type="text" v-model="todoValue" @keyup="setTodoValue"/>
    </div>
</template>

<script lang="ts" setup name="TodoInput">
import { ref } from "vue";
import  {IUseTodo, useTodo } from '../../hooks'

const { setTodo }: IUseTodo = useTodo();
const todoValue = ref<string>('111')
function setTodoValue(e:KeyboardEvent):void{
    if(e.keyCode === 13 && todoValue.value.trim().length){
        setTodo(todoValue.value);
        todoValue.value = ''
    }
}
</script>
<style lang="less" scoped>
    
</style>