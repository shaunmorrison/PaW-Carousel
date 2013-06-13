/*
 * PaW Carousel - Version: 1.0
 * http://picturesandwriting.com
 * Copyright (c) 2013 Shaun Morrison; Licensed: GPL
 * Requires: jQuery v1.7 or later
 * Author: Shaun Morrison
 */
(function($){  
    $.fn.pawCarousel = function(options) {  
        var  
			defaults = {  
				carouselItemCls:'paw-carousel-item',
				carouselNavItemCls: 'paw-carousel-nav-item',
				activeCls: 'active',
				carouselMediaCls:'paw-carousel-media',
				nextLinkCls:'paw-carousel-next',
				prevLinkCls:'paw-carousel-prev',
				loadingCls:'paw-loading',
				animSpeed:800,
				itemsClonedFromEdge:3,
				alignment:'center',
				imageCrop: true
			},  
			settings = $.extend({}, defaults, options);  

			this.each(function() {  
	            var $carousel = $(this);  

	            //Classes
	            var carouselItemCls = settings.carouselItemCls;
	            var carouselNavItemCls = settings.carouselNavItemCls;
	            var activeCls = settings.activeCls;
	            var origCloneCls = 'paw-carousel-item-orig';
	            var makeStartCloneCls = 'paw-make-start-clone';
	            var makeEndCloneCls = 'paw-make-end-clone';
	            var slideId = 'paw-slide-id';
	            var loadingCls = settings.loadingCls;

	            //Selectors
	            var $carouselItem = $carousel.find('.'+carouselItemCls);
	            var $carouselItemActive = $carousel.find('.'+carouselItemCls+'.'+activeCls);
	            var $carouselNavItem = $carousel.next().find('.'+carouselNavItemCls);
	            var $carouselMedia = $carousel.children('.'+settings.carouselMediaCls);
	            var $carouselWid = $carousel.width();
	            var $carouselHt = $carouselItem.first().height();
	            var $carouselMediaWid = 0;
	            var $carouselItemActiveCenter;
	            var $carouselCenter;
	            var $activePos;
	            var $goingTo;
	            var $goingToCenter;
	            var $activeId;
	            var $nextLink = $carousel.find('.'+settings.nextLinkCls);
	            var $prevLink = $carousel.find('.'+settings.prevLinkCls);

	            //Misc vars

	            //Animation speed of next/prev + thumbnail nav
	            var animSpeed = settings.animSpeed;

	            //Determines when to activate a clone of all items. Defaults 3 from the edge of the start or end of the slideshow. If you have smaller images you may want to increase this number
	            var itemsClonedFromEdge = settings.itemsClonedFromEdge;


	            //Add classes at beginning to determine weather or not to make more cloned items
	            $carouselItem.slice(0,itemsClonedFromEdge).addClass(makeStartCloneCls);
	            //Add classes at end to determine weather or not to make more cloned items
	            $carouselItem.slice(-itemsClonedFromEdge).addClass(makeEndCloneCls);
	            //Add original class
	            $carouselItem.addClass(origCloneCls);
	            var $carouselItemOrig = $carousel.find('.'+origCloneCls);
	            //Add active class to first item
	            $carouselItem.first().addClass(activeCls);


	            //Add data ids
	            $carouselItem.each(function(i){
	            	var index = i+1;
	            	$(this).attr('data-'+slideId,slideId+'-'+index);
	            });

	            $carouselNavItem.each(function(i){
	            	var index = i+1;
	            	$(this).attr('data-'+slideId,slideId+'-'+index);
	            });

	            //Find the active item
	            function findActive(){
	            	$carouselItemActive = $carousel.find('.'+carouselItemCls+'.'+activeCls);
	            	$carouselNavItemActive = $carousel.next().find('.'+carouselNavItemCls+'.'+activeCls);
	            }

	            //Add items to the end of the slideshow
	            function endClone(){
	            	if($carousel.find('.'+carouselItemCls+'.'+activeCls).hasClass(makeEndCloneCls)){
	            		var $clonedItems = $carouselItemOrig.clone();
	            		$carousel.find('.'+carouselItemCls).removeClass(makeEndCloneCls);
	            		$clonedItems.removeClass(activeCls+' '+origCloneCls+' '+makeStartCloneCls);
	            		$clonedItems.appendTo($carouselMedia).promise().done(function(){
	            			setWidth();
	            		});
	            		$carousel.find('.'+carouselItemCls).slice(-3).addClass(makeEndCloneCls);
	            	}
	            }
	            
	            //Add items to the beginning of the slideshow
	            function startClone() {
	            	if($carousel.find('.'+carouselItemCls+'.'+activeCls).hasClass(makeStartCloneCls)){
	            		var $clonedItems = $carouselItemOrig.clone();
	            		$carousel.find('.'+carouselItemCls).removeClass(makeStartCloneCls);
	            		$clonedItems.removeClass(activeCls+' '+origCloneCls+' '+makeEndCloneCls);
	            		$clonedItems.prependTo($carouselMedia).promise().done(function(){
	            			setWidth();
	            		});
	            		$carousel.find('.'+carouselItemCls).slice(0,3).addClass(makeStartCloneCls);
	            	}
	            }

	            //Set slideshow width
	            function setWidth() {
	            	setTimeout(function(){
	            		$carouselMediaWid = 0;
	            		$carousel.find('.'+carouselItemCls).each(function(){
	            			$carouselMediaWid += $(this).outerWidth(true);
	            		});
	            		$carouselMedia.width($carouselMediaWid).promise().done(function(){
	            			activePosition();
	            			setActiveNav();
	            		});
	            	}, 1);
	            	
	            }

	            //Find active item adn get measurements
	            function activeVals(dir){
	            	//findActive();
	            	$carouselWid = $carousel.width();
	            	$carouselItemActiveWid = $carouselItemActive.width();
	            	if(dir == 'next'){
	            		$goingTo = $carouselItemActive.next();
	            	} else if (dir == 'prev'){
	            		$goingTo = $carouselItemActive.prev();
	            	} 

	            	if(dir != null){
	            		$goingToWid = $goingTo.width();
	            		$carouselItemActive.removeClass(activeCls);
	            		$goingTo.addClass(activeCls);
	            		$goingToCenter = $goingToWid/2;
	            	}
	            	
	            	$carouselCenter = $carouselWid/2;
	            	$carouselItemActiveCenter = $carouselItemActiveWid/2;

	            	
	            }

	            //Find active items position if centralised
	            function activePosition(dir){
	            	if(settings.alignment == 'left'){
	            		$activePos = $carouselItemActive.position().left;
	            		if(dir != null){
	            			$goingToPos = $goingTo.position().left;
	            		}
	            	}else if(settings.alignment == 'right'){
	            		$activePos =  $carouselItemActive.position().left - $carouselWid + $carouselItemActiveWid;
	            		if(dir != null){
	            			$goingToPos = $goingTo.position().left - $carouselWid + $goingToWid;
	            		}
	            	}else{
	            		$activePos = $carouselItemActive.position().left - $carouselCenter + $carouselItemActiveCenter;
	            		if(dir != null){
	            			$goingToPos = $goingTo.position().left - $carouselCenter + $goingToCenter;
	            		}
	            	}
	            }


	            //Set the active nav item
	            function setActiveNav(){
	            	findActive();
	            	$activeId = $carouselItemActive.data(slideId);
	            	$carouselNavItem.removeClass(activeCls);
	            	$carouselNavItem.each(function(){
	            		var $item = $(this);
	            		if($item.data(slideId) == $activeId){
	            			$item.addClass(activeCls);
	            			return false;
	            		}
	            	});
	            }

	            //What happens when you click a nav item
	            function clickNav(){
	            	$carouselNavItem.click(function(){
	            		var $item = $(this);
	            		findActive();
	            		if(!$item.hasClass(activeCls)){
	            			var $goingToId = $item.data(slideId);
	            			var $itemIndex = $(this).index();

	            			//Deterimine whether it's going forward or backward. 
	            			if($itemIndex > $carouselNavItemActive.index()) {
	            				//Forwards
	            		        $goingTo = $carouselItemActive.nextUntil('[data-'+slideId+'="'+$goingToId+'"]').addBack().next();
	            		    	$goingTo = $goingTo.last();
	            		    	$carouselNavItemActive.removeClass(activeCls);
	            		    	$goingTo.addClass(activeCls);
	            		    } else{
	            		    	//Backwards
	            		    	$goingTo = $carouselItemActive.prevUntil('[data-'+slideId+'="'+$goingToId+'"]').addBack().prev();
	            		    	$goingTo = $goingTo.first();
	            		    	var $testId = $goingTo.data(slideId);
	            		    	$carouselNavItemActive.removeClass(activeCls);
	            		    	$goingTo.addClass(activeCls);
	            		    }
	            		    $carouselNavItem.removeClass(activeCls);
	            		    $item.addClass(activeCls);
	            		    activeVals('anim');
	            		    startClone();
	            		    endClone();
	            			activePosition('anim');
	            			$carouselMedia
	            				.css({
	            					'left':-$activePos
	            				})
	            				.animate({
	            					'left': -$goingToPos
	            				},animSpeed)
	            		}
	            	});
	            }

	            //Set max-width for slide-items and height of carousel - for small screen sizes
	            function carouselResize(){
	            	setWidth();

	            	$carouselWid = $carousel.width();
	            	$carousel.find('.'+carouselItemCls).css({
	            		'max-width':$carouselWid
	            	});
	            	$carouselItem.find('img').css({
	            		'max-width':'100%'
	            	});

	            	var $carouselOrigItem = $carousel.find('.'+origCloneCls);
	            	if(settings.imageCrop == true){
		            	var $carouselItemHt = 10000;
	            	   	$carouselOrigItem.each(function() {
	            	     	$carouselItemHt = $carouselItemHt < $(this).height() ? $carouselItemHt : $(this).height();
	            	   	});
	            	} else {
		            	var $carouselItemHt = -1;
	            	   	$carouselOrigItem.each(function() {
	            	     	$carouselItemHt = $carouselItemHt > $(this).height() ? $carouselItemHt : $(this).height();
	            	   	});
	            	}
	            	
            	   $carousel.css({
	            		'height':$carouselItemHt
	            	});

            	   	/*On resize get active position and set it*/
					findActive();
					activeVals();
					activePosition();

            	   $carouselMedia.css({
            	   	'left':-$activePos
            	   })
	            }

	            //Next prev links
	            $nextLink.click(function(e){
	            	e.preventDefault();
	            	findActive();
	            	activeVals('next');
	            	endClone();
	            	activePosition('next');
	            	$carouselMedia.animate({
	            		'left': -$goingToPos
	            	},animSpeed);
	            	setActiveNav();
	            	
	            });
	            $prevLink.click(function(e){
	            	e.preventDefault();
	            	findActive();
	            	activeVals('prev');
	            	startClone();
	            	activePosition('prev');
	            	$carouselMedia
	            		.css({
	            			'left':-$activePos
	            		})
	            		.animate({
	            			'left': -$goingToPos
	            		},animSpeed)
	            	setActiveNav();
	            }); 

            	$(window).resize(function(){
            		carouselResize();
                });
                $(window).load(function () {
                	carouselResize();
                	findActive();
                	activeVals();
                	startClone();
                	clickNav();

                	//Calulate active item and position it center screen
                	setTimeout(function(){
                		$carouselMedia.css({
                			'top':'0',
                			'left':-$activePos
                		})
                	}, 3);
                	$carousel.find('.'+loadingCls).fadeOut();
                });
	               
          	});  
          // returns the jQuery object to allow for chainability.  
          return this;  
    }  
})(jQuery);  