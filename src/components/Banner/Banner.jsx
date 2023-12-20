
const Slider = () => {

  return (
    <div className="lg:flex py-7 items-center px-5 md:px-16 pt-7 ">
      <div
        className="lg:w-2/3 mb-7 text-center lg:text-left space-y-5  items-center"
      >
        <h1
          className="text-5xl font-extrabold"
        >
          GOOD FOOD MAKE <br />
          <span data-aos="flip-down" className="text-[#c5a35e]">
            FRESH MIND
          </span>
        </h1>
        <p
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="md:w-3/4 text-gray-500"
        >
          Rustle up an easy veggie tradable for a quick midweek dinner, perfect
          for feeding the family with minimal washing up.
        </p>
        <div data-aos="fade-up" data-aos-duration="3000">
          <button
            className={`btn rounded-none font-normal border-none text-xs`}
          >
         Mode
          </button>
        </div>
      </div>

      <div
        className="flex md:justify-center lg:justify-start"
      >
        <img className="rounded-full w-full md:w-96" src="" alt="" />
      </div>
    </div>
  );
};

export default Slider;
