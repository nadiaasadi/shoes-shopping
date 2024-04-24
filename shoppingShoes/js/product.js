let productArray = [
    {id:1 , title:'Sport Sohes' , img: '../images/1.png',desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem '},       
    {id:2 , title:'Woman Sohes' , img: '../images/2.png' , desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque vero ratione error asperiores sed laborum fuga numquam assumenda commodi labore.'},       
    {id:3 , title:'boots' , img: '../images/3.png', desc :'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque vero ratione assumenda commodi labore.'}       
]
 let backBtn = document.querySelector('#back')
let shoeTitle = document.querySelector ('h1')
let shoedesc = document.querySelector ('p')
let shoeImage = document.querySelector ('img')



let locationsearchParams = new URLSearchParams(location.search)
let locationIdParams = locationsearchParams . get ('id')
console.log(locationIdParams);
let mainProduct=productArray .find (function(product){
   return product.id == locationIdParams
})
console.log(mainProduct);

if (mainProduct){
shoeTitle . innerHTML= mainProduct.title
shoedesc . innerHTML = mainProduct . desc
shoeImage . setAttribute ('src' , mainProduct . img) 
} else{
    location.href='file:///C:/Users/A.Heidari/Desktop/css%20project/java/java%20project/new/html/index.html'
}




backBtn.addEventListener('click' , function(){
    history.back()
})