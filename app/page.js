import Converter from "./components/Converter"
import { useFilteredCurrencyPairs } from "./hooks/useFilteredCurrencyPairs";
import { getCurrencies } from "./lib/utils";


export default async function Page() {

  const currenciesData = await getCurrencies('USD')

  return (
  <main className="min-h-screen flex">
    <Converter/>    
  </main>
  )
}



