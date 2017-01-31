
jQuery(document).ready(function() {
    $(window).load(function() {
        $('.body-wrapper').each(function() {
            var header_area = $('.header-wrapper');
            var main_area = header_area.children('.navbar');
            var logo = main_area.find('.navbar-header');
            var navigation = main_area.find('.navbar-collapse');
            var original = {
                nav_top: navigation.css('margin-top')
            };
            $(window).scroll(function() {
                if (main_area.hasClass('bb-fixed-header') && ($(this).scrollTop() == 0 || $(this).width() < 750)) {
                    main_area.removeClass('bb-fixed-header').appendTo(header_area);
                    navigation.animate({
                        'margin-top': original.nav_top
                    }, {
                        duration: 300,
                        queue: false,
                        complete: function() {
                            header_area.css('height', 'auto');
                        }
                    });
                } else if (!main_area.hasClass('bb-fixed-header') && $(this).width() > 750 && $(this).scrollTop() > header_area.offset().top + header_area.height() - parseInt($('html').css('margin-top'))) {
                    header_area.css('height', header_area.height());
                    main_area.css({
                        'opacity': '0'
                    }).addClass('bb-fixed-header');
                    main_area.appendTo($('body')).animate({
                        'opacity': 1
                    });
                    navigation.css({
                        'margin-top': '0px'
                    });
                }
            });
        });
        $(window).trigger('resize');
        $(window).trigger('scroll');
    });
    $('.select-drop').selectbox();
    $('.nav .dropdown').hover(function() {
        $(this).addClass('open');
    }, function() {
        $(this).removeClass('open');
    });
    $('.cart-dropdown a').on("click", function() {
        $(".dropdown-menu").toggleClass('display-block');
        $(".cart-dropdown a i").toggleClass('fa-close').toggleClass("fa-shopping-basket");
        $(".badge").toggleClass('display-none');
    });
    jQuery('.bannercontainerV1 .fullscreenbanner').revolution({
        delay: 5000,
        startwidth: 1170,
        startheight: 560,
        fullWidth: "on",
        fullScreen: "off",
        hideCaptionAtLimit: "",
        dottedOverlay: "twoxtwo",
        navigationStyle: "preview4",
        fullScreenOffsetContainer: "",
        hideTimerBar: "on"
    });
    jQuery('.bannercontainerV3 .fullscreenbanner').revolution({
        delay: 5000,
        startwidth: 1170,
        startheight: 500,
        fullWidth: "on",
        fullScreen: "on",
        hideCaptionAtLimit: "",
        dottedOverlay: "twoxtwo",
        navigationStyle: "preview4",
        fullScreenOffsetContainer: "",
        hideTimerBar: "on",
    });
    jQuery('.bannercontainerV2 .fullscreenbanner').revolution({
        delay: 5000,
        startwidth: 1170,
        startheight: 660,
        fullWidth: "on",
        fullScreen: "off",
        hideCaptionAtLimit: "",
        dottedOverlay: "none",
        navigationStyle: "preview4",
        fullScreenOffsetContainer: "",
        hideTimerBar: "on"
    });
    
    
    $(document).ready(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('#backToTop').css("opacity", 1);
            } else {
                $('#backToTop').css("opacity", 0);
            }
        });
    });
    $(document).ready(function() {
        $('.scrolling  a[href*="#"]').on('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            var target = $(this).attr('href');
            $(target).velocity('scroll', {
                duration: 800,
                offset: -150,
                easing: 'easeOutExpo',
                mobileHA: false
            });
        });
    });
    (function(i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function() {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date();
        a = s.createElement(o), m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m)
    })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
    ga('create', 'UA-71155940-5', 'auto');
    ga('send', 'pageview');
    var minimum = 20;
    var maximum = 300;
    $("#price-range").slider({
        range: true,
        min: minimum,
        max: maximum,
        values: [minimum, maximum],
        slide: function(event, ui) {
            $("#price-amount-1").val("$" + ui.values[0]);
            $("#price-amount-2").val("$" + ui.values[1]);
        }
    });
    $("#price-amount-1").val("$" + $("#price-range").slider("values", 0));
    $("#price-amount-2").val("$" + $("#price-range").slider("values", 1));
    var allIcons = $("#faqAccordion .panel-heading i.fa");
    $('#faqAccordion .panel-heading').click(function() {
        allIcons.removeClass('fa-chevron-down').addClass('fa-chevron-up');
        $(this).find('i.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
    });
    var allIconsOne = $("#accordionOne .panel-heading i.fa");
    $('#accordionOne .panel-heading').click(function() {
        allIconsOne.removeClass('fa-chevron-down').addClass('fa-chevron-up');
        $(this).find('i.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
    });
    var allIconsTwo = $("#accordionTwo .panel-heading i.fa");
    $('#accordionTwo .panel-heading').click(function() {
        allIconsTwo.removeClass('fa-chevron-down').addClass('fa-chevron-up');
        $(this).find('i.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
    });
    var allIconsThree = $("#togglesOne .panel-heading i.fa");
    $('#togglesOne .panel-heading').click(function() {
        allIconsThree.removeClass('fa-chevron-down').addClass('fa-chevron-up');
        $(this).find('i.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
    });
    var allIconsFour = $("#togglesTwo .panel-heading i.fa");
    $('#togglesTwo .panel-heading').click(function() {
        allIconsFour.removeClass('fa-chevron-down').addClass('fa-chevron-up');
        $(this).find('i.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
    });
    var galleryThumb = $('.product-gallery-thumblist a'),
        galleryPreview = $('.product-gallery-preview > li');
    galleryThumb.on('click', function(e) {
        var target = $(this).attr('href');
        galleryThumb.parent().removeClass('active');
        $(this).parent().addClass('active');
        galleryPreview.removeClass('current');
        $(target).addClass('current');
        e.preventDefault();
    });
    $(".incr-btn").on("click", function(e) {
        var $button = $(this);
        var oldValue = $button.parent().find('.quantity').val();
        $button.parent().find('.incr-btn[data-action="decrease"]').removeClass('inactive');
        if ($button.data('action') == "increase") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 1) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 1;
                $button.addClass('inactive');
            }
        }
        $button.parent().find('.quantity').val(newVal);
        e.preventDefault();
    });
});