'use strict';

import View from './index';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactTestUtils from 'react-addons-test-utils';

describe('TaskItem test', function () {
    it('Should render', function () {
        const view: React.Component<any, any> = ReactTestUtils.renderIntoDocument(
          <View>Test text</View>
        );

        const elements: Array<Element> = ReactTestUtils.scryRenderedDOMComponentsWithClass(view, 'task-item');
        expect(elements.length).toBe(1);
        expect(elements[0].querySelector('.task-item__title').innerHTML).toBe('Test text');
    });

    it('Should emit onRemove', function () {
        let onRemove: jasmine.Spy = jasmine.createSpy('onClick');

        const view: React.Component<any, any> = ReactTestUtils.renderIntoDocument(
          <View onRemove={onRemove} />
        );

        const elements: Array<Element> = ReactTestUtils.scryRenderedDOMComponentsWithClass(view, 'btn');

        ReactTestUtils.Simulate.click(elements[0]);

        expect(onRemove).toHaveBeenCalled();
    });
});
