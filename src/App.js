import { RouterProvider } from 'react-router-dom';
// import './App.css';
import { routes } from './Router/Router/Routes';

function App() {
  return (
    <div className="max-w-[1240px] mx-auto" >
     

     <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
