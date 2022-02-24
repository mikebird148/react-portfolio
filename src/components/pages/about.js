import React from 'react';
import profilePicture from "../../../static/assets/images/bio/mike_amanda.jpg";

export default function () {
    return (
        <div className="content-page-wrapper">
            <div
                className="left-column"
                style={{
                    background: "url(" + profilePicture + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            />
            <div className="about-description right-column">
                <div>Hello, my name is Mike Bird. This is my portfolio and the beginning of my journey in the world of computer programming.</div>
                <div>I have always loved computers and learning. It was what led me to seek out computer programming. I have been studying computer programming for a few years now. I began by studying HTML and CSS to get my feet wet and gauge my interest in the topic. I quickly learned that I enjoyed the topic very much, and I loved seeing how everything connected and it gave me a greater drive to my continued studies. The majority of my studies have been guided by <a className="about-bottega" href="https://bottega.edu" target={"_blank"}>Bottega University</a>. I completed the full stack program through Bottega in December 2021.</div>
                <div>I have many goals and aspirations in line with my studies. For now I am seeking employment as a web developer to get a greater understanding of the process of development and to learn as much as I can about all the various programming languages and how all the pieces fit together.</div>
            </div>
        </div>
    );
}