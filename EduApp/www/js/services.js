angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Liam Williams',
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
