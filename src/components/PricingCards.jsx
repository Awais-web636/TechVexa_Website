 import { Check } from 'lucide-react';

const PricingCard = ({
  title,
  description,
  price,
  features,
  isPopular,
  buttonColor = "bg-[#C84343] hover:bg-[#FF7F50]",
  checkColor = "text-[#FF6B2B]"
}) => {
  return (
    <div className={`relative rounded-3xl p-8 ${isPopular ? 'bg-[#1B3B5A] text-white' : 'bg-white'}`} id='reviews'>
      {isPopular && (
        <div className="absolute top-0 right-0 bg-[#FFB840] text-white px-6 py-2 rounded-tr-3xl rounded-bl-3xl font-medium">
          MOST POPULAR
        </div>
      )}
      <div className="min-h-[320px]">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className={`text-lg mb-6 ${isPopular ? 'text-gray-300' : 'text-gray-500'}`}>
          {description}
        </p>
        <div className="flex items-baseline mb-8">
          <span className={`text-5xl font-bold ${isPopular ? 'text-[#FFB840]' : 'text-[#FF6B2B]'}`}>
            ${price}
          </span>
          <span className={`ml-2 ${isPopular ? 'text-gray-300' : 'text-gray-500'}`}>
            / STARTER
          </span>
        </div>
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (

            <li key={index} className="flex items-center">
              <Check className={`h-5 w-5 mr-3 ${isPopular ? 'text-[#FFB840]' : checkColor}`} />
              <span className={isPopular ? 'text-gray-300' : 'text-gray-500'}>{feature}</span>
            </li>
          ))}
          <div class="w-full border-t-2 border-dashed border-gray-400"></div>
        </ul>

      </div>

      <button
        className={`w-full py-4 rounded-full text-white font-semibold transition-colors
          ${isPopular ? 'bg-[#FF6B2B] hover:bg-[#C84343]' : buttonColor}`}
      >
        CONTACT US
      </button>
    </div>
  );
};

const PricingSection = () => {
  const pricingData = [
    {
      title: "Designing",
      description: "Innovative Design Lead.",
      price: "30",
      features: [
        "Adobe Illustrator",
        "Photoshop",
        "Canva",
        "Ui/Ux Design",
        "Web Designing"
      ]
    },
    {
      title: "Web Development",
      description: "Comprehensive Web Development.",
      price: "99",
      features: [
        "Front-End",
        "Back-End",
        "Full-Stack",
        "WordPress",
        "DataBase Management"
      ],
      isPopular: true
    },
    {
      title: "Digital Marketing",
      description: "Digital Solutions for a Connected World.",
      price: "49",
      features: [
        "ON-Page SEO",
        "OFF-Page SEO",
        "Content Marketing",
        "Product Marketing",
        "Social Media Marketing"
      ]
    },
    {
      title: "App Development",
      description: "Radical App Designs That Break the Mold.",
      price: "149",
      features: [
        "Android App",
        "iOS App",
        "Cross-Platform App",
        "Mobile Game",
        "App Store Optimization"
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {pricingData.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </div>
  );
};

export default PricingSection;