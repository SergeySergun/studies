window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#burger').addEventListener('click', function() {
        document.querySelector('#menu_burger').classList.toggle('is-active');
    }),
    document.querySelector('#menu_burger__x').addEventListener('click', function() {
        document.querySelector('#menu_burger').classList.remove('is-active');
});
})

