const catalogList = document.querySelector(".catalog-list")
const catalogButtonOpen = document.querySelector(".catalog-button__open")
const catalogButtonHide = document.querySelector(".catalog-button__hide")
const catalogButton = document.querySelector(".catalog-button")

catalogButtonOpen.addEventListener("click", function () {

    catalogList.classList.remove("catalog-list__hidden");
    catalogButtonHide.style.display = "block";
    catalogButtonOpen.style.display = "none";
})

catalogButtonHide.addEventListener("click", () => {
    catalogList.classList.add("catalog-list__hidden");
    catalogButtonHide.style.display = "none";
    catalogButtonOpen.style.display = "block";
})


const filterButtons = document.querySelectorAll('.filter-button');
const items = document.querySelectorAll('.catalog-item');
const itemsArray = Array.from(items);

filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
        let filteredItems = itemsArray.filter((item) => {
            if (item.dataset.collection !== button.dataset.filter) {
                return item
            } else item.classList.remove('hide')
        })

        filteredItems.forEach((item) => {
            item.classList.add('hide')
        })

        catalogButton.classList.add('hide')
    })
})



