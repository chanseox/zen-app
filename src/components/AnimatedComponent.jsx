import React, { useEffect, useState } from 'react';

const AnimatedComponent = () => {
  const [shapeIndex, setShapeIndex] = useState(0);

  const shapes = [
    <svg height="600" width="1200" fill="none" viewBox="0 0 1200 600" xmlns="http://www.w3.org/2000/svg">
	<g filter="url(#filter0_f_81_7427)">
		<path d="M733 336C733 385.706 613.706 398 564 398C514.294 398 445.5 293.205 445.5 243.5C445.5 193.794 535.294 243.5 585 243.5C634.706 243.5 733 286.294 733 336Z" fill="url(#paint0_linear_81_7427)"/>
		<path d="M733 336C733 385.706 613.706 398 564 398C514.294 398 445.5 293.205 445.5 243.5C445.5 193.794 535.294 243.5 585 243.5C634.706 243.5 733 286.294 733 336Z" fill="url(#paint1_linear_81_7427)"/>
	</g>
	<g filter="url(#filter1_f_81_7427)">
		<path d="M733 336C733 385.706 613.706 398 564 398C514.294 398 445.5 293.205 445.5 243.5C445.5 193.794 535.294 243.5 585 243.5C634.706 243.5 733 286.294 733 336Z" fill="url(#paint2_linear_81_7427)"/>
		<path d="M733 336C733 385.706 613.706 398 564 398C514.294 398 445.5 293.205 445.5 243.5C445.5 193.794 535.294 243.5 585 243.5C634.706 243.5 733 286.294 733 336Z" fill="url(#paint3_linear_81_7427)"/>
	</g>
	<g filter="url(#filter2_f_81_7427)">
		<path d="M765.5 289C765.5 342.019 727.519 404 674.5 404C621.481 404 524 342.019 524 289C524 235.981 586.481 155.5 639.5 155.5C692.519 155.5 765.5 235.981 765.5 289Z" fill="url(#paint4_linear_81_7427)"/>
	</g>
	<g filter="url(#filter3_f_81_7427)">
		<path d="M765.5 289C765.5 342.019 727.519 404 674.5 404C621.481 404 524 342.019 524 289C524 235.981 586.481 155.5 639.5 155.5C692.519 155.5 765.5 235.981 765.5 289Z" fill="url(#paint5_linear_81_7427)"/>
	</g>
	<g style={{"mixBlendMode":"overlay"}}>
		<rect height="8" width="8" fill="white" rx="4" x="516" y="296"/>
		<rect height="8" width="8" fill="white" rx="4" x="536" y="296"/>
		<rect height="8" width="8" fill="white" rx="4" x="556" y="296"/>
		<rect height="8" width="8" fill="white" rx="4" x="576" y="296"/>
		<rect height="8" width="8" fill="white" rx="4" x="596" y="296"/>
		<rect height="8" width="8" fill="white" rx="4" x="616" y="296"/>
		<rect height="8" width="8" fill="white" rx="4" x="636" y="296"/>
		<rect height="8" width="8" fill="white" rx="4" x="656" y="296"/>
		<rect height="8" width="8" fill="white" rx="4" x="676" y="296"/>
	</g>
	<defs>
		<filter height="245.132" id="filter0_f_81_7427" width="356.04" x="411.23" y="187.138" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
			<feFlood result="BackgroundImageFix" floodOpacity="0"/>
			<feBlend result="shape" in="SourceGraphic" in2="BackgroundImageFix"/>
			<feGaussianBlur result="effect1_foregroundBlur_81_7427" stdDeviation="17.135"/>
		</filter>
		<filter height="245.132" id="filter1_f_81_7427" width="356.04" x="411.23" y="187.138" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
			<feFlood result="BackgroundImageFix" floodOpacity="0"/>
			<feBlend result="shape" in="SourceGraphic" in2="BackgroundImageFix"/>
			<feGaussianBlur result="effect1_foregroundBlur_81_7427" stdDeviation="17.135"/>
		</filter>
		<filter height="317.04" id="filter2_f_81_7427" width="310.04" x="489.73" y="121.23" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
			<feFlood result="BackgroundImageFix" floodOpacity="0"/>
			<feBlend result="shape" in="SourceGraphic" in2="BackgroundImageFix"/>
			<feGaussianBlur result="effect1_foregroundBlur_81_7427" stdDeviation="17.135"/>
		</filter>
		<filter height="317.04" id="filter3_f_81_7427" width="310.04" x="489.73" y="121.23" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
			<feFlood result="BackgroundImageFix" floodOpacity="0"/>
			<feBlend result="shape" in="SourceGraphic" in2="BackgroundImageFix"/>
			<feGaussianBlur result="effect1_foregroundBlur_81_7427" stdDeviation="17.135"/>
		</filter>
		<linearGradient id="paint0_linear_81_7427" gradientUnits="userSpaceOnUse" x1="492.606" x2="618.231" y1="230.404" y2="398">
			<stop stopColor="#FF39D7"/>
			<stop offset="1" stopColor="#1400FF" stopOpacity="0.2"/>
		</linearGradient>
		<linearGradient id="paint1_linear_81_7427" gradientUnits="userSpaceOnUse" x1="564" x2="564" y1="218" y2="398">
			<stop stopColor="#00FFA3" stopOpacity="0.58"/>
			<stop offset="1" stopColor="#3300FF" stopOpacity="0.2"/>
		</linearGradient>
		<linearGradient id="paint2_linear_81_7427" gradientUnits="userSpaceOnUse" x1="492.606" x2="618.231" y1="230.404" y2="398">
			<stop stopColor="#FF39D7"/>
			<stop offset="1" stopColor="#1400FF" stopOpacity="0.2"/>
		</linearGradient>
		<linearGradient id="paint3_linear_81_7427" gradientUnits="userSpaceOnUse" x1="564" x2="564" y1="218" y2="398">
			<stop stopColor="#00FFA3" stopOpacity="0.58"/>
			<stop offset="1" stopColor="#3300FF" stopOpacity="0.2"/>
		</linearGradient>
		<linearGradient id="paint4_linear_81_7427" gradientUnits="userSpaceOnUse" x1="620" x2="620" y1="193" y2="385">
			<stop stopColor="#00FFA3" stopOpacity="0.48"/>
			<stop offset="1" stopColor="#3300FF" stopOpacity="0.2"/>
		</linearGradient>
		<linearGradient id="paint5_linear_81_7427" gradientUnits="userSpaceOnUse" x1="620" x2="620" y1="193" y2="385">
			<stop stopColor="#00FFA3" stopOpacity="0.48"/>
			<stop offset="1" stopColor="#3300FF" stopOpacity="0.2"/>
		</linearGradient>
	</defs>
</svg>,
    <svg height="600" width="1200" fill="none" viewBox="0 0 1200 600" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_f_81_7426)">
      <path d="M651 291.5C651 348.661 604.661 395 547.5 395C490.339 395 410 303.162 410 246C410 188.839 490.339 197.5 547.5 197.5C604.661 197.5 651 234.338 651 291.5Z" fill="url(#paint0_linear_81_7426)"/>
      <path d="M651 291.5C651 348.661 604.661 395 547.5 395C490.339 395 410 303.162 410 246C410 188.839 490.339 197.5 547.5 197.5C604.661 197.5 651 234.338 651 291.5Z" fill="url(#paint1_linear_81_7426)"/>
    </g>
    <g filter="url(#filter1_f_81_7426)">
      <path d="M651 291.5C651 348.661 604.661 395 547.5 395C490.339 395 410 303.161 410 246C410 188.839 490.339 197.5 547.5 197.5C604.661 197.5 651 234.338 651 291.5Z" fill="url(#paint2_linear_81_7426)"/>
      <path d="M651 291.5C651 348.661 604.661 395 547.5 395C490.339 395 410 303.161 410 246C410 188.839 490.339 197.5 547.5 197.5C604.661 197.5 651 234.338 651 291.5Z" fill="url(#paint3_linear_81_7426)"/>
    </g>
    <g filter="url(#filter2_f_81_7426)">
      <path d="M721.5 280C721.5 335.781 581.281 455.5 525.5 455.5C469.72 455.5 548.5 318.281 548.5 262.5C548.5 206.719 594.22 205.5 650 205.5C705.781 205.5 721.5 224.219 721.5 280Z" fill="url(#paint4_linear_81_7426)"/>
    </g>
    <g filter="url(#filter3_f_81_7426)">
      <path d="M721.5 280C721.5 335.781 581.281 455.5 525.5 455.5C469.72 455.5 548.5 318.281 548.5 262.5C548.5 206.719 594.22 205.5 650 205.5C705.781 205.5 721.5 224.219 721.5 280Z" fill="url(#paint5_linear_81_7426)"/>
    </g>
    <g style={{"mixBlendMode":"overlay"}}>
      <rect height="48" width="8" fill="white" rx="4" x="516" y="276"/>
      <rect height="24" width="8" fill="white" rx="4" x="536" y="288"/>
      <rect height="40" width="8" fill="white" rx="4" x="556" y="280"/>
      <rect height="32" width="8" fill="white" rx="4" x="576" y="284"/>
      <rect height="72" width="8" fill="white" rx="4" x="596" y="264"/>
      <rect height="64" width="8" fill="white" rx="4" x="616" y="268"/>
      <rect height="28" width="8" fill="white" rx="4" x="636" y="286"/>
      <rect height="48" width="8" fill="white" rx="4" x="656" y="276"/>
      <rect height="24" width="8" fill="white" rx="4" x="676" y="288"/>
    </g>
    <defs>
      <filter height="266.508" id="filter0_f_81_7426" width="309.54" x="375.73" y="162.762" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood result="BackgroundImageFix" floodOpacity="0"/>
        <feBlend result="shape" in="SourceGraphic" in2="BackgroundImageFix"/>
        <feGaussianBlur result="effect1_foregroundBlur_81_7426" stdDeviation="17.135"/>
      </filter>
      <filter height="266.508" id="filter1_f_81_7426" width="309.54" x="375.73" y="162.761" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood result="BackgroundImageFix" floodOpacity="0"/>
        <feBlend result="shape" in="SourceGraphic" in2="BackgroundImageFix"/>
        <feGaussianBlur result="effect1_foregroundBlur_81_7426" stdDeviation="17.135"/>
      </filter>
      <filter height="318.54" id="filter2_f_81_7426" width="284.51" x="471.26" y="171.23" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood result="BackgroundImageFix" floodOpacity="0"/>
        <feBlend result="shape" in="SourceGraphic" in2="BackgroundImageFix"/>
        <feGaussianBlur result="effect1_foregroundBlur_81_7426" stdDeviation="17.135"/>
      </filter>
      <filter height="318.54" id="filter3_f_81_7426" width="284.51" x="471.26" y="171.23" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood result="BackgroundImageFix" floodOpacity="0"/>
        <feBlend result="shape" in="SourceGraphic" in2="BackgroundImageFix"/>
        <feGaussianBlur result="effect1_foregroundBlur_81_7426" stdDeviation="17.135"/>
      </filter>
      <linearGradient id="paint0_linear_81_7426" gradientUnits="userSpaceOnUse" x1="465.397" x2="609.865" y1="202.265" y2="395">
        <stop stopColor="#FF00F7"/>
        <stop offset="1" stopColor="#BFB9FF"/>
      </linearGradient>
      <linearGradient id="paint1_linear_81_7426" gradientUnits="userSpaceOnUse" x1="547.5" x2="547.5" y1="188" y2="395">
        <stop stopColor="#33C5B3" stopOpacity="0.64"/>
        <stop offset="1" stopColor="#44FFC7" stopOpacity="0.6"/>
      </linearGradient>
      <linearGradient id="paint2_linear_81_7426" gradientUnits="userSpaceOnUse" x1="465.397" x2="609.865" y1="202.264" y2="395">
        <stop stopColor="#FF00F7"/>
        <stop offset="1" stopColor="#BFB9FF"/>
      </linearGradient>
      <linearGradient id="paint3_linear_81_7426" gradientUnits="userSpaceOnUse" x1="547.5" x2="547.5" y1="188" y2="395">
        <stop stopColor="#33C5B3" stopOpacity="0.64"/>
        <stop offset="1" stopColor="#44FFC7" stopOpacity="0.6"/>
      </linearGradient>
      <linearGradient id="paint4_linear_81_7426" gradientUnits="userSpaceOnUse" x1="650" x2="650" y1="197" y2="399">
        <stop stopColor="#4200FF" stopOpacity="0.9"/>
        <stop offset="1" stopColor="white" stopOpacity="0"/>
      </linearGradient>
      <linearGradient id="paint5_linear_81_7426" gradientUnits="userSpaceOnUse" x1="650" x2="650" y1="197" y2="399">
        <stop stopColor="#4200FF" stopOpacity="0.9"/>
        <stop offset="1" stopColor="white" stopOpacity="0"/>
      </linearGradient>
    </defs>
  </svg>,
    <svg height="600" width="1200" fill="none" viewBox="0 0 1200 600" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_f_81_7425)">
      <path d="M673 257.5C673 299.474 601.974 357.5 560 357.5C518.026 357.5 448 326.974 448 285C448 243.026 507.026 169.5 549 169.5C590.974 169.5 673 215.526 673 257.5Z" fill="url(#paint0_linear_81_7425)"/>
    </g>
    <g filter="url(#filter1_f_81_7425)">
      <path d="M673 257.5C673 299.474 601.974 357.5 560 357.5C518.026 357.5 448 326.974 448 285C448 243.026 507.026 169.5 549 169.5C590.974 169.5 673 215.526 673 257.5Z" fill="url(#paint1_linear_81_7425)"/>
    </g>
    <g filter="url(#filter2_f_81_7425)">
      <path d="M725.5 311.501C725.5 355.684 645.183 413.501 601 413.501C556.817 413.501 486 400.184 486 356.001C486 311.818 477.817 243.001 522 243.001C566.183 243.001 725.5 267.318 725.5 311.501Z" fill="url(#paint2_linear_81_7425)"/>
    </g>
    <g filter="url(#filter3_f_81_7425)">
      <path d="M725.5 311.5C725.5 355.683 645.183 413.5 601 413.5C556.817 413.5 486 400.183 486 356C486 311.817 477.817 243 522 243C566.183 243 725.5 267.317 725.5 311.5Z" fill="url(#paint3_linear_81_7425)"/>
    </g>
    <g style={{"mixBlendMode":"overlay"}}>
      <rect height="16" width="8" fill="white" rx="4" x="516" y="292"/>
      <rect height="48" width="8" fill="white" rx="4" x="536" y="276"/>
      <rect height="12" width="8" fill="white" rx="4" x="556" y="294"/>
      <rect height="64" width="8" fill="white" rx="4" x="576" y="268"/>
      <rect height="32" width="8" fill="white" rx="4" x="596" y="284"/>
      <rect height="20" width="8" fill="white" rx="4" x="616" y="290"/>
      <rect height="36" width="8" fill="white" rx="4" x="636" y="282"/>
      <rect height="12" width="8" fill="white" rx="4" x="656" y="294"/>
      <rect height="48" width="8" fill="white" rx="4" x="676" y="276"/>
    </g>
    <defs>
      <filter height="256.54" id="filter0_f_81_7425" width="293.54" x="413.73" y="135.23" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood result="BackgroundImageFix" floodOpacity="0"/>
        <feBlend result="shape" in="SourceGraphic" in2="BackgroundImageFix"/>
        <feGaussianBlur result="effect1_foregroundBlur_81_7425" stdDeviation="17.135"/>
      </filter>
      <filter height="256.54" id="filter1_f_81_7425" width="293.54" x="413.73" y="135.23" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood result="BackgroundImageFix" floodOpacity="0"/>
        <feBlend result="shape" in="SourceGraphic" in2="BackgroundImageFix"/>
        <feGaussianBlur result="effect1_foregroundBlur_81_7425" stdDeviation="17.135"/>
      </filter>
      <filter height="239.04" id="filter2_f_81_7425" width="308.638" x="451.132" y="208.731" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood result="BackgroundImageFix" floodOpacity="0"/>
        <feBlend result="shape" in="SourceGraphic" in2="BackgroundImageFix"/>
        <feGaussianBlur result="effect1_foregroundBlur_81_7425" stdDeviation="17.135"/>
      </filter>
      <filter height="239.04" id="filter3_f_81_7425" width="308.638" x="451.132" y="208.73" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood result="BackgroundImageFix" floodOpacity="0"/>
        <feBlend result="shape" in="SourceGraphic" in2="BackgroundImageFix"/>
        <feGaussianBlur result="effect1_foregroundBlur_81_7425" stdDeviation="17.135"/>
      </filter>
      <linearGradient id="paint0_linear_81_7425" gradientUnits="userSpaceOnUse" x1="499.712" x2="605.795" y1="192.474" y2="334">
        <stop stopColor="#FF00F5"/>
        <stop offset="1" stopColor="#6C5FFE" stopOpacity="0"/>
      </linearGradient>
      <linearGradient id="paint1_linear_81_7425" gradientUnits="userSpaceOnUse" x1="499.712" x2="605.795" y1="192.474" y2="334">
        <stop stopColor="#FF00F5"/>
        <stop offset="1" stopColor="#6C5FFE" stopOpacity="0"/>
      </linearGradient>
      <linearGradient id="paint2_linear_81_7425" gradientUnits="userSpaceOnUse" x1="610" x2="610" y1="259.001" y2="419.001">
        <stop stopColor="#FFF500" stopOpacity="0.58"/>
        <stop offset="1" stopColor="#9CFFED" stopOpacity="0"/>
      </linearGradient>
      <linearGradient id="paint3_linear_81_7425" gradientUnits="userSpaceOnUse" x1="610" x2="610" y1="259" y2="419">
        <stop stopColor="#FFF500" stopOpacity="0.58"/>
        <stop offset="1" stopColor="#9CFFED" stopOpacity="0"/>
      </linearGradient>
    </defs>
  </svg>,
    <svg height="600" width="1200" fill="none" viewBox="0 0 1200 600" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_f_81_7424)">
      <path d="M752 321.5C752 371.206 686.206 388.5 636.5 388.5C586.794 388.5 520.5 362.206 520.5 312.5C520.5 262.794 539.294 148 589 148C638.706 148 752 271.794 752 321.5Z" fill="url(#paint0_linear_81_7424)"/>
    </g>
    <g filter="url(#filter1_f_81_7424)">
      <path d="M752 321.5C752 371.206 686.206 388.5 636.5 388.5C586.794 388.5 520.5 362.206 520.5 312.5C520.5 262.794 539.294 148 589 148C638.706 148 752 271.794 752 321.5Z" fill="url(#paint1_linear_81_7424)"/>
    </g>
    <g filter="url(#filter2_f_81_7424)">
      <path d="M694.5 363.5C694.5 407.683 594.183 419 550 419C505.817 419 458 324.182 458 279.999C458 235.817 505.817 211.499 550 211.499C594.183 211.499 694.5 319.317 694.5 363.5Z" fill="url(#paint2_linear_81_7424)"/>
    </g>
    <g filter="url(#filter3_f_81_7424)">
      <path d="M694.5 363.501C694.5 407.684 594.183 419.001 550 419.001C505.817 419.001 458 324.183 458 280C458 235.817 505.817 211.5 550 211.5C594.183 211.5 694.5 319.318 694.5 363.501Z" fill="url(#paint3_linear_81_7424)"/>
    </g>
    <g style={{"mixBlendMode":"overlay"}}>
      <rect height="72" width="8" fill="white" rx="4" x="516" y="264"/>
      <rect height="32" width="8" fill="white" rx="4" x="536" y="284"/>
      <rect height="24" width="8" fill="white" rx="4" x="556" y="288"/>
      <rect height="32" width="8" fill="white" rx="4" x="576" y="284"/>
      <rect height="72" width="8" fill="white" rx="4" x="596" y="264"/>
      <rect height="40" width="8" fill="white" rx="4" x="616" y="280"/>
      <rect height="16" width="8" fill="white" rx="4" x="636" y="292"/>
      <rect height="32" width="8" fill="white" rx="4" x="656" y="284"/>
      <rect height="28" width="8" fill="white" rx="4" x="676" y="286"/>
    </g>
    <defs>
      <filter height="309.04" id="filter0_f_81_7424" width="300.04" x="486.23" y="113.73" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood result="BackgroundImageFix" floodOpacity="0"/>
        <feBlend result="shape" in="SourceGraphic" in2="BackgroundImageFix"/>
        <feGaussianBlur result="effect1_foregroundBlur_81_7424" stdDeviation="17.135"/>
      </filter>
      <filter height="309.04" id="filter1_f_81_7424" width="300.04" x="486.23" y="113.73" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood result="BackgroundImageFix" floodOpacity="0"/>
        <feBlend result="shape" in="SourceGraphic" in2="BackgroundImageFix"/>
        <feGaussianBlur result="effect1_foregroundBlur_81_7424" stdDeviation="17.135"/>
      </filter>
      <filter height="276.041" id="filter2_f_81_7424" width="305.04" x="423.73" y="177.229" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood result="BackgroundImageFix" floodOpacity="0"/>
        <feBlend result="shape" in="SourceGraphic" in2="BackgroundImageFix"/>
        <feGaussianBlur result="effect1_foregroundBlur_81_7424" stdDeviation="17.135"/>
      </filter>
      <filter height="276.041" id="filter3_f_81_7424" width="305.04" x="423.73" y="177.23" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood result="BackgroundImageFix" floodOpacity="0"/>
        <feBlend result="shape" in="SourceGraphic" in2="BackgroundImageFix"/>
        <feGaussianBlur result="effect1_foregroundBlur_81_7424" stdDeviation="17.135"/>
      </filter>
      <linearGradient id="paint0_linear_81_7424" gradientUnits="userSpaceOnUse" x1="562.606" x2="688.231" y1="180.404" y2="348">
        <stop stopColor="#6981FF"/>
        <stop offset="1" stopColor="#C68059" stopOpacity="0"/>
      </linearGradient>
      <linearGradient id="paint1_linear_81_7424" gradientUnits="userSpaceOnUse" x1="562.606" x2="688.231" y1="180.404" y2="348">
        <stop stopColor="#6981FF"/>
        <stop offset="1" stopColor="#C68059" stopOpacity="0"/>
      </linearGradient>
      <linearGradient id="paint2_linear_81_7424" gradientUnits="userSpaceOnUse" x1="550" x2="550" y1="258.999" y2="418.999">
        <stop stopColor="#FFB6B6" stopOpacity="0.62"/>
        <stop offset="1" stopColor="#6141E1" stopOpacity="0"/>
      </linearGradient>
      <linearGradient id="paint3_linear_81_7424" gradientUnits="userSpaceOnUse" x1="550" x2="550" y1="259" y2="419">
        <stop stopColor="#FFB6B6" stopOpacity="0.62"/>
        <stop offset="1" stopColor="#6141E1" stopOpacity="0"/>
      </linearGradient>
    </defs>
  </svg>,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setShapeIndex((prev) => (prev + 1) % shapes.length);
    }, 3000); // 3 second interval

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <div className="transition-opacity duration-1000 ease-in-out">
      {shapes[shapeIndex]}
    </div>
  );
};

export default AnimatedComponent;
