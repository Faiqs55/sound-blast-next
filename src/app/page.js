import ArtistCard from "@/Components/ArtistCard";
import BreadCrumbs from "@/Components/BreadCrumbs";
import Footer from "@/Components/Footer";
import MusicCard from "@/Components/MusicCard";
import Slider from "@/Components/Slider";
import { data, data2, artistData } from "@/Data/data";

export default function Home() {
  
  
  return (
    <div className="flex-1 bg-[#1f1f1f] text-white rounded-xl h-[90vh] overflow-y-scroll">
      <BreadCrumbs content={"HOME"} />
      {/* TRENDING NOW  */}
      <div className="mt-24 px-6">
        <Slider
          title={"Trending Now"}
          dataLength={data.length}
          scrollSize={208}
        >
          {data.map((item, index) => (
            <MusicCard
              key={item.id}
              title={item.title}
              img={item.img}
              artist={item.artist}
              index={index}
            />
          ))}
        </Slider>
      </div>

      {/* TOP ALBUMS  */}
      <div className="mt-10 px-6">
        <Slider title={"Top Albums"} dataLength={data2.length} scrollSize={208}>
          {data2.map((item, index) => (
            <MusicCard
              key={item.id}
              title={item.title}
              img={item.img}
              artist={item.artist}
              index={index}
            />
          ))}
        </Slider>
      </div>

      
      {/* TOP Artists  */}
      <div className="mt-10 px-6">
        <Slider title={"Top Artists"} dataLength={artistData.length} scrollSize={178}>
          {artistData.map((item, index) => (
            <ArtistCard index={index} name={item.name} key={item.id} img={item.img} />
          ))}
        </Slider>
      </div>
      <div className="mt-10">
      <Footer/>
      </div>
    </div>
  );
}
