export default function Spinner() {
  return (
    <div className="spinner-box">
      <div className='loading'>
        <div className='loading__square' />
        <div className='loading__square' />
        <div className='loading__square' />
        <div className='loading__square' />
        <div className='loading__square' />
        <div className='loading__square' />
        <div className='loading__square' />
      </div>

      <div className='text'>Loading</div>
    </div>
  )
}
