module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateImage {
  count: Int!
}

type AggregateItem {
  count: Int!
}

type AggregateOrder {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Image {
  id: ID!
  src: String!
  item: Item
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ImageConnection {
  pageInfo: PageInfo!
  edges: [ImageEdge]!
  aggregate: AggregateImage!
}

input ImageCreateInput {
  id: ID
  src: String!
  item: ItemCreateOneWithoutImagesInput
}

input ImageCreateManyWithoutItemInput {
  create: [ImageCreateWithoutItemInput!]
  connect: [ImageWhereUniqueInput!]
}

input ImageCreateWithoutItemInput {
  id: ID
  src: String!
}

type ImageEdge {
  node: Image!
  cursor: String!
}

enum ImageOrderByInput {
  id_ASC
  id_DESC
  src_ASC
  src_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ImagePreviousValues {
  id: ID!
  src: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input ImageScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  src: String
  src_not: String
  src_in: [String!]
  src_not_in: [String!]
  src_lt: String
  src_lte: String
  src_gt: String
  src_gte: String
  src_contains: String
  src_not_contains: String
  src_starts_with: String
  src_not_starts_with: String
  src_ends_with: String
  src_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [ImageScalarWhereInput!]
  OR: [ImageScalarWhereInput!]
  NOT: [ImageScalarWhereInput!]
}

type ImageSubscriptionPayload {
  mutation: MutationType!
  node: Image
  updatedFields: [String!]
  previousValues: ImagePreviousValues
}

input ImageSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ImageWhereInput
  AND: [ImageSubscriptionWhereInput!]
  OR: [ImageSubscriptionWhereInput!]
  NOT: [ImageSubscriptionWhereInput!]
}

input ImageUpdateInput {
  src: String
  item: ItemUpdateOneWithoutImagesInput
}

input ImageUpdateManyDataInput {
  src: String
}

input ImageUpdateManyMutationInput {
  src: String
}

input ImageUpdateManyWithoutItemInput {
  create: [ImageCreateWithoutItemInput!]
  delete: [ImageWhereUniqueInput!]
  connect: [ImageWhereUniqueInput!]
  set: [ImageWhereUniqueInput!]
  disconnect: [ImageWhereUniqueInput!]
  update: [ImageUpdateWithWhereUniqueWithoutItemInput!]
  upsert: [ImageUpsertWithWhereUniqueWithoutItemInput!]
  deleteMany: [ImageScalarWhereInput!]
  updateMany: [ImageUpdateManyWithWhereNestedInput!]
}

input ImageUpdateManyWithWhereNestedInput {
  where: ImageScalarWhereInput!
  data: ImageUpdateManyDataInput!
}

input ImageUpdateWithoutItemDataInput {
  src: String
}

input ImageUpdateWithWhereUniqueWithoutItemInput {
  where: ImageWhereUniqueInput!
  data: ImageUpdateWithoutItemDataInput!
}

input ImageUpsertWithWhereUniqueWithoutItemInput {
  where: ImageWhereUniqueInput!
  update: ImageUpdateWithoutItemDataInput!
  create: ImageCreateWithoutItemInput!
}

input ImageWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  src: String
  src_not: String
  src_in: [String!]
  src_not_in: [String!]
  src_lt: String
  src_lte: String
  src_gt: String
  src_gte: String
  src_contains: String
  src_not_contains: String
  src_starts_with: String
  src_not_starts_with: String
  src_ends_with: String
  src_not_ends_with: String
  item: ItemWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [ImageWhereInput!]
  OR: [ImageWhereInput!]
  NOT: [ImageWhereInput!]
}

input ImageWhereUniqueInput {
  id: ID
}

type Item {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String
  price: Int
  category: String
  inStock: Boolean
  description: String
  images(where: ImageWhereInput, orderBy: ImageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Image!]
  user: User
  orders(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Order!]
}

type ItemConnection {
  pageInfo: PageInfo!
  edges: [ItemEdge]!
  aggregate: AggregateItem!
}

input ItemCreateInput {
  id: ID
  name: String
  price: Int
  category: String
  inStock: Boolean
  description: String
  images: ImageCreateManyWithoutItemInput
  user: UserCreateOneWithoutItemsInput
  orders: OrderCreateManyWithoutItemInput
}

input ItemCreateManyWithoutUserInput {
  create: [ItemCreateWithoutUserInput!]
  connect: [ItemWhereUniqueInput!]
}

input ItemCreateOneWithoutImagesInput {
  create: ItemCreateWithoutImagesInput
  connect: ItemWhereUniqueInput
}

input ItemCreateOneWithoutOrdersInput {
  create: ItemCreateWithoutOrdersInput
  connect: ItemWhereUniqueInput
}

input ItemCreateWithoutImagesInput {
  id: ID
  name: String
  price: Int
  category: String
  inStock: Boolean
  description: String
  user: UserCreateOneWithoutItemsInput
  orders: OrderCreateManyWithoutItemInput
}

input ItemCreateWithoutOrdersInput {
  id: ID
  name: String
  price: Int
  category: String
  inStock: Boolean
  description: String
  images: ImageCreateManyWithoutItemInput
  user: UserCreateOneWithoutItemsInput
}

input ItemCreateWithoutUserInput {
  id: ID
  name: String
  price: Int
  category: String
  inStock: Boolean
  description: String
  images: ImageCreateManyWithoutItemInput
  orders: OrderCreateManyWithoutItemInput
}

type ItemEdge {
  node: Item!
  cursor: String!
}

enum ItemOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
  price_ASC
  price_DESC
  category_ASC
  category_DESC
  inStock_ASC
  inStock_DESC
  description_ASC
  description_DESC
}

type ItemPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String
  price: Int
  category: String
  inStock: Boolean
  description: String
}

input ItemScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  price: Int
  price_not: Int
  price_in: [Int!]
  price_not_in: [Int!]
  price_lt: Int
  price_lte: Int
  price_gt: Int
  price_gte: Int
  category: String
  category_not: String
  category_in: [String!]
  category_not_in: [String!]
  category_lt: String
  category_lte: String
  category_gt: String
  category_gte: String
  category_contains: String
  category_not_contains: String
  category_starts_with: String
  category_not_starts_with: String
  category_ends_with: String
  category_not_ends_with: String
  inStock: Boolean
  inStock_not: Boolean
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  AND: [ItemScalarWhereInput!]
  OR: [ItemScalarWhereInput!]
  NOT: [ItemScalarWhereInput!]
}

type ItemSubscriptionPayload {
  mutation: MutationType!
  node: Item
  updatedFields: [String!]
  previousValues: ItemPreviousValues
}

input ItemSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ItemWhereInput
  AND: [ItemSubscriptionWhereInput!]
  OR: [ItemSubscriptionWhereInput!]
  NOT: [ItemSubscriptionWhereInput!]
}

input ItemUpdateInput {
  name: String
  price: Int
  category: String
  inStock: Boolean
  description: String
  images: ImageUpdateManyWithoutItemInput
  user: UserUpdateOneWithoutItemsInput
  orders: OrderUpdateManyWithoutItemInput
}

input ItemUpdateManyDataInput {
  name: String
  price: Int
  category: String
  inStock: Boolean
  description: String
}

input ItemUpdateManyMutationInput {
  name: String
  price: Int
  category: String
  inStock: Boolean
  description: String
}

input ItemUpdateManyWithoutUserInput {
  create: [ItemCreateWithoutUserInput!]
  delete: [ItemWhereUniqueInput!]
  connect: [ItemWhereUniqueInput!]
  set: [ItemWhereUniqueInput!]
  disconnect: [ItemWhereUniqueInput!]
  update: [ItemUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [ItemUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [ItemScalarWhereInput!]
  updateMany: [ItemUpdateManyWithWhereNestedInput!]
}

input ItemUpdateManyWithWhereNestedInput {
  where: ItemScalarWhereInput!
  data: ItemUpdateManyDataInput!
}

input ItemUpdateOneWithoutImagesInput {
  create: ItemCreateWithoutImagesInput
  update: ItemUpdateWithoutImagesDataInput
  upsert: ItemUpsertWithoutImagesInput
  delete: Boolean
  disconnect: Boolean
  connect: ItemWhereUniqueInput
}

input ItemUpdateOneWithoutOrdersInput {
  create: ItemCreateWithoutOrdersInput
  update: ItemUpdateWithoutOrdersDataInput
  upsert: ItemUpsertWithoutOrdersInput
  delete: Boolean
  disconnect: Boolean
  connect: ItemWhereUniqueInput
}

input ItemUpdateWithoutImagesDataInput {
  name: String
  price: Int
  category: String
  inStock: Boolean
  description: String
  user: UserUpdateOneWithoutItemsInput
  orders: OrderUpdateManyWithoutItemInput
}

input ItemUpdateWithoutOrdersDataInput {
  name: String
  price: Int
  category: String
  inStock: Boolean
  description: String
  images: ImageUpdateManyWithoutItemInput
  user: UserUpdateOneWithoutItemsInput
}

input ItemUpdateWithoutUserDataInput {
  name: String
  price: Int
  category: String
  inStock: Boolean
  description: String
  images: ImageUpdateManyWithoutItemInput
  orders: OrderUpdateManyWithoutItemInput
}

input ItemUpdateWithWhereUniqueWithoutUserInput {
  where: ItemWhereUniqueInput!
  data: ItemUpdateWithoutUserDataInput!
}

input ItemUpsertWithoutImagesInput {
  update: ItemUpdateWithoutImagesDataInput!
  create: ItemCreateWithoutImagesInput!
}

input ItemUpsertWithoutOrdersInput {
  update: ItemUpdateWithoutOrdersDataInput!
  create: ItemCreateWithoutOrdersInput!
}

input ItemUpsertWithWhereUniqueWithoutUserInput {
  where: ItemWhereUniqueInput!
  update: ItemUpdateWithoutUserDataInput!
  create: ItemCreateWithoutUserInput!
}

input ItemWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  price: Int
  price_not: Int
  price_in: [Int!]
  price_not_in: [Int!]
  price_lt: Int
  price_lte: Int
  price_gt: Int
  price_gte: Int
  category: String
  category_not: String
  category_in: [String!]
  category_not_in: [String!]
  category_lt: String
  category_lte: String
  category_gt: String
  category_gte: String
  category_contains: String
  category_not_contains: String
  category_starts_with: String
  category_not_starts_with: String
  category_ends_with: String
  category_not_ends_with: String
  inStock: Boolean
  inStock_not: Boolean
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  images_every: ImageWhereInput
  images_some: ImageWhereInput
  images_none: ImageWhereInput
  user: UserWhereInput
  orders_every: OrderWhereInput
  orders_some: OrderWhereInput
  orders_none: OrderWhereInput
  AND: [ItemWhereInput!]
  OR: [ItemWhereInput!]
  NOT: [ItemWhereInput!]
}

input ItemWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createImage(data: ImageCreateInput!): Image!
  updateImage(data: ImageUpdateInput!, where: ImageWhereUniqueInput!): Image
  updateManyImages(data: ImageUpdateManyMutationInput!, where: ImageWhereInput): BatchPayload!
  upsertImage(where: ImageWhereUniqueInput!, create: ImageCreateInput!, update: ImageUpdateInput!): Image!
  deleteImage(where: ImageWhereUniqueInput!): Image
  deleteManyImages(where: ImageWhereInput): BatchPayload!
  createItem(data: ItemCreateInput!): Item!
  updateItem(data: ItemUpdateInput!, where: ItemWhereUniqueInput!): Item
  updateManyItems(data: ItemUpdateManyMutationInput!, where: ItemWhereInput): BatchPayload!
  upsertItem(where: ItemWhereUniqueInput!, create: ItemCreateInput!, update: ItemUpdateInput!): Item!
  deleteItem(where: ItemWhereUniqueInput!): Item
  deleteManyItems(where: ItemWhereInput): BatchPayload!
  createOrder(data: OrderCreateInput!): Order!
  updateOrder(data: OrderUpdateInput!, where: OrderWhereUniqueInput!): Order
  updateManyOrders(data: OrderUpdateManyMutationInput!, where: OrderWhereInput): BatchPayload!
  upsertOrder(where: OrderWhereUniqueInput!, create: OrderCreateInput!, update: OrderUpdateInput!): Order!
  deleteOrder(where: OrderWhereUniqueInput!): Order
  deleteManyOrders(where: OrderWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type Order {
  id: ID!
  item: Item
  cancelled: Boolean
  completed: Boolean
  location: String
  phone: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

type OrderConnection {
  pageInfo: PageInfo!
  edges: [OrderEdge]!
  aggregate: AggregateOrder!
}

input OrderCreateInput {
  id: ID
  item: ItemCreateOneWithoutOrdersInput
  cancelled: Boolean
  completed: Boolean
  location: String
  phone: String
}

input OrderCreateManyWithoutItemInput {
  create: [OrderCreateWithoutItemInput!]
  connect: [OrderWhereUniqueInput!]
}

input OrderCreateWithoutItemInput {
  id: ID
  cancelled: Boolean
  completed: Boolean
  location: String
  phone: String
}

type OrderEdge {
  node: Order!
  cursor: String!
}

enum OrderOrderByInput {
  id_ASC
  id_DESC
  cancelled_ASC
  cancelled_DESC
  completed_ASC
  completed_DESC
  location_ASC
  location_DESC
  phone_ASC
  phone_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type OrderPreviousValues {
  id: ID!
  cancelled: Boolean
  completed: Boolean
  location: String
  phone: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

input OrderScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  cancelled: Boolean
  cancelled_not: Boolean
  completed: Boolean
  completed_not: Boolean
  location: String
  location_not: String
  location_in: [String!]
  location_not_in: [String!]
  location_lt: String
  location_lte: String
  location_gt: String
  location_gte: String
  location_contains: String
  location_not_contains: String
  location_starts_with: String
  location_not_starts_with: String
  location_ends_with: String
  location_not_ends_with: String
  phone: String
  phone_not: String
  phone_in: [String!]
  phone_not_in: [String!]
  phone_lt: String
  phone_lte: String
  phone_gt: String
  phone_gte: String
  phone_contains: String
  phone_not_contains: String
  phone_starts_with: String
  phone_not_starts_with: String
  phone_ends_with: String
  phone_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [OrderScalarWhereInput!]
  OR: [OrderScalarWhereInput!]
  NOT: [OrderScalarWhereInput!]
}

type OrderSubscriptionPayload {
  mutation: MutationType!
  node: Order
  updatedFields: [String!]
  previousValues: OrderPreviousValues
}

input OrderSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: OrderWhereInput
  AND: [OrderSubscriptionWhereInput!]
  OR: [OrderSubscriptionWhereInput!]
  NOT: [OrderSubscriptionWhereInput!]
}

input OrderUpdateInput {
  item: ItemUpdateOneWithoutOrdersInput
  cancelled: Boolean
  completed: Boolean
  location: String
  phone: String
}

input OrderUpdateManyDataInput {
  cancelled: Boolean
  completed: Boolean
  location: String
  phone: String
}

input OrderUpdateManyMutationInput {
  cancelled: Boolean
  completed: Boolean
  location: String
  phone: String
}

input OrderUpdateManyWithoutItemInput {
  create: [OrderCreateWithoutItemInput!]
  delete: [OrderWhereUniqueInput!]
  connect: [OrderWhereUniqueInput!]
  set: [OrderWhereUniqueInput!]
  disconnect: [OrderWhereUniqueInput!]
  update: [OrderUpdateWithWhereUniqueWithoutItemInput!]
  upsert: [OrderUpsertWithWhereUniqueWithoutItemInput!]
  deleteMany: [OrderScalarWhereInput!]
  updateMany: [OrderUpdateManyWithWhereNestedInput!]
}

input OrderUpdateManyWithWhereNestedInput {
  where: OrderScalarWhereInput!
  data: OrderUpdateManyDataInput!
}

input OrderUpdateWithoutItemDataInput {
  cancelled: Boolean
  completed: Boolean
  location: String
  phone: String
}

input OrderUpdateWithWhereUniqueWithoutItemInput {
  where: OrderWhereUniqueInput!
  data: OrderUpdateWithoutItemDataInput!
}

input OrderUpsertWithWhereUniqueWithoutItemInput {
  where: OrderWhereUniqueInput!
  update: OrderUpdateWithoutItemDataInput!
  create: OrderCreateWithoutItemInput!
}

input OrderWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  item: ItemWhereInput
  cancelled: Boolean
  cancelled_not: Boolean
  completed: Boolean
  completed_not: Boolean
  location: String
  location_not: String
  location_in: [String!]
  location_not_in: [String!]
  location_lt: String
  location_lte: String
  location_gt: String
  location_gte: String
  location_contains: String
  location_not_contains: String
  location_starts_with: String
  location_not_starts_with: String
  location_ends_with: String
  location_not_ends_with: String
  phone: String
  phone_not: String
  phone_in: [String!]
  phone_not_in: [String!]
  phone_lt: String
  phone_lte: String
  phone_gt: String
  phone_gte: String
  phone_contains: String
  phone_not_contains: String
  phone_starts_with: String
  phone_not_starts_with: String
  phone_ends_with: String
  phone_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [OrderWhereInput!]
  OR: [OrderWhereInput!]
  NOT: [OrderWhereInput!]
}

input OrderWhereUniqueInput {
  id: ID
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  image(where: ImageWhereUniqueInput!): Image
  images(where: ImageWhereInput, orderBy: ImageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Image]!
  imagesConnection(where: ImageWhereInput, orderBy: ImageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ImageConnection!
  item(where: ItemWhereUniqueInput!): Item
  items(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Item]!
  itemsConnection(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ItemConnection!
  order(where: OrderWhereUniqueInput!): Order
  orders(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Order]!
  ordersConnection(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OrderConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  image(where: ImageSubscriptionWhereInput): ImageSubscriptionPayload
  item(where: ItemSubscriptionWhereInput): ItemSubscriptionPayload
  order(where: OrderSubscriptionWhereInput): OrderSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  name: String
  phone: String
  location: String
  email: String!
  password: String!
  items(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Item!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  name: String
  phone: String
  location: String
  email: String!
  password: String!
  items: ItemCreateManyWithoutUserInput
}

input UserCreateOneWithoutItemsInput {
  create: UserCreateWithoutItemsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutItemsInput {
  id: ID
  name: String
  phone: String
  location: String
  email: String!
  password: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  phone_ASC
  phone_DESC
  location_ASC
  location_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String
  phone: String
  location: String
  email: String!
  password: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  phone: String
  location: String
  email: String
  password: String
  items: ItemUpdateManyWithoutUserInput
}

input UserUpdateManyMutationInput {
  name: String
  phone: String
  location: String
  email: String
  password: String
}

input UserUpdateOneWithoutItemsInput {
  create: UserCreateWithoutItemsInput
  update: UserUpdateWithoutItemsDataInput
  upsert: UserUpsertWithoutItemsInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutItemsDataInput {
  name: String
  phone: String
  location: String
  email: String
  password: String
}

input UserUpsertWithoutItemsInput {
  update: UserUpdateWithoutItemsDataInput!
  create: UserCreateWithoutItemsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  phone: String
  phone_not: String
  phone_in: [String!]
  phone_not_in: [String!]
  phone_lt: String
  phone_lte: String
  phone_gt: String
  phone_gte: String
  phone_contains: String
  phone_not_contains: String
  phone_starts_with: String
  phone_not_starts_with: String
  phone_ends_with: String
  phone_not_ends_with: String
  location: String
  location_not: String
  location_in: [String!]
  location_not_in: [String!]
  location_lt: String
  location_lte: String
  location_gt: String
  location_gte: String
  location_contains: String
  location_not_contains: String
  location_starts_with: String
  location_not_starts_with: String
  location_ends_with: String
  location_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  items_every: ItemWhereInput
  items_some: ItemWhereInput
  items_none: ItemWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    