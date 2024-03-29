import { SVGProps } from "react";

export default function DefaultHammerSVG(props: SVGProps<SVGSVGElement>): React.ReactElement {

  return (
    <svg { ...props } x="0px" y="0px" viewBox="0 0 512 512">
      <g>
	      <path d="M207.63,219.67c-4.25-4-10.88-4-15.13,0L15.69,396.41C5.61,406.42-0.03,420.05,0,434.25c0.72,29.24,24.26,52.77,53.5,53.48 c14.17,0.06,27.76-5.54,37.77-15.57l176.82-176.8c4.18-4.17,4.18-10.95,0-15.13L207.63,219.67z"/>
	      <path d="M502.63,196.9l-22.68-22.7c-8.35-8.35-21.88-8.35-30.24,0c-8.45,8.1-21.8,8.1-30.26,0c-6.04-6.03-7.92-15.07-4.79-23.01
                  c4.65-11.87,1.83-25.37-7.17-34.39c-30.64-30.75-42.97-43.08-49.08-48.02l0.16-0.13c-59.53-55.39-150.46-59.4-214.65-9.48
                  c-7.56,5.59-10.58,15.47-7.44,24.34c3.24,8.79,11.75,14.5,21.12,14.17c29.92-1.27,59.01,10.01,80.24,31.14
                  c11.09,11.09,16.69,19.62,16.69,25.38c-0.06,2.56-1.25,4.97-3.25,6.59l-20.93,20.99c-4.18,4.17-4.18,10.95,0,15.13l60.54,60.51
                  c4.18,4.18,10.95,4.18,15.13,0l22.62-22.79c8.45-8.09,21.77-8.09,30.23,0c8.36,8.36,8.36,21.9,0,30.26
                  c-8.36,8.35-8.37,21.9-0.01,30.26l0.01,0.02l22.7,22.7c12.54,12.53,32.86,12.53,45.39,0l75.65-75.69
                  c12.53-12.53,12.53-32.85,0-45.39L502.63,196.9z"/>
      </g>
    </svg>
  );

}