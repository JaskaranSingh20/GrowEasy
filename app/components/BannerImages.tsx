'use client'
import React, { useState } from 'react'
import ModalComp from './ModalComp'
import MyCanvas from './CanvasComp'
import { BannerImageProp } from '../utils/utilsInterfaces'

const BannerImages = ({ title, desc, background, image, id , tempId, setBanData, banData }:BannerImageProp) => {
  const [selectedId, setSelectedId] = useState<number>();
  return (
    <div className=' relative w-[400px] h-[400px]'>
        <MyCanvas w={400} h={400} title={title} desc={desc} background={background} image={image} id={id} tempId={tempId} banData={banData} />
        <div className='absolute top-1  right-1' onClick={()=> setSelectedId(id)}>
            <ModalComp title={title} desc={desc} background={background} image={image} id={id} tempId={tempId} setBanData={setBanData} selectedId={selectedId} banData={banData}/>
        </div>
    </div>
  )
}

export default BannerImages