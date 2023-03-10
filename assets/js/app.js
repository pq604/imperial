$(function() {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();


    /* Fixed Header */
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if( scrollOffset >= introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }



    /* Smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop:  blockOffset
        }, 500);
    });



    /* Menu nav toggle */
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });



    /* Collapse */
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('collapse');

        $this.toggleClass("active");
    });


    /* Slider */
    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

});

const btn = document.querySelector('.stick__btn');
const modal = document.querySelector('.modal');
const modalBody = document.querySelector('.modal__body');
const modalForm = document.querySelector('.modal__form');

modalBody.addEventListener('click', function(e) {
    e.stopPropagation();
});

btn.addEventListener('click', () => {
    console.log('clisk')
    modal.classList.add('visible');
});

modal.addEventListener('click', () => {
    modal.classList.remove('visible');
});

modalForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    const formValue = new FormData(e.target);
    const formData = Object.fromEntries(formValue);
    
    console.log(formData);

    try {
        const response = await fetch("http://localhost:3000/api/v1/mail-send",
        {
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(formData)
        });
        console.log({response})
    } catch (error) {
        console.log(error);
    }
});