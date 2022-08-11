import { IStatus, ITodo, TODO_STATUS } from "@/typings";
import { REMOVE_TODO, SET_DOING, SET_STATUS, SET_TODO, SET_TODO_LIST } from "./actionTypes";


export default {
    [SET_TODO](state: IStatus, todo: ITodo): void {
        state.list.unshift(todo);
    },
    [SET_TODO_LIST](state: IStatus, todoList: ITodo[]): void {
        state.list = todoList;
    },
    [REMOVE_TODO](state: IStatus, id: number): void {
        state.list = state.list.filter( (item:ITodo) => item.id !== id )
    },
    [SET_DOING](state: IStatus, id: number): void {
        state.list.forEach((item: ITodo)=> {
            if(item.id === id){
                switch (item.status) {
                    case TODO_STATUS.FINISHED:
                        item.status = TODO_STATUS.WILLDO;
                        break;
                    case TODO_STATUS.WILLDO:
                    case TODO_STATUS.DOING: 
                        item.status = TODO_STATUS.FINISHED;
                        break;
                    default:
                        break;
                }
            }
        })
    },
    [SET_STATUS](state: IStatus, id: number): void {
        state.list.forEach((item: ITodo) => {
            if(item.status === TODO_STATUS.DOING){
                item.status = TODO_STATUS.WILLDO;
            }
            if(item.id === id){
                item.status = TODO_STATUS.DOING;
            }
        })
    }
};