import threapImg from "@/assets/threap-project.jpg";
import esportsImg from "@/assets/esports-project.jpg";
import gameImg from "@/assets/game-project.jpg";
import arvrImg from "@/assets/arvr-project.jpg";
import dataImg from "@/assets/data-project.jpg";

export interface Project {
  id: string;
  title: string;
  category: "E-commerce Branding" | "Multimedia Design" | "IT/Development";
  thumbnail: string;
  summary: string;
  technologies: string[];
  caseStudy: string;
  year: string;
}

export const projects: Project[] = [
  {
    id: "threap-thrift-store",
    title: "Threap - Online Thrift Store",
    category: "E-commerce Branding",
    thumbnail: threapImg,
    summary: "Complete brand identity and digital presence for an online thrift store, including logo design, social media management, and visual marketing.",
    technologies: ["Canva", "Adobe Creative Suite", "Social Media Marketing"],
    year: "2024",
    caseStudy: `
## Project Overview
Threap is an online thrift store based in Pasig that I co-founded in January 2024. As the creative force behind the brand, I was responsible for crafting the complete visual identity and managing the digital presence.

## Challenge
The challenge was to create a compelling brand identity that would stand out in the crowded online thrift store market while maintaining a professional and trustworthy appearance that would appeal to conscious consumers.

## My Role
- **Brand Design**: Created the complete visual identity including logo, color palette, and design guidelines
- **Social Media Management**: Managed all social media accounts and developed content strategy
- **Product Photography**: Edited product photos to maintain consistent visual quality
- **Marketing**: Developed and executed online marketing campaigns

## Solutions Implemented
1. **Visual Identity**: Designed a modern, clean logo that represents sustainability and style
2. **Content Strategy**: Developed a consistent posting schedule with engaging content
3. **Photo Editing**: Established a uniform editing style for all product images
4. **Brand Voice**: Created messaging that resonates with eco-conscious shoppers

## Results
- Successfully established a recognizable brand presence
- Grew social media following organically through consistent, quality content
- Strengthened customer engagement through cohesive visual storytelling
- Built a loyal customer base through authentic brand communication

## Key Learnings
This project taught me the importance of maintaining brand consistency across all touchpoints and how visual design directly impacts customer trust and engagement in e-commerce.
    `,
  },
  {
    id: "pylon-esports-design",
    title: "Pylon Esports Event Design",
    category: "Multimedia Design",
    thumbnail: esportsImg,
    summary: "Digital backdrop designs and visual assets for esports competitions and live streaming events at PUP San Juan.",
    technologies: ["Adobe Creative Suite", "Canva", "Live Streaming Graphics"],
    year: "2024-2025",
    caseStudy: `
## Project Overview
As a Technical Member of Pylon Esports at PUP San Juan, I was responsible for creating digital backdrops and visual assets for various esports events, including game competitions and watch parties.

## Challenge
The challenge was to create dynamic, eye-catching designs that would enhance the viewing experience for live streams while maintaining brand consistency and working within tight event timelines.

## My Role
- **Visual Design**: Created digital backdrops for live streaming events
- **Brand Consistency**: Ensured all designs aligned with Pylon Esports branding
- **Event Support**: Provided technical and creative support during live events
- **Collaboration**: Worked with tech teams to ensure smooth integration of designs

## Design Process
1. **Event Brief**: Collaborated with event organizers to understand requirements
2. **Concept Development**: Created initial design concepts and mood boards
3. **Design Execution**: Developed final designs optimized for streaming
4. **Technical Integration**: Worked with streaming team for seamless implementation

## Technical Considerations
- Designed graphics optimized for 1920x1080 streaming resolution
- Ensured text readability on various devices and screen sizes
- Created modular design elements for quick customization
- Maintained brand guidelines while adapting to different game aesthetics

## Impact
- Enhanced professional appearance of esports events
- Increased viewer engagement through visually appealing broadcasts
- Streamlined design workflow for recurring events
- Contributed to building Pylon Esports' visual identity

## Skills Developed
This experience strengthened my ability to work under pressure, collaborate with technical teams, and create designs that serve both aesthetic and functional purposes in live production environments.
    `,
  },
  {
    id: "educational-2d-game",
    title: "Educational 2D Game Development",
    category: "IT/Development",
    thumbnail: gameImg,
    summary: "Development of an interactive 2D educational game using Godot game engine to enhance learning through gamification.",
    technologies: ["Godot", "GDScript", "Game Design", "UI/UX"],
    year: "2024",
    caseStudy: `
## Project Overview
Developed an educational 2D game designed to make learning more engaging and interactive through gamification principles. The project demonstrates the intersection of education and technology.

## Objective
Create an accessible, fun, and educational gaming experience that helps students learn core concepts through interactive gameplay mechanics.

## Technical Implementation
- **Game Engine**: Used Godot Engine for its flexibility and ease of use
- **Programming**: Implemented game logic using GDScript
- **Level Design**: Created progressive difficulty levels to maintain engagement
- **UI/UX**: Designed intuitive user interface suitable for students

## Key Features
1. **Interactive Learning**: Engaging gameplay that reinforces educational concepts
2. **Progress Tracking**: System to monitor and display learning progress
3. **Adaptive Difficulty**: Adjusts challenge based on player performance
4. **Visual Feedback**: Clear indicators for correct/incorrect answers

## Development Challenges
- Balancing educational content with entertaining gameplay
- Ensuring accessibility for different skill levels
- Optimizing performance for various devices
- Creating engaging visuals with limited resources

## Technical Skills Applied
- Game development fundamentals
- Object-oriented programming in GDScript
- Scene management and state machines
- User interface design and implementation

## Outcomes
- Successfully created a functional educational game prototype
- Gained practical experience in game development workflow
- Learned to balance educational goals with engaging gameplay
- Developed problem-solving skills in interactive media

## Future Enhancements
Plans include adding more levels, implementing multiplayer features, and expanding educational content across different subjects.
    `,
  },
  {
    id: "ar-vr-experience",
    title: "AR/VR Interactive Experience",
    category: "IT/Development",
    thumbnail: arvrImg,
    summary: "Development of immersive augmented and virtual reality experiences exploring the potential of spatial computing in education.",
    technologies: ["Unity", "AR Foundation", "3D Modeling", "Blender"],
    year: "2024",
    caseStudy: `
## Project Overview
Explored the development of augmented and virtual reality experiences to understand how spatial computing can transform educational and interactive experiences.

## Vision
To create immersive experiences that demonstrate the potential of AR/VR technology in making abstract concepts more tangible and engaging.

## Technical Stack
- **Unity**: Primary development platform for AR/VR
- **AR Foundation**: For cross-platform AR development
- **Blender**: 3D asset creation and modeling
- **C#**: Scripting and interaction logic

## Development Areas
1. **AR Components**: Object recognition and tracking
2. **VR Interactions**: Immersive environment exploration
3. **3D Assets**: Custom models optimized for real-time rendering
4. **User Interface**: Spatial UI design for 3D environments

## Key Learnings
- Spatial computing principles and best practices
- Performance optimization for mobile AR
- User experience design in 3D space
- 3D modeling and asset optimization

## Technical Challenges Addressed
- Managing performance constraints on mobile devices
- Creating intuitive spatial interactions
- Ensuring comfortable VR experiences (avoiding motion sickness)
- Optimizing 3D assets for real-time rendering

## Applications Explored
- Educational visualization of complex concepts
- Interactive training simulations
- Virtual tours and experiences
- Gamified learning environments

## Skills Developed
- AR/VR development workflows
- 3D modeling and texturing
- Spatial UI/UX design
- Cross-platform development

## Future Direction
Continuing to explore how AR/VR can be applied to solve real-world problems, particularly in education, training, and accessibility.
    `,
  },
  {
    id: "data-warehouse-solution",
    title: "Data Warehouse Management System",
    category: "IT/Development",
    thumbnail: dataImg,
    summary: "Design and implementation of data warehouse solutions for improved information management and business intelligence.",
    technologies: ["SQL", "Database Design", "ETL", "Data Modeling"],
    year: "2024",
    caseStudy: `
## Project Overview
Designed and implemented data warehouse solutions focused on improving how information is organized, stored, and analyzed for better decision-making.

## Objective
Create efficient data management systems that transform raw data into meaningful insights through proper structure and organization.

## Technical Approach
- **Data Modeling**: Designed dimensional models for optimized querying
- **ETL Processes**: Implemented data extraction, transformation, and loading workflows
- **Database Design**: Created normalized and denormalized structures as needed
- **Query Optimization**: Developed efficient SQL queries for reporting

## Key Components
1. **Data Architecture**: Structured approach to data organization
2. **Integration Layer**: Connected multiple data sources
3. **Transformation Logic**: Cleaned and standardized data
4. **Reporting Interface**: User-friendly data access and visualization

## Technical Challenges
- Handling data from multiple disparate sources
- Ensuring data quality and consistency
- Optimizing query performance for large datasets
- Designing scalable architecture for future growth

## Solutions Implemented
- Implemented star schema for dimensional modeling
- Created automated ETL pipelines
- Developed data quality validation checks
- Designed indexing strategies for query optimization

## Skills Applied
- Advanced SQL and database concepts
- Data modeling and normalization
- ETL design and implementation
- Performance tuning and optimization

## Impact
- Improved data accessibility for stakeholders
- Reduced time needed for reporting and analysis
- Enhanced data quality and consistency
- Provided foundation for business intelligence initiatives

## Learning Outcomes
This project deepened my understanding of data architecture, the importance of proper data modeling, and how well-designed systems can dramatically improve organizational efficiency.

## Future Enhancements
Exploring integration with modern data stack tools, implementing real-time data processing, and adding advanced analytics capabilities.
    `,
  },
];
