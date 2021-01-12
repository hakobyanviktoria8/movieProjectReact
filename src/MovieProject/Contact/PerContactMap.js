import React from "react";
import { Container, Row, Col } from 'reactstrap';

export function PerContactMap(props) {
    return(
        <Container>
            <Row className={"PerContactMap"}>
                <Col  xs="12" sm="12" md="6" lg="6" xl="6" className={"PerContact"}>
                    <div className={"my-3"}>
                        <img src={require("./img/phone.png")} alt=""/>
                        <p className={"pl-4"}>094-33-35-18</p>
                    </div>
                    <div className={"my-3"}>
                        <img src={require("./img/address.png")} alt=""/>
                        <p className={"pl-4"}>25 apt. 1b. S. Taronts  Shengavit Yerevan Armenia</p>
                    </div>
                    <div className={"my-3"}>
                        <img src={require("./img/email.png")} alt=""/>
                        <p className={"pl-4"}>hakobyanviktoria8@gmail.com</p>
                    </div>
                </Col>
                <Col  xs="12" sm="12" md="6" lg="6" xl="6" className={"Map"}>
                    <iframe
                        title={+(new Date())+""}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48804.95759785306!2d44.43069647459116!3d40.135381296717846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abeb8af1e1d1b%3A0x7adae8c0b72623f6!2sShengavit%2C%20Yerevan%2C%20Armenia!5e0!3m2!1sen!2s!4v1610128592538!5m2!1sen!2s"
                        width="100%"
                        // height="300"
                        frameBorder="0"
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0">
                    </iframe>
                </Col>
            </Row>
        </Container>
    )
}