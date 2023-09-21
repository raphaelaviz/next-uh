import Converter from "./components/Converter"
import { useFilteredCurrencyPairs } from "./hooks/useFilteredCurrencyPairs";
import { getCurrencies } from "./lib/utils";


export default async function Page() {

  return (
  <main className="min-h-screen flex-center">
    <Converter/>    
  </main>
  )
}



