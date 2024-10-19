import React from 'react';
import ReactDOM from 'react-dom';
import Alert from './Alert'; // 引入要暴露的组件
import Button from './Button';

// 将 Alert 渲染到页面上
const App = () => (
    <div>
        <h1>Remote 2 Application</h1>
        <Alert />
        <Button />
    </div>
);

// 渲染应用
ReactDOM.render(<App />, document.getElementById('root'));

// 暴露 Alert 组件
export { Alert }; // 暴露 Alert 组件
