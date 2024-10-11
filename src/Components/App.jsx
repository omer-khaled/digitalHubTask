import { Outlet } from "react-router-dom";
import Headers from "./Header";
const App = () => {
  return (
    <main className="h-full flex flex-col">
      <Headers />
      <Outlet />;
    </main>
  );
};
export default App;
