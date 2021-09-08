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
  const handleRemoveToCart = (id) => null

  return (
    <div className="App">
      <Header className="header"/>
      <Main className="main" cartItems={cartItems} handleAddToCart={handleAddToCart} handleRemoveToCart={handleRemoveToCart}></Main>
      <Footer className="footer"></Footer>

    </div>
  );
}

export default App;
