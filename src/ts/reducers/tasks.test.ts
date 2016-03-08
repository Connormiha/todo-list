'use strict';

import reducer from './tasks';
import constants from '../constants/actionsTask';

describe('Reducer Tasks', function () {
    it('Should return same state for unknown type', function () {
        const state = [];
        expect(reducer(state, {})).toBe(state);
    });

    it('Should default state Array', function () {
        expect(reducer(undefined, {})).toEqual([]);
    });

    it('Should work type=add', function () {
        const state = [];
        const result = reducer(state, {
            params: {title: 'test'},
            type: constants.ADD
        });

        expect(result.length).toBe(1);
        expect(result[0].title).toBe('test');
    });

    it('Should work type=remove', function () {
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
