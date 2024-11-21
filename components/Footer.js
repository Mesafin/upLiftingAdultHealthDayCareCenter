import Link from "next/link";


const Footer = () => {
  return (
    <>
 
    <footer className="text-white bg-footerBg md:p-10 p-5 md:pt-24 font-chunk  ">
       
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="md:col-span-2 md:pe-6">
          {/* <h2 className="text-2xl font-bold mb-8">
            Uplifting <span className="text-red-500">Adult</span> Day Center
            </h2> */}
          <p className="mb-10 font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="mb-8 font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="flex gap-4 mb-2 font-light ">
            <div className="flex justify-center text-uRed text-4xl">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <p>
              <strong>Inglewood,
                <br />
                 California</strong>
            </p>
          </div>

          <div className="flex gap-4 font-light">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-uRed text-white">
              <i className="fas fa-phone"></i>
            </div>{" "}
            <p>(987) 654-3210</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-8 md:mb-16 tracking-widest">QUICK LINKS</h3>
          <ul>
            <li>
              <a href="#" className="hover:text-red-500">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                Virtual Tour
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                Appointment
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-8 md:mb-16 tracking-widest">USEFUL LINKS</h3>
          <ul>
            <li>
              <a href="#" className="hover:text-red-500">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                Virtual Tour
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                Appointment
              </a>
            </li>
          </ul>
        </div>

        <div className="">
          <h3 className="text-lg font-semibold tracking-widest mb-8 md:mb-16">NEWSLETTER</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dot
            dolore magna aliqua.
          </p>
          <div className="flex flex-col gap-6 ">
            

          <Link href="/contact">
          <button className="mt-8 bg-uRed hover:bg-red-500 text-white py-2 px-4 rounded">
            Contact Us
          </button>
          </Link>
          <Link href="/appointment">
          <button className="mt-2 bg-uRed hover:bg-red-500 text-white py-2 px-4 rounded">
            Make an appointment
          </button>
          </Link>
         
          </div>
        </div>
      </div>
    </footer>
            </>
  );
};

export default Footer;
