var signButton = document.querySelector('.contact-info__sign-up');

if (signButton) {
    var formModal = document.querySelector('.form-modal');
    var formModalCloseButton = formModal.querySelector('.form-modal__close-button');
    var formModalButton = formModal.querySelector('.form-modal__button');

    var sentModal = document.querySelector('.sent-modal');
    var sentModalCloseButton = sentModal.querySelector('.sent-modal__close-button');

    signButton.addEventListener('click', function (evt) {
        evt.preventDefault();
        formModal.classList.remove('form-modal--hide');
    });

    formModalCloseButton.addEventListener('click', function (evt) {
        evt.preventDefault();
        formModal.classList.add('form-modal--hide');
    })

    formModalButton.addEventListener('click', function (evt) {
        evt.preventDefault();
        formModal.classList.add('form-modal--hide');
        sentModal.classList.remove('sent-modal--hide');
    })

    sentModalCloseButton.addEventListener('click', function (evt) {
        evt.preventDefault();
        sentModal.classList.add('sent-modal--hide');
    })

    window.addEventListener('keydown', function (evt) {
        if (evt.keyCode === 27) {
            evt.preventDefault();
            formModal.classList.add('form-modal--hide');
            sentModal.classList.add('sent-modal--hide');
        }
    });
}
