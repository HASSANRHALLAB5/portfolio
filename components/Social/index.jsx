import { Github, Linkedin, Twitter } from "components/icons";

import styled from "styled-components";

const MySocial = styled.div`
  width: 30rem;
  display: flex;
  justify-content: space-around;
  color: white;

  .social-icons {
    fill: currentColor;
  }
`;

export default function Social(props) {
  return (
    <MySocial {...props}>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/hassan-rhallab-ab7a5b1b4/"
      >
        <Linkedin
          width={28}
          height={28}
          alt="twitter"
          className="social-icons"
        />
      </a>
      <a target="_blank" rel="noreferrer" href="https://github.com/HASSANRHALLAB5">
        <Github width={28} height={28} alt="twitter" className="social-icons" />
      </a>
      <a target="_blank" rel="noreferrer" href="https://twitter.com/@RHALLABHASSAN5">
        <Twitter
          width={28}
          height={28}
          alt="twitter"
          className="social-icons"
        />
      </a>
    </MySocial>
  );
}
