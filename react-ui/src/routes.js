// import
import Dashboard from "views/Dashboard/Dashboard.js";
import Tables from "views/Dashboard/Mentors.js";
import Billing from "views/Dashboard/Billing.js";
import RTLPage from "views/RTL/RTLPage.js";
import Profile from "views/Dashboard/Profile.js";
import SignIn from "views/Pages/SignIn.js";
import SignUp from "views/Pages/SignUp.js";
import SignUpMentors from "views/Pages/SignUpMentors.js";
import SignOut from "views/Pages/SignOut.js";
import { FaUserGraduate, FaSchool } from "react-icons/fa";
import Universities from "views/Dashboard/Universities";
import University from "views/Dashboard/University";
import Traction from "views/Dashboard/Traction";

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
GraduatedIcon,
  SupportIcon,
} from "components/Icons/Icons";

var dashRoutes = [
  //  {
  //    path: "/dashboard",
  //    name: "Заявки",
  //    rtlName: "لوحة القيادة",
  //    icon: <GraduatedIcon color="inherit" />,
  //    component: Dashboard,
  //    layout: "/dashboard",
  //  },
  {
    path: "/traction",
    name: "My tractions",
    rtlName: "لوحة القيادة",
    icon: <GraduatedIcon color="inherit" />,
    component: Traction,
    layout: "/dashboard",
    hide: true
  },
  {
    path: "/mentors",
    name: "Mentors",
    rtlName: "لوحة القيادة",
    icon: <FaUserGraduate color="inherit" />,
    component: Tables,
    layout: "/dashboard",
  },
  {
    path: "/universities",
    name: "Universities",
    rtlName: "لوحة القيادة",
    icon: <FaSchool color="inherit" />,
    component: Universities,
    layout: "/dashboard",
  },
  {
    path: "/university",
    name: "Univerisity",
    rtlName: "لوحة القيادة",
    icon: <FaSchool color="inherit" />,
    component: University,
    layout: "/dashboard",
    hide: true
  },
  //  {
  //    path: "/billing",
  //    name: "Billing",
  //    rtlName: "لوحة القيادة",
  //    icon: <CreditIcon color="inherit" />,
  //    component: Billing,
  //    layout: "/dashboard",
  // },
  {
    name: "Account",
    category: "account",
    rtlName: "صفحات",
    state: "pageCollapse",
    views: [
      {
        path: "/profile",
        name: "Profile",
        rtlName: "لوحة القيادة",
        icon: <PersonIcon color="inherit" />,
        secondaryNavbar: true,
        component: Profile,
        layout: "/dashboard",
      },
      {
        path: "/signin",
        name: "Sign In",
        rtlName: "لوحة القيادة",
        icon: <DocumentIcon color="inherit" />,
        component: SignIn,
        layout: "/auth",
        hide: true
      },
      {
        path: "/signup",
        name: "Sign Up",
        rtlName: "لوحة القيادة",
        icon: <RocketIcon color="inherit" />,
        secondaryNavbar: true,
        component: SignUp,
        layout: "/auth",
        hide: true
      },
      {
        path: "/signup-mentor",
        name: "Sign Up Mentor",
        rtlName: "لوحة القيادة",
        icon: <RocketIcon color="inherit" />,
        secondaryNavbar: true,
        component: SignUpMentors,
        layout: "/auth",
        hide: true
      },
      {
        path: "/signout",
        name: "Signout",
        rtlName: "لوحة القيادة",
        icon: <RocketIcon color="inherit" />,
        component: SignOut,
        layout: "/dashboard",
      },
    ],
  },
];
export default dashRoutes;
