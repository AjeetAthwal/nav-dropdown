const openDropdown = (e) => {
  const div = e.currentTarget;

  div.classList.toggle("active");
  div.querySelector(".dropdown-content-div").classList.toggle("visible");
};

document
  .querySelector("nav")
  .querySelectorAll(".dropdown")
  .forEach((element) => element.addEventListener("click", openDropdown));
