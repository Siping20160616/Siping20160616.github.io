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
  ext.script = function(str,mode) {
    if(mode='command'){
      return eval(str);
    }
    if(mode='function'){
      var script;
      eval('script=function(){return(12345);}');
      return script();
    }
    return null;
  };
  // descriptor block
  var descriptor={
      blocks: [
          [' ','connect %s','connect','connect2'],
          ['r','script %s %m.script_mode','script','script=function(){return(12345);}','command'],
      ],
      menus:{script_mode:['command','function']},
      url: 'https://Siping20160616.github.io/scratch-blocks/test'
  };
  // Register ScratchExtension
  ScratchExtensions.register('Test Extension',descriptor,ext);
})({});
