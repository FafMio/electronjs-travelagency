const msgDiv = document.querySelector('#response-message')

const formElement = document.querySelector('#new-item-form')
const btnSubmit = formElement.querySelector('#new-item-submit')
const btnReset = formElement.querySelector('button[type="reset"]')

const formElements = document.querySelector('#new-item-form').elements;
const bestsElements = document.querySelector('#list-bests')

const bestsForm = document.querySelector('#form-bests')
const bestField = bestsForm.querySelector('input')
const bestSubmit = bestsForm.querySelector('button')

bestSubmit.addEventListener('click', (e) => {
    if (bestField.value !== "" || bestField.value.length > 0) {
        let newBest = document.createElement('li')
        newBest.innerText = bestField.value;

        bestField.value = "";

        bestsElements.appendChild(newBest)
    }
})

btnReset.addEventListener('click', (e) => {
    bestsElements.innerHTML = "";
})


formElement.addEventListener('submit', (e) => {
    e.preventDefault()

    const newItem = {
        title: formElements['item-title'].value,
        image_url: formElements['item-image'].value,
        description: formElements['item-description'].value,
        features: formElements['item-features'].value,
        price: formElements['item-price'].value,
        stars: formElements['item-stars'].value,
        place: formElements['item-place'].value,
        the_bests: []
    }

    Array.from(bestsElements.children).forEach((child) => {
        newItem.the_bests.push({content: child.innerHTML})
    })

    window.ipcRenderer.invokeNewItem(newItem, (msg) => {
        msgDiv.innerText = msg
        msgDiv.hidden = false

        setTimeout(() => {
            msgDiv.hidden = true
        }, 1500)

        e.target.reset()
    })
})
