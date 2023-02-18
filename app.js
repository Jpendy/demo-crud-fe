
(async () => {


    const res = await fetch('http://localhost:7890/plants');
    const plants = await res.json();
    const ul = document.querySelector('ul');

    for (let plant of plants) {

        const li = createEl('li');
        const name = createEl('h3');
        const isHerb = createEl('p');
        const isPerennial = createEl('p');
        const img = createEl('img');

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'delete';

        deleteButton.addEventListener('click', async () => {
            const res = await fetch(`http://localhost:7890/plants/${plant.id}`, {
                method: 'DELETE'
            })

            const json = await res.json();
            if (json[0]) {
                li.remove()
            }
        })

        name.textContent = plant.name;
        isHerb.textContent = 'is herb? ' + plant.is_herb;
        isPerennial.textContent = 'is Perennial? ' + plant.is_perennial;
        img.src = plant.img_url;



        li.append(name, img, isHerb, isPerennial, deleteButton)
        ul.appendChild(li)
    }

    console.log(plants)

})()


function createEl(el) {
    return document.createElement(el)
}

// function setText(el, newtxt) {
//     el.textContent = newtxt;
// }