// console.log(
// `Hello, ${process.argv[2]}!
// Your name lowercased is \"${process.argv[2].toLowerCase()}\".`)

// var inputs = process.argv.slice(2);
// var result = inputs.map((arrStr) => (arrStr[0]))
//                     .reduce((sum, a) => sum.concat(a));

// console.log(`[${inputs}] becomes "${result}"`)

// var nums = process.argv.slice(2);

// console.log(
// 	`The minimum of [${nums}] is ${Math.min(...nums)}`
// )

// module.exports = function average(...args) {
//     return args.reduce( (sum, a)=> sum += a )/args.length
// };

// module.exports = (lower=0, upper=1) => (lower+upper)/2

// module.exports = (str, count=str.length) =>
// 	str + '!'.repeat(count)


console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`)

function html(str, ...vals) {
	var input = ['\'', '"', '<', '>', '&'],
	encoded = ["&#39;", "&quot;", "&lt;", "&gt;", "&amp;"],
	re = new RegExp(input.join('|'), 'g'),
	howToReplace = (matched) => encoded[input.indexOf(matched)],
	vals = vals.map( (val) => val.replace(re, howToReplace) ),
	res = [];

	for (var i = 0, len = vals.length; i<len; i++) 
		res.push(str[i], vals[i]);
	res.push(str[len]);
	
	return res.join('')
}