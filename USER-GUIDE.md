# User Guide

This is a barebones guide for the software users of this webcomic. Here I will explain how to make a simple comic page, because this is the only part you will need to know to make your own page and not just use the template...

## Inserting images

Inserting an image might seem easy, but don't get fooled by the simplicity! It is actually not that simple...

`<img src="PATH/TO/YOUR/IMAGE.extension" style="max-width: 100%;">`

That was an example of a simple image, but there is a chance that you will need to center the image which will happen pretty often since you are making a webcomic.

In this case you will need to do this:

`<img src="PATH/TO/YOUR/IMAGE.extension" style="display: block; margin-left: auto; margin-right: auto; max-width: 100%;>`

Now this is way longer than the previous part of code, and this is the interresting part about html.

But now you might think where to place it in the tamplate? Let me show you...


```
<div class="comic-content">
</div>
```

That is the place where you will put the image, here is an example:

```
<div class="comic-content">
  <img src="PATH/TO/YOUR/IMAGE.extension" style="display: block; margin-left: auto; margin-right: auto; max-width: 100%;>
</div>
```

This is how to insert an image, but you will need a template where to place the image and also the place where you will find the previous part of code in. So here is the template for a comic page:

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stickman Stories - </title>
    <link rel="icon" href="images/icon.png" type="image/png">
    <style>
        body {
            font-family: Didot, serif;
            background: linear-gradient(to bottom, gray, silver);
            background-attachment: Fixed;
            margin: 0;
            padding: 20px;
            color: #333;
        }
        header {
            color: black;
            text-align: center;
        }
        .comic-list {
            display: flex;
            color: white;
            flex-wrap: wrap;
            justify-content: center;
            margin-top: 20px;
        }
        .comic-content {
            background: gray;
            color: black;
            padding: 20px;
            box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
            margin-bottom: 20px;
        }
        footer {
            text-align: center;
            margin-top: 20px;
            font-size: 12px;
            color: #666;
        }
    </style>
</head>
<body>

<header>
    <h1>Stickman Stories</h1>
    <hr>
</header>

<div class="comic-content">
</div>

<div class="comic-list">
    <a href="index.html">Home Page</a>
</div>

<footer>
    &copy; 2024 Stickman Stories. All rights reserved.
</footer>

</body>
</html>
```

Also you will need to go to the index.html which is basically the home page and also insert a link to your comic page which should be located in the root folder for this case.

```
```
