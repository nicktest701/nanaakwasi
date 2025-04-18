import { SVGProps } from "react";

type MobileDevelopmentProps = {
  props?: SVGProps<SVGSVGElement>;
  className?: string;
};
const MobileDevelopment = ({ props, className }: MobileDevelopmentProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 496 496"
    {...props}
    className={className}
  >
    <path d="M352 0H144c-22.056 0-40 17.944-40 40v416c0 22.056 17.944 40 40 40h208c22.056 0 40-17.944 40-40V40c0-22.056-17.944-40-40-40zm24 456c0 13.232-10.768 24-24 24H144c-13.232 0-24-10.768-24-24v-24h256v24zm0-40H120V64h256v352zm0-368H120v-8c0-13.232 10.768-24 24-24h208c13.232 0 24 10.768 24 24v8z" />
    <path d="M216 448h64v16h-64zM360 80H136v128h224V80zm-16 112H152V96h192v96zM264 224H136v112h128V224zm-16 96h-96v-80h96v80zM280 224h80v16h-80zM280 256h80v16h-80zM280 288h80v16h-80zM280 320h80v16h-80zM136 352h224v16H136zM136 384h192v16H136zM344 384h16v16h-16z" />
    <path d="M328 160h-12.16l-32-40H250l-6-8h-23.744l-40 48H168v16h160v-16zm-126.92 0 26.664-32H236l21.6 28.8 12.8-9.6L262 136h14.16l19.2 24h-94.28zM200 312c17.648 0 32-14.352 32-32s-14.352-32-32-32-32 14.352-32 32 14.352 32 32 32zm0-48c8.824 0 16 7.176 16 16s-7.176 16-16 16-16-7.176-16-16 7.176-16 16-16z" />
  </svg>
);
export default MobileDevelopment;
