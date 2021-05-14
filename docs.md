# URL Lengthener - Docs

Using the URL lengthener is super easy and totally free. How? Everything is actually encoded into the URL served. This is how you do it:

#### Get the script:

The script is located at [`/url-lengthener.js`](/url-lengthener.js) of this site or you can use the mirror from JSDelivr which is located at [https://cdn.jsdelivr.net/npm/url-lengthener@latest/url-lengthener.min.js](https://cdn.jsdelivr.net/npm/url-lengthener@latest/url-lengthener.min.js). If you would like to link it directly into your website, place either of the two lines in the `<head>` section of your site, with the JSDeliver file being quicker (though not by much) to fetch and the one from this site being more updated:

```html
<script src="https://cdn.jsdelivr.net/npm/url-lengthener@latest/url-lengthener.min.js"></script>
```
```html
<script src="https://aaa.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.com/url-lengthener.min.js"></script>
```
If you prefer the unminified version of the code, just remove the `.min` from whichever link you are using.

#### Use the script:

Using the script is quite simple, as it is less than 115 lines in length. Encoding a url takes two steps, converting from a url to base16, and then base16 to the string of "A"s. While you could call these functions (`str2hex()` and `hex2a()` respectively), the easiest way to get a URL encoded is to use the `lengthen(url)` function, where _url_ is the URL which you would like to lenghten. The function then returns a lenghened URL, which when visited, will redirect to it's final destination.

Using the script in Node.js is not currently possible (through npm that is), but feel free to add support via a PR [on Github](https://github.com/pieromqwerty/url-lengthener). You could also go the lazy route and paste the js file's contents inside of your js file.

#### API

The API is currently planned, but check back in a few days, as it will probably be available by then.