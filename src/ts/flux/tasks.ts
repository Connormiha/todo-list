import * as Immutable from 'immutable';

// Actions types
export const enum ActionsTypes {
    ADD,
    REMOVE,
    RESOLVE
}

export interface AddTaskInterface {
    title: string;
};

export const addTask = (params: AddTaskInterface) => {
    return {
        type: ActionsTypes.ADD,
        params
    };
};

export const removeTask = (id: number) => {
    return {
        type: ActionsTypes.REMOVE,
        id
    };
};

export const resolveTask = (id: number) => {
    return {
        type: ActionsTypes.RESOLVE,
        id
    };
};

export interface TaskItem {
    id: number;
    resolved: boolean;
    title: string;
}

let id: number = 0;

const tasks = (state: Immutable.List<TaskItem> = Immutable.List([]), action): Immutable.List<TaskItem> => {
    switch (action.type) {
        case ActionsTypes.ADD:
            return state.push(
                    {
                        id: id++,
                        resolved: false,
                        title: action.params.title
                    }
                );

        case ActionsTypes.REMOVE:
            return state.filter(item => item.id !== action.id) as Immutable.List<TaskItem>;

        case ActionsTypes.RESOLVE:
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
