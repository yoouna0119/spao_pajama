$(document).ready(function(){


  function scroll(){
    $(window).scroll(function(){
      var st = $(window).scrollTop();//현재 스크롤바의 위치
      var section1 = $('.weekly-best').offset().top-800;
      var section2 = $('.time-sale').offset().top-400;
      var section3 = $('.collabo').offset().top-380;
      var section4 = $('.pajama-news').offset().top-800;
      var footer = $('.footer').offset().top;
      var winH = $(window).height();
      /* console.log(st); */


      if(st>=section1){
        $('.best-title h2').addClass('active');
        $('.best-title p').addClass('active');
        $('.slider-1').addClass('active');
        }
      else{
        $('.best-title h2').removeClass('active');
        $('.best-title p').removeClass('active');
        $('.slider-1').removeClass('active');
      }
      if(st>=section2){
        $('.sale-title h2').addClass('active');
        $('.time-sale-box .p-pc').addClass('active');
        $('.time-sale-box .p-mobile').addClass('active');
        $('.time-sale-box .time').addClass('active');
        $('.slider-2').addClass('active');
        } 
      else{
        $('.sale-title h2').removeClass('active');
        $('.time-sale-box .p-pc').removeClass('active');
        $('.time-sale-box .p-mobile').removeClass('active');
        $('.time-sale-box .time').removeClass('active');
        $('.slider-2').removeClass('active');
      } 
      if(st>=section3){
        $('.headline h2').addClass('active');
        $('.headline p').addClass('active');
        $('.collabo-text').addClass('active');
        } 
      else{
        $('.headline h2').removeClass('active');
        $('.headline p').removeClass('active');
        $('.collabo-text').removeClass('active');
      } 
      if(st>=section4){
        $('.news-video').addClass('active');
        $('.news-title h2').addClass('active');
        $('.news-title button').addClass('active');
        $('.accordion').addClass('active');
        } 
      else{
        $('.news-video').removeClass('active');
        $('.news-title h2').removeClass('active');
        $('.news-title button').removeClass('active');
        $('.accordion').removeClass('active');
      }
      if(st>=500){//투명도
        $(".top-btn").addClass('opacity-active', {duration:400});
      }else{
        $(".top-btn").removeClass('opacity-active', {duration:400});
      }
      if (st+winH>=footer){//풋터에 멈추기
        $(".top-btn").addClass('stop-active'); 
      }else{
        $(".top-btn").removeClass('stop-active');
      }
    });
  };



  function topBtn() {
    //top으로 올라가기
    $(".top-btn").on("click", function(e) {   
      e.preventDefault();
      $("html, body").stop().animate({ 'scrollTop' : '0'}, 300);
    });


    //스크롤에 따라 svg채워지기
    var  topBtnCircle = document.getElementById("circle");
    var length = topBtnCircle.getTotalLength();

    //도면의 시작점 얻기
    topBtnCircle.style.strokeDasharray = length;
    //svg를 표시하기위해 선을 제거
    topBtnCircle.style.strokeDashoffset = length;

    //스크롤 비율을 찾기>>>  전체길이 - 그려진부분 
    //(위에서 아래로 내릴때(선사라짐)를 먼저 계산하고, 그 반대를 사용)
    window.addEventListener("scroll", spinner);
    function spinner() {
      var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
      
      var fill = length * scrollpercent;
      topBtnCircle.style.strokeDashoffset = length - fill;
    };    
  };



  function collaboMenuDown() {
    var $collaboMenu = $('.collabo-menu'),
        $collaboTitle = $('.collabo-this'),
        $collaboImg = $('.collabo-this img'),
        $iconDown = $('.menu-down');


    $collaboMenu.slideUp();  //닫힌상태
    $('.menu-container').on('click', function(){  //콜라보 클릭했을때
      $iconDown.toggleClass('active');
      $collaboMenu.slideToggle();

      //콜라보 클릭하면, css활성화
      $collaboTitle.css({'color':'#C41E20'});
      $iconDown.css({'color':'#C41E20'});
      $collaboImg.css({'display':'inline-block', 'opacity':'1'});

      //나머지 호버했을때
      $('.back').on('mouseover', function(){  
        $collaboMenu.slideUp();
        $collaboTitle.css({'color':'#333'});
        $iconDown.css({'color':'#333'}).removeClass('active');
        $collaboImg.css({'display':'none', 'opacity':'0'});
      });

      //콜라보 호버했을때
      $collaboTitle.on('mouseover', function(){  
        $(this).css({'color':'#C41E20'});
        $iconDown.css({'color':'#C41E20'});
        $collaboImg.css({'display':'inline-block', 'opacity':'1'});
      });
    });
  };



  function hamburger() {
    var $hamburgerIcon = $('.hamburger-icon'),
        $hamburgerText = $('.hamburger-container'),
        $hamburgerMenu = $('.hamburger-menu'),
        $wrapper = $('.wrapper'),
        $logo = $('.header .gnb-mobile .logo'),
        $gnbIcons = $('.header .gnb-mobile .gnb-icons'),
        $logoM = $('.hamburger-menu .gnb-mobile .logo'),
        $gnbIconsM = $('.hamburger-menu .gnb-mobile .gnb-icons');



    $hamburgerIcon.on('click', function(){  //햄버거아이콘 클릭했을때
      $(this).toggleClass('close');
      $hamburgerText.toggleClass('active');
     
      
      //햄버거메뉴 슬라이드
      if ($hamburgerMenu.hasClass('active')) {
      $hamburgerMenu.removeClass('active');
      $wrapper.css({'position':'relative'});
      $logo.css({'display':'block'});
      $gnbIcons.css({'display':'flex'});
      $logoM.css({'display':'none'});
      $gnbIconsM.css({'display':'none'});
      } else {
      $hamburgerMenu.addClass('active');
      $hamburgerText.css({ 'opacity': '1', 'display': 'block' });
      $wrapper.css({'position':'absolute'});
      $logo.css({'display':'none'});
      $gnbIcons.css({'display':'none'});
      $logoM.css({'display':'block'});
      $gnbIconsM.css({'display':'flex'});
      }
    });


    //960이상 resize
    $(window).resize(function(){
      var winW = $(window).width();

      if(winW>=960){
        $hamburgerMenu.removeClass('active');
        $wrapper.css({'position':'relative'});
        $hamburgerIcon.removeClass('close');
      }
    });
  }


  
  function mainBanner() {
    var interleaveOffset = 1;

    var swiperOptions = {
      loop: true,
      speed:1000,
      slidesPerView: 1,
      centeredSlides: true,
      grabCursor: true,
      watchSlidesProgress: true,
      autoplay: {
        delay: 4500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type : 'bullets', //버튼 모양 결정 "bullets", "fraction" 
      },
      on: {
        progress: function() {
          var swiper = this;
          for (var i = 0; i < swiper.slides.length; i++) {
            var slideProgress = swiper.slides[i].progress;
            var innerOffset = swiper.width * interleaveOffset;
            var innerTranslate = slideProgress * innerOffset;
            swiper.slides[i].querySelector(".swiper-img-1, .swiper-img-2").style.transform =
              "translate3d(" + innerTranslate + "px, 0, 0)";
          }
        },
        touchStart: function() {
          var swiper = this;
          for (var i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = "";
          }
        },
        setTransition: function(speed) {
          var swiper = this;
          for (var i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = speed*2 + "ms";
            swiper.slides[i].querySelector(".swiper-img-1, .swiper-img-2").style.transition =
              speed + "ms";
          }
        }
      }
    };
    
    var swiper = new Swiper(".swiper-container", swiperOptions);
  };

  

  function productSlide() {

    $('.slider-p').slick({
    dots: true,
    dotsClass : "slick-dots", 	//아래 나오는 페이지네이션(점) css class 지정
    arrows: true,
    slide: '.slick-slide-p',
    slidesToShow: 4,
    slidesToScroll: 1, 
    centerMode: true,
    centerPadding: '60px', 
    draggable : true,
    infinite: true,
    pauseOnHover:true,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    prevArrow:'<button class="arrow-prev-p"></button>',
    nextArrow:'<button class="arrow-next-p"></button>', 
    /*  autoplay: true, */
    responsive: [
      {
        breakpoint: 1581,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 1201,
        settings: {            
          slidesToShow: 3
        }
      },
      {
        breakpoint: 961,
        settings: {
          slidesToShow: 2,
          dots: false
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          dots: false
        }
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
          dots: false
        }
      },
    ],

    onAfterChange: function() {
      var visibleSlides = $('.slider-p').find('.slick-slide-p[aria-hidden="false"]');
      $(visibleSlides).each(function() {
        $(this).css({'opacity': '1'});
      });
      $(visibleSlides).first().prev().css('opacity', 0);
    }
    });


    $('.slider-p').find('.arrow-prev-p').append('<div class="back-img"></div><svg class="arrow-spinner" width="30" height="30" viewBox="0 -1 30 32" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="15" r="15"/></svg>');
    $('.slider-p').find('.arrow-next-p').append('<div class="back-img"></div><svg class="arrow-spinner" width="30" height="30" viewBox="0 -1 30 32" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="15" r="15"/></svg>');
  };



  function timeSaleCount() {
    const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;
  
    var sale = "Dec 31, 2021 00:00:00",
    countDown = new Date(sale).getTime(),
    x = setInterval(function() {    
    var now = new Date().getTime(),
        distance = countDown - now;
  
      // document.getElementById("days").innerText = Math.floor(distance / (day));
      // document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour));
      // document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute));
      document.getElementById("days").innerText = Math.floor(distance / (day)) <=9 ? '0'+Math.floor(distance / (day)): Math.floor(distance / (day));
      document.getElementById("hours").innerText = Math.floor((distance % (day)) / hour) <=9 ? '0'+Math.floor((distance % (day)) / hour): Math.floor((distance % (day)) / hour);
      document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / minute) <=9 ? '0'+Math.floor((distance % (hour)) / minute): Math.floor((distance % (hour)) / minute);
      document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second) <=9 ? '0'+Math.floor((distance % (minute)) / second): Math.floor((distance % (minute)) / second);
    
      if (distance < 0) {
        countdown = document.getElementById("countdown");
        countdown.style.display = "block";
        clearInterval(x);
      }
    //seconds
    }, 0)
  };



  function collaboScrollTrigger() {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.saveStyles(".collabo-trigger"); //인라인 태그를 없애줘서, css가 망가지는것을 막아줌
    ScrollTrigger.matchMedia({
      // desktop
      "(min-width: 1201px) and (max-width: 1920px)": function() {
        var $section1 = $('.collabo-section-1'),
            $section2 = $('.collabo-section-2'),
            $section3 = $('.collabo-section-3');

        var tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".collabo-trigger",
            pin: true,
            scrub: 0.3,
            start: "top top",
            end: "+=300%",
          }
        });
        
        tl.from($section1, {y: '50%', autoAlpha: 0, duration:3, ease: "none", stagger:3})
          .to($section1, {y: '-100%', duration: 4});
        tl.from($section2, {y: '50%', autoAlpha: 0, duration:3, ease: "none", stagger:3})
          .to($section2, {y: '-100%', duration: 4});
        tl.from($section3, {y: '50%', autoAlpha: 0, duration:3, ease: "none", stagger:3})
          .to($section3, {y: '-100%', duration: 4}); 
      }, 
     


      // pad-pro
      "(min-width: 961px) and (max-width: 1200px)": function() {
        var $section1 = $('.collabo-section-1'),
            $section2 = $('.collabo-section-2'),
            $section3 = $('.collabo-section-3');

        var tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".collabo-trigger",
            pin: true,
            scrub: 0.3,
            start: "top top",
            end: "+=300%",
          }
        });
        
        tl.from($section1, {y: '50%', autoAlpha: 0, duration:3, ease: "none", stagger:3})
          .to($section1, {y: '-100%', duration: 4});
        tl.from($section2, {y: '50%', autoAlpha: 0, duration:3, ease: "none", stagger:3})
          .to($section2, {y: '-100%', duration: 4});
        tl.from($section3, {y: '50%', autoAlpha: 0, duration:3, ease: "none", stagger:3})
          .to($section3, {y: '-100%', duration: 4}); 
      }, 



      // pad1, mobile
      "(max-width: 960px)": function() {
        gsap.to(".collabo-section-1", {
          scrollTrigger: {
            trigger: ".collabo-trigger",
            start: "top 0px",
            end: "top 0px ",
            scrub: 0.5,
            toggleActions: "play pause reverse pause",
          },
          opacity:1,
        });
        gsap.to(".collabo-section-1-1", {
          scrollTrigger: {
            trigger: ".collabo-trigger",
            start: "top -100px",
            end: "top 0px ",
            scrub: 0.5,
            toggleActions: "play pause reverse pause",
          },
          opacity:1,
        });
        gsap.to(".collabo-section-2-1", {
          scrollTrigger: {
            trigger: ".collabo-trigger",
            start: "top -300px",
            end: "top 0px ",
            scrub: 0.5,
            toggleActions: "play pause reverse pause",
          },
          opacity: 1,
        });
        gsap.to(".collabo-section-2-2", {
          scrollTrigger: {
            trigger: ".collabo-trigger",
            start: "top -500px",
            end: "top 0px ",
            scrub: 0.5,
            toggleActions: "play pause reverse pause",
          },
          opacity: 1,
        });
        gsap.to(".collabo-section-3-1", {
          scrollTrigger: {
            trigger: ".collabo-trigger",
            start: "top -1200px",
            end: "top 0px ",
            scrub: 0.5,
            toggleActions: "play pause reverse pause",
          },
          opacity: 1,
        });
        gsap.to(".collabo-section-3-2", {
          scrollTrigger: {
            trigger: ".collabo-trigger",
            start: "top -800px",
            end: "top 0px ",
            scrub: 0.5,
            toggleActions: "play pause reverse pause",
          },
          opacity: 1,
        });
      }, 
    });
  };



  function collaboSlideTab() {
    var $navList = $('.tabs'),
        $navTab = $navList.children('.tab'),
        tabWidth = $navTab.eq(0).outerWidth();

    //탭 슬라이드
    $('.slider-c').slick({
    arrows: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    pauseOnHover: true,
    speed: 3000,
    infinite: true,
    draggable:false,
    pauseOnHover:false,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',

    onBeforeChange: function() {
      var index = $('.slider-c').slickCurrentSlide();
      
      $navTab.removeClass('active');
      $navTab.eq(index).addClass('active');
    }
    });


    //선택한 여러개의 탭을 순회할때
    $navTab.each( function() {
      var index = $(this).index(); //탭의 인덱스값
      var leftPos = (tabWidth * index) + 'px'; //왼쪽 포지션(픽셀) = 탭의 첫번째 넓이*탭의 인덱스값
      $(this).css( 'left', leftPos ); //탭이 왼쪽으로 ()만큼 가라
  
    });
    //탭을 클릭할때
    $navTab.on('click', function() {
      $navTab.removeClass('active');
      $(this).addClass('active');
      var index = $(this).index();
      $('.slider-c').slickGoTo( parseInt(index));
    }); 
  };



  function newsList() {
    //아코디언 실행
    $( ".accordion" ).accordion({
      animate: 600
    });
  
    //첫번째 타이틀 닫히기
    //첫번째 타이틀 화살표 닫히기
    var $title1st = $('.accordion-title').eq(0);
    var $titlei1st = $('.accordion-title').eq(0).find('i');

      function titleAct(){
        $title1st.css({'border-bottom-color': '#aaa', 'background': 'linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,0.5) 40%, rgba(255,255,255,0.5) 60%, rgba(255,255,255,0))'});
      }
      titleAct();
      function titleiAct(){
        $titlei1st.removeClass('fas fa-chevron-down');
        $titlei1st.addClass('fas fa-chevron-up');
      }
      titleiAct();



    //타이틀을 클릭할때 css변경
    var $titleAll = $(".accordion-title"); 
        $video = $( ".news-video video" );
        $img = $(".news-video img");

      $titleAll.on('click',function(){
        $titleAll.css({'border-bottom-color': '#333', 'background': 'none'});
        $(this).css({'border-bottom-color': '#aaa', 'background': 'linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,0.5) 40%, rgba(255,255,255,0.5) 60%, rgba(255,255,255,0))'});
        
        $(this).find('i').removeClass('fas fa-chevron-down');
        $(this).find('i').addClass('fas fa-chevron-up');
        $(this).siblings().find('i').removeClass('fas fa-chevron-up');
        $(this).siblings().find('i').addClass('fas fa-chevron-down');
      });
    
      //타이틀을 클릭할때 비디오변경
      $titleAll.on('click',function(){
        var $video2 = $video.attr("src", "./video/video-2.mp4");
        $video2.show();
        $img.css({'display':'none'});
      });
  
      $(".accordion-title1").on('click',function(){
        var $video1 = $video.attr("src", "./video/video-1.mp4");
        $video1.show();
        $img.css({'display':'none'});
      });
      $(".accordion-title2").on('click',function(){
        $( ".news-video img:nth-child(1)" ).css({'display':'block'});
        $video.css({'display':'none'});
      });
      $(".accordion-title3").on('click',function(){
        $( ".news-video img:nth-child(2)" ).css({'display':'block'});
        $video.css({'display':'none'});
      });
      $(".accordion-title4").on('click',function(){
        $( ".news-video img:nth-child(3)" ).css({'display':'block'});
        $video.css({'display':'none'});
      });    
  };



  function footerMenuDown() {
    //풋터의 언어메뉴 
    $('.language-menu').slideUp();

    //풋터의 언어를 클릭할때 
    $('.language-container').on('click', function(){
    $('.language-menu').slideToggle();
    $('.menu-down').toggleClass('active').css({'margin-bottom':'6px'});
  });
  };




 

  








  scroll();
  topBtn();
  collaboMenuDown();
  hamburger();
  mainBanner();
  productSlide();
  timeSaleCount();
  collaboScrollTrigger();
  collaboSlideTab();
  newsList();
  footerMenuDown();
  
});