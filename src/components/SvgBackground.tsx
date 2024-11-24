import * as React from "react";

function SvgBackground() {
  return (
    <div className="absolute -z-10 h-screen w-full overflow-x-clip">
      <div className="absolute right-[-90%] top-[-40%] size-[560px] rounded-full bg-gradient-to-bl from-base to-secondary opacity-50 blur-2xl dark:opacity-100 sm:right-[-30%] sm:top-[-30%] lg:right-[-5%] lg:top-[-20%]"></div>
      <div className="absolute left-[-60%] top-[65%] size-80 rounded-full bg-gradient-to-br from-base to-secondary opacity-50 blur-xl dark:opacity-100 sm:left-[-15%] lg:left-[-10%]"></div>
    </div>
  );
}

SvgBackground.propTypes = {};

export default SvgBackground;
