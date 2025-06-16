export default function HealthIcon ({ size = 124, color='#2400FF' }) {
  return (
    <svg height={size} width={size} fill='none' viewBox='0 0 124 124' xmlns='http://www.w3.org/2000/svg'>
      <path d='M41.8076 21.0712V102.911M61.5913 21.0712V102.911M82.1076 21.0712V99.2577' stroke={color} strokeLinecap='round' strokeWidth='3' />
      <ellipse cx='41.85' cy='32.5412' fill={color} rx='3.1' ry='3.1' />
      <ellipse cx='41.85' cy='60.1312' fill={color} rx='3.1' ry='3.1' />
      <ellipse cx='41.85' cy='86.7913' fill={color} rx='3.1' ry='3.1' />
      <ellipse cx='61.5775' cy='29.4412' fill={color} rx='3.1' ry='3.1' />
      <ellipse cx='82.1498' cy='34.7112' fill={color} rx='3.1' ry='3.1' />
      <ellipse cx='82.1498' cy='58.2712' fill={color} rx='3.1' ry='3.1' />
      <ellipse cx='82.1498' cy='80.5912' fill={color} rx='3.1' ry='3.1' />
      <ellipse cx='61.5775' cy='51.3406' fill={color} rx='3.1' ry='3.21923' />
      <circle cx='61.5775' cy='75.1796' fill={color} r='3.1' />
      <circle cx='61.5775' cy='94.7818' fill={color} r='3.1' />
    </svg>
  )
}
