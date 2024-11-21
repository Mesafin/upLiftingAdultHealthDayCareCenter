import Image from "next/image";
import participant1 from '../public/home/participant1.png'
import participant2 from '../public/home/participant2.png'
import participant3 from '../public/home/participant3.png'
import participant4 from '../public/home/participant4.png'
import Link from "next/link";

const UpliftingParticipants = () => {
  return (
    <div className="container mx-auto mt-2 md:mt-4 p-6 md:p-24">
      {/* Main Container */}
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        {/* Left Section - Images */}
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-lg overflow-hidden">
            <Image
              src={participant2}
              alt="Engaging Activity"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <Image
              src={participant1}
              alt="Social Connection"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div className="rounded-lg overflow-hidden">
         
              <Image
                src={participant4}
                alt="Community Offer"
                width={400}
                height={300}
                className="rounded-lg h-[110%]"
              />
          </div>
          <div className="rounded-lg overflow-hidden">
            <Image
              src={participant2}
              alt="Professional Care"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Right Section - Text */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold font-montserrat text-gray-900">
            Uplifting Our <span className="text-red-500">Participants</span>
          </h2>
          <p className="text-gray-700 font-montserrat text-lg">
            Uplifting Adult Day Center (UADC) is a non-profit organization
            incorporated under section 501(c).
            
          </p>
          <p className="text-gray-700 font-montserrat text-lg">
          At Uplifting Adult Day Care
          Center, our mission is to enhance lives in Inglewood. We provide:
            
          </p>
          <ul className="space-y-2 font-montserrat pb-2 md:pb-4">
            <li>
              <strong>Engaging Activities:</strong> Fun and stimulating programs
              to keep you active.
            </li>
            <li>
              <strong>Social Connection:</strong> Opportunities to make new
              friends and enjoy community.
            </li>
            <li>
              <strong>Professional Care:</strong> Compassionate support from
              our skilled team. Our goal is simple: help you live your best
              life through care that’s personalized and enriching.
            </li>
          </ul>
          <Link href="/services">
          <button className="bg-uRed text-white px-6 py-2 rounded-full hover:bg-red-600">
            Our Services
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpliftingParticipants;
