// PulseAnimation.tsx
import React from 'react';

const Pulse: React.FC = () => {
  return (
    <div className="w-[72px] -mx-4 relative">
      <div className="animate-pulse-fast opacity-90 bg-primary w-[84px] h-[84px] rounded-full absolute" />
      <div className="bg-primary w-[64px] h-[64px] rounded-full absolute m-[10px]">
        {/* Replace IH-flag with a suitable React component */}
        <span className="text-white left-[18px] top-[18px] w-[28px] h-[28px] absolute">🏁</span>
      </div>
    </div>
  );
};

export default Pulse;
