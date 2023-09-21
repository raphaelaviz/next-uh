'use server'

import { revalidateTag } from "next/cache";

export async function getCurrencies(baseCurrency) {
  
  const response = await fetch(`https://api.uphold.com/v0/ticker/${baseCurrency}`, 
  { next: { tags: ['main'] } }
  );
  revalidateTag('main')
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
    return response.json();
  }