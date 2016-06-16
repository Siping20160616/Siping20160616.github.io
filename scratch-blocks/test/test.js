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
      ]
  };

  // Register ScratchExtension
  ScratchExtensions.register('Machan Extension',descriptor,ext);

})({});
