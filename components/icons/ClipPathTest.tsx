import React from "react";

interface ClipPathTestProps extends React.SVGProps<SVGSVGElement> {
  src: string;
}

export default function ClipPathTest({ src, ...props }: ClipPathTestProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="668"
      height="835"
      viewBox="0 0 668 835"
      fill="none"
      {...props}
    >
      <path
        d="M583.455 0C590.928 0 597.263 5.23956 599.939 12.2166C609.476 37.0861 629.731 56.6466 655.051 65.2428C662.386 67.7332 668 74.2202 668 81.9667V204C668 210.627 662.627 216 656 216C649.373 216 644 221.373 644 228V406C644 412.627 649.373 418 656 418C662.627 418 668 423.373 668 430V819C668 827.837 660.837 835 652 835H16C7.16342 835 0 827.837 0 819V97C0 88.1634 7.16344 81 16 81H69C77.8366 81 85 73.8366 85 65V16C85 7.16344 92.1634 0 101 0H583.455Z"
        fill="url(#pattern0_2_153)"
      />
      <defs>
        <pattern
          id="pattern0_2_153"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_2_153"
            transform="matrix(0.000898473 0 0 0.000718778 0 -0.10018)"
          />
        </pattern>
        <image
          id="image0_2_153"
          width="1113"
          height="1670"
          preserveAspectRatio="none"
          href={src}
        />
      </defs>
    </svg>
  );
}
