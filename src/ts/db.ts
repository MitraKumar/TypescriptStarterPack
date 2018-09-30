export class Db {
    static put(data: Work) {
        let works = localStorage.getItem('work')

        if (works === null) {
            let _works: Work[] = []
            _works.push(data)
            localStorage.setItem('work', JSON.stringify(_works))
            return
        }

        let todos = JSON.parse(works)
        todos.push(data)
        localStorage.setItem('work', JSON.stringify(todos))

    }

    static get() {
        let works = localStorage.getItem('work')

        if (works) return JSON.parse(works)
    }
}

interface Work {
    name: String
}