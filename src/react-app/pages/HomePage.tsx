import { Container, Row, Col, Card } from "react-bootstrap";
// import { Link } from "react-router-dom";
import MediaHero from "../components/MediaHero";
import ProjectsGrid from "../components/ProjectsGrid";
import CallToAction from "../components/CallToAction";
import {  FaGear,
  FaLightbulb,
  FaUsers,
  FaScrewdriverWrench,} from "react-icons/fa6";
import WaveGradientBackground from "../components/WaveGradientBackground";
import SkillsSection from "../components/SkillsSection";
import { motion} from "framer-motion";
import { slideInLeft, slideInRight, staggerItem, staggerContainer} from "../animations/motionVariants";  


export default function HomePage() {
  const values = [
  {
    title: "Engineering & Problem Solving",
    text: `I enjoy building and improving mechanical and mechatronic systems through iterative design and testing. I learn best from solving real world engineering problems and figuring out how to improve designs.`,
    icon: FaGear,
  },
  {
    title: "Technical Curiosity",
    text: `I’m always looking to learn new engineering disciplines and technologies. I like understanding how things work and applying that knowledge to projects.`,
    icon: FaLightbulb,
  },
  {
    title: "Collaboration & Communication",
    text: `I work well in team environments and enjoy collaborating with other engineers, project managers, and technicians. I value clear communication, staying organized, and contributing wherever I can to help projects move forward.`,
    icon: FaUsers,
  },
  {
    title: "Hands-On Engineering",
    text: `I like taking projects beyond the computer screen and into real-world testing and fabrication. Whether it’s working with electrical, mechanical, or mechatronic systems, I enjoy the process of designing, fabricating, and refining projects firsthand.`,
    icon: FaScrewdriverWrench,
  },
];

  const MotionCol = motion.create(Col);

  return (
    <>
      {/* Hero */}
      <MediaHero


        overlayContent={
          <Container>
            <Row className="align-items-center py-5">
              <Col lg={8} md={6}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={slideInLeft}
              >
                <h1 className="main-heading text-start text-light mb-4">Hi! I'm Aaron.</h1>
                <p className="no-pad hero-paragraph mb-4 text-light">
                  I am currently pursuing a dual major in Aerospace & Mechanical Engineering at the University at Buffalo.  I have a strong passion for product design, manufacturing processes, and system control. I am eager to apply what I have learned through my educational, research, and internship experiences to real world engineering problems.
                </p>
            
                </motion.div>


              </Col>

              <Col lg={4} md={6} className="text-center">
               <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={slideInRight}
              >
                <img
                  src="/images/aaron-hero.avif"
                  alt="Aaron Kruger"
                  className="img-fluid rounded"
                  loading="eager"
                  fetchPriority="high"
                />
                </motion.div>
              </Col>
            </Row>
          </Container>
        }
        background={<WaveGradientBackground />}
        bgColor="var(--color-dark-bg)"

      />


      {/* values Section */}
      <section className="py-5 bg-light-100 border-top">
         <h2 className="text-center text-4xl mb-5">What I'm Good At</h2>
    {/* Staggered container */}
      <Container>
      <motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }} // triggers when 20% of container is in viewport
>
          <Row className="g-4">
            {values.map((value, index) => (
               <MotionCol
                            key={index}
                            md={6}
                            sm={6}
                            variants={staggerItem} // each card animates in sequence
                          >
                
                <Card className="h-100 shadow-sm gradient-border rounded-2">
                  <Card.Body>
                    <value.icon size={32} className="mb-3 " style={{ color: "var(--brand-gradient-middle)" }} />
                    <Card.Title><h4>{value.title}</h4></Card.Title>
                    <Card.Text>{value.text}</Card.Text>
                  </Card.Body>
                </Card>
               
              </MotionCol>
            ))}
    
          </Row>
      </motion.div>
      </Container>
      </section>



      <div id="projects"></div>

      {/* Mechanical Projects Grid */}
      <section className="py-5 bg-light-50 border-bottom shadow-sm z-2" id="mechanical">
        <Container>
          <h2 className="text-center text-4xl">Mechanical Projects</h2>
          <div className="gradient-bg"></div>
          </Container>
          <ProjectsGrid category="Mechanical" /> 
      </section>

      <SkillsSection />

      <CallToAction
        heading="Want to Learn More About Me?"
        bgColor="var(--color-dark-bg)"
        textColor="white"
        buttonText="Reach Out"
        buttonLink="/contact"
        className="shadow-sm z-2"
        useWaveGradient={true}

      />
    </>
  );
}
