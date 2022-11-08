import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Inventory from './components/Inventory/Inventory';
import Main from './components/Layouts/Main';
import Login from './components/Login/Login';
import MyLocation from './components/MyLocation';
import Orders from './components/Orders/Orders';
import Shipping from './components/Shipping/Shipping';
import Shop from './components/Shop/Shop';
import Signup from './components/Signup/Signup';
import { ProductsandCartloader } from './Loaders/ProductsandCartloader';
import PrivateRoutes from './Routes/PrivateRoutes';


function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children:[
        {
          path:'/',
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
          element:<PrivateRoutes><Inventory></Inventory></PrivateRoutes>
        },
        {
          path:'/shipping',
          element:<PrivateRoutes><Shipping></Shipping></PrivateRoutes>
        },
        {
          path:'/about',
          element: <About></About>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<Signup></Signup>
        },
        {
          path:'/map',
          element:<MyLocation></MyLocation>
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
