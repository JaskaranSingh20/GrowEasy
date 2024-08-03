import React from 'react'

interface dataprops{
  key: number,
  data: string,
  handleImage: (imgUrl: string)=> void,
  imageSelected: number| undefined,
  id: number
}
const Images = ({data, handleImage, imageSelected, id}: dataprops) => {
 
  return (
    <div className={`w-[74px] h-[74px] rounded-full overflow-y-hidden flex justify-center items-center`} onClick={()=>{ handleImage(data)}}>
      <img src={data} alt="" className={`w-[80%] h-[80%] rounded-full ${imageSelected == id ? "shadow-[0_10px_20px_rgb(0,0,0,0.19),0_6px_6px_rgb(0,0,0,0.23)]" : ""}`} />
    </div>
  )
}

export default Images