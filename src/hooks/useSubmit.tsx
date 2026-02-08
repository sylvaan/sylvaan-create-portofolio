import { useState } from "react"; 

interface Response {
  type: 'success' | 'error';
  message: string;
}

const useSubmit = () => { 
 const [isLoading, setLoading] = useState(false); 
 const [response, setResponse] = useState<Response | null>(null); 

 const submit = async (_url: string, data: any) => { 
   const random = Math.random(); 
   setLoading(true); 
   try { 
     await new Promise((resolve) => setTimeout(resolve, 2000)); 
     if (random < 0.5) { 
       throw new Error("Something went wrong"); 
     } 
     setResponse({ 
       type: "success", 
       message: `Thanks for your submission ${data.firstName}, we will get back to you shortly!`, 
     }); 
   } catch (error) { 
     console.error(error); // Log error to fix unused variable
     setResponse({ 
       type: "error", 
       message: "Something went wrong, please try again later!", 
     }); 
   } finally { 
     setLoading(false); 
   } 
 }; 
 return { isLoading, response, submit }; 
}; 

export default useSubmit;
