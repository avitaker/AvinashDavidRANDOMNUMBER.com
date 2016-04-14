angular.module('controllersJs',['ngRoute','ngMaterial','ngMessages','duScroll'])
.controller('mainCtrl', function($scope,DesignFactory,$location){
  $scope.headerCategories=DesignFactory.headerCategories;
  $scope.go = function ( objHere, index ) {
    for (i=0;i<$scope.headerCategories.length;i++){
      $scope.headerCategories[i].chosen=false;
      DesignFactory.headerCategories[i].chosen=false;
    }
    $scope.headerCategories[index].chosen=true;
    DesignFactory.headerCategories[index].chosen=true;
    $location.path( objHere.link );
  };
  angular.element(document).ready(function(){
    DesignFactory.toolbarHeight=document.getElementById("toolbarDiv").offsetHeight;
    var printThis=DesignFactory.toolbarHeight;
    console.log(printThis);
  })
})


.controller('homepageCtrl', function($scope,DesignFactory,$window,$timeout,$interval,$mdMedia){
  for (i=0;i<DesignFactory.headerCategories.length;i++){
    DesignFactory.headerCategories[i].chosen=false;
  }
  DesignFactory.headerCategories[0].chosen=true;
  $scope.introArr=[
    {"category":"Who","answer":"My name is Avinash David"},
    {"category":"What","answer":"I am a mobile and web software developer"},
    {"category":"When","answer":"Then, now, forever. But really, for one year."},
    {"category":"Where","answer":"I am based in the Houston area in Texas, USA"},
    {"category":"Why","answer":"I enjoy making functional, user-friendly and visually clean software experiences"}
  ]
  $scope.introText="Hello, my name is Avinash David. I am a mobile and web software developer, and am based in the Houston area in Texas, USA. I enjoy making functional, user-friendly and visually clean software experiences.";
  $scope.instructionText="Please feel free to look around.";
  $scope.cardImageSubtitle="Look at how eccentric I am!";
  $scope.imgPath="/personalWebsite/iconsApp/betterFace.jpg";
  $scope.currImgNumber=0;
  $scope.isBig=false;
  var desiredHeight;
  $scope.style = function() {
          return { "max-height": desiredHeight + "px" };
      }

      $scope.hgt=0;
      $scope.styleObj={
        "height":"0px"
      }

      $scope.imagesArr=[
        {"path":"/personalWebsite/iconsApp/betterFace.jpg","description":"Look at how eccentric I am!"},
        {"path":"/personalWebsite/iconsApp/Face.jpg","description":"I live on my couch"},
        {"path":"/personalWebsite/iconsApp/backgroundImg.jpg","description":"House boats in Thushara, Kerala"}
      ]

  $scope.$watch(function() { $scope.isBig= $mdMedia('gt-md'); }, function() {
    if ($scope.isBig){
      $timeout(function(){
        desiredHeight=angular.element(document.getElementById('cardImageColumn')).prop('offsetWidth')/1.3333;
        console.log(desiredHeight);
        $scope.styleObj.height=desiredHeight+"px";
        // angular.element(document.getElementById('cardImageId')).style.height=desiredHeight;
        },50);
    }
    else {
      $timeout(function(){
        desiredHeight=angular.element(document.getElementById('cardImageColumn1')).prop('offsetWidth')/1.3333;
        console.log(desiredHeight);
        $scope.styleObj.height=desiredHeight+"px";
        // angular.element(document.getElementById('cardImageId')).style.height=desiredHeight;
        },50);
    }
  });
  // $timeout(function(){
  //   desiredHeight=angular.element(document.getElementById('cardImageColumn1')).prop('offsetWidth')/1.3;
  //   console.log(desiredHeight);
  //   $scope.styleObj.height=desiredHeight+"px";
  //   // angular.element(document.getElementById('cardImageId')).style.height=desiredHeight;
  //   },50);

    $scope.imageChange=function(){
      if ($scope.currImgNumber<$scope.imagesArr.length-1){
        $scope.currImgNumber++;
      } else {
        $scope.currImgNumber=0;
      }
      $scope.imgPath=$scope.imagesArr[$scope.currImgNumber].path;
      $scope.cardImageSubtitle=$scope.imagesArr[$scope.currImgNumber].description;
    }

    $scope.imageInterval=$interval($scope.imageChange,5000);

    $scope.$on('$routeChangeStart', function(event) {
      $interval.cancel($scope.imageInterval);
    });
})

.controller('appsCtrl', function($scope,$location,$mdDialog,$window,DesignFactory){
  for (i=0;i<DesignFactory.headerCategories.length;i++){
    DesignFactory.headerCategories[i].chosen=false;
  }
  DesignFactory.headerCategories[1].chosen=true;
  $scope.desiredDetails=0;
  $scope.introText="During my journey as a software developer, I had an affinity for mobile development from the beginning. The following mobile applications were designed in either a hybrid environment, or in native code.";
  $scope.appObjArr=[
    {name:"Trivial Trivia",
    desc:"Simple trivia quiz app with the quiz, calculated statistics, instructions and acknowledgments to all content providers. In the quiz, click your desired answer to submit it immediately, and get immediate feedback after the quiz ends. In statistics, check out how you performed overall, on average and per category of question. Instructions lay everything out for you in simple language and acknowledgements provide the names of all websites from which questions and answers were referenced.",
    link:"https://play.google.com/store/apps/details?id=com.ionicframework.myapp291672"},
    {name:"Simple Reservations",
    desc:"Simple app for restaurants to make and/or adjust immediate or timed table reservations with SMS notifications and confirmations to customers, manage current reservations, maintain customer records, edit/and or delete past customer records and send batch messages.",
    link:"https://play.google.com/store/apps/details?id=com.ionicframework.informreservation571489"},
    {name:"CalculateIt",
    desc:"First app in native Android. It is a simple calculator with minimalist design and efficient function.",
    link:"https://play.google.com/store/apps/details?id=com.avinashdavid.calculateit"}
  ];
  DesignFactory.appObjArr=$scope.appObjArr;
  $scope.go = function ( objHere ) {
    console.log(objHere.link);
    $location.path( objHere.link );
  };
  $scope.externalGo = function(objHere){
    $window.location.href = objHere.link;
  }
  $scope.showAlert = function(ev,num) {
    // Appending dialog to document.body to cover sidenav in docs app
    // Modal dialogs should fully cover application
    // to prevent interaction outside of dialog
    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title($scope.appObjArr[num].name)
        .textContent($scope.appObjArr[num].desc)
        .ariaLabel('Alert Dialog Demo')
        .ok('Got it!')
        .targetEvent(ev)
    );
  };
  $scope.showTabDialog = function(ev,num) {
    DesignFactory.currentNum=num;
    $mdDialog.show({
      controller: 'DialogController',
      templateUrl: 'personalWebsite/templates/tabDialogtmpl.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true
    })
        .then(function(answer) {
          $scope.status = 'You said the information was "' + answer + '".';
        }, function() {
          $scope.status = 'You cancelled the dialog.';
        });
  };
})

.controller('DialogController',function($scope,DesignFactory,$mdDialog,$window,$location){
  $scope.whichOne=DesignFactory.currentNum;
  $scope.appObjArr=DesignFactory.appObjArr;
  // $scope.imageObjAr=
  if ($window.innerHeight>$window.innerWidth){
    $scope.dimension=$window.innerWidth/1.1;
  }
  else {
    $scope.dimension=$window.innerHeight/2;
  }
  $scope.imagePath="/iconsApp/trivialTrivia/1.png";
  $scope.image2Path="/iconsApp/trivialTrivia/2.png";
  $scope.imgPathArr=[];
  $scope.getTheImages=(function(num){
    console.log(num);
    var folderName;
    switch(num){
      case 0:
        folderName="trivialTrivia";
        break;
      case 1:
        folderName="simpleReservations";
        break;
      case 2:
        folderName="calculateIt";
        break;
      default:
        folderName=trivialTrivia;
    }
    for (i=0;i<4;i++){
      $scope.imgPathArr.push("/personalWebsite/iconsApp/"+folderName+"/"+(i+1)+".png");
    }
  })($scope.whichOne);

  // $scope.getTheImages($scope.whichOne);
  $scope.objStyle={
    // "max-width":$scope.dimension + "px",
    "max-height":$scope.dimension + "px",
    "height":$scope.dimension + "px",
    "width":"auto",
  }
  $scope.containerInnerStyle={
    "width":$scope.dimension*0.6*4.4 + "px",
    "height":"auto"
  }
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
})

.controller('resumeCtrl',function($scope,DesignFactory,$anchorScroll,$location,$document){
  for (i=0;i<DesignFactory.headerCategories.length;i++){
    DesignFactory.headerCategories[i].chosen=false;
  }
  $scope.toolbarHeight=DesignFactory.toolbarHeight;
  DesignFactory.headerCategories[2].chosen=true;
  // $scope.introShow=false;
  // $scope.introClick=function(){
  //   $scope.introShow = !$scope.introShow;
  // }
  // $scope.personalProjectShow=false;
  // $scope.personalProjectClick=function(){
  //   $scope.personalProjectShow = !$scope.personalProjectShow;
  // }
  // $scope.publishedAppArrShow=false;
  // $scope.publishedAppArrClick=function(){
  //   $scope.publishedAppArrShow = !$scope.publishedAppArrShow;
  // }
  // $scope.workExperienceShow=false;
  // $scope.workExperienceClick=function(){
  //   $scope.workExperienceShow=!$scope.workExperienceShow;
  // }
  // $scope.educationShow=false;
  // $scope.educationClick=function(){
  //   $scope.educationShow=!$scope.educationShow;
  // }
  // $scope.volunteerShow=false;
  // $scope.volunteerClick=function(){
  //   $scope.volunteerShow=!$scope.volunteerShow;
  // }
  // $scope.extracurricularShow=false;
  // $scope.extracurricularClick=function(){
  //   $scope.extracurricularShow=!$scope.extracurricularShow;
  // }
  // $scope.skillShow=false;
  // $scope.skillClick=function(){
  //   $scope.skillShow=!$scope.skillShow;
  // }
  $scope.gotoAnchor = function(x) {
      var newHash = x;
      if ($location.hash() !== newHash) {
        // set the $location.hash to `newHash` and
        // $anchorScroll will automatically scroll to it
        $location.hash(x);
      } else {
        // call $anchorScroll() explicitly,
        // since $location.hash hasn't changed
        $anchorScroll();
      }
    };
  $scope.introText="I am a graduate from Rice University with a Bachelors degree in Chemistry. I am passionate about software development and have conducted extensive independent study in programming logic, web development, mobile app development and database programming.";
  $scope.personalProjectArr=[
    {name:"Quiz web app",skills:"jQuery, HTML, CSS",bullets:["Multiple choice quiz with buttons for navigation and quiz feedback upon completion"]},
    {name:"Timezone web app",skills:"Javascript, HTML, CSS",bullets:["Displays the local time in a timezone selected from a list, with geographical filters"]},
    {name:"Reddit display mobile app",skills:"AngularJS, Ionic framework, Cordova",bullets:["Displays Reddit content from the default subreddit list with an option for subreddit search, displays post comments"]},
  ]
  $scope.publishedAppArr=[
    {name:"Trivial Trivia",skills:"AngularJS, Ionic framework, Cordova",bullets:["Card-interface trivia quiz with statistics, instructions and content acknowledgments"]},
    {name:"Simple Reservations",skills:"AngularJS, Ionic framework, Cordova",bullets:["Enterprise-focused app for restaurants to create immediate or timed reservations, update customers about table status, and maintain restaurant customer records"]},
    {name:"CalculateIt",skills:"Android/Java",bullets:["Simple arithmetic calculator app with minimalistic design"]},
  ]
  $scope.workExperienceArr=[
    {emploYear:"Core Laboratories (2013-2015)",city:"Houston, Texas",bullets:["Laboratory technician for PVT laboratory, primarily specializing in measuring high-pressure viscosities and simulated separator properties of fluids","Worked with numerous teams to generate complete reservoir fluids data for important projects","Provided leadership for external teams developing core extraction innovations"]},
    {emploYear:"Personal Tutor (2012-2013)",city:"Missouri City, Texas",bullets:["Science and mathematics instruction for middle school students"]},
    {emploYear:"Heritage India Restaurant (2011-2012)",city:"Stafford, Texas",bullets:["Host and Cashier", "marketing strategies", "staff schedule management"]}
  ]
  $scope.educationArr=[
    {school:"Rice University \n (2010 - 2013)",city:"Houston, Texas",bullets:["Bachelor of Arts (BA) in Chemistry","GPA: 3.36"]},
    {school:"University of North Carolina – Chapel Hill (2009 - 2010)",city:"Chapel Hill, North Carolina",bullets:["GPA: 3.62"]},
    {school:"J.F. Webb High School of Health and Life Sciences (2007 - 2009)",city:"Oxford, North Carolina",bullets:["Graduated 3rd in class","AP Scholar (2009)", "GPA: 3.98"]},
    {school:"Indian School Al Ghubra (1997-2007)",city:"Muscat, Oman",bullets:["Attended till 10th grade"]}
  ]

  $scope.volunteerArr=[
    {emploYear:"Tutor at Holy Spirit Children's Home (2012)",city:"Bangalore, India",bullets:["The Holy Spirit Home provides shelter and education to disadvantaged children. I provided English and mathematics tutoring for young female students (aged 5-9) for 4 weeks","Organized a food drive for the children","Convinced a local businessman to donate regular meals"]},
    {emploYear:"Gift shop cashier at Granville Medical Center (2009)",city:"Oxford, North Carolina",bullets:["Maintained the gift shop and provided cashier service","Volunteered for 80 hours over a period of 3 weeks"]}
  ]
  $scope.extracurricularArr=[
    {school:"Marching Band at University of North Carolina – Chapel Hill (2009-2010)",city:"Chapel Hill, North Carolina",bullets:["Played cymbals","Performed at football games and home basketball games"]},
    {school:"Marching Band at J.F. Webb High School (2008-2009)",city:"Oxford, North Carolina",bullets:["Played bass drum","Performed at home football games, home basketball games, local parades and high school marching band competitions"]},
    {school:"Jazz Ensemble at J.F. Webb High School (2009)",city:"Oxford, North Carolina",bullets:["Played rhythm/solo guitar","Performed at local parades and numerous concerts"]},
    {school:"Health Occupations Students of America (HOSA) member (2008-2009)",city:"Oxford, North Carolina",bullets:["Participated in competition at NC HOSA state conference (2009)"]}
  ]
  $scope.skillsArr=[
    {category:"Programming",members:["Android/Java","Javascript","jQuery","AngularJS","Javascript data structures","Ajax","HTML","HTML5","CSS","CSS3","Ionic framework","SQL server","MySQL","Oracle SQL","XML","JSON","Object-oriented programming","Browser-based testing and console-based debugging","Microsoft Office"]},
    {category:"Chemical",members:["High-pressure viscosity measurements of oil samples","mercury-based separator simulation tests","HPLC and GC","nuclear magnetic resonance analysis","inorganic synthesis"]}
  ]
  $scope.goTo=function(stringHere){
    var someElement = angular.element(document.getElementById(stringHere));
    $document.scrollToElementAnimated(someElement);
  }
  // $scope.$on('$routeChangeStart', function(event, next, current) {
  //   if (next.templateUrl!=='personalWebsite/templates/resume.html'){
  //     $location.hash('');
  //   }
  // });
})

.controller('contactCtrl',function($scope,CommentFactory,$http,DesignFactory,$location){
  for (i=0;i<DesignFactory.headerCategories.length;i++){
    DesignFactory.headerCategories[i].chosen=false;
  }
  DesignFactory.headerCategories[3].chosen=true;
  $scope.commentObj={};
  $scope.firstName="";
  $scope.email="";
  $scope.comment="";
  $scope.submitOnclick=function(){
    var currDate=new Date();
    var currentComment={
      firstName:$scope.firstName,
      email:$scope.email,
      comment:$scope.comment,
      date:currDate
    };
    if ($scope.lastName!=""){
      currentComment.lastName=$scope.lastName;
    }
    CommentFactory.commentList.push(currentComment);
  }

  $scope.createTable=function(){
    var ajaxRespons = $http.get('connectDb.php?request=createTable');

    ajaxRespons.success(function (data, status, headers, config) {
        alert(data);
    });

    ajaxRespons.error(function (data, status, headers, config) {
        alert(data);
    });
  }

  $scope.submitComment=function(){
    if (!$scope.commentObj.firstName || !$scope.commentObj.email || !$scope.commentObj.comment){
      alert("Please complete all required fields");
      return;
    }

    if (!$scope.commentObj.subject){
      $http.post('insertComment.php', {fullName:$scope.commentObj.firstName, email:$scope.commentObj.email, comment:$scope.commentObj.comment}).success(function(data, status, headers, config){
            console.log("inserted Successfully");
        });
    } else {
      $http.post('insertComment.php', {fullName:$scope.commentObj.firstName, email:$scope.commentObj.email, comment:$scope.commentObj.comment, subject:$scope.commentObj.subject}).success(function(data, status, headers, config){
            console.log("inserted Successfully with subject");
        });
    }

    $scope.commentObj={};
  }

})
.directive("scroll", function ($window,DesignFactory) {
    return function(scope, element, attrs) {

        angular.element($window).bind("scroll", function() {
            toolbarHeight=DesignFactory.toolbarHeight+1;
            if (this.pageYOffset >= toolbarHeight) {
                 scope.boolChangeClass = true;
                //  console.log('Scrolled below header.');
             } else {
                 scope.boolChangeClass = false;
                //  console.log('Header is in view.');
             }
            scope.$apply();
        });
    };
});
