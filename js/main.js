//tab

let tabContainer = document.querySelector('.services-tabs');
let tabsTitleCollection = document.querySelectorAll('.services-tabs-title')
let tabsContentCollection = document.querySelectorAll('.services-tabs-content-item');

tabContainer.addEventListener('click', (event) => {

    tabsContentCollection.forEach(element => {
        if (event.target.dataset.tab === element.dataset.tab) {
            event.target.classList.add('active');
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
        tabsTitleCollection.forEach(item => {
            if (item !== event.target) {
                item.classList.remove('active')
            }
        })
    })
})

//tab2

let tabsMenu = document.querySelector('.amazing-work-tabs');
let tabsMenuItems = document.querySelectorAll('.amazing-work-tabs-title');
let btnLoadMore = document.querySelector('.btn-load');
let tabsContent = document.querySelectorAll('.amazing-work-content');
let spinner = document.querySelector('.lds-ring');


tabsContent.forEach(el => console.log(el))

tabsMenu.addEventListener('click', event => {
    tabsContent[1].classList.remove('active');
    btnLoadMore.classList.remove('hidden')
    tabsContent.forEach(block => {
        if (block.classList.contains('active')) {
            block.querySelectorAll('.amazing-work-item').forEach(el => {

                if (event.target.dataset.tab === el.dataset.tab) {
                    el.classList.add('active');
                } else if (event.target.dataset.tab === 'all') {
                    el.classList.add('active');

                } else {
                    el.classList.remove('active');
                }
            })
            if (!event.target.classList.contains('active')) {
                event.target.classList.add('active');
            }
            tabsMenuItems.forEach(item => {
                if (item !== event.target) {
                    item.classList.remove('active')
                }
            })
        }
    })
})


btnLoadMore.addEventListener('click', () => {
    setTimeout(function () {
        btnLoadMore.classList.add('hidden');
        spinner.classList.add('active')
        setTimeout(function () {

            tabsContent.forEach(el => {
                if (!el.classList.contains('active')) {
                    el.classList.add('active');
                    el.querySelectorAll('.amazing-work-item').forEach(content => {
                        tabsMenuItems.forEach(tab => {
                            if (tab.classList.contains('active')) {
                                if (tab.dataset.tab === content.dataset.tab) {
                                    content.classList.add('active');
                                } else if (tab.dataset.tab === 'all') {
                                    content.classList.add('active');
                                } else {
                                    content.classList.remove('active');
                                }
                            }
                        })
                    })
                }
            })
            spinner.classList.remove('active')
        }, 1000)
    }, 10)
})


// Slider

new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 1,
}).mount();

