type RingProgressProps = {
  percentage: number; // 0 to 100
  size?: number; // SVG size (default: 80)
  strokeWidth?: number; // Stroke width (default: 8)
  colorClass?: string; // Tailwind color class (default: text-blue-500)
};

export default function RingProgress({
  percentage,
  size = 80,
  strokeWidth = 8,
  colorClass = 'text-blue-500',
}: RingProgressProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - percentage / 100);

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg
        className="rotate-[-90deg]"
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
      >
        <circle
          className="text-gray-300"
          strokeWidth={strokeWidth}
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          className={colorClass}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className={`text-sm font-semibold ${colorClass}`}>
          {Math.round(percentage)}%
        </span>
      </div>
    </div>
  );
}
