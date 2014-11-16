function loadUsers(userIds, load, done) {
  var ready = 0
  var users = []
  userIds.forEach(function(id, index) {
    load(id, function(user) {
      users[index] = user
      if (++ready === userIds.length) return done(users)
    })
  })
}

module.exports = loadUsers
