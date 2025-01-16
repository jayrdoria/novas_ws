// src/components/home/AnimatedCounter.tsx
import React, { useState, useEffect } from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { Code, Globe, UserCheck, Award } from "lucide-react";

interface CounterProps {
  end: number;
  duration: number;
  suffix?: string;
}

const Counter: React.FC<CounterProps> = ({ end, duration, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [ref, isVisible] = useIntersectionObserver();

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      setCount(Math.floor(percentage * end));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, isVisible]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const stats = [
  {
    icon: <Code className="w-8 h-8" />,
    label: "Projects Delivered",
    value: 500,
    suffix: "+",
    duration: 2000,
  },
  {
    icon: <Globe className="w-8 h-8" />,
    label: "Global Clients",
    value: 80,
    suffix: "+",
    duration: 1500,
  },
  {
    icon: <UserCheck className="w-8 h-8" />,
    label: "Satisfied Partners",
    value: 300,
    suffix: "+",
    duration: 1800,
  },
  {
    icon: <Award className="w-8 h-8" />,
    label: "Industry Awards",
    value: 12,
    suffix: "",
    duration: 1700,
  },
];

const AnimatedCounter: React.FC = () => {
  return (
    <div className="py-12 px-8 md:px-20 2xl:px-80">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl pb-5 md:text-4xl font-bold text-gray-800">
          Our Achievements
        </h2>
        <p className="text-gray-600 pb-5 max-w-2xl mx-auto">
          See how we've helped businesses grow and succeed with our digital
          expertise.
        </p>
      </div>

      {/* Counter Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="flex justify-center mb-4 text-blue-600">
              {stat.icon}
            </div>
            <div className="text-4xl font-bold mb-2 text-gray-900">
              <Counter
                end={stat.value}
                duration={stat.duration}
                suffix={stat.suffix}
              />
            </div>
            <div className="text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
