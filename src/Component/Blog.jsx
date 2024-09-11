import { Link } from "react-router-dom";


const Blog = ({blog}) => {
    const {image,title,location,details,id}=blog;
    return (
        <div className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
	
	<div className="space-y-4">
		<div className="space-y-2 ">
			<img src={image}alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500 hover:scale-110 duration-100 transition-transform " />
			
			
		</div>
		<div className="space-y-2">
			<a rel="noopener noreferrer" href="#" className="block">
				<h3 className="text-xl font-semibold dark:text-violet-600">{title}</h3>
                <h2 className="font-poppins">{location}</h2>
			</a>
            <div className="text-center">
            <Link  to={`/details/${id}`}><button className="btn btn-outline">Details</button></Link>
            </div>
			
		</div>
	</div>
</div>
    );
};

export default Blog;