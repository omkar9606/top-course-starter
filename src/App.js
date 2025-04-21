import React from "react";
import {apiUrl,filterData} from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { toast } from "react-toastify";
import { useState } from "react";
import {useEffect} from "react";
import Spinner from "./components/Spinner";



const App = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true); // to show loading spinner

  const [category, setCategory] = useState(filterData[0].title); // to filter courses by category

  async function fetchData() {
    setLoading(true); // set loading to true when fetching data
    try {
        let response = await fetch(apiUrl);
        let output = await response.json();
        //output-> 
        setCourses(output.data); // save data into a variable
    }
    catch (error) {
      toast.error("something went wrong");
    }
    setLoading(false); // set loading to false after fetching data
  }

  useEffect(() => {
    fetchData(); // call the function to fetch data
  },[]);

// const [courses, setCourses] = useState(null);

// useEffect(() => {

//   const fetchData = async () => {
//     try {
//       const res = await fetch(apiUrl);
//       const output = await res.json();
//       setCourses(output.data); 
//       //save data into a variable

//     } catch (error) {
//       toast.error("something went wrong");
//     }
//   }
//   fetchData();
// },[]);


  return(

    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
         <Navbar />
      </div>
      <div  className="bg-bgDark2">
        <div>
           <Filter 
           filterData={filterData} 
           category={category}  
           setCategory={setCategory} />
        </div>
  
      
      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {
          loading ? (<Spinner />) : (<Cards courses={courses} category={category}/>)
        }
          
      </div>
      </div>
    </div>
  );
};

export default App;
