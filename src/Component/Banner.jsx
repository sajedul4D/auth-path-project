import img from '../assets/alice-Bd7PS3WOsag-unsplash.jpg'
import img1 from '../assets/adrian-rios-xrUTMse5yd8-unsplash.jpg'
import img2 from '../assets/alla-havriushenko-pVkQ2SiDq5k-unsplash.jpg'
import img3 from '../assets/barna-bartis-Dc-PiwAYKR8-unsplash.jpg'
import img4 from '../assets/md-ziaul-haque-JyuCy4logpQ-unsplash.jpg'
import img5 from '../assets/alice-tt88cpvt9CY-unsplash.jpg'
import img6 from '../assets/cederic-vandenberghe-21DP3hytVHw-unsplash.jpg'

const Banner = () => {
    return (
        <div>
            
            <div className="relative w-full flex gap-4 py-6 overflow-x-auto">
	<img className="h-[450px] w-[500px] aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src={img} alt="Image 0" />
	<img className="h-[450px] w-[500px] aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src={img1} alt="Image 1" />
	<img className="h-[450px] w-[500px] aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src={img2} alt="Image 2" />
	<img className="h-[450px] w-[500px] aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src={img3} alt="Image 3" />
	<img className="h-[450px] w-[500px] aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src={img4} alt="Image 4" />
	<img className="h-[450px] w-[500px] aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src={img5} alt="Image 5" />
	<img className="h-[450px] w-[500px] aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src={img6} alt="Image 6" />
</div>
        </div>
    );
};

export default Banner;