import { createBrowserRouter } from "react-router-dom";
import { NotFound } from "@/pages/NotFound";
import { Home } from "@/pages/Home";
import { About } from "@/pages/About";
import { Property } from "@/pages/Property";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/property/:id",
    element: <Property />
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

export default router;
