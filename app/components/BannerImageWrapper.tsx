'use client'
import React, { useEffect, useState } from 'react'
import BannerImages from './BannerImages'
import bannerData from '../utils/bannerData'

const BannerImageWrapper = () => {
  const [banData, setBanData] = useState(bannerData);

  return (
    <div className='flex justify-center items-center'>
      <div className=' pt-3 grid grid-cols-1 lg:grid-cols-2 gap-3'>
        {banData? banData.map((d, index)=>{
          return <BannerImages key={index} title={d.title} desc={d.desc} background={d.background} image={d.image} id={d.id} tempId={d.tempId} setBanData={setBanData} banData={banData}/>

        }): ""}
      </div>

    </div>
  )
}

export default BannerImageWrapper