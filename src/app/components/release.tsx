import Image from 'next/image'
import { FaSpotify, FaBandcamp  } from "react-icons/fa";
import { SiApplemusic, SiTidal  } from "react-icons/si";
import MusicLink from './music-link'

interface ReleaseProps {
  title: string
  image: string
  year: number
}

const Release = ({ title, image, year }: ReleaseProps) => {
  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
      <Image src={image} alt={title} width={300} height={300} className="w-full h-auto" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{year}</p>
        <div className="flex justify-between">
          <MusicLink href="#" icon={<FaBandcamp className="w-6 h-6" />} label="Bandcamp" />
          <MusicLink href="#" icon={<FaSpotify className="w-6 h-6" />} label="Spotify" />
          <MusicLink href="#" icon={<SiApplemusic className="w-6 h-6" />} label="Apple Music" />
          <MusicLink href="#" icon={<SiTidal className="w-6 h-6" />} label="Tidal" />
        </div>
      </div>
    </div>
  )
}

export default Release;
