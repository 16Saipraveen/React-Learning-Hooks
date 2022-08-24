import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import Hero from "./Hero";

function HerosWrapper() {
  return (
    <>
      <h1>Error Boundary Tutorial</h1>

        <Hero heroName="SuperMan" />
        <Hero heroName="BatMan" />
        <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary>
    </>
  );
}

export default HerosWrapper;
