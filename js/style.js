$(document).ready(function(){
    $('.hero_stat_list_img_wrap li').click(function(){
        if($(this).hasClass('on')){
           $(this).removeClass('on'); 
        }
        else{
            $(this).addClass('on'); 
        }
    });
    $('.hero_select_btn button').click(function(){
        if($('.hero_stat_list_img_wrap li').hasClass('on') <= 0){
            alert('영웅을 선택해주세요.');
        }
        else{
            location.href='hero_stat_item_list.html'
        }
    })
    //영웅선택 페이지
    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');
        
        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');
        
        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    })
    //영웅아이템페이지 탭메뉴
    $('.content_stat_list_wrap div:first-child ul li').click(function(){
        $('.content_stat_list_wrap div:first-child ul li').removeClass('on'); 
        $(this).addClass('on');
        $('.content_stat_list_wrap div:first-child .bage_img1').attr('src','images/img_content_stat_bage.png')
    });
    $('.content_stat_list_wrap div:nth-child(2) ul li').click(function(){
        $('.content_stat_list_wrap div:nth-child(2) ul li').removeClass('on'); 
        $(this).addClass('on');
        $('.content_stat_list_wrap div:nth-child(2) .bage_img2').attr('src','images/img_content_stat_bage.png')
    });
    $('.content_stat_list_wrap div:last-child ul li').click(function(){
        $('.content_stat_list_wrap div:last-child ul li').removeClass('on'); 
        $(this).addClass('on');
        $('.content_stat_list_wrap div:last-child .bage_img3').attr('src','images/img_content_stat_bage.png')
        $('.content_select_btn button').addClass('on').click(function(){
            location.href='content_stat_party_list.html'
        });
    });
    //통계리스트
});
