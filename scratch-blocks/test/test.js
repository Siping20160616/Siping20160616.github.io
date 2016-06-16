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

  // descriptor block
  var descriptor={
      blocks: [
          [' ','connect %s','connect','connect'],
      ],
      menus:{
        tx: ['<', '>']
      },
      url: 'https://Siping20160616.github.io/scratch-blocks/test'
  };

  // Register ScratchExtension
  ScratchExtensions.register('Test Extension',descriptor,ext);

})({});
