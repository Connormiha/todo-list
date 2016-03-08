'use strict';

import {combineReducers} from 'redux';
import TasksReducer from './tasks';

const rootReducer = combineReducers({
    tasks: TasksReducer
});

export default rootReducer;
