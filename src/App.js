import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NoteState from "./context/note/noteState";
import { Route, Routes, BrowserRouter } from "react-router-dom";



function App() {
  return (
		<BrowserRouter>
    <NoteState>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/about" element={<About />} />
			</Routes>
      </NoteState>
		</BrowserRouter>
	);
}

export default App;
