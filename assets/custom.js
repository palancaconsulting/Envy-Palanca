/*

Envy by WeTheme (http://www.wetheme.com)
Custom JS

*/

// Responsive tables init

$(document).ready(function() {
	$('.product-description-wrapper table').wrap('<div class="rte__table-wrapper"></div>');
});

// Wow Animation init
$(document).ready(function() {
  new WOW().init();
});

// Mobile Browser Menu

$("select#mobile-menu").change(function() {
  window.location = $(this).find("option:selected").val();
});

// FancyBox

$(document).ready(function() {
	$(".fancybox").fancybox();
});

$(document).ready(function() {
	$(".fancybox-instagram").fancybox({
		padding : 0
	});
});

// Login Boxes

$("#forgot-password-box").click(function(){
    $("#customer-login").hide();
    $("#recover-password").show();
});

$("#login-box-link").click(function(){
	$("#customer-login").show();
	$("#recover-password").hide();
});

// Drawers

var MOBILE_DRAWER_SIZE = 300,
    DESKTOP_DRAWER_SIZE = 390,
    MOBILE_WIDTH_MAX = 768;

window.slideouts = {};


// Simulate responsiveness of the Drawer component
$(window).resize(function () {
    var is_mobile = document.body.clientWidth < MOBILE_WIDTH_MAX;

    // Disable mobile drawer on desktop
    window.slideouts.left._touch = is_mobile;

    // Resize right drawer based on window width
    var slideout = window.slideouts.right,
        padding = (is_mobile) ? MOBILE_DRAWER_SIZE : DESKTOP_DRAWER_SIZE;
    slideout._translateTo = slideout._padding = padding * slideout._orientation;
    if (slideout._opened) {
        slideout.panel.style.transform = "translateX(" + (padding * slideout._orientation) + "px)";
    }
});


function create_drawer(side, panel, menu, hidden_menu, overlay) {
    var padding = MOBILE_DRAWER_SIZE;
    if (side === 'right' && document.body.clientWidth >= MOBILE_WIDTH_MAX) {
        padding = DESKTOP_DRAWER_SIZE;
    }

    var slideout = new Slideout({
        'panel': panel,
        'menu': menu,
        'padding': padding,
        'tolerance': 70,
        'side': side,
        'touch': false
    });
    var dir = (side === 'right') ? -1 : 1;
    window.slideouts[side] = slideout;
    menu.classList.add('slideout-panel-hidden');

    var $overlay = $(overlay);
    overlay.addEventListener('click', slideout.close.bind(slideout));

    // Handle slide to close
    var touch_start = null;
    overlay.addEventListener('touchstart', function (event) {
        if (!slideout.isOpen()) {
            return;
        }
        event.preventDefault();
        touch_start = event.touches[0].pageX;
    });
    overlay.addEventListener('touchmove', function (event) {
        if (!slideout.isOpen()) {
            return;
        }
        var offset = touch_start - event.touches[0].pageX;
        var translate = (dir * padding) - offset;
        if (Math.abs(translate) > padding) {
            translate = (dir * padding);
        }
        panel.style.transform ='translateX(' + translate + 'px)';
    });
    overlay.addEventListener('touchend', function (event) {
        if (!slideout.isOpen()) {
            return;
        }
        var offset = touch_start - event.changedTouches[0].pageX;
        if (offset === 0 || Math.abs(offset) > 70) {
            slideout.close(slideout);
        } else {
            panel.style.transform = 'translateX(' + (dir * padding) + 'px)';
        }
    });

    slideout.on('beforeopen', function() {
        menu.classList.remove('slideout-panel-hidden');
        hidden_menu.classList.add('slideout-panel-hidden');
        $overlay.fadeIn();
        // document.body.style.overflowY = 'hidden';
        var marginTop = (-document.body.scrollTop) + 'px';
        panel.style.position = 'fixed';
        panel.style.marginTop = marginTop;
    });

    slideout.on('beforeclose', function () {
        $overlay.fadeOut();
        var scrollTop = -parseInt(panel.style.marginTop);
        panel.style.position = '';
        panel.style.marginTop = '';
        document.body.scrollTop = scrollTop;
    });

    slideout.on('close', function() {
        menu.classList.add('slideout-panel-hidden');
    });
    slideout.on('translate', function(translated) {
        var hidden = false;
        if (translated === 0) {
            hidden = true;
        } else if (side === 'left') {
            hidden = translated <= 0;
        } else if (side === 'right') {
            hidden = translated >= 0;
        }
        menu.classList.toggle('slideout-panel-hidden', hidden);
        hidden_menu.classList.toggle('slideout-panel-hidden', !hidden);
    });

    return slideout;
}

function load_menu_drawer() {
    var main_body = document.querySelector('#main-body');
    var left_menu = document.querySelector('#menu');
    var right_menu = document.querySelector('#cartSlideoutWrapper');
    var overlay = document.querySelector('#slideout-overlay');

    /* Mobile Menu */

    /* Move mobile menu out of section to document body because the slideout
       needs to put it to the sidebar, but it can't be in the body from the beginning
       because it needs section config */
    document.body.appendChild(left_menu);

    var slideoutLeft = create_drawer('left', main_body, left_menu, right_menu, overlay);

    $('.slide-menu-mobile').on('click', function() {
        slideoutLeft.toggle();
    });

    $('.mobile-menu-close').on('click', function () {
        slideoutLeft.close();
    });

    // Disable mobile drawer on desktop
    if (document.body.clientWidth >= MOBILE_WIDTH_MAX) {
        slideoutLeft._touch = false;
    }

    // Add events for sidebar manipulation from outside
    $(left_menu)
        .on('mobile:toggle', slideoutLeft.toggle.bind(slideoutLeft))
        .on('mobile:open', slideoutLeft.open.bind(slideoutLeft))
        .on('mobile:close', slideoutLeft.close.bind(slideoutLeft));

    /* Cart */
    var slideoutRight = create_drawer('right', main_body, right_menu, left_menu, overlay);

    // Toggle button
    $('.slide-menu-cart').on('click', function (e) {
        slideoutRight.toggle();
        // prevent non-ajax basket
        e.preventDefault();
        return false;
    });

    $('.cart-menu-close').on('click', function (e) {
        slideoutRight.close();
    });

    // Add events for sidebar manipulation from outside
    $(right_menu)
        .on('cart:toggle', slideoutRight.toggle.bind(slideoutRight))
        .on('cart:open', slideoutRight.open.bind(slideoutRight))
        .on('cart:close', slideoutRight.close.bind(slideoutRight));
}

$(document).ready(load_menu_drawer);
document.addEventListener('shopify:section:load', function (event) {
    if (event.detail.sectionId === 'header') {
        load_menu_drawer();
    } else if (event.detail.sectionId === 'footer') {
        // Shopify doesn't correctly handle scrolling to footer on section change because the section
        // has zero height when it's scrolled to but when it loads it gets out of visible area
        setTimeout(function () {
            // Scroll to the footer element after loading
            document.documentElement.scrollTop = document.body.scrollTop = document.body.clientHeight;
        }, 0);
    }
});
