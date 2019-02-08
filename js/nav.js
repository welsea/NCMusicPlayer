//显示二级导航
$('.icon-my').click(function(){
    let id=$(this).data('id');
    $('.nav2').each(function(index,element){
        if(!$(element).data('id')===id){
            $(element).toggleClass('hidden')
        }else{
            if(!$(element).hasClass('hidden'))
                $(element).addClass('hidden')
        }
    });
   
})
