# masonry-layout-vanilla

![](images/logo-min.png)

<div style='color:red; margin: 0 0 50px 0;'><span style="margin-right:10px;">⛔️</span> <b>IMPORTANT:</b> Do not download it yet. It lacks some important details.</div>

<div style="color:#ccc;">
Simple masonry developed in javascript vanilla.

&nbsp;
### Enable it in your project:

You only need to download the files:

[masonry-layout-vanilla.js](https://github.com/Mathiew82/masonry-layout-vanilla/blob/master/js/masonry-layout-vanilla.js) *unminify js*
&nbsp;
or
&nbsp;
[masonry-layout-vanilla.min.js](https://github.com/Mathiew82/masonry-layout-vanilla/blob/master/js/masonry-layout-vanilla.min.js) *minify js*

and

[masonry-layout-vanilla.min.css](https://github.com/Mathiew82/masonry-layout-vanilla/blob/master/css/masonry-layout-vanilla.min.css) *minify css*

Include files in your project and follow the next steps.

**Note:** In the index.html you have available 2 demos and a test, which will serve as a guide to use the masonry.

#### CSS:

Copy-paste the stylesheet < link > into your < head > before all other stylesheets to load our CSS.

```html
<link rel="stylesheet" href="css/masonry-layout-vanilla.min.css" />
```

#### JavaScript:

Place the following < script >s near the end of your pages, right before the closing </body> tag.

```html
  <!-- Include masonry-layout-vanilla.min.js file -->
  <script src="js/masonry-layout-vanilla.min.js"></script>
  <!-- Include your js file -->
  <script src="js/YOUR_JS_FILE.js"></script>

</body>
```

#### HTML:

This is the necessary html structure.

```html
<div class="wrapper-masonry">
  <div id="masonry">
    <!-- Include a div or image here -->
    <!-- Example -->
    <img src="images/photo-1.jpeg" class="image" />
    <img src="images/photo-2.jpeg" class="image" />
    ...
  </div>
</div>
```

There must be a parent div *(example: **#wrapper-masonry)***, a container *(example: **#masonry**)*, and the items *(example: **.image**)*. The container must have an id, the items a class.

To use more than one on the same page, you should only use different names for the selectors:

```html
<div class="wrapper-masonry">
  <div id="masonry">
    <img src="images/photo-1.jpeg" class="image" />
    <img src="images/photo-2.jpeg" class="image" />
    ...
  </div>
</div>

<div class="wrapper-masonry">
  <div id="masonry-2">
    <div class="card">...</div>
    <div class="card">...</div>
    ...
  </div>
</div>
```

Then in your script, when calling the method:

```js
// This would be the masonry of images
fecthMasonry('masonry', 'image', 4);
// This would be the masonry of cards
fecthMasonry('masonry-2', 'card', 3);
```

&nbsp;
## Documentation

| Parameter             | Type         | Description                              |
|:----------------------|:-------------|:-----------------------------------------|
| First parameter       | String       | The id of the container of items         |
| Second parameter      | String       | The class of the items                   |
| Third parameter       | Number       | Number of columns                        |
</div>