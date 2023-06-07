/**
 * 该文件用于暴露store对象，整个应用只有1个store对象
 */

// 引入createStore,创建store对象
import { createStore, applyMiddleware } from "redux";
// 引入redux-thunk,用于支持异步action
import thunk from 'redux-thunk'
// 引入redux-devtools-extension
import { composeWithDevTools } from "redux-devtools-extension";
// 引入reducers
import reducers from './reducers';


// 暴露store对象
export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))