const etiq = document.querySelector('.api');

const url = 'http://127.0.0.1:5500/tp_codo_a_codo_grupo4/js/api.json';

fetch(url)
.then(res => res.json())
.then(data => {
    data.forEach(cafe => {
        const p = document.createElement('p')
        // const c = document.createElement('p')
        const a = document.createElement('p')
        p.innerHTML = cafe.name
        // c.innerHTML = cafe.address
        a.innerHTML = '<a href="' + cafe.maps + '">' + cafe.address + '</a>' + '<br></br>'
        etiq.appendChild(p)
        etiq.appendChild(a)
    });
})
.catch(err => console.log(err))