import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import contactPagePicture from "../../../static/assets/images/contact2.png";
import "../../style/contact"

export default function() {
        return (
            <div className="content-page-wrapper">
                <div 
                    className="left-column" 
                    style={{
                        background: "url(" + contactPagePicture + ") no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                />
                <div className="right-column contact-info">
                    <div className="contact-bullet-points">
                        <div className="bullet-point-group">
                            <div className="icon">
                                <FontAwesomeIcon icon="phone-square-alt" />
                            </div>
                            <div className="text">
                                360-853-5297
                            </div>
                        </div>

                        <div className="bullet-point-group">
                            <div className="icon">
                                <FontAwesomeIcon icon="envelope-square" />
                            </div>
                            <div className="text">
                                mikebird148@gmail.com
                            </div>
                        </div>

                        <div className="bullet-point-group">
                            <div className="icon">
                                <FontAwesomeIcon icon="map-marked-alt" />
                            </div>
                            <div className="text">
                                Gold Bar, WA
                            </div>
                        </div>
                        <div className="contact-divs">
                            <a className="fb-icon-a" target="_blank" href="https://www.facebook.com/mikebird148"><FontAwesomeIcon className="contactIcon fbIcon" icon={faFacebook} /></a>
                            <a target="_blank" href="https://www.linkedin.com/in/michael-bird-934a7577"><FontAwesomeIcon className="contactIcon liIcon" icon={faLinkedin} /></a>
                            <a target="_blank" href="https://github.com/mikebird148"><FontAwesomeIcon className="contactIcon ghIcon" icon={faGithub} /></a>
                        </div>
                    </div>
                </div>
            </div>
        );
}