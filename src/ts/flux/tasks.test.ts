import reducer, {TaskItem, ActionsTypes, addTask, removeTask, resolveTask} from './tasks';
import * as Immutable from 'immutable';

describe('Action addTask', () => {
    it('Should return an action object', () => {
        const result = addTask({title: 'test'});

        expect(result.type).toBe(ActionsTypes.ADD);
        expect(result.params.title).toBe('test');
    });
});

describe('Action removeTask', () => {
    it('Should return an action object', () => {
        const result = removeTask(100);

        expect(result.type).toBe(ActionsTypes.REMOVE);
        expect(result.id).toBe(100);
    });
});

describe('Action resolveTask', () => {
    it('Should return an action object', () => {
        const result = resolveTask(100);

        expect(result.type).toBe(ActionsTypes.RESOVLE);
        expect(result.id).toBe(100);
    });
});

describe('Reducer Tasks', () => {
    it('Should return same state for unknown type', () => {
        const state: Immutable.List<TaskItem> = Immutable.List([]);
        expect(reducer(state, {})).toBe(state);
    });

    it('Should default state Array', () => {
        expect(reducer(undefined, {}).equals(Immutable.List([]))).toBe(true);
    });

    it('Should work type=add', () => {
        const state: Immutable.List<TaskItem> = Immutable.List([]);
        const result = reducer(state, {
            params: {title: 'test'},
            type: ActionsTypes.ADD
        });

        expect(result.size).toBe(1);
        expect(result.first().title).toBe('test');
        expect(result.first()).toBe(result.last());
    });

    it('Should work type=remove', () => {
        const state: Immutable.List<TaskItem> = Immutable.List([
            {
                id: 100
            },
            {
                id: 101
            }
        ]);

        const result = reducer(state, {
            id: 100,
            type: ActionsTypes.REMOVE
        });

        expect(result.size).toBe(1);
        expect(result.first().id).toBe(101);
    });
});
