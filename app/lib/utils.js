'use server'
import { revalidatePath, revalidateTag } from "next/cache";

  // Data fetching using the enhanced fetch API from Next.js version 13+.
  // By default it auto caches the results, and accepts many options to
  // handle caching. In this case, I chose the revalidate functions
  // in order to clean the cache every time the getCurrencies function is called.

  // By fetching the data via a server action, we avoid any CORS issue.


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