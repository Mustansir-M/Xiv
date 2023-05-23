import React, { useEffect ,useState} from 'react';
import "./LetsStyles.css";
// import "./ContactForm"
import ContactForm from './ContactForm';

const Lets = () => {
        useEffect(() => {
          const cardElements = document.querySelectorAll('.card');
      
          const handleIntersection = (entries, observer) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.style.animation = 'fade-in 1s both';
                entry.target.style.visibility = 'visible';
                observer.unobserve(entry.target);
              }
            });
          };
      
          const observer = new IntersectionObserver(handleIntersection, {
            rootMargin: '0px',
            threshold: 0.2,
          });
      
          cardElements.forEach((card) => {
            observer.observe(card);
          });
      
          return () => {
            observer.disconnect();
          };
        }, []);



        const [showForm, setShowForm] = useState(false);

        const handleButtonClick = () => {
            setShowForm(!showForm);
        };


        const handleCloseForm=()=>{
            setShowForm(false);
        }

  return (
    <div className="servicesBannerComponent">
        <div className="collaborate">
            <h4>Let's Collaborate</h4>
        </div>
        <div className="servicesMainDiv">
            <div className="card card-1">
                <div className="cardContent">
                    <div className="heading">
                        <h2>AI + RPA is what we do</h2>
                    </div>
                    <div className="info">
                        <h3>Future-Proof your business. Drive efficiency, profitability and deliver on customer experience</h3>
                    </div>
                    <div className="services">
                        <a href="https://www.xivtech.io./services/AIandRPAautomation">
                            <p>AI + RPA Automation</p>
                            <img src="https://www.xivtech.io./Arrow-black.svg" alt="arrow-black"/>
                        </a>
                    </div>
                    </div>
                    <div className="cardImage">
                        
                            <img className="serviceImage-b" src="https://www.xivtech.io./rp2.jpg" alt="servicesimage"/>
                    
                    </div>
                </div>

                <div className="card card-2">
                <div className="cardContent">
                    <div className="heading">
                        <h2>Make Bolder Choices</h2>
                    </div>
                    <div className="info">
                        <h3>Digital focused strategies to realize market-changing ideas</h3>
                    </div>
                    <div className="services">
                        <a href="https://www.xivtech.io./services/enterprise-apps">
                            <p>Build Better Apps</p>
                            <img src="https://www.xivtech.io./Arrow-black.svg" alt="arrow-black"/>
                        </a>
                    </div>
                    </div>
                    <div className="cardImage">
                        
                            <img className="serviceImage-b" src="https://www.xivtech.io./p1.png" alt="servicesimage"/>
                    
                    </div>
                </div>

                <div className="card card-3">
                <div className="cardContent">
                    <div className="heading">
                        <h2>Innovate with Speed</h2>
                    </div>
                    <div className="info">
                        <h3>Create higher quality software, deliver on customer expectations and business goals</h3>
                    </div>
                    <div className="services">
                        <a href="https://www.xivtech.io./services/delivery-pipeline-automation">
                            <p>DevOps</p>
                            <img src="https://www.xivtech.io./Arrow-black.svg" alt="arrow-black"/>
                        </a>
                    </div>
                    </div>
                    <div className="cardImage">
                        
                            <img className="serviceImage-b" src="https://www.xivtech.io./p2.jpg" alt="servicesimage"/>
                    
                    </div>
                </div>

                <div className="card card-4">
                <div className="cardContent">
                    <div className="heading">
                        <h2>Embrace Cloud</h2>
                    </div>
                    <div className="info">
                        <h3>With Cloud-First accelerate innovation and optimize performance</h3>
                    </div>
                    <div className="services">
                        <a href="https://www.xivtech.io./services/cloud">
                            <p>Cloud Services</p>
                            <img src="https://www.xivtech.io./Arrow-black.svg" alt="arrow-black"/>
                        </a>
                    </div>
                    </div>
                    <div className="cardImage">
                        
                            <img className="serviceImage-b" src="https://www.xivtech.io./p3.jpg" alt="servicesimage"/>
                    
                    </div>
                </div>
    </div>
    <div className="intouch">
    {!showForm && (
        <button className='btn' onClick={handleButtonClick}>
          Get in touch
        </button>
      )}
      {showForm && <ContactForm onClose={handleButtonClick} />}
    </div>
    <hr className='hr-line'></hr>
</div>


  )
}


export default Lets

