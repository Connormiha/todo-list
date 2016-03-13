import {combineReducers} from 'redux';
import ActionsTaskConst from '../constants/actionsTask';

let id: number = 0;

const tasks = (state: Array<any> = [], action): Array<any> => {
    switch (action.type) {
        case ActionsTaskConst.ADD:
            state = state.slice();
            state.push({
                id: id++,
                resolved: false,
                title: action.params.title
            });
            break;

        case ActionsTaskConst.REMOVE:
            state = state.filter(item => item.id !== action.id);
            break;

        case ActionsTaskConst.RESOLVE:
            state = state.map((item) => {
                if (item.id === action.id) {
                    return Object.assign({}, item, {resolved: true});
                }

                return item;
            });
            break;
    }

    return state;
};

export default tasks;
