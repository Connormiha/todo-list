import * as React from 'react';

export default class About extends React.Component<any, {}> {
    render() {
        return (
            <div id="about">
                <h1>This is Todo-list single page application</h1>
                <h2>Used stack technologies:</h2>
                <ul>
                    <li>
                        <a href="http://www.typescriptlang.org/" target="_blank">TypeScript</a>
                        - JavaScript pre-processor. (Compile to ES5)
                    </li>
                    <li><a href="http://stylus-lang.com/" target="_blank">Stylus</a> - CSS preprocessor</li>
                    <li><a href="https://facebook.github.io/react/" target="_blank">React</a> - Facebook library for UI</li>
                    <li>
                        <a href="https://github.com/reactjs/react-router" target="_blank">React-router</a>
                         - Browser history component for React
                    </li>
                    <li><a href="https://github.com/reactjs/redux" target="_blank">Redux</a> - Flux architecture</li>
                    <li><a href="https://webpack.github.io/" target="_blank">Webpack</a> - Build manager</li>
                    <li><a href="https://karma-runner.github.io/0.13/index.html" target="_blank">Karma</a> - Unit tests runner</li>
                    <li><a href="https://jasmine.github.io/" target="_blank">Jasmine</a> - Unit tests library</li>
                    <li><a href="https://github.com/douglasduteil/isparta" target="_blank">Isparta</a> - Check code coverage</li>
                    <li><a href="https://github.com/typings/typings" target="_blank">Typings</a> - DefinitelyTyped libs package manager</li>
                    <li>
                        <a href="https://palantir.github.io/tslint/" target="_blank">Tslint</a>,
                        <a href="https://github.com/rossPatton/stylint" target="_blank">Stylint</a> - TypeScript and Stylus code validation
                    </li>
                    <li><a href="http://gulpjs.com/" target="_blank">Gulp</a> task manager</li>
                    <li><a href="https://getbootstrap.com/" target="_blank">Bootstrap</a> css framework</li>
                </ul>
            </div>
        );
    }
}
