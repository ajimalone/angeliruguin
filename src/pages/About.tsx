import { Code, Palette, Users, Zap, Award, GraduationCap, Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const skills = [
    { icon: Code, title: "Technical", items: ["MS Office", "Google Workspace", "Unity", "Godot", "SQL", "AR/VR Development"] },
    { icon: Palette, title: "Creative", items: ["Canva", "Adobe Creative Suite", "Procreate", "Video Editing (CapCut)", "3D Modeling"] },
    { icon: Users, title: "Soft Skills", items: ["Problem-solving", "Communication", "Teamwork", "Adaptability", "Event Management"] },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Information Technology",
      school: "Polytechnic University of the Philippines – San Juan Campus",
      years: "2022 - Present",
      achievements: ["Dean's Lister", "Consistent Pasig City Scholar"],
    },
    {
      degree: "Senior High School – STEM Strand",
      school: "Rizal High School, Pasig City",
      years: "2020 - 2022",
      achievements: ["Graduated With Honors (Grades 11-12)"],
    },
    {
      degree: "Junior High School",
      school: "Sta. Marta Educational Center Inc., Pasig City",
      years: "2016 - 2020",
      achievements: ["Graduated With Honors (Grades 8-10)"],
    },
  ];

  const experience = [
    {
      title: "Co-founder",
      company: "Threap (Online Thrift Store)",
      location: "Pasig",
      period: "January 2024 - Present",
      responsibilities: [
        "Managed social media accounts and online marketing",
        "Edited product photos and handled branding design",
        "Strengthened brand presence through consistent visuals",
      ],
    },
    {
      title: "Technical Member",
      company: "Pylon Esports",
      location: "PUP San Juan",
      period: "September 2024 - March 2025",
      responsibilities: [
        "Supported event logistics for game competitions",
        "Designed digital backdrops for live streaming events",
        "Collaborated with tech teams for smooth execution",
      ],
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A curious mind passionate about the intersection of technology and design
          </p>
        </div>

        {/* Bio */}
        <div className="mb-20 animate-fade-up">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Hi, I'm Angel Jasmin G. Iruguin</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Most people call me <strong className="text-foreground">Aji</strong> — a passionate 4th-year BS
                      Information Technology student from the Polytechnic University of the Philippines – San Juan Campus.
                      As a consistent Pasig City Scholar and Dean's Lister, I've always been driven by curiosity,
                      creativity, and a love for technology that makes a difference.
                    </p>
                    <p>
                      I enjoy exploring the intersection of technology and design, from developing educational 2D games,
                      3D modeling, and interactive AR/VR experiences to working on data systems and warehouse solutions
                      that improve how information is managed and understood. My projects often blend problem-solving and
                      storytelling, reflecting both my technical background and my creative side.
                    </p>
                    <p>
                      Beyond academics, I love collaborating on innovative ideas, managing events, and continuously
                      learning new tools that help me grow as an aspiring IT professional. Whether it's building systems,
                      creating immersive experiences, or experimenting with design, I'm always eager to bring ideas to life
                      through technology.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Award className="w-8 h-8 text-primary" />
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <skillGroup.icon className="w-5 h-5 text-primary" />
                    </div>
                    {skillGroup.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {skillGroup.items.map((item, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Work Experience */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Briefcase className="w-8 h-8 text-primary" />
            Work Experience
          </h2>
          <div className="space-y-6">
            {experience.map((job, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{job.title}</h3>
                      <p className="text-primary font-medium">{job.company}</p>
                      <p className="text-sm text-muted-foreground">{job.location}</p>
                    </div>
                    <span className="text-sm text-muted-foreground mt-2 md:mt-0">{job.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {job.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-primary" />
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold">{edu.degree}</h3>
                      <p className="text-primary font-medium">{edu.school}</p>
                    </div>
                    <span className="text-sm text-muted-foreground mt-2 md:mt-0">{edu.years}</span>
                  </div>
                  <ul className="space-y-1">
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
