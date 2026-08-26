export interface Customer {
  id: string
  name?: string
  firstName?: string
  lastName?: string
  email?: string
}

const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL || '/api').replace(/\/$/, '')

export async function getCustomers(): Promise<Customer[]> {
  const endpoint = apiBaseUrl === '/api' ? '/api/v1/customers' : `${apiBaseUrl}/api/v1/customers`
  const response = await fetch(endpoint, {
    headers: { Accept: 'application/json' },
  })

  if (!response.ok) {
    throw new Error(`Could not load customers (${response.status})`)
  }

  return response.json() as Promise<Customer[]>
}