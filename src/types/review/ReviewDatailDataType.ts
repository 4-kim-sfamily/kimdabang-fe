export interface ReviewDatailDataType{
    id:string;
    writterId:string;
    rate:number;
    content:string;
    imgList:ReviewDatailImgType[];
    createdAt:string;
}
interface ReviewDatailImgType{
    id: string;
    imgUrl: string;
}