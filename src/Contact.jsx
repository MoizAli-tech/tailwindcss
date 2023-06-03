import ServicesCSS from "./Services.module.css";
import ContactCSS from "./Contact.module.css";

const Contact = () => {
    return (
        <div className={ContactCSS.Contact}>
            <div className={ContactCSS.functionalities}>
                <span>  <i className="las la-address-book" ></i>+2320909091 </span>
                <span>  <i className="las la-map-marker"></i>California 10th St </span>
                <span>  <i className="las la-list"></i> 9:00 am to 7: 00 pm </span>
            </div>


            <div >
                <div>  
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13291.893050683515!2d73.07593299999998!3d33.605998199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1685800561763!5m2!1sen!2s" width="600" height="300" style={{border:`none;`, borderRadius:"5px"}} loading="lazy"></iframe>
                </div>
            </div>

        </div>
    )
}

export default Contact;