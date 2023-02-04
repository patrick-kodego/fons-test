import Signin from "../home/Signin";
import Signup from "../home/Signup";
import ForgotPassword from "../home/ForgotPassword";

const authRoutes = [
    { path: "/signin", component: Signin },
    { path: "/signup", component: Signup },
    { path: "/forgot-password", component: ForgotPassword },
];

export {authRoutes};