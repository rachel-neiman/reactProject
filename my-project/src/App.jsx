import './App.css';
import { CreateStore } from './context/Store';
import { BrowserRouter } from 'react-router-dom';
import { MyProvider } from './context/Context';
import MyApp from './components/MyApp';
function App() {
  const store = CreateStore();

  return (
    <div>
    <MyProvider value={store}>
      <BrowserRouter>
      <MyApp/>
      </BrowserRouter>
      </MyProvider>
    </div>
  );
}
export default App;