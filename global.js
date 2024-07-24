function redirecionar (url) {
    window.location.href = url
}

function scrollToSection() {
    window.scrollBy({
        top: window.innerHeight - (window.innerHeight * 25 /100) ,
        behavior: 'smooth' // Faz a rolagem ser suave
    });
}

function scrollToId(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        console.error(`Elemento com ID '${id}' não encontrado.`);
    }
<<<<<<< HEAD
}

function sidebar() {
    const menu_contracted = document.querySelector(".menu_contracted")
    const menu_contracted_close = document.querySelector(".menu_contracted_close")
    const base = document.querySelector(".base");

    menu_contracted.style.display = 'block';
    base.style.opacity = '0.2';
    document.querySelector('header').style.opacity = '0.2';

    menu_contracted_close.addEventListener("click", function(){
        menu_contracted.style.display = 'none';
        base.style.opacity = '1';
        document.querySelector('header').style.opacity = '1';
    })
}

function redirecionar_menu(url) {
    const menu_contracted = document.querySelector(".menu_contracted")
    menu_contracted.style.display = 'none';
    window.location.href = url

=======
>>>>>>> 84e30734b51953638627533f50009f5c0ac6f663
}