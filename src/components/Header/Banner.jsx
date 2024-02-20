import img from "../../assets/img/bannerimg.png";

const Banner = () => {
    return (
        <>
            <div className="w-full relative">
                <img className="h-[80vh] w-full rounded-sm" src={img} alt="" />
            </div>
            <div className="absolute top-72 left-2/4 transform -translate-x-2/4 text-center">
                <h1 className="text-6xl text-red-600 font-bold">Buy a Amazing Toy for <span className="text-green-600">Your Baby</span></h1>
                <button className="rounded-md p-2 m-2 bg-emerald-700 text-white">Shop Now</button>
            </div>
        </>
    );
};

export default Banner;


