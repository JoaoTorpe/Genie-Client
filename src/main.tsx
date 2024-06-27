import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { RegisterModal } from './Modals/RegisterModal.tsx'
import { LoginModal } from './Modals/LoginModal.tsx'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import { ProtectedRoute, AlredyAuthenticated } from './ProtectedRoute.tsx';

const router = createBrowserRouter([
        {
          path: "/",
          element: <ProtectedRoute element={<App/>} />
        },
        {
                path:"/login",
                element:  <AlredyAuthenticated element={<LoginModal/>} />
        },
        {
                path:"/register",
                element: <AlredyAuthenticated element={<RegisterModal />} />
        }
      ]);

ReactDOM.createRoot(document.getElementById('root')!).render(
        <div>
                <RouterProvider router={router}/>
        </div>
)
