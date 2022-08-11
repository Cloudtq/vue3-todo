组件 -> commit -> mutation -> state -> 视图变更 -> 响应式

1、组件 -> dispatch -> action
2、dispatch -> type(actionType) -> action
3、action -> commit 调用 -> mutation
4、mutation -> change -> state
5、render 方案 ：state -> 数据流 -> 视图


1、actionTypes     action 类型
2、actions         调用 mutation 的方法
3、mutations       改变 state 的方法
4、state           中央数据管理池
5、store 出口      actions, mutations,store 统一到仓库进行管理


组件划分
    - TodoList
        1.TodoInput -> 输入的组件
        2.TodoList -> 列表组件
            - TodoItem -> 列表项
                1. 完成或未完成的选择    checkbox
                2. 删除该项             button
                3、正在做的确认按钮      button