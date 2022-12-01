import BlogPage from "../component/Blog/BlogPage"
import MakeAppointment from "../component/MakeAppointment"
import PricePage from "../component/PriceService/PagePrice"
import ServicePage from "../component/Services/ServicePageIndex"
import HistoryMakeAppointment from "../pages/account/HistoryMakeAppointment"
import AppointmentListPage from "../pages/AdminAppointment/AppointmentListPage"
import PatientListPage from "../pages/AdminAppointment/PatientListPage"
import Medicalrecords from "../pages/adminmedicalrecords/Medicalrecords"
import PatientPage from "../pages/adminmedicalrecords/PatientPage"
import DetailRecord from "../pages/DetailRecord"
import DoctorPatientPage from "../pages/Doctor/DoctorPatientPage"
import DoctorRecordPage from "../pages/Doctor/DoctorRecordPage"
import HomepageIndex from "../pages/homepage/homepageIndex"
import FormContainer from "../pages/user/login/index"

const publicRoute = [
    { path: '/', component: HomepageIndex, layout: 'default'},
    { path: '/homepage', component: HomepageIndex, layout: 'default'},
    { path: '/login', component: FormContainer},
    { path: '/admin/admin/record/:id', component: Medicalrecords},
    { path: '/admin/doctor/record/:id', component: DoctorRecordPage},
    { path: '/account/history-make-appointment', component: HistoryMakeAppointment},
    { path: '/admin/admin', component: PatientPage},
    { path: '/admin/admin/appointment', component: PatientListPage},
    { path: '/admin/admin/appointment/:id', component: AppointmentListPage},
    { path: '/admin/doctor', component: DoctorPatientPage},
    { path: '/admin/admin/record/detail/:action/:userID/:recID', component: DetailRecord},
    { path: '/admin/admin/record/detail/:action/:userID', component: DetailRecord},
    { path: '/makeappointment', component: MakeAppointment},
    { path: '/service', component: ServicePage, layout: 'default'},
    { path: '/price', component: PricePage, layout: 'default'},
    { path: '/blog', component: BlogPage, layout: 'default'}
]

export {publicRoute}

