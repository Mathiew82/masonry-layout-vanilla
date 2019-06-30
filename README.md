# masonry-layout-vanilla

![](images/logo-min.png)

Simple masonry developed in javascript vanilla.

&nbsp;
### Enable it in your project:

You only need to download the package, include files in your project js/masonry.min.js and css/masonry.min.css and follow the next steps.

#### CSS:

    Copy-paste the stylesheet <link> into your <head> before all other stylesheets to load our CSS.

```html
  <link rel="stylesheet" href="css/masonry.min.css" />
```

#### JavaScript:

    Place the following <script>s near the end of your pages, right before the closing </body> tag, to enable them.

```html
  <!-- Include masonry.js file -->
  <script src="js/masonry.min.js"></script>
  <!-- Include your js file -->
  <script src="js/YOUR_JS_FILE.js"></script>

</body>
```

#### HTML:

    This is the necessary html structure.

```html
<div id="wrapper-masonry">
  <div id="masonry">
    <!-- Include a div or an image here -->
    <!-- Example -->
    <img src="images/photo-1.jpeg" class="image" />
    <img src="images/photo-2.jpeg" class="image" />
    ...
  </div>
</div>
```

    There must be a parent div (example: #wrapper-masonry), a container (example: #masonry), and the items (example: .image). The containers must have an id, the items a class.

    To use more than one on the same page, you should only use different names for the selectors:

```html
<div id="wrapper-masonry">
  <div id="masonry">
    <!-- Include a div or an image here -->
    <!-- Example -->
    <img src="images/photo-1.jpeg" class="image" />
    <img src="images/photo-2.jpeg" class="image" />
    ...
  </div>
</div>

<div id="wrapper-masonry-2">
  <div id="masonry-2">
    <!-- Include a div or an image here -->
    <!-- Example -->
    <div class="card">...</div>
    <div class="card">...</div>
    ...
  </div>
</div>
```

    Then in your script, when calling the method:

```js
// This would be the masonry of cards
fecthMasonry('masonry', 'image', 4);
// This would be the masonry of images
fecthMasonry('masonry-2', 'card', 3);
```

&nbsp;
## Documentation

| Parameter             | Type         | Description                              |
|:----------------------|:-------------|:-----------------------------------------|
| First parameter       | String       | The id of the container of items         |
| Second parameter      | String       | The class of the items                   |
| Third parameter       | Number       | Number of columns                        |
