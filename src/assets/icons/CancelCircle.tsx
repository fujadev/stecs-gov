import * as React from "react"
import { SVGProps } from "react"
const CancelCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <path
      fill="#D9D9D9"
      d="M9 .667A8.326 8.326 0 0 0 .667 9 8.326 8.326 0 0 0 9 17.333 8.326 8.326 0 0 0 17.333 9 8.326 8.326 0 0 0 9 .667Zm0 15A6.675 6.675 0 0 1 2.333 9 6.676 6.676 0 0 1 9 2.333 6.675 6.675 0 0 1 15.667 9 6.675 6.675 0 0 1 9 15.667Zm2.992-10.834L9 7.825 6.008 4.833 4.833 6.008 7.825 9l-2.992 2.992 1.175 1.175L9 10.175l2.992 2.992 1.175-1.175L10.175 9l2.992-2.992-1.175-1.175Z"
    />
  </svg>
)
export default CancelCircle;
