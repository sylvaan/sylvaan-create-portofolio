import {createContext, useState} from "react"; 
import type {ReactNode, JSX} from "react"; 

interface AlertState {
  isOpen: boolean;
  type: 'success' | 'error' | string;
  message: string;
}

interface AlertContextType extends AlertState {
  onOpen: (type: string, message: string) => void;
  onClose: () => void;
}

export const AlertContext = createContext<AlertContextType | undefined>(undefined); 

export const AlertProvider = ({ children }: { children: ReactNode }): JSX.Element => { 
 const [state, setState] = useState<AlertState>({ 
   isOpen: false, 
   type: 'success', 
   message: '', 
 }); 

 return ( 
   <AlertContext.Provider 
     value={{ 
       ...state, 
       onOpen: (type, message) => setState({ isOpen: true, type, message }), 
       onClose: () => setState({ isOpen: false, type: '', message: '' }), 
     }} 
   > 
     {children} 
   </AlertContext.Provider> 
 ); 
};
