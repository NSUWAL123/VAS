import { BrowserRouter, Route, Routes} from 'react-router-dom';
import BaseLayout from '../components/BaseLayout';
import AboutPage from '../pages/AboutPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import PageNotAvailable from '../pages/PageNotAvailable';
import PatientRegistrationPage from '../pages/PatientRegistrationPage'

function AppRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<BaseLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path='LoginPage' element={<LoginPage/>}/>
                    <Route path='PatientRegistrationPage' element={<PatientRegistrationPage/>}/>
                    <Route path='About' element={<AboutPage/>}/>
                    <Route path='*' element={<PageNotAvailable/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes