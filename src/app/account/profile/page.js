import React from "react";
import DealCard from "@/app/components/DealCard";

export default function page() {
  const basicFeatures = [
    "Create up to 3 itineraries per month",
    "Access to basic destination guides",
    "Standard customer support (email)",
    "Basic trip planning tools",
    "7-day trip history",
  ];
  return (
    <div>
      page
      <div className="flex gap-[40px]">
        <DealCard tier="basic" features={basicFeatures} price="34" />
        <DealCard tier="premium" features={basicFeatures} price="42" />
        <DealCard tire="pro" features={basicFeatures} price="52" />
        <DealCard features={basicFeatures} price="0" />
      </div>
    </div>
  );
}
