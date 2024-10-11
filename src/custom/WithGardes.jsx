import { useSelector } from "react-redux";
import UnAuth from "../Components/UnAuth";

const WithGuard = (Component) => {
  const NewComponent = () => {
    let auth = useSelector((state) => state.authReducer.isLogin);
    return auth ? <Component /> : <UnAuth />;
  };
  return NewComponent;
};
export default WithGuard;
