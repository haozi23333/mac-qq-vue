<template>
    <div class="messageBox">
        <userMessageItem messagesId="" userId="296409654" time="1484116446059" prefix="haozi" type="user"></userMessageItem>
        <adminMeesageItem message="23333"></adminMeesageItem>
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
    import userMessageItem from './userMessageItem.vue'
    import adminMeesageItem from './adminMessageItem.vue'
    export default{
        data(){
            return{
                msg:'hello vue',
                lastDate: new Date().getTime()
            }
        },
        methods : {
            addNewMessage () {

            },
            createMessage () {

            },
            createAdminMessage (message) {

            }

        },
        components:{
            userMessageItem,
            adminMeesageItem
        }
    }
</script>
