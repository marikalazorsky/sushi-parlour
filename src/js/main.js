window.onload = function() {
    document.querySelector('.burger').addEventListener('click', function(){
        document.querySelector('.burger span').classList.toggle('active');
        document.querySelector('.header__menu nav').classList.toggle('open');
    })
}