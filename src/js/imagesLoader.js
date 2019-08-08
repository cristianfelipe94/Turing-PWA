/* eslint-disable */
import React from 'react';

// Assets like images are relative to the HTML file.
const AvataresImages = [
  { id: 1, src: './assets/avatares/avatar1.png', description: 'Avatar icon girl.' },
  { id: 2, src: './assets/avatares/avatar2.png', description: 'Avatar icon guy.' },
  { id: 3, src: './assets/avatares/avatar3.png', description: 'Avatar icon girl.' },
  { id: 4, src: './assets/avatares/avatar4.png', description: 'Avatar icon guy.' },
  { id: 5, src: './assets/avatares/avatar5.png', description: 'Avatar icon girl.' },
  { id: 6, src: './assets/avatares/avatar6.png', description: 'Avatar icon guy.' },
];

function loadImages() {
  return AvataresImages;
}

export default loadImages;
