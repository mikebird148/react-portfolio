import React from 'react';
import profilePicture from "../../../static/assets/images/bio/mike_amanda.jpg";

export default function() {
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
                <div className="right-column">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer. Mauris commodo quis imperdiet massa tincidunt nunc. In mollis nunc sed id. In fermentum posuere urna nec tincidunt praesent. Elementum curabitur vitae nunc sed velit dignissim sodales ut eu. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu. In nulla posuere sollicitudin aliquam. Neque laoreet suspendisse interdum consectetur libero id faucibus. Interdum consectetur libero id faucibus nisl tincidunt eget. Nec feugiat in fermentum posuere urna nec tincidunt praesent. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Nunc scelerisque viverra mauris in aliquam sem fringilla ut. Eu facilisis sed odio morbi quis. Nulla facilisi cras fermentum odio eu feugiat pretium. Amet cursus sit amet dictum sit amet justo donec. Morbi quis commodo odio aenean sed adipiscing diam donec. Praesent tristique magna sit amet. Arcu non sodales neque sodales ut etiam sit amet nisl. Sodales neque sodales ut etiam sit amet nisl.
                </div>
            </div>
        );
}