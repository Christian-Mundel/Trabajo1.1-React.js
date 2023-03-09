import { Navbar } from "./components/Navbar/Navbar";
import ItemlistContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div>
      <Navbar />
      <ItemlistContainer greeting={"Ingresa para registarte"}/>
      
    </div> 
  );
}

export default App;
