<template>
    <div class="messageItem">
        <span class="messageTitle"  :style="{color: userColor}"><a>【头衔】</a><a>{{user.userName}}</a><a>&#60;{{user.userId}}&#62;</a><a>{{new Date().setTimeD(time).toLocaleString()}}</a></span>
        <ul>
            <li>
                <div class="messageDiv">
                    <p>
                        2qwdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                        <img src="~assets/bq.jpg" alt="">
                        <img src="~assets/bq.jpg" alt="">
                        <img src="~assets/slx.jpg"/>
                        qwdwqdwq
                        <a class="at">@haozi</a>
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>
<style scoped>
    .messageItem {
    }
    .messageItem ul {
        list-style-type: disc;
        padding-left: 25px;
    }
    .messageDiv {
        clear: both;
    }
    .messageDiv p {
        word-wrap:break-word;
        word-break:normal;

    }
    .messageDiv img{
        /*float: left;*/
    }
    .messageDiv .at {
        background-color: #d3eebc;
        border: #b8e68e solid 2px;
        color: black;
        padding: 1px;

        cursor: pointer;
    }
</style>
<script>
    export default{
        props:['messagesId','userId','time','prefix'],
        //用id来索引全部数据
        data(){
            return{
                //测试数据
                user: {
                    userId:'296409654',
                    userName:'/ka',
                    prefix:"haozi"
                },
                userColor : '#008040'
            }
        },
        mounted () {

        },
        components:{
        }
    }
</script>
