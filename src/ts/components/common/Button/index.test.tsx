'use strict';

import View from './index';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactTestUtils from 'react-addons-test-utils';

describe('Button test', function () {
    it('Should render button tag', function () {
        const view: React.Component<any, {}> = ReactTestUtils.renderIntoDocument(
          <View>Test text</View>
        );

        const elements: Array<Element> = ReactTestUtils.scryRenderedDOMComponentsWithClass(view, 'button__text');
        expect(elements.length).toBe(1);
        expect(elements[0].innerHTML).toBe('Test text');
    });

    it('Should render button type', function () {
        const view: React.Component<any, {}> = ReactTestUtils.renderIntoDocument(
          <View type="red"/>
        );

        const elements: Array<Element> = ReactTestUtils.scryRenderedDOMComponentsWithClass(view, 'button_red');
        expect(elements.length).toBe(1);
    });

    it('Should emit onClick', function () {
        let onClick: jasmine.Spy = jasmine.createSpy('onClick');

        const view: React.Component<any, {}> = ReactTestUtils.renderIntoDocument(
          <View onClick={onClick} />
        );

        const elements: Array<Element> = ReactTestUtils.scryRenderedDOMComponentsWithClass(view, 'button');

        ReactTestUtils.Simulate.click(elements[0]);

        expect(onClick).toHaveBeenCalled();
    });
});
