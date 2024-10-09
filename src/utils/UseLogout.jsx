import { useNavigate } from "react-router-dom";
function UseLogout() {
  const Navigate = useNavigate();
  return () => {
    sessionStorage.clear();
    Navigate("/login");
  };
}

export default UseLogout;
