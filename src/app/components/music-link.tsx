import Link from 'next/link'

const MusicLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 transition-colors">
      <span className="sr-only">{label}</span>
      {icon}
    </Link>
  )
}

export default MusicLink;
