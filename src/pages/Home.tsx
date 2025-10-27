import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Palette, Database } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            Hi, I'm <span className="text-primary">Aji</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            A passionate <span className="text-secondary font-semibold">4th-year BS IT student</span> exploring the
            intersection of technology and design
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            From developing educational games and AR/VR experiences to crafting brand identities and data solutions, I
            bring ideas to life through technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/work">
              <Button variant="hero" size="lg">
                My Projects <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="bg-card py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">What I Do</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6 hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">IT Development</h3>
              <p className="text-muted-foreground">
                Building educational games, AR/VR experiences, and data warehouse solutions that solve real problems.
              </p>
            </div>
            <div className="text-center p-6 hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Palette className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Multimedia Design</h3>
              <p className="text-muted-foreground">
                Creating compelling visuals for brands, esports events, and digital experiences that engage audiences.
              </p>
            </div>
            <div className="text-center p-6 hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Brand Strategy</h3>
              <p className="text-muted-foreground">
                Developing cohesive brand identities and managing digital presence for emerging businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-lg p-12 shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Create Something Amazing</h2>
          <p className="text-lg mb-8 opacity-90">
            I'm always eager to collaborate on innovative projects and bring ideas to life through technology.
          </p>
          <Link to="/contact">
            <Button variant="secondary" size="lg">
              Start a Conversation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
