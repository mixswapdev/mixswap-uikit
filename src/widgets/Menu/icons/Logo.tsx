import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 100 26" {...props}>
      <image
        width="78"
        height="26"
        href={isDark ? "/images/mxs/LogoTextNewDark.png" : "/images/mxs/LogoTextNewWhite.png"}
      />
    </Svg>
  );
};

export default Logo;
