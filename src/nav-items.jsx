import Index from "./pages/Index";
import About from "./pages/About";
import BookingForm from "./pages/BookingForm";

export const navItems = [
  {
    to: "/",
    page: <Index />,
  },
  {
    to: "/about",
    page: <About />,
  },
  {
    to: "/booking",
    page: <BookingForm />,
  },
];