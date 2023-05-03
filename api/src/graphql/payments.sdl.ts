export const schema = gql`
  """
  Representation of Payment.
  """
  type Payment {
    "Description for id."
    id: Int!

    "Description for date."
    date: DateTime!

    "Description for amountPaid."
    amountPaid: Int!

    "Description for status."
    status: String!

    "Description for giftAided."
    giftAided: Boolean!

    "Description for nonprofitId."
    nonprofitId: Int!
  }

  """
  About queries
  TODO: Add GraphQL query / queries to fetch payment statistics
  """
  type Query {
    "Fetch Payments."
    payments(nonprofitId: Int): [Payment!]! @requireAuth

    "Fetch a Payment by id."
    payment(id: Int!): Payment @requireAuth
  }
`
