import React, { useState, useMemo } from "react";
import ScoreAttributeCard from "./score-attribute-card";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Label,
} from "recharts";

interface ScoreAttribute {
  title: string;
  score: number;
  description: string;
  tooltipText?: string;
}

interface ScoreAnalysisSectionProps {
  scoreAttributes: ScoreAttribute[];
}

const COLORS = [
  "#16a34a", // green
  "#059669",
  "#ca8a04",
  "#ea580c",
  "#dc2626",
  "#6366f1",
  "#f59e0b",
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text
      x={x}
      y={y}
      fill="#fff"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      className="text-xs font-medium"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const ScoreAnalysisSection: React.FC<ScoreAnalysisSectionProps> = ({ scoreAttributes }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const averageScore = useMemo(() => {
    const total = scoreAttributes.reduce((sum, attr) => sum + attr.score, 0);
    return (total / scoreAttributes.length).toFixed(1);
  }, [scoreAttributes]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      {/* Left: Full height selected score card + chart labels */}
      <div className="flex flex-col justify-evenly h-full min-h-[400px]">
        <div className="w-full">
          <ScoreAttributeCard {...scoreAttributes[selectedIndex]} className="w-full" />
        </div>
        <div className="pt-4">
          <ul className="flex flex-wrap gap-3 text-sm text-muted-foreground">
            {scoreAttributes.map((entry, index) => (
              <li
                key={index}
                className={`flex items-center gap-2 px-3 py-1 rounded-full cursor-pointer hover:bg-muted ${index === selectedIndex ? 'bg-muted font-medium' : ''}`}
                onClick={() => setSelectedIndex(index)}
              >
                <span
                  className="inline-block w-3 h-3 rounded-full"
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                ></span>
                {entry.title}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right: Optimized Pie chart size to reduce whitespace */}
      <div className="w-full h-[400px] flex justify-center items-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={scoreAttributes}
              dataKey="score"
              nameKey="title"
              outerRadius={140}
              innerRadius={60}
              isAnimationActive={true}
              onClick={(_, index) => setSelectedIndex(index)}
              label={renderCustomizedLabel}
              labelLine={false}
              cursor="pointer"
            >
              {scoreAttributes.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                  stroke={index === selectedIndex ? "#0f172a" : undefined}
                  strokeWidth={index === selectedIndex ? 3 : 1}
                />
              ))}
              <Label
                value={`Avg: ${averageScore}`}
                position="center"
                fill="#334155"
                className="text-sm font-semibold"
              />
            </Pie>
            <Tooltip
              formatter={(value: number, name: string) => [`${value}/100`, name]}
              contentStyle={{ fontSize: '0.875rem', borderRadius: '6px' }}
              wrapperStyle={{ outline: 'none' }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ScoreAnalysisSection;
