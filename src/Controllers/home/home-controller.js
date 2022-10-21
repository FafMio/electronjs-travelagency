function generateRowTable(row) {
    const tbody = document.querySelector(`#table-announce`)

    let newChild = document.createElement('div')
    newChild.classList.add('card')
    newChild.classList.add('mb-4')
    newChild.classList.add('bg-secondary')
    newChild.classList.add('border-dark')
    newChild.id = `announce-${row.id}`

    newChild.innerHTML = `
        <div class="card-header">
            <div class="d-flex flex-row justify-content-between align-items-center my-1">
                <h2 class="text-dark fs-4 mt-2" style="cursor: pointer" id="${row.id}" data-click="">${row.title}</h2>
                <img src="https://static.hephe.net/images/note/${row.stars.toString().replace('.', '')}.png" alt="stars-of-${row.id}">
                <span class="fs-5" id="address">${row.place}</span>
            </div>
        </div>
        <div class="card-body p-0">
            <div class="d-flex flex-row">
                <div class="col-4 pe-2">
                    <img src="${row.image_url}" alt="card image" class="img-fluid">
                </div>
                <div class="col-8">
                    <div class="d-flex justify-content-center align-items-center">
                        <div class="col-10">
                            <span class="text-muted">${row.features}</span>
                            <p class="mt-2 fw-bold">Vous aimerez aussi :</p>
                            <ul class="list-style-none" id="bests-list">
                            </ul>
                            <p>${row.description.toString().substr(0, 100)}...</p>
                        </div>
                        <div class="col-2">
                            <span class="text-danger fs-3">${row.price} €</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    const bests = newChild.querySelector('#bests-list')
    if (row.the_bests.length > 0)
        row.the_bests.forEach(best => {
            let bestElement = document.createElement('li')
            bestElement.innerText = best.content
            bests.appendChild(bestElement)
        })

    const clickableTitle = newChild.querySelector('h2')
    clickableTitle.addEventListener('click', (event) => {
        window.ipcRenderer.sendOpenShowItemWindow({id: row.id})
    })

    tbody.appendChild(newChild)
}

window.ipcRenderer.onceInitData((e, data) => {
    const {announces} = data
    Array.from(announces).forEach(ann => {
        generateRowTable(ann)
    })
})

const addItemButton = document.querySelector('#add-item')
addItemButton.addEventListener('click', (e) => {
    window.ipcRenderer.sendOpenNewItemWindow()
})

window.ipcRenderer.onNewItemAdded((e, data) => {
    generateRowTable(data.newItem)
})

window.ipcRenderer.onDeleteItem((e, data) => {
    location.reload()
})
window.ipcRenderer.onItemUpdated((e, data) => {
    console.log(data)
    location.reload()
})