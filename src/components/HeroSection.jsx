import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 md:px-4">
        <div className="">
          <img
            src="/Sujon.jpg"
            className="max-w-sm max-h-sm object-cover rounded-full shadow-xl/30 drop-shadow-2xl hover:scale-105 outline-2 outline-offset-4 transition-transform duration-500 opacity-60 hover:opacity-80 animate-float"
            alt="Profile_image"
          />
        </div>

        {/* details  */}

        <div className="container max-w-4xl mx-auto text-center z-10">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="opacity-0 animate-fade-in">Hi, I'm</span>
              <span className="opacity-0 text-primary animate-fade-in-delay-1">
                {" "}
                Mohammad
              </span>
              <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                {" "}
                Mohiuddin
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-forground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
              a passionate Front-End Developer crafting responsive,
              user-friendly web experiences with React, Next.js, and modern web
              technologies.
            </p>
            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
              <a href="#projects" className="cosmic-button">
                View my Work
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
