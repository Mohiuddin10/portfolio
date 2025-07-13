import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Smile Care Dental",
    description:
      "A dental clinic website offering information about services, appointment booking, and patient resources.",
    image: "/projects/SmileCare.png",
    tags: ["Figma"],
    demoUrl:
      "https://www.figma.com/design/4kCbzWIFMuhjl1x5IztCuz/Smile-care-center?node-id=1-87&t=ZgPad9UTShvQhIFe-1",
  },
  {
    id: 2,
    title: "Tech Blogs",
    description:
      "A blogging platform for tech enthusiasts to share and discuss articles.",
    image: "/projects/project 2.png",
    tags: ["React", "Node.js", "MongoDB"],
    demoUrl: "https://fluffy-shortbread-0d9433.netlify.app/",
    githubUrl: "https://github.com/Mohiuddin10/sys-blaze-client",
  },
  {
    id: 3,
    title: "Truck Delivery App",
    description: "A web application to manage truck deliveries and logistics.",
    image: "/projects/project 3.png",
    tags: ["React", "Node.js", "MongoDB"],
    demoUrl: "https://mandmtrading-7745d.web.app/",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Movie App",
    description: "A web application to manage movie listings and reviews.",
    image: "/projects/MovieTicket.png",
    tags: ["figma"],
    demoUrl:
      "https://www.figma.com/design/FW5XbvPX7ALgNAOCbeBLaZ/Movie?node-id=1-2&t=ZgPad9UTShvQhIFe-1",
  },
  {
    id: 5,
    title: "MIM FITNESS GYM",
    description: "A web application to manage gym memberships and workouts.",
    image: "/projects/mim.png",
    tags: ["html", "css", "netlify"],
    demoUrl: "https://mim-fitness-gym.netlify.app/",
    githubUrl: "https://github.com/Mohiuddin10/mim-fitness-gym/tree/main",
  },
  {
    id: 6,
    title: "Weather App",
    description: "A web application to display weather information.",
    image: "/projects/weather.png",
    tags: ["html", "css", "netlify"],
    demoUrl: "https://weather-site-api.netlify.app/",
    githubUrl: "https://github.com/Mohiuddin10/weather-check",
  },
];

const ProjectsSections = () => {
  return (
    <div id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs font-medium bg-primary/20 text-secondary-foreground px-2 py-1 rounded-full border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://github.com/Mohiuddin10"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSections;
