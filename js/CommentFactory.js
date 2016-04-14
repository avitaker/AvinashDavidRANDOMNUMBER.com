angular.module("CommentFactory",[])
.factory('CommentFactory',function(){
  var factory={};
  if(!factory.commentList){
    factory.commentList=[];
  }
  return factory;
});
