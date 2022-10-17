import Image from "next/image";
import Link from "next/link";

import profile from "public/hassanrhallab.jpg";
import { Button } from "../Button";
import { MyHeader, MyProfile } from "./styles";
import Social from "../Social";

export default function Header() {
  return (
    <MyHeader>
      <div className="info-container">
        <div className="title-container">
          <h1>
            Hi There! <br /> I&apos;m Hassan Rhallab <br />
          </h1>
          <span>
            A self-taught Front-End React js Developer
          </span>
        </div>
        <div className="buttons-container">
          <Link href="/contact">
            <a>
              <Button>Lets Talk</Button>
            </a>
          </Link>
          <a
            className="resume-link"
            role="button"
            href="https://drive.google.com/file/d/1bVrehyEru1n72cz9stS3_nQydUlZ39tY/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
      <MyProfile>
        <div className="img-wrapper">
          <Image
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            src={profile}
            alt="hassanrhallab"
            className="my-image"
          />
        </div>
        <Social />
      </MyProfile>
    </MyHeader>
  );
}
