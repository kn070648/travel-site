import "../styles/style.css";
import MobileMenu from "./modules/MobileMenu";

let mobileMenu = new MobileMenu();

if (module.hot) {
  module.hot.accept();
}
