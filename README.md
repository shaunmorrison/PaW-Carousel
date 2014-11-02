##PaW Carousel V2 – infinite, responsive, lightweight jQuery plugin

## What's new in Version 2?
- Under 6KB when minified
- @2x/high-res/retina image support
- Add multiple carousels on one page
- Completely rewritten to be faster and more reliable
- Better loading of images to look smoother
- More reliable video scaling 
- More robust at all screen sizes
- Choose whether to resize or crop images at smaller screen sizes
- Must include image and video dimensions – solves a lot of headaches

## How to use

Include CSS, jQuery, PaW Carousel plugin and JS call e.g.

<pre>
&lt;link rel="stylesheet" href="css/pawcarousel.css">
&lt;!--You can use jQuery 2.x as well if you don't want to support older browsers -->
&lt;script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js">&lt;/script>
&lt;script src="js/pawcarousel.jquery.min.js">&lt;/script>
&lt;script>
	$(function(){
		$('.paw-carousel').pawCarousel();
	});
&lt;/script>
</pre>

Add the HTML to your page e.g.

<pre>&lt;section class="paw-carousel-wrap">
	&lt;div class="paw-carousel">
		&lt;div class="paw-carousel-items-wrap">
			&lt;div class="paw-carousel-item">
				&lt;img src="images/x.gif" data-src="assets/media/egs/eg-01.jpg" data-src-2x="assets/media/egs/eg-01@2x.jpg" width="494" height="370" class="paw-carousel-item-media">
				&lt;h3>This is some description text&lt;/h3>
			&lt;/div>
			&lt;div class="paw-carousel-item">
				&lt;a href="http://picturesandwriting.com" title="A link to Shaun's portolfio site">
					&lt;img src="images/x.gif" data-src="assets/media/egs/eg-02.jpg" data-src-2x="assets/media/egs/eg-02@2x.jpg" width="494" height="370" class="paw-carousel-item-media"">
					&lt;h3>This image has a link&lt;/h3>
				&lt;/a>
			&lt;/div>
			&lt;div class="paw-carousel-item">
				&lt;iframe width="560" height="315" src="//www.youtube.com/embed/aYxni8ohTfU" frameborder="0" allowfullscreen>&lt;/iframe>
			&lt;/div>
		&lt;/div>
		&lt;!--Next and previous links. SVGs - change with PNGs if you want browser support -->
		&lt;a href="#" class="paw-carousel-prev">&lt;img src="images/arr-prev.svg" alt="Previous">&lt;/a>
		&lt;a href="#" class="paw-carousel-next">&lt;img src="images/arr-next.svg" alt="Next">&lt;/a>
		&lt;!--Left and right translucent masks - simply remove if not required-->
		&lt;div class="paw-carousel-mask paw-carousel-mask-l hide-med">&lt;/div>
		&lt;div class="paw-carousel-mask paw-carousel-mask-r hide-med">&lt;/div>
	&lt;/div>
	&lt;!--Thumbnail navigation-->
	&lt;nav id="paw-carousel-thumbs">
		&lt;ul>
			&lt;li class="paw-carousel-nav-item">&lt;img src="assets/media/egs/eg-t-01.jpg">&lt;/li>
			&lt;li class="paw-carousel-nav-item">&lt;img src="assets/media/egs/eg-t-02.jpg">&lt;/li>
			&lt;li class="paw-carousel-nav-item">&lt;img src="assets/media/egs/eg-t-03.jpg">&lt;/li>
		&lt;/ul>
	&lt;/nav>
&lt;/section></pre>		

## Example, Usage, Full Options and FAQs
This page – http://picturesandwriting.com/paw-carousel/ - contains everything you should need to know. 

## Code Copyright and License
&copy; Copyright 2014 Shaun Morrison. The PaW Carousel code is licensed under the [GPL](http://www.gnu.org/licenses/gpl.html) license.

## Images/Photos Copyright
&copy; Copyright 2014 Shaun Morrison. All rights reserved.

The images are under full copyright with no permission to share or distribute in either commercial or non-commercial instances. You may use them as examples for the PaW Carousel plugin on Github for Pull Requests. 
