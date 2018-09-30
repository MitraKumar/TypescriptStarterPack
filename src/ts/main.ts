import { Db } from './db'
import '../scss/main.scss'
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const data: FormData = new FormData(form)
    const work: String = data.get('work').toString()
    Db.put({
        name: work
    })

    const works = Db.get()
    if (works) {
        document.querySelector('#output').innerHTML = ''
        works.forEach((elm: Work) => {
            document.querySelector('#output').innerHTML += `<li>${elm.name}</li>`
        });
    }
})

const works = Db.get()
if (works) {
    document.querySelector('#output').innerHTML = ''
    works.forEach((elm: Work) => {
        document.querySelector('#output').innerHTML += `<li>${elm.name}</li>`
    });
}

interface Work {
    name: String
}