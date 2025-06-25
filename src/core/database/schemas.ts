import { sql } from "drizzle-orm";
import {
  boolean,
  pgTable,
  text,
  uuid,
  varchar,
  timestamp,
  integer,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  name: varchar("name", { length: 255 }).notNull(),
  email: text("email").notNull(),
  password: text("password").notNull(),
});

export const ncms = pgTable("ncms", {
  ncmId: uuid("ncm_id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  id: uuid("id")
    .notNull()
    .unique()
    .default(sql`gen_random_uuid()`),
  code: integer("code").notNull(),
  tax: integer("tax").notNull(),
  icms: integer("icms").notNull(),
  pis: integer("pis").notNull(),
  cofins: integer("cofins").notNull(),
  ipi: integer("ipi").notNull(),
  event: varchar("event", {
    length: 10,
    enum: ["CREATED", "UPDATED", "DELETED"],
  }).default("CREATED"),
  enable: boolean("enable").default(false),
  registeredAt: timestamp("registered_at").defaultNow(),
});

export const products = pgTable("products", {
  productId: uuid("product_id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  id: uuid("id")
    .notNull()
    .unique()
    .default(sql`gen_random_uuid()`),
  name: text("name").default(""),
  tid: text("tid").default(""),
  description: text("description").default(""),
  weight: integer("weight").notNull(),
  length: integer("length").notNull(),
  height: integer("height").notNull(),
  width: integer("width").notNull(),
  ncmId: uuid("ncm_id").references(() => ncms.id, {
    onUpdate: "cascade",
    onDelete: "set null",
  }),
  event: varchar("event", {
    length: 10,
    enum: ["CREATED", "UPDATED", "DELETED"],
  }).default("CREATED"),
  enable: boolean("enable").default(false),
  registeredAt: timestamp("registered_at").defaultNow(),
});

export const expenses = pgTable("expenses", {
  id: uuid("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  useICMSBase: boolean("use_icms_base").default(false),
  useCustomsBase: boolean("use_customs_base").default(false),
  allocationMethod: varchar("allocation_method", {
    length: 12,
    enum: ["NET_WEIGHT", "NET_VALUE", "PER_UNIT"],
  }).notNull(),
  currency: varchar("currency", { length: 4, enum: ["USD", "BRL"] }).notNull(),
});

export const declarations = pgTable("declarations", {
  declarationId: uuid("declaration_id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  id: uuid("id")
    .notNull()
    .unique()
    .default(sql`gen_random_uuid()`),
  registration: text("registration").notNull(),
  quote: integer("quote").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  event: varchar("event", {
    length: 10,
    enum: ["CREATED", "UPDATED", "DELETED"],
  }).default("CREATED"),
  enable: boolean("enable").default(false),
  registeredAt: timestamp("registered_at").defaultNow(),
});

export const declarationExpenses = pgTable("declaration_expenses", {
  declarationExpenseId: uuid("declaration_expense_id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  id: uuid("id")
    .notNull()
    .unique()
    .default(sql`gen_random_uuid()`),
  declaration: uuid("declaration").references(() => declarations.id, {
    onDelete: "cascade",
    onUpdate: "cascade",
  }),
  name: text("name").notNull(),
  useICMSBase: boolean("use_icms_base").default(false),
  useCustomsBase: boolean("use_customs_base").default(false),
  allocationMethod: varchar("allocation_method", {
    length: 12,
    enum: ["NET_WEIGHT", "NET_VALUE", "PER_UNIT"],
  }).notNull(),
  currency: varchar("currency", { length: 4, enum: ["USD", "BRL"] }).notNull(),
  amount: integer("amount").default(0),
  event: varchar("event", {
    length: 10,
    enum: ["CREATED", "UPDATED", "DELETED"],
  }).default("CREATED"),
  enable: boolean("enable").default(false),
  registeredAt: timestamp("registered_at").defaultNow(),
});

export const declarationInvoices = pgTable("declaration_invoices", {
  declarationInvoiceId: uuid("declaration_invoice_id")
    .primaryKey()
    .defaultRandom(),
  declaration: uuid("declaration").references(() => declarations.id, {
    onDelete: "cascade",
    onUpdate: "cascade",
  }),
  id: uuid("id")
    .notNull()
    .unique()
    .default(sql`gen_random_uuid()`),
  registration: text("registration").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  quote: integer("quote").notNull(),
  event: varchar("event", {
    length: 10,
    enum: ["CREATED", "UPDATED", "DELETED"],
  }).default("CREATED"),
  enable: boolean("enable").default(false),
  registeredAt: timestamp("registered_at").defaultNow(),
});

export const declarationInvoiceProducts = pgTable(
  "declaration_invoice_products",
  {
    declarationInvoiceProductId: uuid("declaration_invoice_product_id")
      .primaryKey()
      .defaultRandom(),
    invoice: uuid("invoice").references(() => declarationInvoices.id, {
      onDelete: "cascade",
      onUpdate: "cascade",
    }),
    id: uuid("id")
      .notNull()
      .unique()
      .default(sql`gen_random_uuid()`),
    productId: text("product_id").notNull(),
    name: text("name").default(""),
    tid: text("tid").default(""),
    description: text("description").default(""),
    weight: integer("weight").notNull(),
    length: integer("length").notNull(),
    height: integer("height").notNull(),
    width: integer("width").notNull(),
    amount: integer("amount").notNull(),
    quantity: integer("quantity").notNull(),
    event: varchar("event", {
      length: 10,
      enum: ["CREATED", "UPDATED", "DELETED"],
    }).default("CREATED"),
    enable: boolean("enable").default(false),
    registeredAt: timestamp("registered_at").defaultNow(),
  }
);

export const declarationInvoiceProductNcms = pgTable(
  "declaration_invoice_product_ncms",
  {
    declarationInvoiceProductNCMId: uuid("declaration_invoice_product_ncm_id")
      .primaryKey()
      .defaultRandom(),
    product: uuid("product").references(() => declarationInvoiceProducts.id, {
      onDelete: "cascade",
      onUpdate: "cascade",
    }),
    id: uuid("id")
      .notNull()
      .unique()
      .default(sql`gen_random_uuid()`),
    code: integer("code").notNull(),
    tax: integer("tax").notNull(),
    icms: integer("icms").notNull(),
    pis: integer("pis").notNull(),
    cofins: integer("cofins").notNull(),
    ipi: integer("ipi").notNull(),
    event: varchar("event", {
      length: 10,
      enum: ["CREATED", "UPDATED", "DELETED"],
    }).default("CREATED"),
    enable: boolean("enable").default(false),
    registeredAt: timestamp("registered_at").defaultNow(),
  }
);

export const invoices = pgTable("invoices", {
  invoiceId: uuid("invoice_id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  id: uuid("id")
    .notNull()
    .unique()
    .default(sql`gen_random_uuid()`),
  registration: text("registration").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  quote: integer("quote").notNull(),
  event: varchar("event", {
    length: 10,
    enum: ["CREATED", "UPDATED", "DELETED"],
  }).default("CREATED"),
  enable: boolean("enable").default(false),
  registeredAt: timestamp("registered_at").defaultNow(),
});

export const invoiceProducts = pgTable("invoice_products", {
  invoiceProductId: uuid("invoice_product_id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  id: uuid("id")
    .notNull()
    .unique()
    .default(sql`gen_random_uuid()`),
  productId: uuid("product_id").references(() => products.id, {
    onDelete: "cascade",
    onUpdate: "cascade",
  }),
  invoiceId: uuid("invoice_id").references(() => invoices.id, {
    onDelete: "cascade",
    onUpdate: "cascade",
  }),
  amount: integer("amount").notNull(),
  quantity: integer("quantity").notNull(),
  event: varchar("event", {
    length: 10,
    enum: ["CREATED", "UPDATED", "DELETED"],
  }).default("CREATED"),
  enable: boolean("enable").default(false),
  registeredAt: timestamp("registered_at").defaultNow(),
});
