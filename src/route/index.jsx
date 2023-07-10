import { createBrowserRouter } from "react-router-dom";
import { NotFound } from "@/pages/Error/NotFound";
import { Home } from "@/pages/Home/Index";
import { About } from "@/pages/About/Index";
import { Property } from "@/pages/Property/Index";

const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFound/>
  },
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
    element: <Property />,
    errorElement: <NotFound/>
  },
]);

export default router;
