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
import ReviewsPage from '../pages/Accessories/ReviewsPage'
import StereoReviewPage from '../pages/Accessories/Reviews/StereoReviewPage'
import StereoReviewsPage2 from '../pages/Accessories/Reviews/reviews2/StereoReviewsPage2'
import SpeakerReviewPage from '../pages/Accessories/Reviews/SpeakerReviewPage'
import SpeakerReviewPage2 from '../pages/Accessories/Reviews/reviews2/SpeakerReviewPage2'
import AmplifierReviewPage from '../pages/Accessories/Reviews/AmplifierReviewPage'
import AmplifierPage2 from '../pages/Accessories/Reviews/reviews2/AmplifierPage2'
import SubwooferReviewPage from '../pages/Accessories/Reviews/SubwooferReviewPage'
import SubwooferReviewPage2 from '../pages/Accessories/Reviews/reviews2/SubwooferReviewPage2'
import HoodsReviewPage2 from '../pages/Accessories/Reviews/reviews2/HoodsReviewPage2'
import HoodsReviewPage from '../pages/Accessories/Reviews/HoodsReviewPage'
import DoorReviewsPage2 from '../pages/Accessories/Reviews/reviews2/DoorReviewsPage2'
import BumperReviewPage from '../pages/Accessories/Reviews/BumperReviewPage'
import BumperReviewPage2 from '../pages/Accessories/Reviews/reviews2/BumperReviewPage2'
import DoorReviewsPage from '../pages/Accessories/Reviews/DoorReviewsPage'
import FenderReviewPage from '../pages/Accessories/Reviews/FenderReviewPage'
import FenderReviewPage2 from '../pages/Accessories/Reviews/reviews2/FenderReviewPage2'
import GrillsReviewPage from '../pages/Accessories/Reviews/GrillsReviewPage'
import GrillsReviewPage2 from '../pages/Accessories/Reviews/reviews2/GrillsReviewPage2'
import BodyKitReviewPage from '../pages/Accessories/Reviews/BodyKitReviewPage'
import BodyKitReviewPage2 from '../pages/Accessories/Reviews/reviews2/BodyKitReviewPage2'
import CustomGrillReviewPage from '../pages/Accessories/Reviews/CustomGrillReviewPage'
import CustomGrillReviewPage2 from '../pages/Accessories/Reviews/reviews2/CustomGrillReviewPage2'
import CarCoverReviewPage from '../pages/Accessories/Reviews/CarCoverReviewPage'
import CarCoverReviewPage2 from '../pages/Accessories/Reviews/reviews2/CarCoverReviewPage2'
import OffRoadBumperReviewPage from '../pages/Accessories/Reviews/OffRoadBumperReviewPage'
import OffRoadBumperReviewPage2 from '../pages/Accessories/Reviews/reviews2/OffRoadBumperReviewPage2'
import CustomGaugesReviewPage from '../pages/Accessories/Reviews/CustomGaugesReviewPage'
import CustomGaugesReviewPage2 from '../pages/Accessories/Reviews/reviews2/CustomGaugesReviewPage2'
import DashkitReviewPage from '../pages/Accessories/Reviews/DashkitReviewPage'
import DashkitReviewPage2 from '../pages/Accessories/Reviews/reviews2/DashkitReviewPage2'
import SeatCoverReviewPage from '../pages/Accessories/Reviews/SeatCoverReviewPage'
import SeatCoverReviewPage2 from '../pages/Accessories/Reviews/reviews2/SeatCoverReviewPage2'
import SteeringWheelsReviewPage from '../pages/Accessories/Reviews/SteeringWheelsReviewPage'
import SteeringWheelsReviewPage2 from '../pages/Accessories/Reviews/reviews2/SteeringWheelsReviewPage2'
import SunshadesReviewPage from '../pages/Accessories/Reviews/SunshadesReviewPage'
import SunshadesReviewPage2 from '../pages/Accessories/Reviews/reviews2/SunshadesReviewPage2'
import FoglightReviewPage from '../pages/Accessories/Reviews/FoglightReviewPage'
import FoglightReviewPage2 from '../pages/Accessories/Reviews/reviews2/FoglightReviewPage2'
import HedlightReviewPage from '../pages/Accessories/Reviews/HedlightReviewPage'
import HedlightReviewPage2 from '../pages/Accessories/Reviews/reviews2/HedlightReviewPage2'
import LedlightReviewPage from '../pages/Accessories/Reviews/LedlightReviewPage'
import LedlightReviewPage2 from '../pages/Accessories/Reviews/reviews2/LedlightReviewPage2'
import OffRoadLightReviewPage from '../pages/Accessories/Reviews/OffRoadLightReviewPage'
import OffRoadLightReviewPage2 from '../pages/Accessories/Reviews/reviews2/OffRoadLightReviewPage2'
import SignalLightReviewPage from '../pages/Accessories/Reviews/SignalLightReviewPage'
import SignalLightReviewPage2 from '../pages/Accessories/Reviews/reviews2/SignalLightReviewPage2'

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

          {/* Accessories Reviews */}
          <Route path='/stereo-reviews/:accessoryId' element={<StereoReviewPage/>}/>
          <Route path='/speaker-reviews/:accessoryId' element={<SpeakerReviewPage/>}/>
          <Route path='/amplifier-reviews/:accessoryId' element={<AmplifierReviewPage/>}/>
          <Route path='/subwoofer-reviews/:accessoryId' element={<SubwooferReviewPage/>}/>
          <Route path='/hoods-reviews/:accessoryId' element={<HoodsReviewPage/>}/>
          <Route path='/bumper-reviews/:accessoryId' element={<BumperReviewPage/>}/>
          <Route path='/door-reviews/:accessoryId' element={<DoorReviewsPage/>}/>
          <Route path='/fender-reviews/:accessoryId' element={<FenderReviewPage/>}/>
          <Route path='/grill-reviews/:accessoryId' element={<GrillsReviewPage/>}/>
          <Route path='/bodykit-reviews/:accessoryId' element={<BodyKitReviewPage/>}/>
          <Route path='/custom-grill-reviews/:accessoryId' element={<CustomGrillReviewPage/>}/>
          <Route path='/car-cover-reviews/:accessoryId' element={<CarCoverReviewPage/>}/>
          <Route path='/offroadbumper-reviews/:accessoryId' element={<OffRoadBumperReviewPage/>}/>
          <Route path='/custom-gauges-reviews/:accessoryId' element={<CustomGaugesReviewPage/>}/>
          <Route path='/dash-kits-reviews/:accessoryId' element={<DashkitReviewPage/>}/>
          <Route path='/seat-cover-reviews/:accessoryId' element={<SeatCoverReviewPage/>}/>
          <Route path='/sunshade-reviews/:accessoryId' element={<SunshadesReviewPage/>}/>
          <Route path='/steeringwheel-reviews/:accessoryId' element={<SteeringWheelsReviewPage/>}/>
          <Route path='/foglight-reviews/:accessoryId' element={<FoglightReviewPage/>}/>
          <Route path='/headlight-reviews/:accessoryId' element={<HedlightReviewPage/>}/>
          <Route path='/ledlight-reviews/:accessoryId' element={<LedlightReviewPage/>}/>
          <Route path='/offroadlight-reviews/:accessoryId' element={<OffRoadLightReviewPage/>}/>
          <Route path='/signallight-reviews/:accessoryId' element={<SignalLightReviewPage/>}/>

          <Route path='/review-stereo-reviews/:accessoryId' element={<StereoReviewsPage2/>}/>
          <Route path='/review-speaker-reviews/:accessoryId' element={<SpeakerReviewPage2/>}/>
          <Route path='/review-amplifier-reviews/:accessoryId' element={<AmplifierPage2/>}/>
          <Route path='/review-subwoofer-reviews/:accessoryId' element={<SubwooferReviewPage2/>}/>
          <Route path='/review-hoods-reviews/:accessoryId' element={<HoodsReviewPage2/>}/>
          <Route path='/review-bumper-reviews/:accessoryId' element={<BumperReviewPage2/>}/>
          <Route path='/review-door-reviews/:accessoryId' element={<DoorReviewsPage2/>}/>
          <Route path='/review-fender-reviews/:accessoryId' element={<FenderReviewPage2/>}/>
          <Route path='/review-grill-reviews/:accessoryId' element={<GrillsReviewPage2/>}/>
          <Route path='/review-bodykit-reviews/:accessoryId' element={<BodyKitReviewPage2/>}/>
          <Route path='/review-custom-grill-reviews/:accessoryId' element={<CustomGrillReviewPage2/>}/>
          <Route path='/review-car-cover-reviews/:accessoryId' element={<CarCoverReviewPage2/>}/>
          <Route path='/review-offroadbumper-reviews/:accessoryId' element={<OffRoadBumperReviewPage2/>}/>
          <Route path='/review-custom-gauges-reviews/:accessoryId' element={<CustomGaugesReviewPage2/>}/>
          <Route path='/review-dash-kits-reviews/:accessoryId' element={<DashkitReviewPage2/>}/>
          <Route path='/review-seat-cover-reviews/:accessoryId' element={<SeatCoverReviewPage2/>}/>
          <Route path='/review-sunshade-reviews/:accessoryId' element={<SunshadesReviewPage2/>}/>
          <Route path='/review-steeringwheel-reviews/:accessoryId' element={<SteeringWheelsReviewPage2/>}/>
          <Route path='/review-foglight-reviews/:accessoryId' element={<FoglightReviewPage2/>}/>
          <Route path='/review-headlight-reviews/:accessoryId' element={<HedlightReviewPage2/>}/>
          <Route path='/review-ledlight-reviews/:accessoryId' element={<LedlightReviewPage2/>}/>
          <Route path='/review-offroadlight-reviews/:accessoryId' element={<OffRoadLightReviewPage2/>}/>
          <Route path='/review-signallight-reviews/:accessoryId' element={<SignalLightReviewPage2/>}/>

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
