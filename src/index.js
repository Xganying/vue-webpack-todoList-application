import Vue from "vue"
import App from "./app.vue"

// import './assets/styles/test.css'
// import './assets/images/dili.png'
import './assets/styles/global.styl'


const root = document.createElement("div") // 创建一个节点
document.body.appendChild(root) // 在页面插入创建的节点


new Vue({
    render: (h) => h(App)
}).$mount(root)