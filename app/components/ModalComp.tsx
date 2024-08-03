"use client";

import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import MyCanvas from "./CanvasComp"
import ImageRow from "./ImageRow";
import { ModalProps } from "../utils/utilsInterfaces";

export default function Component({title, desc, background, image, id, tempId, setBanData, selectedId, banData}: ModalProps) {
  const [openModal, setOpenModal] = useState(false);
  const [modalSize, setModalSize] = useState<string>('md');
  const [modalData ,setModalData] = useState({id, tempId,background, image, title, desc}); 
  

  async function handleModalSubmit(){

    const currentIndex = banData.findIndex((x: any) => x.id === selectedId);
    let updatedObj = Object.assign({}, banData[currentIndex]);
    updatedObj.title =  modalData.title;
    updatedObj.desc =  modalData.desc;
    updatedObj.image =  modalData.image;
    const newArray = banData.slice();
    newArray[currentIndex] = updatedObj;
    await setBanData(newArray);
      setOpenModal(false);
    }
  function handleInput(e:any){
    let value = e.target.value;
    let name = e.target.name;

    setModalData((prev:any)=>{
        if(name === "title"){
          return {
            ...prev,
            title: value,
          }
        }else if(name === "desc"){
          return {
            ...prev,
            desc: value,
          }
        }
    })

  }

   function handleImage(imgUrl: string){
       setModalData((prev: any)=>{
          return {
            ...prev,
            image: imgUrl
          }
      })
      
  }
  
  return (
    <>
      <div className="flex flex-wrap gap-4">
        <Button className=" bg-transparent focus:ring-transparent  enabled:hover:bg-transparent  " onClick={() =>{setOpenModal(true);}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" fill="none" className="text-white cursor-pointer"><path fill="currentColor" d="M10.898 1.297a1.766 1.766 0 0 1 2.489 0l1.066 1.066a1.766 1.766 0 0 1 0 2.489l-1.312 1.312L9.586 2.61zM8.957 3.238l3.555 3.555-6.371 6.371a2.4 2.4 0 0 1-1.012.602l-3.309.984a.62.62 0 0 1-.629-.191.56.56 0 0 1-.164-.63l.957-3.308c.11-.383.329-.738.602-1.012z"></path></svg>
        </Button>
      </div>
      <Modal show={openModal} size={modalSize} onClose={() => setOpenModal(false)}>
        <Modal.Header>Edit Banner</Modal.Header>
        <Modal.Body>
          <div>

            <div className=" flex justify-center items-center">
              <MyCanvas w={240} h={240} title={title} desc={desc} background={background} image={image} id={id} tempId={tempId} banData={banData}/>
              
            </div>

            <ImageRow handleImage={handleImage}/>

            <div>
              <div className="m-2 block">
                <Label htmlFor="title" value="Title" />
              </div>
              <TextInput id="title" name="title" type="text" placeholder="Enter title" required onChange={handleInput} value={modalData.title} />

              <div className="m-2 block">
                <Label htmlFor="desc" value="Description" />
              </div>
              <TextInput id="desc" name="desc" type="text" placeholder="Enter Description" required onChange={handleInput} value={modalData.desc}/>

            </div>
            
          </div>
        </Modal.Body>
        <Modal.Footer >
          <div className="flex flex-col items-center w-[100%] ">
            <Button className=" w-[100%]" onClick={() =>handleModalSubmit()}>Done</Button>
            <p className=" mt-1 text-black text-xs">Download</p>
          </div>
         
        </Modal.Footer>
      </Modal>
    </>
  );
}
