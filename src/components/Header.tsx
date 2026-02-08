import { useEffect, useRef, useState } from "react"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"; 
import { 
 faGithub, 
 faLinkedin, 
 faMedium, 
 faStackOverflow, 
} from "@fortawesome/free-brands-svg-icons"; 
import { Box, HStack } from "@chakra-ui/react"; 

const socials = [ 
 { 
   icon: faEnvelope, 
   url: "mailto: hello@example.com", 
 }, 
 { 
   icon: faGithub, 
   url: "https://github.com", 
 }, 
 { 
   icon: faLinkedin, 
   url: "https://www.linkedin.com", 
 }, 
 { 
   icon: faMedium, 
   url: "https://medium.com", 
 }, 
 { 
   icon: faStackOverflow, 
   url: "https://stackoverflow.com", 
 }, 
]; 

const Header = () => { 
 const [transform, setTransform] = useState("translateY(0)"); 
 const prevScrollPos = useRef(window.scrollY); 
 const headerRef = useRef<HTMLDivElement>(null);

 useEffect(() => { 
   const handleScroll = () => { 
     const currentScrollPos = window.scrollY; 
     const isScrollingDown = currentScrollPos > prevScrollPos.current; 
     
     if (isScrollingDown && currentScrollPos > 200) { 
       setTransform("translateY(-200px)"); 
     } else { 
       setTransform("translateY(0)"); 
     } 
     
     prevScrollPos.current = currentScrollPos; 
   }; 

   window.addEventListener("scroll", handleScroll); 
   return () => window.removeEventListener("scroll", handleScroll); 
 }, []); 

 const handleClick = (anchor: string) => () => { 
   const id = `${anchor}-section`; 
   const element = document.getElementById(id); 
   if (element) { 
     element.scrollIntoView({ 
       behavior: "smooth", 
       block: "start", 
     }); 
   } 
 }; 

 return ( 
   <Box 
     ref={headerRef} 
     position="fixed" 
     top={0} 
     left={0} 
     right={0} 
     transform={transform} 
     transitionProperty="transform" 
     transitionDuration=".3s" 
     transitionTimingFunction="ease-in-out" 
     backgroundColor="#18181b" 
     zIndex={100}
   > 
     <Box color="white" maxWidth="1280px" margin="0 auto"> 
       <HStack 
         px={{ base: 4, md: 16 }} 
         py={4} 
         justifyContent="space-between" 
         alignItems="center" 
       > 
         <nav> 
           <HStack spacing={{ base: 4, md: 8 }}> 
             {socials.map((social) => ( 
               <a href={social.url} key={social.url} target="_blank" rel="noopener noreferrer"> 
                 <FontAwesomeIcon icon={social.icon} size="2x" /> 
               </a> 
             ))} 
           </HStack> 
         </nav> 
         <nav> 
           <HStack spacing={{ base: 4, md: 8 }}> 
             <a href="/#projects" onClick={handleClick("projects")}> 
               Projects 
             </a> 
             <a href="/#contactme" onClick={handleClick("contactme")}> 
               Contact Me 
             </a> 
           </HStack> 
         </nav> 
       </HStack> 
     </Box> 
   </Box> 
 ); 
}; 
export default Header;
