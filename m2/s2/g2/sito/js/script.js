let sliderCustom = document.querySelectorAll('.carousel-custom');

sliderCustom.forEach(slider => {

    let imgs = slider.querySelectorAll('.carousel-item img');

    imgs.forEach(img => {
        let src = img.src;
        img.parentElement.style.backgroundImage = `url(${src})`;
    })

})