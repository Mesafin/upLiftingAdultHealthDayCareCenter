import Image from "next/image";
import participant1 from "../public/home/participant1.png";
import participant2 from "../public/home/participant2.png";
import participant3 from "../public/home/participant3.png";
import participant4 from "../public/home/participant44.png";
import Link from "next/link";

const UpliftingParticipants = () => {
  return (
    <div className="container mx-auto pt-16 p-6 md:pb-12 md:mt-24 bg-white">
      {/* Main Container */}
      <div className="flex flex-col-reverse lg:flex-row gap-8 md:gap-12">
        {/* Left Section - Images */}
        <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-8 md:gap-4">
          <div className="rounded-lg overflow-hidden">
            <Image
              src={participant2}
              alt="Engaging Activity"
              width={400}
              // height={300}
              className="rounded-lg h-full"
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <Image
              src={participant1}
              alt="Social Connection"
              width={400}
              // height={300}
              className="rounded-lg h-full"
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <Image
              src={participant4}
              alt="Community Offer"
              width={400}
              // height={300}
              className="rounded-lg h-full"
             
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <Image
              src={participant3}
              alt="Professional Care"
              width={400}
              // height={300}
              className="rounded-lg h-full"
            />
          </div>
        </div>

        {/* Right Section - Text */}
        <div className="w-full">
          <h2 className="text-3xl font-bold font-montserrat tracking-wider text-gray-900 pb-5 md:pb-2">
            Uplifting Our <span className="text-red-500">Participants</span>
          </h2>
          <p className="text-gray-700 font-montserrat sm:text-sm lg:text-lg md:pe-4 xl:pe-2 xxl:text-lg  font-semibold">
            Uplifting Adult Day Center (UADC) is a non-profit organization
            incorporated under section 501(c).
          </p>
          <p className="text-gray-700 font-montserrat sm:text-sm lg:text-lg md:pe-4 font-semibold xxl:text-lg xl:pe-2">
            At Uplifting Adult Day Care Center, our mission is to enhance lives
            in Inglewood. We provide:
          </p>
          <ul className="space-y-4 text-gray-700 font-montserrat sm:text-sm lg:text-lg pb-5 md:pb-8 md:pe-4 xxl:text-lg xl:pe-2">
            <li>
              <strong>Engaging Activities:</strong> Fun and stimulating programs
              to keep you active.
            </li>
            <li>
              <strong>Social Connection:</strong> Opportunities to make new
              friends and enjoy community.
            </li>
            <li>
              <strong>Professional Care:</strong> Compassionate support from our
              skilled team. Our goal is simple: help you live your best life
              through care that’s personalized and enriching.
            </li>
          </ul>
          <Link href="/services">
            <button className="bg-uRed text-white lg:text-lg px-6 py-2 mt-5 md:mt-1 rounded-full hover:bg-red-600">
              Donate
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpliftingParticipants;
