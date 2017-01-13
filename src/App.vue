<template>
  <div id="app" class="app ">
    <function-bar></function-bar>
    <chat-window></chat-window>
  </div>
</template>
<script>
  import functionBar from './components/functionBar/functionbar.vue'
  import chatWindow from './components/chatWindow/chawindow.vue'
  export default {
    name: 'app',
    components: {
      functionBar,
        chatWindow
    }
  }
</script>

<style >
  @import "assets/iconfont/iconfont.css";
  @import "assets/css/animate.css";
  body,html {
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
  * {
    padding:0;
    margin: 0;
  }
#app {
  font-family: Consolas,微软雅黑,sans-serif;
}
  .app {
  }


  ::-webkit-scrollbar
  {
    width: 12px;
    height: 6px;
  }
  ::-webkit-scrollbar-track-piece
  {
    background-color: #CCCCCC;
    -webkit-border-radius: 6px;
  }
  ::-webkit-scrollbar-thumb:vertical
  {
    height: 5px;
    background-color: #999999;
    -webkit-border-radius: 6px;
  }
  ::-webkit-scrollbar-thumb:horizontal
  {
    width: 5px;
    background-color: #CCCCCC;
    -webkit-border-radius: 6px;
  }
</style>
