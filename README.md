# simple-alert

> 基于 vue 的微型 alert

## 使用说明

``` bash
安装
npm install vue-mini-alert

import VueMiniAlert from 'vue-mini-alert';
Vue.use(VueMiniAlert)

使用vue.$minialert(message, type,duration)
message 提示内容
type=['info','error','success','warning']
duration显示时长，小于0一直显示,点击立即关闭
默认是info,持续3000ms,message不能为空
```
## 在线Demo

[点我查看](https://2767321434.github.io/vue-mini-alert/index.html)