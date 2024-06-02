import React from "react";
import "./Header.css"
interface HeaderProps {
    subject: string;
    subjectContent: string;
    dificulty: string;
  }

  const Header: React.FC<HeaderProps> = ({ subject, subjectContent, dificulty }) => {
    return (
      <div className="headerWrapper" >
        <h4>{subject}</h4>
       <h4>{subjectContent}</h4>
        <h4>{dificulty}</h4>
      </div>
    );
  };

export default Header