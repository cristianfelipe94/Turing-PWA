import React from "react";

// Assets like images are relative to the HTML file.
const AvataresImages = [
    {id: 1, src: "./assets/avatares/imgicon1.jpg", description: "Avatar icon 1."},
    {id: 2, src: "./assets/avatares/imgicon2.jpg", description: "Avatar icon 2."},
    {id: 3, src: "./assets/avatares/imgicon3.jpg", description: "Avatar icon 3."},
    {id: 4, src: "./assets/avatares/imgicon4.jpg", description: "Avatar icon 4."}
];

function loadImages () {
    return AvataresImages;
}

export default loadImages;