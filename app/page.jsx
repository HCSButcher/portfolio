import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

//components
import Social from "@/components/Social";
const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full ">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 ">
          <div className="text-center xl:text-left">
            <span className="text-xl"> Software Developer</span>
            <h1 className="h1">
              hello I'm <br /> <span className="text-accent">Trevor Oduol</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80 ">
              I excel at creating elegant digital experience and I am proficient
              in various programming languages and technologies.{" "}
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8 ">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 "
              >
                <span>Download cv</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-8">
                <Social />
              </div>
            </div>
          </div>
          {/*photo */}
          <div>photo</div>
        </div>
      </div>
    </section>
  );
};

export default Home;
