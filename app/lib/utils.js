'use server'

export async function getCurrencies(baseCurrency) {
    const response = await fetch(`https://api.uphold.com/v0/ticker/${baseCurrency}`, {
      cache: 'no-cache',
    });
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json();
  }