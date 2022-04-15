# redux

## 三大原则

- 单一数据源
- state是只读的唯一修改 state 的方法是触发 action，action 是一个描述的一系列动作的对象
- 使用纯函数来执行修改 state
## API
+ createStore
+ combineReducers 合并reducer
+ applyMiddleware 接受自定义中间件扩展reduce
+ compose 从右到左执行参数
## React-Redux
+ connect
+ provider