import Image from "next/image";
import BootstrapClient from "../components/BootstrapClient";
import styles from "../page.module.css";

export default function Home() {
  return (
	<>
		<section className="container mb-5">
			<div className="row align-items-center">
				<div className="col-12 col-md-7 col-lg-8 order-2 order-md-1 d-flex flex-column align-items-center p-3">

					<h1>Welcome to Golden Nails & Spa, your ultimate destination for relaxation, self-care, and flawless beauty.</h1>

					<div className="mt-5 d-grid gap-2 d-md-flex justify-content-md-start">
						<a href="https://app.squareup.com/appointments/book/rfrwmdwkv6qhp0/L5JMDAEQSTJ1K/start" className="btn btn-primary btn-lg px-4 rounded-pill mb-5">
							Book an Appointment Online
						</a>
						<a href="tel:+16084220468" className="btn btn-outline-primary btn-lg px-4 rounded-pill mb-5">Call (608) 422-0468</a>
					</div>

				</div>
				<div className="col-12 col-md-5 col-lg-4 order-1 order-md-2">
					<Image src={"/images/nail-design1.png"} alt="Nail Design" className="img-fluid" loading="eager" style={{ height: 'auto', width: "100%" }} width={1064} height={1292} />
				</div>
			</div>
		</section>

		<section className="container-fluid d-flex justify-content-center" style={{backgroundColor: "#462523"}}>
			<article className="container row">
				<div className="col-12 p-5">
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
			</article>
		</section>
		
		<section className="container-fluid d-flex justify-content-center" style={{backgroundColor: "#f6f2c0"}}>
			<article className="container row p-5 text-dark">
				<h2 className="text-center mb-5">Professional Nail Care Services</h2>
				<div className="col-12 col-md-4">
					<div className="card border-0"  style={{ backgroundColor: 'unset', color: "unset" }}>
						<h3 className="card-header">
							Manicures
						</h3>
						<div className="ratio ratio-1x1">
							<Image src={"/images/nail-design6.jpg"} className="card-img-top object-fit-cover rounded" alt="Manicure Nails" loading="lazy" width={300} height={300} />
						</div>
						
						<div className="card-body">
							<p className="card-text">
								Treat yourself to one of Golden Nails & Spa&apos;s professional and relaxing manicures that include nail shaping, cuticle care, hand massage 
								and your favorite nail polish.
							</p>
							<a href="https://app.squareup.com/appointments/book/rfrwmdwkv6qhp0/L5JMDAEQSTJ1K/start" aria-label="Book a Manicure Appointment Online" className="btn btn-primary btn-lg px-4 rounded-pill mb-5">
								Book Online Now
							</a>
						</div>
					</div>
				</div>
				<div className="col-12 col-md-4">
					<div className="card border-0"  style={{ backgroundColor: 'unset', color: "unset" }}>
						<h3 className="card-header">
							Pedicures
						</h3>
						<div className="ratio ratio-1x1">
							<Image src={"/images/pedicure1.jpg"} className="card-img-top object-fit-cover rounded" alt="Pedicure Nails" loading="lazy" width={300} height={300} />
						</div>
						<div className="card-body">
							<p className="card-text">
								Relax, Refresh, Renew! Golden Nails & Spa&apos;s pedicures will leave your legs and feet feeling relaxed, refreshed, and renewed with a warm bath, 
								nail shaping, cuticle care, massage with hot stones as an option, paraffin wax, warm towels, and your favorite nail polish.
							</p>
							<a href="https://app.squareup.com/appointments/book/rfrwmdwkv6qhp0/L5JMDAEQSTJ1K/start" aria-label="Book a Pedicure Appointment Online" className="btn btn-primary btn-lg px-4 rounded-pill mb-5">
								Book Online Now
							</a>
						</div>
					</div>
				</div>
				<div className="col-12 col-md-4">
					<div className="card border-0"  style={{ backgroundColor: 'unset', color: "unset" }}>
						<h3 className="card-header">
							Artificial Nails
						</h3>
						<div className="ratio ratio-1x1">
							<Image src={"/images/nail-design3.jpg"} className="card-img-top object-fit-cover rounded" alt="Artificial Nails" loading="lazy" width={300} height={300} />
						</div>
						<div className="card-body">
							<p className="card-text">
								From designs to extensions, Golden Nails & Spa can do it all! Enhance your nails with acrylic, dip powder, ombré, hand painted designs, and more!
							</p>
							<a href="https://app.squareup.com/appointments/book/rfrwmdwkv6qhp0/L5JMDAEQSTJ1K/start" aria-label="Book an Artificial Nails Appointment Online" className="btn btn-primary btn-lg px-4 rounded-pill mb-5">
								Book Online Now
							</a>
						</div>
					</div>
				</div>
			</article>
		</section>
		
	</>
    
  );
}
