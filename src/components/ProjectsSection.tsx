
 
import FullScreenSection from "./FullScreenSection"; 
import { Box, Heading } from "@chakra-ui/react"; 
import Card from "./Card"; 

const projects = [ 
  { 
    title: "Healthcare Patient Application", 
    description: 
      "A comprehensive platform for managing patient records, appointments, and medical history securely.", 
    getImageSrc: () => "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1240&q=80", 
  }, 
  { 
    title: "HR Inventory System", 
    description: 
      "Internal system for tracking office assets, managing employee assignments, and generating real-time inventory reports.", 
    getImageSrc: () => "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1240&q=80", 
  }, 
  { 
    title: "PL Dashboard Application", 
    description: 
      "Interactive dashboard visualizing Premier League statistics, player performance metrics, and match results.", 
    getImageSrc: () => "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1240&q=80", 
  }, 
  { 
    title: "Basic Database", 
    description: 
      "A custom-built relational database management system supporting SQL-like queries and ACId transactions.", 
    getImageSrc: () => "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1240&q=80", 
  }, 
]; 

const ProjectsSection = () => { 
 return ( 
   <FullScreenSection 
     backgroundColor="#14532d" 
     isDarkBackground 
     p={8} 
     alignItems="flex-start" 
     spacing={8} 
   > 
     <Heading as="h1" id="projects-section"> 
       Featured Projects 
     </Heading> 
     <Box 
       display="grid" 
       gridTemplateColumns={{ base: "1fr", md: "repeat(2,minmax(0,1fr))" }} 
       gridGap={{ base: 4, md: 8 }} 
     > 
       {projects.map((project) => ( 
         <Card 
           key={project.title} 
           title={project.title} 
           description={project.description} 
           imageSrc={project.getImageSrc()} 
         /> 
       ))} 
     </Box> 
   </FullScreenSection> 
 ); 
}; 

export default ProjectsSection;
