import HistoryMakeAppointment from "../pages/account/HistoryMakeAppointment"
import Medicalrecords from "../pages/adminmedicalrecords/Medicalrecords"
import PatientPage from "../pages/adminmedicalrecords/PatientPage"
import HomepageIndex from "../pages/homepage/homepageIndex"
import FormContainer from "../pages/user/login/index"

const publicRoute = [
    { path: '/', component: HomepageIndex, layout: 'default'},

    { path: '/homepage', component: HomepageIndex},
    { path: '/login', component: FormContainer},
    { path: '/admin/record/:id', component: Medicalrecords},
    { path: '/account/history-make-appointment', component: HistoryMakeAppointment},
    { path: '/admin', component: PatientPage}
]

export {publicRoute}

