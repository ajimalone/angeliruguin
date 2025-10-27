import { useParams, Link, Navigate } from "react-router-dom";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import ReactMarkdown from "react-markdown";

const CaseStudy = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Back Button */}
        <Link to="/work" className="inline-block mb-8">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft size={16} /> Back to Work
          </Button>
        </Link>

        {/* Project Header */}
        <div className="mb-12 animate-fade-up">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="secondary">{project.category}</Badge>
            <span className="text-muted-foreground">{project.year}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-muted-foreground">{project.summary}</p>
        </div>

        {/* Project Image */}
        <div className="aspect-video bg-muted rounded-lg mb-12 overflow-hidden">
          <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" />
        </div>

        {/* Technologies */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Case Study Content */}
        <div className="prose prose-slate max-w-none">
          <ReactMarkdown
            components={{
              h2: ({ children }) => <h2 className="text-2xl font-semibold mt-8 mb-4">{children}</h2>,
              h3: ({ children }) => <h3 className="text-xl font-semibold mt-6 mb-3">{children}</h3>,
              p: ({ children }) => <p className="text-muted-foreground mb-4 leading-relaxed">{children}</p>,
              ul: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>,
              ol: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>,
              li: ({ children }) => <li className="text-muted-foreground">{children}</li>,
            }}
          >
            {project.caseStudy}
          </ReactMarkdown>
        </div>

        {/* Navigation */}
        <div className="mt-16 pt-8 border-t border-border">
          <Link to="/work">
            <Button variant="default">
              <ArrowLeft size={16} className="mr-2" /> View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
