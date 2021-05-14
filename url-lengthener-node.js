var exports = {"__esModule": true};

const hex2str = (hexx) => {
    var hex = hexx.toString();//force conversion
    var str = '';
    for (var i = 0; (i < hex.length && hex.substr(i, 2) !== '00'); i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}

const str2hex = (str) => {
  var arr = [];
  for (var i = 0, l = str.length; i < l; i ++) {
    var hex = Number(str.charCodeAt(i)).toString(16);
    arr.push(hex);
  }
  return arr.join('');
}

const hex2a = (str) => {
	let arr_hex = str.split('');
	let reformattedArray = arr_hex.map(char => {
		replacements = {
			'0': 'a',
			'1': 'à',
			'2': 'á',
			'3': 'â',
			'4': 'ã',
			'5': 'ä',
			'6': 'å',
			'7': 'æ',
			'8': 'A',
			'9': 'À',
			'a': 'Á',
			'b': 'Â',
			'c': 'Ã',
			'd': 'Ä',
			'e': 'Å',
			'f': 'Æ'
		};
		return replacements[char];
	})

	return reformattedArray.join('');
}

const a2hex = (str) => {
	let arr_hex = str.split('');
	let reformattedArray = arr_hex.map(char => {
		replacements = {
			'a': '0',
			'à': '1',
			'á': '2',
			'â': '3',
			'ã': '4',
			'ä': '5',
			'å': '6',
			'æ': '7',
			'A': '8',
			'À': '9',
			'Á': 'a',
			'Â': 'b',
			'Ã': 'c',
			'Ä': 'd',
			'Å': 'e',
			'Æ': 'f'
			
		};
		return replacements[char];
	})

	return reformattedArray.join('');
}

const validURL = (url) => {
	try {
		new URL(url);
	} catch (e) {
		console.error(e);
		return false;
	}
	return true;
};

const lengthen = (url) => {
	if (validURL(url)) {
		new_url = hex2a(str2hex(url));
		while (new_url.length < 200) {
			new_url = "áaaÂ" + new_url;
		}
		return "https://aaa.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.com/a?" + new_url;
	} else {
		throw new Error("The URL passed is not valid.");
	}
}

exports.hex2str = hex2str;
exports.str2hex = str2hex;
exports.hex2a = hex2a;
exports.a2hex = a2hex;
exports.validURL = validURL;
exports.lengthen = lengthen;

console.log(exports)

console.log("1.1.7")
console.log("imported!");