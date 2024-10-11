import { lazy } from "react";

const Taskcontainer = lazy(() => import("../Components/Taskcontainer"));
const Login = lazy(() => import("../Components/Login"));

export { Taskcontainer, Login };
