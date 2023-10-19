// import images as relative image path won't work with vite/vercel.

const sideBar = document.getElementById("mySidenav");

function openNav() {
  sideBar.style.width = "250px";
}

function closeNav() {
  sideBar.style.width = "0";
}
