window.ipcRenderer.onceInitData((e, data) => {
    let announce = data.announce;

    let offer = document.createElement('div')
    offer.classList.add('container')

    offer.innerHTML = `
    <div class="row">
        <div class="col-10 mx-auto">
            <div class="card shadow mx-auto my-5">
                <img src="${announce.image_url}" class="card-img-top">
                <div class="card-body">
                    <h2 class="card-title text-center">Voyage vers ${announce.title}</h2>
                    <span class="text-muted ">${announce.features}</span>
                    <p class="card-text my-3 fst-italic">${announce.description}</p>
                    <p class="mt-2 fw-bold mb-1 pb-1">Vous aimerez aussi :</p>
                    <ul class="list-style-none" id="bests-list">
                    </ul>
                </div>
                <div class="card-footer">
                    <div class="d-flex justify-content-center">
                        <button class="btn btn-warning mx-1" id="edit">Modifier</button>
                        <button class="btn btn-danger mx-1" id="delete">Supprimer</button>
                        <button class="btn btn-outline-dark mx-1" id="close">Fermer</button>
                    </div>
                </div>
            </div>
        </div>
    </div>`

    const bests = offer.querySelector('#bests-list')
    if (announce.the_bests.length > 0)
        announce.the_bests.forEach(best => {
            let bestElement = document.createElement('li')
            bestElement.innerText = best.content
            bests.appendChild(bestElement)
        })

    document.querySelector('body').append(offer)

    document.querySelector('title').innerText = `${announce.title} - Clermont Travel`;
    document.querySelector('button#close').addEventListener('click', () => {
        window.close()
    })
    document.querySelector('button#edit').addEventListener('click', () => {
        window.ipcRenderer.sendOpenEditItemWindow({id: announce.id})
        window.close()
    })
    document.querySelector('button#delete').addEventListener('click', () => {
        let args = {id: announce.id}
        window.ipcRenderer.invokeShowConfirmDeleteItem(args, (res) => {
                console.log(res)
                if (res) {
                    window.close()
                }
            }
        )
    })

})

