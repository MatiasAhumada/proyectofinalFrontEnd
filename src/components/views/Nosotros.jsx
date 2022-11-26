import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { motion } from "framer-motion"

const Nosotros = () => {
  return (
    <div>

    <motion.div >
      <motion.h2 animate={{fontSize: 50, color: "#ff2294"}} className="text-center ">Sobre Nosotros</motion.h2>
      </motion.div>

      <hr />
      <Container>
        <Row>
          <Col>
            <div>
              <img
                animate={{ scale: 1.5 }}
                style={{ width: 200, height: 200 }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9BXvcD0YBRXdZP0UYwxyB0X6UoubLFMrOi_yctgVlb8riYlJN5smt1WhpACG6_YUpS7U&usqp=CAU"
                alt="team1"
              />
              <h3>Alvaro Ruiz Mejia</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Blanditiis in odio, cupiditate sapiente dignissimos libero.
              </p>
            </div>
          </Col>
          <Col>
            <div>
              <img
                whileHover={{ scale: 1.5 }}
                style={{ width: 200, height: 200 }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9BXvcD0YBRXdZP0UYwxyB0X6UoubLFMrOi_yctgVlb8riYlJN5smt1WhpACG6_YUpS7U&usqp=CAU"
                alt="team1"
              />
              <h3>Alvaro Ruiz Mejia</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Blanditiis in odio, cupiditate sapiente dignissimos libero.
              </p>
            </div>
          </Col>
          <Col>
            <div>
              <img
                whileHover={{ scale: 1.5 }}
                style={{ width: 200, height: 200 }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9BXvcD0YBRXdZP0UYwxyB0X6UoubLFMrOi_yctgVlb8riYlJN5smt1WhpACG6_YUpS7U&usqp=CAU"
                alt="team1"
              />
              <h3>Alvaro Ruiz Mejia</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Blanditiis in odio, cupiditate sapiente dignissimos libero.
              </p>
            </div>
          </Col>
          <Col>
            <div>
              <img
                whileHover={{ scale: 1.5 }}
                style={{ width: 200, height: 200 }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9BXvcD0YBRXdZP0UYwxyB0X6UoubLFMrOi_yctgVlb8riYlJN5smt1WhpACG6_YUpS7U&usqp=CAU"
                alt="team1"
              />
              <h3>Alvaro Ruiz Mejia</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Blanditiis in odio, cupiditate sapiente dignissimos libero.
              </p>
            </div>
          </Col>
          <Col>
            <div>
              <img
                whileHover={{ scale: 1.5 }}
                style={{ width: 200, height: 200 }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9BXvcD0YBRXdZP0UYwxyB0X6UoubLFMrOi_yctgVlb8riYlJN5smt1WhpACG6_YUpS7U&usqp=CAU"
                alt="team1"
              />
              <h3>Alvaro Ruiz Mejia</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Blanditiis in odio, cupiditate sapiente dignissimos libero.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Nosotros;
