import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { postsReducer } from "./reducers/postsReducer";
import { usersReducer } from "./reducers/usersReducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
    posts: postsReducer,
    users: usersReducer
});

const enhancer = (window !== undefined && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const store = createStore(reducers, enhancer(applyMiddleware(thunk)));

export default store;