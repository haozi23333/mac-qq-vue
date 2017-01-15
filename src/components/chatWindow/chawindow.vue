<template>
    <div class="chatWindow">
        <chat-list></chat-list>
        <dialogueWindow sessionId=""></dialogueWindow>
    </div>
</template>
<style scoped>
    body{
        background-color:#ff0000;
    }
    .chatWindow{
        display: flex;
        flex-direction: row;

        flex-wrap: nowrap;
    }
</style>
<script>
    import chatList from './chatList/chatList.vue'
    import dialogueWindow from './dialogueWindow/dialogueWindow.vue'
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            chatList,
            dialogueWindow
        }
    }
</script>
