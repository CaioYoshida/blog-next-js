import React, { useEffect, useState } from 'react'

const Ad = ({ slotId, width, height }) => {
  const [isEnable, setIsEnable] = useState(false)

  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      setIsEnable(true)
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className='flex justify-center mt-16'>
      {isEnable && <ins
        className='adsbygoogle bg-gray-100'
        style={{ display: 'inline-block', width: `${width}px`, height: `${height}px` }}
        data-ad-client="ca-pub-1776769178529882"
        data-ad-slot={slotId} />}
    </div>
  )
}

export default Ad