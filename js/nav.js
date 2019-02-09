//显示二级导航
$(document).on('click','.nav-icon',function(){
    let id=$(this).data('id');
    // console.log(id)
    $('.nav2').each(function(index,element){
        if(($(element).data('id'))==id){
            $(element).toggleClass('hidden')
            // console.log(id)
        }else{
            if(!($(element).hasClass('hidden')))
                $(element).addClass('hidden')
        }
    });
})