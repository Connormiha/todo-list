'use strict';

import reducer from './index';

describe('Root reducer', function () {
    it('Should return valid state', function () {
        const result = reducer({}, {});

        expect(result.tasks).toBeTruthy('tasks');
    });

});
