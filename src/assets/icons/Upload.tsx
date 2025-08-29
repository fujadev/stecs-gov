import * as React from "react"
import { SVGProps } from "react"
const Upload = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="#3A86FF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.25}
      d="m8.267 9.733 2.133 2.134 2.133-2.134M10.4 3.333v8.475"
    />
    <path
      stroke="#3A86FF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.25}
      d="M17.167 10.15c0 3.683-2.5 6.667-6.667 6.667s-6.667-2.984-6.667-6.667"
    />
  </svg>
)
export default Upload;
