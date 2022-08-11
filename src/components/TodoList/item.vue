<template>
    <div>
        <input 
          type="checkbox" 
          :checked="item.status === FINISHED"
          @click="setStatus(item.id)"
        />
        <span
          :class="item.status === FINISHED ? 'line-through' : ''"
        >
            {{ item.content }}
        </span>
        <button
          @click="removeTodo(item.id)"
        >删除</button>
        <button 
          v-if="item.status !== FINISHED"
          @click="setDoing(item.id)"
          :class="item.status === DOING ? 'doing' : 'willdo'"
        >
          {{ item.status === DOING ? '正在做...' : '马上做' }}
        </button>
    </div>
</template>
<script lang="ts" setup name="TodoItem">
import { ITodo, TODO_STATUS } from '@/typings/index';
import { PropType } from 'vue';

const props = defineProps({
  item: Object as PropType<ITodo>
})

const emit = defineEmits(['removeTodo','setStatus','setDoing'])

const DOING = TODO_STATUS.DOING;
const FINISHED = TODO_STATUS.FINISHED;
const WILLDO = TODO_STATUS.WILLDO;

const removeTodo = (id: number): void => {
  emit('removeTodo', id)
}

const setStatus = (id: number): void => {
  emit('setStatus', id)
}

const setDoing = (id: number): void => {
  emit('setDoing', id)
}

</script>
<style scoped>
    .line-through {
        text-decoration: line-through;
    }

    .doing {
      background-color: #cdcdcd;
      color: black;
    }
    .willdo {
      background-color: orange;
      color: white;
    }
</style>