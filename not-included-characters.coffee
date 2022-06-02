{ allString }	= require 'types.js'
MessageEvents	= require 'message-events'



message = new MessageEvents

message.format 'error', (text) ->
	sender	: 'not-included-characters'
	type		: 'error'
	text		: text


#
# collects all characters from string that are not included in the include string
# always returns an array, containing the not included characters if any where found
#
notIncludedCharacters = (string, include= '') ->
	found = []
	if not (allString string, include)
		message.error 'not-included-characters requires string type arguments'
	else for char in string
		if include.indexOf(char) < 0
			if found.indexOf(char) < 0
				found.push char
	return found


notIncludedCharacters.onError = (handler) -> message.on 'error', handler

module.exports = notIncludedCharacters