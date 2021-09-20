import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { userActive, usersReducer } from "./reducers/usersReducer";

const composeEnhancers =
    (typeof window !== "undefined" &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const reducers = combineReducers({
    users: usersReducer,
    active: userActive,
});

export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
);