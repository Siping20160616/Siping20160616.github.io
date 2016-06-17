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
  ext.function = function(str) {
    var function;
    eval('fuction=function(){'+str+'}');
    return function();

  };
  // descriptor block
  var descriptor={
      blocks: [
          [' ','connect %s','connect','connect2'],
          ['r','command %s','command','1+2','command'],
          ['r','function %s','function','return "hello world";']
      ],
      menus:{script_mode:['command','function']},
      url: 'https://Siping20160616.github.io/scratch-blocks/test'
  };
  // Register ScratchExtension
  ScratchExtensions.register('Test Extension',descriptor,ext);
})({});
