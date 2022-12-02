// *********** menu **********
((d)=>{
    const $btnmenu = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".menu");

    $btnmenu.addEventListener("click", (e)=>{
        $btnmenu.firstElementChild.classList.toggle("none");
        $btnmenu.lastElementChild.classList.toggle("none")
        $menu.classList.toggle("is-active")
    });

    d.addEventListener("click", (e)=>{
        if(!e.target.matches(".menu a")) return false;
        else{
            $btnmenu.firstElementChild.classList.remove("none");
        $btnmenu.lastElementChild.classList.add("none")
        $menu.classList.remove("is-active")
        }
    })
})(document);
// *************contact form
((d)=>{
    const $form= d.querySelector(".contact-form"),
    $loader= d.querySelector(".contact-form-loader"),
    $response = d.querySelector(".contact-form-response")

    $form.addEventListener("submit", (e)=>{
        e.preventDefault();
        $loader.classList.remove("none");
        fetch("https://formsubmit.co/ajax/leonel.limae@hotmail.com",{
            method:"POST",
            body:new FormData(e.target)
        }).then((res)=> (res.ok ? res.json() : Promise.reject(res)))
        .then((json)=>{
            console.log(json);
            location.hash = "#gracias";
            $form.reset();
        })
    .catch(err=>{
        console.log(err);
        let message = err.statusText || "Ocurrio un error al enviar, intenta nuevamente"
        $response.querySelector("h3").innerHTML = `Error ${err.status}: ${message}`;
    })
    .finally(()=>{
        $loader.classList.add("none");
        setTimeout(() => {
            location.hash = "#close";
        }, 3000);
    })
    });

})(document);