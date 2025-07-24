import React from "react";

interface ScoreAttribute {
  title: string;
  score: number;
  description: string;
  tooltipText?: string;
}

interface ScoreAnalysisSectionProps {
  scoreAttributes: ScoreAttribute[];
}

const ScoreAnalysisSection: React.FC<ScoreAnalysisSectionProps> = ({ scoreAttributes }) => {
  // Filter only the 6 attributes that are required
  const visibleAttributes = scoreAttributes.filter(attr =>
    [
      "Actor Rating",
      "Director Rating",
      "Plot Rating",
      "Budget Score",
      "Overall Sentiment",
      "Audience Popularity",
      "Franchise Score"
    ].includes(attr.title)
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {visibleAttributes.map((attr, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-sm border">
          <div className="text-sm text-gray-500 mb-1">{attr.title}</div>
          <div className="text-3xl font-bold text-gray-800 mb-2">{attr.score}/100</div>
          <div className="text-sm text-gray-600">{attr.description}</div>
        </div>
      ))}
    </div>
  );
};

export default ScoreAnalysisSection;
