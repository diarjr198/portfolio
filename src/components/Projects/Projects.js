import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Salus from "../../Assets/Projects/Salus.png";
import TheGeekly from "../../Assets/Projects/TheGeekly.png";
import CarboTrack from "../../Assets/Projects/CarboTrack.png";
import Sched from "../../Assets/Projects/Sched.png";
import Aprendiz from "../../Assets/Projects/Aprendiz.png";
import ECommerce from "../../Assets/Projects/e-commerce.png";
import Blog from "../../Assets/Projects/blog.png";
import Quotes from "../../Assets/Projects/quotes.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent{" "}
          <strong className="teal">Projects, Certifications & Awards</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few things I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ECommerce}
              isBlog={false}
              title="Mini Apps E-Commerce"
              description="This is a buying and selling website created using MongoDB, ExpressJS, Angular, and NodeJS Database technologies. This website is a small example of E-Commerce which includes add to cart and product checkout features. This website also supports responsiveness on mobile, tablet and desktop displays."
              ghLink="https://github.com/diarjr198/b3-assignment3FE"
              demoLink="https://www.ef-store.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Blog}
              isBlog={false}
              title="Mini Apps Blog"
              description="This is a static blog website about health that I created with HTML, CSS, Javascript, Bootstrap & Jquery technology. This website still uses static data which is set manually using a javascript array and then displayed to the website page. This website also supports responsiveness on mobile, tablet and desktop displays."
              ghLink="https://github.com/diarjr198/static_blog"
              demoLink="https://static-blog-rho.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Quotes}
              isBlog={false}
              title="Mini Apps Quotes"
              description="This is a website that contains quotes, where we can add our own quotes on this website. The drawback is that this website is still static, when the page is refreshed the data that has been added is lost to the original. This website also supports responsiveness on mobile, tablet and desktop displays."
              ghLink="https://github.com/diarjr198/tugas_jvalley_quotes"
              demoLink="https://tugas-jvalley-quotes-phi.vercel.app"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Salus}
              isComp={true}
              title="Project Salus"
              description="I participated in a climate change-themed science fest organized by Christ Junior College called Project Salus. It involved a series of climate change-themed science challenges which had to be solved using Python within ten minutes. It also involved the creation of a presentation. I won first place for the theme 'Technica Humanitus'. "
              ghLink="https://dhruv.is-from.space/1659865480.png"
              demoLink="https://dhruv.is-from.space/1659865480.png"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TheGeekly}
              isBlog={false}
              title="The Geekly"
              description="I co-founded The Geekly, a magazine exploring the universe through the lens of science. 12 issues have been created till date, featuring original and interesting articles. "
              // ghLink="not needed here"
              demoLink="https://thegeekly.net"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
