import {
  boolean,
  integer,
  jsonb,
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const ncms = pgTable("ncms", {
  id: uuid("id").defaultRandom().primaryKey(),
  code: integer("code").notNull(),
  tax: integer("tax").notNull(),
  icms: integer("icms").notNull(),
  pis: integer("pis").notNull(),
  cofins: integer("cofins").notNull(),
  ipi: integer("ipi").notNull(),
});

export const products = pgTable("products", {
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

export const invoices = pgTable("invoices", {
  id: uuid("id").defaultRandom().primaryKey(),
  registration: text("registration").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  quote: integer("quote").notNull(),
});

export const invoiceProducts = pgTable("invoice_products", {
  id: uuid("id").defaultRandom().primaryKey(),
  productId: uuid("productId")
    .references(() => products.id, { onDelete: "cascade" })
    .notNull(),
  invoiceId: uuid("invoiceId")
    .references(() => invoices.id, { onDelete: "cascade" })
    .notNull(),
  amount: integer("amount").notNull(),
  quantity: integer("quantity").notNull(),
});

export const expenses = pgTable("expenses", {
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

export const declarations = pgTable("declarations", {
  id: uuid("id").defaultRandom().primaryKey(),
  registration: text("registration").notNull(),
  quote: integer("quote").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export const declarationExpenses = pgTable("declaration_expenses", {
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

export const declarationInvoices = pgTable("declaration_invoices", {
  id: uuid("id").defaultRandom().primaryKey(),
  declarationId: uuid("declarationId")
    .references(() => declarations.id, { onDelete: "cascade" })
    .notNull(),
  registration: text("registration").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  quote: integer("quote").notNull(),
});

export const declarationInvoiceProducts = pgTable(
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

export const declarationInvoiceProductNcms = pgTable(
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

export const ncmEvents = pgTable("ncm_events", {
  id: uuid("id").defaultRandom().primaryKey(),
  ncmId: uuid("ncmId").notNull(),
  type: varchar("type", {
    length: 8,
    enum: ["CREATED", "UPDATED", "DELETED"],
  }).notNull(),
  payload: jsonb("payload").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export const productEvents = pgTable("product_events", {
  id: uuid("id").defaultRandom().primaryKey(),
  productId: uuid("productId").notNull(),
  type: varchar("type", {
    length: 8,
    enum: ["CREATED", "UPDATED", "DELETED"],
  }).notNull(),
  payload: jsonb("payload").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export const invoiceEvents = pgTable("invoice_events", {
  id: uuid("id").defaultRandom().primaryKey(),
  invoiceId: uuid("invoiceId").notNull(),
  type: varchar("type", {
    length: 8,
    enum: ["CREATED", "UPDATED", "DELETED"],
  }).notNull(),
  payload: jsonb("payload").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export const expenseEvents = pgTable("expense_events", {
  id: uuid("id").defaultRandom().primaryKey(),
  expenseId: uuid("expenseId").notNull(),
  type: varchar("type", {
    length: 8,
    enum: ["CREATED", "UPDATED", "DELETED"],
  }).notNull(),
  payload: jsonb("payload").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export const declarationEvents = pgTable("declaration_events", {
  id: uuid("id").defaultRandom().primaryKey(),
  declarationId: uuid("declarationId").notNull(),
  type: varchar("type", {
    length: 8,
    enum: ["CREATED", "UPDATED", "DELETED"],
  }).notNull(),
  payload: jsonb("payload").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});
