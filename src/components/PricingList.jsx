import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";

const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap mt-10">
      {pricing.map((item) => (
        <div
          key={item.id}
          className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
        >
          <h3 id="title" className="font-poppins text-linear-gradient font-semibold h3 mb-6">{item.title}</h3>

          <p className="body-2 min-h-[4rem] mb-3 text-gray-300">
            {item.description}
          </p>

          <div className="flex items-center h-[5.5rem] mb-6">
            {item.price && (
              <>
                <div className="h3">$</div>
                <div className="text-[5.5rem] leading-none font-bold">
                  {item.price}
                </div>
                <span className="pl-2 h6"><p><span className="text-[5.5rem] leading-none">/</span> month</p></span>
              </>
            )}
          </div>
          <p className=" mb-4 body-2  text-n-1/50">Save 10% with Quarterly Billing!</p>
          <Button
            className="w-full mb-6 hidden text-n-1  hover:text-n-14/100 lg:flex"
            href="https://calendly.com/ms-shubhada/start-with-us-getting-started-meeting"
            white={!!item.price}
          >
            Book a Call
          </Button>

          <ul>
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start py-5 border-t border-n-6"
              >
                <img src={check} width={24} height={24} alt="Check" />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;