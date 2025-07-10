import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const ContactSection = () => {
  return (
    <div id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="conatainer mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 ">
                  <Mail className="h-6 w-6 text-foreground hover:text-primary transition-colors duration-300" />
                </div>
                <div className="">
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:sj.ctg6737@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    sj.ctg6737@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 ">
                  <Phone className="h-6 w-6 text-foreground hover:text-primary transition-colors duration-300" />
                </div>
                <div className="">
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+8801711261435"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +8801711-261435
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 ">
                  <MapPin className="h-6 w-6 text-foreground hover:text-primary transition-colors duration-300" />
                </div>
                <div className="">
                  <h4 className="font-medium">Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Asadgonj, Chittagong, Bangladesh
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8 ">
              <h4 className="font-medium mb-4 ">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/mohiuddin-ctg/"
                  target="_blank"
                >
                  <Linkedin />
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/msujonctg21/"
                >
                  <Instagram />
                </a>
                <a target="_blank" href="https://www.facebook.com/SJ.ctg/">
                  <Facebook />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
