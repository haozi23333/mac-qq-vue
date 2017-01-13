<template>
    <div class="chatList">
        <chatListItem order="1" chatTitle="魔法妓院" chatContent="xxx:qdqwdwqd" chatFaceImage="https://haozi.moe/content/images/2016/11/ph.png" chatMessageAmount="999"></chatListItem>
    </div>
</template>
<style scoped>
.chatList {
    flex:0 0 220px;
    width:200px;
    border-right: 1px solid gray;
    height: 100vh;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
}
</style>
<script>
    import chatListItem from './chatListItem.vue'
    export default{
        data(){
            return{
                order : 1
            }
        },
        mounted (){

        },
        components:{
            chatListItem
        }
    }
</script>
