'use strict';

import {combineReducers} from 'redux';
import ActionsTaskConst from '../constants/actionsTask';

let id: number = 0;

const tasks = (state = [], action) => {
    switch (action.type) {
        case ActionsTaskConst.ADD:
            state = state.slice();
            state.push({
                id: id++,
                title: action.params.title
            });
            return state;

        case ActionsTaskConst.REMOVE:
            state = state.filter(item => item.id !== action.id);
            return state;
    }

    return state;
};

export default tasks;
