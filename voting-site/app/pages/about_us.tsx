import Navbar from "../components/navigation_bar/navbar";

export default function AboutUs() {
	return (
		<div>
			<Navbar />
			<h1 className="text-5xl font-bold absolute left-1/2 top-[20%] transform -translate-x-1/2 text-center"
			>About VSA
			</h1>
			<p className="text-2xl absolute left-1/2 top-[30%] transform -translate-x-1/2 text-center">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
				Cumque dolorum iste provident accusamus inventore, quia 
				aperiam commodi voluptatibus in obcaecati aliquam totam 
				consequatur laudantium reprehenderit eveniet possimus 
				labore nobis error. Lorem ipsum dolor sit amet consectetur 
				adipisicing elit. Nam pariatur rerum nostrum similique 
				ducimus quo accusantium, illo, saepe magni, atque possimus 
				asperiores facilis! Porro reprehenderit ut explicabo 
				facilis labore deleniti!
			</p>
		</div>
	);
}