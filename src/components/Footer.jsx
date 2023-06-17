import { Container, Row, Col } from 'react-bootstrap'

import logo from '../assets/img/Logo.png'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'

const Footer = ({ languageLines, language }) => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/jeremias-dominguez-vega/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon1} className="image" />
              </a>
              <a
                href="https://www.instagram.com/jere.dvega/?hl=es-la"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon3} className="image" />
              </a>
            </div>
            <p>CopyRight 2023. {languageLines[language].footer.copyright}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer