$(function () {
	$('.select .dropdown').on('show.bs.dropdown', function () {

	})

	// 가격순, 인기순
	$('.content-tit ul li').click(function () {
		$(this).addClass("selected");
		$(this).siblings().removeClass("selected");
	})

	



	//전체일정보기
	$('.panel-heading').click(function () {
		$(this).children().find('.click-plus').toggleClass('on');
		$(this).parents('li').children().find('.panel-body__all').slideToggle();
	})

	$(".expand").click(function () {
		$(this).toggleClass('on');
		if ($(this).hasClass("on")) {
			$('.expand').contents()[0].textContent = "전체 일정 접기";
		} else {
			$('.expand').contents()[0].textContent = "전체 일정 보기";
		}
		if ($(this).data("closedAll")) {
			$(".panel-body__all").slideDown();
			$(".panel-heading").addClass("on");
			$('.click-plus').addClass('on');
		} else {
			$(".collapse").collapse("hide");
			$(".panel-body__all").slideUp();
			$(".panel-heading").removeClass("on");
			$('.click-plus').removeClass('on');
		}
		// save last state
		$(this).data("closedAll", !$(this).data("closedAll"));

	});

	// init with all closed
	$(".expand").data("closedAll", true);


	$('.panel-heading').on('hide.bs.collapse', function () {
		$(this).addClass("dkdkdkdkdk")
	})


	//tab-menu
	$('ul.slidee.tab li').click(function () {
		var activeTab = $(this).attr('data-tab');
		$('ul.slidee.tab li').removeClass('current');
		$('.tabcontent').removeClass('current');
		$(this).addClass('current');
		$('#' + activeTab).addClass('current');
	})

	//slideup-menu
	var $slidebg = $('<div class="slideup-bg"></div>');

	$('.slideup-content').hide();

	//touch 했을 때
	$(".slideup-content").on('touchstart', function (event) {
		$('.slideup-content').slideDown();
		$('.slideup-content').addClass('on');
		$('.room2').hide();
		if ($('.slideup-content').hasClass('on')) {
			$('.content').css('position', 'relative');
			$('body').css('overflow-y', 'hidden');
			$('.content').append($slidebg);
			$('.user-area').addClass('fixed');
			$('.room-list').show();
			$('.slideup-bg').not('.slideup-content').click(function(){
				$('.slideup-content').removeClass('on');
				$('.slideup-content').slideUp('');
				$('.slideup-bg').remove();
				$('body').css('overflow-y', 'unset');
				$('.user-area').removeClass('fixed');
				$('.slideup').removeClass('ready');
				$('.room2').show();
				$('.room-list').hide();
			})
			$('.slideup').addClass('ready');
		} else {
			$('.slideup-bg').remove();
			$('body').css('overflow-y', 'unset');
			//$('.content').css('position','unset');
			$('.user-area').removeClass('fixed');
			$('.slideup').removeClass('ready');
			$('.room2, .room-list').show();
		}
	});

	//click 했을때
	$('.slideup').click(function () {
		$('.slideup-content').slideDown();
		$('.slideup-content').addClass('on');
		$('.room2').hide();
		if ($('.slideup-content').hasClass('on')) {
			$('.content').css('position', 'relative');
			$('body').css('overflow-y', 'hidden');
			$('.content').append($slidebg);
			$('.user-area').addClass('fixed');
			$('.room-list').show();
			$('.slideup-bg').not('.slideup-content').click(function(){
				$('.slideup-content').removeClass('on');
				$('.slideup-content').slideUp('');
				$('.slideup-bg').remove();
				$('body').css('overflow-y', 'unset');
				$('.user-area').removeClass('fixed');
				$('.slideup').removeClass('ready');
				$('.room2').show();
				$('.room-list').hide();
			})
			$('.slideup').addClass('ready');
		} else {
			$('.slideup-bg').remove();
			$('body').css('overflow-y', 'unset');
			//$('.content').css('position','unset');
			$('.user-area').removeClass('fixed');
			$('.slideup').removeClass('ready');
			$('.room2, .room-list').show();
		}
	})

	//a 링크 막기
	$('.slideup').click(function(){
		$(this).parents().find('a');
		event.preventDefault();
	})

	//switch-button
	var check = $(".switch input[type='checkbox']");

	//$('.toggle-div>div').hide();

	check.click(function () {
		//$("p").toggle();
		$(this).parents('.toggle-div').toggleClass('on');
		//$('.toggle-div>div').show();
	});

	//select box
	$('.select-custom ul').hide();
	$('.select-custom>span').click(function () {
		$(this).parents('.select-custom').toggleClass('on');
		$(this).toggleClass('on');
		if ($(this).hasClass('on')) {
			$(this).next('ul').slideDown();
		} else {
			$(this).next('ul').slideUp();
		}
	})


	//touch
	var startX, startY, endX, endY;
	$(".slideup-content").on('touchstart', function (event) {
		startX = event.originalEvent.changedTouches[0].screenX;
		startY = event.originalEvent.changedTouches[0].screenY;
	});
	$(".slideup-content").on('touchend', function (event) {
		endX = event.originalEvent.changedTouches[0].screenX;
		endY = event.originalEvent.changedTouches[0].screenY;
		if (startY - endY > 50) {
			//아래에서 위로
			$(".slideup-content").slideDown();
			$('.slideup-content').addClass('on');
			$('.content').append($slidebg);
			$('body').css('overflow-y', 'hidden');
			$('.user-area').addClass('fixed')
		} else if (endY - startY > 150) {
			//위에서 아래로
			$(".slideup-content").slideUp();
			$('.slideup-content').removeClass('on');
			$('.slideup-bg').remove();
			$('body').css('overflow-y', 'unset');
			$('.user-area').removeClass('fixed')
		} 
		
	});

	// view 더보기 버튼
	$('.thumbsSlider').slideUp();
	$('.button-view').click(function(){
		$(this).closest('a').parent('div').toggleClass('on');
		$(this).toggleClass('on');
		$(this).parents('div').children().find('.thumbsSlider').slideToggle();
	})


	//약관 동의
	$('.agree-child').hide();
	$('.arrow-agree').click(function(){
		$(this).parents('.form-check').toggleClass('active');
		$(this).parents('.form-check').children().find('i').toggleClass('on');
		$(this).parents('.form-check').next().slideToggle();

	})

	//accordion
	$('.accordion-contents').slideUp();
	$('.accordion-heading').click(function(){
		$(this).parents('.accordion-box').toggleClass('active');
		//$(this).toggleClass('active');
		$(this).next().slideToggle();
	})

	//호텔 등급
	$('.hotel-star button').click(function(){
		$(this).toggleClass('selected');
	})

	//항공권 선택
	$('.choice-country button').click(function(){
		$(this).addClass('selected').siblings().removeClass('selected');
	})

	//검색 조건
	$('.filter-button').not('.filter-button>button').click(function(){
		$(this).toggleClass('on');
		$('.filter-item').slideToggle();
	})
	$('.button-fold').click(function(){
		$('.filter-button').removeClass('on');
		$('.filter-item').slideUp();
	})

	//button-list 클릭시
	$('.button-list button').click(function(){
		$(this).toggleClass('active');
	})


})

