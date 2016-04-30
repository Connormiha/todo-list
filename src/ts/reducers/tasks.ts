import {combineReducers} from 'redux';
import ActionsTaskConst from '../constants/actionsTask';
import * as Immutable from 'immutable';

export interface TaskItem {
    id: number;
    resolved: boolean;
    title: string;
}

let id: number = 0;

const tasks = (state: Immutable.List<TaskItem> = Immutable.List([]), action): Immutable.List<TaskItem> => {
    switch (action.type) {
        case ActionsTaskConst.ADD:
            return state.push(
                    {
                        id: id++,
                        resolved: false,
                        title: action.params.title
                    }
                );

        case ActionsTaskConst.REMOVE:
            return state.filter(item => item.id !== action.id) as Immutable.List<TaskItem>;

        case ActionsTaskConst.RESOLVE:
            return state.map((item) => {
                if (item.id === action.id) {
                    return Object.assign({}, item, {resolved: true});
                }

                return item;
            }) as Immutable.List<TaskItem>;
    }

    return state;
};

export default tasks;
