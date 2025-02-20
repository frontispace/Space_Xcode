import Image from "next/image";


const ThirdSection = () => {
  return (
    <div className="bg-[#e3f2ff] mx-auto">
      <div className="py-10 md:p-40">
        <div className="md:flex px-10 md:space-y-0 md:space-x-20 items-center">
          <div className="flex space-x-10">
            <div className="space-y-10">
              <div className="space-y-1 text-md">
                <div className="text-[#1c2850] font-medium leading-normal text-3xl md:text-4xl pb-4">
                  This web page reload because it was using significant energy.
                </div>
                <div className="text-xl text-[#1f3575] leading-8 font-light">
                  Once verified, you can continue with your application here. Prefill won't affect your credit.
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-xl text-[#1f3575] font-medium leading-normal">
                  See you have a bisic card conponents.
                </div>
                <div className="text-sm md:text-md text-[#1f3575] leading-6 md:leading-10 font-light">
                  Would you like me to help you enhance it or create something new?
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-xl text-[#1f3575] font-medium leading-normal">
                  A more interative card with animation and gustures.
                </div>
                <div className="text-sm md:text-md text-[#1f3575] leading-6 md:leading-10 font-light">
                  What would you like to work on? The component is fully interative and includes proper shadow, borders, and spacing..
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-xl text-[#1f3575] font-medium leading-normal">
                  It's also scrollable to accommodate all contents.
                </div>
                <div className="text-sm md:text-md text-[#1f3575] leading-6 md:leading-10 font-light">
                  Just to be safe, to log in to this account you'll need to verify this is really.
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 pt-10 md:pt-0">

            <Image
              src={"/images/undraw-2.svg"}
              alt="image"
              width={700}
              height={700}
              className="
                object-cover
                rounded-md
                w-full
                p-10      
                "
            />



          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
