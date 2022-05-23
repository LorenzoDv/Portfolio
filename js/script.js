const slidingNewsletter = document.querySelector('.projects');
const moovearow = document.getElementById('arrowmoove')

window.addEventListener('scroll', () => {

    const { scrollTop, clientHeight } = document.documentElement;

    // console.log(scrollTop, clientHeight);

    const topElementToTopViewport = slidingNewsletter.getBoundingClientRect().top;



    if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8) {
        slidingNewsletter.classList.add('active')
    }
    if (scrollTop < (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8) {
        slidingNewsletter.classList.remove('active')
    }
    if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8) {
        moovearow.classList.add('arrow')
    }
    if (scrollTop < (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8) {
        moovearow.classList.remove('arrow')
    }
})