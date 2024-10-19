import React from 'react';
import ReactDOM from 'react-dom/client'; // 使用 'react-dom/client' 以支持 createRoot
import Button from './Button'; // 引入要暴露的组件

// 创建根节点
const root = ReactDOM.createRoot(document.getElementById('root'));

// 将 Button 渲染到页面上
const App = () => (
    <div>
        <h1>Remote 1 Application</h1>
        <Button />
    </div>
);

// 渲染应用
root.render(<App />); // 使用 createRoot 的 render 方法

// 这里是微前端暴露的部分
export { Button }; // 暴露 Button 组件
