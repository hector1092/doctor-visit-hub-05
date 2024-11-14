import Index from "./pages/Index";
import About from "./pages/About";
import BookingForm from "./pages/BookingForm";
import Articles from "./pages/Articles";

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
    to: "/articles",
    page: <Articles />,
  },
  {
    to: "/booking",
    page: <BookingForm />,
  },
];