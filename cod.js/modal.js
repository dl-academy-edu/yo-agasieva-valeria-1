let contactContainer = document.querySelector('.contact__container_js')
let contactContaineExitBtn = document.querySelector('.contact__exit_js')
let contactContaineOpenBtn = document.querySelector('.banner__btn_js')

contactContaineOpenBtn.addEventListener('click', () => {
    contactContainer.classList.remove('hidden')
})

contactContaineExitBtn.addEventListener('click', () =>{
    contactContainer.classList.add('hidden')
})