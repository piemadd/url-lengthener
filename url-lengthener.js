function hex2str(hexx) {
    var hex = hexx.toString();//force conversion
    var str = '';
    for (var i = 0; (i < hex.length && hex.substr(i, 2) !== '00'); i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}

function str2hex(str) {
  var arr = [];
  for (var i = 0, l = str.length; i < l; i ++) {
    var hex = Number(str.charCodeAt(i)).toString(16);
    arr.push(hex);
  }
  return arr.join('');
}

function hex2a(str) {
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

function a2hex(str) {
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

function validURL(url) {
	try {
		new URL(url);
	} catch (e) {
		return false;
	}
	return true;
};

function encodeURL() {
	let input_url = document.getElementById("input").value;
	if (validURL(input_url) || validURL("https://" + input_url)) {
		new_url = hex2a(str2hex(input_url));
		while (new_url.length < 200) {
			new_url = "áaaÂ" + new_url;
		}
		document.getElementById("output").value = "https://aaa.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.com/a?" + new_url;
	} else {
		document.getElementById("output").value = "URL is not valid, please try again.";
	}
}

function lengthen(url) {
	if (validURL(url) || validURL("https://" + url)) {
		new_url = hex2a(str2hex(url));
		while (new_url.length < 200) {
			new_url = "áaaÂ" + new_url;
		}
		return "https://aaa.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.com/a?" + new_url;
	} else {
		throw new Error("The URL passed is not valid.");
	}
}

function copyURL() {
	var copyText = document.getElementById("output");
	copyText.select();
	copyText.setSelectionRange(0, 99999); /* For mobile devices */
	document.execCommand("copy");
}