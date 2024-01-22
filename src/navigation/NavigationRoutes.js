import Splash from '../containers/Splash';
import OnBoarding from '../containers/OnBoarding';
import AuthNavigation from './Type/AuthNavigation';
import SignUpScreen from '../containers/auth/SignUpScreen';
import OtpVerificationScreen from '../containers/auth/OtpVerificationScreen';
import LoginScreen from '../containers/auth/LoginScreen';
import ForgotPasswordScreen from '../containers/auth/ForgotPasswordScreen';
import CreatePasswordScreen from '../containers/auth/CreatePasswordScreen';
import TabNavigation from './Type/TabNavigation';
import Home from '../containers/Tab/HomeTab';
import Location from '../containers/Tab/LocationTab';
import Booking from '../containers/Tab/BookingTab';
import Message from '../containers/Tab/MessageTab';
import Profile from '../containers/Tab/ProfileTab';
import CategoriesScreen from '../containers/CategoriesScreen';
import SalonsDetailScreen from '../containers/SalonsDetailScreen';
import SalonsListScreen from '../containers/SalonsListScreen';
import AboutUs from '../containers/profile/AboutUs';
import AddNewCard from '../containers/profile/AddNewCard';
import EditProfile from '../containers/profile/EditProfile';
import FavoritesSalons from '../containers/profile/FavoritesSalons';
import Language from '../containers/profile/Language';
import Notification from '../containers/profile/Notification';
import PaymentMethod from '../containers/profile/PaymentMethod';
import PrivacyPolicy from '../containers/profile/PrivacyPolicy';
import ReferAndEarn from '../containers/profile/ReferAndEarn';
import Chat from '../containers/message/Chat';
import VoiceCall from '../containers/message/VoiceCall';
import MyBookingDetail from '../containers/booking/MyBookingDetail';
import SalonDetail from '../containers/home/SalonDetail';
import SelectGender from '../containers/home/SelectGender';
import SelectDateAndTime from '../containers/home/SelectDateAndTime';
import SelectServices from '../containers/home/SelectServices';
import YourAppointment from '../containers/home/YourAppointment';
import Congratulation from '../containers/home/Congratulation';
import PaymentDetail from '../containers/home/PaymentDetail';
import CurrentLocation from '../containers/CurrentLocation';
import FindNearbySalon from '../containers/FindNearbySalon';

export const StackRoute = {
  Splash,
  OnBoarding,
  AuthNavigation,
  TabNavigation,
  CategoriesScreen,
  SalonsDetailScreen,
  SalonsListScreen,
  AboutUs,
  AddNewCard,
  EditProfile,
  FavoritesSalons,
  Language,
  Notification,
  PaymentMethod,
  PrivacyPolicy,
  ReferAndEarn,
  Chat,
  VoiceCall,
  MyBookingDetail,
  SalonDetail,
  SelectGender,
  SelectDateAndTime,
  SelectServices,
  YourAppointment,
  Congratulation,
  PaymentDetail,
  CurrentLocation,
  FindNearbySalon,
};

export const AuthRoute = {
  SignUpScreen,
  OtpVerificationScreen,
  LoginScreen,
  ForgotPasswordScreen,
  CreatePasswordScreen,
};

export const TabRoute = {
  Home,
  Location,
  Booking,
  Message,
  Profile,
};
