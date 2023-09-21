'use server'
import { revalidatePath, revalidateTag } from "next/cache";

export async function getCurrencies(baseCurrency) {
  
  const response = await fetch(`${process.env.API_ENDPOINT}/${baseCurrency}`, 
  { next: { tags: ['main'] } }
  );
  revalidatePath('/')
    revalidateTag('main')
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
    return response.json();
  }