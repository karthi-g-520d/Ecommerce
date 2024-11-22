/* Navbar for mobile device */

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
if(bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if(close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

/*sproduct select*/
const products = {
    f1: {
        img: "img/products/f1.jpg",
        name: "Cartoon Astronaut T-Shirt",
        price: "₹499",
    },
    f2: {
    img: "img/products/f2.jpg",
    name: "Hawaiian Shirt Summer",
    price: "₹499"
},
f3: {
    img: "img/products/f3.jpg",
    name: "Friendzy Men's T-Shirt",
    price: "₹499"
},

    f4: {
        img: "img/products/f4.jpg",
        name: "Mascln Sassafras Men T-Shirt",
        price: "₹499",
    },
    f5: {
        img: "img/products/f5.jpg",
        name: "Men's Purble Flowering T-Shirts",
        price: "₹599",
    },
    f6: {
        img: "img/products/f6.jpg",
        name: "Fashion Colour Blocking T-Shirts",
        price: "₹799",
    },
    f7: {
        img: "img/products/f7.jpg",
        name: "Beishi Women Pants",
        price: "₹799",
    },
    f8: {
        img: "img/products/f8.jpg",
        name: "western Top For Women",
        price: "₹599",
    },
//new arrivals

    n1: {
        img: "img/products/n1.jpg",
        name: "Blue Shirt for Men",
        price: "₹1299",
    },
    n2: {
        img: "img/products/n2.jpg",
        name: "Grey pattern Shirt for Men",
        price: "₹1299",
    },
    n3: {
        img: "img/products/n3.jpg",
        name: "White Shirt for Men",
        price: "1199",

    },
    n4: {
        img: "img/products/n4.jpg",
        name: "Maniac Resort SS Men",
        price: "₹899",
    },
    n5: {
        img: "img/products/n5.jpg",
        name: "Navy Blue Shirt for Men",
        price: "₹1299",
    },
    n6: {
        img: "img/products/n6.jpg",
        name: "Peter England Men's Pant",
        price: "₹899",
    },
    n7: {
        img: "img/products/n7.jpg",
        name: "Andamen Men Brown Full Sleeve",
        price: "₹1499",
    },
    n8: {
        img: "img/products/n8.jpg",
        name: "Olive Shirts for Men",
    },
};

// Extract product ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

// Populate product details dynamically
if (productId && products[productId]) {
    const product = products[productId];

    document.getElementById("MainImg").src = product.img;
    document.querySelector(".single-pro-details h4").innerText = product.name;
    document.querySelector(".single-pro-details .price").innerText = product.price;
}
