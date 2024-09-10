
import { useLoaderData } from 'react-router-dom';
import Banner from './Banner';
import Blog from './Blog';
import { useState } from 'react';

const Home = () => {
  const user=useLoaderData(); 
  const[dataLength,setdataLength]=useState(9)
  
  return (
    <div>
      <br />
      <div className='mx-auto '>
        <h2 className='text-4xl top-5 font-poppins font-bold text-black text-center'><span className='text-red-500'>WEl</span>come to Our <span className='text-blue-500
        '>Tourist</span>  Zone 
        And find <br /> your Tourist Place</h2> <br />
        <p className='font-poppins font-semibold text-center'>in this website you can know that any tourist place. <br /> How to you Going any Tourist <br /> place.how much your cost.everyThing you learn this website . etc </p>
      </div> <br />
      <Banner></Banner> <br />
      <div className='top-4'>
        <h2 className='text-3xl font-poppins font-bold text-center '>View now World Top Famous Tourist Place</h2> <hr />
<div className='grid  md:grid-cols-2 gap-1 lg:grid-cols-3 sm:grid-cols-2'>
  
     { 
      user?.slice(0,dataLength)?.map(blog=><Blog key={blog.id} blog={blog} ></Blog>)
  }
  
</div> <br /> 
<div className='text-center '>
<div className={dataLength === user.length && "hidden"}>
  <button className='btn btn-wide bg-blue-300' onClick={()=> setdataLength(user.length)}>Show all</button>
</div>
</div>
      </div>
    </div>
  );
};

export default Home;