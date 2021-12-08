import React from "react";

const ResumeFeaturedImage = props => {
    if (!props.img) {
        return null;
    }

    return (
        <div className="resume-image-wrapper">
            <img src={props.img} />
        </div>
    )
}

export default ResumeFeaturedImage;