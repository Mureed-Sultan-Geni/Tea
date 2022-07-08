import getComp from 'setjs/template/component.js';
export default{
  templates:['site/home'],
  comp:function(){
    let page = getComp('site/home');
    return page;
  }
};