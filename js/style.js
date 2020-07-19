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
            location.href='content_stat_list.html'
        }
    })
})
//영웅선택 페이지