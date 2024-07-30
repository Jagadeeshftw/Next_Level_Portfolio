import Type from "@/components/ui/type-writer";
import Home2 from "@/components/Home";
import { LinkPreview } from "@/components/ui/link-preview";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div
        className="home-section bg-gradient-to-bl from-gradient-start to-gradient-end md:bg-none"
        id="home"
      >
        <div className="home-content container mx-auto">
          <div className="flex flex-col md:flex-row">
            <div className="home-header md:w-9/12 mx-auto text-center md:text-left">
              <h1 className="heading text-5xl font-bold font-Playfair mb-4">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏼
                </span>
              </h1>
              <h1 className="heading-name text-5xl font-extrabold">
                I&apos;M
                <LinkPreview
                  url="https://www.linkedin.com/in/jagadeesh-b-042b38208/"
                  className="font-bold"
                >
                  <strong className="main-name"> JAGADEESH</strong>
                </LinkPreview>{" "}
              </h1>

              <div style={{ padding: 45, textAlign: "left" }}>
                <Type />
              </div>
            </div>
          </div>
        </div>
        <Home2 />
      </div>
      <Footer home={true} />
    </>
  );
}
