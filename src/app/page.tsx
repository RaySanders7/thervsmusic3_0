import Image from 'next/image'
import SocialLinks from './components/social-links'
import Discography from './components/discography'

const Home = () => {
  return (
    <main className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh]">
        <Image
          src="/hero-image.jpg"
          alt="Hip Hop Artist"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl text-white font-bold">Artist Name</h1>
        </div>
      </div>

      {/* Social Links */}
      <SocialLinks />

      {/* Discography */}
      <Discography />
    </main>
  )
}

export default Home;

