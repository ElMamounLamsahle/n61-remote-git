(()=> {
    let title = document.querySelector('[data-js-title]');
    title.addEventListener('click', function() {
        alert(this.textContent);
    })
})()