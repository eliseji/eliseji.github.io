import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import hingetutors from "../../Assets/Projects/hingetutors.png";
import medbox from "../../Assets/Projects/medbox.png";
import cleanpaws from "../../Assets/Projects/cleanpaws.png";
import campusnest from "../../Assets/Projects/campusnest.png";
import skinsync from "../../Assets/Projects/skinsync.png";
import healthpack from "../../Assets/Projects/healthpack.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={campusnest}
              isBlog={false}
              title="Campus Nest"
              description="A platform that provides university students a way to find and put up information about sub-leases/rentals, finding potential housemates, and saving paperwork. This all-in-one web-app saves the hassle of students looking for housing through social media."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={healthpack}
              isBlog={false}
              title="Health Pack"
              description="Health Pack is a 'health passport' that stores symptoms and medical records (allergies, diseases) in order to empower people with information about their own health. Our mission is to combat the problem of patient safety issues (misdiagnoses, miscommunication, etc.) that could easily be avoidable. "
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cleanpaws}
              isBlog={false}
              title="Clean Paws Recyling Bin"
              description="An automated recycling bin that is able to perform live object-detection through a web-cam and a trained YOLOv5 model and a customed dataset from Roboflow. Utilized Raspberry Pi, ultrasonic sensors, motors, Cv2 module, and Python in order to connect the hardware and software components."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hingetutors}
              isBlog={false}
              title="Hinge Tutors"
              description="Hinge Tutors is web-app that connects previous students who already took the class (preferably with the same professor) and students who are currently taking the class seeking for more help with course material. Hinge tutors connects tutors and students through a swiping mechanism where students can choose their tutors based upon preference, schedule, professors, etc."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={skinsync}
              isBlog={false}
              title="SkinSync"
              description="An on-the-go app that allows users to scan skin products and see if the product is compatiable with their skin type and current skin-care routine. Utilized OpenAI for ingredient analysis and Firestore for a real-time data collection."
              // Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention.
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medbox}
              isBlog={false}
              title="MedBox"
              description="MedBox is a health and prescription assistance app, which allows the user to choose and order a drug based on their symptoms, search and order a specific drug, and pick-up and refill their prescription. Utilized ApiMedic API to take symptoms as input and internally determine the diagnosis."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 2
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
