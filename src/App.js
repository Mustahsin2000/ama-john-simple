import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Inventory from './components/Inventory/Inventory';
import Main from './components/Layouts/Main';
import Orders from './components/Orders/Orders';
import Shop from './components/Shop/Shop';
import { ProductsandCartloader } from './Loaders/ProductsandCartloader';


function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children:[
        {
          path:'/',
          loader:()=>{
           return fetch('products.json');
          },
          element:<Shop></Shop>
        },
        {
          path:'/order',
          // ei component ta order section a cart and shop duita ekshathe load kore dekhanor jonno
          loader : ProductsandCartloader,
          element:<Orders></Orders>
        },
        {
          path:'/inventory',
          element:<Inventory></Inventory>
        },
        {
          path:'/about',
          element: <About></About>
        }
      ]
      
    },
    
    
  ]);
 
  return (
    <div>
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
