
const form = document.querySelector('form');

form.addEventListener('submit', async (e) => {
    e.preventDefault()

    const formData = new FormData(form);

    const name = formData.get('name');
    const imgUrl = formData.get('img-url')
    const isHerb = formData.get('is-herb')
    const isPerennial = formData.get('is-perennial')

    const plantData = {
        name,
        imgUrl,
        isHerb: isHerb ? true : false,
        isPerennial: isPerennial ? true : false
    }

    console.log(plantData)

    const res = await fetch('http://localhost:7890/plants', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(plantData)
    })

    const json = await res.json();
    location.href = '/'
})


