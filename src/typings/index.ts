interface ITodo {
    id: number;
    content: string;
    status: TODO_STATUS;
}

interface IStatus {
    list:ITodo[]
}
 
enum TODO_STATUS {
    FINISHED = 'finished',
    WILLDO = 'willdo',
    DOING = 'doing'
}

enum PermissionTypes {
    A = 'A',
    B = 'B'
}

interface IAuthMap {
    [index:string]:boolean
}

interface IRouterMeta {
    permission?:PermissionTypes
}

const obj:IRouterMeta = {
    permission:PermissionTypes.A
}

const authMap:IAuthMap ={
    'A':false,
    'B':true,
}
console.log(obj.permission);

let permission = obj.permission;
console.log(authMap[permission as PermissionTypes]);


export {
    ITodo,
    IStatus,
    TODO_STATUS
}