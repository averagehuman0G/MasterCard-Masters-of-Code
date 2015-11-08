angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats,$ionicPopup, $timeout) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  console.log('22...');
  $scope.showPopup = function() {
    console.log('111');
  $scope.data = {}

  // An elaborate, custom popup
  var myPopup = $ionicPopup.show({
    template: '<input type="password" ng-model="data.wifi">',
    title: 'Enter your passcode to unlock',
    subTitle: '',
    scope: $scope,
    buttons: [
      {
        text: '<b>Unlock</b>',
        class:'button icon ion-gear-a',
        type: 'button-positive',
        onTap: function(e) {
          if (!$scope.data.wifi) {
            //don't allow the user to close unless he enters wifi password
            e.preventDefault();
          } else {
            return $scope.data.wifi;
          }
        }
      }
    ]
  });
  myPopup.then(function(res) {
    console.log('Tapped!', res);
    $timeout(function() {
      $scope.chats = Chats.all();  }, 500);
  });
  /*$timeout(function() {
     myPopup.close(); //close the popup after 3 seconds for some reason
  }, 3000);*/
 };

  $scope.showPopup();
  
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats,qresponseService) {
  console.log('$stateParams.chatId -->',$stateParams.chatId);
  $scope.showSuccess = false;
  $scope.chat = Chats.get($stateParams.chatId);
  
  //Add any parent submission info..
  $scope.saveFor = function(chatObj,amt){
    console.log('-->>',chatObj,amt);
    qresponseService.saveKidInfo(chatObj,amt);
    $scope.showSuccess = true
   // alert("alert");
  }
  
  
  
  $scope.settings = {
    enableFriends: true
 
  };
})

.controller('CardsCtrl', function($scope, $ionicSwipeCardDelegate,$state,$timeout,qresponseService,kiddyServices) {
  var cardTypes = [{ title: 'Swipe down to clear the card', image: 'img/pic.png',id:1 },
    { title: 'Where is this?', image: 'img/max.png',id:2 },
    { title: 'What kind of grass is this?', image: 'img/mike.png',id:3 },
    { title: 'What beach is this?', image: 'img/perry.png',id:4 },
    { title: 'What kind of clouds are these?', image: 'img/liam.png',id:5 }];
    
    $scope.showCards = true;

  $scope.cards = Array.prototype.slice.call(cardTypes, 0, 0);

  $scope.cardSwiped = function(index) {
    $scope.addCard();
  };

  $scope.cardDestroyed = function(index) {
    $scope.cards.splice(index, 1);
  };
  var startIndex = 0;
  var postData1 = "<TransferRequest>" +
      "   <LocalDate>0410</LocalDate>" +
      "   <LocalTime>161222</LocalTime>   <TransactionReference>" ;
    //4270411009025101043  
  var postData2 = "</TransactionReference>" +
      "   <SenderName>John Doe</SenderName>" +
      "   <SenderAddress>" +
      "      <Line1>123 Main Street</Line1>" +
      "      <Line2>#5A</Line2>" +
      "      <City>Arlington</City>" +
      "      <CountrySubdivision>VA</CountrySubdivision>" +
      "      <PostalCode>22207</PostalCode>" +
      "      <Country>USA</Country>" +
      "   </SenderAddress>" +
      "   <FundingCard>" +
      "      <AccountNumber>5184680430000006</AccountNumber>" +
      "      <ExpiryMonth>11</ExpiryMonth>" +
      "      <ExpiryYear>2017</ExpiryYear>" +
      "   </FundingCard>" +
      "   <FundingAmount>" +
      "      <Value>10</Value>" +
      "      <Currency>840</Currency>" +
      "   </FundingAmount>" +
      "   <ReceiverName>Jose Lopez</ReceiverName>" +
      "   <ReceiverAddress>" +
      "      <Line1>Pueblo Street</Line1>" +
      "      <Line2>PO BOX 12</Line2>" +
      "      <City>El PASO</City>" +
      "      <CountrySubdivision>TX</CountrySubdivision>" +
      "      <PostalCode>79906</PostalCode>" +
      "      <Country>USA</Country>" +
      "   </ReceiverAddress>" +
      "   <ReceiverPhone>1800639426</ReceiverPhone>" +
      "   <ReceivingCard>" +
      "      <AccountNumber>5184680430000006</AccountNumber>" +
      "   </ReceivingCard>" +
      "   <ReceivingAmount>" +
      "      <Value>10</Value>" +
      "      <Currency>840</Currency>" +
      "   </ReceivingAmount>" +
      "   <Channel>W</Channel>" +
      "   <UCAFSupport>false</UCAFSupport>" +
      "   <ICA>009674</ICA>" +
      "   <ProcessorId>9000000442</ProcessorId>" +
      "   <RoutingAndTransitNumber>990442082</RoutingAndTransitNumber>" +
      "   <CardAcceptor>" +
      "      <Name>My Local Bank</Name>" +
      "      <City>Saint Louis</City>" +
      "      <State>MO</State>" +
      "      <PostalCode>63101</PostalCode>" +
      "      <Country>USA</Country>" +
      "   </CardAcceptor>" +
      "   <TransactionDesc>P2P</TransactionDesc>" +
      "   <MerchantId>123456</MerchantId>" +
      "</TransferRequest>";
      var responseStr = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?><Transfer><RequestId>515541</RequestId><TransactionReference>4270811009025101043</TransactionReference><TransactionHistory><Transaction><Type>FUNDING</Type><SystemTraceAuditNumber>001439</SystemTraceAuditNumber><NetworkReferenceNumber>111829707</NetworkReferenceNumber><SettlementDate>1108</SettlementDate><Response><Code>00</Code><Description>Approved or completed successfully</Description></Response><SubmitDateTime>2015-11-08T06:21:42Z</SubmitDateTime></Transaction><Transaction><Type>PAYMENT</Type><SystemTraceAuditNumber>001440</SystemTraceAuditNumber><NetworkReferenceNumber>414182501</NetworkReferenceNumber><SettlementDate>1108</SettlementDate><Response><Code>00</Code><Description>Approved or completed successfully</Description></Response><SubmitDateTime>2015-11-08T06:21:42Z</SubmitDateTime></Transaction></TransactionHistory><SanctionScore>000</SanctionScore></Transfer>";
  $scope.addCard = function() {
    if(startIndex >= cardTypes.length){
       console.log("no more cards ---> ");
       //alert("no more cards ---> ");
       
       //invoke the service call based on this...
      qresponseService.clearQAnswers();
      $scope.showCards = false;
      var rNum = '4'+parseInt(Math.random()*100000000000000000, 19);
      console.log('rNum -->',rNum);
      var postData = postData1+rNum+postData2;
      $timeout(function(){
        console.log("success time out --->");
        $scope.showCards = true;
        $state.go('tab.endquestions');
      }, 500);
      //Error --> Mixed Content: The page at 'https://edu-andreolf.c9users.io/EduApp/www/#/tab/questions/end' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://dmartin.org:8024/moneysend/v2/transfer'. This request has been blocked; the content must be served over HTTPS.
      /*kiddyServices.submitPayment(postData,function(response){
        alert("success -->");
        console.log('response ->',response,arguments);
      },function(error){
        console.log('errror -->',error);
      });*/
      //$state.go('tab.endquestions');
    }else{
    //console.log("addCard ---> ",cardTypes,' answer length ->',qresponseService.getQAnswers());
    var newCard = cardTypes[startIndex];
    newCard.idx = Math.random();
    $scope.cards.push(angular.extend({}, newCard));
    startIndex++;
    }
    
  }
})

.controller('CardCtrl', function($scope, $ionicSwipeCardDelegate,qresponseService) {
  $scope.goAway = function(currentCard,index,answer) {
    var card = $ionicSwipeCardDelegate.getSwipebleCard($scope);
    //console.log("CardCtrl ---->>> ",index,currentCard,card);
    card.response = answer;
    qresponseService.addQAnswer(card);
    card.swipe();
  };
})
.controller('EndQuestionsCtrl', function($scope, $ionicSwipeCardDelegate,qresponseService) {
  console.log('EndQuestionsCtrl -->');
})

.controller('SettingsCtrl', function($scope, $ionicSwipeCardDelegate,qresponseService) {
  console.log('SettingsCtrl -->');
  $scope.settings = {
    enableNotifications: true
 
  };
})



.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
 
  };
  
  
  
});

