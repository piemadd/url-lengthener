const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let url_string = Array.from(urlParams.keys())[0];

window.location.replace(hex2str(a2hex(url_string)))