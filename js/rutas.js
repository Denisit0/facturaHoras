let home = document.querySelector("#home");
home.addEventListener('click',function(){
    window.location.href = "../index.html"
})

let facturas = document.querySelector("#facturas");
facturas.addEventListener('click',function(){
    window.location.href = "/views/facturas.html"
})

let crear_factura = document.querySelector("#crear_factura");
crear_factura.addEventListener('click',function(){
    console.log("diste click");
    window.location.href = "/views/crear_factura.html"
})