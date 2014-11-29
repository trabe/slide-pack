# SlidePack
## Simple slides _generator_ & _viewer_

**SlidePack** is a utility to author and render slideshows using:

* A single HTML file, one JS file and one CSS file.
* Markdown
* A (modern) web browser

## Why?

Because we wanted a super-simple way of writting our slides:
no compilation, easy customization, F5-and-forget.

## How it works

Once you download the [slide blueprint](), you can start editing the
markdown content. To view the slideshow, open the `.html` file
using your favourite web browser.

That's it.

### Technical details

SlidePack has three components:

1. An `.html` file with a tag containing your slides in markdown format.
2. A `.js` file which transforms your markdown code into HTML and handles
   the slideshow navigation.
3. A `.css` file which defines some basic slides styles.

When you open the `.html` file in your browser, the javascript code reads the
markdown from the soirce element and generates a bunch of (more or less) semantic
HTML markup which represents your slideshow:

* One `<article>` tag wrapping the whole slideshow
* One `<section>` tag for each slide, marked with the CSS class `active`
  when the slide is "the current one"

The provided styles hide the markdown and show the active slide, which in turn
is controled by you, via the javascript, using your keyboard or mouse.

## Supported markdown

You can write [GitHub Flavored Markdown](https://help.github.com/articles/github-flavored-markdown/)
so you have support for:

* All the basic markdown (headings, paragrahs, links, images, emphasis, blockquotes, etc.)
* Tables
* _Fenced code blocks_ with syntax highlight (with optional automatic language detection)

### Separating slides

In order to separate each slide, use two dashes (`--`). You can optionally
add custom CSS classes to the slide appending a white-space separated list
after the two dashes:

    --

    # First slide


    -- custom awesome

    # Second slide

    With classes "custom" and "awesome"


    --

    # Third slide

## Customization

The basic CSS stylesheets define:

1. The _core_ slides styling (controlling the active slide and hidding the markdown source,
   and providing basic support for printing the slides)
2. A _basic_ theme (typography, sizing, colors, etc.)

You can customize the slideshow in three different ways:

1. **Extend the basic theme using custom styles**. Add a `<style>` or `<link>` tag
   to the HTML and start adding new CSS stuff.
2. **Override the basic theme**. You can disable and override the basic theme
   adding the `override` CSS class to the `<html>` tag. This will use the
   _core_ styles only, disabling the theme stylesheets.
3. **Start from scratch**. Remove the `<link>` tag linking to the basic SlidePack
   styles and add your own.

You can even _postprocess_ the slides. You just have to define a global
function with name `_slide_pack_process_slides` inside a script. SlidePack
will handle the slides to that function once they are inserted in the HTML.
Remember to declare the variable before you include the
SlidePackjavascript.

    <script>
    var _slide_pack_process_slides = function ($slides) {
      // $slides is a Zepto.js wrapper containing all the slides
      $slides.wrap('<div class="woodoo"></div>');
    }
    </script>
    <script src="slide-pack.js"></script>

## TODO

* Add inline slides editor
* Fix mouse navigation (use left and right edges to navigate)
* Use the example as documentation. Rename it or something
* Add (optional) visual controls for navigation, page number, etc.
