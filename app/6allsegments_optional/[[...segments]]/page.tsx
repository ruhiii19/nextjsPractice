import React from "react";

const AllSegmentsOptional = ({
  params,
}: {
  params: { segments: string[] };
}) => {
  const { segments } = params;
  return (
    <div className="flex gap-8">
      All Segments Optional: {segments?.join("/")}
    </div>
  );
};

export default AllSegmentsOptional;
