$(function () {

    $('.sitemap button').click(function(){
        $(this).children('.sitemap-buttonwrap').toggleClass("open");
        $(".sitemap__inner, .sitemap-menu").toggleClass("open");
        if($('.sitemap__inner').hasClass('open')){
            //console.log("a");
            $('body').css('overflow','hidden');
        }else{
            //console.log("b");
            $('body').css('overflow','auto');
        }    
    })
   

    $("header.on").children(".logo").find("img").attr("src","./inc/resource/image/logo-on.png");

    $(".arrow-top").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 300);
    });

    $(".busi-info__more").hide();
    $(".busi-info button").click(function(){
        $(this).toggleClass("show");
        $(".busi-info__more").slideToggle();
    })


    //header
    $('header').mouseover(function(){
		$('header').addClass('on')		
	});
	$('header').mouseleave(function(){
		$('header').removeClass('on')
	});
	$(".menu__inner > div > div > a").on("mouseover", function(){
		$(".menu__inner > div >  div > a").removeClass("on");
		$(".menu__inner > div > div").removeClass("open");
		$(this).parent().addClass("open");
		$(this).addClass("on");
		// headerOpen();
	});
	$(".menu__inner > div > div").on("mouseleave", function(){
		$(".menu__inner > div > div > a").removeClass("on");
		$(".menu__inner > div > div").removeClass("open");
	});
	$(".menu__inner > div > div > a").focus(function(){
		$(this).parent().addClass("on");
		// headerOpen();
		$(this).next().show();
	});
	$(".menu__inner > div > div > a").focusout(function(){
		$(this).parent().removeClass("on");
	});
	$("body").on("mouseleave", "header", function(){
		// headerClose();
		$(".gnb_hover_bar").removeClass("on");
	});
	$("body").on("mouseover", "header .head_top", function(){
		// headerClose();
	});
    

})







//Tweenmax를 이용한 header  

// $(function () {
//     gnbSubMenu();

// });


// function gnbSubMenu() {
//     var gnb = $(".gnb");
//     var gnbChild = $(".gnb > div");
//     var gnbTitle = gnb.find('a');

//     gnbChild.on({
//         mouseover: function () {
//             $(this).addClass('on')
//         },
//         mouseleave: function () {
//             $(this).removeClass('on');
//         }
//     });
//     gnbTitle.mouseover(function () {
//         headerOpen();
//     });
//     $('.gnb').mouseleave(function () {
//         headerClose();
//         $('body').css('overflow', 'initail')
//     });

//     function headerOpen() { //Tweenmax를 이용한 헤더 메뉴 슬라이드 open
//         TweenMax.killAll();
//         TweenMax.to($(".menu"), .5, {
//             height: 440,
//             ease: 'easeOutExpo'
//         });
//         $(".gnb").addClass("on");
//     }

//     function headerClose() { //Tweenmax를 이용한 헤더 메뉴 슬라이드 close
//         TweenMax.killAll();
//         TweenMax.to($(".menu"), .5, {
//             height: 60,
//             ease: 'easeOutExpo',
//             onComplete: function () {
//                 $(".gnb").removeClass("on");
//             }
//         });
//         $('.overlay').removeClass('on');
//         $(".gnb-hover-bar").removeClass("on");
//     }



    



// }
