// 
//
(function(ext){
  // shutdown
  ext._shutdown=function(){};
  // status
  ext._getStatus=function(){
    return {status:2,msg:'Ready'};
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
  var descriptor={
    blocks: [
      [' ','connect %s','connect','connect'],
      ['r','command %s','command','{"hello world"}','command'],
      ['r','script %s','script','{return "hello world";}'],
      ['R','command %s','command','{"hello world"}','command'],
      ['R','script %s','script','{return "hello world";}'],
    ],
    menus:{script_mode:['command','function']},
    url: 'https://Siping20160616.github.io/scratch-blocks/test'
  };
  // Register ScratchExtension
  ScratchExtensions.register('Test Extension',descriptor,ext);
})({});
