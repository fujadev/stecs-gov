import Image from "next/image";
import Artwork from "../../assets/images/Artwork.png";

const HowToContribute = () => {
  const steps = [
    {
      title: "Make a Donation",
      description: "Donate any amount directly to our causes.",
    },
    {
      title: "Track Progress",
      description:
        "See the impact of your contribution through our real-time progress tracker.",
    },
    {
      title: "Stay Updated",
      description:
        "Receive updates on how your donations are making a difference.",
    },
  ];

  return (
    <section className="px-4 md:px-12 py-12">
      <div className="bg-[#233C8B] text-white rounded-[31px] px-md md:px-[67px] py-[61px] text-center">
        <div className="md:w-[50%] mx-auto">
          {/* Title & Subtitle */}
          <h2 className="text-[32px] md:text-[42px] font-bold">
            How to Contribute
          </h2>
          <p className="mt-[16px] mb-[12px] text-[#D8D8D8] md:text-[14px] font-medium">
            Donate to a good cause through our charity drive. Follow the steps,
            and be part of the change this Ramadan.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center mt-[48px] md:w-[80%] md:mt-[8px]"
            >
              {/* Icon Wrapper */}
              <Image
                src={Artwork}
                alt="Charity Card"
                className="w-[50px] h-[50px]  object-cover"
              />

              {/* Title & Description */}
              <h3 className="text-[24px] font-semibold text-[#FFF3F3] mt-[16px]">
                {step.title}
              </h3>
              <p className="text-[14px] text-[#E3DEDE]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToContribute;
