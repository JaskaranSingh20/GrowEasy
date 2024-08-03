
export interface ImageProps{
    title: string ,
    desc: string,
    background: string,
    image: string,
    id: number,
    tempId: number
}

export interface BannerImageProp extends ImageProps{
    key: number,
    setBanData: any,
    banData:{
        id: number;
        tempId: number;
        background: string;
        image: string;
        title: string;
        desc: string;
    }[]
}


export interface ModalProps extends ImageProps{
    setBanData: any
    selectedId: number | undefined,
    banData:{
        id: number;
        tempId: number;
        background: string;
        image: string;
        title: string;
        desc: string;
    }[]
}
