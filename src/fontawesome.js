//Khởi tạo thư viện icon của riêng bạn
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faSkype,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

//Import các icon mà bạn muốn sử dụng trong từng gói
import {
  faAngleDown,
  faArrowUp,
  faBars,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";

//Add các icon đã được import vào trong thư viện của bạn
library.add(
  faAngleDown,
  faArrowUp,
  faBars,
  faAngleRight,
  faTwitter,
  faFacebookF,
  faInstagram,
  faSkype,
  faLinkedinIn,
  faCirclePlay
);
