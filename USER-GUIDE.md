# User Guide

This is a barebones guide for the software users of this webcomic. Here I will explain how to make a simple comic page, because this is the only part you will need to know to make your own page and not just use the template...

## Requierments

You might think you don't have anything else to have to host your own comic website, but there is still something you need to have before you start your journey in to the world of fun drawing and sharing your drawings with your comunity of friends or even other people who just found your site.

---

Before you start you will requier atleast minimal HTML knowledge as you will still need to edit the website to change your **comic name** and maybe even the **url**, also you will need to be able to fit this in something less than a gigabyte. Because the github pages service doesn't alow you to have a website weighting more than a gigabyte, so make sure to compress everything as possibly more cause' otherwise you will need to use your own server for this and also setup jekyll as the site is built around jekyll and will need major rework in case you want to make it run using different software. But in case you want to try recoding the site or even more remaking it using this software I recomend contacting me.

## Inserting images

Inserting an image might seem easy, but don't get fooled by the simplicity! It is actually not that simple...

```
<img src="PATH/TO/YOUR/IMAGE.extension" style="max-width: 100%;">
```

That was an example of a simple image, but there is a chance that you will need to center the image which will happen pretty often since you are making a webcomic.

In this case you will need to do this:

```
<img src="PATH/TO/YOUR/IMAGE.extension" style="display: block; margin-left: auto; margin-right: auto; max-width: 100%;">
```

Now this is way longer than the previous part of code, and this is the interresting part about html.

But now you might think where to place it in the tamplate? Let me show you...


```
<div class="comic-content">
</div>
```

That is the place where you will put the image, here is an example:

```
<div class="comic-content">
  <img src="PATH/TO/YOUR/IMAGE.extension" style="display: block; margin-left: auto; margin-right: auto; max-width: 100%;">
</div>
```

## Comic template

This is how to insert an image, but you will need a template where to place the image and also the place where you will find the previous part of code in. So here is the template for a comic page:

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stickman Stories - </title>
    <script type="module" src="JS/md-block.js"></script>
    <link rel="icon" href="images/icon.png" type="image/png">
    <link rel="stylesheet" href="CSS/comic_style.css">
</head>
<body>
<div class="wrap">
    <div class="main-body">
        <header>
            <h1>Stickman Stories</h1>
            <hr>
        </header>

        <div class="comic-content">
        </div>
    </div>
    <div class="sidebar">
        <div class="sidebar-item">
            <ul>
                <li>
                    <a href="index.html">Home</a>
                </li>
                <li>
                    <a href="info.html">Info</a>
                </li>
                <li>
                    <a href="changelog.html">Changelog</a>
                </li>
                <li>
                    <a href="lore_book.html">Lore book</a>
                </li>
                <li>
                    <a href="blog.html">Blog</a>
                </li>
                <li>
                    <a href="Wiki/wiki.html">Wiki</a>
                </li>
            </ul>
        </div>
    </div>
</div>
<div class="comic-list">
</div>

<footer>
    &copy; 2025 Stickman Stories. All rights reserved.
</footer>

</body>
</html>
```

## Adding a path

Also you will need to go to the index.html which is basically the home page and also insert a link to your comic page which should be located in the root folder for this case.

```
<div class="comic-list">
    <a href="comic1.html">Stickman Stories - The begining of something bad</a>
    <a href="comic2.html">Stickman Stories - The journey</a>
    <a href="WIP.html">Stickman Stories - The command</a>
    <!-- Add more links as you create new comic pages -->
</div>
```

That was the part where you will insert your link to your page, here is how you add a link:

```
<a href="PATH/TO/YOUR/PAGE">Button Text</a>
```

## Changelog

In case you wonder how to use the changelog page, for example you are helping with the development, here is a short guide for this one.

First let's start of with a simple explanation:

***A changelog is a text file or a web page where you explain what you've changed in the code after an update.*** i.e. Added a new comic.

Now that you know what is a changelog I will show you a template which you can paste in the comic-content "div" element in the changelog page:

```
<p class="anouncement-paragraph" style="display: list-item; margin-left: 2em;"></p>
```

## Wiki

Now, let's say that you want to use that sweet wiki page in the folder near all of the other code stuff "But how do you do that?" you would say, I'm here to help you! So first you should know that you need to at least know what you are going to write about, next you will need markdown knowledge as markdown is the syntax which is used for the wiki page.

---

Let's start of with a template!

Here is a template file which you will place in to the Wiki folder:

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stickman Stories - Wiki</title>
    <script type="module" src="../JS/md-block.js"></script>
    <link rel="icon" href="../images/icon.png" type="image/png">
    <link rel="stylesheet" href="../CSS/comic_style.css">
</head>
<body>
<div class="wrap">
    <div class="main-body">
        <header>
            <h1>Stickman Stories</h1>
            <hr>
        </header>

        <div class="comic-content">
            <md-block>
            [//] # (You type your content here)
            </md-block>
        </div>
    </div>
    <div class="sidebar">
        <div class="sidebar-item">
            <ul>
                <li>
                    <a href="../index.html">Home</a>
                </li>
                <li>
                    <a href="../info.html">Info</a>
                </li>
                <li>
                    <a href="../changelog.html">Changelog</a>
                </li>
                <li>
                    <a href="../lore_book.html">Lore book</a>
                </li>
                <li>
                    <a href="wiki.html">Wiki</a>
                </li>
            </ul>
        </div>
    </div>
</div>
<div class="comic-list">
</div>

<footer>
    &copy; 2025 Stickman Stories. All rights reserved.
</footer>

</body>
</html>
```

## Help

If you think that you need some help from me you can always use this email to contact me anytime: <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=dancho321sorokin@gmail.com" target="_blank">dancho321sorokin@gmail.com</a>

Just there is a small chance that you will need to wait a bit until I can respond to you and help with your question.

Good Luck!
