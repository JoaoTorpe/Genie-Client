import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { RegisterModal } from './Modals/RegisterModal.tsx'
import { LoginModal } from './Modals/LoginModal.tsx'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";

const router = createBrowserRouter([
        {
          path: "/app",
          element:<App /> ,
        },
        {
                path:"/login",
                element:<LoginModal/>
        },
        {
                path:"/register",
                element:<RegisterModal />
        }
      ]);

ReactDOM.createRoot(document.getElementById('root')!).render(
        <div>
                <RouterProvider router={router}/>
        
        </div>
)
