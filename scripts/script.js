const imagePopup = document.querySelector('#popup-image');
const imagePopupCloseBtn = imagePopup.querySelectorAll('#popup-image-close-button')
const appartmentsWrapper = document.querySelectorAll('.appartaments__image-wrapper');
const appartamentsImage = document.querySelector('.appartaments__image');
const appartmentsImageTitle = document.querySelector('.appartaments__image-title');
const imagePopupContainer = imagePopup.querySelectorAll('.popup-image__container');
const imagePopupImage = document.querySelector('.popup-image__image');
const imagePopupTitle = document.querySelector('.popup-image__title');

function openPopup(popup) {
    popup.classList.add('popup__opened');
}

function closePopup(popup) {
    popup.classList.remove('popup__opened');
}

function openImagePopup(title, image) {
    openPopup(imagePopup);
    fillPopup(title, image);
}

function closeImagePopup() {
    closePopup(imagePopup)
}

function fillPopup(title, image) {
    imagePopupImage.src = image;
    imagePopupImage.alt = title;
    imagePopupTitle.textContent = title;
}

appartmentsWrapper.forEach((item) => {

    const title = item.querySelector('.appartaments__image-title').textContent;
    const image = item.querySelector('.appartaments__image').src;
    item.addEventListener('click', () => {
        openImagePopup(title, image);
    });
});

imagePopupCloseBtn.forEach((closeBtn) => {
    closeBtn.addEventListener('click', closeImagePopup);
})