
import Vue from 'vue'
import SimpleAlertComp from './SimpleAlert';
const VueMiniAlert = {}
let myAlertNode = null // 存储loading节点元素
const MyAlertConstructor = Vue.extend(SimpleAlertComp)

VueMiniAlert.install = function(Vue, options){
    var opt = {
        duration: '1200'
      }
      if (typeof options === 'string') {
        options = {
            message: options
        };
    }
      for (var property in options) {
        opt[property] = options[property]
      }
      Vue.prototype.$minialert = function (message, type,duration) {
          if(type==null||type==''){
              type="info"
          }
          if(duration == null|| duration==''){
              duration=3000;
          }
        myAlertNode = new MyAlertConstructor({
            data :{ 
                type:type,
                message:message,
                duration:duration
            }
        })
        myAlertNode.$mount();
         document.querySelector('body').appendChild(myAlertNode.$el);
     
      }
    
};
VueMiniAlert.show= function (message, type,duration) {
    if(type==null||type==''){
        type="info"
    }
    if(duration == null|| duration==''){
        duration=3000;
    }
  myAlertNode = new MyAlertConstructor({
      data :{ 
          type:type,
          message:message,
          duration:duration
      }
  })
  myAlertNode.$mount();
   document.querySelector('body').appendChild(myAlertNode.$el);

}

export default VueMiniAlert;