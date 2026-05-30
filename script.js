const images = [
  "assets/image-product-1.jpg",
  "assets/image-product-2.jpg",
  "assets/image-product-3.jpg",
  "assets/image-product-4.jpg",
];

let currentIndex = 0;

const mainImage = document.querySelector(".main_img");

const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");

nextButton.addEventListener("click", () => {
  currentIndex++;

  if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  mainImage.src = images[currentIndex];
});

prevButton.addEventListener("click", () => {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }

  mainImage.src = images[currentIndex];
});

let count = 1;

const quantity = document.querySelector("#quantity");

const plusbutton = document.querySelector("#plus");
const minusbutton = document.querySelector("#minus");

const new_price = document.querySelector(".new_price");
const old_price = document.querySelector(".old_price span");

function updateprice() {
  quantity.textContent = count;
}

plusbutton.addEventListener("click", () => {
  count++;

  new_price.textContent = `$${count * 125}.00`;

  old_price.textContent = `$${count * 250}`;

  updateprice();
});

minusbutton.addEventListener("click", () => {
  if (count > 0) {
    count--;

    new_price.textContent = `$${count * 125}.00`;

    old_price.textContent = `$${count * 250}`;

    updateprice();
  }
});

const cart_button = document.querySelector("#icon_cart");
const cart_window = document.querySelector(".cart_window");

cart_button.addEventListener("click", () => {
  if (cart_window.classList.contains("cart_window")) {
    cart_window.classList.replace("cart_window", "cart_window_show");
  } else {
    cart_window.classList.replace("cart_window_show", "cart_window");
  }
});

const addbutton = document.querySelector(".add_to_cart");

const emptycart = document.querySelector(".empty_cart");
const filledcart = document.querySelector(".filled_cart");

addbutton.addEventListener("click", () => {
  emptycart.style.display = "none";
  filledcart.style.display = "block";
});

const deleteBtn = document.querySelector(".delete_btn");

deleteBtn.addEventListener("click", () => {
  filledcart.style.display = "none";
  emptycart.style.display = "block";
  itemcount.style.display = "none";
});

// let count = 0; ზევით მაქვს გამოყენებული

const addtocartbtn = document.querySelector(".add_to_cart");

const cartquantity = document.querySelector(".cart_quantity");
const totalprice = document.querySelector(".total_price strong");

const price = 125;

const itemcount = document.querySelector(".item_count");

addtocartbtn.addEventListener("click", () => {
  cartquantity.textContent = count;
  totalprice.textContent = `$${count * price}.00`;
  itemcount.textContent = count;
  itemcount.style.display = "block";
});

const opennavbaricon = document.querySelector(".menu_icon");

const navbar = document.querySelector(".nav_bar");
const backgroundblur = document.querySelector(".background_blur");

opennavbaricon.addEventListener("click", () => {
  navbar.style.display = "block";
  backgroundblur.style.display = "block";
});

const closenavbar = document.querySelector(".close_icon");

closenavbar.addEventListener("click", () => {
  navbar.style.display = "none";
  backgroundblur.style.display = "none";
});

const thumb1 = document.querySelector("#thumb1");
const thumb2 = document.querySelector("#thumb2");
const thumb3 = document.querySelector("#thumb3");
const thumb4 = document.querySelector("#thumb4");

const thumbs = document.querySelectorAll(".product_gallery");

const mainthumb = document.querySelector(".main_img");

thumb1.addEventListener("click", () => {
  mainthumb.src = thumb1.src;
  thumb1.style.opacity = "0.8";
  thumb2.style.opacity = "1";
  thumb3.style.opacity = "1";
  thumb4.style.opacity = "1";
});

thumb2.addEventListener("click", () => {
  mainthumb.src = thumb2.src;
  thumb1.style.opacity = "1";
  thumb2.style.opacity = "0.8";
  thumb3.style.opacity = "1";
  thumb4.style.opacity = "1";
});

thumb3.addEventListener("click", () => {
  mainthumb.src = thumb3.src;
  thumb1.style.opacity = "1";
  thumb2.style.opacity = "1";
  thumb3.style.opacity = "0.8";
  thumb4.style.opacity = "1";
});

thumb4.addEventListener("click", () => {
  mainthumb.src = thumb4.src;
  thumb1.style.opacity = "1";
  thumb2.style.opacity = "1";
  thumb3.style.opacity = "1";
  thumb4.style.opacity = "0.8";
});

const opened_images = [
  "assets/image-product-1.jpg",
  "assets/image-product-2.jpg",
  "assets/image-product-3.jpg",
  "assets/image-product-4.jpg",
];

let currentindex = 0;

const opened_main_image = document.querySelector(".opened_main_image");

const openednextbutton = document.querySelector(".opened_image_next");
const openedprevbutton = document.querySelector(".opened_image_prev");

openednextbutton.addEventListener("click", () => {
  currentindex++;

  if (currentindex >= opened_images.length) {
    currentindex = 0;
  }

  opened_main_image.src = opened_images[currentindex];
});

openedprevbutton.addEventListener("click", () => {
  currentindex--;

  if (currentindex < 0) {
    currentendex = opened_images.length - 1;
  }

  opened_main_image.src = opened_images[currentindex];
});

const openimage = document.querySelector(".main_image");
const openedimage = document.querySelector(".opened_image");

openimage.addEventListener("click", () => {
  if (window.matchMedia("(min-width: 768px)").matches) {
    openedimage.style.display = "block";
  }
});
