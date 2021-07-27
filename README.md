# URL Lengthener

Are you tired of your URLs being just too darn short? Worry no further, as [aaa.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.com](https://aaa.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.com/) has got your back. No need to be anxious about people thinking the size of your URL is too small, as it will guaranteed be the largest one around. So what are you waiting for? Give it a go!

Your date will be impressed with the sheer size of your URLs, and forget having to take time spelling them out to your coworkers; just yell at the top of your lungs. Want to automate it? Check out the docs for more info.

Disclaimer: Since there is a maximum letter count to a URL, there is a slight chance your resulting URL will be too long to use. No worries, try running it through a site like [bit.ly](https://bitly.com/) and then paste that one over here. Every resulting URL ends up having a minimum number of characters, so your URL will still be plenty long!

Links:
- Made with ❤️ by [Piero Maddaleni](https://piemadd.com/)
- [Website source code on Replit](https://replit.com/@piemadd/url-lengthener)
- [Project source code on Github](https://github.com/pieromqwerty/url-lengthener)
- [Package on NPM](https://www.npmjs.com/package/url-lengthener).

# URL Lengthener - Docs

Using the URL lengthener is super easy and free. How? Everything is encoded into the URL served. This is how you do it:

### Get the script:

The script is located at [`/url-lengthener.js`](/url-lengthener.js) of this site, or you can use the mirror from JSDelivr, located at [https://cdn.jsdelivr.net/npm/url-lengthener@latest/url-lengthener.min.js](https://cdn.jsdelivr.net/npm/url-lengthener@latest/url-lengthener.min.js). If you would like to link it directly into your website, place either of the two lines in the `<head>` section of your site, with the JSDeliver file being quicker (though not by much) to fetch and the one from this site being more updated:

```html
<script src="https://cdn.jsdelivr.net/npm/url-lengthener@latest/url-lengthener.min.js"></script>
```
```html
<script src="https://aaa.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.com/url-lengthener.min.js"></script>
```
If you prefer the unminified version of the code, remove the `.min` from whichever link you are using.

### Use the script (web):

Using the script is quite simple, as it is less than 115 lines in length. Encoding a URL takes two steps, converting from a URL to base16 and then base16 to the string of "A"s. While you could call these functions (`str2hex()` and `hex2a()` respectively), the easiest way to get a URL encoded is to use the `lengthen(url)` function, where _url_ is the URL which you would like to lengthen. The function then returns a lengthened URL, which will redirect to its final destination when visited.

### Use the script (Node):

1. Install the npm package (`url-lengthener`)
2. Require the library:
```js
const urlLengthener = require("url-lengthener")
```
3. Use the `lenghten()` function to run the code:
```js
let lengthened_url = urlLengthener.lengthen("https://piemadd.com/");
console.log(lengthened_url);
```
To have the returned URL use a PATH instead instead of a URL variable, use `lengthenAsPath()` instead. This increases reliability on sites like Twitter and allows for the lengthened URL to be visited in browsers with Javascript disabled. The solution is drop-in with the example above, instead resulting in something like this:
```js
let lengthened_url = urlLengthener.lengthenAsPath("https://piemadd.com/");
console.log(lengthened_url);
```

### API

It's simple, ok? You send a `GET` request here:
```
https://api.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.com/a?url=[YOUR_URL_HERE]
```

`[YOUR_URL_HERE]` is where you put the URL you want to lengthen. A plaintext response with the lengthened URL is returned unless the URL is invalid, which instead `INVALID_URL` is returned. 