import ArtistCard from "@/Components/ArtistCard";
import BreadCrumbs from "@/Components/BreadCrumbs";
import Footer from "@/Components/Footer";
import MusicCard from "@/Components/MusicCard";
import Slider from "@/Components/Slider";
import { songs, artistData, albums } from "@/Data/data";


export default function Home() {
  
  return (
    <div className="flex-1 bg-[#1f1f1f] text-white rounded-xl h-[90vh] overflow-y-scroll">
      <BreadCrumbs content={"HOME"} />
      {/* TRENDING NOW  */}
      <div className="mt-24 px-6">
        <Slider
          title={"Trending Now"}
          dataLength={songs.length}
          scrollSize={208}
        >
          {songs.map((item, index) => (
            <MusicCard
              key={item.id}
              data={item}
            />
          ))}
        </Slider>
      </div>

      {/* TOP ALBUMS  */}
      <div className="mt-10 px-6">
        <Slider title={"Top Albums"} dataLength={albums.length} scrollSize={208}>
          {albums.map((item, index) => (
            <MusicCard
              key={item.id}
              data={item}
            />
          ))}
        </Slider>
      </div>

      
      {/* TOP Artists  */}
      <div className="mt-10 px-6">
        <Slider title={"Top Artists"} dataLength={artistData.length} scrollSize={50}>
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
