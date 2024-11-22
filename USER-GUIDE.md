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
