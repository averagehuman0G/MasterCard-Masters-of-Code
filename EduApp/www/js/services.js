angular.module('starter.services', [])
.service('kiddyServices',function($http){
  var submitPayment =  function(postDetail, callback,errorCallback){
    $http({
        method: "POST",
        headers: {"Content-Type": 'application/xml'},
        url: 'http://dmartin.org:8024/moneysend/v2/transfer',
        data: postDetail
    }).then(callback, errorCallback)
    
   }
    
    return {
    submitPayment: submitPayment
  };
})
 .filter('split', function() {
        return function(input, splitChar, splitIndex) {
            // do some bounds checking here to ensure it has that index
            return input.split(splitChar)[splitIndex];
        }
    })
.service('qresponseService', function() {
  var qAnswerList = [];

  var addQAnswer = function(newObj) {
      qAnswerList.push(newObj);
  };

  var getQAnswers = function(){
      return qAnswerList;
  };
  
  var clearQAnswers = function(){
      qAnswerList=[];
  };
  var currentKid = {};
  var amt;
  var earnedAmt;
  var saveKidInfo = function(chatObj,a){
    currentKid = chatObj;
    amt = a;
    return;
  }
  var saveEarnedAmount = function(eamt){
   earnedAmt = eamt;
  }
  
  var getEarnedAmount = function(){
   return earnedAmt;
  }
  
  var getAmount = function(){
    return amt;
  }
  
  var setAmount = function(amt1){
     amt = amt1;
  }
  
  var getCurrentKid = function(){
    return currentKid;
  }

  return {
    setAmount:setAmount,
    getEarnedAmount:getEarnedAmount,
    saveEarnedAmount:saveEarnedAmount,
    addQAnswer: addQAnswer,
    getQAnswers: getQAnswers,
    clearQAnswers:clearQAnswers,
    saveKidInfo:saveKidInfo,
    getAmount:getAmount,
    getCurrentKid:getCurrentKid
  };

})
.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Joe Williams',
    age: 'Age: 5',
    face: 'img/liam.png'
  }, {
    id: 1,
    name: 'Helena Williams',
    age: 'Age: 7',
    face: 'img/helena.png'
  }, {
    id: 2,
    name: 'Heather Williams',
    age: 'Age: 8',
    face: 'img/Heather.png'
  }, {
    id: 3,
    name: 'Jacob Williams',
    age: 'Age: 12',
    face: 'img/jacob.jpeg'
  }
  ];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
