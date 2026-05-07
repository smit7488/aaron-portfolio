import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import amkLogo from "../assets/media/amk-logo-vertical-ko.svg";
import {
  FaLinkedin,
  FaFilePdf,
  FaEnvelope,
} from "react-icons/fa";
import "./Footer.css";
import resumePdf from "../assets/resume/Aaron-Kruger-Resume.pdf";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer py-4 mt-auto bg-darkest text-light">
      <Container>
        {/* Bottom Row: Logo, Location, Copyright, Socials */}
        <Row className="align-items-center my-3 text-center gap-2">
          <Image
            src={amkLogo}
            alt="Aaron Kruger Logo"
            style={{ maxHeight: 80 }}
            className="mb-2 mx-auto"
          />

          <Col className="d-flex flex-wrap flex-row justify-content-center col-12 my-3 gap-2">
          
            <div className="footer-link">
              <span>© {currentYear} Aaron Kruger.</span>
            </div>
            
          </Col>

          <Col className="d-flex justify-content-center col-12">
            <div className="social-icons d-flex gap-3">
       

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/aaron-kruger-904894296/"
                title="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaLinkedin size={22} />
              </a>

              {/* Resume */}
              <a
                href={resumePdf}
                title="Download Resume"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaFilePdf size={22} />
              </a>

              {/* Contact (React Router link) */}
              <Link
                to="/contact"
                title="Contact Me!"
                className="social-icon"
              >
                <FaEnvelope size={22} />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
