<template>
    <div id="app">
        <div id="cover"></div>
        <Header></Header>
        <todo></todo>
        <Footer></Footer>
    </div>
</template>

<script>

import Header from './todo/header.vue'   // 引入头组件
import Todo from './todo/todo.vue'       // 引入头组件
import Footer from './todo/footer.jsx'   // 引入头组件

export default {
    components:{
        Header,
        Todo,
        Footer
    }
  
}
</script>


<style lang="stylus" scoped> 
// scoped 只应用于在本组件内样式生效 

#app{
    position absolute
    left 0
    right 0
    top 0
    bottom 0
}
#cover{ // 背景虚化样式
    position absolute
    left 0
    top 0
    right 0
    bottom 0
    background-color #999
    opacity .9
    z-index -1
}
</style>


