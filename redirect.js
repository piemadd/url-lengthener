const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let url_string = Array.from(urlParams.keys())[0];

url = hex2str(a2hex(url_string))

link=document.createElement('meta');
link.httpEquiv='refresh';
link.content='0; URL=' + hex2str(a2hex(url_string));

document.getElementsByTagName('head')[0].appendChild(link);