'use client'
type props = {
    hirePython:String
}

export default function Imagecard({hirePython}:props) {
  return (
    <section className='p-5'>
        <div className="card bg-base-100 image-full h-[19vw] shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      className="h-[100%] w-[100%]"
      alt="Shoes" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title text-2xl font-bold text-[#fdd007] text-center justify-center">HIRE OUR PYTHON DEVELOPER, JUST WHEN YOU NEED</h2>
    <p className="pt-2 leading-6 whitespace-pre-wrap tracking-[0.035em] dark:text-white text-center">{hirePython}</p>
  </div>
</div>
Card wit
    </section>
  )
}
