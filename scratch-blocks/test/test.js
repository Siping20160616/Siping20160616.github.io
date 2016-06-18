// Test Extension 
var scriptpath = document.currentScript.src.match(/.*\//);
//$.getScript(scriptpath + 'f001.js',function(script,status,xhr) { });
(function(ext){
  var status = 1;  // default Not Ready
  // shutdown
  ext._shutdown=function(){};
  // status
  ext._getStatus=function(){
    switch(status){
      case 0:
        return {status:0,msg:'Error'};
      case 1:
        return {status:1,msg:'Not Ready'};
      case 2:
        return {status:2,msg:'Ready'};
      default:
        return {status:1,msg:'Not Ready'};
    };
  };
  // connect block
  ext.connect=function(str){
  };
  // command block
  ext.command = function(str) {
    return eval(str);
  };
  // script block
  ext.script = function(str) {
    var script;
    eval('script=function(){'+str+'}');
    return script();
  };
  // descriptor
  let descriptor={
    blocks: [
      [' ','connect %s','connect','connect'],
      ['r','command %s','command','{"hello world"}','command'],
      ['r','script %s','script','{return "hello world";}']
    ],
    menus:{script_mode:['command','function']},
    url: 'https://Siping20160616.github.io/scratch-blocks/test'
  };
  // name
  let name = 'Test Extension';
  // Register ScratchExtension
  ScratchExtensions.register(name,descriptor,ext);
})({});
