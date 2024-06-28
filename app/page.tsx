import Type from "@/components/ui/type-writer";
import Home2 from "@/components/Home";

export default function Home() {
  return (
    <div className="home-section" id="home">
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
              <strong className="main-name"> JAGADEESH</strong>
            </h1>
            <div style={{ padding: 45, textAlign: "left" }}>
              <Type />
            </div>
          </div>
        </div>
      </div>
      <Home2 />
    </div>
  );
}
