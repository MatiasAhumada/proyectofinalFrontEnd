import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { motion } from "framer-motion";
import { BrowserView, MobileView } from "react-device-detect";
import "../../css/nosotros.css";

const Nosotros = () => {
  return (
    <>
    <BrowserView>
      <div className="nosotros m-4 my-5">
        <motion.div>
          <motion.h2
            
            transition={{ delay: 0.1 }}
            className="text-center my-3 titulo"
          >
            Sobre Nosotros
          </motion.h2>
          <motion.h3
          
            transition={{ delay: 0.1 }}
            className="text-center my-2 titulo"
          >
            ¿Quiénes Somos?
          </motion.h3>
        </motion.div>

        <hr />
        <Container>
          <Row>
            <Col>
              <motion.div
                style={{
                  padding: 10,
                }}
                whileHover={{ scale: 1.03 }}
                animate={{ x: -5 }}
                className="m-5 cajas"
              >
                <h3 className="my-3 nombreCompañero">Alvaro Ruiz Mejias</h3>

                <img
                  src="/img/alvarooAvatar.png"
                  style={{ width: 100, height: 100 }}
                  alt="team1"
                />
                <p className="loremCompañero">
                  Hola, soy Alvaro tengo 27 años, actualmente trabajo como
                  encargado en un drugstore, un amigo me recomendó RollingCode
                  para empezar a estudiar programación y es increíble las cosas
                  que voy aprendiendo hasta el día de hoy, en un futuro espero
                  ser un programador profesional.
                </p>
              </motion.div>
            </Col>
            <Col sm={12} md={4} lg={6}>
              <motion.div
                style={{
                  padding: 10,
                }}
                whileHover={{ scale: 1.03 }}
                animate={{ x: 5 }}
                className="m-5 cajas"
              >
                <h3 className="my-3 nombreCompañero">Thomás Jerez</h3>

                <img
                  style={{ width: 100, height: 100 }}
                  src="/img/tomasAvatar.png"

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
            <Col sm={12} md={4} lg={6}>
              <motion.div
                style={{
                  padding: 10,
                }}
                whileHover={{ scale: 1.03 }}
                animate={{ x: 5 }}
                className="m-5 cajas"
              >
                <h3 className="my-3 nombreCompañero">Matías Ahumada</h3>

                <img
                  style={{ width: 100, height: 100 }}
                  src="/img/matiasAvatarSinFondo.png"

                  alt="team1"
                />
                <p className="loremCompañero">
                ¡Hola! Me llamo Matias, tengo 22 años, soy tecnico de
                  celulares y progranador Full Stack. Trabajo de forma
                  independiente arbitrando con criptoactivos. La informática
                  siempre fue mi mayor aficion. Por ello decidí ingresar a
                  RollingCode, para adquirir nuevas habilidades y probarme a mí
                  mismo en un nuevo desafío.
                </p>
              </motion.div>
            </Col>
            <Col sm={12} md={4} lg={6}>
              <motion.div
                style={{
                  padding: 10,
                }}
                whileHover={{ scale: 1.03}}
                animate={{ x: -5 }}
                className="m-5 cajas"
              >
                <h3 className="my-3 nombreCompañero">Lucía Soraire</h3>
                <img
                  style={{ width: 100, height: 100 }}
                  src="/img/luciaAvatar.png"
                  alt="team1"
                />
                <p className="loremCompañero">
                  ¡Hola! Soy Lucía, tengo 24 años, actualmente estoy estudiando
                  la carrera de programación en la Universidad Tecnológica
                  Nacional. Dos amigos me comentaron que iban a estudiar en
                  Rolling Code y no dudé en sumarme con ellos por las buenas
                  referencias que leí sobre éste curso y estoy muy feliz de
                  haber tomado esta decisión. Durante el cursado pude formalizar
                  el aprendizaje ampliando mis conocimientos de desarrollo web.
                </p>
              </motion.div>
            </Col>
            <Col sm={12} md={4} lg={6}>
              <motion.div
                style={{
                  padding: 10,
                }}
                whileHover={{ scale: 1.03 }}
                animate={{ x: 5 }}
                className="m-5 cajas"
              >
                <h3 className="my-3 nombreCompañero">Fernando E. Pérez</h3>
                <img
                  style={{ width: 100, height: 100 }}
                  src="/img/fernandoAvatar.png"
                  alt="team1"
                />
                <p className="loremCompañero">
                  Mi nombre es Fernando tengo 39 años y soy miembro de un equipo
                  de desarrollo de videojuegos llamado "Last Minute Crew" como
                  Game Designer y Level Designer usando motores como Unreal
                  Engine y Unity. Siempre me atrajo todo lo relacionado a
                  desarrollo y para poder seguir evolucionando decidí emprender
                  la nueva tarea de aprender programación, desarrollo web y
                  diseño de aplicaciones para que en un futuro esto se convierta
                  en mi principal fuente de ingresos. Estoy emocionado de
                  comenzar un nuevo viaje de aprendizaje y poder expandir mis
                  limites.
                </p>
              </motion.div>
            </Col>
           
          </Row>
        </Container>
      </div>
    </BrowserView>
    <MobileView>
    <div style={{ height: "10vh" }}>
          <h2
            className="text-center my-3 titulo"
          >
            Sobre Nosotros
          </h2>
          <h3
            className="text-center my-2 titulo"
          >
            Quienes Somos?
          </h3>
        <hr />
        <Container>
          <Row>
            <Col>
              <div
                style={{
                  padding: 10,
                }}
                className="m-5 cajas"
              >
                <h3 className="my-3 nombreCompañero">Alvaro Ruiz Mejias</h3>

                <img
                  style={{ width: 100, height: 100 }}
                  src="/img/alvarooAvatar.png"
                  alt="team1"
                />
                <p className="loremCompañero">
                  Hola, soy Alvaro tengo 27 años, actualmente trabajo como
                  encargado en un drugstore, un amigo me recomendó RollingCode
                  para empezar a estudiar programación y es increíble las cosas
                  que voy aprendiendo hasta el día de hoy, en un futuro espero
                  ser un programador profesional.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4} lg={6}>
              <div
                style={{
                  padding: 10,
                }}
                className="m-5 cajas"
              >
                <h3 className="my-3 nombreCompañero">Thomás Jerez</h3>

                <img
                  style={{ width: 100, height: 100 }}
                  src="/img/tomasAvatar.png"
                  alt="team1"
                />
                <p className="loremCompañero" style={{ color: 'red' }}>
                  Mi nombre es Thomás tengo 24 años, despues de 3 años en la
                  carrera de abogacía descubrí lo que es el mundo de la
                  programación, un amigo me conto sobre Rolling Code, empecé a
                  investigar y como siempre me llamó la atención la informática
                  decidó probar; actualmente la programación es lo que mas me
                  gusta asi que espero poder dedicarme a esto en un fututo al
                  100%.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4} lg={6}>
              <div
                style={{
                  padding: 10,
                }}
                className="m-5 cajas"
              >
                <h3 className="my-3 nombreCompañero">Lucía Soraire</h3>
                <img
                  style={{ width: 100, height: 100 }}
                  src="/img/luciaAvatar.png"
                  alt="team1"
                />
                <p className="loremCompañero">
                  ¡Hola! Soy Lucía, tengo 24 años, actualmente estoy estudiando
                  la carrera de programación en la Universidad Tecnológica
                  Nacional. Dos amigos me comentaron que iban a estudiar en
                  Rolling Code y no dudé en sumarme con ellos por las buenas
                  referencias que leí sobre éste curso y estoy muy feliz de
                  haber tomado esta decisión. Durante el cursado pude formalizar
                  el aprendizaje ampliando mis conocimientos de desarrollo web.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4} lg={6}>
              <div
                style={{
                  padding: 10,
                }}
                className="m-5 cajas"
              >
                <h3 className="my-3 nombreCompañero">Fernando E. Pérez</h3>
                <img
                  style={{ width: 100, height: 100 }}
                  src="/img/fernandoAvatar.png"
                  alt="team1"
                />
                <p className="loremCompañero">
                  Mi nombre es Fernando tengo 39 años y soy miembro de un equipo
                  de desarrollo de videojuegos llamado "Last Minute Crew" como
                  Game Designer y Level Designer usando motores como Unreal
                  Engine y Unity. Siempre me atrajo todo lo relacionado a
                  desarrollo y para poder seguir evolucionando decidí emprender
                  la nueva tarea de aprender programación, desarrollo web y
                  diseño de aplicaciones para que en un futuro esto se convierta
                  en mi principal fuente de ingresos. Estoy emocionado de
                  comenzar un nuevo viaje de aprendizaje y poder expandir mis
                  limites.
                </p>
              </div>
            </Col>
            
          </Row>
        </Container>
      </div>
    </MobileView>
    </>
  );
};

export default Nosotros;
