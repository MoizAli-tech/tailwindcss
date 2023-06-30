

const Contact = () => {
    return (
        <div className="flex flex-col md:flex-row mx-2 justify-around   p-5  hover:scale-100">
            <div className=" w-full flex flex-col  text-md md:text-xl lg:text-2xl justify-center p-4">
                <span className="py-4 hover:scale-125">  <i className="las la-address-book" ></i>+2320909091 </span>
                <span className="py-4 hover:scale-125">  <i className="las la-map-marker"></i>California 10th St </span>
                <span className="py-4 hover:scale-125">  <i className="las la-list"></i> 9:00 am to 7: 00 pm </span>
            </div>


            <div className="w-full  md:mx-0 ">
                <div className="hover:scale-125 w-full h-full">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13291.893050683515!2d73.07593299999998!3d33.605998199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1685800561763!5m2!1sen!2s" width="100%" height="100%" style={{ border: `none;`, borderRadius: "5px" }} loading="lazy"></iframe>
                </div>
            </div>

        </div>
    )
}

export default Contact;