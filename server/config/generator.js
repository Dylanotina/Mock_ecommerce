import fs from 'fs'
import path from 'path'

const directory = path.resolve()

const names = ["Air force 1", "Air Jordan 1", "Air Jordan 4","Air Jordan 11 Bred", "Air Jordan 11 Concord", "Air Max 90", "Kobe 9", "KD9", "Lebron15", "VaporMax2020"]

const prices = [99.99, 125, 150, 200]

const sizeAvailability = [8,9,10,11,12,13]

const description = []

const image = ["af1.jpeg","aj1.jpeg","aj4.jpeg","aj11bred.jpeg","aj11conc.jpeg","amax90.jpeg","kb9.png","kd9.jpeg","lbj15.jpeg","vapor2020.jpeg"];

const getPrice = (index) => prices[index % prices.length]

const getName = (index) => names[index% names.length]

const getImage = (index) => image[index % image.length]

const getDescription = (index) => description[index % description.length]


const get = (index) => ({
    name : getName(index),
    price : getPrice(index),
    sizeAvailability,
    description : getDescription(index),
    image : fs.readFileSync(path.resolve(directory,'photos_downloads/'+ getImage(index)))      

})


const generatorProduct = () => {
    for(let i = 0; i< names.length; i++){
        const product = get(i)
        console.log(product)
    } 
}

export default generatorProduct