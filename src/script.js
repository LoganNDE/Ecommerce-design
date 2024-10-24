const btnMenuMobile = document.querySelector(".btnMenuMobile");
const body = document.querySelector("body");
let menuDesplegado = false


/*body.addEventListener("click", (event) =>{
    if (menuDesplegado){
        closeBtnMenu();
    }
})

*/


btnMenuMobile.addEventListener("click", () =>{
        let menuMobile = document.createElement("nav");
        body.appendChild(menuMobile);
        menuMobile.classList.add("menuMobile");

        //Btn 
        let btnCerrar = document.createElement("div");
        btnCerrar.classList.add("btnCloseMenuMobile");

        let btn = document.createElement("a");
        btn.classList.add("btnMenuDesplegado");
        btnCerrar.appendChild(btn);
       
        let contenido = document.createElement("i");
        contenido.classList.add("fa-solid");
        contenido.classList.add("fa-xmark");

        btn.appendChild(contenido);
        menuMobile.appendChild(btnCerrar);
        menuDesplegado = true

        let filterBack = document.createElement("div");
        filterBack.classList.add("filterBack");
        body.appendChild(filterBack);

        //Cerrar Menu
        btn.addEventListener("click", closeBtnMenu);
        filterBack.addEventListener("click", closeBtnMenu);   

    })



    let closeBtnMenu = (event) => {
        let menuMobile = document.querySelector(".menuMobile")
        let filterBack = document.querySelector(".filterBack")

        menuMobile.classList.remove("menuMobile");
        menuMobile.remove();
        menuDesplegado = false;

        filterBack.classList.remove("filterBack");
        filterBack.remove();
    }






















