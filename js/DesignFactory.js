angular.module("DesignFactory",[])
.factory('DesignFactory',function(){
  var factory={};
  factory.headerCategories=[
    {name:"Home",link:"/personalWebsite/home",chosen:false},
    {name:"Apps",link:"/personalWebsite/apps",chosen:false},
    {name:"Resume",link:"/personalWebsite/resume",chosen:false},
    {name:"Comments",link:"/personalWebsite/contactMe",chosen:false}
  ];
  factory.toolbarHeight;
  return factory;
});
