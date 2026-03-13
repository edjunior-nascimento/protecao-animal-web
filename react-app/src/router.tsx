import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { SobrePage } from "./pages/SobrePage";
import { InicialPage } from "./pages/InicialPage";

function RouterApp(){
    return(
       <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<InicialPage />} />
                <Route path="/sobre" element={<SobrePage />} />
            </Routes>
       </BrowserRouter>
    )
}

export default RouterApp;