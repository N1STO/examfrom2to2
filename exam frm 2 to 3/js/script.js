const optionMenu = document.querySelector(".nav__select"),
      selectBtn = optionMenu.querySelector(".select__btn"),
      options = optionMenu.querySelectorAll(".nav__selectOptions"),
      sBtn__text = optionMenu.querySelector(".sBtn__text");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));

options.forEach(option =>{
    option.addEventListener("click", () => {
        let selectedOption = option.querySelector(".option span").innerText;
        sBtn__text.innerText = selectedOption;

        optionMenu.classList.remove("active");
    })
})
