
import React, { useRef, useEffect, useState } from 'react';
import { ImageProps } from '../utils/utilsInterfaces';

interface WrapInterface{
  ctx: CanvasRenderingContext2D ,
  text: string,
  x: number,
  y:number,
  maxWidth: number,
  lineHeight: number
}

interface CanvasProps extends ImageProps{
  w: number,
  h: number,
  banData: {
    id: number;
    tempId: number;
    background: string;
    image: string;
    title: string;
    desc: string;
}[]
}

function MyCanvas({w, h, title, desc, background, image, id, tempId, banData}: CanvasProps) {

  function ImagePositions(bannerId: number){
    if(bannerId == 5){
      return new Array(0.25*w,0.34*h, 0.7*w, 0.6*h);
    }else if(bannerId == 1){
      return new Array(0.3* w , 0*h, 0.7 * w, h);
    }else if(bannerId == 9){
      return new Array(0 * w , 0.5 *h, 0.8* w, 0.5*h);
    }else{
      return new Array(.3*w, 0.3*h, .8*w, .7*h);
    }
  }


    const CanvasRef = useRef<HTMLCanvasElement | null>(null);

    const wrapText = function({ctx, text, x, y, maxWidth, lineHeight}: WrapInterface) {
      let words = text.split(' ');
      let line = ''; 
      let testLine = '';
      let lineArray = []; 

      for(var n = 0; n < words.length; n++) {
          testLine += `${words[n]} `;
          let metrics = ctx.measureText(testLine);
          let testWidth = metrics.width;
          if (testWidth > maxWidth && n > 0) {
              lineArray.push([line, x, y]);
              y += lineHeight;
              line = `${words[n]} `;
              testLine = `${words[n]} `;
          }
          else {
              line += `${words[n]} `;
          }
          if(n === words.length - 1) {
              lineArray.push([line, x, y]);
          }
      }
      return lineArray;
  }

  
  useEffect(() => {
    const canvas = CanvasRef.current;
    let BackgroundImg = new Image();
    BackgroundImg.src = background;

    let img = new Image();
    img.src = image;

    if(canvas){
      const ctx = canvas.getContext("2d");
      let positions = ImagePositions(tempId);
      if(ctx){

        BackgroundImg.onload=  ()=>{
          ctx.drawImage(img, positions[0], positions[1], positions[2], positions[3]);
           
         ctx.drawImage(BackgroundImg, 0, 0, canvas.width, canvas.height);
         ctx.font = `700 ${.055*h}px Verdana`;
         if(tempId == 5 || tempId == 9){
           ctx.fillStyle = 'white';
         }else{
           ctx.fillStyle = 'black';
         }
         let objTitle: WrapInterface = {
           ctx: ctx,
           text: title,
           x: 0.15*w,
           y: 0.125 *h,
           maxWidth: .65*w,
           lineHeight: 0.08*h
         }
         let wrappedTitleText = wrapText(objTitle);
         wrappedTitleText.forEach(function(item:any) {
           ctx.fillText(item[0], item[1], item[2]); 
         })
         
         ctx.font = `${0.05*h}px  Calibri`;
         let objDescription: WrapInterface = {
           ctx: ctx,
           text: desc,
           x: 0.15*w,
           y: .35*h,
           maxWidth: .45*w,
           lineHeight: 0.063*h
         }
         let wrappedDescText = wrapText(objDescription);
         wrappedDescText.forEach(function(item:any) {
           ctx.fillText(item[0], item[1], item[2]); 
         })
       }
        
      }
    }
    
  }, [banData]);

  return (
    <canvas ref={CanvasRef} width={w} height={h} />
  );
}

export default MyCanvas;