function getShortMessages (messages) {
	return messages.map(function(mObj){
		return mObj.message
	}).filter(function (actualMessageStr) {
		return actualMessageStr.length < 50
	})
}

module.exports = getShortMessages;