const accordionLists = document.querySelectorAll('.accordion-list');

accordionLists.forEach(el => {


  el.addEventListener('click', (e) => {

    const accordionList = e.currentTarget
    const accordeonOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
    const accordeonOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

    const accordeonControl = e.target.closest('.accordion-list__control');
    if (!accordeonControl) return
    e.preventDefault()
    const accordeonItem = accordeonControl.parentElement;
    const accordeonContent = accordeonControl.nextElementSibling;

    if (accordeonOpenedItem && accordeonItem != accordeonOpenedItem) {
      accordeonOpenedItem.classList.remove('accordion-list__item--opened');
      accordeonOpenedContent.style.maxHeight = null;
    }

    accordeonItem.classList.toggle('accordion-list__item--opened');

    if (accordeonItem.classList.contains('accordion-list__item--opened')) {
      accordeonContent.style.maxHeight = accordeonContent.scrollHeight + 'px';
    } else {
      accordeonContent.style.maxHeight = null;
    }


  })

})