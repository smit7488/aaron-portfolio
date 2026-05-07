import { Container, Row, Col, Card } from "react-bootstrap";

import {
  FaPython,
  FaMicrosoft,
  FaDraftingCompass,
} from "react-icons/fa";

import {
  FaGear,
  FaRobot,
  FaCube,
  FaMicrochip,
  FaRulerCombined,
} from "react-icons/fa6";

import {
  SiArduino,
  SiAnsys,
  SiAutodesk,
} from "react-icons/si";

const iconSize = 22;

export default function SkillsSection() {
  const cadAndDesign = [
    {
      icon: <SiAutodesk color="#F77F00" size={iconSize} />,
      label: "Fusion 360",
    },
    {
      icon: <FaCube color="#cc0000" size={iconSize} />,
      label: "SolidWorks",
    },
    {
      icon: <FaDraftingCompass color="#666" size={iconSize} />,
      label: "GD&T",
    },
    {
      icon: <FaRulerCombined color="#888" size={iconSize} />,
      label: "3D Modeling",
    },
  ];

  const engineeringTools = [
    {
      icon: <FaGear color="#555" size={iconSize} />,
      label: "MATLAB",
    },
    {
      icon: <SiAnsys color="#FFB300" size={iconSize} />,
      label: "ANSYS",
    },
    {
      icon: <FaPython color="#3776AB" size={iconSize} />,
      label: "Python",
    },
    {
      icon: <SiArduino color="#00979D" size={iconSize} />,
      label: "Arduino",
    },
  ];

  const manufacturingSkills = [
    {
      icon: <FaCube color="#b22222" size={iconSize} />,
      label: "3D Printing",
    },
    {
      icon: <FaMicrochip color="#666" size={iconSize} />,
      label: "PCB Design",
    },
    {
      icon: <FaRobot color="#444" size={iconSize} />,
      label: "Robotics",
    },
    {
      icon: <FaMicrosoft color="#F25022" size={iconSize} />,
      label: "Microsoft Office",
    },
  ];

  const skillSections = [
    { title: "CAD & Design", skills: cadAndDesign },
    { title: "Engineering Tools", skills: engineeringTools },
    { title: "Manufacturing & Technical", skills: manufacturingSkills },
  ];

  return (
    <section className="py-5 bg-light-200">
      <Container>
        <h2 className="text-center mb-3 fw-bold text-4xl">
          Skills & Tools
        </h2>

        <p className="text-center mb-5">
          Engineering software, manufacturing tools, and technical skills
          used across design, prototyping, and analysis projects.
        </p>

        <Row className="gy-4">
          {skillSections.map((section, idx) => (
            <Col key={idx} md={6} lg={4}>
              <Card className="p-4 shadow-sm h-100 border-0 bg-light-100">
                <h5 className="fw-bold mb-4 text-center">
                  {section.title}
                </h5>

                <Row xs={2} sm={4} md={2} className="g-3 text-center">
                  {section.skills.map((skill, sIdx) => (
                    <Col key={sIdx}>
                      <Card className="h-100 border-0 d-flex flex-column align-items-center justify-content-center shadow-sm p-3">
                        <div className="d-flex flex-column align-items-center">
                          {skill.icon}

                          <span className="mt-2 small fw-semibold">
                            {skill.label}
                          </span>
                        </div>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}