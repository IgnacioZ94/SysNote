import {combineReducers} from 'redux';
import {taskReducer} from './task.reducer';
import {authReducer} from './auth.reducer';
export const rootReducer = combineReducers({
    taskReducer,
    authReducer
});