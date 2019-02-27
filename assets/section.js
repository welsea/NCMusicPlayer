//section宽度
$(document).on('click','.nav-icon',function(){
    let id=$(this).data('id');
    // console.log(id)
    $('.nav2').each(function(index,element){
        if(!($(element).hasClass('hidden'))){
            $('section').addClass('section');
        }else{
            $('section').addClass('section-nav2-hidden')
        }
    })
            
})