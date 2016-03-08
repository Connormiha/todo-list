# Todo-list with Redux
[Описание на русском языке](readme_ru.md)     

Todo-list simple page application.  
**TypeScript** - compile to ES5  
**Stylus** - css preprocessor  
**React** **React-router**  
**Redux** - flux architecture
**Webpack** - build manager  
**Karma** - unit tests runner  
**Jasmine** - unit tests library
**Isparta** - code coverage
**Typings** - DefinitelyTyped libs manager  
**tslint, stylint** - TypeScript and Stylus code validation  
**Gulp** for run linters  
**Bootstrap** css framework

Tested on Node.js 5.0+
### Install
```
npm install
```

### Usage
Run http server + watcher
```
npm start
```

Open in your browser
```
http://localhost:8080/  
http://localhost:8080/webpack-dev-server/ with live reload
```

Run unit test. (Single run with PhantomJS)
```
npm test
```

Debugging unit test. Watch with Chrome
```
npm run test:dev
```

Compile build. (Are put into ./build folder)
```
npm run build
```

Check TypeScript and Stylus code validation
```
npm run lint
```

### Git
On pre-commit set up hook for checking modified/added files by linter  
On pre-push run unit tests

### Code coverage
After unit tests you can see summary report in console and advanced html report in ./report folder of your project
