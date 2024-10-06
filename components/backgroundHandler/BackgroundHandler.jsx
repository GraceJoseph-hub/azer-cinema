import { useRouter } from "next/router";
import Image from "next/image";
import CardSlider from "../slider/CardSlider";

const BackgroundHandler = ({ imgUrl }) => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <div className="relative h-screen w-full">
      {currentRoute === "/" ? (
        <CardSlider />
      ) : (
        <div
          className="h-screen w-full relative"
          style={{ backgroundAttachment: "fixed" }}
        >
          {/* <Image
            src={imgUrl}
            alt="Background Image"
            className="w-full h-full object-cover"
            layout="fill"
            priority={true}
          /> */}
        </div>
      )}
    </div>
  );
};

export default BackgroundHandler;
