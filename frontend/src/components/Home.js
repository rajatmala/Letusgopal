import React from "react";
import TabX from "./pages/Home/Tab";
import { Container, Row, Col, Card} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import "./css/MainPage.css";
import { Link } from "react-router-dom";
import { ImQuotesLeft } from "react-icons/im";
import { GiCheckMark } from "react-icons/gi";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import NewsCarousel from "./Owl"

const MainPage = (props) => {
  const Navigate = useNavigate()
  console.log(props);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    }
  };

  const responsiveWarehouse = {
    desktop: {
      breakpoint: { max: 3000, min: 0 },
      items: 1,
      slidesToSlide: 1,
    }
  };
  
  return (
    <>
      <Container fluid className="p-0 mt-5" style={{ zIndex: 7 }}>
        <div className="d-flex flex-row bothUnits">
          <div className="nextPage bg-white find-box">
            <Card className="bg-white">
              <Card.Body className="cardStorageBody">
                <Row>
                  <Col md={12} className="mx-3">
                    <TabX></TabX>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 2668.1 692.8"><defs><linearGradient id="linear-gradient" x1="776.87" y1="527.85" x2="863.45" y2="527.85" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#68d2ff"/><stop offset="1" stop-color="#2287d9"/></linearGradient><linearGradient id="linear-gradient-2" x1="2337.03" y1="830.09" x2="2417.27" y2="830.09" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffc572"/><stop offset="1" stop-color="#ff4eb3"/></linearGradient><linearGradient id="linear-gradient-3" x1="2094.45" y1="525.55" x2="2381.3" y2="595.51" xlinkHref="#linear-gradient"/><linearGradient id="linear-gradient-4" x1="2076.16" y1="600.52" x2="2363.01" y2="670.48" xlinkHref="#linear-gradient"/><linearGradient id="linear-gradient-5" x1="1446.1" y1="1046.74" x2="1819.81" y2="1046.74" xlinkHref="#linear-gradient"/><linearGradient id="linear-gradient-6" x1="1632.8" y1="1065.83" x2="1819.81" y2="1065.83" xlinkHref="#linear-gradient"/><linearGradient id="linear-gradient-7" x1="1819.81" y1="992.37" x2="1935.25" y2="992.37" xlinkHref="#linear-gradient"/><linearGradient id="linear-gradient-8" x1="1767.77" y1="615.29" x2="1774.18" y2="615.29" xlinkHref="#linear-gradient-2"/><linearGradient id="linear-gradient-9" x1="1882.66" y1="1016.63" x2="1881.35" y2="953.66" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d2dfef"/><stop offset="0.36" stop-color="#d9e3f0"/><stop offset="0.87" stop-color="#eceff1"/><stop offset="1" stop-color="#f2f2f2"/></linearGradient><linearGradient id="linear-gradient-10" x1="1675.43" y1="579.77" x2="1696.42" y2="579.77" xlinkHref="#linear-gradient-2"/><linearGradient id="linear-gradient-11" x1="1446.1" y1="1065.83" x2="1568.98" y2="1065.83" xlinkHref="#linear-gradient"/><linearGradient id="linear-gradient-12" x1="1586.9" y1="1066.12" x2="1614.15" y2="1066.12" gradientTransform="translate(1222.6 -819.5) rotate(45)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#60a1e3"/><stop offset="1" stop-color="#5d5fd0"/></linearGradient><linearGradient id="linear-gradient-13" x1="1844.13" y1="1066.12" x2="1871.39" y2="1066.12" gradientTransform="translate(2471.3 -986) rotate(76.8)" xlinkHref="#linear-gradient-12"/><linearGradient id="linear-gradient-14" x1="962.78" y1="1069.68" x2="976.54" y2="1069.68" gradientTransform="translate(4.5 -4) rotate(0.2)" xlinkHref="#linear-gradient-12"/><linearGradient id="linear-gradient-15" x1="643.35" y1="660.33" x2="657.11" y2="660.33" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-12"/><linearGradient id="linear-gradient-16" x1="776.7" y1="1047.5" x2="888.82" y2="1047.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ff31c4"/><stop offset="1" stop-color="#9a2e9e"/></linearGradient><linearGradient id="linear-gradient-17" x1="771.25" y1="988.61" x2="814.61" y2="988.61" gradientTransform="translate(14.7 -11.6) rotate(0.8)" xlinkHref="#linear-gradient-2"/><linearGradient id="linear-gradient-18" x1="758.46" y1="971.18" x2="801.36" y2="971.62" gradientTransform="translate(14.4 -11.6) rotate(0.8)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffc572"/><stop offset="0.15" stop-color="#ffbc77"/><stop offset="0.39" stop-color="#ffa584"/><stop offset="0.69" stop-color="#ff7e99"/><stop offset="1" stop-color="#ff4eb3"/></linearGradient><linearGradient id="linear-gradient-19" x1="853.42" y1="1031.73" x2="962.98" y2="1031.73" xlinkHref="#linear-gradient-16"/><linearGradient id="linear-gradient-20" x1="879.7" y1="915.83" x2="909.55" y2="915.83" xlinkHref="#linear-gradient-2"/><linearGradient id="linear-gradient-21" x1="862.75" y1="961.82" x2="888.81" y2="973.13" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#92d2ff"/><stop offset="1" stop-color="#28a0ff"/></linearGradient><linearGradient id="linear-gradient-22" x1="896.51" y1="988.64" x2="885.81" y2="1016.17" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-12"/><linearGradient id="linear-gradient-23" x1="907.04" y1="951.15" x2="892.18" y2="981.76" xlinkHref="#linear-gradient-21"/><linearGradient id="linear-gradient-24" x1="1238.25" y1="1102.41" x2="1165.02" y2="1052.66" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#aec9e8"/><stop offset="0.21" stop-color="#b5cde9"/><stop offset="0.53" stop-color="#c8d9ec"/><stop offset="0.89" stop-color="#e8ecf0"/><stop offset="1" stop-color="#f2f2f2"/></linearGradient><linearGradient id="linear-gradient-25" x1="1977.98" y1="1059.13" x2="2197.9" y2="1059.13" xlinkHref="#linear-gradient-24"/><linearGradient id="linear-gradient-26" x1="2537.24" y1="1061.17" x2="2757.16" y2="1061.17" xlinkHref="#linear-gradient-24"/><linearGradient id="linear-gradient-27" x1="1441.14" y1="572.1" x2="1446.31" y2="572.1" gradientTransform="matrix(0.98, 0.2, -0.2, 0.98, 141.14, -265.4)" xlinkHref="#linear-gradient"/><linearGradient id="linear-gradient-28" x1="1284.68" y1="606.2" x2="1289.35" y2="606.2" gradientTransform="translate(-139.6 519.6) rotate(-22.1)" xlinkHref="#linear-gradient"/><linearGradient id="linear-gradient-29" x1="1288.96" y1="605.2" x2="1295.06" y2="605.2" gradientTransform="matrix(-0.79, -0.61, 0.61, -0.79, 1932.99, 1868.3)" xlinkHref="#linear-gradient"/><linearGradient id="linear-gradient-30" x1="1255.44" y1="598.38" x2="1322.21" y2="598.38" gradientTransform="translate(88.3 -178.6) rotate(7.8)" xlinkHref="#linear-gradient"/><linearGradient id="linear-gradient-31" x1="1084.24" y1="571.17" x2="1167.97" y2="571.17" gradientTransform="translate(-72.7 -587.3) rotate(7.8)" xlinkHref="#linear-gradient"/><linearGradient id="linear-gradient-32" x1="1315.64" y1="615.54" x2="1269.49" y2="484.78" gradientTransform="translate(88.3 -178.6) rotate(7.8)" xlinkHref="#linear-gradient"/><linearGradient id="linear-gradient-33" x1="1101.3" y1="596.49" x2="1157.38" y2="596.49" gradientTransform="translate(-72.7 -587.3) rotate(7.8)" xlinkHref="#linear-gradient"/><linearGradient id="linear-gradient-34" x1="1329.79" y1="593.74" x2="1355.28" y2="593.74" gradientTransform="translate(88.3 -178.6) rotate(7.8)" xlinkHref="#linear-gradient"/><linearGradient id="linear-gradient-35" x1="1318.97" y1="595.83" x2="1332.83" y2="595.83" gradientTransform="translate(88.3 -178.6) rotate(7.8)" xlinkHref="#linear-gradient"/><linearGradient id="linear-gradient-36" x1="1350.06" y1="592.21" x2="1355.48" y2="592.21" gradientTransform="translate(-72.7 -587.3) rotate(7.8)" xlinkHref="#linear-gradient"/><linearGradient id="linear-gradient-37" x1="1333.38" y1="588.6" x2="1261.76" y2="581.87" gradientTransform="translate(-72.7 -587.3) rotate(7.8)" xlinkHref="#linear-gradient"/><linearGradient id="linear-gradient-38" x1="1292.59" y1="600.54" x2="1295.31" y2="609.19" gradientTransform="translate(88.3 -178.6) rotate(7.8)" xlinkHref="#linear-gradient"/><linearGradient id="linear-gradient-40" x1="1445.69" y1="572.15" x2="1445.69" y2="575.99" gradientTransform="translate(88.3 -178.6) rotate(7.8)" xlinkHref="#linear-gradient"/><linearGradient id="linear-gradient-42" x1="1282.33" y1="603.77" x2="1285.05" y2="612.42" gradientTransform="translate(1521.5 -799.7) rotate(74.4)" xlinkHref="#linear-gradient"/><linearGradient id="linear-gradient-43" x1="1282.33" y1="603.77" x2="1285.05" y2="612.42" gradientTransform="matrix(0.86, 0.51, -0.51, 0.86, 481.73, -577.01)" xlinkHref="#linear-gradient"/><linearGradient id="linear-gradient-44" x1="640.68" y1="205.68" x2="677.19" y2="205.68" xlinkHref="#linear-gradient-2"/><clipPath id="clip-path" transform="translate(-161.1 -408.7)"><path class="cls-1" d="M863.4,521.6c0-23.5-19.3-42.6-43.2-42.6s-43.3,19.1-43.3,42.6a39.7,39.7,0,0,0,1,9.1c1.5,2.7,1.8,6.5,3.2,9.3a42.1,42.1,0,0,0,5.7,8.7c7.7,9.2,15.3,17.8,21.8,28h23.6c1.5,0,7-9.7,8.1-11.2C850,551.2,863.4,540.4,863.4,521.6Z"/></clipPath><linearGradient id="linear-gradient-46" x1="647.39" y1="170.16" x2="671.11" y2="170.16" xlinkHref="#linear-gradient"/><linearGradient id="linear-gradient-47" x1="1733.03" y1="284.61" x2="1774.44" y2="284.61" xlinkHref="#linear-gradient"/><linearGradient id="linear-gradient-48" x1="1674.2" y1="274.46" x2="1709.3" y2="274.46" xlinkHref="#linear-gradient"/><linearGradient id="linear-gradient-49" x1="1682.62" y1="258.26" x2="1689.99" y2="258.26" xlinkHref="#linear-gradient"/><linearGradient id="linear-gradient-50" x1="1763.41" y1="274.8" x2="1770.88" y2="274.8" xlinkHref="#linear-gradient"/><linearGradient id="linear-gradient-51" x1="1832.18" y1="738.93" x2="1912.72" y2="738.93" gradientTransform="translate(-106.6 371) rotate(-11)" xlinkHref="#linear-gradient-2"/><linearGradient id="linear-gradient-52" x1="1860.28" y1="697.3" x2="1900.81" y2="697.3" gradientTransform="translate(-98.5 371.8) rotate(-11)" xlinkHref="#linear-gradient"/><linearGradient id="linear-gradient-53" x1="240.73" y1="1097.27" x2="2820.74" y2="1097.27" gradientTransform="translate(1.8 -2.5) rotate(0.1)" xlinkHref="#linear-gradient"/></defs><g class="cls-2"><g id="Layer_1" data-name="Layer 1"><path id="back" class="cls-3" d="M2791.5,989.4c-16.2-10.2-36.2-14.9-49.8-28.4-29.2-29-13.7-77.3-11-118.3,5.3-83.1-61.3-164.5-143.8-175.6-18.9-2.6-38.5-2-56.2-8.8-49.6-19.2-60.8-82.7-89.3-127.6-35.8-56.2-107.1-85.5-173.3-76.9s-125.4,51.8-159.7,109.1l-1,1.9c-44.8,43.2-119.2,51.5-172.5,19.5s-79.2-92-127.3-128.9-109.8-45.7-168-36.6-112.3,35.8-162.4,66.8c-23.1,14.3-45.7,29.7-70.6,40.5-80.5,35-181.7,14.8-242.6-48.4-14.6-15.1-27-32.3-43.6-45-42.4-32.5-103.1-28.4-152.9-9.1S874,475.2,825.3,497s-107.4,32.1-154.2,6.6c-29.8-16.2-51.8-45.4-83.5-57.2-35.7-13.2-78-.4-104.2,27.1s-37,67.5-33.6,105.4c2.4,26.6,11.2,52.4,11.8,79.1,1.1,55.4-37.9,109.2-91,125.3-45.3,13.7-96.5,1.9-139.8,21.2-51.2,23-75.9,85.7-68.4,141.3s-3,104.4,35.5,145.2l2622.8,5.8C2839.5,1060.7,2826,1011.2,2791.5,989.4Z" transform="translate(-161.1 -408.7)"/><g class="cls-4"><g class="cls-5"><polygon class="cls-6" points="547.3 690.7 547.3 490.7 578.7 490.7 578.7 407.9 617.3 407.9 617.3 492.2 626.8 492.2 626.8 455 653.5 455 653.5 491.7 691.1 491.7 691.1 562.1 715.8 562.1 715.8 535.5 747.7 503.6 747.7 535 766.8 535 766.8 444.5 806.3 444.5 806.3 690.7 547.3 690.7"/><polygon class="cls-6" points="297.3 690.7 297.3 490.7 328.7 490.7 328.7 407.9 367.3 407.9 367.3 492.2 376.8 492.2 376.8 455 403.5 455 403.5 491.7 441.1 491.7 441.1 562.1 465.9 562.1 465.9 535.5 497.8 503.6 497.8 535 516.8 535 516.8 444.5 556.3 444.5 556.3 690.7 297.3 690.7"/><polygon class="cls-6" points="47.4 690.7 47.4 490.7 78.8 490.7 78.8 407.9 117.4 407.9 117.4 492.2 126.9 492.2 126.9 455 153.5 455 153.5 491.7 191.2 491.7 191.2 562.1 215.9 562.1 215.9 535.5 247.8 503.6 247.8 535 266.9 535 266.9 444.5 306.4 444.5 306.4 690.7 47.4 690.7"/><polygon class="cls-6" points="797.5 690.7 797.5 490.7 828.9 490.7 828.9 407.9 867.5 407.9 867.5 492.2 877 492.2 877 455 903.7 455 903.7 491.7 941.3 491.7 941.3 562.1 966.1 562.1 966.1 535.5 998 503.6 998 535 1017 535 1017 444.5 1056.5 444.5 1056.5 690.7 797.5 690.7"/><polygon class="cls-6" points="1048 690.7 1048 490.7 1079.4 490.7 1079.4 407.9 1118 407.9 1118 492.2 1127.5 492.2 1127.5 455 1154.2 455 1154.2 491.7 1191.8 491.7 1191.8 562.1 1216.6 562.1 1216.6 535.5 1248.5 503.6 1248.5 535 1267.5 535 1267.5 444.5 1307 444.5 1307 690.7 1048 690.7"/></g><g class="cls-7"><path class="cls-8" d="M386.5,821.9h0a15.2,15.2,0,0,0,.5-3.8,14.9,14.9,0,0,0-29.8,0,15.2,15.2,0,0,0,.5,3.8h0a13.8,13.8,0,0,0,1.8,4.1c2.6,5.9,6.2,12.7,12.6,23,5.8-9.8,10.4-18.1,12.8-23.3a16.1,16.1,0,0,0,1.6-3.8Z" transform="translate(-161.1 -408.7)"/><circle class="cls-6" cx="211" cy="409.4" r="7.1"/></g><g class="cls-7"><path class="cls-8" d="M1295.5,755h0a12.4,12.4,0,0,0,.5-3.8,14.9,14.9,0,0,0-29.8,0,16.5,16.5,0,0,0,.5,3.8h0a14.4,14.4,0,0,0,1.8,4,214.3,214.3,0,0,0,12.6,23c5.8-9.8,10.4-18.1,12.9-23.3a15.1,15.1,0,0,0,1.5-3.7Z" transform="translate(-161.1 -408.7)"/><path class="cls-6" d="M1288.2,751.2a7,7,0,0,1-7.1,7,7,7,0,0,1-7-7,7,7,0,0,1,7-7.1A7.1,7.1,0,0,1,1288.2,751.2Z" transform="translate(-161.1 -408.7)"/></g><g class="cls-7"><path class="cls-8" d="M1387.4,724.9h0a15.8,15.8,0,0,0,.5-3.8,14.9,14.9,0,0,0-29.8,0,15.8,15.8,0,0,0,.5,3.8h0a16.5,16.5,0,0,0,1.8,4.1c2.6,5.9,6.3,12.6,12.6,23,5.8-9.9,10.4-18.2,12.8-23.4a12.2,12.2,0,0,0,1.6-3.7Z" transform="translate(-161.1 -408.7)"/><path class="cls-6" d="M1380.1,721.1a7.1,7.1,0,0,1-14.2,0,7.1,7.1,0,1,1,14.2,0Z" transform="translate(-161.1 -408.7)"/></g><g class="cls-7"><path class="cls-8" d="M288.8,783.8h0a11,11,0,0,0,.4-3.1,12.1,12.1,0,1,0-24.1,0,11,11,0,0,0,.4,3.1h0a13.6,13.6,0,0,0,1.4,3.3,176.3,176.3,0,0,0,10.3,18.6c4.6-8,8.4-14.7,10.4-18.9a15.7,15.7,0,0,0,1.2-3Z" transform="translate(-161.1 -408.7)"/><path class="cls-6" d="M282.9,780.7a5.8,5.8,0,1,1-5.7-5.7A5.7,5.7,0,0,1,282.9,780.7Z" transform="translate(-161.1 -408.7)"/></g></g><g class="cls-4"><g class="cls-5"><polygon class="cls-6" points="1747.4 690.7 1747.4 490.7 1778.8 490.7 1778.8 407.9 1817.4 407.9 1817.4 492.2 1826.9 492.2 1826.9 455 1853.6 455 1853.6 491.7 1891.2 491.7 1891.2 562.1 1915.9 562.1 1915.9 535.5 1947.8 503.6 1947.8 535 1966.9 535 1966.9 444.5 2006.4 444.5 2006.4 690.7 1747.4 690.7"/><polygon class="cls-6" points="1497.4 690.7 1497.4 490.7 1528.8 490.7 1528.8 407.9 1567.4 407.9 1567.4 492.2 1576.9 492.2 1576.9 455 1603.6 455 1603.6 491.7 1641.2 491.7 1641.2 562.1 1666 562.1 1666 535.5 1697.9 503.6 1697.9 535 1716.9 535 1716.9 444.5 1756.4 444.5 1756.4 690.7 1497.4 690.7"/><polygon class="cls-6" points="1247.5 690.7 1247.5 490.7 1278.9 490.7 1278.9 407.9 1317.5 407.9 1317.5 492.2 1327 492.2 1327 455 1353.6 455 1353.6 491.7 1391.3 491.7 1391.3 562.1 1416 562.1 1416 535.5 1447.9 503.6 1447.9 535 1467 535 1467 444.5 1506.5 444.5 1506.5 690.7 1247.5 690.7"/><polygon class="cls-6" points="1997.6 690.7 1997.6 490.7 2029 490.7 2029 407.9 2067.6 407.9 2067.6 492.2 2077.1 492.2 2077.1 455 2103.8 455 2103.8 491.7 2141.4 491.7 2141.4 562.1 2166.2 562.1 2166.2 535.5 2198.1 503.6 2198.1 535 2217.1 535 2217.1 444.5 2256.6 444.5 2256.6 690.7 1997.6 690.7"/><polygon class="cls-6" points="2248.1 690.7 2248.1 490.7 2279.5 490.7 2279.5 407.9 2318.1 407.9 2318.1 492.2 2327.6 492.2 2327.6 455 2354.3 455 2354.3 491.7 2391.9 491.7 2391.9 562.1 2416.7 562.1 2416.7 535.5 2448.6 503.6 2448.6 535 2467.6 535 2467.6 444.5 2507.1 444.5 2507.1 690.7 2248.1 690.7"/></g><g class="cls-9"><path class="cls-8" d="M1586.6,821.9h0a15.2,15.2,0,0,0,.5-3.8,14.9,14.9,0,0,0-29.8,0,15.2,15.2,0,0,0,.5,3.8h0a13.8,13.8,0,0,0,1.8,4.1c2.6,5.9,6.2,12.7,12.6,23,5.8-9.8,10.4-18.1,12.8-23.3a16.1,16.1,0,0,0,1.6-3.8Z" transform="translate(-161.1 -408.7)"/><circle class="cls-6" cx="1411.1" cy="409.4" r="7.1"/></g><g class="cls-9"><path class="cls-8" d="M2495.6,755h0a12.4,12.4,0,0,0,.5-3.8,14.9,14.9,0,1,0-29.7,0,16.4,16.4,0,0,0,.4,3.8h0a14.4,14.4,0,0,0,1.8,4,214.3,214.3,0,0,0,12.6,23c5.8-9.8,10.4-18.1,12.9-23.3a12,12,0,0,0,1.5-3.7Z" transform="translate(-161.1 -408.7)"/><path class="cls-6" d="M2488.3,751.2a7,7,0,0,1-7.1,7,7,7,0,0,1-7-7,7,7,0,0,1,7-7.1A7.1,7.1,0,0,1,2488.3,751.2Z" transform="translate(-161.1 -408.7)"/></g><g class="cls-9"><path class="cls-8" d="M2587.5,724.9h0a15.8,15.8,0,0,0,.5-3.8,14.9,14.9,0,0,0-29.8,0,15.8,15.8,0,0,0,.5,3.8h0a16.5,16.5,0,0,0,1.8,4.1,224.5,224.5,0,0,0,12.6,23c5.8-9.9,10.4-18.2,12.8-23.4a12.2,12.2,0,0,0,1.6-3.7Z" transform="translate(-161.1 -408.7)"/><path class="cls-6" d="M2580.2,721.1a7.1,7.1,0,0,1-14.2,0,7.1,7.1,0,1,1,14.2,0Z" transform="translate(-161.1 -408.7)"/></g><g class="cls-9"><path class="cls-8" d="M1488.9,783.8h0a11,11,0,0,0,.4-3.1,12.1,12.1,0,1,0-24.1,0,11,11,0,0,0,.4,3.1h0a13.6,13.6,0,0,0,1.4,3.3,176.3,176.3,0,0,0,10.3,18.6c4.6-8,8.4-14.7,10.4-18.9a15.7,15.7,0,0,0,1.2-3Z" transform="translate(-161.1 -408.7)"/><path class="cls-6" d="M1483,780.7a5.8,5.8,0,1,1-5.7-5.7A5.7,5.7,0,0,1,1483,780.7Z" transform="translate(-161.1 -408.7)"/></g></g><path class="cls-10" d="M2331.7,1093.5h-77.4V764.7l77.4-77.4h0Z" transform="translate(-161.1 -408.7)"/><rect class="cls-6" x="2107.9" y="360.8" width="14.9" height="20.11"/><rect class="cls-6" x="2141.1" y="360.8" width="14.9" height="20.11"/><polygon class="cls-6" points="2122.7 415.4 2107.9 416.8 2107.9 396.7 2122.7 395.3 2122.7 415.4"/><rect class="cls-6" x="2141.1" y="395.3" width="14.9" height="20.11"/><polygon class="cls-6" points="2122.7 451.4 2107.9 452.7 2107.9 432.6 2122.7 431.2 2122.7 451.4"/><rect class="cls-6" x="2141.1" y="431.2" width="14.9" height="20.11"/><rect class="cls-6" x="2107.9" y="467.1" width="14.9" height="20.11"/><polygon class="cls-6" points="2156 488.6 2141.1 488.6 2141.1 467.1 2156 468.5 2156 488.6"/><rect class="cls-11" x="2170.9" y="249.7" width="93.1" height="435.08"/><rect class="cls-11" x="2199.1" y="230.1" width="36.7" height="19.68"/><rect class="cls-11" x="2216.1" y="186.8" width="2.8" height="43.29"/><rect class="cls-6" x="2185.9" y="285" width="14.9" height="20.11"/><rect class="cls-6" x="2230" y="287.3" width="14.9" height="20.11"/><rect class="cls-6" x="2185.9" y="319.4" width="14.9" height="20.11"/><rect class="cls-6" x="2228.6" y="320.3" width="14.9" height="20.11"/><rect class="cls-6" x="2185.9" y="353.8" width="14.9" height="20.11"/><rect class="cls-6" x="2228.6" y="354.7" width="14.9" height="20.11"/><rect class="cls-6" x="2185.9" y="388.1" width="14.9" height="20.11"/><rect class="cls-6" x="2228.6" y="389.1" width="14.9" height="20.11"/><rect class="cls-6" x="2185.9" y="422.5" width="14.9" height="20.11"/><rect class="cls-6" x="2228.6" y="423.4" width="14.9" height="20.11"/><rect class="cls-6" x="2185.9" y="456.9" width="14.9" height="20.11"/><rect class="cls-6" x="2228.6" y="457.8" width="14.9" height="20.11"/><rect class="cls-10" x="2264" y="380.9" width="66.6" height="303.9"/><rect class="cls-6" x="2275.6" y="423.8" width="14.9" height="20.11"/><rect class="cls-6" x="2303.4" y="423.8" width="14.9" height="20.11"/><rect class="cls-6" x="2275.6" y="456.3" width="14.9" height="20.11"/><rect class="cls-6" x="2303.4" y="456.3" width="14.9" height="20.11"/><rect class="cls-6" x="2275.6" y="488.7" width="14.9" height="20.11"/><rect class="cls-6" x="2303.4" y="488.7" width="14.9" height="20.11"/><rect class="cls-6" x="2275.6" y="521.1" width="14.9" height="20.11"/><rect class="cls-6" x="2303.4" y="521.1" width="14.9" height="20.11"/><path class="cls-11" d="M2564.4,1093.5h-72.7V767.3h0a72.6,72.6,0,0,1,72.7,72.7Z" transform="translate(-161.1 -408.7)"/><rect class="cls-6" x="2342.9" y="446.1" width="14.9" height="20.11"/><rect class="cls-6" x="2376.2" y="446.1" width="14.9" height="20.11"/><rect class="cls-6" x="2342.9" y="482" width="14.9" height="20.11"/><rect class="cls-6" x="2376.2" y="482" width="14.9" height="20.11"/><rect class="cls-6" x="2342.9" y="518" width="14.9" height="20.11"/><rect class="cls-6" x="2376.2" y="518" width="14.9" height="20.11"/><rect class="cls-6" x="2342.9" y="553.9" width="14.9" height="20.11"/><rect class="cls-6" x="2376.2" y="553.9" width="14.9" height="20.11"/><rect class="cls-11" x="2005.8" y="416.8" width="87.5" height="268"/><rect class="cls-6" x="2022.9" y="452.2" width="14.9" height="20.11"/><rect class="cls-6" x="2056.1" y="452.2" width="14.9" height="20.11"/><rect class="cls-6" x="2022.9" y="489.9" width="14.9" height="20.11"/><rect class="cls-6" x="2056.1" y="489.9" width="14.9" height="20.11"/><rect class="cls-6" x="2022.9" y="527.7" width="14.9" height="20.11"/><rect class="cls-6" x="2056.1" y="527.7" width="14.9" height="20.11"/><rect class="cls-6" x="2022.9" y="565.4" width="14.9" height="20.11"/><rect class="cls-6" x="2056.1" y="565.4" width="14.9" height="20.11"/><path class="cls-12" d="M2416,818.8h0a43.2,43.2,0,0,0,1.3-10.2,40.2,40.2,0,1,0-80.3,0,43.2,43.2,0,0,0,1.3,10.2h0a43.2,43.2,0,0,0,4.8,11c7.2,15.9,16.9,34.1,34,61.9,15.6-26.5,28-48.7,34.6-62.8a36,36,0,0,0,4.2-10.1Z" transform="translate(-161.1 -408.7)"/><circle class="cls-6" cx="2377.1" cy="808.6" r="19" transform="translate(-289.5 562.5) rotate(-22.5)"/><polygon class="cls-13" points="2213.8 583.4 2310.6 583.4 2262.2 542.9 2213.8 502.4 2165.5 542.9 2117.1 583.4 2213.8 583.4"/><rect class="cls-14" x="2136.9" y="583.4" width="153.9" height="101.45"/><rect class="cls-6" x="2204.8" y="548.9" width="9.6" height="10.87"/><rect class="cls-6" x="2217.5" y="548.9" width="9.6" height="10.87"/><rect class="cls-6" x="2204.8" y="562.2" width="9.6" height="10.87"/><rect class="cls-6" x="2217.5" y="562.2" width="9.6" height="10.87"/><rect class="cls-6" x="2197.8" y="616" width="39.6" height="68.8"/><g id="truck"><rect class="cls-15" x="1285" y="436.3" width="373.7" height="186.44"/><rect class="cls-6" x="1289.7" y="436.3" width="2.7" height="186.44"/><rect class="cls-6" x="1297.2" y="436.3" width="2.7" height="186.44"/><rect class="cls-6" x="1304.7" y="436.3" width="2.7" height="186.44"/><rect class="cls-6" x="1312.3" y="436.3" width="2.7" height="186.44"/><rect class="cls-6" x="1319.8" y="436.3" width="2.7" height="186.44"/><rect class="cls-6" x="1327.4" y="436.3" width="2.7" height="186.44"/><rect class="cls-6" x="1334.9" y="436.3" width="2.7" height="186.44"/><rect class="cls-6" x="1342.4" y="436.3" width="2.7" height="186.44"/><rect class="cls-6" x="1350" y="436.3" width="2.7" height="186.44"/><rect class="cls-6" x="1357.5" y="436.3" width="2.7" height="186.44"/><rect class="cls-6" x="1365.1" y="436.3" width="2.7" height="186.44"/><rect class="cls-6" x="1372.6" y="436.3" width="2.7" height="186.44"/><rect class="cls-6" x="1380.1" y="436.3" width="2.7" height="186.44"/><rect class="cls-6" x="1387.7" y="436.3" width="2.7" height="186.44"/><rect class="cls-6" x="1395.2" y="436.3" width="2.7" height="186.44"/><rect class="cls-6" x="1402.8" y="436.3" width="2.7" height="186.44"/><rect class="cls-6" x="1410.3" y="436.3" width="2.7" height="186.44"/><rect class="cls-6" x="1417.8" y="436.3" width="2.7" height="186.44"/><rect class="cls-6" x="1425.4" y="436.3" width="2.7" height="186.44"/><rect class="cls-6" x="1432.9" y="436.3" width="2.7" height="186.44"/><rect class="cls-6" x="1440.5" y="436.3" width="2.7" height="186.44"/><rect class="cls-6" x="1448" y="436.3" width="2.7" height="186.44"/><rect class="cls-6" x="1455.5" y="436.3" width="2.7" height="186.44"/><rect class="cls-6" x="1463.1" y="436.3" width="2.7" height="186.44"/><rect class="cls-6" x="1470.6" y="436.3" width="2.7" height="186.44"/><rect class="cls-6" x="1478.2" y="436.3" width="2.7" height="186.44"/><rect class="cls-6" x="1485.7" y="436.3" width="2.7" height="186.44"/><rect class="cls-6" x="1493.2" y="436.3" width="2.7" height="186.44"/><rect class="cls-6" x="1500.8" y="436.3" width="2.7" height="186.44"/><rect class="cls-6" x="1508.3" y="436.3" width="2.7" height="186.44"/><rect class="cls-6" x="1515.9" y="436.3" width="2.7" height="186.44"/><rect class="cls-6" x="1523.4" y="436.3" width="2.7" height="186.44"/><rect class="cls-6" x="1530.9" y="436.3" width="2.7" height="186.44"/><rect class="cls-6" x="1538.5" y="436.3" width="2.7" height="186.44"/><rect class="cls-6" x="1546" y="436.3" width="2.7" height="186.44"/><rect class="cls-6" x="1553.6" y="436.3" width="2.7" height="186.44"/><rect class="cls-6" x="1561.1" y="436.3" width="2.7" height="186.44"/><rect class="cls-6" x="1568.6" y="436.3" width="2.7" height="186.44"/><rect class="cls-6" x="1576.2" y="436.3" width="2.7" height="186.44"/><rect class="cls-6" x="1583.7" y="436.3" width="2.7" height="186.44"/><rect class="cls-6" x="1591.3" y="436.3" width="2.7" height="186.44"/><rect class="cls-6" x="1598.8" y="436.3" width="2.7" height="186.44"/><rect class="cls-6" x="1606.3" y="436.3" width="2.7" height="186.44"/><rect class="cls-6" x="1613.9" y="436.3" width="2.7" height="186.44"/><rect class="cls-6" x="1621.4" y="436.3" width="2.7" height="186.44"/><rect class="cls-6" x="1629" y="436.3" width="2.7" height="186.44"/><rect class="cls-6" x="1636.5" y="436.3" width="2.7" height="186.44"/><rect class="cls-6" x="1644" y="436.3" width="2.7" height="186.44"/><rect class="cls-6" x="1651.6" y="436.3" width="2.7" height="186.44"/><rect class="cls-16" x="1283.1" y="436.3" width="373.7" height="186.44"/><path class="cls-17" d="M1819.8,1086.5h0v-21.1h6.6V1080A6.6,6.6,0,0,1,1819.8,1086.5Z" transform="translate(-161.1 -408.7)"/><path class="cls-18" d="M1819.8,1031.4V1062h-187a32.3,32.3,0,0,0-63.8,0H1446.1v-30.6Z" transform="translate(-161.1 -408.7)"/><path class="cls-19" d="M1819.8,1062v7.6H1633.2v-2.2a32.7,32.7,0,0,0-.4-5.4Z" transform="translate(-161.1 -408.7)"/><path class="cls-20" d="M1897.9,926.8l-78.1-8.2v147.5h6.4v-.3a31.2,31.2,0,0,1,31.2-31.2h0a31.2,31.2,0,0,1,31.2,31.2v.3h46.7v-81Z" transform="translate(-161.1 -408.7)"/><rect class="cls-21" x="1767.8" y="607.9" width="6.4" height="14.87"/><path class="cls-22" d="M1838.2,960.5V937.2a5.5,5.5,0,0,1,6-5.4l43,5a10,10,0,0,1,7.2,4.3l30.9,45.1h-35.8l-46.4-18.4A7.8,7.8,0,0,1,1838.2,960.5Z" transform="translate(-161.1 -408.7)"/><rect class="cls-23" x="1675.4" y="578.6" width="21" height="2.41"/><polygon class="cls-17" points="1727.9 619.9 1658.6 619.9 1658.6 618.5 1726.6 618.5 1726.6 577.5 1727.9 577.5 1727.9 619.9"/><rect class="cls-17" x="1888" y="931.8" width="13.2" height="1.36" transform="translate(-34.5 1678.2) rotate(-59.3)"/><path class="cls-24" d="M1446.1,1062H1569a32.9,32.9,0,0,0-.5,5.4v2.2H1446.1Z" transform="translate(-161.1 -408.7)"/><circle class="cls-17" cx="1600.5" cy="1066.1" r="26.2" transform="translate(-446.1 1035.3) rotate(-45)"/><circle class="cls-25" cx="1600.5" cy="1066.1" r="13.6" transform="translate(-446.1 1035.3) rotate(-45)"/><path class="cls-17" d="M1605.5,1066.1a5,5,0,1,1-5-4.9A5,5,0,0,1,1605.5,1066.1Z" transform="translate(-161.1 -408.7)"/><circle class="cls-17" cx="1857.8" cy="1066.1" r="26.2" transform="translate(348.9 2322.2) rotate(-80.9)"/><circle class="cls-26" cx="1857.8" cy="1066.1" r="13.6" transform="translate(234.4 2222.5) rotate(-76.8)"/><circle class="cls-17" cx="1696.7" cy="656.7" r="5"/></g><g id="motor"><polygon class="cls-27" points="768.7 580.5 770.3 566.1 771.3 566.1 769.9 580.5 768.7 580.5"/><path class="cls-17" d="M933.9,987c.9-.4,8.1.2,8.1.2l-.3,13.4-2.7,1.1-7.3-3Z" transform="translate(-161.1 -408.7)"/><path class="cls-6" d="M943,993.4c0,3.8-.9,7-1.3,7.2s-1-2.7-1.1-6.5.9-6.9,1.4-6.9S942.9,989.6,943,993.4Z" transform="translate(-161.1 -408.7)"/><path class="cls-28" d="M786.3,1020.3h3.9a0,0,0,0,1,0,0v8.3a0,0,0,0,1,0,0H781a0,0,0,0,1,0,0v-3a5.3,5.3,0,0,1,5.3-5.3Z" transform="translate(-176.1 -397) rotate(-0.8)"/><polygon class="cls-29" points="637.8 614.8 636 603.1 650.9 602.9 665.9 612.6 668.9 619.2 637.4 619.6 637.8 614.8"/><path class="cls-30" d="M963.5,1085.7h-.2a.7.7,0,0,1-.4-1l12.2-30.4a.6.6,0,0,1,.9-.4.7.7,0,0,1,.5.9l-12.3,30.5A.8.8,0,0,1,963.5,1085.7Z" transform="translate(-161.1 -408.7)"/><path class="cls-30" d="M984.9,1076.5h-.3l-30.5-12.3a.8.8,0,0,1-.4-.9.7.7,0,0,1,1-.4l30.5,12.2a1,1,0,0,1,.4,1A.7.7,0,0,1,984.9,1076.5Z" transform="translate(-161.1 -408.7)"/><path class="cls-30" d="M975.7,1085.7a.8.8,0,0,1-.7-.5l-12-30.5a.7.7,0,0,1,.4-1,.8.8,0,0,1,.9.4l12.1,30.6a.7.7,0,0,1-.5.9C975.9,1085.7,975.8,1085.7,975.7,1085.7Z" transform="translate(-161.1 -408.7)"/><path class="cls-30" d="M954.4,1076.4a.7.7,0,0,1-.7-.4.8.8,0,0,1,.4-1l30.6-12a.6.6,0,0,1,.9.4.6.6,0,0,1-.4.9l-30.5,12.1Z" transform="translate(-161.1 -408.7)"/><path class="cls-30" d="M981.4,1081.9l-.5-.3-23.5-22.8a.8.8,0,0,1,0-1.1.7.7,0,0,1,1,0l23.5,22.9a.8.8,0,0,1,.1,1A.9.9,0,0,1,981.4,1081.9Z" transform="translate(-161.1 -408.7)"/><path class="cls-30" d="M958.2,1082.2l-.5-.2a.7.7,0,0,1,0-1l22.9-23.6a.7.7,0,0,1,1,1L958.7,1082Z" transform="translate(-161.1 -408.7)"/><path class="cls-30" d="M953.2,1070.7a.8.8,0,0,1-.7-.8.7.7,0,0,1,.7-.7l32.9-.5h0a.7.7,0,0,1,.7.7.8.8,0,0,1-.7.8l-32.8.5Z" transform="translate(-161.1 -408.7)"/><path class="cls-30" d="M969.9,1086.8a.7.7,0,0,1-.7-.7l-.5-32.8a.7.7,0,1,1,1.4,0l.5,32.8a.7.7,0,0,1-.7.7Z" transform="translate(-161.1 -408.7)"/><circle class="cls-31" cx="969.7" cy="1069.7" r="6.9" transform="translate(-165.5 -404.7) rotate(-0.2)"/><path class="cls-17" d="M972.6,1069.6a3,3,0,1,1-3-2.9A2.9,2.9,0,0,1,972.6,1069.6Z" transform="translate(-161.1 -408.7)"/><path class="cls-17" d="M969.3,1045.5a24.2,24.2,0,1,1-23.9,24.5A24.2,24.2,0,0,1,969.3,1045.5Zm16.8,23.9a16.5,16.5,0,1,0-16.2,16.7A16.4,16.4,0,0,0,986.1,1069.4Z" transform="translate(-161.1 -408.7)"/><path class="cls-29" d="M817.3,1019l-27.1,1.2s-14.2,7.9-21.8,35.9l2.8-.3s3.7-21.9,19-32.2l35.3-.5Z" transform="translate(-161.1 -408.7)"/><path class="cls-30" d="M805.2,1085h-.3a.8.8,0,0,1-.4-1l12.2-30.5a.8.8,0,0,1,1.4.6l-12.2,30.4A.8.8,0,0,1,805.2,1085Z" transform="translate(-161.1 -408.7)"/><path class="cls-30" d="M826.5,1075.9h-.2l-30.5-12.2a.7.7,0,0,1-.4-1,.8.8,0,0,1,.9-.4l30.5,12.3a.6.6,0,0,1,.4.9A.8.8,0,0,1,826.5,1075.9Z" transform="translate(-161.1 -408.7)"/><path class="cls-30" d="M817.3,1085a.8.8,0,0,1-.7-.4l-12-30.6a.7.7,0,0,1,.4-.9.7.7,0,0,1,1,.4l12,30.5a.8.8,0,0,1-.4,1Z" transform="translate(-161.1 -408.7)"/><path class="cls-30" d="M796,1075.8c-.3,0-.5-.2-.7-.5a.7.7,0,0,1,.5-.9l30.5-12.1a1,1,0,0,1,1,.4.9.9,0,0,1-.5,1l-30.5,12Z" transform="translate(-161.1 -408.7)"/><path class="cls-30" d="M823.1,1081.2l-.5-.2L799,1058.1a.7.7,0,0,1,1-1l23.6,22.8a.8.8,0,0,1,0,1.1Z" transform="translate(-161.1 -408.7)"/><path class="cls-30" d="M799.9,1081.5c-.2,0-.4,0-.5-.2a.8.8,0,0,1-.1-1l22.9-23.6a.8.8,0,0,1,1.1,1.1l-22.9,23.5A.6.6,0,0,1,799.9,1081.5Z" transform="translate(-161.1 -408.7)"/><path class="cls-30" d="M794.9,1070a.7.7,0,0,1-.7-.7.7.7,0,0,1,.7-.8l32.8-.4a.7.7,0,0,1,.7.7c.1.4-.3.7-.7.7l-32.8.5Z" transform="translate(-161.1 -408.7)"/><path class="cls-30" d="M811.5,1086.2a.7.7,0,0,1-.7-.7l-.5-32.9a.7.7,0,0,1,.7-.7.7.7,0,0,1,.8.7l.5,32.8a.8.8,0,0,1-.7.8Z" transform="translate(-161.1 -408.7)"/><circle class="cls-32" cx="650.2" cy="660.3" r="6.9"/><circle class="cls-17" cx="811.3" cy="1069" r="3" transform="translate(-681.9 497.7) rotate(-45.8)"/><path class="cls-17" d="M810.9,1044.8a24.2,24.2,0,1,1-23.8,24.6A24.2,24.2,0,0,1,810.9,1044.8Zm16.8,24a16.4,16.4,0,1,0-16.2,16.7A16.4,16.4,0,0,0,827.7,1068.8Z" transform="translate(-161.1 -408.7)"/><path class="cls-33" d="M845.3,1036.8c-10.4-12.6-32.3-8.7-50.4-8.5-7.2.1-13.4,5.2-18.2,11.4a60.8,60.8,0,0,0-3.1,8c.1,2.4,3.8,7,9.2,5.1,0,0,28.7-15.7,50.8,9.4l1.9,8.6,18.5,1.4C854,1063,852.8,1045.8,845.3,1036.8Z" transform="translate(-161.1 -408.7)"/><path class="cls-34" d="M888.8,1068l-8.3-9-8.9-18.5s-1.3-12.8,4-18.1l-35.7.5-49.7.7s-7.9,4.5-13.5,16.1c4.8-6.2,11-11.3,18.2-11.4,18.1-.2,40-4.1,50.4,8.5,7.5,9,8.7,26.2,8.7,35.4l6,.4Z" transform="translate(-161.1 -408.7)"/><rect class="cls-35" x="771.5" y="969.2" width="42.8" height="38.85" transform="translate(-175.5 -396.9) rotate(-0.8)"/><rect class="cls-36" x="776.5" y="1009.1" width="35.5" height="2.82" transform="translate(-175.9 -396.9) rotate(-0.8)"/><rect class="cls-37" x="771.3" y="969.2" width="42.8" height="4.7" transform="translate(-175.3 -396.9) rotate(-0.8)"/><rect class="cls-17" x="792" y="1010.4" width="2.7" height="17.93" transform="translate(-176 -396.9) rotate(-0.8)"/><path class="cls-33" d="M942.1,1067.2s8.2-18.9,43.6-22.6c0,0-12.2-15.5-40.6-5.8C945.1,1038.8,935.3,1057.9,942.1,1067.2Z" transform="translate(-161.1 -408.7)"/><polygon class="cls-38" points="801.4 641.3 809.9 661.2 808.1 662 798.6 639.3 800.2 638.4 801.4 641.3"/><path class="cls-17" d="M957.5,1033.4l6.2,14.8-4.9,2.3-6.5-16.2A5.3,5.3,0,0,1,957.5,1033.4Z" transform="translate(-161.1 -408.7)"/><path class="cls-17" d="M963,1032.4l.7-2.2s-10.8-20-24.7-28.5l-2,1.7Z" transform="translate(-161.1 -408.7)"/><path class="cls-39" d="M929.7,989.2l-3.6,8.1,1.8,9.5a67.7,67.7,0,0,1,11.9,22s-18.2,28.4-26.5,32.6c0,0-17.9,1.7-30.5-1.5l-2.3-.9s2.4,3.6,2.3,4.4-10.2,4.8-28.8,2a10.1,10.1,0,0,0,0,6.8l76.5,4.3s11.9-35.7,32.5-44.1c-6.3-11.2-14.6-21.3-26.1-32.4l-3-13Z" transform="translate(-161.1 -408.7)"/><path class="cls-17" d="M929.7,989.2s-3.5-.4-4.5,2.2,2.4,5.2,2.4,5.2l2.8-6Z" transform="translate(-161.1 -408.7)"/><path class="cls-40" d="M929.3,993.5l-5,2.6.7,3,5.5-3.2a1.8,1.8,0,0,0,.5-1.5A1.1,1.1,0,0,0,929.3,993.5Z" transform="translate(-161.1 -408.7)"/><path class="cls-17" d="M869.4,1024.5l8.5-1.9a2,2,0,0,0,1.6-1.9c.1-2.9-.3-8.9-5.3-10s-43.3-2.6-55.7-3a7.9,7.9,0,0,0-7.7,5.2c-1.1,3.6.2,8,11.9,10.2C844,1027.3,869.4,1024.5,869.4,1024.5Z" transform="translate(-161.1 -408.7)"/><path class="cls-17" d="M931.3,971.2l-.5,8.1s3-.8,3.2-3.7C934.1,975.2,932.7,972.5,931.3,971.2Z" transform="translate(-161.1 -408.7)"/><path class="cls-41" d="M888.9,939.7l-6.8-6.6a26.8,26.8,0,0,0,6-9.6L895,932A19.4,19.4,0,0,0,888.9,939.7Z" transform="translate(-161.1 -408.7)"/><path class="cls-41" d="M905.2,925.4s.8,4.6,1.1,6.5l-2.8-.3Z" transform="translate(-161.1 -408.7)"/><path class="cls-42" d="M904.8,930.9c-.3,1.3-2,5.3-2,5.3a4.3,4.3,0,0,1-3.6,1.1,14.7,14.7,0,0,1-9.4-5.1,17.8,17.8,0,0,1-4-9.9c-.4-4.6,1.3-9.9,5.5-11.8s12.1-.5,14.6,3.7S905.9,926.3,904.8,930.9Z" transform="translate(-161.1 -408.7)"/><polygon class="cls-17" points="747.3 505 753.4 509.2 753.3 510 740.1 508.5 747.3 505"/><path class="cls-42" d="M914.7,994.9a9.5,9.5,0,0,0,7.2,2.5,1.8,1.8,0,0,1,1.1-2.3,2.2,2.2,0,0,1,2.5,1.1,3.1,3.1,0,0,1-.2,2.8,11.3,11.3,0,0,0-2.6-.1,3.9,3.9,0,0,0,4.7,2.2,9.5,9.5,0,0,0,4.7-3.2c.2-.2.5-.5.5-.8a2,2,0,0,0-.4-1.3,30,30,0,0,0-4.1-4.6,2.9,2.9,0,0,0-1.5-.9,4.1,4.1,0,0,0-1.9.1c-2.4.5-5.7-.1-8.1-.7Z" transform="translate(-161.1 -408.7)"/><path class="cls-43" d="M903.3,916.8c.1.2-5.3,12.1-5.3,12.1L881.6,927s-7.8-21.7,8.4-23.9,19.3,9.7,19.5,11S903.3,916.8,903.3,916.8Z" transform="translate(-161.1 -408.7)"/><polygon class="cls-17" points="736 528.2 733.5 527.2 734.5 518.3 737.1 518.6 736 528.2"/><path class="cls-17" d="M902.2,1056.3l-2.3,8.9-.5,4.3,27.4,3.2h0a5.6,5.6,0,0,0-4-5.7l-5.9-1.7-4.6-5.5-.4-1.9Z" transform="translate(-161.1 -408.7)"/><path class="cls-44" d="M876.9,996.9l4.4-1.2c.6-2.2,13.3-48.6,7.6-56l-4.6-6.7s-10.1-6.9-20.3,23.3c-6,17.7-11.6,30.2-12.6,38.8C857.1,996.5,869.4,999,876.9,996.9Z" transform="translate(-161.1 -408.7)"/><path class="cls-45" d="M926.8,1014.4c-.4-8.2-45.5-18.6-45.5-18.6h0l-4.3,1.1c-7.6,1.9-19.9-.5-25.6-1.9-.6,5.7.6,12.1,6.2,14.4,13.7,5.6,52.1,11.1,52.1,11.1l-7.6,36.6,9.8.9S927.2,1022.5,926.8,1014.4Z" transform="translate(-161.1 -408.7)"/><path class="cls-46" d="M889.3,977.3c-.8-8.5-1.5-16.9-2.3-25.3-2.8-6.1-6.1-6.2-9.7-2.5a90.8,90.8,0,0,0,1.9,27.5,15.9,15.9,0,0,0,1.6,4.3,11.2,11.2,0,0,0,3.3,3.2c9.3,6.6,20.6,9.3,31.8,11.4.4-2.1,1.1-4.6,1.5-6.7C908.2,984.9,898.8,980.5,889.3,977.3Z" transform="translate(-161.1 -408.7)"/><path class="cls-17" d="M926.1,997.5a2.4,2.4,0,0,1-2.4,2.4,2.3,2.3,0,0,1-2.4-2.3,2.3,2.3,0,0,1,2.3-2.5A2.6,2.6,0,0,1,926.1,997.5Z" transform="translate(-161.1 -408.7)"/><rect class="cls-47" x="549.9" y="611.6" width="54.1" height="0.44"/><rect class="cls-47" x="563.8" y="620.4" width="39.3" height="0.44"/><rect class="cls-47" x="567.1" y="603.1" width="39.3" height="0.44"/></g><path class="cls-48" d="M1167.9,1092.9a6.2,6.2,0,0,1-.4-7.9,6.5,6.5,0,0,1,7.7-1.9,6.1,6.1,0,0,1,1.6-6.2c1.7-1.5,4.8-1.3,5.9.7a7,7,0,0,1,2.5-6.9c2.1-1.4,5.4-1.1,6.9,1,.1-3,.2-6.3,2.1-8.7s6.4-2.6,7.6.1a7.7,7.7,0,0,1,7.1-4.5,7.6,7.6,0,0,1,6.9,4.8,11.1,11.1,0,0,1,10.8-3.2,11.2,11.2,0,0,1,7.9,8c.2.8.5,1.7,1.3,1.9l1.1-.2c2.3-.7,4.8.7,6.2,2.6a16.7,16.7,0,0,1,2.3,6.8c2.7-2.3,7.7-.2,8,3.3,1.7-1.2,4-2.5,5.8-1.4s1.4,1.2,2.2,1.7,2,.5,2.4-.3a14.4,14.4,0,0,1,2.1,6,7.2,7.2,0,0,1,7.6-.5,7.1,7.1,0,0,1,3.6,6.7Z" transform="translate(-161.1 -408.7)"/><g id="cloud"><path class="cls-49" d="M543.5,617.6a19.9,19.9,0,0,0-10.3,2.8,20.7,20.7,0,0,0-23.5-13.3,32.4,32.4,0,0,0-62.7-.3h-1.9a26.7,26.7,0,0,0-13.5,3.6,24.4,24.4,0,0,0-37.2,20.8H562.8A20.6,20.6,0,0,0,543.5,617.6Z" transform="translate(-161.1 -408.7)"/><path class="cls-6" d="M880,697.3a20.9,20.9,0,0,1,10.3,2.8,20.5,20.5,0,0,1,19.2-13.7,20.2,20.2,0,0,1,4.3.5,32.4,32.4,0,0,1,62.7-.4h1.9a26.8,26.8,0,0,1,13.5,3.7,24.3,24.3,0,0,1,37.2,20.7H860.7A20.6,20.6,0,0,1,880,697.3Z" transform="translate(-161.1 -408.7)"/><path class="cls-49" d="M2566.8,713.8a23.7,23.7,0,0,1,11.8,3.2,23.3,23.3,0,0,1,22-15.7,26.3,26.3,0,0,1,4.9.5,37.1,37.1,0,0,1,71.9-.4h2.2a30.6,30.6,0,0,1,15.6,4.2,28.3,28.3,0,0,1,14.7-4.2,27.9,27.9,0,0,1,27.9,28H2544.7A23.6,23.6,0,0,1,2566.8,713.8Z" transform="translate(-161.1 -408.7)"/><path class="cls-6" d="M1608.2,673.3H1439.8a24.4,24.4,0,0,1,24.4-24.4,25.4,25.4,0,0,1,8.3,1.5,27,27,0,0,1,18-7,28.4,28.4,0,0,1,9.3,1.7,16.9,16.9,0,0,1,13-6,17.5,17.5,0,0,1,9.8,3.1,28.4,28.4,0,0,1,51.2,10.1,20.5,20.5,0,0,1,35.7,13.9A20.8,20.8,0,0,1,1608.2,673.3Z" transform="translate(-161.1 -408.7)"/></g><path class="cls-50" d="M1226.4,1018.1c2-3.4,2.8-7.8,1.1-11.4s-6.4-5.8-10-4a98,98,0,0,0-2.2-31c-1.3-5.5-3.3-11.3-7.8-14.8-6.9-5.4-17.8-3-23.4,3.7s-6.4,16.4-4,24.8c-6.2-1.7-13.6-1.4-17.9,3.3s-3.6,13.6-2.1,20.7,3,12.6,8,16c-6.1.7-13.5,2.4-15.4,8.3-1,3.3.2,7,2.1,9.9,6.5,9.7,19.4,12.6,31.1,12.9h5.7c3.3.3,6.5-1,9.4-2.2s6.1-2.3,9.2-3.4c4.8-1.9,9.9-4.4,12.2-9.3s.8-12.4-4.3-15A33.5,33.5,0,0,0,1226.4,1018.1Z" transform="translate(-161.1 -408.7)"/><path class="cls-51" d="M1194.6,1092.7v-82.2c0-3.5-5.4-3.5-5.4,0v82.2c0,3.5,5.4,3.5,5.4,0Z" transform="translate(-161.1 -408.7)"/><path class="cls-51" d="M1195,1036.8a22.2,22.2,0,0,0,12.1-14.2,2.6,2.6,0,0,0-1.8-3.3,2.7,2.7,0,0,0-3.4,1.8,11.7,11.7,0,0,1-.6,2c-.2.6.2-.5,0,0l-.3.6a5.9,5.9,0,0,1-.4.8l-1,1.7-.4.5c-.1.1-.3.6,0,.1l-.7.7a6.7,6.7,0,0,1-1.4,1.5,2.7,2.7,0,0,1-.8.7l-.4.4c.3-.2.3-.3,0-.1a13.1,13.1,0,0,1-3.6,2.1,2.8,2.8,0,0,0-1,3.7,2.9,2.9,0,0,0,3.7,1Z" transform="translate(-161.1 -408.7)"/><path class="cls-51" d="M1190.9,1043.8l-4.7-1.2-1-.4-.6-.2c.4.1.1,0-.1-.1l-2.1-1.1-.4-.3h0l-.8-.7-.7-.8-.2-.2-.2-.2a4.1,4.1,0,0,1-.5-.9l-.2-.4c-.3-.6.1.5-.1-.1a2.9,2.9,0,0,1-.2-.9,1.1,1.1,0,0,1-.1-.5v-.1a2.8,2.8,0,0,0-2.7-2.7,2.7,2.7,0,0,0-2.7,2.7c.2,3.9,2.5,7.1,5.6,9.4s6.8,3.1,10.3,3.9a2.6,2.6,0,0,0,3.3-1.8,2.8,2.8,0,0,0-1.9-3.4Z" transform="translate(-161.1 -408.7)"/><path class="cls-52" d="M1305.1,1004.8c-.4-4.2-4.7-8.1-9-7.1-2.4.5-5.4,2.1-6.9.3,4.7-4.4,9.6-9,12.3-14.7s2.6-13-1.8-17.7-13.7-4.8-17.1.5a63.4,63.4,0,0,0-.1-31.8c-1.4-5.2-3.6-10.4-7.9-14s-10.9-5-15.8-2.2a15.4,15.4,0,0,0-6,7.1c-4.6,9.5-4.5,20.3-3.7,30.7-3.4-4.2-11.2-3-14.5,1.3s-3,10.2-1.3,15.2,4.8,9.5,6.6,14.5c-2.8-2.8-8.1-1.4-10.4,1.7s-2.1,7.2-1.4,10.9a43.8,43.8,0,0,0,13.4,24c-3.3-2.9-9.2-1.6-12,1.7s-3.3,8-2.8,12.2c1.9,16.4,13.8,32.1,41.8,30.7,11-1.2,21.7-7,26.7-16.2s3.1-21.7-5.6-27.9c3.2-2.8,7.1-5.1,10.2-8.1S1305.5,1008.9,1305.1,1004.8Z" transform="translate(-161.1 -408.7)"/><path class="cls-51" d="M1265.5,1094.5V967.4c0-3.4-5.4-3.4-5.4,0v127.1c0,3.5,5.4,3.5,5.4,0Z" transform="translate(-161.1 -408.7)"/><path class="cls-51" d="M1264.8,1016.8a31.8,31.8,0,0,0,20.3-22,2.7,2.7,0,0,0-1.9-3.3,2.9,2.9,0,0,0-3.3,1.9,25.5,25.5,0,0,1-6,11.2,23.9,23.9,0,0,1-2.3,2.2,15.7,15.7,0,0,1-2.5,2,25,25,0,0,1-5.7,2.8,2.8,2.8,0,0,0-1.9,3.3,2.7,2.7,0,0,0,3.3,1.9Z" transform="translate(-161.1 -408.7)"/><path class="cls-51" d="M1260.7,1037.8c-3.7-.5-6.3-3.5-8.1-6.6a19.5,19.5,0,0,1-2.4-10.8,2.6,2.6,0,0,0-2.6-2.7,2.7,2.7,0,0,0-2.7,2.7,23.4,23.4,0,0,0,3.2,13.7c2.4,4.1,6.3,8.2,11.2,8.9a2.7,2.7,0,0,0,3.3-1.9,2.7,2.7,0,0,0-1.9-3.3Z" transform="translate(-161.1 -408.7)"/><path class="cls-51" d="M1264.5,984.2c-1.2-1-2.3-2.1-3.4-3.2a12.9,12.9,0,0,1-1.6-1.7l-.7-.9c-.1-.1-.4-.5-.1-.2a1,1,0,0,1-.4-.5,25.9,25.9,0,0,1-2.5-3.9c-.4-.6-.7-1.3-1.1-2a5.4,5.4,0,0,0-.5-1.1c-.1-.2-.1-.3,0-.1l-.3-.7a2.8,2.8,0,0,0-3.3-1.9,2.9,2.9,0,0,0-1.9,3.4,41.3,41.3,0,0,0,12,16.6,2.8,2.8,0,0,0,3.8,0c.9-1,1.2-2.9,0-3.8Z" transform="translate(-161.1 -408.7)"/><path class="cls-53" d="M1981.1,1091.4a12.9,12.9,0,0,1-.8-15.8,12.7,12.7,0,0,1,15.3-3.7c-1-4.4-.2-9.5,3.3-12.4s9.5-2.5,11.7,1.4c-1-5,.8-10.7,5-13.6s10.7-2.3,13.7,1.9c.1-6,.3-12.5,4.2-17.2s12.6-5.3,15.1.2a14.9,14.9,0,0,1,27.6.6,21.8,21.8,0,0,1,37.2,9.4c.4,1.6.9,3.5,2.5,3.8a5.7,5.7,0,0,0,2.2-.4c4.6-1.4,9.6,1.4,12.3,5.3s3.7,8.8,4.6,13.5c5.3-4.7,15.3-.6,15.9,6.5,3.4-2.4,7.9-4.9,11.6-2.9,1.6.9,2.6,2.5,4.2,3.5s4,1,4.7-.6a28.5,28.5,0,0,1,4.3,11.9,14.2,14.2,0,0,1,15.1-1.1,13.9,13.9,0,0,1,7,13.4Z" transform="translate(-161.1 -408.7)"/><path class="cls-54" d="M2540.4,1093.4a12.4,12.4,0,0,1,14.5-19.5c-1.1-4.3-.2-9.5,3.2-12.4s9.6-2.5,11.7,1.5c-1-5,.8-10.7,5-13.7s10.8-2.2,13.7,1.9c.1-6,.4-12.5,4.2-17.1s12.6-5.4,15.1.1a15.3,15.3,0,0,1,14-9,15.1,15.1,0,0,1,13.6,9.6,21.8,21.8,0,0,1,37.3,9.5c.4,1.5.9,3.5,2.5,3.7s1.4-.2,2.2-.4c4.5-1.4,9.6,1.4,12.3,5.3s3.7,8.8,4.6,13.5c5.3-4.6,15.3-.5,15.8,6.5,3.5-2.4,7.9-4.9,11.6-2.8,1.6.9,2.7,2.5,4.2,3.4s4.1,1.1,4.8-.6a28.4,28.4,0,0,1,4.3,12,13.8,13.8,0,0,1,22.1,12.2Z" transform="translate(-161.1 -408.7)"/><path class="cls-55" d="M2158.9,1048.4c-.9-7.2-6.9-14.2-14.1-13.6a28.7,28.7,0,0,0,9.5-20.9c.1-4.7-1.2-9.7-4.9-12.7s-8.3-2.6-11.1,0a27.5,27.5,0,0,0,4.6-22.9,27.8,27.8,0,0,0-16.7-18.8c-4.6-1.7-9.9-2.1-14.3,0s-7.8,7-9.5,11.9c-3.3,9.2-2.8,19.3-2.3,29.1a23,23,0,0,0-16.2,3,8,8,0,0,0-4.1,4.4,13.3,13.3,0,0,0-.4,4,84.4,84.4,0,0,0,1.8,16.6,38.4,38.4,0,0,0,2.5,7.2c.6,1.2,2.7,6,4.2,6.2-4.6-.7-9.1,2.7-11,6.9s-2,9.1-1.7,13.8c.4,7.6,1.7,15.9,7.3,21.1s14.7,6,22.5,7,17.6.9,26-1.9a38.6,38.6,0,0,0,22.9-19.9C2156.9,1062.5,2159.8,1055.5,2158.9,1048.4Z" transform="translate(-161.1 -408.7)"/><path class="cls-51" d="M2120,1094.8V1034c0-4.4-6.8-4.4-6.8,0v60.8c0,4.4,6.8,4.4,6.8,0Z" transform="translate(-161.1 -408.7)"/><path class="cls-51" d="M2119.7,1073.7a36,36,0,0,0,19.8-10.6,3.4,3.4,0,1,0-4.8-4.8l-1.8,1.7-1,.9-.5.4h0a25.2,25.2,0,0,1-4.4,2.8l-2.3,1.1h0l-.5.2-1.3.5a40.5,40.5,0,0,1-5,1.2,3.4,3.4,0,0,0-2.4,4.2,3.5,3.5,0,0,0,4.2,2.4Z" transform="translate(-161.1 -408.7)"/><path class="cls-51" d="M2114.9,1055.6h-.4c.6-.1-.2,0-.3,0h-1.8l-1.2-.4c-.3-.1-.7,0-.1,0l-.5-.2-1.1-.6-1.1-.8c.3.3.2.2-.1,0l-.5-.5-1.8-1.9h-.1l-.4-.6-.7-1.1c-1-1.6-1.9-3.2-2.8-4.9a3.3,3.3,0,0,0-4.6-1.2,3.4,3.4,0,0,0-1.3,4.6c2,3.8,4.2,7.8,7.5,10.6s8.3,4.7,13.1,3.7a3.4,3.4,0,0,0,2.3-4.2,3.4,3.4,0,0,0-4.1-2.4Z" transform="translate(-161.1 -408.7)"/><path class="cls-55" d="M2635.9,1044.9c-.8-7.1-6.9-14.1-14.1-13.5a28.9,28.9,0,0,0,9.6-20.9c0-4.7-1.3-9.8-5-12.7s-8.2-2.6-11,0a27.3,27.3,0,0,0-12.2-41.7c-4.6-1.7-9.9-2.2-14.3,0s-7.7,6.9-9.5,11.8c-3.3,9.3-2.8,19.4-2.3,29.2a23,23,0,0,0-16.2,2.9c-1.7,1.1-3.5,2.4-4.1,4.4a13.6,13.6,0,0,0-.4,4,76.8,76.8,0,0,0,1.9,16.6,36.1,36.1,0,0,0,2.5,7.2c.5,1.2,2.7,6.1,4.1,6.3-4.6-.7-9,2.7-11,6.9s-1.9,9.1-1.7,13.7c.4,7.7,1.8,15.9,7.3,21.1s14.8,6.1,22.5,7.1,17.7.9,26-2c10.3-3.4,18.3-10.1,22.9-19.9C2634,1059.1,2636.8,1052.1,2635.9,1044.9Z" transform="translate(-161.1 -408.7)"/><path class="cls-51" d="M2597,1091.4v-60.8c0-4.4-6.8-4.4-6.8,0v60.8c0,4.3,6.8,4.3,6.8,0Z" transform="translate(-161.1 -408.7)"/><path class="cls-51" d="M2596.7,1070.2a35.4,35.4,0,0,0,19.9-10.6,3.4,3.4,0,0,0-4.8-4.8,16.2,16.2,0,0,1-1.9,1.8l-1,.9c-.1.1-.3.2-.4.4h0a40.8,40.8,0,0,1-4.4,2.8l-2.3,1.1c.3-.2.3-.1,0,0l-.6.2-1.2.4a31.8,31.8,0,0,1-5.1,1.3,3.4,3.4,0,0,0-2.4,4.2,3.4,3.4,0,0,0,4.2,2.3Z" transform="translate(-161.1 -408.7)"/><path class="cls-51" d="M2591.9,1052.2h-2.4l-1.3-.4h0l-.5-.2-1.2-.7a4.1,4.1,0,0,1-1.1-.7c.3.3.2.2,0-.1l-.5-.4a17.1,17.1,0,0,1-1.8-2c-.4-.4.4.7-.1-.1l-.4-.5-.7-1.1a40.8,40.8,0,0,1-2.8-4.9,3.4,3.4,0,1,0-5.9,3.4c2,3.8,4.1,7.7,7.5,10.5s8.2,4.8,13,3.8a3.4,3.4,0,0,0-1.8-6.6Z" transform="translate(-161.1 -408.7)"/><g id="airplan"><rect class="cls-56" x="1439.7" y="577.1" width="2.2" height="14.85" transform="translate(-196.2 -313.2) rotate(-3.7)"/><rect class="cls-57" x="1279.9" y="593.4" width="2.1" height="7.23" transform="translate(307.4 -968) rotate(29.9)"/><rect class="cls-58" x="1285" y="593.1" width="2.1" height="7.23" transform="translate(2536.8 58.8) rotate(149.9)"/><path class="cls-59" d="M1309.7,593.5l-50.2,2.4a8.7,8.7,0,0,1-9.1-8.4h0l67.7-3.1h0A8.8,8.8,0,0,1,1309.7,593.5Z" transform="translate(-161.1 -408.7)"/><polygon class="cls-60" points="1005.7 144.8 965.9 170.6 928.9 88.5 951.1 91 1005.7 144.8"/><path class="cls-61" d="M1465.9,577.7l-21.3,1.2-52.8,3-68,3.9-67.2,3.8c-11.3.6-22.3,2.3-33.7,2.9-6.9.4-14,.4-20.8.8s-13.1-.6-19.8-1.9c-15.8-3.2-31.4-7.6-46.9-11.5l-33.8-8.3-.5-9.2,69.8-9.1,38.3-2.2,87.6-5,95.9-5.4,63.9-3.7c15-.9,33.2,9.2,39.5,23.1,1.9,4.1-9.6,10.2-12.6,11.8A63.8,63.8,0,0,1,1465.9,577.7Z" transform="translate(-161.1 -408.7)"/><polygon class="cls-62" points="993.3 157.3 959 161.9 937.5 151.5 945.6 149.1 993.3 157.3"/><path class="cls-63" d="M1346.2,583.8a47.2,47.2,0,0,0-9.3-.3,38.5,38.5,0,0,0-11.2,2c-.5,2.7-.9,7.5.6,14.6a40.9,40.9,0,0,0,11.3,1.1,52.7,52.7,0,0,0,9.3-1.1,11,11,0,0,0,2.6-.6l-.7-15.4Z" transform="translate(-161.1 -408.7)"/><path class="cls-64" d="M1326.2,585.5c-7.5,2.4-12.6,6.3-12.5,7.9s5.4,4.9,13.1,6.7C1325.3,593,1325.6,588.2,1326.2,585.5Z" transform="translate(-161.1 -408.7)"/><polygon class="cls-65" points="1186 191.4 1185.3 175 1188 175.4 1188.6 190.8 1186 191.4"/><polygon class="cls-66" points="1183.6 167.9 1167.4 165.6 1069.7 163.7 1088.4 171.4 1132.1 175.9 1186 170.5 1183.6 167.9"/><path class="cls-67" d="M1293.4,602.3a4.7,4.7,0,0,1-5.2,3.9,4.5,4.5,0,0,1-3.9-5.1,4.6,4.6,0,0,1,5.2-3.9A4.5,4.5,0,0,1,1293.4,602.3Z" transform="translate(-161.1 -408.7)"/><path class="cls-67" d="M1291.7,602.1a2.7,2.7,0,0,1-3.2,2.4,2.8,2.8,0,0,1-2.5-3.2,2.9,2.9,0,0,1,3.2-2.5A3,3,0,0,1,1291.7,602.1Z" transform="translate(-161.1 -408.7)"/><path class="cls-68" d="M1446.3,592.6a4.5,4.5,0,0,1-5.1,3.9,4.6,4.6,0,1,1,5.1-3.9Z" transform="translate(-161.1 -408.7)"/><path class="cls-68" d="M1444.7,592.4a3,3,0,0,1-3.3,2.4,2.9,2.9,0,0,1-2.5-3.2,3,3,0,0,1,3.3-2.5A2.9,2.9,0,0,1,1444.7,592.4Z" transform="translate(-161.1 -408.7)"/><circle class="cls-69" cx="1278.1" cy="602.7" r="4.6" transform="translate(55.5 1126.8) rotate(-66.6)"/><circle class="cls-70" cx="1278.1" cy="602.7" r="2.9" transform="translate(-294.6 130.9) rotate(-22.7)"/><path class="cls-6" d="M1463.8,547.5l-.8,5.4a30.7,30.7,0,0,0,6.4.2l-.9-5.6A36.7,36.7,0,0,1,1463.8,547.5Z" transform="translate(-161.1 -408.7)"/><path class="cls-6" d="M1484.3,549.6l-5.1-3.5a9.1,9.1,0,0,1-2.1.5l2,5.3,4.9-1A.8.8,0,0,0,1484.3,549.6Z" transform="translate(-161.1 -408.7)"/><path class="cls-6" d="M1470.2,547.4l.8,5.5c1.9-.1,4.3-.4,7.1-.8l-2.1-5.3A33.2,33.2,0,0,1,1470.2,547.4Z" transform="translate(-161.1 -408.7)"/><path class="cls-6" d="M1410.4,556.2h0a2,2,0,0,1-2-1.8v-1.7a1.9,1.9,0,0,1,1.8-2.1h0a2,2,0,0,1,2,1.8v1.7A1.9,1.9,0,0,1,1410.4,556.2Z" transform="translate(-161.1 -408.7)"/><path class="cls-6" d="M1400.2,556.8h0a1.8,1.8,0,0,1-2-1.8v-1.6a1.9,1.9,0,0,1,1.8-2.1h0a1.9,1.9,0,0,1,2,1.8v1.7A1.8,1.8,0,0,1,1400.2,556.8Z" transform="translate(-161.1 -408.7)"/><path class="cls-6" d="M1390,557.5h0a1.8,1.8,0,0,1-2-1.8V554a1.9,1.9,0,0,1,1.7-2h0a1.9,1.9,0,0,1,2.1,1.8v1.7A1.9,1.9,0,0,1,1390,557.5Z" transform="translate(-161.1 -408.7)"/><path class="cls-6" d="M1379.8,558.2h0a1.9,1.9,0,0,1-2-1.8l-.2-1.7a1.9,1.9,0,0,1,1.8-2h0a1.9,1.9,0,0,1,2.1,1.7v1.7A1.9,1.9,0,0,1,1379.8,558.2Z" transform="translate(-161.1 -408.7)"/><path class="cls-6" d="M1369.6,558.8h0a1.9,1.9,0,0,1-2.1-1.8v-1.6a2.1,2.1,0,0,1,1.8-2.1h0a2.1,2.1,0,0,1,2.1,1.8v1.7A1.8,1.8,0,0,1,1369.6,558.8Z" transform="translate(-161.1 -408.7)"/><path class="cls-6" d="M1359.4,559.5h0a1.9,1.9,0,0,1-2.1-1.8V556a2,2,0,0,1,1.8-2h0a1.9,1.9,0,0,1,2.1,1.8v1.7A2,2,0,0,1,1359.4,559.5Z" transform="translate(-161.1 -408.7)"/><path class="cls-6" d="M1349.2,560.2h0a2.1,2.1,0,0,1-2.1-1.8v-1.7a1.8,1.8,0,0,1,1.8-2h0a1.9,1.9,0,0,1,2.1,1.8v1.6A2.1,2.1,0,0,1,1349.2,560.2Z" transform="translate(-161.1 -408.7)"/><path class="cls-6" d="M1339,560.8h0a1.9,1.9,0,0,1-2.1-1.7v-1.7a1.9,1.9,0,0,1,1.8-2.1h0a1.9,1.9,0,0,1,2,1.8l.2,1.7A1.9,1.9,0,0,1,1339,560.8Z" transform="translate(-161.1 -408.7)"/><path class="cls-6" d="M1328.8,561.5h0a1.9,1.9,0,0,1-2.1-1.8V558a1.9,1.9,0,0,1,1.8-2h0a1.8,1.8,0,0,1,2,1.8v1.7A1.9,1.9,0,0,1,1328.8,561.5Z" transform="translate(-161.1 -408.7)"/><path class="cls-6" d="M1318.5,562.2h0a1.9,1.9,0,0,1-2-1.8v-1.7a1.8,1.8,0,0,1,1.8-2h0a1.8,1.8,0,0,1,2,1.8v1.6A1.9,1.9,0,0,1,1318.5,562.2Z" transform="translate(-161.1 -408.7)"/><path class="cls-6" d="M1308.3,562.9h0a2,2,0,0,1-2-1.8v-1.7a1.9,1.9,0,0,1,1.8-2.1h0a2,2,0,0,1,2,1.8v1.7A1.9,1.9,0,0,1,1308.3,562.9Z" transform="translate(-161.1 -408.7)"/><path class="cls-6" d="M1298.1,563.5h0a1.8,1.8,0,0,1-2-1.8v-1.6a1.9,1.9,0,0,1,1.8-2.1h0a1.9,1.9,0,0,1,2,1.8v1.7A1.8,1.8,0,0,1,1298.1,563.5Z" transform="translate(-161.1 -408.7)"/><path class="cls-6" d="M1287.9,564.2h0a1.8,1.8,0,0,1-2-1.8v-1.7a1.8,1.8,0,0,1,1.8-2h0a1.9,1.9,0,0,1,2,1.8v1.6A1.9,1.9,0,0,1,1287.9,564.2Z" transform="translate(-161.1 -408.7)"/><path class="cls-6" d="M1277.7,564.9h0a1.9,1.9,0,0,1-2-1.8v-1.7a1.9,1.9,0,0,1,1.7-2.1h0a2.1,2.1,0,0,1,2.1,1.8v1.7A1.9,1.9,0,0,1,1277.7,564.9Z" transform="translate(-161.1 -408.7)"/><path class="cls-6" d="M1267.5,565.5h0a1.8,1.8,0,0,1-2-1.8l-.2-1.6a2.1,2.1,0,0,1,1.8-2.1h0a1.9,1.9,0,0,1,2.1,1.8v1.7A1.8,1.8,0,0,1,1267.5,565.5Z" transform="translate(-161.1 -408.7)"/><path class="cls-6" d="M1257.3,566.2h0a1.9,1.9,0,0,1-2.1-1.8v-1.7a2,2,0,0,1,1.8-2h0a1.9,1.9,0,0,1,2.1,1.8v1.7A2,2,0,0,1,1257.3,566.2Z" transform="translate(-161.1 -408.7)"/><path class="cls-6" d="M1247.1,566.9h0a2.1,2.1,0,0,1-2.1-1.8v-1.7a1.9,1.9,0,0,1,1.8-2h0a1.9,1.9,0,0,1,2.1,1.7v1.7A2.1,2.1,0,0,1,1247.1,566.9Z" transform="translate(-161.1 -408.7)"/><path class="cls-6" d="M1236.9,567.5h0a1.9,1.9,0,0,1-2.1-1.8v-1.6a1.9,1.9,0,0,1,1.8-2.1h0a1.9,1.9,0,0,1,2,1.8l.2,1.7A1.9,1.9,0,0,1,1236.9,567.5Z" transform="translate(-161.1 -408.7)"/><path class="cls-6" d="M1226.7,568.2h0a1.9,1.9,0,0,1-2.1-1.8v-1.7a1.9,1.9,0,0,1,1.8-2h0a1.8,1.8,0,0,1,2,1.8l.2,1.7A2,2,0,0,1,1226.7,568.2Z" transform="translate(-161.1 -408.7)"/></g><g id="baloon"><rect class="cls-17" x="829.5" y="578.7" width="1.4" height="28.27" transform="matrix(0.99, -0.14, 0.14, 0.99, -236.14, -286.17)"/><rect class="cls-17" x="797.4" y="592.2" width="28.3" height="1.36" transform="translate(-50.7 904.2) rotate(-81.9)"/><rect class="cls-17" x="658.6" y="170.2" width="1.4" height="27.99"/><rect class="cls-71" x="640.7" y="194.4" width="36.5" height="22.52"/><rect class="cls-72" x="657.2" y="194.4" width="4.1" height="22.52"/><rect class="cls-72" x="640.7" y="203.6" width="36.5" height="4.08"/><path class="cls-1" d="M863.4,521.6c0-23.5-19.3-42.6-43.2-42.6s-43.3,19.1-43.3,42.6a39.7,39.7,0,0,0,1,9.1c1.5,2.7,1.8,6.5,3.2,9.3a42.1,42.1,0,0,0,5.7,8.7c7.7,9.2,15.3,17.8,21.8,28h23.6c1.5,0,7-9.7,8.1-11.2C850,551.2,863.4,540.4,863.4,521.6Z" transform="translate(-161.1 -408.7)"/><g class="cls-73"><path class="cls-51" d="M811.1,473.2c-13.2,8-19.6,23.4-21.7,38.1a58.7,58.7,0,0,0,1.6,24.3c2.1,7.7,5.6,15,9.4,22.1s9.1,15.9,13,24.3c.9,2,3.8.2,2.9-1.7-6.6-14.1-15.8-27-20.8-41.8a56.9,56.9,0,0,1-3.2-22.8,64.1,64.1,0,0,1,5.2-21.1c3.3-7.5,8.3-14.2,15.3-18.5a1.7,1.7,0,0,0-1.7-2.9Z" transform="translate(-161.1 -408.7)"/><path class="cls-51" d="M818.5,466.5a111.6,111.6,0,0,0-13.2,42.4,72.5,72.5,0,0,0,.9,21.8c1.6,7.4,4.3,14.6,6.6,21.9s4.4,16.2,3.2,24.5a1.7,1.7,0,0,0,3.3.9c2.2-15.2-4.7-29.1-8.6-43.4a65.5,65.5,0,0,1-2.3-21.6,109,109,0,0,1,3.7-21.9,106.1,106.1,0,0,1,9.4-22.9c1-1.9-1.9-3.6-3-1.7Z" transform="translate(-161.1 -408.7)"/><path class="cls-51" d="M815.9,479.9c3.8,6.2,7.8,12.3,10.5,19.1a54.3,54.3,0,0,1,4,19.5,152.5,152.5,0,0,1-.7,19.1,209.8,209.8,0,0,1-2.8,20.9c-1.3,6.6-2.9,13.6-6.2,19.5-1.1,1.9,1.9,3.6,2.9,1.7,3-5.3,4.6-11.5,6-17.4s2.5-14.6,3.3-21.9c1.3-13.3,2.3-27.6-2.4-40.3-2.8-7.8-7.4-14.9-11.7-21.9-1.1-1.9-4.1-.2-2.9,1.7Z" transform="translate(-161.1 -408.7)"/><path class="cls-51" d="M819.1,474.1c11.9,6.7,23.1,17,28,30a46.1,46.1,0,0,1,2.3,22.4,74.1,74.1,0,0,1-8.2,25.1c-4.7,9-10.7,17.2-16.1,25.7-1.2,1.8,1.7,3.5,2.9,1.7,5.1-7.9,10.6-15.5,15.1-23.7a82,82,0,0,0,9.3-25.9A48.2,48.2,0,0,0,842,488.8a74.9,74.9,0,0,0-21.1-17.7c-1.9-1-3.7,1.9-1.8,3Z" transform="translate(-161.1 -408.7)"/></g><rect class="cls-74" x="647.4" y="168" width="23.7" height="4.37"/></g><g id="fast"><polygon class="cls-75" points="1733 286.3 1754.4 274.5 1774.4 279.3 1772 286.3 1753.7 281.9 1733 294.8 1733 286.3"/><polygon class="cls-76" points="1709.3 282.9 1695.2 262.9 1675.1 258.5 1674.2 265.9 1692.6 269.9 1705.6 290.5 1709.3 282.9"/><polygon class="cls-77" points="1688.7 261.5 1682.6 260.8 1684.1 255.1 1690 256.6 1688.7 261.5"/><path class="cls-6" d="M1872.1,668.8c-.2,1-11.5-.7-25.2-3.9s-24.6-6.6-24.4-7.6,11.6.7,25.3,3.9S1872.4,667.8,1872.1,668.8Z" transform="translate(-161.1 -408.7)"/><polygon class="cls-78" points="1769.3 278.5 1763.4 277.2 1765 271.1 1770.9 272.7 1769.3 278.5"/><path class="cls-6" d="M1953,684.8c-.2,1.1-11.5-.7-25.2-3.8s-24.6-6.6-24.4-7.7,11.6.7,25.3,3.9S1953.3,683.8,1953,684.8Z" transform="translate(-161.1 -408.7)"/><path class="cls-79" d="M1889.1,694.9l-17.2-3.4.2-.9a8.6,8.6,0,0,1,10.2-6.9h0a8.7,8.7,0,0,1,7,10.2Z" transform="translate(-161.1 -408.7)"/><rect class="cls-17" x="1898.3" y="699.8" width="1.7" height="17.09" transform="translate(-284.5 432.4) rotate(-24.2)"/><rect class="cls-17" x="1874" y="706.1" width="11.2" height="1.66" transform="translate(653.3 2000.6) rotate(-78.6)"/><rect class="cls-17" x="1851.5" y="703.3" width="13.3" height="1.66" transform="translate(122.9 1508.2) rotate(-58.4)"/><rect class="cls-80" x="1837.3" y="708.8" width="70.3" height="60.35" transform="translate(14.4 -752.5) rotate(11)"/><rect class="cls-72" x="1870.1" y="703.8" width="5" height="70.31" transform="translate(630.6 2028.6) rotate(-79.1)"/><rect class="cls-72" x="1842.3" y="736.5" width="60.4" height="4.98" transform="translate(589.6 2001.7) rotate(-77.7)"/><rect class="cls-81" x="1860.8" y="692.5" width="39.4" height="9.61" transform="translate(6.6 -754.9) rotate(11)"/></g><rect class="cls-82" x="240.7" y="1095.2" width="2580" height="4.08" transform="translate(-162.9 -406.2) rotate(-0.1)"/></g></g></svg>
          <div className="animation-text"><span className="commas"> &ldquo;</span>One stop solution for all warehousing problems<span className="commas">”</span></div>
          {/* <div className="warehouseImages" >
            <div className="d-flex warehouseImgCarouselStyle" style={{margin:"0rem 0 0 -2rem ",padding:"0 0rem", marginLeft:"-2rem"}}>
              <div className="w-100" style={{paddingLeft:"2rem", borderRadius:"2rem", boxShadow:"6rem"}}>
                <Carousel 
                  responsive={responsiveWarehouse}
                  infinite={true}
                  arrows={false}
                  autoPlay={props.deviceType !== "mobile" ? true : false}
                  autoPlaySpeed={5000}
                  customTransition="transform 1s ease-in-out"
                  transitionDuration={1000}
                  containerClass="carousel-container"
                  deviceType={props.deviceType}
                  itemClass="carousel-item-padding-40-px"
                >
                  <div className="frontCar-items" onClick={()=>{Navigate('/storage')}}>
                    <div className="frontCar-itemsText">
                      NOW STOCK CLOSER TO YOUR CUSTOMERS FOR FASTER DELIVERY
                    </div>
                    <img
                      className="d-block w-100 frontCar-itemsImg"
                      src="/images/warehouseimg4.jpg"
                      alt="First slide"
                    />
                  </div>
                  <div className="frontCar-items" onClick={()=>{Navigate('/storage')}}>
                    <div className="frontCar-itemsText">
                      LEADING WAREHOUSING PLATFORM
                    </div>
                    <img
                      className="d-block w-100 frontCar-itemsImg"
                      src="/images/warehouseimg1.jpg"
                      alt="Second slide"
                    />
                  </div>
                  <div className="frontCar-items" onClick={()=>{Navigate('/storage')}}>
                    <div className="frontCar-itemsText">
                      BEST WAREHOUSING & LOGISTICS PLATFORM
                    </div>
                    <img
                      className="d-block w-100 frontCar-itemsImg"
                      src="/images/s3.jpg"
                      alt="Third slide"
                    />
                  </div>
                  <div className="frontCar-items" onClick={()=>{Navigate('/storage')}}>
                    <div className="frontCar-itemsText">
                      WAY TO BOOK WAREHOUSE FROM HOME
                    </div>
                    <img
                      className="d-block w-100 frontCar-itemsImg"
                      src="/images/s4.jpg"
                      alt="Fourth slide"
                    />
                  </div>
                  <div className="frontCar-items" onClick={()=>{Navigate('/storage')}}>
                    <div className="frontCar-itemsText">
                      BEST SERVICE PROVIDERS IN INDIA
                    </div>
                    <img
                      className="d-block w-100 frontCar-itemsImg"
                      src="/images/s5.jpg"
                      alt="Fifth slide"
                    />
                  </div>
                  <div className="frontCar-items" onClick={()=>{Navigate('/storage')}}>
                    <div className="frontCar-itemsText">
                      REDUCING POST HARVEST LOSSES AND INCREASING MARKET ACCESS FOR RURAL FARMERS
                    </div>
                    <img
                      className="d-block w-100 frontCar-itemsImg"
                      src="/images/warehouseimg5.jpg"
                      alt="sixth slide"
                    />
                  </div>
                  <div className="frontCar-items" onClick={()=>{Navigate('/storage')}}>
                    <div className="frontCar-itemsText">
                      EXPAND YOUR STORAGE CAPACITY
                    </div>
                    <img
                      className="d-block w-100 frontCar-itemsImg"
                      src="/images/warehouseimg2.jpg"
                      alt="seventh slide"
                    />
                  </div>
                  <div className="frontCar-items" onClick={()=>{Navigate('/storage')}}>
                    <div className="frontCar-itemsText">
                      CENTRE PLANS THE WORLD'S LARGEST GRAIN STORAGE PROGRAMME FOR FOOD SECURITY: REPORTS
                    </div>
                    <img
                      className="d-block w-100 frontCar-itemsImg"
                      src="/images/warehouseimg3.jpg"
                      alt="eighth slide"
                    />
                  </div>
                </Carousel>
              </div>
            </div>
          </div> */}
          
          {/* <div className="benifitsBar">
            <div className="benifitsHeading">
              THE WARELOGG BENIFITS TO YOUR BUSINESS
            </div>
            <div className="benifitsSubunitsContainer">
              <div className="benifitsSubunit">
                <div className="benifitsSubunitsHeading">RETAILER & ENTERPRISES</div>
                <div className="benifitsSubunitsContent">
                  <div className="benifitsSubunitsPoints"><i className="benifitsSubunitsPointsIcon"><GiCheckMark/></i><div> Develop An Agile Distribution Network With Flexible Space & Freight</div></div>
                  <div className="benifitsSubunitsPoints"><i className="benifitsSubunitsPointsIcon"><GiCheckMark/></i><div> Manage Your Inventory Overflow, Reduce Distribution Cost</div></div>
                  <div className="benifitsSubunitsPoints"><i className="benifitsSubunitsPointsIcon"><GiCheckMark/></i><div> A-Grade Facilities With All Compliances, Integrated Tech To Manage Vendors & Distributors</div></div>
                </div>
              </div>
              <div className="benifitsSubunit">
                <div className="benifitsSubunitsHeading">SMALL SIZE COMPANIES AND FARMERS</div>
                <div className="benifitsSubunitsContent">
                <div className="benifitsSubunitsContent">
                  <div className="benifitsSubunitsPoints"><i className="benifitsSubunitsPointsIcon"><GiCheckMark/></i><div> Access To High Class Infrastructure At Lower Price</div></div>
                  <div className="benifitsSubunitsPoints"><i className="benifitsSubunitsPointsIcon"><GiCheckMark/></i><div> Reduce Warehousing Cost. Use Sub-Units Only When Required & As Much Needed</div></div>
                  <div className="benifitsSubunitsPoints"><i className="benifitsSubunitsPointsIcon"><GiCheckMark/></i><div> Reduce Losses And Easier Market Access For Rural Farmers</div></div>
                </div>
                </div>
              </div>
              <div className="benifitsSubunit">
                <div className="benifitsSubunitsHeading">E-COMMERCE PLAYERS</div>
                <div className="benifitsSubunitsContent">
                <div className="benifitsSubunitsContent">
                  <div className="benifitsSubunitsPoints"><i className="benifitsSubunitsPointsIcon"><GiCheckMark/></i><div> Network Of Smart & Scalable Fulfilment Centres Integrated With Marketplaces & Last Mile</div></div>
                  <div className="benifitsSubunitsPoints"><i className="benifitsSubunitsPointsIcon"><GiCheckMark/></i><div> Listing And Booking Warehouses Is Easier Now</div></div>
                  <div className="benifitsSubunitsPoints"><i className="benifitsSubunitsPointsIcon"><GiCheckMark/></i><div> Fast Growing Network Provides Easy Access.</div></div>
                </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <section class="features-grid">
  
  <article class="features-group">
    <div class="features-image">
      <img src="/images/warehouse-3d.png" alt="Illustration of a man touching a large check icon" />
    </div>
    <div class="features-text">
      <h2>Optimisation of storage capacity using 3D-modeling</h2>
      <p>"Warelogg leverages LiDAR-based 3D modeling technology to maximize the storage capacity of warehouses, enabling optimal utilization of available space"</p>
    </div>
  </article>
  
  <article class="features-group">
    <div class="features-image inverse">
      <img src="/images/india-map.png" alt="Illustration of a woman standing next to a screen with portfolio items" />
    </div>
    <div class="features-text">
      <h2>Mapping out Warehouses for smooth transportation of valuable goods</h2>
      <p>"Warelogg utilizes cutting-edge technology to meticulously map out the most conveniently located warehouses based on specific transportation requirements, streamlining the process of securing reliable storage solutions for valuable goods"</p>
    </div>
  </article>
  
  <article class="features-group">
    <div class="features-image">
      <img src="/images/tech-image.png" alt="Illustration of a man in a suit pointing to a bar chart that is going up" />
    </div>
    <div class="features-text">
      <h2>Modernizing traditional warehouses with latest technology</h2>
      <p>"Warelogg is transforming the warehousing industry through the utilization of advanced technology, enabling companies to optimize their operations and enhance their business outcomes"</p>
    </div>
  </article>
  
  <article class="features-group">
    <div class="features-image inverse">
      <img src="/images/storage.png" alt="Illustration of a woman standing next to a mail envelope" />
    </div>
    <div class="features-text">
      <h2>Realtime visibility of unused capacity of warehouses</h2>
      <p>"Warelogg continuously monitors and identifies unused space within a warehouse, thereby facilitating the effective utilization of available space and maximizing profitability for owners"</p>
    </div>
  </article>
</section>
        <Row className="d-flex" style={{margin:"10rem 3rem"}}>
          <Col md={3} xs={12} className="px-0 mb-2">
          <card className="d-flex h-100 justify-content-center align-items-center mr-2" style={{boxShadow: "#49505766 2px 0px 10px -1px"}}><h3 className="h-auto text-center mb-0  my-4">Our Supporters</h3></card>
          </Col>
          <Col md={9} xs={12} className="px-0 mb-2"><Carousel 
          responsive={responsive}
          infinite={true}
          arrows={false}
          autoPlay={props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={3000}
          customTransition="transform 1s ease-in-out"
          transitionDuration={1000}
          containerClass="carousel-container"
          deviceType={props.deviceType}
          itemClass="carousel-item-padding-40-px"
          >
            <div className="sup-items"><img
              className="d-block w-100"
              src="/images/sup-1.png"
              alt="First slide"
              style={{ height: "100%", objectFit: "fill" }}
            /></div>
            <div className="sup-items"><img
              className="d-block w-100"
              src="/images/IIT_MANDI_CATALYST.jpg"
              alt="Second slide"
              style={{ height: "100%", objectFit: "contain" }}
            /></div>
            <div className="sup-items"><img
              className="d-block w-100"
              src="/images/iit_mandi.png"
              alt="Third slide"
              style={{ height: "100%", objectFit: "fill" }}
            /></div>
            <div className="sup-items"><img
              className="d-block w-100"
              src="/images/sup-4.png"
              alt="Fourth slide"
              style={{ height: "100%", objectFit: "fill",backgroundColor:"white" }}
            /></div>
            <div className="sup-items"><img
              className="d-block w-100"
              src="/images/sup-5.webp"
              alt="Fifth slide"
              style={{ height: "100%", objectFit: "fill",backgroundColor:"white" }}
            /></div>
          </Carousel>
          </Col>
        </Row>
        <NewsCarousel/>
      </Container>
      <div
        className="container-fluid py-5 px-sm-3 px-lg-5"
        style={{ marginTop: 90 ,marginBottom:-90, color:"black",background: "rgb(23,100,171)",
        background: "linear-gradient(90deg, rgb(251 243 230) 25%, rgb(254 199 108) 59%, rgb(255 161 63) 75%)"}}
      >
        <div className="row pt-5">
          <div className="col-lg-6 col-md-12">
            <div className="row">
              <div className="col-md-6 mb-5">
                <h5
                  className="text-uppercase mb-4"
                  style={{color:"black", letterSpacing: 5 }}
                >
                  Get In Touch
                </h5>
                <p>
                  <i className="fa fa-map-marker-alt mr-2" />
                  New Coworking Space <br/> IIT Mandi North Campus, Salgi
                  <br/>Mandi, Himachal Pradesh - 175005
                </p>
                <p>
                  <i className="fa fa-phone-alt mr-2" />
                  <a href="tel:+918638440694" style={{fontSize:"inherit", color:"inherit"}}>+91 86384 40694</a>
                </p>
                <p>
                  <i className="fa fa-envelope mr-2" />
                  <a href="mailto:warelogg@gmail.com" style={{fontSize:"inherit", color:"inherit", textTransform:"lowercase"}}>warelogg@gmail.com</a>
                </p>
                <div className="d-flex justify-content-start mt-4">
                  <a
                    style={{color:"#ff6600", borderColor:"black"}}
                    className="btn btn-outline-light btn-square mr-2"
                    href="https://twitter.com/warelogg?t=i103g2CtU2UwrDnD8VIgwA&s=09"
                    target="_blank"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    style={{color:"#ff6600", borderColor:"black"}}
                    className="btn btn-outline-light btn-square mr-2"
                    href="#"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    style={{color:"#ff6600", borderColor:"black"}}
                    className="btn btn-outline-light btn-square mr-2"
                    href="#"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a
                   style={{color:"#ff6600", borderColor:"black"}}
                   className="btn btn-outline-light btn-square"
                   href="http://www.instagram.com/warelogg"
                   target="_blank"
                   >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
              <div className="col-md-6 mb-5">
                <h5
                  className="text-uppercase mb-4"
                  style={{ color:"black",letterSpacing: 5 }}
                >
                  Our Services
                </h5>
                <div className="d-flex flex-column justify-content-start">
                  {/* <Link className="text-white mb-2" to="#">
                    <i className="fa fa-angle-right mr-2" />
                    HELP &amp; CONTACT
                  </Link>
                  <Link className="text-white mb-2" to="#">
                    <i className="fa fa-angle-right mr-2" />
                    OFFERS TERMS AND CONDITIONS
                  </Link>
                  <Link className="text-white mb-2" to="#">
                    <i className="fa fa-angle-right mr-2" />
                    DELIVERY INFORMATION
                  </Link>
                  <Link className="text-white" to="#">
                    <i className="fa fa-angle-right mr-2" />
                    PAYMENT OPTIONS
                  </Link>
                  <Link className="text-white" to="#">
                    <i className="fa fa-angle-right mr-2" />
                    TRACK ORDER
                  </Link> */}
                  <Link style={{color:"black"}} className="" to="/about">
                    <i className="fa fa-angle-right mr-2" />
                    ABOUT
                  </Link>
                  <Link  style={{color:"black"}} className="" to="/careers">
                    <i className="fa fa-angle-right mr-2" />
                    CAREERS
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 mb-5">
            <Row>
              <Col md={6} className="mb-5" >
              <h5
                  className="text-uppercase mb-4"
                  style={{ color:"black",letterSpacing: 5 }}
                >
                  Resources
                </h5>
                <div className="d-flex flex-column justify-content-start">
                <Link style={{color:"black"}} className="" to="/featured">
                    <i className="fa fa-angle-right mr-2" />
                    FEATURED
                  </Link>
                  <Link  style={{color:"black"}} className="" to="/articles">
                    <i className="fa fa-angle-right mr-2" />
                    ARTICLES
                  </Link>
                  <Link  style={{color:"black"}} className="" to="/videos">
                    <i className="fa fa-angle-right mr-2" />
                    VIDEOS
                  </Link>
                </div>
              </Col>
              <Col md={6}>
            <h5
              className="text-uppercase mb-4"
              style={{ color:"black",letterSpacing: 5 }}
            >
              Newsletter
            </h5>
            <p>
              Subscribe to our newsletter to get more information on latest
              updates via emails and get special exclusive offers.
            </p>
            <div className="w-100">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control border-light"
                  style={{ padding: 30 }}
                  placeholder="Your Email Address"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary px-4">Sign Up</button>
                </div>
              </div>
            </div>
            </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
