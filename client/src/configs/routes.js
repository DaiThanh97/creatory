import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import { ROUTE } from './../configs/constants';

export const ROUTES = [
    {
        path: ROUTE.HOME,
        exact: true,
        auth: true,
        component: Home
    },
    {
        path: ROUTE.SIGN_IN,
        auth: false,
        component: SignIn
    }
]