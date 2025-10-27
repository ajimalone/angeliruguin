import { useState } from "react";
import { Link } from "react-router-dom";
import { projects, Project } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

const categories = ["All", "E-commerce Branding", "Multimedia Design", "IT/Development"];

const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Work</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of projects spanning development, design, and brand strategy
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="transition-all"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-up">
          {filteredProjects.map((project: Project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium text-secondary">{project.category}</span>
                  <span className="text-xs text-muted-foreground">• {project.year}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm line-clamp-3">{project.summary}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Link to={`/work/${project.id}`} className="w-full">
                  <Button variant="outline" className="w-full">
                    View Case Study
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Work;
