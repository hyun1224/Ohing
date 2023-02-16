$(document).ready(function () {

    // 상단고정
    $(window).scroll(function () {
        if ($(this).scrollTop() > 800) {
            $(".gnb").addClass("fix");
        } else {
            $(".gnb").removeClass("fix");
        }
    });


    // 페이지 이동
    $(".gnb > li > a[href^='#']").click(function () {
        event.preventDefault();  // 기본 a링크 동작 방지
        let target = $(this.hash);
        $('html, body').animate({ scrollTop: target.offset().top }, 500);
    });


    // 뉴스슬라이드
    const news_list = new Swiper(".news_list", {
        direction: "vertical",
        loop: true,
        speed: 500,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });

    // 이벤트
    $('.e2').hide();

    $('.e1').mouseenter(function () {
        $(this).siblings().fadeIn();
    });
    $('.e2').mouseleave(function () {
        $(this).hide();
    });


    // 북마크
    $('.book_2').hide();

    $('.book_1').click(function () {
        $(this).siblings().show();
    });
    $('.book_2').click(function () {
        $(this).hide();
    });

    // modal 팝업
    $('.modal').hide();
    $('.btn').click(function () {
        $('.modal,.map_1').show();
        $('.modal_map iframe').not(':first-child').hide();
        $('body,html').css({ 'overflow': 'hidden' }); /* 모달창이 뜰때 스크롤바를 없애는 기능 */
    });

    $('.map_btn li').click(function () {
        let btnNum = $(this).index();
        $('.modal_map iframe').eq(btnNum).fadeIn().siblings().hide();
    });

    /* $('.map_2').click(function () {
        $('.modal_1').hide();
        $('.modal_2').fadeIn();
    });
    $('.map_3').click(function () {
        $('.modal_2').hide();
        $('.modal_3').fadeIn();
    });
    $('.map_4').click(function () {
        $('.modal_3').hide();
        $('.modal_4').fadeIn();
    }); */

    $('.btn_close').click(function () {
        $('.modal').hide();
        $('body,html').css({ 'overflow': 'auto' }); /* 닫을때는 자동으로 보이도록 처리 */
    });

    // 올라가기 버튼
    $(window).scroll(function () {
        if ($(this).scrollTop() > 4200) {
            $(".gotop").addClass("fix");
            $('.gotop').fadeIn();
        } else {
            $(".gotop").removeClass("fix");
            $('.gotop').fadeOut();
        }
    });
});