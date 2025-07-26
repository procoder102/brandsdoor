'use client'
// import videoBanner from '../../../public/videoes/'

export default function Video() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
    <video controls autoPlay muted playsInline>
        <source src='../../public/videos/googleAdds.mp4' type='video/mp4' />
    </video>
    </div>
  )
}
