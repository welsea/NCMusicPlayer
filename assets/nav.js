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
    $('.nav-icon').removeClass('nav-icon-click')
    $(this).toggleClass('nav-icon-click');
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

//section
// const settings = require('electron-settings')

// document.body.addEventListener('click', (event) => {
//   if (event.target.dataset.section) {
//     handleSectionTrigger(event)
//   } else if (event.target.dataset.modal) {
//     handleModalTrigger(event)
//   } else if (event.target.classList.contains('modal-hide')) {
//     hideAllModals()
//   }
// })

// function handleSectionTrigger (event) {
//   hideAllSectionsAndDeselectButtons()

//   // Highlight clicked button and show view
// //   event.target.classList.add('is-selected')

//   // Display the current section
//   const sectionId = `${event.target.dataset.section}-section`
//   document.getElementById(sectionId).classList.add('is-shown')

//   // Save currently active button in localStorage
//   const buttonId = event.target.getAttribute('id')
//   settings.set('activeSectionButtonId', buttonId)
// }

// function activateDefaultSection () {
//   document.getElementById('button-windows').click()
// }

// function showMainContent () {
//   document.querySelector('.js-nav').classList.add('is-shown')
//   document.querySelector('.js-content').classList.add('is-shown')
// }

// function handleModalTrigger (event) {
//   hideAllModals()
//   const modalId = `${event.target.dataset.modal}-modal`
//   document.getElementById(modalId).classList.add('is-shown')
// }

// function hideAllModals () {
//   const modals = document.querySelectorAll('.modal.is-shown')
//   Array.prototype.forEach.call(modals, (modal) => {
//     modal.classList.remove('is-shown')
//   })
//   showMainContent()
// }

// function hideAllSectionsAndDeselectButtons () {
//   const sections = document.querySelectorAll('.js-section.is-shown')
//   Array.prototype.forEach.call(sections, (section) => {
//     section.classList.remove('is-shown')
//   })

//   const buttons = document.querySelectorAll('.nav-button.is-selected')
//   Array.prototype.forEach.call(buttons, (button) => {
//     button.classList.remove('is-selected')
//   })
// }

// function displayAbout () {
//   document.querySelector('#about-modal').classList.add('is-shown')
// }

// // Default to the view that was active the last time the app was open
// const sectionId = settings.get('activeSectionButtonId')
// if (sectionId) {
//   showMainContent()
//   const section = document.getElementById(sectionId)
//   if (section) section.click()
// } else {
//   activateDefaultSection()
//   displayAbout()
// }
