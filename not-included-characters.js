// Generated by CoffeeScript 2.7.0
(function () {
  var MessageEvents, allString, message, notIncludedCharacters;
  ({
    allString
  } = require('types.js'));
  MessageEvents = require('message-events');
  message = new MessageEvents();
  message.format('error', function (text) {
    return {
      sender: 'not-included-characters',
      type: 'error',
      text: text
    };
  }); // collects all characters from string that are not included in the include string
  // always returns an array, containing the not included characters if any where found

  notIncludedCharacters = function (string, include = '') {
    var char, found, i, len;
    found = [];

    if (!allString(string, include)) {
      message.error('not-included-characters requires string type arguments');
    } else {
      for (i = 0, len = string.length; i < len; i++) {
        char = string[i];

        if (include.indexOf(char) < 0) {
          if (found.indexOf(char) < 0) {
            found.push(char);
          }
        }
      }
    }

    return found;
  };

  notIncludedCharacters.onError = function (handler) {
    return message.on('error', handler);
  };

  module.exports = notIncludedCharacters;
}).call(this);