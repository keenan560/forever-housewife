import React from "react";
import "./About.css";
import summer from "../summer.jpeg";

function About() {
  return (
    <div className="about__container">
      <h1 className="about__title">About Me</h1>
      <div className="about__desc">
        <img alt="headshot" src={summer} className="about__summer" />
        <div className="about__text">
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat
            in fermentum posuere urna nec. Ullamcorper sit amet risus nullam
            eget. Non consectetur a erat nam at lectus urna duis convallis. Nunc
            congue nisi vitae suscipit tellus mauris a diam maecenas. Purus non
            enim praesent elementum facilisis leo vel fringilla. Commodo viverra
            maecenas accumsan lacus vel. Cras ornare arcu dui vivamus. Leo urna
            molestie at elementum eu facilisis sed odio. Leo integer malesuada
            nunc vel risus commodo. Massa id neque aliquam vestibulum morbi
            blandit cursus. Semper feugiat nibh sed pulvinar proin gravida
            hendrerit. Vulputate dignissim suspendisse in est ante in nibh
            mauris. Risus ultricies tristique nulla aliquet enim tortor at. Nec
            feugiat nisl pretium fusce id velit ut.
          </h3>
          <iframe
          className='about__video'
            width="100%"
            height="500px"
            src="https://www.youtube.com/embed/kayOhGRcNt4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div className="about__video__container"></div>
      </div>
    </div>
  );
}

export default About;
