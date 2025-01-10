import { Instagram, Twitter, Facebook } from 'lucide-react'
import SocialLink from './social-link';
import TikTokIcon from './tiktok-icon'

 const SocialLinks = () => {
  return (
    <div className="bg-gray-900 py-4">
      <div className="container mx-auto flex justify-center space-x-6">
        <SocialLink href="https://instagram.com/artist" icon={<Instagram size={24} />} label="Instagram" />
        <SocialLink href="https://twitter.com/artist" icon={<Twitter size={24} />} label="Twitter" />
        <SocialLink href="https://facebook.com/artist" icon={<Facebook size={24} />} label="Facebook" />
        <SocialLink href="https://tiktok.com/@artist" icon={<TikTokIcon className="w-6 h-6" />} label="TikTok" />
      </div>
    </div>
  )
}

export default SocialLinks;

