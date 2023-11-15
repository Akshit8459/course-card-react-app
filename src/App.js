import './App.css';
import Navbar from './Components/Navbar';
import Filter from './Components/Filter';
import Spinner from './Components/Spinner';
import Cards from './Components/Cards';
import {filterData,apiUrl} from './data'
import { useState,useEffect } from 'react';
import { Toast,ToastContainer, toast } from 'react-toastify';

function App() {
  const [courses, setCourses] = useState([]);
  const [loading,setLoading]=useState(true);
  const [category,setCategory]=useState(filterData[0].title);

  const fetchData= async ( )=> {
    setLoading(true);
    try{
      const res= await fetch(apiUrl);
      const output= await res.json();
      setCourses(output.data);
    }
    catch(err){
      toast.error("eroor");
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchData();
  },[]);


  return (
    <div className="App">
      <Navbar/>
      
      <div className='btn-container'>
        <Filter data={filterData} category={category} setCategory={setCategory}/>
      </div>
    
      <div className="card-container">
        {loading?<Spinner/>:<Cards  courses={courses} category={category}/>}
      </div>
    
    </div>
  );
}

export default App;
