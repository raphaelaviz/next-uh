'use client'

import { useEffect, useState, useMemo } from 'react';

import { currencyMap } from '../lib/currenciesMap';
import { getCurrencies } from '../lib/utils';


export function useFilteredCurrencyPairs(baseCurrency) {
  const [filteredPairs, setFilteredPairs] = useState(null);

  const desiredCurrencies = currencyMap.map((currencyObj) => currencyObj.code);

  const fetchCurrencyPairs = useMemo(() => async () => { //TC04
    try {
      
      const allPairs = await getCurrencies(baseCurrency)
      const pairs = allPairs.filter((pairData) => {
        const pair = pairData.pair;
        const currency = pairData.currency;

        //filters out all pairs from currencies not included in the currencyMap
        return (
          currency !== baseCurrency && // Excludes pairs like "UPUSDUSD"
          desiredCurrencies.some((desired) => pair.includes(`${baseCurrency}${desired}`))
        );
      });
      setFilteredPairs(pairs);
    } catch (error) {
      console.error(error);
    }
  }, [baseCurrency]); //TC05

  useEffect(() => {
    fetchCurrencyPairs();
  }, [fetchCurrencyPairs]);

  return filteredPairs;
}

