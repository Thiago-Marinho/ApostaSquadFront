import { Time } from "src/app/entities/time";

let times: Time[] = [
    {
        id: 1,
        nome: 'Time 1'
    },
    {
        id: 2,
        nome: 'Time 2'
    }
]

let findAll = () => {
    return new Promise(resolve => resolve(times))
}

module.exports = { 
    times,
    findAll
 }