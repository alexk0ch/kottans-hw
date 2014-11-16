function checkUsersValid (goodUsers) {
	return function (submittedUsers) {
		return submittedUsers.every(function (userSubm) {
			return goodUsers.some(function (user) {
				return user.id == userSubm.id
			});
		})
	}
}

module.exports = checkUsersValid;