// import "./styles.css";


//Part-1
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];

const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";

const h1 = document.createElement("h1");
h1.textContent = "DOM Manipulation";
h1.style.textAlign = "center";
h1.style.color = "white";
mainEl.append(h1);
h1.classList.add("flex-ctr");

//Part-2
const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height ="100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

//Part-3
menuLinks.forEach((link) => {
const anchor = document.createElement("a");
anchor.href = link.href;
anchor.textContent = link.text;
topMenuEl.appendChild(anchor);

});


