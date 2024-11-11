import * as React from "react";

function SvgBackground() {
  return (
    <div className="fixed -z-10 h-screen w-screen">
      <div className="from-base absolute right-[-90%] top-[-40%] size-[480px] rounded-full bg-gradient-to-bl to-secondary opacity-50 blur-2xl dark:opacity-100 lg:right-[-5%] lg:top-[-20%]"></div>
      <div className="from-base absolute left-[-60%] top-[65%] size-80 rounded-full bg-gradient-to-br to-secondary opacity-50 blur-xl dark:opacity-100 lg:left-[-10%]"></div>
    </div>
  );
}

SvgBackground.propTypes = {};

export default SvgBackground;
