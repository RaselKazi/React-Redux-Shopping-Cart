import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import Main from "./Component/Main/Main";
import './App.css'

//Feature-1
function App() {
  return (
    <div className="grid-container">
     <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
