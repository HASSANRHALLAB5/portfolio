import SEO from "components/SEO";
import About from "components/About";

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About"
        description="Hi there! I’m Hassan Rhallab a Front-End React js developer,I love solving real-life problems with software"
        image="/homeFrame.png"
      />
      <About />
    </>
  );
}
