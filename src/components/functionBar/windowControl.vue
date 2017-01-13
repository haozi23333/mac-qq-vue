<template>
    <div class="windowControl">
        <ul>
            <li><i class="close iconfont icon-close"></i></li>
            <li><i class="fangda iconfont icon-jianhao"></i></li>
            <li><i class="suoxiao iconfont icon-plus1"></i></li>
        </ul>
    </div>
</template>
<script>
  export default {
    data () {
      return {

      }
    },
    components: {
    }
  }
</script>

<style scoped>
    .windowControl{
        height: 50px;

        float: left;
    }
    ul{
        height: 50px;
    }
    li {
        float: left;
        list-style-type: none;
        height: 50px;
        line-height: 50px;

        margin-left: 10px;
    }
    i {
        height: 1em;
        width: 1em;
        background: gray;

        border-radius: 50px;

        color: gray;
    }

    i:hover {
        color: black;
    }
    .close:hover{
        background: red;
    }

    .fangda:hover {
        background: #ffd201;
    }
    .suoxiao:hover {
        background: green;
    }
</style>
