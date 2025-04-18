import { SVGProps } from "react";

type SchoolProps = {
  props?: SVGProps<SVGSVGElement>;
  className?: string;
};
const School = ({ props, className }: SchoolProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="a"
    fill="#ffffff"
    viewBox="0 0 48 48"
    {...props}
    className={className}
  >
    <path
      d="M14.272 5.525h-1.98c-.947 0-1.722.852-1.722 1.895v33.16c0 1.043.775 1.895 1.722 1.895h1.98M14.272 5.525v36.95h21.436c.947 0 1.721-.852 1.721-1.894V7.419c0-1.042-.775-1.894-1.721-1.894H14.272Z"
      className="b"
    />
    <path
      d="M26.549 5.846v7.206l3.69-2.13 3.723 2.149V5.613M20.185 28.299H33.01v-2.917H20.185v2.916ZM20.185 34.167h9.52v-2.836h-9.52v2.836Z"
      className="b"
    />
  </svg>
);
export default School;
