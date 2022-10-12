import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Pomodoro from "../../Assets/Projects/Pomodoro.png";
import eCommerce from '../../Assets/Projects/eCommerce.png';
import VideoLibrary from '../../Assets/Projects/VideoLibrary.png';
import Quiz from '../../Assets/Projects/GothamQuiz.png';
import Extension from '../../Assets/Projects/MomentumClone.png';
import GothamUI from '../../Assets/Projects/GothamUI.png';


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
              imgPath={VideoLibrary}
              isBlog={false}
              title="Clipz (Video-Library)"
              description="It is a YouTube clone, features include like/dislike video, add/ remove video from playlist, dark/light mode, search video, sort video, create playlists , etc. It is built using React Js and Redux Toolkit."
              ghLink="https://github.com/Sharmaryan/gotham-video"
              demoLink="https://clipz.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eCommerce}
              isBlog={false}
              title="Gotham Store (E-Commerce)"
              description="Gotham Store is an online store to buy books.It has wide range of categories. Features: authentication ,filter on basis of rating, categories, price, add to wishlist, add to cart, checkout, razorpay payment integration."
              ghLink="https://github.com/Sharmaryan/gothamStore"
              demoLink="https://gotham-store.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Quiz}
              isBlog={false}
              title="Gotham Quiz"
              description="It is a quiz app built using React Js and TypeScript. Features : Play different category quiz, dark/light mode, final score calculation, answers will turn red or green according to the answer choosen."
              ghLink="https://github.com/Sharmaryan/gotham-quiz"
              demoLink="https://gotham-quiz.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GothamUI}
              isBlog={false}
              title="GothamUI (Component Library)"
              description="This component library provides you styled component which are fully responsive .If you have used bootstrap or tailwind before this component library will seems very much comfortable ."
              ghLink="https://github.com/Sharmaryan/Gotham-UI"
              demoLink="https://gothamui.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Pomodoro}
              isBlog={false}
              title="Pomodoro (Time-Management)"
              description="Pomodoro app helps you create Task list with timer. Features: user can create task,edit tast delete task, task list will persist on page refresh, Timer will start on click of task list, toggle theme, break timer/ focus timer."
              ghLink="https://github.com/Sharmaryan/pomodoro-app"
              demoLink="https://pomodoro-gotham.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Extension}
              isBlog={false}
              title="Gotham Browser Extension (Momentum Clone)"
              description="This is a Browser Extension built using React Js. Features : Greet User, Show city temperature, CRUD operation on main task, Task saves in the local storage"
              ghLink="https://github.com/Sharmaryan/gotham-extension"
              demoLink="https://gotham-extension.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
