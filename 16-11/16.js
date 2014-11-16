function getDependencies(tree, total) {
  var deps = tree.dependencies;
  var total = total || {};
  for (var key in deps) {
  	total[key + '@' + deps[key].version] = true;
  	getDependencies(deps[key], total);
  }
  return Object.keys(total).sort();
}

module.exports = getDependencies