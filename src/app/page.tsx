import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <section className="container">
      <div className="row">
        <div className="col-12 col-lg-6">
          <h1>Content</h1>
        </div>
        <div className="col-12 col-lg-6">
          <div id="homeCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <Image src={"/images/nail-design1.jpg"} alt="Nail Design" className="img-fluid" loading="eager" style={{ height: 'auto', width: "100%" }} width={1064} height={1292} />
              </div>
              <div className="carousel-item">
                <Image src={"/images/nail-design2.jpg"} alt="Nail Design" className="img-fluid" loading="eager" style={{ height: 'auto', width: "100%" }} width={1064} height={1292} />
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}
