import logo from "../assets/logo.png";
const Headers = () => {
  return (
    <header className="flex justify-start items-center p-2">
      <div>
        <a href="/">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
        </a>
      </div>
    </header>
  );
};
export default Headers;
