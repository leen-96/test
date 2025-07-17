import Link from 'next/link'

export default function Home() {
  return (
    <main>
      
      <div className="flex justify-center my-8">
        <Link href="/used-cars">
          <button className="btn-primary">View Cars List</button>
        </Link>
      </div>

      
    </main>
  )
}
