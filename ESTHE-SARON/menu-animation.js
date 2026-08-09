document.addEventListener('DOMContentLoaded', function () {
    var targets = document.querySelectorAll('.price-block, .menu-nav-card');

    targets.forEach(function (el, i) {
        el.classList.add('lux-fade');
        el.style.transitionDelay = (i * 0.08) + 's';
    });

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            } else {
                entry.target.classList.remove('is-visible');
            }
        });
    }, { threshold: 0.1 });

    targets.forEach(function (el) {
        observer.observe(el);
    });
});
