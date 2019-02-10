//显示二级导航
$(document).on('click','.nav-icon',function(){
    let id=$(this).data('id');
    // console.log(id)
    $('.nav2').each(function(index,element){
        if(($(element).data('id'))==id){
            $(element).toggleClass('hidden');
        }else{
            if(!($(element).hasClass('hidden')))
                $(element).addClass('hidden')
        }
    });
})

//nav点击变色
$(document).on('click','.nav-icon',function(){
    $(this).toggleClass('nav-icon-click');
    if($(this).parents().hasClass('nav-btm')){
        $(this).parents('.nav-btm').siblings('.nav1').children('.nav-icon').removeClass('nav-icon-click');
        $(this).parent().siblings('.nav1').children('.nav-icon').removeClass('nav-icon-click')
    }else{
       $(this).parent().siblings('.nav1').children('.nav-icon').removeClass('nav-icon-click');
       $('.nav-btm').find('.nav1 .nav-icon').removeClass('nav-icon-click')
    }
})
//nav2
$(document).on('click','.item',function(){
    $('.item').each(function(index,element){
        $(element).removeClass('item-click')
    })
    $(this).toggleClass('item-click');
})

//展开列表
$(document).on('click','.drop-title',function(){
    $(this).find('.icon').toggleClass('icon-unfold');
    $(this).next('.drop-items').toggleClass('hidden')
})

