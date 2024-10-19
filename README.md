# Module-Federation-Demo
Webpack Module Federation Demo Project

Module Federation 的核心理念是将各个应用的模块打包后，使它们能够彼此独立并在运行时共享模块。这通过 "remote" 和 "host" 概念实现，其中：

Host（主应用）：负责加载和显示整个页面，并且可以从其他应用中动态加载模块。
Remote（远程应用）：可以向主应用提供模块，并在构建过程中独立运行。


个人理解：

关于鲁棒性而言，host应用作为主容器，可以渲染自身的业务，并且可以动态地挂载渲染其他remote应用，而这些前提是remote应用正常服务，如果出现remote应用挂掉，那么host应用的remote应用将无法加载，进而渲染其中的fallback，而host自身的业务不会受影响。

关于渲染的内容而言，remote可以通过remoteEntry.js将想要导出的组件component打包，而host应用可以渲染导出的其中某个组件，而不去渲染remote应用的自身业务（除了remoteEntry.js导出之外的组件）。
