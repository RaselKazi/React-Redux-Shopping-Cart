export const FILTER_SORT="FILTER_SORT";
export const FILTER_SIZE="FILTER_SIZE";


export const filterBySort =(e)=>{
    return {type:FILTER_SORT , value:e.target.value}
}
export const filterBySize =(e)=>{
    return {type:FILTER_SIZE ,value:e.target.value }
}
