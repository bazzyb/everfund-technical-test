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

  enum OrderByField {
    date
    amountPaid
    giftAided
  }

  enum OrderDirection {
    asc
    desc
  }

  """
  About queries
  """
  type Query {
    "Fetch Payments."
    payments(
      nonprofitId: Int!
      limit: Int
      orderBy: OrderByField
      orderDirection: OrderDirection
    ): [Payment!]! @requireAuth

    "Fetch a Payment by id."
    payment(id: Int!): Payment @requireAuth
  }
`
