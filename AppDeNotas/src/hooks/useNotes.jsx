import {useEffect, useState}  from "react"
import { useTokenContext } from "../contexts/TokenContext";
import { useSearchParams } from "react-router-dom";
import { getNotesService } from "../services/getNotesService";

export const useNotes = ()=> {
   const [notes,setNotes] = useState([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState("");

   const [searchParams, setSearchParams] = useSearchParams()
   const {token} = useTokenContext()

   useEffect(()=>{
   const main = async ()=>{
    setLoading(true)
    try {
        const data = await getNotesService(token)
        setNotes(data)
    } catch (error) {
        setError(error.message)
    }finally{setLoading(false)}
}
 main()
   },[searchParams,token])
    return {loading,notes,error}}