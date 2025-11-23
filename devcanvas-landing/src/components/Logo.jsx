import React from 'react';
import logo from '/devcanvas.svg';

export default function Logo() {
  return (
    <div className="flex flex-col items-center">
      <img src={logo} alt="DevCanvas Logo" className="w-16" />
      <h2 className="text-3xl sujoy01 font-semibold mt-3">
        Dev<span className="text-blue-300">Canvas</span>
      </h2>
    </div>
  );
}
