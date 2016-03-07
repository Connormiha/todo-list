'use strict';

import * as actions from './tasks';
import constants from '../constants/actionsTask';

describe('Action addTask', function () {
    it('Should return action object', function () {
        let result = actions.addTask({title: 'test'});

        expect(result.type).toBe(constants.ADD);
        expect(result.params.title).toBe('test');
    });
});

describe('Action removeTask', function () {
    it('Should return action object', function () {
        let result = actions.removeTask(100);

        expect(result.type).toBe(constants.REMOVE);
        expect(result.id).toBe(100);
    });
});
