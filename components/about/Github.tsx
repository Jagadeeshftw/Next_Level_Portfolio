import React from "react";
import GitHubCalendar, { ThemeInput } from "react-github-calendar";

function Github() {
  // Define your themeInput
  const themeInput: ThemeInput = {
    light: ["#f0f0f0", "#c4edde", "#7ac7c4", "#f73859", "#384259"],
    dark: ["#FFFFFF", "#6B7280", "#1F2937", "#111827", "#030712"],
  };

  return (
    <div className="flex justify-center pb-10 px-2">
      <div className="max-w-screen-xl w-full">
        <GitHubCalendar
          username="jagadeeshftw"
          blockSize={16}
          blockMargin={5}
          colorScheme={"dark"}
          theme={themeInput}
          fontSize={16}
          style={{ objectFit: "cover", width: "100%" }}
        />
      </div>
    </div>
  );
}

export default Github;
