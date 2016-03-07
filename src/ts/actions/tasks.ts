export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';

import ActionsTaskConst from '../constants/actionsTask';

export interface AddTaskInterface {
    title: string;
};

export const addTask = (params: AddTaskInterface) => {
    return {
        type: ActionsTaskConst.ADD,
        params
    };
};

export const removeTask = (id: number) => {
    return {
        type: ActionsTaskConst.REMOVE,
        id
    };
};
