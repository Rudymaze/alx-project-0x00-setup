import Card from "@/components/Card";
import React from "react";
import Button from "@/components/Button";

const LandingPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Landing Page</h1>
      <Card />
      <br />
      <Card />
      <br />
      <Card />
      <br />
      <div className="space-y-4">
        <div className="flex gap-4">
          <Button title="Small Rounded-sm" size="small" shape="rounded-sm" />
          <Button title="Small Rounded-md" size="small" shape="rounded-md" />
          <Button title="Small Rounded-full" size="small" shape="rounded-lg" />
        </div>
        <div className="flex gap-4">
          <Button title="Medium Rounded-sm" size="medium" shape="rounded-sm" />
          <Button title="Medium Rounded-md" size="medium" shape="rounded-md" />
          <Button
            title="Medium Rounded-full"
            size="medium"
            shape="rounded-lg"
          />
        </div>
        <div className="flex gap-4">
          <Button title="Large Rounded-sm" size="large" shape="rounded-sm" />
          <Button title="Large Rounded-md" size="large" shape="rounded-md" />
          <Button title="Large Rounded-full" size="large" shape="rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
