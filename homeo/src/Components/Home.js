import React, { useState } from "react";
import "../Style/Home.css";
import image1 from "../Assets/Images/image1.png";
import image2 from "../Assets/Images/image2.png";
import image3 from "../Assets/Images/image3.png";
import image4 from "../Assets/Images/image4.png";
import image5 from "../Assets/Images/image5.png";
import image6 from "../Assets/Images/image6.png";
import image7 from "../Assets/Images/image7.png";
import image8 from "../Assets/Images/image8.png";
import image9 from "../Assets/Images/image9.png";
import image10 from "../Assets/Images/image10.png";
import image11 from "../Assets/Images/image11.png";
import image12 from "../Assets/Images/image12.png";
import image13 from "../Assets/Images/image13.png";
import image14 from "../Assets/Images/image14.png";
import image15 from "../Assets/Images/image15.png";
import image16 from "../Assets/Images/image16.png";
import image17 from "../Assets/Images/image17.png";
import image18 from "../Assets/Images/image18.png";
import image19 from "../Assets/Images/image19.png";
import image20 from "../Assets/Images/image20.png";
import image21 from "../Assets/Images/image21.png";
import image22 from "../Assets/Images/image22.png";
import image23 from "../Assets/Images/image23.png";
import image24 from "../Assets/Images/image24.png";
import image25 from "../Assets/Images/image25.png";
import image26 from "../Assets/Images/image26.png";
import image27 from "../Assets/Images/image27.png";
import image28 from "../Assets/Images/image28.png";
import image29 from "../Assets/Images/image29.png";
import image30 from "../Assets/Images/image30.png";
import image31 from "../Assets/Images/image31.png";
import { useNavigate } from "react-router-dom";

function Home() {
  const images = [
    { id: 1, src: image31, alt: "Image 1" },
    { id: 2, src: image31, alt: "Image 2" },
    { id: 3, src: image31, alt: "Image 3" },
  ];
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const handlePhoneCall = () => {
    const phoneNumber = "+919129371733"; // Replace with the desired phone number
    window.location.href = `tel:${phoneNumber}`;
  };
  const openWhatsApp = () => {
    const phoneNumber = "919129371733"; // Replace with your phone number including country code
    const message = "Hello! I would like to know more."; // Optional: Replace with your message
    const encodedMessage = encodeURIComponent(message); // Encode the message for the URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="parent-div ">
      <div className="desktop--1-1160 pos-abs">
        {/* Group 5031 */}
        <section className="group-503-1161 pos-abs">
          <div className="group-1-1163 pos-abs">
            <div className="rectangle-2-I1163_56 pos-abs"></div>

            <div className="person-1-I1163_571 pos-abs">
              <div className="vector-I1163_572 pos-abs">
                <div className="nodeBg-I1163_572 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>
            </div>

            <div
              className="login-I1163_57 pos-abs"
              onClick={() => {
                alert("Coming Soon..");
              }}
            >
              <span className="login-I1163_57-0">{`Login`}</span>
            </div>
          </div>

          <div className="group-2-1164 pos-abs">
            <div className="rectangle-2-I1164_560 pos-abs"></div>

            <div className="personplus-1-I1164_581 pos-abs">
              <div className="vector-I1164_582 pos-abs">
                <div className="nodeBg-I1164_582 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>
            </div>

            <div
              className="sign-up-I1164_561 pos-abs"
              onClick={() => {
                alert("Coming Soon..");
              }}
            >
              <span className="sign-up-I1164_561-0">{`Sign up`}</span>
            </div>
          </div>

          <div className="facebook-1-1170 pos-abs">
            <div className="vector-1171 pos-abs">
              <div className="nodeBg-1171 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
          </div>

          <div className="instagram-1-1172 pos-abs">
            <div className="vector-1173 pos-abs">
              <div className="nodeBg-1173 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>

            <div className="vector-1174 pos-abs">
              <div className="nodeBg-1174 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
          </div>

          <div className="mdilocation-1165 pos-abs">
            <div className="vector-1166 pos-abs">
              <div className="nodeBg-1166 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
          </div>

          <div className="jaunpur-1167 pos-abs">
            <span className="jaunpur-1167-0">{`Jaunpur`}</span>
          </div>

          <div className="whatsapp-1-1168 pos-abs">
            <div className="vector-1169 pos-abs">
              <div className="nodeBg-1169 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "  onClick={openWhatsApp} style={{cursor:"pointer"}}></div>
            </div>
          </div>

          <div className="group-3-1175 pos-abs">
            <div className="c-91-9918686874-1181 pos-abs">
              <a href="tel:+919129371733" className="c-91-9918686874-1181-0">
                +91 9129371733
              </a>
            </div>

            <div className="call192-1-1176 pos-abs">
              <div className="page1-1177 pos-abs">
                <div className="dribbblelightpr-1178 pos-abs">
                  <div className="icons-1179 pos-abs">
                    <div className="call192-1180 pos-abs">
                      <div className="nodeBg-1180 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="group-4-1182 pos-abs">
            <div className="wwwabcgmailcom-1186 pos-abs">
              <a
                href="mailto:rk@drrkvishwakarma.com"
                className="wwwabcgmailcom-1186-0"
              >
                rk@drrkvishwakarma.com
              </a>
            </div>

            <div className="mail-1-1183 pos-abs">
              <div className="vector-1185 pos-abs">
                <div className="nodeBg-1185 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>

              <div className="vector-1184 pos-abs">
                <div className="nodeBg-1184 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>
            </div>
          </div>

          <div className="vector-1-1162 pos-abs">
            <div className="nodeBg-1162 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
          </div>
        </section>
        {/* Group 71 */}
        <section className="group-7-1187 pos-abs">
          <div className="logo-pdfpage000-1189 pos-abs">
            <img
              src={image1}
              className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-1189 "
              alt="1189-ALT"
            />{" "}
          </div>

          <div className="homoeopathic-he-1188 pos-abs">
            <span className="homoeopathic-he-1188-0">{`HOMOEOPATHIC HEALTH CARE & RESEARCH CENTER`}</span>
          </div>
        </section>
        {/* Group 5271 */}
        <section className="group-527-1190 pos-abs">
          <div className="component-12-1191 pos-abs">
            <div className="component-2-1194 pos-abs">
              <div className="home-I1194_10192 pos-abs">
                <span className="home-I1194_10192-0 span1">{`Home`}</span>
              </div>
            </div>

            <div
              className="group-6-1192 pos-abs"
              onClick={() => {
                alert("Coming Soon..");
              }}
            >
              <div className="book-appointmen-I1192_10170 pos-abs">
                <span className="book-appointmen-I1192_10170-0 span1">{`Book Appointment`}</span>
              </div>
            </div>

            <div className="component-1-1193 pos-abs">
              <div
                className="our-treatments-I1193_10183 pos-abs"
                onClick={() => {
                  alert("Coming Soon..");
                }}
              >
                <span className="our-treatments-I1193_10183-0 span1">{`Our Treatments`}</span>
              </div>
            </div>

            <div className="component-3-1195 pos-abs">
              <div
                className="gallery-I1195_10203 pos-abs"
                onClick={() => {
                  alert("Coming Soon..");
                }}
              >
                <span className="gallery-I1195_10203-0 span1">{`Gallery `}</span>
              </div>
            </div>

            <div className="component-5-1196 pos-abs">
              <div
                className="testimonials-I1196_10219 pos-abs"
                onClick={() => {
                  alert("Coming Soon..");
                }}
              >
                <span className="testimonials-I1196_10219-0 span1">{`Testimonials `}</span>
              </div>
            </div>

            <div className="component-6-1197 pos-abs">
              <div
                className="about-us-I1197_10234 pos-abs"
                onClick={() => {
                  alert("Coming Soon..");
                }}
              >
                <span className="about-us-I1197_10234-0 span1">{`About us`}</span>
              </div>
            </div>

            <div className="component-7-1198 pos-abs">
              <div
                className="contact-us-I1198_10242 pos-abs"
                onClick={() => {
                  alert("Coming Soon..");
                }}
              >
                <span className="contact-us-I1198_10242-0 span1">{`Contact us`}</span>
              </div>
            </div>
          </div>
        </section>

        <div className="screenshot-2024-1200 pos-abs">
          <img
            src={image2}
            className="pos-abs image-div bg-no-repeat bg-crop nodeBg-1200 "
            alt="1200-ALT"
          />{" "}
        </div>

        <div className="screenshot-2024-1201 pos-abs">
          <img
            src={image2}
            className="pos-abs image-div bg-no-repeat bg-crop nodeBg-1201 "
            alt="1201-ALT"
          />{" "}
        </div>

        <div className="rectangle-4-1202 pos-abs"></div>

        <div className="a-drop-of-homeo-1203 pos-abs">
          <span className="a-drop-of-homeo-1203-0">{`A DROP OF HOMEOPATHIC MEDICINE CAN CHANGE THE QUALITY OF YOUR LIFE.!`}</span>
        </div>

        <div className="over-a-long-per-1205 pos-abs">
          <span className="over-a-long-per-1205-0">{`Over a long period, we have Provided hundreds of thousands of care services to serve the needs of our Patients  `}</span>
        </div>
        {/* Component 81 */}
        <section className="component-8-1204 pos-abs">
          <div className="rectangle-5-I1204_10284 pos-abs"></div>

          <div className="group-2-I1204_10285 pos-abs">
            <div className="make-an-appoint-I1204_10286 pos-abs">
              <span className="make-an-appoint-I1204_10286-0">{`Make an Appointment`}</span>
            </div>
          </div>
        </section>

        <div className="istockphoto4666-1257 pos-abs">
          <img
            src={image3}
            className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-1257 "
            alt="1257-ALT"
          />{" "}
        </div>

        <div className="about-homeopath-1206 pos-abs">
          <span className="about-homeopath-1206-0">{`About Homeopathy`}</span>
        </div>

        <div className="what-is-homeopa-1258 pos-abs">
          <span className="what-is-homeopa-1258-0">{`What Is Homeopathy?`}</span>
        </div>

        <div className="homeopathy-is-a-1260 pos-abs">
          <span className="homeopathy-is-a-1260-0">{`Homeopathy is a gentle, yet powerful form of medicine that is rooted in natural healing principles. It works by stimulating the body’s inherent ability to heal itself, using highly diluted remedies derived from plants, minerals, or animals. Unlike conventional medicine that focuses on treating symptoms with medications, homeopathy aims to treat the root causes of illness in a holistic manner.`}</span>
        </div>

        <div className="c-360f879540333kl-1199 pos-abs">
          <img
            src={image4}
            className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-1199 "
            alt="1199-ALT"
          />{" "}
        </div>

        <div className="homeopathy-trea-1207 pos-abs">
          <span className="homeopathy-trea-1207-0">{`Homeopathy Treatments`}</span>
        </div>

        <div className="our-treatments-1259 pos-abs">
          <span className="our-treatments-1259-0">{`Our Treatments`}</span>
        </div>

        <div className="homeopathic-tre-1261 pos-abs">
          <span className="homeopathic-tre-1261-0">{`Homeopathic treatment is individualized, meaning that two people with the same condition might receive different remedies based on their unique physical, emotional, and mental states.`}</span>
        </div>

        <div className="homeopathy-for--1208 pos-abs">
          <span className="homeopathy-for--1208-0">{`Homeopathy For Skin`}</span>
        </div>

        <div className="homeopathic-rem-1262 pos-abs">
          <span className="homeopathic-rem-1262-0">{`Homeopathic remedies for skin are treatments derived from the principles of homeopathy, a system of alternative medicine. In homeopathy, the idea is to treat the whole person rather than just focusing on specific symptoms. Remedies for skin conditions are formulated based on the belief that substances that cause symptoms in healthy individuals can be used in diluted forms to treat similar symptoms in individuals who are ill or suffering from skin conditions.`}</span>
        </div>
        {/* Group 461 */}
        <section className="group-46-1265 pos-abs">
          <div className="rectangle-8-1266 pos-abs">
            <div className="rectangle-8-I1266_2063 pos-abs"></div>
          </div>

          <div className="group-20-1267 pos-abs">
            <div className="group-8-1269 pos-abs">
              <div className="images-1-1270 pos-abs">
                <img
                  src={image5}
                  className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-1270 "
                  alt="1270-ALT"
                />{" "}
              </div>

              <div className="warts--moles-1271 pos-abs">
                <span className="warts--moles-1271-0">{`Warts & Moles`}</span>
              </div>
            </div>

            <div className="warts-and-moles-1268 pos-abs">
              <span className="warts-and-moles-1268-0">{`warts and moles have a broad base and go deep into the skin, but on a mole, the skin remains soft. Warts, however, appear as rough skin, possibly with points on the surface.`}</span>
            </div>

            <div className="group-7-1272 pos-abs">
              <div className="rectangle-2-I1272_10354 pos-abs"></div>

              <div className="know-more-I1272_10355 pos-abs">
                <span className="know-more-I1272_10355-0">{`Know more`}</span>
              </div>
            </div>
          </div>
        </section>
        {/* Group 471 */}
        <section className="group-47-1410 pos-abs">
          <div className="rectangle-8-1411 pos-abs">
            <div className="rectangle-8-I1411_2063 pos-abs"></div>
          </div>

          <div className="group-18-1412 pos-abs">
            <div className="group-9-1413 pos-abs">
              <div className="screenshot-2024-1414 pos-abs">
                <img
                  src={image6}
                  className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-1414 "
                  alt="1414-ALT"
                />{" "}
              </div>

              <div className="acnes-pimples-1415 pos-abs">
                <span className="acnes-pimples-1415-0">{`Acnes, Pimples`}</span>
              </div>
            </div>

            <div className="acne-is-a-skin--1416 pos-abs">
              <span className="acne-is-a-skin--1416-0">{`Acne is a skin condition that occurs when your hair follicles become plugged with oil and dead skin cells. It causes whiteheads, blackheads or pimples.`}</span>
            </div>

            <div className="group-16-1417 pos-abs">
              <div className="rectangle-2-I1417_10354 pos-abs"></div>

              <div className="know-more-I1417_10355 pos-abs">
                <span className="know-more-I1417_10355-0">{`Know more`}</span>
              </div>
            </div>
          </div>
        </section>
        {/* Group 481 */}
        <section className="group-48-1418 pos-abs">
          <div className="rectangle-8-1419 pos-abs">
            <div className="rectangle-8-I1419_2063 pos-abs"></div>
          </div>

          <div className="group-23-1420 pos-abs">
            <div className="group-21-1423 pos-abs">
              <div className="group-10-1424 pos-abs">
                <div className="download-1-1425 pos-abs">
                  <img
                    src={image7}
                    className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-1425 "
                    alt="1425-ALT"
                  />{" "}
                </div>

                <div className="all-types-of-ti-1426 pos-abs">
                  <span className="all-types-of-ti-1426-0">{`All types of Tinea`}</span>
                </div>
              </div>
            </div>

            <div className="tinea-is a-cont-1421 pos-abs">
              <span className="tinea-is a-cont-1421-0">{`Tinea is a contagious fungal skin infection. The most commonly affected areas include the feet, groin, scalp. which is a misleading name as no worm is involved.`}</span>
            </div>

            <div className="group-17-1422 pos-abs">
              <div className="rectangle-2-I1422_10354 pos-abs"></div>

              <div className="know-more-I1422_10355 pos-abs">
                <span className="know-more-I1422_10355-0">{`Know more`}</span>
              </div>
            </div>
          </div>
        </section>
        {/* Group 491 */}
        <section className="group-49-1427 pos-abs">
          <div className="rectangle-8-1428 pos-abs">
            <div className="rectangle-8-I1428_2063 pos-abs"></div>
          </div>

          <div className="group-22-1429 pos-abs">
            <div className="group-11-1430 pos-abs">
              <div className="bannerblogpost--1431 pos-abs">
                <img
                  src={image8}
                  className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-1431 "
                  alt="1431-ALT"
                />{" "}
              </div>

              <div className="hair-fall-1432 pos-abs">
                <span className="hair-fall-1432-0">{`Hair Fall`}</span>
              </div>
            </div>

            <div className="hair-loss-can-a-1433 pos-abs">
              <span className="hair-loss-can-a-1433-0">{`Hair loss can affect just your scalp or your entire body, and it can be temporary or permanent. It can be the result of heredity, hormonal changes, medical conditions .`}</span>
            </div>

            <div className="group-19-1434 pos-abs">
              <div className="rectangle-2-I1434_10354 pos-abs"></div>

              <div className="know-more-I1434_10355 pos-abs">
                <span className="know-more-I1434_10355-0">{`Know more`}</span>
              </div>
            </div>
          </div>
        </section>
        {/* Group 431 */}
        <section className="group-43-1273 pos-abs">
          <div className="rectangle-8-1274 pos-abs">
            <div className="rectangle-8-I1274_2063 pos-abs"></div>
          </div>

          <div className="group-25-1275 pos-abs">
            <div className="group-12-1276 pos-abs">
              <div className="images-2-1277 pos-abs">
                <img
                  src={image9}
                  className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-1277 "
                  alt="1277-ALT"
                />{" "}
              </div>

              <div className="alopecia-1278 pos-abs">
                <span className="alopecia-1278-0">{`Alopecia`}</span>
              </div>
            </div>

            <div className="sudden-hair-los-1279 pos-abs">
              <span className="sudden-hair-los-1279-0">{`Sudden hair loss that starts with one or more circular bald patches that may overlap.Alopecia areata occurs when the immune system attacks hair follicles and may be brought on by severe stress.`}</span>
            </div>

            <div className="group-9-1280 pos-abs">
              <div className="rectangle-2-I1280_10354 pos-abs"></div>

              <div className="know-more-I1280_10355 pos-abs">
                <span className="know-more-I1280_10355-0">{`Know more`}</span>
              </div>
            </div>
          </div>
        </section>
        {/* Group 441 */}
        <section className="group-44-1394 pos-abs">
          <div className="rectangle-8-1395 pos-abs">
            <div className="rectangle-8-I1395_2063 pos-abs"></div>
          </div>

          <div className="group-27-1396 pos-abs">
            <div className="group-13-1397 pos-abs">
              <div className="download-2-1398 pos-abs">
                <img
                  src={image10}
                  className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-1398 "
                  alt="1398-ALT"
                />{" "}
              </div>

              <div className="psoriasis-1399 pos-abs">
                <span className="psoriasis-1399-0">{`Psoriasis`}</span>
              </div>
            </div>

            <div className="psoriasis-is-th-1400 pos-abs">
              <span className="psoriasis-is-th-1400-0">{`Psoriasis is thought to be an immune system problem. Triggers include infections, stress and cold.The symptom is thick skin patches typically seen on elbows, knees, and lower back .`}</span>
            </div>

            <div className="group-24-1401 pos-abs">
              <div className="rectangle-2-I1401_10354 pos-abs"></div>

              <div className="know-more-I1401_10355 pos-abs">
                <span className="know-more-I1401_10355-0">{`Know more`}</span>
              </div>
            </div>
          </div>
        </section>
        {/* Group 451 */}
        <section className="group-45-1402 pos-abs">
          <div className="rectangle-8-1403 pos-abs">
            <div className="rectangle-8-I1403_2063 pos-abs"></div>
          </div>

          <div className="group-28-1404 pos-abs">
            <div className="group-14-1405 pos-abs">
              <div className="download-3-1406 pos-abs">
                <img
                  src={image11}
                  className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-1406 "
                  alt="1406-ALT"
                />{" "}
              </div>

              <div className="vitiligo-leucod-1407 pos-abs">
                <span className="vitiligo-leucod-1407-0">{`Vitiligo, Leucoderma`}</span>
              </div>
            </div>

            <div className="vitiligo-occurs-1408 pos-abs">
              <span className="vitiligo-occurs-1408-0">{`Vitiligo occurs when pigment-producing cells die or stop functioning. Loss of skin color can affect any part of the body, including the mouth, hair and eyes.`}</span>
            </div>

            <div className="group-26-1409 pos-abs">
              <div className="rectangle-2-I1409_10354 pos-abs"></div>

              <div className="know-more-I1409_10355 pos-abs">
                <span className="know-more-I1409_10355-0">{`Know more`}</span>
              </div>
            </div>
          </div>
        </section>

        <div className="homeopathy-for--1209 pos-abs">
          <span className="homeopathy-for--1209-0">{`Homeopathy For Female`}</span>
        </div>

        <div className="homeopathy-for--1263 pos-abs">
          <span className="homeopathy-for--1263-0">{`Homeopathy for females refers to the practice of using homeopathic remedies to address health issues or conditions that are specific to women. Homeopathy is a holistic system of medicine that uses highly diluted natural substances to stimulate the body’s own healing process. In the context of female health, homeopathic treatments may be used for a variety of concerns.`}</span>
        </div>
        {/* Group 5671 */}
        <section className="group-567-1337 pos-abs">
          <div className="group-38-1338 pos-abs">
            <div className="rectangle-9-1339 pos-abs">
              <div className="rectangle-8-I1339_2063 pos-abs"></div>
            </div>

            <div className="group-29-1340 pos-abs">
              <div className="group-12-1341 pos-abs">
                <div className="causesoffemalei-1342 pos-abs">
                  <img
                    src={image12}
                    className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-1342 "
                    alt="1342-ALT"
                  />{" "}
                </div>

                <div className="infertility-mal-1343 pos-abs">
                  <span className="infertility-mal-1343-0">{`Infertility (Male / Female)`}</span>
                </div>
              </div>

              <div className="infertility-is -1344 pos-abs">
                <span className="infertility-is -1344-0">{`Infertility is a disease of the male or female reproductive system that occurs when a couple is unable to conceive after a year or more of regular, unprotected sex`}</span>
              </div>

              <div className="group-9-1345 pos-abs">
                <div className="rectangle-2-I1345_10354 pos-abs"></div>

                <div className="know-more-I1345_10355 pos-abs">
                  <span className="know-more-I1345_10355-0">{`Know more`}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="group-39-1370 pos-abs">
            <div className="rectangle-8-1371 pos-abs">
              <div className="rectangle-8-I1371_2063 pos-abs"></div>
            </div>

            <div className="group-30-1372 pos-abs">
              <div className="group-12-1373 pos-abs">
                <div className="download-4-1374 pos-abs">
                  <img
                    src={image13}
                    className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-1374 "
                    alt="1374-ALT"
                  />{" "}
                </div>

                <div className="ovarian-cyst-pc-1375 pos-abs">
                  <span className="ovarian-cyst-pc-1375-0">{`Ovarian Cyst ,PCOD`}</span>
                </div>
              </div>

              <div className="ovarian-cysts-a-1376 pos-abs">
                <span className="ovarian-cysts-a-1376-0">{`Ovarian cysts are fluid-filled sacs that form on or within the ovaries, while polycystic ovarian disease (PCOD) is a hormonal imbalance that can cause cysts to form on the ovaries.`}</span>
              </div>

              <div className="group-9-1377 pos-abs">
                <div className="rectangle-2-I1377_10354 pos-abs"></div>

                <div className="know-more-I1377_10355 pos-abs">
                  <span className="know-more-I1377_10355-0">{`Know more`}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="group-36-1378 pos-abs">
            <div className="rectangle-8-1379 pos-abs">
              <div className="rectangle-8-I1379_2063 pos-abs"></div>
            </div>

            <div className="group-31-1380 pos-abs">
              <div className="group-12-1381 pos-abs">
                <div className="download-5-1382 pos-abs">
                  <img
                    src={image14}
                    className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-1382 "
                    alt="1382-ALT"
                  />{" "}
                </div>

                <div className="menses-irregula-1383 pos-abs">
                  <span className="menses-irregula-1383-0">{`Menses Irregularities`}</span>
                </div>
              </div>

              <div className="menstrual-irreg-1384 pos-abs">
                <span className="menstrual-irreg-1384-0">{`Menstrual irregularities, also known as irregular periods, are characterized by abnormal variations in the frequency, duration, or amount of menstrual bleeding.`}</span>
              </div>

              <div className="group-9-1385 pos-abs">
                <div className="rectangle-2-I1385_10354 pos-abs"></div>

                <div className="know-more-I1385_10355 pos-abs">
                  <span className="know-more-I1385_10355-0">{`Know more`}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="group-37-1386 pos-abs">
            <div className="rectangle-8-1387 pos-abs">
              <div className="rectangle-8-I1387_2063 pos-abs"></div>
            </div>

            <div className="group-32-1388 pos-abs">
              <div className="group-12-1389 pos-abs">
                <div className="uterinefibroids-1390 pos-abs">
                  <img
                    src={image15}
                    className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-1390 "
                    alt="1390-ALT"
                  />{" "}
                </div>

                <div className="prolapse-fibroi-1391 pos-abs">
                  <span className="prolapse-fibroi-1391-0">{`Prolapse, Fibroids Uterus`}</span>
                </div>
              </div>

              <div className="a-fibroid-can-p-1392 pos-abs">
                <span className="a-fibroid-can-p-1392-0">{`A fibroid can prolapse into the vagina, and a prolapsed fibroid can mimic uterine inversion. tumors that grow in the uterus, and they can bulge from the inside or outside of the uterus. `}</span>
              </div>

              <div className="group-9-1393 pos-abs">
                <div className="rectangle-2-I1393_10354 pos-abs"></div>

                <div className="know-more-I1393_10355 pos-abs">
                  <span className="know-more-I1393_10355-0">{`Know more`}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="group-40-1346 pos-abs">
            <div className="rectangle-8-1347 pos-abs">
              <div className="rectangle-8-I1347_2063 pos-abs"></div>
            </div>

            <div className="group-33-1348 pos-abs">
              <div className="group-12-1349 pos-abs">
                <div className="c-360f171959077em-1350 pos-abs">
                  <img
                    src={image16}
                    className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-1350 "
                    alt="1350-ALT"
                  />{" "}
                </div>

                <div className="leucorrhea-1351 pos-abs">
                  <span className="leucorrhea-1351-0">{`Leucorrhea`}</span>
                </div>
              </div>

              <div className="it-is-known-as--1352 pos-abs">
                <span className="it-is-known-as--1352-0">{`It is known as fluor albus, is a vaginal discharge that can be clear, white, yellowish, or greenish in color. It usually thin and has a mild odor, and doesn't cause itching or a strong foul smell`}</span>
              </div>

              <div className="group-9-1353 pos-abs">
                <div className="rectangle-2-I1353_10354 pos-abs"></div>

                <div className="know-more-I1353_10355 pos-abs">
                  <span className="know-more-I1353_10355-0">{`Know more`}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="group-41-1354 pos-abs">
            <div className="rectangle-8-1355 pos-abs">
              <div className="rectangle-8-I1355_2063 pos-abs"></div>
            </div>

            <div className="group-34-1356 pos-abs">
              <div className="group-12-1357 pos-abs">
                <div className="abortionmiscarr-1358 pos-abs">
                  <img
                    src={image17}
                    className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-1358 "
                    alt="1358-ALT"
                  />{" "}
                </div>

                <div className="miscarriage-1359 pos-abs">
                  <span className="miscarriage-1359-0">{`Miscarriage`}</span>
                </div>
              </div>

              <div className="the-unexpected--1360 pos-abs">
                <span className="the-unexpected--1360-0">{` the unexpected ending of a pregnancy in the first 20 weeks of gestation. Just because it's called a “miscarriage” doesn't mean you did something wrong in carrying the pregnancy.`}</span>
              </div>

              <div className="group-9-1361 pos-abs">
                <div className="rectangle-2-I1361_10354 pos-abs"></div>

                <div className="know-more-I1361_10355 pos-abs">
                  <span className="know-more-I1361_10355-0">{`Know more`}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="group-42-1362 pos-abs">
            <div className="rectangle-8-1363 pos-abs">
              <div className="rectangle-8-I1363_2063 pos-abs"></div>
            </div>

            <div className="group-35-1364 pos-abs">
              <div className="group-12-1365 pos-abs">
                <div className="stage3locallyad-1366 pos-abs">
                  <img
                    src={image18}
                    className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-1366 "
                    alt="1366-ALT"
                  />{" "}
                </div>

                <div className="breast-tumor-1367 pos-abs">
                  <span className="breast-tumor-1367-0">{`Breast Tumor`}</span>
                </div>
              </div>

              <div className="tumor-that-grow-1368 pos-abs">
                <span className="tumor-that-grow-1368-0">{`tumor that grows in or around the breast tissue, mainly in the milk ducts and glands. A tumor usually its calcium deposit that develops as a result of abnormal cell growth.`}</span>
              </div>

              <div className="group-9-1369 pos-abs">
                <div className="rectangle-2-I1369_10354 pos-abs"></div>

                <div className="know-more-I1369_10355 pos-abs">
                  <span className="know-more-I1369_10355-0">{`Know more`}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="general-homeopa-1256 pos-abs">
          <span className="general-homeopa-1256-0">{`General Homeopathy `}</span>
        </div>

        <div className="homeopathy-is-a-1264 pos-abs">
          <span className="homeopathy-is-a-1264-0">{`Homeopathy is a system of alternative medicine based on the principle of "like cures like." It involves using highly diluted substances, typically plant, mineral, or animal extracts, to treat various health conditions. The central idea is that these substances, when administered in small amounts, stimulate the body's natural healing abilities. Homeopathy was founded by Samuel Hahnemann in the late 18th century and emphasizes individual treatment, focusing on the person's overall physical, mental, and emotional state. It operates under the belief that symptoms of illness are a reflection of an underlying imbalance within the body that can be corrected by matching the right remedy.`}</span>
        </div>
        {/* Group 501 */}
        <section className="group-50-1281 pos-abs">
          <div className="rectangle-8-1282 pos-abs">
            <div className="rectangle-8-I1282_2063 pos-abs"></div>
          </div>

          <div className="group-33-1283 pos-abs">
            <div className="group-12-1284 pos-abs">
              <div className="c-360f837346852nl-1285 pos-abs">
                <img
                  src={image19}
                  className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-1285 "
                  alt="1285-ALT"
                />{" "}
              </div>

              <div className="cervical-lumber-1286 pos-abs">
                <span className="cervical-lumber-1286-0">{`Cervical, Lumber  Spondylitis 
and  Spondylosis`}</span>
              </div>
            </div>

            <div className="the-neck-or-to--1287 pos-abs">
              <span className="the-neck-or-to--1287-0">{`The neck, or to the neck of any organ or structure. Cervical lymph nodes  Cervical cancer refers to cancer of the uterine cervix, which is the lower, narrow end of the uterus.`}</span>
            </div>

            <div className="group-9-1288 pos-abs">
              <div className="rectangle-2-I1288_10354 pos-abs"></div>

              <div className="know-more-I1288_10355 pos-abs">
                <span className="know-more-I1288_10355-0">{`Know more`}</span>
              </div>
            </div>
          </div>
        </section>
        {/* Group 511 */}
        <section className="group-51-1289 pos-abs">
          <div className="rectangle-8-1290 pos-abs">
            <div className="rectangle-8-I1290_2063 pos-abs"></div>
          </div>

          <div className="group-34-1291 pos-abs">
            <div className="group-12-1292 pos-abs">
              <div className="download-6-1293 pos-abs">
                <img
                  src={image20}
                  className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-1293 "
                  alt="1293-ALT"
                />{" "}
              </div>

              <div className="kidney-diseases-1294 pos-abs">
                <span className="kidney-diseases-1294-0">{`Kidney Diseases`}</span>
              </div>
            </div>

            <div className="kidneys-are-dam-1295 pos-abs">
              <span className="kidneys-are-dam-1295-0">{` kidneys are damaged and can't filter blood the way they should. You are at greater risk for kidney disease. If you experience kidney failure, treatments include kidney transplant or dialysis.`}</span>
            </div>

            <div className="group-9-1296 pos-abs">
              <div className="rectangle-2-I1296_10354 pos-abs"></div>

              <div className="know-more-I1296_10355 pos-abs">
                <span className="know-more-I1296_10355-0">{`Know more`}</span>
              </div>
            </div>
          </div>
        </section>
        {/* Group 521 */}
        <section className="group-52-1321 pos-abs">
          <div className="rectangle-8-1322 pos-abs">
            <div className="rectangle-8-I1322_2063 pos-abs"></div>
          </div>

          <div className="group-34-1323 pos-abs">
            <div className="group-12-1324 pos-abs">
              <div className="gettyimages8433-1325 pos-abs">
                <img
                  src={image21}
                  className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-1325 "
                  alt="1325-ALT"
                />{" "}
              </div>

              <div className="kidney-stone-1326 pos-abs">
                <span className="kidney-stone-1326-0">{`Kidney Stone`}</span>
              </div>
            </div>

            <div className="kidney-stones-a-1327 pos-abs">
              <span className="kidney-stones-a-1327-0">{`Kidney stones are hard, pebble-like pieces of material that form in one or both of your kidneys when high levels of certain minerals are in your urine.`}</span>
            </div>

            <div className="group-9-1328 pos-abs">
              <div className="rectangle-2-I1328_10354 pos-abs"></div>

              <div className="know-more-I1328_10355 pos-abs">
                <span className="know-more-I1328_10355-0">{`Know more`}</span>
              </div>
            </div>
          </div>
        </section>
        {/* Group 531 */}
        <section className="group-53-1329 pos-abs">
          <div className="rectangle-8-1330 pos-abs">
            <div className="rectangle-8-I1330_2063 pos-abs"></div>
          </div>

          <div className="group-34-1331 pos-abs">
            <div className="group-12-1332 pos-abs">
              <div className="gallbladderston-1333 pos-abs">
                <img
                  src={image22}
                  className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-1333 "
                  alt="1333-ALT"
                />{" "}
              </div>

              <div className="gbladder-stone-1334 pos-abs">
                <span className="gbladder-stone-1334-0">{`G.Bladder Stone`}</span>
              </div>
            </div>

            <div className="gallstones-are -1335 pos-abs">
              <span className="gallstones-are -1335-0">{`Gallstones are hardened deposits of digestive fluid, called bile, that form in the gallbladder. They can range in size from a grain of sand to a golf ball.`}</span>
            </div>

            <div className="group-9-1336 pos-abs">
              <div className="rectangle-2-I1336_10354 pos-abs"></div>

              <div className="know-more-I1336_10355 pos-abs">
                <span className="know-more-I1336_10355-0">{`Know more`}</span>
              </div>
            </div>
          </div>
        </section>
        {/* Group 551 */}
        <section className="group-55-1297 pos-abs">
          <div className="rectangle-8-1298 pos-abs">
            <div className="rectangle-8-I1298_2063 pos-abs"></div>
          </div>

          <div className="group-34-1299 pos-abs">
            <div className="group-12-1300 pos-abs">
              <div className="progression1-1-1301 pos-abs">
                <img
                  src={image23}
                  className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-1301 "
                  alt="1301-ALT"
                />{" "}
              </div>

              <div className="liver-diseases-1302 pos-abs">
                <span className="liver-diseases-1302-0">{`Liver Diseases`}</span>
              </div>
            </div>

            <div className="liver-disease-i-1303 pos-abs">
              <span className="liver-disease-i-1303-0">{`Liver disease is a general term for conditions that prevent the liver from functioning properly. The liver is a large organ that performs many vital functions`}</span>
            </div>

            <div className="group-9-1304 pos-abs">
              <div className="rectangle-2-I1304_10354 pos-abs"></div>

              <div className="know-more-I1304_10355 pos-abs">
                <span className="know-more-I1304_10355-0">{`Know more`}</span>
              </div>
            </div>
          </div>
        </section>
        {/* Group 561 */}
        <section className="group-56-1305 pos-abs">
          <div className="rectangle-8-1306 pos-abs">
            <div className="rectangle-8-I1306_2063 pos-abs"></div>
          </div>

          <div className="group-34-1307 pos-abs">
            <div className="group-12-1308 pos-abs">
              <div className="c-6607b4676d46dpa-1309 pos-abs">
                <img
                  src={image24}
                  className="pos-abs image-div bg-no-repeat bg-crop nodeBg-1309 "
                  alt="1309-ALT"
                />{" "}
              </div>

              <div className="paralysis-1310 pos-abs">
                <span className="paralysis-1310-0">{`Paralysis`}</span>
              </div>
            </div>

            <div className="paralysis-is th-1311 pos-abs">
              <span className="paralysis-is th-1311-0">{`Paralysis is the loss of muscle function in some or all of the body, which can be temporary or permanent. It occurs when the messages between the brain and muscles are disrupted`}</span>
            </div>

            <div className="group-9-1312 pos-abs">
              <div className="rectangle-2-I1312_10354 pos-abs"></div>

              <div className="know-more-I1312_10355 pos-abs">
                <span className="know-more-I1312_10355-0">{`Know more`}</span>
              </div>
            </div>
          </div>
        </section>
        {/* Group 571 */}
        <section className="group-57-1313 pos-abs">
          <div className="rectangle-8-1314 pos-abs">
            <div className="rectangle-8-I1314_2063 pos-abs"></div>
          </div>

          <div className="group-34-1315 pos-abs">
            <div className="group-12-1316 pos-abs">
              <div className="enlargedprostat-1317 pos-abs">
                <img
                  src={image25}
                  className="pos-abs image-div bg-no-repeat bg-crop nodeBg-1317 "
                  alt="1317-ALT"
                />{" "}
              </div>

              <div className="prostate-enlarg-1318 pos-abs">
                <span className="prostate-enlarg-1318-0">{`Prostate Enlargement`}</span>
              </div>
            </div>

            <div className="prostate-enlarg-1319 pos-abs">
              <span className="prostate-enlarg-1319-0">{`Prostate enlargement, also known as benign prostatic hyperplasia (BPH), is a condition where the prostate gland increases in size. It's a common condition that affects many men`}</span>
            </div>

            <div className="group-9-1320 pos-abs">
              <div className="rectangle-2-I1320_10354 pos-abs"></div>

              <div className="know-more-I1320_10355 pos-abs">
                <span className="know-more-I1320_10355-0">{`Know more`}</span>
              </div>
            </div>
          </div>
        </section>
        {/* Group 661 */}
        <section className="group-66-1513 pos-abs">
          <div className="group-65-1514 pos-abs">
            <div className="group-58-1515 pos-abs">
              <div className="screenshot20241-1516 pos-abs">
                <img
                  src={image26}
                  className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-1516 "
                  alt="1516-ALT"
                />{" "}
              </div>

              <div className="rectangle-14-1517 pos-abs"></div>

              <div className="rectangle-15-1518 pos-abs"></div>
            </div>

            <div className="group-64-1519 pos-abs">
              <div className="group-59-1520 pos-abs">
                <div className="ellipse-11-1525 pos-abs"></div>

                <div className="ellipse-10-1524 pos-abs"></div>

                <div className="ellipse-9-1523 pos-abs"></div>

                <div className="ellipse-8-1522 pos-abs"></div>

                <div className="ellipse-7-1521 pos-abs"></div>
              </div>

              <div className="group-60-1526 pos-abs">
                <div className="ellipse-11-1531 pos-abs"></div>

                <div className="ellipse-10-1530 pos-abs"></div>

                <div className="ellipse-9-1529 pos-abs"></div>

                <div className="ellipse-8-1528 pos-abs"></div>

                <div className="ellipse-7-1527 pos-abs"></div>
              </div>

              <div className="group-61-1532 pos-abs">
                <div className="ellipse-11-1537 pos-abs"></div>

                <div className="ellipse-10-1536 pos-abs"></div>

                <div className="ellipse-9-1535 pos-abs"></div>

                <div className="ellipse-8-1534 pos-abs"></div>

                <div className="ellipse-7-1533 pos-abs"></div>
              </div>

              <div className="group-62-1538 pos-abs">
                <div className="ellipse-11-1543 pos-abs"></div>

                <div className="ellipse-10-1542 pos-abs"></div>

                <div className="ellipse-9-1541 pos-abs"></div>

                <div className="ellipse-8-1540 pos-abs"></div>

                <div className="ellipse-7-1539 pos-abs"></div>
              </div>

              <div className="group-63-1544 pos-abs">
                <div className="ellipse-11-1549 pos-abs"></div>

                <div className="ellipse-10-1548 pos-abs"></div>

                <div className="ellipse-9-1547 pos-abs"></div>

                <div className="ellipse-8-1546 pos-abs"></div>

                <div className="ellipse-7-1545 pos-abs"></div>
              </div>
            </div>
          </div>

          <div className="firstaidkitdoct-1550 pos-abs">
            <div className="group-1551 pos-abs">
              <div className="group-1552 pos-abs">
                <div className="vector-1553 pos-abs">
                  <div className="nodeBg-1553 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="start-an-online-1435 pos-abs">
          <span className="start-an-online-1435-0">{`Start an online chat consultation with a doctor.`}</span>
        </div>

        <div className="post-unlimited--1436 pos-abs">
          <span className="post-unlimited--1436-0">{`Post unlimited follow - ups to the doctor for the next 50 or 100 hours by picking one of our clinic chat service. Easily accessible via our comprehensive Online consultation app available in both in Android and ios`}</span>
        </div>
        {/* Group 671 */}
        <section className="group-67-1485 pos-abs">
          <div className="group-32-1486 pos-abs">
            <div className="group-33-1487 pos-abs">
              <div className="component-10-1488 pos-abs">
                <div className="ellipse-4-I1488_38214 pos-abs"></div>

                <div className="ellipse-5-I1488_38215 pos-abs"></div>
              </div>

              <div className="query-1491 pos-abs">
                <span className="query-1491-0">{`Query`}</span>
              </div>

              <div className="ask-1-1489 pos-abs">
                <div className="vector-1490 pos-abs">
                  <div className="nodeBg-1490 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>
              </div>
            </div>
          </div>

          <div className="group-33-1500 pos-abs">
            <div className="group-33-1501 pos-abs">
              <div className="component-10-1502 pos-abs">
                <div className="ellipse-4-I1502_38214 pos-abs"></div>

                <div className="ellipse-5-I1502_38215 pos-abs"></div>
              </div>

              <div className="chat-1505 pos-abs">
                <span className="chat-1505-0">{`Chat`}</span>
              </div>

              <div className="chatroundline-1-1503 pos-abs">
                <div className="vector-1504 pos-abs">
                  <div className="nodeBg-1504 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>
              </div>
            </div>
          </div>
      
          <div className="group-34-1492 pos-abs" >
            <div className="group-33-1493 pos-abs">
              <div className="component-10-1494 pos-abs">
                <div className="ellipse-4-I1494_38214 pos-abs"></div>

                <div className="ellipse-5-I1494_38215 pos-abs"></div>
              </div>

              <div className="phone-1499 pos-abs" onClick={handlePhoneCall} style={{cursor:"pointer"}}>
                <span className="phone-1499-0">{`Phone`}</span>
              </div>

              <div className="phonecalling-1-1495 pos-abs">
                <div className="vector-1497 pos-abs">
                  <div className="nodeBg-1497 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>

                <div className="vector-1496 pos-abs">
                  <div className="nodeBg-1496 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>

                <div className="vector-1498 pos-abs">
                  <div className="nodeBg-1498 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>
              </div>
            </div>
          </div>

          <div className="group-35-1506 pos-abs">
            <div className="group-33-1507 pos-abs">
              <div className="component-10-1508 pos-abs">
                <div className="ellipse-4-I1508_38214 pos-abs"></div>

                <div className="ellipse-5-I1508_38215 pos-abs"></div>
              </div>

              <div className="video-call-1511 pos-abs">
                <span className="video-call-1511-0">{`Video Call`}</span>
              </div>

              <div className="video-2-1509 pos-abs">
                <div className="vector-1510 pos-abs">
                  <div className="nodeBg-1510 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>
              </div>
            </div>
          </div>

          <div className="group-38-1512 pos-abs">
            <div className="rectangle-13-I1512_38203 pos-abs"></div>

            <div className="group-36-I1512_38204 pos-abs">
              <div className="start-chat-cons-I1512_38205 pos-abs">
                <span className="start-chat-cons-I1512_38205-0">{`Start Chat Consultation`}</span>
              </div>
            </div>
          </div>
        </section>

        <div className="depositphotos37-1437 pos-abs">
          <img
            src={image27}
            className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-1437 "
            alt="1437-ALT"
          />{" "}
        </div>
        {/* Group 691 */}
        <section className="group-69-1481 pos-abs">
          <div className="take-care-of-yo-1482 pos-abs">
            <span className="take-care-of-yo-1482-0">{`Take care of your health doesn't have to be difficult`}</span>
          </div>

          <div className="were-constantly-1483 pos-abs">
            <span className="were-constantly-1483-0">{`Were constantly finding ways to make it easy so that can get better and stay that way`}</span>
          </div>

          <div className="group-39-1484 pos-abs">
            <div className="rectangle-11-I1484_40353 pos-abs"></div>

            <div className="group-26-I1484_40354 pos-abs">
              <div className="know-more-I1484_40355 pos-abs">
                <span className="know-more-I1484_40355-0">{`Know more`}</span>
              </div>
            </div>
          </div>
        </section>
        {/* Group 701 */}
        <section className="group-70-1438 pos-abs">
          <div className="group-68-1439 pos-abs">
            <div className="why-choose-home-1440 pos-abs">
              <span className="why-choose-home-1440-0">{`Why Choose Homeopathy?`}</span>
            </div>

            <div className="natural-and-non-1479 pos-abs">
              <ul>
                <li>
                  {" "}
                  Natural and Non-Toxic: Homeopathic remedies are made from
                  natural substances and are free from harmful side effects.
                </li>
                <li>
                  Personalized Treatment: Every remedy is selected based on your
                  unique physical and emotional state.
                </li>
                <li>
                  Safe for All Ages: Homeopathy is safe for children, adults,
                  and even pets.
                </li>
                <li>
                  Holistic Approach: Homeopathy treats the person as a whole,
                  focusing on mental, emotional, and physical aspects of health.
                </li>
                <li>
                  Proven Track Record: Thousands of years of combined clinical
                  and anecdotal evidence support the effectiveness of
                  homeopathy.
                </li>
              </ul>
            </div>

            <div className="group-497-1441 pos-abs">
              <div className="testimonials-1443 pos-abs">
                <span className="testimonials-1443-0">{`Testimonials`}</span>
              </div>

              <div className="what-our-patien-1442 pos-abs">
                <span className="what-our-patien-1442-0">{`What our patient says`}</span>
              </div>

              <div className="group-502-1444 pos-abs">
                <div className="rectangle-103-1445 pos-abs"></div>

                <div className="locationpin-1-1476 pos-abs">
                  <div className="vector-1477 pos-abs">
                    <div className="nodeBg-1477 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>

                <div className="location-1446 pos-abs">
                  <a className="location-1446-0" href="https://maps.app.goo.gl/zBpb6KuRLYGJhU1g7">{`Location`}</a>
                </div>

                <div className="group-499-1447 pos-abs">
                  <div className="explore-feature-1448 pos-abs">
                    <span className="explore-feature-1448-0">{`Quick Links
`}</span>
                    {/* <span className="explore-feature-1448-1">{`
`}</span> */}
                    <span className="explore-feature-1448-2">{`
Our Treatments
Gallery
About Us
Contact Us`}</span>
                  </div>

                  <div className="legal-privacy-p-1449 pos-abs">
                    <span className="legal-privacy-p-1449-0">{`Homeopathy For Skin
`}</span> 


                    <span className="legal-privacy-p-1449-1">{`
`}</span>
                    <span className="legal-privacy-p-1449-2">{`Warts & Moles
Acnes, Pimples
All types of Tinea`}</span>
                  </div>

                  <div className="subscribe-lates-1450 pos-abs">
                    <span className="subscribe-lates-1450-0">{`General Homeopathy
`}</span>
                    <span className="subscribe-lates-1450-1">{`
`}</span>
                    <span className="subscribe-lates-1450-2">{`Kidney Diseases
Kidney Stone
Liver Diseases
Paralysis
`}</span>
                  </div>
                </div>

                <div className="group-500-1451 pos-abs">
                  <div className="phonecalling-3-1452 pos-abs">
                    <div className="vector-1454 pos-abs">
                      <div className="nodeBg-1454 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>

                    <div className="vector-1453 pos-abs">
                      <div className="nodeBg-1453 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>

                    <div className="vector-1455 pos-abs">
                      <div className="nodeBg-1455 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>
                  </div>

                  <div className="c-044-49570322-1456 pos-abs" onClick={handlePhoneCall} style={{cursor:"pointer"}}>
                    <span className="c-044-49570322-1456-0">{`+919129371733`}</span>
                  </div>
                </div>

                {/* <div className="group-501-1472 pos-abs">
                  <div className="cookie-policyse-1473 pos-abs">
                    <span className="cookie-policyse-1473-0">{`Cookie Policy/Settings`}</span>
                  </div>

                  <div className="accessibility-s-1474 pos-abs">
                    <span className="accessibility-s-1474-0">{`Accessibility Statement`}</span>
                  </div>

                  <div className="sitemap-1475 pos-abs">
                    <span className="sitemap-1475-0">{`Sitemap`}</span>
                  </div>
                </div> */}

                <div className="vector-2-1478 pos-abs">
                  <div className="nodeBg-1478 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>

                <div className="follow-us-on-1470 pos-abs">
                  <span className="follow-us-on-1470-0">{`Follow Us On`}</span>
                </div>

                <div className="group-442-1457 pos-abs">
                  <div className="rifacebookfill-1458 pos-abs">
                    <div className="vector-1459 pos-abs">
                      <div className="nodeBg-1459 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>
                  </div>

                  <div className="iconoirx-1462 pos-abs">
                    <div className="group-1463 pos-abs">
                      <div className="vector-1464 pos-abs">
                        <div className="nodeBg-1464 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>

                      <div className="vector-1465 pos-abs">
                        <div className="nodeBg-1465 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>
                    </div>
                  </div>

                  <div className="mdiinstagram-1468 pos-abs">
                    <div className="vector-1469 pos-abs">
                      <div className="nodeBg-1469 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>
                  </div>

                  <div className="mdiyoutube-1460 pos-abs">
                    <div className="vector-1461 pos-abs">
                      <div className="nodeBg-1461 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>
                  </div>

                  <div className="mdilinkedin-1466 pos-abs">
                    <div className="vector-1467 pos-abs">
                      <div className="nodeBg-1467 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>
                  </div>
                </div>

                <div className="c-2024-all-rights-1471 pos-abs">
                  <span className="c-2024-all-rights-1471-0">{`© 2024 HOMOEOPATHIC HEALTH CARE & RESEARCH CENTER  All Rights Reserved.`}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="istockphoto1208-1480 pos-abs">
            <img
              src={image28}
              className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-1480 "
              alt="1480-ALT"
            />{" "}
          </div>
        </section>
        {/* Group 711 */}
        <section className="group-71-1554 pos-abs">
          <div className="welcome-to-homo-1555 pos-abs">
            <span className="welcome-to-homo-1555-0">{`Welcome To HOMOEOPATHIC HEALTH CARE & RESEARCH CENTER`}</span>
          </div>

          <div className="our-team-of-hig-1556 pos-abs">
            <span className="our-team-of-hig-1556-0">{`Our team of highly trained professionals uses the latest healing technologies to restore you to pain-free health quickly and easily.`}</span>
          </div>

          <div className="group-54-1557 pos-abs">
            <div className="rectangle-17-1558 pos-abs"></div>

            <div className="group-52-1559 pos-abs">
              <div className="group-48-1560 pos-abs">
                <div className="circletick-1-1561 pos-abs">
                  <div className="vector-1562 pos-abs">
                    <div className="nodeBg-1562 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>

                  <div className="vector-1563 pos-abs">
                    <div className="nodeBg-1563 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>

                <div className="cch-child-healt-1564 pos-abs">
                  <span className="cch-child-healt-1564-0">{`C.C.H. (Child Health) Consultant Physician`}</span>
                </div>
              </div>

              <div className="group-49-1570 pos-abs">
                <div className="circletick-2-1571 pos-abs">
                  <div className="vector-1572 pos-abs">
                    <div className="nodeBg-1572 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>

                  <div className="vector-1573 pos-abs">
                    <div className="nodeBg-1573 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>

                <div className="multi-specialty-1574 pos-abs">
                  <span className="multi-specialty-1574-0">{`Multi Specialty Clinic`}</span>
                </div>
              </div>

              <div className="group-50-1565 pos-abs">
                <div className="circletick-1-1566 pos-abs">
                  <div className="vector-1567 pos-abs">
                    <div className="nodeBg-1567 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>

                  <div className="vector-1568 pos-abs">
                    <div className="nodeBg-1568 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>

                <div className="bhms--dnyt-svd--1569 pos-abs">
                  <span className="bhms--dnyt-svd--1569-0">{`B.H.M.S , D.N.Y.T, S.V.D. (Skin & Venereal)`}</span>
                </div>
              </div>

              <div className="group-51-1575 pos-abs">
                <div className="group-50-1576 pos-abs">
                  <div className="circletick-1-1577 pos-abs">
                    <div className="vector-1578 pos-abs">
                      <div className="nodeBg-1578 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>

                    <div className="vector-1579 pos-abs">
                      <div className="nodeBg-1579 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>
                  </div>

                  <div className="c-24-hours-medica-1580 pos-abs">
                    <span className="c-24-hours-medica-1580-0">{`24 Hours Medical Service`}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group-54-1581 pos-abs">
              <div className="rectangle-19-I1581_54158 pos-abs"></div>

              <div className="book-an-appoint-I1581_54159 pos-abs" onClick={()=>{
                alert("Coming soon")
              }} style={{cursor:"pointer"}}>
                <span className="book-an-appoint-I1581_54159-0">{`BOOK AN APPOINTMENT`}</span>
              </div>
            </div>
          </div>
        </section>
        {/* Group 721 */}
        <section className="group-72-1582 pos-abs">
          <div className="rectangle-16-1584 pos-abs"></div>

          <div className="publicopinionre-1583 pos-abs">
            <img
              src={image29}
              className="pos-abs image-div bg-no-repeat bg-crop nodeBg-1583 "
              alt="1583-ALT"
            />{" "}
          </div>
        </section>
        {/* Group 731 */}
        <section className="group-73-1210 pos-abs">
          <div className="rectangle-20-1211 pos-abs"></div>

          <div className="group-70-1212 pos-abs">
            <div className="group-69-1219 pos-abs">
              <div className="group-67-1220 pos-abs">
                <div className="group-56-1221 pos-abs">
                  <div className="rectangle-21-1222 pos-abs"></div>

                  <div className="user-1-1224 pos-abs">
                    <div className="vector-1225 pos-abs">
                      <div className="nodeBg-1225 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>

                    <div className="name-1226 pos-abs">
                      <span className="name-1226-0">{`Name`}</span>
                    </div>
                  </div>

                  <div className="name-1223 pos-abs">
                    <span className="name-1223-0">{`Name`}</span>
                  </div>
                </div>

                <div className="group-57-1227 pos-abs">
                  <div className="rectangle-21-1228 pos-abs"></div>

                  <div className="mailalt3-1-1230 pos-abs">
                    <div className="vector-1231 pos-abs">
                      <div className="nodeBg-1231 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>
                  </div>

                  <div className="mail-1229 pos-abs">
                    <span className="mail-1229-0">{`Mail`}</span>
                  </div>
                </div>
              </div>

              <div className="group-66-1232 pos-abs">
                <div className="group-58-1233 pos-abs">
                  <div className="rectangle-21-1234 pos-abs"></div>

                  <div className="phone-1-1236 pos-abs">
                    <div className="vector-1237 pos-abs">
                      <div className="nodeBg-1237 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>
                  </div>

                  <div className="name-1235 pos-abs">
                    <span className="name-1235-0">{`Name`}</span>
                  </div>
                </div>

                <div className="group-59-1238 pos-abs">
                  <div className="rectangle-21-1239 pos-abs"></div>

                  <div className="save-1-1241 pos-abs">
                    <div className="vector-1242 pos-abs">
                      <div className="nodeBg-1242 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>
                  </div>

                  <div className="subject-1240 pos-abs">
                    <span className="subject-1240-0">{`Subject`}</span>
                  </div>
                </div>
              </div>

              <div className="group-65-1243 pos-abs">
                <div className="group-65-1244 pos-abs">
                  <div className="group-61-I1244_54291 pos-abs">
                    <div className="rectangle-21-I1244_54292 pos-abs"></div>
                  </div>

                  <div
                    className="book-appointmen-I1244_54293 pos-abs"
                    onClick={() => {
                      alert("Coming Soon..");
                    }}
                  >
                    <span className="book-appointmen-I1244_54293-0">{`BOOK APPOINTMENT`}</span>
                  </div>
                </div>

                <div className="group-64-1246 pos-abs">
                  <div className="group-63-1247 pos-abs">
                    <div className="group-62-1248 pos-abs">
                      <div className="group-61-1249 pos-abs">
                        <div className="rectangle-21-1250 pos-abs"></div>
                      </div>
                    </div>

                    <div className="phonecalling-2-1251 pos-abs">
                      <div className="vector-1253 pos-abs">
                        <div className="nodeBg-1253 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>

                      <div className="vector-1252 pos-abs">
                        <div className="nodeBg-1252 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>

                      <div className="vector-1254 pos-abs">
                        <div className="nodeBg-1254 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>
                    </div>
                  </div>

                  <div className="c-044-49570322-1255 pos-abs">
                    <a href="tel:+919129371733" className="c-91-9918686874-1181-0">
                +91 9129371733
              </a>
                  </div>
                </div>

                <div className="or-1245 pos-abs">
                  <span className="or-1245-0">{`( OR )`}</span>
                </div>
              </div>
            </div>

            <div className="group-68-1213 pos-abs">
              <div className="appointmentnew--1215 pos-abs">
                <div className="vector-1216 pos-abs">
                  <div className="nodeBg-1216 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>
              </div>

              <div className="get-an-appointm-1214 pos-abs">
                <span className="get-an-appointm-1214-0">{`get an appointment
`}</span>
              </div>

              <div className="the-wide-networ-1218 pos-abs">
                <span className="the-wide-networ-1218-0">{`The Wide Network of Best Healthcare`}</span>
              </div>

              <div className="our-team-of-hig-1217 pos-abs">
                <span className="our-team-of-hig-1217-0">{`Our team of highly trained professionals uses the latest healing technologies to restore you to pain-free health quickly and easily.`}</span>
              </div>
            </div>
          </div>
        </section>

        <div className="here-are-a-few--1623 pos-abs">
          <span className="here-are-a-few--1623-0">{`Here are a few heartfelt testimonials from our patients who have experienced the transformative power of homeopathy at `}</span>
          <span className="here-are-a-few--1623-1">{`HOMOEOPATHIC HEALTH CARE & RESEARCH CENTER`}</span>
          <span className="here-are-a-few--1623-2">{`. We are grateful to be a part of their healing journeys and are proud of the positive impact homeopathy has had on their lives.`}</span>
        </div>
        {/* Group 4981 */}
        {/* <section className="group-498-1585 pos-abs">
          <div className="group-496-1586 pos-abs">
            <div className="group-496-1595 pos-abs">
              <div className="rectangle-23-1596 pos-abs"></div>

              <div className="group-488-1597 pos-abs">
                <div className="screenshot-2024-1598 pos-abs">
                  <img
                    src={image30}
                    className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-1598 "
                    alt="1598-ALT"
                  />{" "}
                </div>

                <div className="group-41-1599 pos-abs">
                  <div className="ava-1600 pos-abs">
                    <span className="ava-1600-0">{`Ava`}</span>
                  </div>

                  <div className="cancer-patient-1601 pos-abs">
                    <span className="cancer-patient-1601-0">{`Cancer Patient
`}</span>
                  </div>

                  <div className="all-the-doctors-1602 pos-abs">
                    <span className="all-the-doctors-1602-0">{`“All the doctors, nurses, aides, food service employees, security and maintenance workers deserve such praise for their attention & care.”
`}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group-493-1587 pos-abs">
              <div className="rectangle-23-1588 pos-abs"></div>

              <div className="group-488-1589 pos-abs">
                <div className="screenshot-2024-1590 pos-abs">
                  <img
                    src={image30}
                    className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-1590 "
                    alt="1590-ALT"
                  />{" "}
                </div>

                <div className="group-41-1591 pos-abs">
                  <div className="ava-1592 pos-abs">
                    <span className="ava-1592-0">{`Ava`}</span>
                  </div>

                  <div className="cancer-patient-1593 pos-abs">
                    <span className="cancer-patient-1593-0">{`Cancer Patient
`}</span>
                  </div>

                  <div className="all-the-doctors-1594 pos-abs">
                    <span className="all-the-doctors-1594-0">{`“All the doctors, nurses, aides, food service employees, security and maintenance workers deserve such praise for their attention & care.”
`}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group-491-1603 pos-abs">
              <div className="rectangle-102-1604 pos-abs"></div>

              <div className="mingcuteupfill-1605 pos-abs">
                <div className="group-1606 pos-abs">
                  <div className="vector-1607 pos-abs">
                    <div className="nodeBg-1607 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>

                  <div className="vector-1608 pos-abs">
                    <div className="nodeBg-1608 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group-495-1609 pos-abs">
              <div className="rectangle-102-1610 pos-abs"></div>

              <div className="mingcuteupfill-1611 pos-abs">
                <div className="group-1612 pos-abs">
                  <div className="vector-1613 pos-abs">
                    <div className="nodeBg-1613 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>

                  <div className="vector-1614 pos-abs">
                    <div className="nodeBg-1614 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

           <div className="group-496-1615 pos-abs">
            <div className="rectangle-23-1616 pos-abs"></div>

            <div className="group-488-1617 pos-abs">
              <div className="screenshot-2024-1618 pos-abs">
                <img
                  src={image30}
                  className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-1618 "
                  alt="1618-ALT"
                />{" "}
              </div>

              <div className="group-41-1619 pos-abs">
                <div className="ava-1620 pos-abs">
                  <span className="ava-1620-0">{`Ava`}</span>
                </div>

                <div className="cancer-patient-1621 pos-abs">
                  <span className="cancer-patient-1621-0">{`Cancer Patient
`}</span>
                </div>

                <div className="all-the-doctors-1622 pos-abs">
                  <span className="all-the-doctors-1622-0">{`“All the doctors, nurses, aides, food service employees, security and maintenance workers deserve such praise for their attention & care.”
`}</span>
                </div>
              </div>
            </div>
          </div> 
        </section> */}
        <section>
          <div className="carousel">
            <div className="carousel-item">
              <img
                src={images[1].src}
                alt={images[currentIndex].alt}
                className="carousel-image"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
