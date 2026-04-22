import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { SobrePage } from "./pages/SobrePage";
import { InicialPage } from "./pages/InicialPage";
import { AdocaoPage } from "./pages/AdocaoPage";
import { DetalhesAdocaoPage } from "./pages/DetalhesAdocaoPage";
import { DoacaoPage } from "./pages/DoacaoPage";
import { FormularioAdocaoPage } from "./pages/FormularioAdocaoPage";
import { FormularioCastracaoPage } from "./pages/FormularioCastracaoPage";
import { FormularioDoacaoPage } from "./pages/FormularioDoacaoPage";
import { GaleriaPage } from "./pages/GaleriaPage";

function RouterApp(){
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<InicialPage />} />
                <Route path="/sobre" element={<SobrePage />} />
                <Route path="/adocao" element={<AdocaoPage />} />
                <Route path="/detalhes/:codigo" element={<DetalhesAdocaoPage />} />
                <Route path="/ajudar" element={<DoacaoPage />} />
                <Route path="/doacao" element={<DoacaoPage />} />
                <Route path="/formulario-adocao" element={<FormularioAdocaoPage />} />
                <Route path="/formulario-castracao" element={<FormularioCastracaoPage />} />
                <Route path="/formulario-doacao" element={<FormularioDoacaoPage />} />
                <Route path="/galeria" element={<GaleriaPage />} />
            </Routes>
       </BrowserRouter>
    )
}

export default RouterApp;