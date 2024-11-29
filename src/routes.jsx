import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Inicio from "./pages/inicio";
import Contacto from "./pages/contacto";
import PaginaBase from "./pages/layout/paginaBase.jsx";

const router = createBrowserRouter([
    {
      path: "/",
      element: <PaginaBase />, // Usamos el Layout como contenedor
      children: [
        { path: "/", element: <Inicio /> },  // Aquí se renderiza la página de Inicio
        { path: "/contacto", element: <Contacto /> }, // Aquí se renderiza la página de Contacto
      ],
    },
  ], {
  // Habilitar funciones futuras
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
  },
});

function AppRoutes() {
  return <RouterProvider router={router} />;
}

export default AppRoutes;