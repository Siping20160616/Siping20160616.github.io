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
  ext.command = function(str) {
    return eval(str);
  };
  ext.script = function(str) {
    var script;
    eval('script=function(){'+str+'}');
    return script();

  };
  // descriptor block
  var descriptor={
      blocks: [
          [' ','connect %s','connect','connect2'],
          ['r','command %s','command','1+2','command'],
          ['r','script %s','script','return "hello world";']
      ],
      menus:{script_mode:['command','function']},
      url: 'https://Siping20160616.github.io/scratch-blocks/test'
  };
  // Register ScratchExtension
  ScratchExtensions.register('Test Extension',descriptor,ext);
})({});
