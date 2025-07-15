import Card from "@/components/Card";
import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Landing Page</h1>
      <Card />
      <br />
      <Card />
      <br />
      <Card />
      {/* Add some content here */}
    </div>
  );
};

export default LandingPage;
