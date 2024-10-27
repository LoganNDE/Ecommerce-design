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
        menuDesplegado = true
       
        divNavMobile = document.querySelector(".containerMenu-2")
        backgroundMenu = document.querySelector(".filterBack")
        btnCloseMenu = document.querySelector(".btnCloseMenu")
        navMobile = document.querySelector(".navMenu-2")
        

        navMobile.classList.remove("hiddenContent")
        divNavMobile.style.width = "350px"
        backgroundMenu.classList.remove("hiddenContent")



        //Cerrar Menu
        btnCloseMenu.addEventListener("click", closeBtnMenu);
        backgroundMenu.addEventListener("click", closeBtnMenu);   
    })


    let closeBtnMenu = (event) => {
        console.log("Hola")
        let divNavMobile = document.querySelector(".containerMenu-2")
        let filterBack = document.querySelector(".filterBack")
        navMobile = document.querySelector(".navMenu-2")

        divNavMobile.style.width = "0px"
        navMobile.classList.add("hiddenContent")
        menuDesplegado = false;

        filterBack.classList.add("hiddenContent");
    }






















