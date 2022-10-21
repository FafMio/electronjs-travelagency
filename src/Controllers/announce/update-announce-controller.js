const formElement = document.querySelector('#item-form')
const formElements = document.querySelector('#item-form').elements;
const btnReset = document.querySelector('button[type="reset"]')

const bests = document.querySelector('#list-bests')

const bestsForm = document.querySelector('#form-bests')
const bestField = bestsForm.querySelector('input')
const bestSubmit = bestsForm.querySelector('button')

// Init Data
window.ipcRenderer.onceInitData((e, item) => {
    formElements['item-title'].value = item.title
    formElements['item-image'].value = item.image_url
    formElements['item-description'].value = item.description
    formElements['item-features'].value = item.features
    formElements['item-price'].value = item.price
    formElements['item-stars'].value = item.stars
    formElements['item-place'].value = item.place

    if (item.the_bests.length > 0)
        item.the_bests.forEach(best => {
            let bestElement = document.createElement('li')
            let iconDelete = document.createElement("i")
            iconDelete.classList.add("fas")
            iconDelete.classList.add("fa-times")
            iconDelete.classList.add("text-danger")
            iconDelete.style.cursor = "pointer"
            iconDelete.addEventListener('click', (e) => {
                bestElement.remove()
            })

            bestElement.innerHTML = best.content + " "
            bestElement.appendChild(iconDelete)

            bests.appendChild(bestElement)
        })
})


bestSubmit.addEventListener('click', (e) => {
    if (bestField.value !== "" || bestField.value.length > 0) {
        let newBest = document.createElement('li')

        let iconDelete = document.createElement("i")
        iconDelete.classList.add("fas")
        iconDelete.classList.add("fa-times")
        iconDelete.classList.add("text-danger")
        iconDelete.style.cursor = "pointer"
        iconDelete.addEventListener('click', (e) => {
            newBest.remove()
        })

        newBest.innerText = bestField.value + " "
        newBest.appendChild(iconDelete);

        bestField.value = "";

        bests.appendChild(newBest)
    }
})
btnReset.addEventListener('click', (e) => {
    bests.innerHTML = "";
})

formElement.addEventListener('submit', (e) => {
    e.preventDefault()

    const updatedItem = {
        title: formElements['item-title'].value,
        image_url: formElements['item-image'].value,
        description: formElements['item-description'].value,
        features: formElements['item-features'].value,
        price: formElements['item-price'].value,
        stars: formElements['item-stars'].value,
        place: formElements['item-place'].value,
        the_bests: []
    }

    Array.from(bests.children).forEach((child) => {
        updatedItem.the_bests.push({content: child.textContent})
    })

    window.ipcRenderer.sendUpdatedItem(updatedItem)
})