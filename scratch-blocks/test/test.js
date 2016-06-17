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
    var ret;
    if(mode='command'){
      ret = eval(str);
    }
    if(mode='function'){
      var script;
      eval('script=function(){return 123}');
      ret = script();
    }
    return ret;
  };
  // descriptor block
  var descriptor={
      blocks: [
          [' ','connect %s','connect','connect2'],
          ['r','script %s %m.script_mode','script','return "Hello World"','command'],
      ],
      menus:{script_mode:['command','function']},
      url: 'https://Siping20160616.github.io/scratch-blocks/test'
  };
  // Register ScratchExtension
  ScratchExtensions.register('Test Extension',descriptor,ext);
})({});
