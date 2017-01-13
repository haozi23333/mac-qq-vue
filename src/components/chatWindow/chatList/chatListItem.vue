<template>
    <div class="chatList-item animated" :style="{order :order}">
        <div class="chatList-item-face">
            <img height="40" width="40" :src="chatFaceImage" :alt="chatTitle">
        </div>
        <div class="chatList-item-content">
            <p>{{chatTitle}}</p><i>{{chatMessageAmount > 99 ? '99+' : chatMessageAmount}}</i>
            <p>{{chatContent}}</p>
        </div>
    </div>
</template>
<style>
.chatList-item {
    display: flex;
    padding-top: 10px;
    height: 50px;
}
.chatList-item:hover {
    background-color: #e1e1e1;
}
.chatList-item-face {
    height: 50px;
    flex: 0 0 60px;
}
.chatList-item-face img{
    border-radius: 50px;
    padding-left: 10px;
}
.chatList-item-content{
    flex: 1;

}
.chatList-item-content p{
    font-size: 1em;
    display: block;
    width: 150px;
    text-align: left;
    text-overflow:ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.chatList-item-content p:first-child {
    color: black;
    font-weight: 500;
    width: 130px;
    float: left;
}
.chatList-item-content p:last-child{
    color: #999999;
    font-size: 0.8em;
    margin-top: 5px;
}
    .chatList-item i {
        padding-right: 3px;
        padding-left: 4px;
        text-align: center;
        font-style: normal;
        background: #f74c31;
        border-radius: 1em;
        color: white;
        font-size: small;
        float: left;

        cursor: pointer;
    }
</style>
<script>
    export default{
        props:['chatTitle','chatContent','chatFaceImage','chatMessageAmount','order'],
        data(){
            return{
            }
        },
        components:{
        }
    }
</script>
