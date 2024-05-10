



const Banner = () => {
    return (
        <div className="mt-5">
       <div className="relative">
       <img className="mt-10 w-full lg:h-[500px] md:h-[400px] h-[450px]" src="https://i.postimg.cc/MKGm8xmX/1000-F-542375187-i5syu82-Fumib-URwgwu-Vurn-V2-W5rs-KFBy.jpg" alt="" />
        <div className="absolute top-[120px] lg:top-[170px] lg:left-[20px]">
        <section className="lg:flex lg:flex-row-reverse">
        <div className="lg:flex-1">
          <p className="text-center text-red-500 lg:text-red-700 lg:font-bold md:font-bold lg:text-2xl">Online group study is a collaborative learning approach where participants gather virtually to review, discuss, and comprehend academic material together. Through platforms like Zoom or Google Meet, students can share resources, clarify doubts, and reinforce concepts as a cohesive unit</p>
        </div>
        <div className="space-x-4 mt-4 ml-4 flex justify-center lg:flex-1">
          <button className="btn btn bg-primary text-white">Enroll Now</button>
          <button className="btn bg-green-400 text-white">Join group</button>
        </div>
        </section>
        <div className="flex justify-center lg:mt-[80px] md:mt[80px] mt-[40px]">
            <button className="btn bg-orange-500 text-white">View details</button>
        </div>
        </div>
       </div>
      </div> 
    );
};

export default Banner;