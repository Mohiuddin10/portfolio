import { ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-6 px-4 bg-card relative border-t border-border  mt-12 pt-8 flex flex-wrap justify-between items-center">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Mohiuddin, All Rights Reserved.
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary  transition-colors duration-300 animate-bounce"
      >
        {/* <ArrowUp size={20} /> */}
        <img src="/spaceship-preview.png" className="w-5" alt="" />
      </a>
    </footer>
  );
};

export default Footer;
