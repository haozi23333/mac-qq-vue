<template>
    <div class="messageBox">
        <message-item messagesId="" userId="296409654" time="1484116446059" prefix="haozi"></message-item>
    </div>
</template>
<style>
  .messageBox{
      padding-left: 10px;
      flex: 1;
      padding-right: 10px;

      height: 1px;

      overflow: auto;
  }
</style>
<script>
    import messageItem from './messageItem.vue'
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            messageItem
        }
    }
</script>
