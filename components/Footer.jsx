import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-800 to-blue-900 text-white dark:from-gray-900 dark:to-blue-950 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/*  Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3">Sanskrithi School of Engineering</h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Empowering future engineers with knowledge, skills, and values since 2010.
          </p>

          {/*  Contact Info */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 mt-8">
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                <span>
                  Beedupalli Knowledgepark, Behind SSSIHMS, Puttaparthi,<br />
                  Sri Sathya Sai District, AP - 515134
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-white" />
                <span>+91 9100064545 / 74545</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-white" />
                <span>enquiry@sseptp.org</span>
              </div>
            </div>
          </div>
        </div>

        {/* Department Contacts */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              title: "Head of Department",
              email: "hod@sseptp.org",
              phone: "+91 9100064545",
              location: "Admin Block"
            },
            {
              title: "Class Advisor",
              email: "advisor@sseptp.org",
              phone: "+91 74545",
              location: "Faculty Block"
            },
            {
              title: "Human Resources",
              email: "hr@sseptp.org",
              phone: "+91 9100064545",
              location: "HR Block"
            }
          ].map((dept, idx) => (
            <div key={idx} className="bg-white/5 rounded-lg p-6 text-center space-y-4">
              <h3 className="text-xl font-bold text-white mb-2">{dept.title}</h3>
              <div className="flex justify-center items-center gap-2">
                <Mail className="w-5 h-5 text-white/80" />
                <span>{dept.email}</span>
              </div>
              <div className="flex justify-center items-center gap-2">
                <Phone className="w-5 h-5 text-white/80" />
                <span>{dept.phone}</span>
              </div>
              <div className="flex justify-center items-center gap-2">
                <MapPin className="w-5 h-5 text-white/80" />
                <span>{dept.location}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Social Media */}
<div className="text-center mb-8">
  <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
  <div className="flex justify-center gap-4">
    {[
      { icon: Instagram, url: "https://www.instagram.com/sanskrithigroup_ptp/?hl=en" },
      { icon: Facebook, url: "https://www.facebook.com/sseptp/" },
      { icon: Twitter, url: "https://x.com/SanskrithiGroup" },
      { icon: Linkedin, url: "https://www.linkedin.com/in/sgiputtaparthi/" }
    ].map(({ icon: Icon, url }, i) => (
      <a
        key={i}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white/10 hover:bg-gray-600/30 transition duration-300 ease-in-out rounded-full p-3"
        aria-label={`Social link ${i}`}
      >
        <Icon className="w-7 h-7 text-white" />
      </a>
    ))}
  </div>
 </div>


        {/* Footer  */}
        <div className="border-t border-white/20 pt-6 text-center">
          <p className="text-white/90 text-lg mb-2">
            For any queries, problems, or future information, please contact the respective departments above.
          </p>
          <p className="text-white/70 text-sm">
            © {new Date().getFullYear()} Sanskrithi School of Engineering. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;