PaW-Carousel
============

A jQuery plugin that provides an infinite, responsive carousel with thumbnail navigation.

## How to use
Include CSS, jQuery, PaW Carousel plugin and JS call in the head of the document e.g.
<pre>
&lt;link rel="stylesheet" href="css/pawcarousel.css">
&lt;script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js">&lt;/script>
&lt;script src="js/pawcarousel.js">&lt;/script>
&lt;script>
	$(function(){
		$('.paw-carousel').pawCarousel();
	});
&lt;/script>
</pre>

Add the HTML to your page e.g.
<pre>&lt;section class="paw-carousel-wrap">
	&lt;div class="paw-carousel">
		&lt;!--The loading overlay - remove if you don't want it-->
		&lt;div class="paw-loading">
			&lt;div class="inner">
				&lt;img src="images/ajax-loader.gif">
				&lt;p>Loading&lt;/p>
			&lt;/div>
		&lt;/div>
		&lt;div class="paw-carousel-media">
			&lt;div class="paw-carousel-item">
				&lt;img src="assets/media/egs/eg-01.jpg">
				&lt;h3>This is some description text&lt;/h3>
			&lt;/div>
			&lt;div class="paw-carousel-item">
				&lt;a href="http://picturesandwriting.com" title="A link to Shaun's portfolio site">
					&lt;img src="assets/media/egs/eg-02.jpg">
					&lt;h3>This image has a link&lt;/h3>
				&lt;/a>
			&lt;/div>
			&lt;div class="paw-carousel-item">
				&lt;img src="assets/media/egs/eg-03.jpg">
				&lt;h3>This is some description text&lt;/h3>
			&lt;/div>
		&lt;/div>
		&lt;!--Next and previous links-->
		&lt;nav>
			&lt;ul>
				&lt;li>&lt;a href="#" class="paw-carousel-prev">&lt;span class="replace">Previous&lt;/span>&lt;/a>&lt;/li>
				&lt;li>&lt;a href="#" class="paw-carousel-next">&lt;span class="replace">Next&lt;/span>&lt;/a>&lt;/li>
			&lt;/ul>
		&lt;/nav>
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

## Example, Usage, Options and FAQs
This page – http://picturesandwriting.com/paw-carousel/ - contains everything you should need to know. 

## Code Copyright and License
Copyright &copy; 2013 Shaun Morrison

The PaW Carousel plugin is licensed under the [GPL](http://www.gnu.org/licenses/gpl.html) license.

## Images/Photos Copyright
Copyright &copy; 2013 Shaun Morrison

The images are under full copyright with no permission to share or distribute in either commercial or non-commercial instances. You may use them as examples for the PaW Carousel plugin on Github for Pull Requests. 
