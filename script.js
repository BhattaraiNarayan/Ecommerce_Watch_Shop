const wrapper=document.querySelector('.sliderWrapper');
const menuItems=document.querySelectorAll('.menuItem');

const products = [
  {
    id: 1,
    title: "ROLEX",
    price: 119,
    colors: [
      {
        code: "black",
        img: "assets/watch1.jpg",
      },
      {
        code: "darkblue",
        img: "assets/watch2.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "CITIZEN",
    price: 149,
    colors: [
      {
        code: "gray",
        img: "assets/watch3.jpg",
      },
      {
        code: "green",
        img: "assets/watch4.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "SEIKO 5",
    price: 109,
    colors: [
      {
        code: "gray",
        img: "assets/watch5.jpg",
      },
      {
        code: "green",
        img: "assets/watch6.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "CASIO",
    price: 129,
    colors: [
      {
        code: "black",
        img: "assets/watch7.jpg",
      },
      {
        code: "gray",
        img: "assets/watch8.jpg",
      },
    ],
  },
  {
    id: 5,
    title: "ORIENT",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "assets/watch9.jpg",
      },
      {
        code: "black",
        img: "assets/watch10.jpg",
      },
    ],
  },
];

let chosenProduct = products[0];
 
const currentProductImg=document.querySelector(".productImg");
const currentProductTitle=document.querySelector(".productTitle");
const currentProductPrice=document.querySelector(".productPrice");
const currentProductColors=document.querySelectorAll(".color");
const currentProductSizes=document.querySelectorAll(".size");


menuItems.forEach((item,index)=>{
    item.addEventListener('click',()=>{
  //change the current slide
        wrapper.style.transform=`translateX(-${index*100}vw)`;
    
        //change the chosen product
        chosenProduct=products[index];

        //change the texts of CurrentProduct
        currentProductTitle.textContent=chosenProduct.title;
        currentProductPrice.textContent="$"+chosenProduct.price;
        currentProductImg.src=chosenProduct.colors[0].img;

        //change the colors of CurrentProduct
        currentProductColors.forEach((color,index)=>{
            color.style.backgroundColor=chosenProduct.colors[index].code;
        });
    });
});

//To change the color of the product image
currentProductColors.forEach((color,index)=>{
    color.addEventListener('click',()=>{
        currentProductImg.src=chosenProduct.colors[index].img;
    });
});

//

currentProductSizes.forEach((size,index)=>{
    size.addEventListener('click',()=>{
       currentProductSizes.forEach((size)=>{
           size.style.backgroundColor="white";
              size.style.color="black";
       });
         size.style.backgroundColor="black";
            size.style.color="white";
    });
});

//To close the payment model after clicking the close button
const productButton=document.querySelector(".productButton");
const payment =document.querySelector(".payment");
const close=document.querySelector(".close");

productButton.addEventListener('click',()=>{
payment.style.display="flex";
});
close.addEventListener('click',()=>{
    payment.style.display="none";
});

