const hex2str = ((hexx) => {
    let hex = hexx.toString();//force conversion
    let str = '';
    for (let i = 0; (i < hex.length && hex.substr(i, 2) !== '00'); i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
})

const str2hex = ((str) => {
    let arr = [];
    for (let i = 0, l = str.length; i < l; i ++) {
        let hex = Number(str.charCodeAt(i)).toString(16);
        arr.push(hex);
    }
    return arr.join('');
})

const hex2a = ((str) => {
	let arr_hex = str.split('');
	let reformattedArray = arr_hex.map(char => {
		const replacements = {
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
})

const a2hex = ((str) => {
	let arr_hex = str.split('');
	let reformattedArray = arr_hex.map(char => {
		const replacements = {
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
})

const validURL = ((url) => {
	console.log(url)
	try {
		console.log(new URL(url));
	} catch (e) {
		return false;
	}
	console.log(true)
	return true;
})

const encodeURL = (() => {
	let input_url = document.getElementById("input").value;

    let originalURL = "https://" + input_url.replace('https://', '').replace('http://', '')
    
	if (validURL(originalURL) || document.getElementById("override").checked) {
		new_url = lengthen(originalURL);
		document.getElementById("output").value = new_url;
	} else {
		document.getElementById("output").value = "URL is not valid, please try again.";
	}
})

const getRandom = ((list) => {
    return list[Math.floor((Math.random()*list.length))];
})

const lengthen = ((url, minLength = 200) => {
    const letters = ['a', 'à', 'á', 'â', 'ã', 'ä', 'å', 'æ', 'A', 'À', 'Á', 'Â', 'Ã', 'Ä', 'Å', 'Æ']
    
	let baseURL = "https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.com/";

    let filler = 'a';
    
	if (validURL("https://" + url.replace('https://', '').replace('http://', ''))) {
		new_url = hex2a(str2hex(url));
        
		while (new_url.length + filler.length < minLength) {
			filler = filler + getRandom(letters);
		}
		return baseURL + filler + "?" + new_url;
	} else {
		throw new Error("The URL passed is not valid.");
	}
})

const copyURL = (() => {
	let copyText = document.getElementById("output");
	copyText.select();
	copyText.setSelectionRange(0, 99999); /* For mobile devices */
	document.execCommand("copy");
})