import HistoryMakeAppointment from "../pages/account/HistoryMakeAppointment"
import Medicalrecords from "../pages/adminmedicalrecords/Medicalrecords"
import PatientPage from "../pages/adminmedicalrecords/PatientPage"
import HomepageIndex from "../pages/homepage/homepageIndex"
import Login from "../pages/user/login/login"

const publicRoute = [
    { path: '/', component: HomepageIndex, layout: 'default'},
    { path: '/login', component: Login},
    { path: '/homepage', component: HomepageIndex},
    { path: '/admin/record/:id', component: Medicalrecords},
    { path: '/account/history-make-appointment', component: HistoryMakeAppointment},
    { path: '/admin', component: PatientPage}
]

export {publicRoute}

