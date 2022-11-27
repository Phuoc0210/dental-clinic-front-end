import HistoryMakeAppointment from "../pages/account/HistoryMakeAppointment"
import Medicalrecords from "../pages/adminmedicalrecords/Medicalrecords"
import PatientPage from "../pages/adminmedicalrecords/PatientPage"
import DoctorPatientPage from "../pages/Doctor/DoctorPatientPage"
import DoctorRecordPage from "../pages/Doctor/DoctorRecordPage"
import HomepageIndex from "../pages/homepage/homepageIndex"
import FormContainer from "../pages/user/login/index"

const publicRoute = [
    { path: '/', component: HomepageIndex, layout: 'default'},
    { path: '/homepage', component: HomepageIndex, layout: 'default'},
    { path: '/homepage/:userName', component: HomepageIndex, layout: 'default'},
    { path: '/login', component: FormContainer},
    { path: '/admin/admin/record/:id', component: Medicalrecords},
    { path: '/admin/doctor/record/:id', component: DoctorRecordPage},
    { path: '/account/history-make-appointment', component: HistoryMakeAppointment},
    { path: '/admin/admin', component: PatientPage},
    { path: '/admin/doctor', component: DoctorPatientPage}
]

export {publicRoute}

