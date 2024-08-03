import { Label } from 'flowbite-react'
import React, { useState } from 'react'
import Images from './Images'
import imagesData from '../utils/imagesData'

interface ImageRowProps{
  handleImage:(imgUrl: string) => void;
}

const ImageRow = ({handleImage}: ImageRowProps) => {
  const Im : {id: number, image: string}[] = JSON.parse(imagesData)
  const [imageSelected, setImageSelected] = useState<number>();

  return (
    <>
    <Label htmlFor='upload' value='Images'/>
    <div className='mt-1 flex gap-1 flex-nowrap overflow-x-auto overflow-y-hidden no-scrollbar'>
    
        <div className="wrapper mt-[6px]">
        <div className="btnimg"></div>
        {/* <input type="file" accept="image/png, image/gif, image/jpeg" onChange={(e:any)=> {  
          let url =  URL.createObjectURL(e.target.files[0])
          handleImage(url)
         }}/> */}
        </div>


        <div className='flex flex-nowrap gap-0'>
            {
              Im? Im.map((val, idx)=>{
                  return <div onClick={()=> setImageSelected(val.id)} key={idx} >
                     <Images key={idx} data={val.image} handleImage={handleImage} imageSelected={imageSelected} id={val.id}/></div>
              }): ""
            }
        </div>
    </div>
    </>

   
  )
}

export default ImageRow