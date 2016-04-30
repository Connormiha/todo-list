'use strict';

import reducer, {TaskItem} from './tasks';
import constants from '../constants/actionsTask';
import * as Immutable from 'immutable';

describe('Reducer Tasks', function () {
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
            type: constants.ADD
        });

        expect(result.size).toBe(1);
        expect(result.first().title).toBe('test');
        expect(result.first()).toBe(result.last());
    });

    it('Should work type=remove', () => {
        const state = [
            {
                id: 100
            },
            {
                id: 101
            }
        ];

        const result = reducer(state, {
            id: 100,
            type: constants.REMOVE
        });

        expect(result.length).toBe(1);
        expect(result[0].id).toBe(101);
    });
});
