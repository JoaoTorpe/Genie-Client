import React from "react";
import "./Header.css"
interface HeaderProps {
    subject: string;
    subjectContent: string;
    difficulty: string;
  }

  const Header: React.FC<HeaderProps> = ({ subject, subjectContent, difficulty: difficulty }) => {
    return (
      <div className="headerWrapper" >
        <h4>{subject}</h4>
       <h4>{subjectContent}</h4>
        <h4>{difficulty}</h4>
      </div>
    );
  };

export default Header