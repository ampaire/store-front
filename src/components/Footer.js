import React from 'react'
import 'bootstrap-css-only/css/bootstrap.min.css';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './Footer.css';

export default function Footer() {

    return (
        <MDBFooter color="white" className="font-small bg-dark text-white footer-class pt-4 mt-4">
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                    <MDBCol md="6">
                        <h5 className="title">F O R N A | F A S H I O N S</h5>
                        <p>
                           A touch of Africa to your wadrobe.
                        </p>
                    </MDBCol>
                    <MDBCol md="3">
                        <h5 className="title">Features</h5>
                        <ul>
                            <li className="list-unstyled">
                                <a href="#!">About</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Contacts</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Privacy Policy</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Terms & Conditions</a>
                            </li>
                        </ul>
                    </MDBCol>
                    <MDBCol md="3">
                        <h5 className="title">Features</h5>
                        <ul>
                            <li className="list-unstyled">
                                <a href="#!">About</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Contacts</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Privacy Policy</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Terms & Conditions</a>
                            </li>
                        </ul>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: <a href="https://www.linkedin/in/phemia/"> Phemia Ampaire </a>
                </MDBContainer>
            </div>
        </MDBFooter>
    )
}
