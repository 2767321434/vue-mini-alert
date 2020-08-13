<template>
<div :class="aniClass+' my-alert-div'" @click="onClickHide">
    <div :class="type">  
        <div class="my-alert__wrapper">
            <i :class="type+'_icon icon'" :aria-hidden="isShow"></i>
            <div class="my-alert_content">{{message}}</div>
            </div>
    </div>
</div>
</template>
<script>
export default {

        data() {
        return {
            isShow:true,
            type:'info',
            message:'this is alert',
            duration:3000,
            timeout:null,
            aniClass:'fadelogIn'
        }
    },
     mounted() {
        this.show().bind();
    },
   
    methods:{
        bind() {
            let _this = this;
            clearTimeout(this.timeout);
            if(this.duration>0){
                this.timeout = setTimeout(function() {
                _this.hide();
                 }, this.duration);
            }
            
            return this;
        },
        onClickHide(){
            clearTimeout(this.timeout);
            this.hide();
        },
        hide() {
            let _this = this;
             _this.aniClass='fadeIn'
             setTimeout(function() {
            _this.$el.parentNode.removeChild(_this.$el);
            _this.callback && _this.callback.apply(_this);
            _this.isShow=false;
             }
            , 300);
            return this;
        },
        show() {
            let _this = this;
            setTimeout(function() {
                _this.isShow = true;
            }, 100);
            return this;
        },
        callback(){

        }
    }
}
</script>

<style>

.my-alert-div{
    margin: 0;
    bottom: 0;
    z-index: 2000;
    width: 98%;
    text-align: center;
    border-radius: 4px;
    display: block;
    margin-bottom: 16px;
    padding: 16px;
    position: fixed;
    transition: .8s cubic-bezier(.25,.8,.5,1);
    -webkit-transition: .8s cubic-bezier(.25,.8,.5,1);
    -moz-transition: .8s cubic-bezier(.25,.8,.5,1);
}
/*弹层动画（从上往下）*/
.fadeIn {
    -webkit-animation: fadeInDown .3s;
    animation: fadeInDown .3s;
}

@keyframes fadeInDown {
    0% {
        -webkit-transform: translate3d(0, -20%, 0);
        -webkit-transform: translate3d(0, -20%, 0);
        transform: translate3d(0, -20%, 0);
        transform: translate3d(0, -20%, 0);
        opacity: 1;
    }
    100% {
        -webkit-transform: none;
        transform: none;
        opacity: 0;
    }
}

@-webkit-keyframes fadeInDown {
    0% {
        -webkit-transform: translate3d(0, -20%, 0);
        opacity: 1;
    }
    100% {
        -webkit-transform: none;
        opacity: 0;
    }
}
/*弹层动画（从下往上）*/
.fadelogIn {
    -webkit-animation: fadelogIn .4s;
    animation: fadelogIn .4s;
    
}

@keyframes fadelogIn {
    0% {
        -webkit-transform: translate3d(0, 100%, 0);
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0);
    }
    100% {
        -webkit-transform: none;
        transform: none;
    }
}

@-webkit-keyframes fadelogIn {
    0% {
        -webkit-transform: translate3d(0, 100%, 0);
    }
    100% {
        -webkit-transform: none;
    }
}
.my-alert__wrapper{
    align-items: center;
    border-radius: inherit;
    display: flex;
    padding: 16px;
}
.my-alert_content{
 flex: 1 1 auto;
 color: #fff;
}
.icon{
    color: #fff;
    display: inline-block;
    font: normal normal normal 24px/1 "Material Design Icons";
    font-size: inherit;
    text-rendering: auto;
    line-height: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 24px;
    margin-right: 16px;
    align-items: center;
    display: inline-flex;
    -webkit-font-feature-settings: "liga";
    font-feature-settings: "liga";
    justify-content: center;
    letter-spacing: normal;
    line-height: 1;
    position: relative;
    text-indent: 0;
    transition: .3s cubic-bezier(.25,.8,.5,1),visibility 0s;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.info_icon::before {
    content: "\00069";
}
.success_icon::before {
    content: "\2713";
}
.warning_icon::before {
    content: "\26A0";
}
.error_icon::before {
    content: "\2715";
}
.error {
    background-color: #ff5252 !important;
    border-color: #ff5252 !important;
}
.success {
    background-color: #4caf50 !important;
    border-color: #4caf50 !important;
}
.info {
    background-color: #2196f3 !important;
    border-color: #2196f3 !important;
}
.warning {
    background-color: #fb8c00 !important;
    border-color: #fb8c00 !important;
}
</style>
