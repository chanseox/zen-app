export default function FamilyIcon ({ size = 22, color='#2400FF' }) {
  const aspectRatio = 22 / 102  // height / width
  const width = size * aspectRatio
  const height = size
  return (
    <svg
      height={height}
      width={width}
      viewBox='0 0 22 102'
      xmlns='http://www.w3.org/2000/svg'
      preserveAspectRatio='xMidYMid meet'
      className='icon-svg' 
    >
      <path d='M2.00977 2.32122V99.6613' stroke={color} strokeLinecap='round' strokeWidth='3' />
      <path d='M11 2.32122V99.6613' stroke={color} strokeLinecap='round' strokeWidth='3' />
      <path d='M19.9902 2.32122V99.6613' stroke={color} strokeLinecap='round' strokeWidth='3' />
    </svg>
  )
}
