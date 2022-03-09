import { ThemeContext } from "../Context/ThemeContext";
import { useContext } from "react";

function Header() {
  // const value = useContext(ThemeContext);
  const { theme } = useContext(ThemeContext);
  return (
    <div className="padT4 padB4">
      <div className="container mobile-container">
        <div className="d-flex justify-content-between">
          <div>
            <img alt="SVCC Home page" src="/images/SVCCLogo.png" />
          </div>
          <div className="light">
            <h4 className="header-title">Silicon Valley Code Camp</h4>
          </div>
          <div className={theme === "light" ? "" : "text-info"}>
            Hello Mr. Divyue{"  "}
            <span>
              <a href="#">Sign out</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
