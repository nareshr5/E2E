import { useState } from "react";
import { useEffect } from "react";
// fetch with error catching 

const FetchComponent = () => {
    const[data,setdata] = useState("");
    const[error,seterror]=useState(null);
    const[loading,setloading]=useState(true); // based on the loading state we can show the shimmer UI


    useEffect(() =>{

        const getdata = async () =>{

            try{

                const response = await fetch('https://dummyjson.com/products');

                if(!response.ok) throw new Error("cannot fetch the data");

                const jsonvalue = await response.json();

                 setdata(jsonvalue.products);

            }catch(err){
                seterror(err.message);
            }finally{
                setloading(false);
            }

            

        };

        getdata();


    },[]);


    if(loading) return <p>Loading ...</p>
    if(error) return <p>error: {error}</p>


    return(

            <p>the data is fetched successfuly!</p>
    )
};

export default FetchComponent;