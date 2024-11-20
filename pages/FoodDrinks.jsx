import Layout from "@/components/layout/Layout";
import products from "@/components/products/products";
import ProductCard from "@/components/products/ProductCard";


const FoodDrinks = () => {
  return (
    <Layout>
      <div className="relative h-[60vh] w-full bg-[url('/img/bg6.jpg')] bg-fixed bg-cover bg-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute bottom-0 left-0"
        >
          <path
            fill="#000000"
            fill-opacity="1"
            d="M0,224L48,229.3C96,235,192,245,288,229.3C384,213,480,171,576,160C672,149,768,171,864,154.7C960,139,1056,85,1152,53.3C1248,21,1344,11,1392,5.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="flex flex-col gap-16 px-[4%] pt-10 pb-[40px]">
        <div className="w-full px-[17%] flex flex-col justify-center items-center text-center">
          <h2 className="text-[2rem] text-purple font-sunflower">
            Skip the Line, Snack in Time!
          </h2>
          <p>
            Enhance your movie night at Azer Cinemas by pre-ordering snacks and
            drinks online! Why wait in line when you can skip the hassle and
            have your order ready when you arrive? From classic buttery popcorn
            to ice-cold sodas and a variety of delicious treats, we have
            everything to make your cinema experience unforgettable. Just order
            in advance, pick up on arrival, and dive straight into the action
            with all the snacks you crave!
          </p>
        </div>
        <div className="w-full grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default FoodDrinks;
