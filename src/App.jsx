import { BrowserRouter,Routes,Route } from "react-router-dom";
import ".//App.css";
import HomePage from"./components/HomePage";
import VideoPage from "./components/VideoPage";
import Navbar from "./components/Navbar";

function App(){
    return(
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/"elements={<HomePage />} />
            <Route path= "/videos" elements={<VideoPage />} />
        </Routes>
        </BrowserRouter>
    )
}

export default App;