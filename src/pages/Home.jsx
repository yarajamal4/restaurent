import { useNavigate } from "react-router-dom";
import heroBg from "../assets/gallery/heroo.jpeg";

const Home = () => {
 const navigate = useNavigate();

 return (
   <section id="home" className="position-relative d-flex align-items-center" style={{ minHeight: "100vh" }}>

     <div className="hero-img-wrap">
       <img
         src={heroBg}
         alt="Restaurant interior"
         style={{ width: "100%", height: "100vh", objectFit: "cover", display: "block" }}
       />
     </div>

     <div className="hero-bg" />
     <div className="container hero-content py-5">
       <div className="row justify-content-center text-center">
         <div className="col-12 col-md-10 col-lg-8">

           <p className="section-eyebrow mb-3 hero-fade hero-fade-1">
             ★&ensp;Michelin Three Stars&ensp;★
           </p>

           <h1
             className="hero-title mb-4 hero-fade hero-fade-2"
             style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)" }}
           >
             L'Art de la<br />
             <em style={{ color: "var(--gold)" }}>Table</em>
           </h1>

           <p
             className="hero-fade hero-fade-3 mb-5"
             style={{ fontSize: "0.8rem", letterSpacing: "0.15em", color: "rgba(240,237,232,0.55)", lineHeight: 2 }}
           >
             Where every dish tells a story of passion,<br className="d-none d-sm-block" />
             tradition, and extraordinary craftsmanship.
           </p>

           <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center hero-fade hero-fade-4">
             <button className="btn-gold" onClick={() => navigate("/reservation")}>
               <span>Reserve Your Evening</span>
             </button>
             <button className="btn-outline-gold" onClick={() => navigate("/menu")}>
               View Menu
             </button>
           </div>

         </div>
       </div>
     </div>

     <div className="hero-scroll-indicator d-none d-md-flex">
       <div className="scroll-line" />
       <span style={{ fontSize: "0.55rem", letterSpacing: "0.3em", color: "rgba(240,237,232,0.3)", textTransform: "uppercase" }}>
         Scroll
       </span>
     </div>

   </section>
 );
};

export default Home;