var baseURL = "";

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
	console.log(document.getElementById("path").checked)
	if (document.getElementById("path").checked == true) {
		baseURL = "https://api.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.com/";
	} else {
		baseURL = "https://aaa.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.com/a?";
	}
	if (validURL(input_url)) {
		new_url = hex2a(str2hex(input_url));
		while (new_url.length < 200) {
			new_url = "áaaÂ" + new_url;
		}
		document.getElementById("output").value = baseURL + new_url;
	} else if (validURL("https://" + input_url)) {
		new_url = hex2a(str2hex("https://" + input_url));
		while (new_url.length < 200) {
			new_url = "áaaÂ" + new_url;
		}
		document.getElementById("output").value = baseURL + new_url;
	} else if (document.getElementById("override").checked) {
		new_url = hex2a(str2hex("https://" + input_url));
		while (new_url.length < 200) {
			new_url = "áaaÂ" + new_url;
		}
		document.getElementById("output").value = baseURL + new_url;
	} else {
		document.getElementById("output").value = "URL is not valid, please try again.";
	}
}

function lengthen(url) {
	if (validURL(url)) {
		new_url = hex2a(str2hex(input_url));
		while (new_url.length < 200) {
			new_url = "áaaÂ" + new_url;
		}
		return baseURL + new_url;
	} else if (validURL("https://" + url)) {
		new_url = hex2a(str2hex("https://" + input_url));
		while (new_url.length < 200) {
			new_url = "áaaÂ" + new_url;
		}
		return baseURL + new_url;
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