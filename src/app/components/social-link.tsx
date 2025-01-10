import Link from 'next/link'

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
      <span className="sr-only">{label}</span>
      {icon}
    </Link>
  )
}

export default SocialLink;