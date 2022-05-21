import { NavMain } from "../nav/navmain";
import "./header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

export function Header() {
  return (
    <header className="header">
      <div>
        <NavMain />
      </div>
    </header>
  );
}
