const links = document.querySelectorAll('link[rel="import"]')

// Import and add each page to the DOM
Array.prototype.forEach.call(links, (link) => {
  let template = link.import.querySelector('.task-template')
  let clone = document.importNode(template.content, true)
  if (link.href.match('about.html')) {
    document.querySelector('body').appendChild(clone)
  } else {
    document.querySelector('.content').appendChild(clone)
  }
})

//open select section
$(document).ready(function(){
  $('.nav-icon').click(function(){
    if($(this).data('id')=='search'){
      $('.section').addClass('hidden');
      $('#search-section').toggleClass('hidden');
      console.log('search')
    }
  })
  $('.item').click(function(){
    let id=$(this).data('section')+'-section';
    $('.section').addClass('hidden');
    $('#'+id).toggleClass('hidden');
    console.log(id)
  })
})
