import {combineReducers} from 'redux';
import tasks from '../flux/tasks';

const rootReducer = combineReducers({
    tasks
});

export default rootReducer;
