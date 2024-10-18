import React from 'react';
import Project from './Project';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects">
      <h3>Projects</h3>
      <Project 
        title="Image Processor" 
        description="This project showcases custom and OpenCV-based image processing techniques, applying filters like grayscale, blur, reflection, and edge detection to images. It highlights the differences between manual implementations using matplotlib and numpy versus the efficiency of OpenCV, providing insights into image manipulation with kernels."
        link="https://github.com/bhavyap1010/Image-Processor" 
      />
      <Project 
        title="Clothing Classifier Comparison" 
        description="This project compares two popular deep learning frameworks, PyTorch and TensorFlow, by building a basic image classifier for the Fashion MNIST dataset. The focus is on illustrating their usage, syntax differences, and performance during training."
        link="https://github.com/bhavyap1010/Clothing-Class" 
      />
      <Project 
        title="Energy Consumption Tracker" 
        description="An Energy Consumption Tracker web application that allows users to log energy usage of their appliances. Features include user levels based on total energy consumption, a dark mode toggle, and data visualization of logged energy consumption."
        link="https://github.com/bhavyap1010/Energy-Consumption-App" 
      />
    </section>
  );
}

export default Projects;