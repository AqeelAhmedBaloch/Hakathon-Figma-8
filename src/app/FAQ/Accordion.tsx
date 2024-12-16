const Accordion = () => {

  return (
    <div className="ml-12 mt-8 p-1 bg-gray-200 rounded-md w-[448px] h-[110px] max-w-xl mx-auto">
      {/* Header */}
      <div
        className="flex justify-between items-center cursor-pointer">
        <h3 className="font-semibold text-lg">What types of chairs do you offer?</h3>
        <span className="text-2xl font-bold">
          {"+"}
        </span>
      </div>

      {/* Content */}
    

        <p className="mt-4 text-[12px] text-gray-600 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam
          amet delectus libero veritatis enim repellat optio rerum delectus deserunt, odit
          cupiditate eos molestiae quas totam quidem?
        </p>
    
     
    </div>
  );
};

export default Accordion;
