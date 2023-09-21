'use server'

export async function getCurrencies(baseCurrency) {
    const response = await fetch(`https://api.uphold.com/v0/ticker/${baseCurrency}`, 
      { next: { revalidate: 2 } }
    );
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json();
  }