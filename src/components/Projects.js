import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import sanitary1 from "../assets/img/Saathi1.png";
import snacks1 from "../assets/img/snacks.png";
import fruits1 from "../assets/img/fruits.png";
import Vita1 from "../assets/img/vita.png";
import therma1 from "../assets/img/thermal pads1.png";
import icecreamu1 from "../assets/img/icecreamu.png";

import Massage1 from "../assets/img/massage.jpeg";
import Therapy1 from "../assets/img/therapy.jpeg";
import counselling1 from "../assets/img/counselling.jpeg";
import Manicure1 from "../assets/img/manicure.jpeg";
import Pedicure from "../assets/img/pedicure.jpeg";
import hair1 from "../assets/img/hair salon.jpeg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Organic sanitary pads",
      description: "Saathi biodegradable Sanitary pads are thoughtfully designed to use natural, locally-sourced materials, including banana fibre. Saathi pads are gentle on the skin and Mother Earth, disappearing quickly upon disposal. The pads are 100% Chemical Free, plastic free and IS:5405-1980 certified.",
      imgUrl: sanitary1,
    },
    {
      title: "Snacks",
      description: "Nutristic by Nutriome – The Best Healthy Snacks Company in Tamil Nadu. At Nutriome, we believe that snacking should be enjoyable and healthy. Our snacks are made using high-quality ingredients and are vacuum fried to retain their nutrients, flavor, and texture.",
      imgUrl: snacks1,
    },
    {
      title: "Fruits",
      description: "Locally sourced fruits made to be highly nutritious, hamrful chemicals-free, while helping our local farmers as well. we believe everyone deserves a healthier and happier life.  ",
      imgUrl: fruits1,
    },
    {
      title: "MultiVitamins",
      description: "If you’re unsure of where to start for a supplement for PCOS, we recommend Needed Women’s Multi as the best overall PCOS supplement. We like this comprehensive multivitamin can help cover any nutritional gaps in your diet to provide you with good amounts of key vitamins, minerals, and antioxidants that may be helpful for symptoms of PCOS. We specifically appreciate the levels of vitamin B12, folate, vitamin D, zinc, and magnesium because those with PCOS are often deficient in these nutrients",
      imgUrl: Vita1,
    },
    {
      title: "Thermal pads",
      description: "Experience relief during menstrual cramps with our thermal pads. These specially designed pads offer soothing heat therapy to relax abdominal muscles, reduce pain, and alleviate discomfort. Convenient and non-invasive, our thermal pads can be easily applied to the lower abdomen or lower back for immediate relief. Say goodbye to menstrual pain and hello to comfort with our effective and easy-to-use solution. Embrace a pain-free period experience with our menstrual thermal pads.",
      imgUrl: therma1,
    },
    {
      title: "Minus-30 Icecream ",
      description: "Design & Development",
      imgUrl: icecreamu1,
    },
  ];
  const projects1 = [
    {
      title: "Massage spas",
      description: "Indulge in ultimate relaxation with Petals! Discover our exclusive massage spa coupons, your ticket to blissful escapes. Treat yourself or a loved one to luxurious massages at unbeatable prices. With Petals, every moment is a chance to unwind and rejuvenate.",
      imgUrl: Massage1,
    },
    {
      title: "Therapy pets",
      description: "Experience the healing power of pets with Petals! Our therapy pets bring comfort and companionship to your life. From stress relief to emotional support, Petals offers a furry friend for every need. Let our four-legged therapists brighten your days.",
      imgUrl: Therapy1,
    },
    {
      title: "counselling",
      description: "Embrace empowerment with Petals! Our mental health counseling services are tailored for women, providing a safe space for healing and growth. Let Petals guide you on your journey to emotional well-being and self-discovery. Elevate your mental health, one petal at a time. ",
      imgUrl: counselling1,
    },
    {
      title: "Manicure spas",
      description: "Elevate your self-care routine with Petals! Explore our exquisite manicure spa coupons, your gateway to glamorous nails. Treat yourself or a loved one to a pampering session that leaves hands feeling fabulous. With Petals, every touch becomes a petal-soft sensation.",
      imgUrl: Manicure1,
    },
    {
      title: "Pedicure spas",
      description: "tep into ultimate relaxation with Petals! Discover our exclusive pedicure spa coupons for an indulgent foot pampering experience. Treat yourself or a loved one to a soothing pedicure that leaves feet feeling refreshed and revitalized. With Petals, every step is a petal-soft delight.",
      imgUrl: Pedicure,
    },
    {
      title: "Hair salons ",
      description: "Elevate your hair game with Petals! Explore our exclusive hair salon coupons for a fabulous mane makeover. Whether it's a stylish cut, vibrant color, or a rejuvenating treatment, Petals has your tresses covered. Unleash your hair's natural beauty with Petals – where every strand blooms.",
      imgUrl: hair1,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Products and Services</h2>
                <p>Discover our eco-friendly organic menstruation products. Our range includes menstrual cups, reusable cloth pads, and biodegradable tampons made from natural materials. These products are designed for comfort, reliability, and sustainability, reducing waste and promoting a healthier menstrual experience. Join the movement towards eco-conscious period care with our thoughtfully crafted, planet-friendly options. Experience a more comfortable and environmentally responsible way to manage your period.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Items</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Services</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">page 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
