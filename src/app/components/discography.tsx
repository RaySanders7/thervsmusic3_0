import Release from './release'

const releases = [
  { id: 1, title: 'Album 1', image: '/album1.jpg', year: 2023 },
  { id: 2, title: 'EP 1', image: '/ep1.jpg', year: 2022 },
  { id: 3, title: 'Single 1', image: '/single1.jpg', year: 2021 },
  // Add more releases as needed
]

const Discography = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Discography</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {releases.map((release) => (
            <Release key={release.id} {...release} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Discography;
