/*

Envy by WeTheme (http://www.wetheme.com)
Section JS

*/

// MatchHeight

function load_matchheight() {
    $('.homepage-collection-grid-inner .grid-image').matchHeight();
}

// Instagram section

var INSTAGRAM_SELECTOR = '.instagram-wrapper';
var INSTAGRAM_OPTIONS = {
    get: 'user',
    userId: 'self',
    resolution: 'standard_resolution'
};

var INSTAGRAM_TEMPLATE = '<div class="instagram-indiv instagram-grid-%grid%"><a href="\{\{link\}\}" target="_blank"><img src="\{\{image\}\}" class="img-responsive"/></a></div>';

var instagrams = {};

function instagram_init(instagram_element) {
    var section = instagram_element.dataset.id;

    // Read the Instagram token
    var token_input = document.querySelector('#token-' + section);
    if (!token_input) {
        // We don't have a token, no data are available and placeholder is shown
        return;
    }
    var token = token_input.value;

    // Set up options for Instafeed
    var target = document.querySelector('#instafeed-' + section);
    var rows = parseInt(target.dataset.rows), grid = parseInt(target.dataset.grid), sortBy = target.dataset.sortBy;
    var options = $.extend({}, {
        limit: rows * grid,
        target: target,
        accessToken: token,
        sortBy: sortBy,
        template: INSTAGRAM_TEMPLATE.replace('%grid%', grid),
        error: function (message) {
            console.error("Unable to download Instagram data: " + message);
        }
    }, INSTAGRAM_OPTIONS);

    // Remove all previous images
    while (target.firstChild) {
        target.removeChild(target.firstChild);
    }

    // Fetch and show Instagram pictures
    var feed = new Instafeed(options);
    feed.run();
}

function load_instagram(target) {
    var instagram_elements = target.querySelectorAll(INSTAGRAM_SELECTOR);
    Array.prototype.forEach.call(instagram_elements, instagram_init);
}


// Slider section

var DEFAULT_OPTIONS = {
    directionNav: true,
    controlNav: false,
    startAt: 0
};

var SLIDER_SELECTOR = '.flexslider-homepage';
var SLIDER_REENABLE_INTERVAL = 6000;

/* Mapping from sectionId to Slider instance */
var sliders = {};

/* Initialize all the sliders */
function load_slider(section) {
    sliders = {};
    section = section || document;
    var slider_elements = section.querySelectorAll(SLIDER_SELECTOR);
    Array.prototype.forEach.call(slider_elements, function (slider_element) {
        // Prevent flickering in the flexslider by setting fixed width of the slides
        $(slider_element).find('li').css('width', $(slider_element).width());

        sliders[slider_element.dataset.sliderId] = new Slider(slider_element);
    });
}

function Slider(element) {
    this.$element = $(element);
    this.restartTimer = null;

    this.get_speed = function () {
        return parseInt(this.$element.data('sliderSlideTime'));
    };

    this.get_animation = function () {
        return this.$element.data('sliderAnimation');
    };

    this.show_slide = function (index) {
        if (this.get_speed() > 0) {
            this.$element.flexslider("stop");
        }
        this.$element.flexslider(index);
    };

    this.start_animation = function () {
        // Don't start animation when autorotate is disabled
        if (this.get_speed() > 0) {
            this.$element.flexslider("play");
        }
    };

    this.on_slide_change = function(slider) {
        speed = this.get_speed();
        if (!slider.playing && speed > 0) {
            // restart autoscroll after given interval since last interaction
            clearTimeout(this.restartTimer);
            this.restartTimer = setTimeout(function () {
                slider.play();
            }, Math.max(0, SLIDER_REENABLE_INTERVAL - speed));
        }
    };

    this.configure = function (options) {
        var speed = this.get_speed();
        var opts = $.extend({
                controlsContainer: this.$element,
                slideshowSpeed: speed,
                animation: this.get_animation(),
                slideshow: speed > 0,
                useCSS: false, // Fix for background disappearing: http://stackoverflow.com/a/27298397
                pauseOnAction: true,
                after: this.on_slide_change.bind(this)
            }, DEFAULT_OPTIONS, options);
        this.$element.find('ul').width('auto');
        this.$element.flexslider(opts);
    };
    this.configure({});

    // flexslider stops the animation when the page is not focused, this breaks when the section is
    // changed in theme admin because it triggers 'blur' event when another iframe is selected
    $(window).unbind('blur');
}



// Product template section

function load_tabs() {
    $('ul.tabs').each(function() {
        var active, content, links = $(this).find('a');
        active = links.first().addClass('active');
        content = $(active.attr('href'));
        links.not(':first').each(function () {
            $($(this).attr('href')).hide();
        });
        $(this).find('a').click(function(e){
            active.removeClass('active');
            content.hide();
            active = $(this);
            content = $($(this).attr('href'));
            active.addClass('active');
            content.fadeIn();
            return false;
        });
    });
}

function set_image_with_loader(target, src) {
    var loader = document.querySelector('#featured-image-loader');
    var image = new Image();
    image.src = src;

    if (image.complete) {
        // Image is already loaded
        target.attr({src: src});
    } else {
        // Show spinner and load image
        loader.classList.remove('hidden');
        target.css('filter', 'opacity(0.4)');
        image.onload = function () {
            this.onload = this.onerror = this.onabort = null;
            loader.classList.add('hidden');
            target.attr({src: src}).css('filter', '');
        };
        image.onerror = image.onabort = function () {
            this.onload = this.onerror = this.onabort = null;
            loader.classList.add('hidden');
            target.css('filter', '');
        };
    }
}

function load_zoom() {
    $('*[data-zoom=true]').zoom({
        touch: false
    });
    $('a.image-swap').click(function() {
        var newImage = $(this).attr('href');
        set_image_with_loader($('.featured-image-div img'), newImage);
        return false;
    });
}


function formatMoney(cents, format) {
    var moneyFormat = theme.moneyFormat; // eslint-disable-line camelcase
    if (typeof cents === 'string') {
        cents = cents.replace('.', '');
    }
    var value = '';
    var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
    var formatString = (format || moneyFormat);

    function formatWithDelimiters(number, precision, thousands, decimal) {
        if (precision === null || precision === undefined) {
            precision = 2;
        }
        thousands = thousands || ',';
        decimal = decimal || '.';

        if (isNaN(number) || number == null) {
            return 0;
        }

        number = (number / 100.0).toFixed(precision);

        var parts = number.split('.');
        var dollarsAmount = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands);
        var centsAmount = parts[1] ? (decimal + parts[1]) : '';

        return dollarsAmount + centsAmount;
    }

    switch (formatString.match(placeholderRegex)[1]) {
        case 'amount':
            value = formatWithDelimiters(cents, 2);
            break;
        case 'amount_no_decimals':
            value = formatWithDelimiters(cents, 0);
            break;
        case 'amount_with_comma_separator':
            value = formatWithDelimiters(cents, 2, '.', ',');
            break;
        case 'amount_no_decimals_with_comma_separator':
            value = formatWithDelimiters(cents, 0, '.', ',');
            break;
        case 'amount_no_decimals_with_space_separator':
            value = formatWithDelimiters(cents, 0, ' ');
            break;
    }

    return '<span class="money">' + formatString.replace(placeholderRegex, value) + '</span>';
}

function Product(element) {
    // Settings
    this.config = {
        shopify_ajax_add_url: '/cart/add.js',
        shopify_ajax_url: '/cart.js'
    };

    this.element = element;
    this.$element = $(element);

    this.sectionId = this.element.dataset.sectionId;
    var product_script = document.querySelector('#ProductJson-' + this.sectionId);
    if (!product_script) {
        // Product is not loaded, there is either no product section or the product is not selected
        return;
    }
    this.product = JSON.parse(document.querySelector('#ProductJson-' + this.sectionId).innerText);
    this.$selects = this.$element.find('.selector-wrapper select');
    this.$selects.on('change', this.on_select_change.bind(this));
    this.$original_select = this.$element.find('.original-select');
    this.$old_price = this.$element.find('.compare-at-price .money');
    this.$price = this.$element.find('#price-field');
    this.$cart = this.$element.find('#purchase');
    this.$sale = this.$element.find('.sale-badge,.compare-at-price');
    this.$sale_price = this.$element.find('.compare-at-price');
    this.$featured_image = this.$element.find('.product-main-image');
    this.$add_to_cart_form = this.$element.find('#add-to-cart-form');
    this.$cart_item_count = $('.cart-item-count');
    this.$cart_money = $('.cart-item-price');
    this.zoom_selector = '.zoomImg';

    this.on_select_change();
    this.$cart.click(function(e) {
        e.preventDefault();
        this.disable_cart_button();
        if (this.$cart.data('use-ajax')) {
            this.add_to_cart();
        } else {
            this.$add_to_cart_form.submit();
        }
    }.bind(this));
}

Product.prototype.on_select_change = function () {
    var values = this.$selects.map(function (index, select) {
        return $(select).val();
    });
    var matching_variants = this.product.variants.filter(function (variant) {
        for (var i = 0; i < values.length; i++) {
            if (values[i] !== variant.options[i]) {
                return false
            }
        }
        return true;
    });
    if (matching_variants.length === 0) {
        this.update_variant(null);
    } else {
        this.update_variant(matching_variants[0]);
    }
};

Product.prototype.update_variant = function (variant) {
    if (variant) {
        this.$original_select.val(variant.id);
        if (!variant.available) {
            this.$price.text(theme.strings.soldOut);
            this.$cart.prop('disabled', true);
        } else {
            this.$price.html(formatMoney(variant.price));
            this.$cart.prop('disabled', false);
        }
        if (variant.featured_image) {
            this.$featured_image.prop('src', variant.featured_image.src);
            $(this.zoom_selector).prop('src', variant.featured_image.src);

            var slider = this.$element.find('.mobile-product-slider');
            if (slider.length === 0) {
                slider = this.$element.find('.homepage-sections--indiv-product-slider');
            }
            slider.flexslider(variant.featured_image.position - 1);
        }
        var is_sale = variant.compare_at_price && variant.compare_at_price > variant.price;
        this.$sale_price.html(is_sale ? formatMoney(variant.compare_at_price) : '');
        this.$sale.toggleClass('hide', !is_sale);

        if (history.pushState) {
            var newurl = window.location.protocol + '//' + window.location.host + window.location.pathname + '?variant=' + variant.id;
            window.history.replaceState({path: newurl}, '', newurl);
        }
    } else {
        this.$price.text(theme.strings.unavailable);
        this.$cart.prop('disabled', true);
        this.$sale.addClass('hide');
    }
    if (Currency.shopCurrency) {
        Currency.convertAll(Currency.shopCurrency, Currency.currentCurrency);
    }
};

var CART_LOADING = '<i class="fa fa-circle-o-notch fa-spin fa-fw"></i><span class="sr-only">Loading...</span>';

Product.prototype.add_to_cart = function () {
    this.clear_error();

    $.ajax({
        url: this.config.shopify_ajax_add_url,
        dataType: 'json',
        type: 'post',
        data: this.$add_to_cart_form.serialize(),
        success: this.added_to_cart.bind(this),
        error: this.add_to_cart_failed.bind(this)
    })
};

Product.prototype.disable_cart_button = function () {
    this.$cart.addClass('disabled').prop('disabled', true).html(CART_LOADING);
};

Product.prototype.enable_cart_button = function () {
    this.$cart.removeClass('disabled').prop('disabled', false).html(window.theme.strings.addToCart);
};

Product.prototype.added_to_cart = function (itemData) {
    this.update_cart();
};

Product.prototype.show_cart = function () {
    $('#cartSlideoutWrapper').trigger('cart:open');
};

Product.prototype.update_cart = function () {
    // Update cart count
    $.getJSON(this.config.shopify_ajax_url)
        .then(this.updated_cart.bind(this))
        .fail(this.update_cart_failed.bind(this));
};

Product.prototype.updated_cart = function (data) {
    this.enable_cart_button();
    this.$cart_item_count.text(data.item_count);
    this.$cart_money.html(formatMoney(data.total_price));
    Currency.convertAll(Currency.shopCurrency, jQuery('[name=currencies]').val());
    this.show_cart();
};

Product.prototype.update_cart_failed = function (response) {
    this.enable_cart_button();
    console.error("Updating the cart failed: ", response);
};

Product.prototype.add_to_cart_failed = function(response) {
    this.enable_cart_button();
    var errorText = 'Unknown error';
    if (response.status == 0) {
        // Unable to connect to server
    } else if (response.responseJSON) {
        // Process JSON error
        if (response.responseJSON.description) {
            errorText = response.responseJSON.description;
        } else {
            errorText = response.responseJSON.message;
        }
    } else if (response.responseText) {
        // Use plain text error
        errorText = response.responseText;
    }
    this.show_error(errorText);
};

Product.prototype.show_error = function (text) {
    $('<div id="cart-error"></div>')
        .addClass('alert alert-danger')
        .text(text)
        .insertAfter(this.$cart);
};

Product.prototype.clear_error = function () {
    $('#cart-error').remove();
};

function load_product(target) {
    if (target) {
        new Product(target.querySelector('#product-box'));
    } else {
        Array.prototype.forEach.call(document.querySelectorAll('#product-box'), function (box) {
            new Product(box);
        });
    }

    $(".selector-wrapper select").selectOrDie({
        customClass: "custom",
        customID:    "custom"
    });
}


// Flexslider Mobile Product Images

function load_mobile_product_slider() {
    $('.mobile-product-slider').flexslider({
        animation: 'slide',
        directionNav: false,
        controlNav: true,
        startAt: 0,
        slideshow: false
    });
}

// Flexslider in Indiv Product section

function load_indiv_product_slider() {
    $('.homepage-sections--indiv-product-slider').flexslider({
        directionNav: false,
        slideshow: false,
        animation: "slide"
    });
}

// Mobile menu hierarchy handling

function load_mobile_menu() {
    $('.mobile-menu-sub').on('click', function () {
        var $this = $(this);
        var $root = $this.closest('.slideout-menu');
        var link = $this.data('link');
        $this.closest('.mobile-menu').addClass('mobile-menu-stacked');
        $root.find('#' + link).removeClass('mobile-menu-hidden');
    });

    $('.mobile-menu-back').on('click', function () {
        var $this = $(this);
        var $root = $this.closest('.slideout-menu');
        var link = $this.data('link');
        $this.closest('.mobile-menu').addClass('mobile-menu-hidden');
        $root.find('#' + link).removeClass('mobile-menu-stacked');
    });

    $('.mobile-menu-currency-link').on('click', function () {
        var $this = $(this);
        var code = $this.data('code');
        $(document).trigger("currency:change", code);
    });

    $(document).on("currency:change", function (event, currency) {
        // Select current currency in the mobile menu when global select changes
        $('.mobile-menu-currency-selected').removeClass('mobile-menu-currency-selected');
        $('.mobile-menu-currency-link[data-code=' + currency +']').addClass('mobile-menu-currency-selected');
    });
}

// Parallax effect for the Text over image section

(function ($) {

    $.fn.parallax = function () {
      var window_width = $(window).width();
      // Parallax Scripts
      return this.each(function(i) {
        var $this = $(this);
        $this.addClass('parallax');

        function updateParallax(initial) {
          var container_height;
          if (window_width < 601) {
            container_height = ($this.height() > 0) ? $this.height() : $this.children(".img").height();
          }
          else {
            container_height = ($this.height() > 0) ? $this.height() : 500;
          }
          var $img = $this.children(".img").first();
          var img_height = $img.height();
          var parallax_dist = img_height - container_height;
          var bottom = $this.offset().top + container_height;
          var top = $this.offset().top;
          var scrollTop = $(window).scrollTop();
          var windowHeight = window.innerHeight;
          var windowBottom = scrollTop + windowHeight;
          var percentScrolled = (windowBottom - top) / (container_height + windowHeight);
          var parallax = Math.round((parallax_dist * percentScrolled));

          if (initial) {
            $img.css('display', 'block');
          }
          if ((bottom > scrollTop) && (top < (scrollTop + windowHeight))) {
            $img.css('transform', "translate3D(-50%," + parallax + "px, 0)");
          }
        }

        // Wait for image load
        $this.children(".img").one("load", function() {
          updateParallax(true);
        }).each(function() {
          if(this.complete || !this.src) $(this).load();
        });

        $(window).scroll(function() {
          window_width = $(window).width();
          updateParallax(false);
        });

        $(window).resize(function() {
          window_width = $(window).width();
          updateParallax(false);
        });

      });

    };
}( jQuery ));

function load_parallax() {
    $('.parallax').parallax();
}

function load_currencies() {
    $("select.currency-picker").css('visibility', 'visible').selectOrDie({
        customClass: "custom",
        customID: "custom"
    });
}

function load_mobile_text_adverts() {
    $('.mobile-homepage-text-adverts').flexslider({
      controlNav: true,
      directionNav: false
    });
}

function load_search() {
  $(document).ready(function(){
      $(".search-show").click(function(){
          $("#top-search-wrapper").slideToggle();
      });
  });
}

function load_dropdown_hover() {
  $(document).ready(function(){
      $('.dropdown-envy-toggle').dropdownHover();
  });
}

function load_reviews() {
    if (window.hasOwnProperty('SPR') && document.querySelector('#shopify-product-reviews')) {
        SPR.registerCallbacks();
        SPR.initRatingHandler();
        SPR.initDomEls();
        SPR.loadProducts();
        SPR.loadBadges();
    }
}

function load_collection_tag_filter() {
    /* Product Tag Filters - Good for any number of filters on any type of collection pages */
    var collFilters = jQuery('.coll-filter');
    collFilters.change(function () {
        var newTags = [];
        collFilters.each(function () {
            var val = jQuery(this).val();
            if (val) {
                newTags.push(val);
            }
        });
        if (newTags.length) {
            var query = newTags.join('+');
            var link = $('#link-to-tag-generic').val();
            window.location.href = $('#link-to-tag-generic a').attr('href').replace('tag', query);
        } else {
            window.location.href = $('#link-to-collection').val();
        }
    });

    $(".coll-filter").selectOrDie({
        customClass: "custom",
        customID:    "custom",
        size: 10
    });
}

function load_collection_sort() {
    Shopify.queryParams = {};
    if (location.search.length) {
        for (var aKeyValue, i = 0, aCouples = location.search.substr(1).split('&'); i < aCouples.length; i++) {
            aKeyValue = aCouples[i].split('=');
            if (aKeyValue.length > 1) {
                Shopify.queryParams[decodeURIComponent(aKeyValue[0])] = decodeURIComponent(aKeyValue[1]);
            }
        }
    }

    var sort_by = $('#collection-sort-by').val();
    jQuery('#sort-by')
        .val(sort_by)
        .bind('change', function() {
            Shopify.queryParams.sort_by = jQuery(this).val();
            location.search = jQuery.param(Shopify.queryParams).replace(/\+/g, '%20');
        });

    $("#sort-by").selectOrDie({
        customClass: "custom",
        customID:    "custom"
    });
}

// Initialization

function block_select(event) {
    // Stop animation and show block when selected in the Slideshow section
    var slider = sliders[event.detail.sectionId];
    if (slider) {
        var index = parseInt(event.target.dataset.slideIndex);
        slider.show_slide(index);
    }

    // Stop animation and show block when select in Text Adverts section on mobile
    var mobile_text_advert = $(event.target).parents('.homepage-sections-wrapper').find('.mobile-homepage-text-adverts');
    if (mobile_text_advert.length > 0) {
        var index = Array.prototype.indexOf.call(event.target.parentElement.children, event.target);
        mobile_text_advert.flexslider("stop");
        mobile_text_advert.flexslider(index);
    }

}

function block_deselect(event) {
    // Resume animation when block is deselected in the Slideshow section
    var slider = sliders[event.detail.sectionId];
    if (slider) {
        slider.start_animation();
    }

    // Resume animation when block is deselected in Text Adverts section on mobile
    var mobile_text_advert = $(event.target).parents('.homepage-sections-wrapper').find('.mobile-homepage-text-adverts');
    if (mobile_text_advert.length > 0) {
        mobile_text_advert.flexslider("play");
    }
}

function get_section_name(event) {
    var section = null;
    if (event && event.detail) {
        var data = {};
        var dataset = event.target.dataset;
        for (var key in dataset) {
            if (dataset.hasOwnProperty(key) && key.indexOf('themeEditorSection-') === 0) {
                data = JSON.parse(dataset[key]);
            }
        }
        if (data.hasOwnProperty('type')) {
            section = data['type'];
        }
    }
    return section;
}


function onload(event) {
    document.addEventListener('shopify:block:select', block_select);
    document.addEventListener('shopify:block:deselect', block_deselect);

    var section = get_section_name(event);
    if (!section || section === 'slideshow') {
        // Do not reload slider when header or footer is changed
        load_slider(event && event.target);
    }

    if (!section || section === 'instagram') {
        load_instagram(event.target);
    }

    if (!section || section === 'product-template' || section === 'indiv-product') {
        load_zoom();
        load_tabs();
        load_mobile_product_slider();
        load_indiv_product_slider();
        load_product(section && event && event.target);
        if (event) {
            // The Shopify Product Review app will load itself on document load,
            // we need to apply it manually when product section change
            load_reviews();
        }
    }

    if (!section || section === 'header') {
        load_mobile_menu();
        load_currencies();
        load_search();
        load_dropdown_hover();
    }

    if (!section || section === 'text-adverts') {
        load_mobile_text_adverts();
    }

    if (!section || section === 'text-over-image') {
        load_parallax();
    }

    if (!section || section === 'collection-list') {
        load_matchheight();
    }

    if (!section || section === 'collection-template') {
        load_collection_tag_filter();
        load_collection_sort();
    }
}

function onunload() {
    document.removeEventListener('shopify:block:select', block_select);
    document.removeEventListener('shopify:block:deselect', block_deselect);
    sliders = {};
}

document.addEventListener('shopify:section:load', onload);
document.addEventListener('shopify:section:unload', onunload);
document.addEventListener("DOMContentLoaded", onload);
