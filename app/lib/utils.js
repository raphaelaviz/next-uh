'use server'

import { revalidateTag } from "next/cache";

export async function getCurrencies(baseCurrency) {
  revalidateTag('main')
    
  const response = await fetch(`https://api.uphold.com/v0/ticker/${baseCurrency}`, 
      { next: { tags: ['main'] } }
    );
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json();
  }