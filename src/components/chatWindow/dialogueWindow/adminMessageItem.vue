<template>
    <div class="messageItem">
        <div class="adminMessageDiv">
            <a class="adminMessageA">{{message}}</a>
        </div>
    </div>
</template>
<style scoped>
    .messageItem {
        width: 100%;
        margin-top: 3px;
        margin-bottom: 3px;
        padding-left: 3px;
        padding-right: 3px;
    }
    .adminMessageDiv{
        margin: 0 auto;
        width: 0px;
    }
    .adminMessageA {
        text-align: center;
        line-height: 1em;


        background-color: #d8d8d8;
        border-radius: 15px;
    }
</style>
<script>
    export default{
        props:['message'],
        data(){
            return{
            }
        },
        mounted () {

        },
        components:{
        }
    }
</script>
