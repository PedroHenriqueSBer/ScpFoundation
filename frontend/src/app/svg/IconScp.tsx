interface svgProps{
    className?: string
}

export const IconScp = ({className}: svgProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="68"
      height="68"
      fill="none"
      viewBox="0 0 68 68"
      className={className}
    >
      <path fill="url(#pattern0)" d="M0 0H68V68H0z"></path>
      <defs>
        <pattern
          id="pattern0"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use transform="scale(.0147)" xlinkHref="#image0_1_3"></use>
        </pattern>
        <image
          id="image0_1_3"
          width="68"
          height="68"
          xlinkHref="data:image/png;base64,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"
        ></image>
      </defs>
    </svg>
  );
}
