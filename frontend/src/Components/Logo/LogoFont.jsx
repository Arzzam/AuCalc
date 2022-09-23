import React from 'react'

// const LogoFont = () => {
//     return (
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 413.51 128.45" className="h-20 font-logo fill-black">
//             <text class="cls-1" className="tracking-wider" transform="translate(0 77.99)">
//                 a
//                 <tspan className="tracking-widest" x="73.12" y="0">uca</tspan>
//                 <tspan className="tracking-n1" x="289.83" y="0">l</tspan>
//                 <tspan className="tracking-widest" x="342.77" y="0">c</tspan>
//             </text>
//         </svg>
//     )
// }

const LogoFont = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 397.27 67.8" className={`${props.className}`}>
            <path d="M20.64,20.55h8.81L20.64,1.38H32.2L61.56,65.6H50.19l-4.13-9H15.6l-4.13,9H0ZM41.29,46.33,30.83,23.58,20.37,46.33Z" />
            <path d="M86.89,1.38V41.2a15.58,15.58,0,0,0,1.28,6.56,14.1,14.1,0,0,0,3.39,4.67,13.81,13.81,0,0,0,4.82,2.8,16.81,16.81,0,0,0,11,0,13.87,13.87,0,0,0,4.77-2.8,14.1,14.1,0,0,0,3.39-4.67,15.58,15.58,0,0,0,1.29-6.56V1.38h11V41.2a28,28,0,0,1-2.25,11.6,25.35,25.35,0,0,1-5.87,8.35,23.84,23.84,0,0,1-8.31,5,28.4,28.4,0,0,1-19.08,0,23.71,23.71,0,0,1-8.3-5,25.23,25.23,0,0,1-5.88-8.35,28,28,0,0,1-2.24-11.6V20.55l11-8.9h-11V1.38Z" />
            <path d="M198.54,60.46a29.74,29.74,0,0,1-8.39,4.87A31.13,31.13,0,0,1,179.37,67a35.27,35.27,0,0,1-12.48-2.07,30.07,30.07,0,0,1-16.15-13.76,35.48,35.48,0,0,1-3.67-9.82,37.69,37.69,0,0,1-.73-10.5,36.64,36.64,0,0,1,2.2-10.28h12.85a22.27,22.27,0,0,0-3,7.2,25.75,25.75,0,0,0,1.28,15.51,20.74,20.74,0,0,0,4.22,6.56,19.9,19.9,0,0,0,6.61,4.54,22.21,22.21,0,0,0,8.94,1.7,23.51,23.51,0,0,0,4.59-.41,18,18,0,0,0,3.58-1.11,17.13,17.13,0,0,0,2.66-1.42,12.2,12.2,0,0,0,1.83-1.47ZM153.86,11.19a30.54,30.54,0,0,1,10.51-8.12,34.33,34.33,0,0,1,15-3.07,31,31,0,0,1,10.09,1.7,32.55,32.55,0,0,1,9.08,4.81l-6.42,9a18.28,18.28,0,0,0-5.27-3.22,19,19,0,0,0-7.39-1.37,21.53,21.53,0,0,0-10.55,2.43,20,20,0,0,0-7.06,6.38Z" />
            <path d="M235.43,20.55h8.81L235.43,1.38H247L276.35,65.6H265l-4.13-9H230.38l-4.13,9H214.78Zm20.64,25.78L245.61,23.58,235.15,46.33Z" />
            <path d="M293.5,55.33V1.38h11V45.51Zm0,10.27V55.33h41.57V65.6Z" />
            <path d="M397.27,60.46a29.88,29.88,0,0,1-8.39,4.87A31.13,31.13,0,0,1,378.1,67a35.27,35.27,0,0,1-12.48-2.07,30.07,30.07,0,0,1-16.15-13.76,35.48,35.48,0,0,1-3.67-9.82,37.69,37.69,0,0,1-.73-10.5,36.64,36.64,0,0,1,2.2-10.28h12.85a22.29,22.29,0,0,0-3,7.2,26.27,26.27,0,0,0-.55,7.85,25.91,25.91,0,0,0,1.84,7.66,20.74,20.74,0,0,0,4.22,6.56,19.86,19.86,0,0,0,6.6,4.54,22.29,22.29,0,0,0,8.95,1.7,23.51,23.51,0,0,0,4.59-.41,18.18,18.18,0,0,0,3.58-1.11A17.61,17.61,0,0,0,389,53.12a12.2,12.2,0,0,0,1.83-1.47ZM352.59,11.19A30.35,30.35,0,0,1,363.1,3.07,34.33,34.33,0,0,1,378.1,0a31,31,0,0,1,10.09,1.7,32.55,32.55,0,0,1,9.08,4.81l-6.42,9a18.42,18.42,0,0,0-5.27-3.22,19,19,0,0,0-7.39-1.37,21.5,21.5,0,0,0-10.55,2.43,20.08,20.08,0,0,0-7.07,6.38Z" />
        </svg>
    )
}

export default LogoFont;