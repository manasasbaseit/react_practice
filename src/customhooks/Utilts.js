import {useState} from 'react';
import {useEffect} from 'react';
function useGetApiData(url){
    let [data,setData]=useState({})
    useEffect(
        ()=>{
            getData()
        },[]
    )

    async function getData(){
        let res=await fetch(url);
        let apidata=await res.json();
        setData(apidata)
    }
    return data
}
export default useGetApiData