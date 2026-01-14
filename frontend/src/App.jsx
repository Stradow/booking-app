import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import BookingPage from "./Pages/BookingPage";
import NotFoundPage from "./Pages/NotFoundPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
