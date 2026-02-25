## 快速开始

```
npm run build:web    // 开发小程序
npm run build:mp     // 构建小程序
npm run dev:web      // 开发 web
npm run dev:build    // 构建 web
```

## 目录说明

```
├─ dist
│  ├─ mp             // 微信开发者工具指向的目录，用于生产环境
│  ├─ web            // web 编译出的文件，用于生产环境
├─ build             // 构建相关
├─ src
│  ├─ components     // 存放所有组件
│  └─ index.jsx      // 入口文件，会 build 成 index.html
```

## 注意事项

react 并没有提供根组件实例的销毁方法（如 vue.$destroy），所以在多页应用中页面关闭时不会触发该页面组件的 componentWillUnmount 钩子。开发者可自行监听 wxunload 或 beforeunload 事件来进行页面的销毁工作，比如调用 render 方法渲染一个空节点，强行触发页面组件的 componentWillUnmount 钩子。
