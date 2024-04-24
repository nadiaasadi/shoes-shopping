let productContainer = document.querySelector ('.container')

let productArray = [
    {id:1 , title:'Sport Sohes' , img: '../images/1.png'},       
    {id:2 , title:'Woman Sohes' , img: '../images/2.png'},       
    {id:3 , title:'boots' , img: '../images/3.png'}       
]
productArray . forEach (function(product){
    productContainer . insertAdjacentHTML ('beforeend','<div class="product-card"><h1>'+product.title+'</h1><p>Lorem ipsum, or lipsum as it is sometimes known</p><div class="product-pic" style="background-image: url('+product.img+');"></div><div class="product-info"><div class="product-price">'+product.price+'</div><a href="product.html?id='+product.id+' " class="product-button">See More</a></div> </div>'
    )
})