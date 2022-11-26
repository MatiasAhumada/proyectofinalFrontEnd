import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { motion } from "framer-motion";
import "../../css/nosotros.css";

const Nosotros = () => {
  return (
    <div className="nosotros m-4 my-5">
      <motion.div style={{ height: "10vh" }}>
        <motion.h2
          animate={{ scale: 1.3, color: "#FEC163", x: 120 }}
          transition={{ delay: 0.1 }}
          className="text-center my-3 titulo"
        >
          Sobre Nosotros
        </motion.h2>
        <motion.h3
          animate={{ scale: 1.3, color: "#DE4313", x: 180 }}
          transition={{ delay: 0.1 }}
          className="text-center my-2 titulo"
        >
          Quienes Somos?
        </motion.h3>
      </motion.div>

      <hr />
      <Container>
        <Row>
          <Col>
            <motion.div
              style={{
                border: "3px outset grey",
                padding: 10,
              }}
              whileHover={{ scale: 1.2 }}
              animate={{ x: -5 }}
              className="m-5 cajas"
            >
              <h3 className="my-3 nombreCompañero">Alvaro Ruiz Mejias</h3>

              <img
                style={{ width: 200, height: 200 }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9BXvcD0YBRXdZP0UYwxyB0X6UoubLFMrOi_yctgVlb8riYlJN5smt1WhpACG6_YUpS7U&usqp=CAU"
                alt="team1"
              />
              <p className="loremCompañero">
                Hola, soy Alvaro tengo 27 años, actualmente trabajo como
                encargado en un drugstore, un amigo me recomendó RollingCode
                para empezar a estudiar programación y es increíble las cosas
                que voy aprendiendo hasta el día de hoy, en un futuro espero ser
                un programador profesional.
              </p>
            </motion.div>
          </Col>
          <Col>
            <motion.div
              style={{
                border: "3px outset grey",
                padding: 10,
              }}
              whileHover={{ scale: 1.2 }}
              animate={{ x: 5 }}
              className="m-5 cajas"
            >
              <h3 className="my-3 nombreCompañero">Thomás Jerez</h3>

              <img
                style={{ width: 200, height: 200 }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9BXvcD0YBRXdZP0UYwxyB0X6UoubLFMrOi_yctgVlb8riYlJN5smt1WhpACG6_YUpS7U&usqp=CAU"
                alt="team1"
              />
              <p className="loremCompañero">
                Mi nombre es Thomás tengo 24 años, despues de 3 años en la
                carrera de abogacía descubrí lo que es el mundo de la
                programación, un amigo me conto sobre Rolling Code, empecé a
                investigar y como siempre me llamó la atención la informática
                decidó probar; actualmente la programación es lo que mas me
                gusta asi que espero poder dedicarme a esto en un fututo al
                100%.
              </p>
            </motion.div>
          </Col>
          <Col>
            <motion.div
              style={{
                border: "3px outset grey",
                padding: 10,
              }}
              whileHover={{ scale: 1.2 }}
              animate={{ x: -5 }}
              className="m-5 cajas"
            >
              <h3 className="my-3 nombreCompañero">Lucía Soraire</h3>
              <img
                style={{ width: 200, height: 200 }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9BXvcD0YBRXdZP0UYwxyB0X6UoubLFMrOi_yctgVlb8riYlJN5smt1WhpACG6_YUpS7U&usqp=CAU"
                alt="team1"
              />
              <p className="loremCompañero">
                ¡Hola! Soy Lucía, tengo 24 años, actualmente estoy estudiando la
                carrera de programación en la Universidad Tecnológica Nacional.
                Dos amigos me comentaron que iban a estudiar en Rolling Code y
                no dudé en sumarme con ellos por las buenas referencias que leí
                sobre éste curso y estoy muy feliz de haber tomado esta
                decisión. Durante el cursado pude formalizar el aprendizaje
                ampliando mis conocimientos de desarrollo web.
              </p>
            </motion.div>
          </Col>
          <Col>
            <motion.div
              style={{
                border: "3px outset grey",
                padding: 10,
              }}
              whileHover={{ scale: 1.2 }}
              animate={{ x: 5 }}
              className="m-5 cajas"
            >
              <h3 className="my-3 nombreCompañero">Fernando E. Pérez</h3>
              <img
                style={{ width: 200, height: 200 }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9BXvcD0YBRXdZP0UYwxyB0X6UoubLFMrOi_yctgVlb8riYlJN5smt1WhpACG6_YUpS7U&usqp=CAU"
                alt="team1"
              />
              <p className="loremCompañero">
                Mi nombre es Fernando tengo 39 años y soy miembro de un equipo
                de desarrollo de videojuegos llamado "Last Minute Crew" como
                Game Designer y Level Designer usando motores como Unreal Engine
                y Unity. Siempre me atrajo todo lo relacionado a desarrollo y
                para poder seguir evolucionando decidí emprender la nueva tarea
                de aprender programación, desarrollo web y diseño de
                aplicaciones para que en un futuro esto se convierta en mi
                principal fuente de ingresos. Estoy emocionado de comenzar un
                nuevo viaje de aprendizaje y poder expandir mis limites.
              </p>
            </motion.div>
          </Col>
          <Col>
            <motion.div
              style={{
                border: "3px outset grey",
                padding: 10,
              }}
              whileHover={{ scale: 1.2 }}
              animate={{ x: -5 }}
              className="m-5 cajas"
            >
              <h3 className="my-3 nombreCompañero">Alvaro Ruiz Mejia</h3>

              <img
                style={{ width: 200, height: 200 }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9BXvcD0YBRXdZP0UYwxyB0X6UoubLFMrOi_yctgVlb8riYlJN5smt1WhpACG6_YUpS7U&usqp=CAU"
                alt="team1"
              />
              <p className="loremCompañero">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Blanditiis in odio, cupiditate sapiente dignissimos libero.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Blanditiis in odio, cupiditate sapiente dignissimos libero.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Blanditiis in odio, cupiditate sapiente dignissimos libero.
              </p>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Nosotros;
