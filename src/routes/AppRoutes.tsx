import { BrowserRouter, Route, Routes} from 'react-router-dom';
import BaseLayout from '../components/BaseLayout';
import AboutPage from '../pages/AboutPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import PageNotAvailable from '../pages/PageNotAvailable';
import PatientRegistrationPage from '../pages/PatientRegistrationPage'
import AppointmentPage from '../pages/AppointmentPage'
import PatientManagement from '../pages/PatientManagement';
import VaccineServices from '../pages/VaccineServices';
import AppointmentManagement from '../pages/AppointmentManagement';

function AppRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='login' element={<LoginPage/>}/>
                <Route path='registration' element={<PatientRegistrationPage/>}/>
                <Route path='/' element={<BaseLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path='appointment' element={<AppointmentPage/>}/>
                    <Route path='appointment-management' element={<AppointmentManagement/>}/>
                    <Route path='about' element={<AboutPage/>}/>
                    <Route path='patient-management' element={<PatientManagement/>}/>
                    <Route path='vaccine-service' element={<VaccineServices/>}/>
                </Route>
                <Route path='*' element={<PageNotAvailable/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes