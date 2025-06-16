export default function ActivitiesIcon ({ size = 54, color = '#2400FF' }) {
  const aspectRatio = 78 / 54 // height / width
  const height = size
  const width = size * aspectRatio
  return (
    <svg height={height} width={width} fill='none' viewBox='0 0 124 124' xmlns='http://www.w3.org/2000/svg'>
      <path d='M25.4199 37.2L63.6977 65.3429L98.5799 37.2' stroke={color} strokeLinecap='round' strokeLinejoin='round' strokeWidth='3' />
      <path d='M25.4199 44.3524L63.6977 72.4953L98.5799 44.3524' stroke={color} strokeLinecap='round' strokeLinejoin='round' strokeWidth='3' />
      <path d='M25.4199 51.5047L63.6977 79.6476L98.5799 51.5047' stroke={color} strokeLinecap='round' strokeLinejoin='round' strokeWidth='3' />
      <path d='M25.4199 58.657L63.6977 86.8L98.5799 58.657' stroke={color} strokeLinecap='round' strokeLinejoin='round' strokeWidth='3' />
    </svg>
  )
}