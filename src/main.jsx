import React from 'react';
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from './App.jsx';
import ContactUs from './ContactUs.jsx';
import DonarOrgans from './donarOrgans.jsx';
import DetailsForm from './DetailsForm.jsx';
import Chalan from './Chalan.jsx';
import DonatedList from './DonatedList.jsx';
import Donerlog from './donerlog.jsx';
import Ngolog from './ngo.jsx';
import Relog from './relog.jsx';
import DonorCard from './donorCard.jsx';
import DonarSelect from './donarselect.jsx';
import Rereg from './rereg.jsx';
import Aboutus from './Aboutus.jsx';
import Donerreg from './Donerreg.jsx';
import Services from './Services.jsx';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { MongoDBProvider } from './useContext.jsx';

const AppRouter = () => (
  <BrowserRouter>
    <MongoDBProvider>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/organ-donate" element={<DonarOrgans />} />
        <Route path="/blood-donate" element={<DetailsForm />} />
        <Route path="/receipt/:id" element={<Chalan />} />
        <Route path="/donationlists" element={<DonatedList />} />
        <Route path="/donerlog" element={<Donerlog />} />
        <Route path="/ngolog" element={<Ngolog />} />
        <Route path="/relog" element={<Relog />} />
        <Route path="/donorcard" element={<DonorCard />} />
        <Route path="/ddonate" element={<DonarSelect />} />
        <Route path="/rereg" element={<Rereg />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/donerreg" element={<Donerreg />} />
        <Route path="/service" element={<Services />} />
      </Routes>
    </MongoDBProvider>
  </BrowserRouter>
);

createRoot(document.getElementById("root")).render(<AppRouter />);
