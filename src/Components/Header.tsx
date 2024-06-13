import React from "react";
import "./Header.css"
interface HeaderProps {
    subject: string;
    topic: string;
    
  }

  const Header: React.FC<HeaderProps> = ({ subject, topic }) => {
    return (
      <div className="headerWrapper" >
        <h4>{subject}</h4>
       <h4>{topic}</h4>
       
      </div>
    );
  };

export default Header