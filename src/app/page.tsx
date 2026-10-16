import Image from "next/image";
import BootstrapClient from "./components/BootstrapClient";
import styles from "./page.module.css";

export default function Home() {
  return (
	<section className="container">
		<div className="row">
			<div className="col-12 col-md-7 col-lg-6 order-2 order-md-1">

				<h1>Welcome to Golden Nails & Spa, your ultimate destination for relaxation, self-care, and flawless beauty.</h1>

				<p>
					Step into our tranquil sanctuary and leave the hustle and bustle of everyday life behind. At Golden Nails & Spa, we believe that pampering is 
					an essential ritual, not just a luxury. Our talented and experienced technicians are dedicated to delivering exceptional results tailored just for you.
				</p>
				<p>
					We pride ourselves on maintaining the highest standards of cleanliness, utilizing top-tier products, and staying ahead of the latest trends 
					in nail art, manicures, pedicures, and spa treatments. From classic elegance to bold, custom designs, every service is performed with precision 
					and care to ensure your hands and feet look and feel their absolute best.
				</p>
				<p>
					Experience the golden standard in beauty and wellness at Golden Nails & Spa—because you deserve to shine from your fingertips down to your toes.
				</p>

			</div>
			<div className="col-12 col-md-5 col-lg-6 order-1 order-md-2">
				<Image src={"/images/nail-design1.png"} alt="Nail Design" className="img-fluid" loading="eager" style={{ height: 'auto', width: "100%" }} width={1064} height={1292} />
			</div>
		</div>

		<div className="row">
			<div className="col-12">
				
			</div>
		</div>

	</section>

    
  );
}
