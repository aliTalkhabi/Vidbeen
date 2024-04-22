
import { ImageResponse } from 'next/og';
export const size = {
    width: 20,
    height: 20,
}
export const contentType = 'image/png'
 
// Image generation
export default function Icon() {
  return new ImageResponse(
    (
     
      <div
        style={{
          fontSize:14,
          background: '#2a0de0',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        📷
      </div>
    ),
    
    {
      
      ...size,
    }
  )
}