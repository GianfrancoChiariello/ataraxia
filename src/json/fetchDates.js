import productos from "./productos.js"

export const fetchDates = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                resolve(productos)
        }, 0)
    })
}