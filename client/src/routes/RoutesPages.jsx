import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Header from '../components/Header'
import CreateBlog from '../pages/CreateBlog'
import Footer from '../components/Footer'
import Blogs from '../pages/Blogs'
import BlogDetailes from '../pages/BlogDetailes'
import About from '../pages/About'
import UpdateBlog from '../pages/UpdateBlog';
import Signup from '../pages/Signup'
import Signin from '../pages/Signin'
import PageNotFound from '../pages/PageNotFound'
import Profile from '../pages/Profile'
import PrivateRoute from '../components/PrivateRoutes'
import Admin from '../pages/Admin'
import ForgotPassword from '../pages/ForgotPassword'
import CarProducts from '../pages/CarProducts'
import CarDetailsPage from '../pages/CarDetails'
import CreateCarListing from '../pages/CreateCarListing'
import AdminDashboardPage from '../pages/AdminDashboardPage'
import CarGridPage from '../pages/CarGridPage'
import CarListPage from '../pages/CarListPage'
import StereosPage from '../pages/Accessories/StereosPage'
import SpeakerPage from '../pages/Accessories/SpeakerPage'
import AmplifierPage from '../pages/Accessories/AmplifierPage'
import BodyKitPage from '../pages/Accessories/BodyKitPage'
import SubwooferPage from '../pages/Accessories/SubwooferPage'
import BumperPage from '../pages/Accessories/BumperPage'
import DoorPage from '../pages/Accessories/DoorPage'
import FenderPage from '../pages/Accessories/FenderPage'
import GrillPage from '../pages/Accessories/GrillPage'
import HoodPage from '../pages/Accessories/HoodPage'
import CustomGrillPage from '../pages/Accessories/CustomGrillPage'
import CarCoverPage from '../pages/Accessories/CarCoverPage'
import OffRoadBumperPage from '../pages/Accessories/OffRoadBumperPage'
import DashKitPage from '../pages/Accessories/DashKitPage'
import SeatCoverPage from '../pages/Accessories/SeatCoverPage'
import SteeringWheelsPage from '../pages/Accessories/SteeringWheelsPage'
import SunshadesPage from '../pages/Accessories/SunshadesPage'
import CustomGaugesPage from '../pages/Accessories/CustomGaugesPage'
import FoglightPage from '../pages/Accessories/FoglightPage'
import HeadlightPage from '../pages/Accessories/HeadlightPage'
import LedlightPage from '../pages/Accessories/LedlightPage'
import OffRoadLightPage from '../pages/Accessories/OffRoadLightPage'
import SignalLightPage from '../pages/Accessories/SignalLightPage'

export default function RoutesPages() {

  return (
    <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          
          {/* blog routes */}
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path='/createblog' element={<CreateBlog/>}/>
          <Route path='/update-blog/:blogID' element={<UpdateBlog/>}/>
          <Route element={<PrivateRoute/>}>
            <Route path='/blogDetailes/:blogID' element={<BlogDetailes/>}/>
          </Route>

          {/* cars routes */}
          <Route path='/car-sales' element={<CarProducts/>}/>
          <Route path='/car-details/:carID' element={<CarDetailsPage/>}/>
          <Route element={<PrivateRoute/>}>
            <Route path='/create-car-listings' element={<CreateCarListing/>}/>
          </Route>
          <Route path='/car-grid' element={<CarGridPage/>}/>
          <Route path='/car-list' element={<CarListPage/>}/>
          
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/signin' element={<Signin/>}/>

          // -----------------------------------------------------------------------Accessories Routes----------------------------------------------------------
          <Route path='/stereos' element={<StereosPage/>}/>
          <Route path='/speakers' element={<SpeakerPage/>}/>
          <Route path='/amplifiers' element={<AmplifierPage/>}/>
          <Route path='/subwoofers' element={<SubwooferPage/>}/>
          <Route path='/bumpers' element={<BumperPage/>}/>
          <Route path='/doors' element={<DoorPage/>}/>
          <Route path='/fenders' element={<FenderPage/>}/>
          <Route path='/body-kits' element={<BodyKitPage/>}/>
          <Route path='/grills' element={<GrillPage/>}/>
          <Route path='/custom-grills' element={<CustomGrillPage/>}/>
          <Route path='/hoods' element={<HoodPage/>}/>
          <Route path='/car-covers' element={<CarCoverPage/>}/>
          <Route path='/offroadbumbers' element={<OffRoadBumperPage/>}/>

          <Route path='/custom-gauges' element={<CustomGaugesPage/>}/>
          <Route path='/dashkits' element={<DashKitPage/>}/>
          <Route path='/seat-covers' element={<SeatCoverPage/>}/>
          <Route path='/steeringwheels' element={<SteeringWheelsPage/>}/>
          <Route path='/sunshades' element={<SunshadesPage/>}/>

          <Route path='/foglights' element={<FoglightPage/>}/>
          <Route path='/headlights' element={<HeadlightPage/>}/>
          <Route path='/ledlights' element={<LedlightPage/>}/>
          <Route path='/offroadlights' element={<OffRoadLightPage/>}/>
          <Route path='/signallights' element={<SignalLightPage/>}/>

          {/* admin routes */}
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/admin-dashboard' element={<AdminDashboardPage/>}/>
          
          {/* admin forgot password */}
          <Route path='/forgot-password' element={<ForgotPassword/>}/>

          <Route element={<PrivateRoute/>}>
            <Route path='/profile' element={<Profile/>}/>
          </Route>

          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
        <Footer/>
    </Router>
  )
}
