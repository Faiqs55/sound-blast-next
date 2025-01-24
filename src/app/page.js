import BreadCrumbs from "@/Components/BreadCrumbs";
import MusicCard from "@/Components/MusicCard";
import Slider from "@/Components/Slider";

export default function Home() {
  const data = [
    {
      id: 1,
      img: '/pasoori.jpg',
      title: 'Pasoori ft. Ali Sethi & Shae Gill',
      artist: 'Coke Studio'
    },
    {
      id: 2,
      img: '/pasoori.jpg',
      title: 'Pasoori ft. Ali Sethi & Shae Gill',
      artist: 'Coke Studio'
    },
    {
      id: 3,
      img: '/pasoori.jpg',
      title: 'Pasoori ft. Ali Sethi & Shae Gill',
      artist: 'Coke Studio'
    },
    {
      id: 4,
      img: '/pasoori.jpg',
      title: 'Pasoori ft. Ali Sethi & Shae Gill',
      artist: 'Coke Studio'
    },
    {
      id: 5,
      img: '/pasoori.jpg',
      title: 'Pasoori ft. Ali Sethi & Shae Gill',
      artist: 'Coke Studio'
    },
    {
      id: 6,
      img: '/pasoori.jpg',
      title: 'Pasoori ft. Ali Sethi & Shae Gill',
      artist: 'Coke Studio'
    },
    {
      id: 7,
      img: '/pasoori.jpg',
      title: 'Pasoori ft. Ali Sethi & Shae Gill',
      artist: 'Coke Studio'
    },
    
  ]
  const data2 = [
    {
      id: 1,
      title: 'Return of Slim Shady',
      img: '/eminem.jpg',
      artist: 'Eminem'
    },
    {
      id: 2,
      title: 'Return of Slim Shady',
      img: '/eminem.jpg',
      artist: 'Eminem'
    },
    {
      id: 3,
      title: 'Return of Slim Shady',
      img: '/eminem.jpg',
      artist: 'Eminem'
    },
    {
      id: 4,
      title: 'Return of Slim Shady',
      img: '/eminem.jpg',
      artist: 'Eminem'
    },
    {
      id: 5,
      title: 'Return of Slim Shady',
      img: '/eminem.jpg',
      artist: 'Eminem'
    },
    {
      id: 6,
      title: 'Return of Slim Shady',
      img: '/eminem.jpg',
      artist: 'Eminem'
    },
    {
      id: 7,
      title: 'Return of Slim Shady',
      img: '/eminem.jpg',
      artist: 'Eminem'
    },
  ]
  return (
    <div className="flex-1 bg-[#1f1f1f] text-white rounded-xl h-[90vh] overflow-y-scroll">
      <BreadCrumbs content={'HOME'} />
      {/* TRENDING NOW  */}
      <div className="mt-24 px-6">
        <Slider title={'Trending Now'} data={data} Component={MusicCard} scrollSize={208}/>
      </div>

      {/* TOP ALBUMS  */}
      <div className="mt-10 px-6">
        <Slider title={'Top Albums'} data={data2} Component={MusicCard} scrollSize={208}/>
      </div>
    </div>
  );
}
