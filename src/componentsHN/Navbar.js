import "../style/navbar.css";
import logo from "../assits/logo.png";
import ind from "../assits/flags/ind.png";
import Hosting from "../assits/hosting.svg";
import VPS from "../assits/vps-hosting.svg";
import Email from "../assits/email.svg";
import Domain from "../assits/domain.svg";
import Login from "../assits/login.svg";
import Cart from "../assits/cart.svg";

const vMenue = document.getElementsByClassName("maximizeMenue");
const clickToggle = () => {
  vMenue.item(0).classList.toggle("vertical_active");
};

function Navbar() {
  return (
    <div className="menue">
      <button className="circle" onClick={clickToggle}>
        <img alt="logo" src={logo} />
      </button>

      <div id="maximizeMenue" className="vertical_active maximizeMenue">
        <div className="nav_btn">
          <div className=" dropend">
            <button
              type="button"
              className="btn  dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img alt="Laguage" className="flag" src={ind}></img>
            </button>
            <ul className="languages dropdown-menu">
              <li>
                <a
                  className="dropdown-item"
                  href="https://adityahostinger-english.netlify.app/"
                >
                  English
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://adityahostinger-hindi.netlify.app/"
                >
                  Hindi
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://adityahostinger-urdu.netlify.app/"
                >
                  Urdu
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://adityahostinger-russian.netlify.app/"
                >
                  Russian
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://adityahostinger-spanish.netlify.app/"
                >
                  Spanish
                </a>
              </li>
            </ul>
          </div>
          <div className=" dropend">
            <button
              type="button"
              className="btn  dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img alt="Hosting" src={Hosting}></img>
            </button>
            <ul className="dropdown-menu">
              <li>
                <a
                  className="dropdown-item"
                  href="https://www.hostinger.in/web-hosting"
                >
                  ????????? ????????????????????????
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://www.hostinger.in/cloud-hosting"
                >
                  ?????????????????? ????????????????????????
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://www.hostinger.in/wordpress-hosting"
                >
                  ??????????????????????????? ????????????????????????
                </a>
              </li>
            </ul>
          </div>
          <div className=" dropend">
            <button
              type="button"
              className="btn  dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img alt="VPS" src={VPS}></img>
            </button>
            <ul className="dropdown-menu">
              <li>
                <a
                  className="dropdown-item"
                  href="https://www.hostinger.in/vps-hosting"
                >
                  ?????????????????? ????????????????????????
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://www.hostinger.in/cyberpanel-vps-hosting"
                >
                  ??????????????????????????? ????????????????????????
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://www.hostinger.in/minecraft-server-hosting"
                >
                  Minecraft ??????????????? ????????????????????????
                </a>
              </li>
            </ul>
          </div>
          <div className=" dropend">
            <button
              type="button"
              className="btn  dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img alt="Email" src={Email}></img>
            </button>
            <ul className="dropdown-menu">
              <li>
                <a
                  className="dropdown-item"
                  href="https://www.hostinger.in/google-workspace"
                >
                  Google ?????????????????????????????? ???????????? ????????????????????????
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://www.hostinger.in/email-hosting"
                >
                  ??????????????????????????? ???????????? ????????????????????????
                </a>
              </li>
            </ul>
          </div>
          <div className=" dropend">
            <button
              type="button"
              className="btn  dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img alt="Domain" src={Domain}></img>
            </button>
            <ul className="dropdown-menu">
              <li>
                <a
                  className="dropdown-item"
                  href="https://www.hostinger.in/domain-name-search"
                >
                  ??????????????? ????????? ?????????
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://www.hostinger.in/whois"
                >
                  WHOIS ???????????????
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://www.hostinger.in/domain-transfer"
                >
                  ??????????????? ??????????????????????????????
                </a>
              </li>
            </ul>
          </div>
          <div className="login dropend">
            <a href="https://www.hostinger.in/cpanel-login">
              <img alt="Login" src={Login}></img>
            </a>
          </div>
          <div className="cart dropend">
            <a href="https://www.hostinger.in/cart/empty">
              <img alt="Cart" src={Cart}></img>
              <span>???????????????</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
