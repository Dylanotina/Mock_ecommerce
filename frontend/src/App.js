import Main from "./components/commons/Main";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import './App.css'
import { useState } from "react";


function App() {

  const [cartItems, setCartItems] = useState([])
  const handleAddToCart = (clickedItem) => {
      if(clickedItem !== undefined){
          setCartItems(prev => {
              let isItemInCart = prev.find(item => clickedItem.id === item.id)

              if(isItemInCart){
                console.log('ca marche')
                  return prev.map(item => item.id === isItemInCart.id ? {...item, amount : item.amount+1} : item ) 
                  
              }
              return [...prev, clickedItem]
          })
          
      }
  }
  const handleRemoveToCart = (id) => setCartItems(prev => {
      //look if item is array
      let isItemInCart = prev.find(item => id === item.id)
      // check if amount >0
      if(isItemInCart && isItemInCart.amount > 1){
        //if yes amount - 1
        return prev.map(item => item.id === isItemInCart.id ? {...item, amount : item.amount-1} : item)
      }
      //else revove item from array
      let index = prev.indexOf(isItemInCart)
      return prev.splice(index,1)
  })

  return (
    <div className="App">
      <Header className="header" cartsize={cartItems.length}/>
      <Main className="main" cartItems={cartItems} handleAddToCart={handleAddToCart} handleRemoveToCart={handleRemoveToCart}></Main>
      <Footer className="footer"></Footer>

    </div>
  );
}

export default App;
