$(document).ready(function() {
    var easing = 'easeOutCubic';
    var scrollTop = $(".scrollTop");
    $(window).scroll(function() {
        var topPos = $(this).scrollTop();

        if (topPos > 100) {
            $(scrollTop).css("opacity", "1");

        } else {
            $(scrollTop).css("opacity", "0");
        }

    });

    $(scrollTop).click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;

    });

    // $(".accordion_navi").on('click', function() {
    //     $(this).toggleClass('active');
    //     $(this).next().slideToggle();
    //     return false
    // });
    //    slick slider main top

    var sliderTimer = 5000;
    var beforeEnd = 500;
    var $imageSlider = $('.image-slider');
    var $startNum = $('.start-num');
    // var $endNum = $('.end-num');
    $imageSlider.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $startNum.text('0' + i);
        // $endNum.text(slick.slideCount);
    });
    $imageSlider.slick({
        autoplay: true,
        autoplaySpeed: sliderTimer,
        speed: 600,
        arrows: true,
        dots: false,
        adaptiveHeight: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        centerMode: true,
        centerPadding: '90px',
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: true,
                centerMode: false,
                slidesToShow: 1
            }
        }]
    });

    function progressBar() {
        $('.slider-progress').find('span').removeAttr('style');
        $('.slider-progress').find('span').removeClass('active');
        setTimeout(function() {
            $('.slider-progress').find('span').css('transition-duration', (sliderTimer / 1000) + 's').addClass('active');
        }, 100);
    }
    progressBar();
    $imageSlider.on('beforeChange', function(e, slick) {
        progressBar();
    });
    $imageSlider.on('afterChange', function(e, slick, nextSlide) {
        titleAnim(nextSlide);
    });
    // Title Animation JS
    function titleAnim(ele) {
        $imageSlider.find('.slick-current').find('h1').addClass('show');
        setTimeout(function() {
            $imageSlider.find('.slick-current').find('h1').removeClass('show');
        }, sliderTimer - beforeEnd);
    }
    titleAnim();

    $('.container_feature').slick({
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: false,
        autoplaySpeed: 2000
    });

    $('.total_num_cart a').on('click', function(event) {
        event.preventDefault();

        var _self = $(this),
            currentPage = window.location.href.split('#')[0],
            targetURL = _self.attr('href'),
            targetPage = targetURL.split('#')[0];

        if (targetPage === currentPage) {
            var offset = $(this.hash).offset().top;
            $('html, body').animate({
                scrollTop: offset
            }, 500);
        } else {
            window.location.href = targetURL;
        }

    });

    $('.image-slider-store').slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    $('#carousel,#carousel02').owlCarousel({
        loop:true,
        dots: false,
        nav:true,
        items: 5,
        smartSpeed: 700
    });
    var _boxOpened = false;
    $('.box_select_sort').on('select2:opening', function (e) {
        var _self = $(this);
        if (!_boxOpened) {
            _boxOpened = true;
            e.preventDefault();
            setTimeout(function () {
                _self.select2('open');
                _boxOpened = false;
            }, 200);
        }
    });

    $('.box_select_sort').select2({
        minimumResultsForSearch: Infinity
    });
    $('.box_select_sort.box_select__list').select2({
        minimumResultsForSearch: Infinity,
        placeholder: "人気順",
        dropdownParent: $('#box_check_option')
    });
    $('.box_select_sort.box_select__list_search').select2({
        minimumResultsForSearch: Infinity,
        placeholder: "人気順",
        dropdownParent: $('#box_check_option_search')
    });
    $('.box_select_sort.box_select_cart').select2({
        minimumResultsForSearch: Infinity,
        placeholder: "1",
        dropdownParent: $('#box_check_option')
    });
    $('.box_select_sort.box_select_feature_01').select2({
        minimumResultsForSearch: Infinity,
        placeholder: "S",
        dropdownParent: $('#box_check_option')
    });

    $('.box_select_sort.box_select_feature_02').select2({
        minimumResultsForSearch: Infinity,
        placeholder: "白",
        dropdownParent: $('#box_check_option')
    });

    $('.box_select_sort.box_select_product_detail_01').select2({
        minimumResultsForSearch: Infinity,
        placeholder: "サイズを選択してください",
        dropdownParent: $('#box_check_option')
    });

    $('.box_select_sort.box_select_product_detail_02').select2({
        minimumResultsForSearch: Infinity,
        placeholder: "カラーを選択してください",
        dropdownParent: $('#box_check_option_01')
    });

    $('.box_select_sort.box_select_product_detail_03').select2({
        minimumResultsForSearch: Infinity,
        placeholder: "○○を選択してください",
        dropdownParent: $('#box_check_option_02')
    });

    $('.box_select_create_address').select2({
        minimumResultsForSearch: Infinity,
        placeholder: "お住まいの地域",
        dropdownParent: $('#box_check_option')
    });
    $('.box_select_contact').select2({
        minimumResultsForSearch: Infinity,
        dropdownParent: $('#box_check_option')
    });
    //list news
    function activeTab(obj) {
        $('.tabs_list ul li').removeClass('active_tab');
        $(obj).addClass('active_tab');

        var id = $(obj).find('a').attr('href');

        $('.tab_item').hide();

        $(id).show();
    }
    $('.tab_nav li').click(function() {
        activeTab(this);
        return false;
    });
    activeTab($('.tab_nav li:first-child'));

    //user guide
    function activeTabGuide(objed) {
        $('.tabs_list_guide ul li').removeClass('active_tab');
        $(objed).addClass('active_tab');

        var id = $(objed).find('a').attr('href');

        $('.tab_item_guide').hide();

        $(id).show();
    }
    $('.tab_nav_guide li').click(function() {
        activeTabGuide(this);
        return false;
    });
    activeTabGuide($('.tab_nav_guide li:first-child'));



    //
    function activeTabPC(objee) {
        $('.tabs_list_guide ul li').removeClass('active_tab');
        $(objee).addClass('active_tab');

        var id = $(objee).find('a').attr('href');
        $('.tab_item_guide').hide();
        $(id).show();
    }
    $('.total_cart a').click(function() {
        activeTabPC(this);
        // return false;
    });
    activeTabPC($('.tab_nav_guide li:nth-child(5)'));
    //

    $('.btn_del,.btn_del_1,.point .cancel').on("click", function() {
        $(this).parents('.list_favorite_item li').remove();
        $(this).parents('.list_cart_item li').remove();
        $(this).parents('.order-item').fadeOut();
    });
    $('.active_favorite').on('click', function(e) {
            e.preventDefault();
            $(this).toggleClass('active_favorite active_favorited');
        })
        //nav SP
    if ($('#nav').length) {
        var header = $('.link');
        var adclass = 'scrolled';
        var scrollY = 100;
        $(".link .logo img").css("display", "none");
        $(window).scroll(function() {
            if ($(window).scrollTop() > scrollY) {
                header.addClass(adclass);
                $("ul.search-card li:nth-child(01), ul.search-card li:nth-child(02)").css({"transition": "all 0.3s"});
                $(".link .logo img").css("display", "block");
                $("#nav").css("z-index", "999");

            } else {
                header.removeClass(adclass);
                $(".link .logo img").css("display", "none");
                $("ul.search-card li:nth-child(01), ul.search-card li:nth-child(02)").css({"transition": "all 0.3s"});
                $("#nav").css("z-index", "99991");
            }
        });
    }

    //
    var moreNum = 6;
    $('.list_item_ranking li:nth-child(n + ' + (moreNum + 1) + ')').addClass('is-hidden');
    $('.more').on('click', function() {
        $('.list_item_ranking li.is-hidden').slice(0, moreNum).removeClass('is-hidden');
        if ($('.list_item_ranking li.is-hidden').length == 0) {
            $('.more').fadeOut();
        }
    });
    $('.list_item_recomend li:nth-child(n + ' + (moreNum + 1) + ')').addClass('is-hidden');
    $('.more_01').on('click', function() {
        $('.list_item_recomend li.is-hidden').slice(0, moreNum).removeClass('is-hidden');
        if ($('.list_item_recomend li.is-hidden').length == 0) {
            $('.more_01').fadeOut();
        }
    });
    var moreListMusic = 30;
    $('.list_item_music_more li:nth-child(n + ' + (moreListMusic + 1) + ')').addClass('is-hidden');
    $('.more_list_music').on('click', function() {
        $('.list_item_music_more li.is-hidden').slice(0, moreListMusic).removeClass('is-hidden');
        if ($('.list_item_music_more li.is-hidden').length == 0) {
            $('.more_list_music').fadeOut();
        }
    });
    //    nav SP
    if ($('#nav').length) {
        //header
        $('#btn_sp').off('click');
        $('#btn_sp').on('click', function(e) {
            e.preventDefault();
            var _window = $(window).width();
            var _head = $('#header > .inner').outerWidth();
            var _fixedwidth;
            _fixedwidth = _window - ((_window - _head) * 0.5 + $('#header > .inner > div:nth-child(2)').width());
            $('body').toggleClass('open');
            $('.content').slideUp(easing);
            return false
        });
        //close
        $('#btn_close_pc').off('click');
        $('#btn_close_pc').on('click', function(e) {
            e.preventDefault();
            $('body').removeClass('open');
            $('.content').slideUp(easing);
            return false
        });
        //toggle slide
        $('.accordion_navi.main').off('click');
        $('.accordion_navi.main').on('click', function() {
            $(this).toggleClass('active');
            $(this).next().slideToggle(easing);
            return false
        });
    }
    $('.title-manual').on('click', function() {
        $(this).toggleClass("active-manual");
    });
    $(".manual_title a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 500, function() {
                window.location.hash = hash;
            });
        }
    });
    // fancybox delete address

    var elementTemp;
    $('.btn').click(function() {
        elementTemp = $(this).closest('.item')
    })
    $('.delete').click(function() {
        elementTemp.fadeOut();
    })

    $('#del_model_popup').on('click', function() {
        $.fancybox.open( $('#hidden-content-1'), {
            clickSlide: false,
            clickOutside: false,
            touch: false
        });
    });
    $('#del_model_popup_02').on('click', function() {
        $.fancybox.open( $('#hidden-content-2'), {
            clickSlide: false,
            clickOutside: false,
            touch: false
        });
    });
    $('.icon__search_res').on('click', function() {
        $.fancybox.open( $('#advanced_search_popup'), {
            clickSlide: false,
            clickOutside: false,
            touch: false
        });
    });
    $('#advanced_search').on('click', function() {
        $.fancybox.open( $('#advanced_search_popup'), {
            clickSlide: false,
            clickOutside: false,
            touch: false
        });
    });
    $('.search_box_button_sp').on('click', function() {
        $.fancybox.open( $('#hidden-search-sp'), {
            clickSlide: false,
            clickOutside: false,
            touch: false
        });
    });
    var instance = $('.xzoom').xzoom();
    $('.xzoom-gallery').each(function() {
        instance.xappend($(this));
    });
    $(".accordion_item").on('click', function() {
        $(this).toggleClass('active');
        $(this).next().slideToggle();
        return false
    });

    $(".search_box_button").hover(function(){
        $('.search_box_input').addClass('show_input_search');
        $('.search_box_input').focus();
    });
    // $('.c-item .c-item__body').matchHeight();
    $ (document).on ('click', function () {
        var hasFocus = $('.search_box_input').is (':focus');
        if (hasFocus == false) {
            $ ('.search_box_input').removeClass('show_input_search');
        }
    });
    // $('.c-item .c-item__body').matchHeight({ property: 'min-height' });

    $(".link_accordion").on('click', function(event) {
        var _self = $(this),
            currentURL = window.location.href,
            currentPage = '',
            targetPage = '';

        currentPage = currentURL.split('/').slice(-1).pop();
        currentPage = currentPage.split('#')[0];
        targetPage = _self.attr('href').split('#')[0];

        if (targetPage === currentPage) {
            if (this.hash !== "") {
                event.preventDefault();

                var offset = $(this.hash).offset().top;
                $('html, body').animate({
                    scrollTop: offset
                }, 500);
            }
        }
    });
//
    $('.container_manual_sp li:nth-child(5) .content_instruction').hide();
    function activeTabSP(ob) {

        $(ob).addClass('active');
        var id = $(ob).find('a').attr('href');
        $(id).show();
        $('.container_manual_sp li:nth-child(5) .content_instruction').show();
    }

    $('.total_cart a').click(function() {
        activeTabSP(this);
    });
    activeTabSP($('.container_manual_sp li:nth-child(5) a'));

});


