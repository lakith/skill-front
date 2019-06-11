import Index from "views/Index.jsx";
import Profile from "views/examples/Profile.jsx";
import Skills from "views/examples/Skills.jsx";


var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/skills",
    name: "My Skills",
    icon: "ni ni-bullet-list-67 text-red",
    component: Skills,
    layout: "/admin"
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin"
  }
];
export default routes;
