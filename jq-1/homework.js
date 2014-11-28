var my_$ = function(selector) { return new MyQuery(selector) };

function MyQueryWrapper () {
	Array.call(this);
	var _this = this;

	this.setProp = function (val, prop) {
		if (!val) {
			return _this.map(function (node) {
				var prp = node.style[prop];
				return (prp.length ? parseFloat(prp) : 0) + 'px';
			})
		}
		_this.forEach( function (node) { node.style[prop] = val })
		return _this
	}

	this.width = function (val) { return _this.setProp(val, 'width')}
	this.height = function (val) { return _this.setProp(val, 'height')}

	this.css = function (/**/) {
		var args = [].slice.call(arguments);

		if (args.length === 2) {
			if (args[0].constructor === String) {
				_this[args[0]] ? _this[args[0]](args[1]) : 'No Method';
			} else {
				for (var key in args[0]) {
					setTimeout(function () {
						_this[key](args[0][key])
					}, args[1])					
				}
			}
		}

		if (args.length === 1) {
			for (var key in args[0]) {
				if (args[0].hasOwnProperty(key)) {
					_this[key](args[0][key])
				}
			}
		}

		if (args.length === 3) {
			_this[args[0]] 
			? setTimeout(function () {
				_this[args[0]](args[1]);
			}, args[2])
			: 'No Method'
		}

		return _this
	}
}

MyQueryWrapper.prototype = Object.create(Array.prototype);

var MyQuery = function(selector) {
	var _this = this;
	MyQueryWrapper.call(this);	
    ([].slice.call(document.querySelectorAll(selector)))
    	.forEach(function (node) {_this.push(node);})
    return _this;
};

MyQuery.prototype = Object.create(MyQueryWrapper.prototype);