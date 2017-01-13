<template>
    <div class="dialogueWindow">
        <message-box></message-box>
        <input-box></input-box>
    </div>
</template>
<style scoped>
    .dialogueWindow{
        flex: 1;
        display: flex;

        flex-direction: column;
        flex-wrap: wrap;

        width: calc( 100% - 221px);
        min-width: 400px;
    }
</style>
<script>
    import inputBox from './inputBox.vue'
    import messageBox from './messageBox.vue'
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            inputBox,
            messageBox
        }
    }
</script>
