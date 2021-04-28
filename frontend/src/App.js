import Main from "./components/commons/Main";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import './App.css'


function App() {
  return (
    <div className="App">
      <Header className="header"/>
      <Main className="main"></Main>
      <Footer className="footer"></Footer>

    </div>
  );
}

export default App;
