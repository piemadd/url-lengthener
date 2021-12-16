const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let url_string = Array.from(urlParams.keys())[0];

url = hex2str(a2hex(url_string))

let banned_urls = ["moonfruit.com", "yolasite.com", "yefojeg743.wixsite.com", "lignemobile718712.wixsite.com", "xsph.ru", "sfrmail78.wixsite.com", "vehehow651.wixsite.com", "havatravel.vn", "rreception31.wixsite.com", "forfaitmobile11871.wixsite.com", "xprswebsite.com"]

for (let i = 0; i < banned_urls.length; i++) {
	console.log(url.indexOf(banned_urls[i]))
	if (url.indexOf(banned_urls[i]) > -1) {
		url = "https://aaa.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.com/bad_site.txt"
		break;
	}
}

console.log(url);

link=document.createElement('meta');
link.httpEquiv='refresh';
link.content='0; URL=' + url;

console.log(url);

document.getElementsByTagName('head')[0].appendChild(link);