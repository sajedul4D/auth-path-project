import { useLoaderData, useParams } from "react-router-dom";


const Details = () => {
    const details=useLoaderData();
    const {id}= useParams();
    const idInt=parseInt(id);
    const job=details.find(job =>job.id===idInt);
    console.log(job);
    return (
        <div className="mx-auto text-center "> <br />
            <h2 className="text-blue-900 text-3xl font-poppins font-extrabold">Choice Your Location and knows that <br /> your tourist place</h2>
    <div className="card bg-base-100  shadow-xl"> <br />
        <div className="font-poppins font-bold text-black text-2xl">
        <h2>{job.title}</h2>
        </div>
        <br /> <hr />
  <figure>
    <img className="lg:w-[950px] h-[650px] md:w-[650px] sm:w-[450px]"
      src={job.image}
      alt="Shoes" />
  </figure>
  <div className="card-body w-[950px] mx-auto md:w-[650px] sm:w-[450px]">
    <h2 className="card-title">{job.location}</h2>
    
    <p className="font-poppins">{job.details}</p>
  </div>
</div>
        </div>
    );
};

export default Details;