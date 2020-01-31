import React from "react";
import { Link } from "react-router-dom";

const Places: React.FC = () => {
  return (
    <div>
      <ul>
        <li><Link to="/crucible">Cruicible</Link></li>
        <ul>
          <li><Link to="/arandor">Arandor</Link></li>
          <ul>
            <li><Link to="/blackport">Blackport</Link></li>
          </ul>
        </ul>
      </ul>
    </div>
  );
};

export default Places;
