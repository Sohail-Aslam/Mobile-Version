const clickBurger = document.querySelector(".btn");
const openmenu = document.querySelector(".menuitems");

clickBurger.addEventListener("click", toggleMenu);

// function toggleMenu() {
//   if (openmenu.style.display === "none" || openmenu.style.display === "") {
//     openmenu.style.display = "block";
//     document.body.style.overflow = "hidden";
//   } else {
//     openmenu.style.display = "none";
//     document.body.style.overflow = "auto"; 
//   }
// }

const menuItems = document.querySelectorAll('.subitems');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    openmenu.style.display = "none";
    document.body.style.overflow = "auto";
    clickBurger.checked = false;
  });
});

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
