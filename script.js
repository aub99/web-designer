/*====================Scroll section code==================*/
Let sections = document.querySelectorAll('section');
Let navlinks = document.querySelectorAll('header nav a');

}

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        Let offset = sec.offsetTop - 150;
        Let height = sec.offsetHeight;
        Let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height ) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');  
            });
        };
    });
    /*==================== Sticky navbar ==================*/
    Let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY;


}
