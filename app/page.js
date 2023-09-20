import Image from 'next/image'



async function getCurrencies() {
  const response = await fetch('https://api.uphold.com/v0/ticker/USD', { next: { revalidate: 5 } })
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }
  return response.json()
}

export default async function Page() {
  const currencies = await getCurrencies()
  return (
  <main>

<pre>{JSON.stringify(currencies, null, 2)}</pre>
  </main>
  )
}



