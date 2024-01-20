import './App.css'
import Home from './componenets/Home';
import Register from './componenets/register';
import BrowsePage from './componenets/BrowsePage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/register',
      element: <Register/>
    },
    {
      path: '/browse',
      element:<BrowsePage/>
    }
  ]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App;