import * as React from 'react';

export default class About extends React.Component<any, {}> {
    render() {
        return (
            <div id="about">
                <h1>This is Todo-list single page application</h1>
                <h2>Used stack technologies:</h2>
                <ul>
                    <li><a href="">TypeScript</a> - JavaScript pre-processor. (Compile to ES5)</li>
                    <li><a href="">Stylus</a> - CSS preprocessor</li>
                    <li><a href="">React</a> - Facebook library for UI</li>
                    <li><a href="">React-router</a> - Browser history component for React</li>
                    <li><a href="">Redux</a> - Flux architecture</li>
                    <li><a href="">Webpack</a> - Build manager</li>
                    <li><a href="">Karma</a> - Unit tests runner</li>
                    <li><a href="">Jasmine</a> - Unit tests library</li>
                    <li><a href="">Isparta</a> - Check code coverage</li>
                    <li><a href="">Typings</a> - DefinitelyTyped libs package manager</li>
                    <li><a href="">Tslint</a>, <a href="">Stylint</a> - TypeScript and Stylus code validation</li>
                    <li><a href="">Gulp</a> task manager</li>
                    <li><a href="">Bootstrap</a> css framework</li>
                </ul>
            </div>
        );
    }
}
