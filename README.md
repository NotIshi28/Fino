# Fino

One app for all your family finance needs!


# Featues:

Family Grants

[Frontend] - User purchases credits -> [Stripe Checkout]  
 -> Funds stored in Stripe balance -> [Backend]
 -> Lithic API creates a virtual card -> Spending limit $100  
 -> User spends -> Stripe deducts $100 from balance  
 -> Backend triggers Stripe -> Lithic funding transfer

## Tech Stack  
**Client:** TypeScript, React Native, Expo

**Server:** Node, Express, Firebase 
