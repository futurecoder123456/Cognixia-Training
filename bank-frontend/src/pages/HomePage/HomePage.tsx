import { useEffect, useState } from 'react'
import { getCustomers, type Customer } from '../../services/customerApi'
import { HomePageWrapper } from './HomePage.styled'

const customerName = (customer: Customer) =>
   customer.name || [customer.firstName, customer.lastName].filter(Boolean).join(' ') || 'Customer'

const HomePage = () => {
   const [customers, setCustomers] = useState<Customer[]>([])
   const [isLoading, setIsLoading] = useState(true)
   const [error, setError] = useState<string | null>(null)

   useEffect(() => {
      getCustomers()
         .then(setCustomers)
         .catch(() => setError('We could not load customer data. Please try again.'))
         .finally(() => setIsLoading(false))
   }, [])

   return (
      <HomePageWrapper>
         <p className="eyebrow">Good morning, Alena</p>
         <h1>Your money, in focus.</h1>
         <p className="lead">A clear view of your everyday banking, all in one place.</p>
         {isLoading && <p role="status">Loading customer data...</p>}
         {error && <p className="api-error" role="alert">{error}</p>}
         {!isLoading && !error && (
            <div className="balance-panel">
               <span>Customers in your bank</span>
               <strong>{customers.length}</strong>
               <span className="balance-note">Loaded from the Bank API</span>
            </div>
         )}
         {!isLoading && !error && customers.length > 0 && (
            <div className="customer-list">
               <h2>Customer directory</h2>
               {customers.map((customer) => (
                  <div className="customer-row" key={customer.id}>
                     <span>{customerName(customer)}</span>
                     {customer.email && <span>{customer.email}</span>}
                  </div>
               ))}
            </div>
         )}
      </HomePageWrapper>
   )
}

export default HomePage
