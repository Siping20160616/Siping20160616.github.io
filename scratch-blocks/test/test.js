// Test Extension 
var scriptpath = document.currentScript.src.match(/.*\//);
//$.getScript(scriptpath + 'f001.js',function(script,status,xhr) { });
(function(ext){
  var status=1;     // default Not Ready
  var receive=null; //
  
  // shutdown
  ext._shutdown=function(){};
  // status
  ext._getStatus=function(){
    switch(status){
      case 0:
        console.info("status:0");
        return {status:0,msg:'Error'};
      case 1:
        console.info("status:1");
        return {status:1,msg:'Not Ready'};
      case 2:
        console.info("status:2");
        return {status:2,msg:'Ready'};
      default:
        return {status:1,msg:'Not Ready'};
    };
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
  // connect block
  ext.connect=function(str){
    //Connect(str);
  };
  // send block
  ext.send=function(str){
    //Send(str);
  };
  // stataus block
  ext.status=function(){
      return status;
  };
  // receive block
  ext.receive=function(){
    return receive;
  };
  // JSON_parse block
  ext.JSON_parse=function(str,item){
    try{
      var data=JSON.parse(str);
      return data[item];
    }
    catch(e){
      return null;
    };
  }
  // GUID
  ext.guid=function(){
    //return guid();
  };
  // close block
  ext.close=function(){
    //Close();
  };
  // descriptor
  var descriptor={
    blocks: [
      ['r','command %s','command','{"hello world"}','command'],
      ['r','script %s','script','{return "hello world";}'],
      [' ','connect %s','connect','ws://localhost:50000/'],
      [' ','send %s','send','{}'],
      ['r','status','status'],
      ['r','receive','receive'],
      ['r','JSON_parse %s %s','JSON_parse','{}',''],
      ['r','guid','guid'],
      [' ','close','close']
    ],
    menus:{script_mode:['command','function']},
    url: 'https://Siping20160616.github.io/scratch-blocks/test'
  };
  // name
  var name = 'Test Extension';
  // Register ScratchExtension
  ScratchExtensions.register(name,descriptor,ext);
})({});
