let currentPage = 1;
const book = document.querySelector('.book');
const pages = document.querySelectorAll('.page');
const nextButton = document.querySelector('.next-button');

nextButton.addEventListener('click', () => {
    if (currentPage === 1) {
        pages[0].style.transform = 'rotateY(-180deg)';
        currentPage++;
    } else if (currentPage === 2) {
        pages[1].style.transform = 'rotateY(-360deg)';
        currentPage++;
        nextButton.style.display = 'none';  // Hide button after third page
    }
});