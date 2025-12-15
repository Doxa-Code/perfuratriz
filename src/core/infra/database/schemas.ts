import {
  boolean,
  integer,
  jsonb,
  pgSchema,
  text,
  timestamp,
  uuid,
  varchar,
  bigint,
  pgEnum,
} from "drizzle-orm/pg-core";

export const typeDollarQuoteEnum = pgEnum("type_dollar_quote", [
  "CURRENT",
  "LAST_DI",
  "FUTURE",
]);

const schemas = pgSchema("perfuratriz");

export const icmsState = schemas.table("icms_states", {
  id: uuid("id").defaultRandom().primaryKey(),
  state: varchar("state", { length: 3 }).notNull().default(""),
  stateLabel: text("state_label").notNull().default(""),
  icms: integer("icms").notNull().default(0),
});

export const costs = schemas.table("costs", {
  id: uuid("id").defaultRandom().primaryKey(),
  description: text("description").notNull().default(""),
  value: integer("value").notNull().default(0),
});

export const ncms = schemas.table("ncms", {
  id: uuid("id").defaultRandom().primaryKey(),
  code: integer("code").notNull(),
  tax: integer("tax").notNull(),
  icms: integer("icms").notNull(),
  pis: integer("pis").notNull(),
  cofins: integer("cofins").notNull(),
  ipi: integer("ipi").notNull(),
  pisSales: integer("pis_sales").notNull().default(0),
  cofinsSales: integer("cofins_sales").notNull().default(0),
  difal: boolean("difal").notNull().default(false),
  reductionCalculationBase: integer("reduction_calculation_base_value")
    .notNull()
    .default(0),
});

export const products = schemas.table("products", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").default("").notNull(),
  tid: text("tid").default("").notNull(),
  description: text("description").default("").notNull(),
  weight: integer("weight").notNull(),
  length: integer("length").notNull(),
  height: integer("height").notNull(),
  width: integer("width").notNull(),
  ncmId: uuid("ncmId")
    .references(() => ncms.id, { onDelete: "set null" })
    .notNull(),
});

export const saleTables = schemas.table("sale_tables", {
  id: uuid("id").defaultRandom().primaryKey(),
  productId: uuid("product_id")
    .references(() => products.id, { onDelete: "restrict" })
    .notNull(),
  lastImportationAt: timestamp("last_importation_at"),
  lastImportationQuote: integer("last_importation_quote"),
  dollarQuote: integer("dollar_quote").notNull().default(0),
  dollarQuoteDate: timestamp("dollar_quote_date"),
  typeDollarQuote: typeDollarQuoteEnum("type_dollar_quote")
    .notNull()
    .default("CURRENT"),
  costPriceUsd: integer("cost_price_usd").notNull().default(0),
  costPriceBrl: integer("cost_price_brl").notNull().default(0),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const invoices = schemas.table("invoices", {
  id: uuid("id").defaultRandom().primaryKey(),
  registration: text("registration").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  quote: integer("quote").notNull(),
  status: text("status", { enum: ["open", "closed"] }).default("open"),
});

export const invoiceProducts = schemas.table("invoice_products", {
  id: uuid("id").defaultRandom().primaryKey(),
  productId: uuid("productId")
    .references(() => products.id, { onDelete: "cascade" })
    .notNull(),
  invoiceId: uuid("invoiceId")
    .references(() => invoices.id, { onDelete: "cascade" })
    .notNull(),
  amount: bigint("amount", { mode: "bigint" }).notNull(),
  quantity: integer("quantity").notNull(),
});

export const expenses = schemas.table("expenses", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  useICMSBase: boolean("useICMSBase").default(false).notNull(),
  useCustomsBase: boolean("useCustomsBase").default(false).notNull(),
  allocationMethod: varchar("allocationMethod", {
    length: 11,
    enum: ["NET_WEIGHT", "NET_VALUE", "PER_UNIT"],
  }).notNull(),
  currency: varchar("currency", { enum: ["USD", "BRL"], length: 3 }).notNull(),
});

export const declarations = schemas.table("declarations", {
  id: uuid("id").defaultRandom().primaryKey(),
  registration: text("registration").notNull(),
  quote: integer("quote").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  status: text("status", { enum: ["open", "closed"] }).default("open"),
});

export const declarationExpenses = schemas.table("declaration_expenses", {
  id: uuid("id").defaultRandom().primaryKey(),
  declarationId: uuid("declarationId")
    .references(() => declarations.id, { onDelete: "cascade" })
    .notNull(),
  name: text("name").notNull(),
  useICMSBase: boolean("useICMSBase").default(false).notNull(),
  useCustomsBase: boolean("useCustomsBase").default(false).notNull(),
  allocationMethod: varchar("allocationMethod", {
    length: 11,
    enum: ["NET_WEIGHT", "NET_VALUE", "PER_UNIT"],
  }).notNull(),
  currency: varchar("currency", { enum: ["USD", "BRL"], length: 3 }).notNull(),
  amount: integer("amount").default(0).notNull(),
});

export const declarationInvoices = schemas.table("declaration_invoices", {
  id: uuid("id").defaultRandom().primaryKey(),
  declarationId: uuid("declarationId")
    .references(() => declarations.id, { onDelete: "cascade" })
    .notNull(),
  registration: text("registration").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  quote: integer("quote").notNull(),
});

export const declarationInvoiceProducts = schemas.table(
  "declaration_invoice_products",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    invoiceId: uuid("invoiceId")
      .references(() => declarationInvoices.id, { onDelete: "cascade" })
      .notNull(),
    productId: uuid("productId").notNull(),
    name: text("name").default("").notNull(),
    tid: text("tid").default("").notNull(),
    description: text("description").default("").notNull(),
    weight: integer("weight").notNull(),
    length: integer("length").notNull(),
    height: integer("height").notNull(),
    width: integer("width").notNull(),
    amount: integer("amount").notNull(),
    quantity: integer("quantity").notNull(),
  }
);

export const declarationInvoiceProductNcms = schemas.table(
  "declaration_invoice_product_ncms",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    productId: uuid("productId")
      .references(() => declarationInvoiceProducts.id, { onDelete: "cascade" })
      .notNull(),
    code: integer("code").notNull(),
    tax: integer("tax").notNull(),
    icms: integer("icms").notNull(),
    pis: integer("pis").notNull(),
    cofins: integer("cofins").notNull(),
    ipi: integer("ipi").notNull(),
  }
);

export const ncmEvents = schemas.table("ncm_events", {
  id: uuid("id").defaultRandom().primaryKey(),
  ncmId: uuid("ncmId").notNull(),
  type: varchar("type", {
    length: 8,
    enum: ["CREATED", "UPDATED", "DELETED"],
  }).notNull(),
  payload: jsonb("payload").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export const productEvents = schemas.table("product_events", {
  id: uuid("id").defaultRandom().primaryKey(),
  productId: uuid("productId").notNull(),
  type: varchar("type", {
    length: 8,
    enum: ["CREATED", "UPDATED", "DELETED"],
  }).notNull(),
  payload: jsonb("payload").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export const invoiceEvents = schemas.table("invoice_events", {
  id: uuid("id").defaultRandom().primaryKey(),
  invoiceId: uuid("invoiceId").notNull(),
  type: varchar("type", {
    length: 8,
    enum: ["CREATED", "UPDATED", "DELETED"],
  }).notNull(),
  payload: jsonb("payload").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export const expenseEvents = schemas.table("expense_events", {
  id: uuid("id").defaultRandom().primaryKey(),
  expenseId: uuid("expenseId").notNull(),
  type: varchar("type", {
    length: 8,
    enum: ["CREATED", "UPDATED", "DELETED"],
  }).notNull(),
  payload: jsonb("payload").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export const declarationEvents = schemas.table("declaration_events", {
  id: uuid("id").defaultRandom().primaryKey(),
  declarationId: uuid("declarationId").notNull(),
  type: varchar("type", {
    length: 8,
    enum: ["CREATED", "UPDATED", "DELETED"],
  }).notNull(),
  payload: jsonb("payload").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export const users = schemas.table("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  password: text("password"),
  role: text("role", { enum: ["admin"] }).notNull(),
});
