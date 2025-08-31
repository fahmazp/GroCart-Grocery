import { Clock, Clock10, Clock4, Leaf, Shield, Star } from "lucide-react";
import { BannerTextAnimate } from "../other-components/HeroTxtAnimate";
import { HeroSubTextAnimate } from "../other-components/SubHeadingAnimate";
import { SlidingNumberInView } from "../animation-comps/HeroNumberAnimate";

export default function HeroSection({ onShopNowClick }) {

  return (
    <section className="relative grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-8 text-white rounded-xl mx-2
    bg-[url('/images/GradientBanner.jpeg')] bg-cover bg-center bg-no-repeat">
      {/* Left: Text */}
      <div className="absolute inset-0 bg-green-900/40 rounded-xl z-0" />

      <div className="relative flex flex-col justify-center">
        <BannerTextAnimate/>
        <HeroSubTextAnimate/>

            <div className="hidden md:flex flex-wrap gap-2.5 mb-5">
              <div className="flex items-center space-x-1 text-sm text-text-secondary">
                <Clock className="w-4 h-4 text-white"/>
                <span>10-min delivery</span>
              </div>
              <div className="flex items-center space-x-1 text-sm text-text-secondary">
                <Leaf className="w-4 h-4 text-white"/>
                <span>Fresh products</span>
              </div>
              <div className="flex items-center space-x-1 text-sm text-text-secondary">
                <Shield className="w-4 h-4 text-white"/>
                <span>Quality assured</span>
              </div>
            </div>

        <button className="bg-orange-500 hover:bg-orange-600 transition text-white font-semibold px-4 py-2 rounded-full w-fit"
                onClick={onShopNowClick}
        >
          Start Shopping
        </button>
        
        <div className="mt-4 grid grid-cols-3 gap-2 pt-2.5 border-t-2 border-primary/15">
          <div>
            <SlidingNumberInView target={15} suffix="K+" />
            <div className="text-sm text-center text-text-secondary">Happy Users</div>
          </div>
          <div>
            <SlidingNumberInView target={25} suffix="K+" />
            <div className="text-sm text-center text-text-secondary">Eco-Friendly Deliveries</div>
          </div>
          <div>
            <SlidingNumberInView target={50} suffix="+" />
            <div className="text-sm text-center text-text-secondary">Cities Served</div>
          </div>
        </div>        

      </div>

      {/* Right: Image */}
      <div className="relative flex justify-center items-center">
        <div className="relative z-10">
        <img
          src="/images/bannerPhoto.jpeg"
          className="drop-shadow-lg drop-shadow-zinc-800 w-full max-w-md rounded-2xl"
          loading="lazy"
          alt="Banner"
          />

          <div className="absolute -top-2 -left-4 bg-card rounded-lg p-1 sm:p-2 shadow-md z-20">
            <div className="flex items-center space-x-2">
                <div className="w-4 h-4 sm:w-5 sm:h-5 bg-primary/5 rounded-lg flex items-center justify-center">
                  <Clock4 className="text-primary"/>
                </div>

                <div>
                  <div className="text-xs sm:text-sm font-semibold text-foreground">10 Minutes</div>
                  <div className="text-[10px] sm:text-xs text-foreground">Average delivery</div>
                </div>
            </div>
          </div>

          <div className="absolute bottom-2 -right-4 bg-card rounded-lg p-1 sm:p-2 shadow-md z-20">
            <div className="flex items-center space-x-2">
                <div className="w-4 h-4 sm:w-5 sm:h-5 bg-primary/5 rounded-lg flex items-center justify-center">
                  <Star className="text-primary"/>
                </div>

                <div>
                  <div className="text-xs sm:text-sm font-semibold text-foreground">4.9 Rating</div>
                  <div className="text-[10px] sm:text-xs text-foreground">Customer reviews</div>
                </div>
            </div>
          </div>

        </div>

          

      </div>
      
    </section>
  );
};

