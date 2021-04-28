import fs from "fs";
import path from "path";
import productController from '../controllers/productController.js'

const directory = path.resolve();

const names = [
  "Air force 1",
  "Air Jordan 1",
  "Air Jordan 4",
  "Air Jordan 11 Bred",
  "Air Jordan 11 Concord",
  "Air Max 90",
  "Kobe 9",
  "KD9",
  "Lebron15",
  "VaporMax2020",
];

const prices = [99.99, 125, 150, 200];

const sizeAvailability = [8, 9, 10, 11, 12, 13];

const description = [
  "Lace up little feet into the iconic Nike Force 1 for a classic look and feel. Soft cushioning helps keep little feet comfy for every growing step.",
  "The Air Jordan 1 Mid Shoe is inspired by the first AJ1, offering fans of Jordan retros a chance to follow in the footsteps of greatness. Fresh colour trims the clean, classic materials, injecting some newness into the familiar design.",
  "The Air Jordan IV was the first global market release of the franchise. Another first, the shoe appeared in Spike Lee’s film Do the Right Thing, transcending the game of basketball to make a significant impact on pop culture. All eyes were on Jordan as he continued to rise.",
  "The Air Jordan 11 “Bred” is a nickname for the original black/red colorway of the Air Jordan 11 shoe. Designed by Tinker Hatfield, this Air Jordan originally released in 1996 and was worn by Michael Jordan during the famed 1995-1996 season in which the Bulls tallied a 72-10 regular season record and won the NBA championship with ease.",
  "Tinker Hatfield listened when Michael Jordan said he wanted patent leather on a sneaker--something versatile for basketball and formal occasions. Hatfield responded in 1995 and 1996’s Air Jordan 11, often regarded as the most beloved signature silhouette of all. Wrapped in patent leather from toe to heel and topped with ballistic mesh and leather, Jordan wore the 11 to another NBA championship with the Bulls and in Space Jam (1996)",
  "Clean lines, versatile and timeless—the people's shoe returns with the Nike Air Max 90. Featuring the same iconic Waffle sole, stitched overlays and classic TPU accents you've come to love, it lets you walk among the pantheon of Air.",
  "The Nike Kobe 9 is Kobe Bryant's ninth signature shoe with Nike. The sneakers were first officially unveiled at a Nike event at the MOCA in Los Angeles on December 4th, 2013.",
  "The KD 9 is Kevin Durant’s ninth signature Nike basketball shoe. It was designed by Leo Chang and features Flyknit and Zoom Air technology.",
  "The Nike LeBron 15 is LeBron James’ fifteenth signature basketball shoe. It was designed by Jason Petrie and features sock-like construction with a mix of new Flyknit upper with a cushioning unit that combines Max Air and Zoom Air.",
  "Nike VaporMax is a technology that revolutionized Air cushioning.Nike VaporMax models traditionally feature sock-like, Flyknit construction and are free of any midsole and sockliner, which creates a lightweight, bouncy ride."  
];

const image = [
  "af1.jpeg",
  "aj1.jpeg",
  "aj4.jpeg",
  "aj11bred.jpeg",
  "aj11conc.jpeg",
  "amax90.jpeg",
  "kb9.png",
  "kd9.jpeg",
  "lbj15.jpeg",
  "vapor2020.jpeg",
];

const getPrice = (index) => prices[index % prices.length];

const getName = (index) => names[index % names.length];

const getImage = (index) => image[index % image.length];

const getDescription = (index) => description[index % description.length];

const get = (index) => ({
  name: getName(index),
  price: getPrice(index),
  sizeAvailability,
  description: getDescription(index),
  image: fs.readFileSync(
    path.resolve(directory, "photos_downloads/" + getImage(index))
  ),
});

const generatorProduct = async () => {
    console.log('Start Generating...')
  for (let i = 0; i < names.length; i++) {
    const product = get(i);
   await productController.addProduct(product)
  }
  console.log('Generation finished.')
};

export default generatorProduct;
