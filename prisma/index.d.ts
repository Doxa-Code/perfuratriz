
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model NCM
 * 
 */
export type NCM = $Result.DefaultSelection<Prisma.$NCMPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Invoice
 * 
 */
export type Invoice = $Result.DefaultSelection<Prisma.$InvoicePayload>
/**
 * Model InvoiceProduct
 * 
 */
export type InvoiceProduct = $Result.DefaultSelection<Prisma.$InvoiceProductPayload>
/**
 * Model Expense
 * 
 */
export type Expense = $Result.DefaultSelection<Prisma.$ExpensePayload>
/**
 * Model Declaration
 * 
 */
export type Declaration = $Result.DefaultSelection<Prisma.$DeclarationPayload>
/**
 * Model DeclarationExpense
 * 
 */
export type DeclarationExpense = $Result.DefaultSelection<Prisma.$DeclarationExpensePayload>
/**
 * Model DeclarationInvoice
 * 
 */
export type DeclarationInvoice = $Result.DefaultSelection<Prisma.$DeclarationInvoicePayload>
/**
 * Model DeclarationInvoiceProduct
 * 
 */
export type DeclarationInvoiceProduct = $Result.DefaultSelection<Prisma.$DeclarationInvoiceProductPayload>
/**
 * Model DeclarationInvoiceProductNCM
 * 
 */
export type DeclarationInvoiceProductNCM = $Result.DefaultSelection<Prisma.$DeclarationInvoiceProductNCMPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Events: {
  CREATED: 'CREATED',
  UPDATED: 'UPDATED',
  DELETED: 'DELETED'
};

export type Events = (typeof Events)[keyof typeof Events]


export const AllocationMethod: {
  NET_WEIGHT: 'NET_WEIGHT',
  NET_VALUE: 'NET_VALUE',
  PER_UNIT: 'PER_UNIT'
};

export type AllocationMethod = (typeof AllocationMethod)[keyof typeof AllocationMethod]


export const Currency: {
  USD: 'USD',
  BRL: 'BRL'
};

export type Currency = (typeof Currency)[keyof typeof Currency]

}

export type Events = $Enums.Events

export const Events: typeof $Enums.Events

export type AllocationMethod = $Enums.AllocationMethod

export const AllocationMethod: typeof $Enums.AllocationMethod

export type Currency = $Enums.Currency

export const Currency: typeof $Enums.Currency

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more NCMS
 * const nCMS = await prisma.nCM.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more NCMS
   * const nCMS = await prisma.nCM.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.nCM`: Exposes CRUD operations for the **NCM** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NCMS
    * const nCMS = await prisma.nCM.findMany()
    * ```
    */
  get nCM(): Prisma.NCMDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invoice`: Exposes CRUD operations for the **Invoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoices
    * const invoices = await prisma.invoice.findMany()
    * ```
    */
  get invoice(): Prisma.InvoiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invoiceProduct`: Exposes CRUD operations for the **InvoiceProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InvoiceProducts
    * const invoiceProducts = await prisma.invoiceProduct.findMany()
    * ```
    */
  get invoiceProduct(): Prisma.InvoiceProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expense`: Exposes CRUD operations for the **Expense** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Expenses
    * const expenses = await prisma.expense.findMany()
    * ```
    */
  get expense(): Prisma.ExpenseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.declaration`: Exposes CRUD operations for the **Declaration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Declarations
    * const declarations = await prisma.declaration.findMany()
    * ```
    */
  get declaration(): Prisma.DeclarationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.declarationExpense`: Exposes CRUD operations for the **DeclarationExpense** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DeclarationExpenses
    * const declarationExpenses = await prisma.declarationExpense.findMany()
    * ```
    */
  get declarationExpense(): Prisma.DeclarationExpenseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.declarationInvoice`: Exposes CRUD operations for the **DeclarationInvoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DeclarationInvoices
    * const declarationInvoices = await prisma.declarationInvoice.findMany()
    * ```
    */
  get declarationInvoice(): Prisma.DeclarationInvoiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.declarationInvoiceProduct`: Exposes CRUD operations for the **DeclarationInvoiceProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DeclarationInvoiceProducts
    * const declarationInvoiceProducts = await prisma.declarationInvoiceProduct.findMany()
    * ```
    */
  get declarationInvoiceProduct(): Prisma.DeclarationInvoiceProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.declarationInvoiceProductNCM`: Exposes CRUD operations for the **DeclarationInvoiceProductNCM** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DeclarationInvoiceProductNCMS
    * const declarationInvoiceProductNCMS = await prisma.declarationInvoiceProductNCM.findMany()
    * ```
    */
  get declarationInvoiceProductNCM(): Prisma.DeclarationInvoiceProductNCMDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    NCM: 'NCM',
    Product: 'Product',
    Invoice: 'Invoice',
    InvoiceProduct: 'InvoiceProduct',
    Expense: 'Expense',
    Declaration: 'Declaration',
    DeclarationExpense: 'DeclarationExpense',
    DeclarationInvoice: 'DeclarationInvoice',
    DeclarationInvoiceProduct: 'DeclarationInvoiceProduct',
    DeclarationInvoiceProductNCM: 'DeclarationInvoiceProductNCM'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "nCM" | "product" | "invoice" | "invoiceProduct" | "expense" | "declaration" | "declarationExpense" | "declarationInvoice" | "declarationInvoiceProduct" | "declarationInvoiceProductNCM"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      NCM: {
        payload: Prisma.$NCMPayload<ExtArgs>
        fields: Prisma.NCMFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NCMFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NCMPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NCMFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NCMPayload>
          }
          findFirst: {
            args: Prisma.NCMFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NCMPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NCMFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NCMPayload>
          }
          findMany: {
            args: Prisma.NCMFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NCMPayload>[]
          }
          create: {
            args: Prisma.NCMCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NCMPayload>
          }
          createMany: {
            args: Prisma.NCMCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NCMCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NCMPayload>[]
          }
          delete: {
            args: Prisma.NCMDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NCMPayload>
          }
          update: {
            args: Prisma.NCMUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NCMPayload>
          }
          deleteMany: {
            args: Prisma.NCMDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NCMUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NCMUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NCMPayload>[]
          }
          upsert: {
            args: Prisma.NCMUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NCMPayload>
          }
          aggregate: {
            args: Prisma.NCMAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNCM>
          }
          groupBy: {
            args: Prisma.NCMGroupByArgs<ExtArgs>
            result: $Utils.Optional<NCMGroupByOutputType>[]
          }
          count: {
            args: Prisma.NCMCountArgs<ExtArgs>
            result: $Utils.Optional<NCMCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Invoice: {
        payload: Prisma.$InvoicePayload<ExtArgs>
        fields: Prisma.InvoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvoiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvoiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findFirst: {
            args: Prisma.InvoiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvoiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findMany: {
            args: Prisma.InvoiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          create: {
            args: Prisma.InvoiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          createMany: {
            args: Prisma.InvoiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvoiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          delete: {
            args: Prisma.InvoiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          update: {
            args: Prisma.InvoiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          deleteMany: {
            args: Prisma.InvoiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvoiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvoiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          upsert: {
            args: Prisma.InvoiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          aggregate: {
            args: Prisma.InvoiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoice>
          }
          groupBy: {
            args: Prisma.InvoiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvoiceCountArgs<ExtArgs>
            result: $Utils.Optional<InvoiceCountAggregateOutputType> | number
          }
        }
      }
      InvoiceProduct: {
        payload: Prisma.$InvoiceProductPayload<ExtArgs>
        fields: Prisma.InvoiceProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvoiceProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvoiceProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceProductPayload>
          }
          findFirst: {
            args: Prisma.InvoiceProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvoiceProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceProductPayload>
          }
          findMany: {
            args: Prisma.InvoiceProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceProductPayload>[]
          }
          create: {
            args: Prisma.InvoiceProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceProductPayload>
          }
          createMany: {
            args: Prisma.InvoiceProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvoiceProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceProductPayload>[]
          }
          delete: {
            args: Prisma.InvoiceProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceProductPayload>
          }
          update: {
            args: Prisma.InvoiceProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceProductPayload>
          }
          deleteMany: {
            args: Prisma.InvoiceProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvoiceProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvoiceProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceProductPayload>[]
          }
          upsert: {
            args: Prisma.InvoiceProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceProductPayload>
          }
          aggregate: {
            args: Prisma.InvoiceProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoiceProduct>
          }
          groupBy: {
            args: Prisma.InvoiceProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoiceProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvoiceProductCountArgs<ExtArgs>
            result: $Utils.Optional<InvoiceProductCountAggregateOutputType> | number
          }
        }
      }
      Expense: {
        payload: Prisma.$ExpensePayload<ExtArgs>
        fields: Prisma.ExpenseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpenseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpenseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          findFirst: {
            args: Prisma.ExpenseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpenseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          findMany: {
            args: Prisma.ExpenseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          create: {
            args: Prisma.ExpenseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          createMany: {
            args: Prisma.ExpenseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExpenseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          delete: {
            args: Prisma.ExpenseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          update: {
            args: Prisma.ExpenseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          deleteMany: {
            args: Prisma.ExpenseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExpenseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExpenseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          upsert: {
            args: Prisma.ExpenseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          aggregate: {
            args: Prisma.ExpenseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpense>
          }
          groupBy: {
            args: Prisma.ExpenseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpenseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExpenseCountArgs<ExtArgs>
            result: $Utils.Optional<ExpenseCountAggregateOutputType> | number
          }
        }
      }
      Declaration: {
        payload: Prisma.$DeclarationPayload<ExtArgs>
        fields: Prisma.DeclarationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeclarationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclarationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeclarationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclarationPayload>
          }
          findFirst: {
            args: Prisma.DeclarationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclarationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeclarationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclarationPayload>
          }
          findMany: {
            args: Prisma.DeclarationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclarationPayload>[]
          }
          create: {
            args: Prisma.DeclarationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclarationPayload>
          }
          createMany: {
            args: Prisma.DeclarationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeclarationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclarationPayload>[]
          }
          delete: {
            args: Prisma.DeclarationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclarationPayload>
          }
          update: {
            args: Prisma.DeclarationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclarationPayload>
          }
          deleteMany: {
            args: Prisma.DeclarationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeclarationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeclarationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclarationPayload>[]
          }
          upsert: {
            args: Prisma.DeclarationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclarationPayload>
          }
          aggregate: {
            args: Prisma.DeclarationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeclaration>
          }
          groupBy: {
            args: Prisma.DeclarationGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeclarationGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeclarationCountArgs<ExtArgs>
            result: $Utils.Optional<DeclarationCountAggregateOutputType> | number
          }
        }
      }
      DeclarationExpense: {
        payload: Prisma.$DeclarationExpensePayload<ExtArgs>
        fields: Prisma.DeclarationExpenseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeclarationExpenseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclarationExpensePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeclarationExpenseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclarationExpensePayload>
          }
          findFirst: {
            args: Prisma.DeclarationExpenseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclarationExpensePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeclarationExpenseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclarationExpensePayload>
          }
          findMany: {
            args: Prisma.DeclarationExpenseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclarationExpensePayload>[]
          }
          create: {
            args: Prisma.DeclarationExpenseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclarationExpensePayload>
          }
          createMany: {
            args: Prisma.DeclarationExpenseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeclarationExpenseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclarationExpensePayload>[]
          }
          delete: {
            args: Prisma.DeclarationExpenseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclarationExpensePayload>
          }
          update: {
            args: Prisma.DeclarationExpenseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclarationExpensePayload>
          }
          deleteMany: {
            args: Prisma.DeclarationExpenseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeclarationExpenseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeclarationExpenseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclarationExpensePayload>[]
          }
          upsert: {
            args: Prisma.DeclarationExpenseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclarationExpensePayload>
          }
          aggregate: {
            args: Prisma.DeclarationExpenseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeclarationExpense>
          }
          groupBy: {
            args: Prisma.DeclarationExpenseGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeclarationExpenseGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeclarationExpenseCountArgs<ExtArgs>
            result: $Utils.Optional<DeclarationExpenseCountAggregateOutputType> | number
          }
        }
      }
      DeclarationInvoice: {
        payload: Prisma.$DeclarationInvoicePayload<ExtArgs>
        fields: Prisma.DeclarationInvoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeclarationInvoiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclarationInvoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeclarationInvoiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclarationInvoicePayload>
          }
          findFirst: {
            args: Prisma.DeclarationInvoiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclarationInvoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeclarationInvoiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclarationInvoicePayload>
          }
          findMany: {
            args: Prisma.DeclarationInvoiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclarationInvoicePayload>[]
          }
          create: {
            args: Prisma.DeclarationInvoiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclarationInvoicePayload>
          }
          createMany: {
            args: Prisma.DeclarationInvoiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeclarationInvoiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclarationInvoicePayload>[]
          }
          delete: {
            args: Prisma.DeclarationInvoiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclarationInvoicePayload>
          }
          update: {
            args: Prisma.DeclarationInvoiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclarationInvoicePayload>
          }
          deleteMany: {
            args: Prisma.DeclarationInvoiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeclarationInvoiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeclarationInvoiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclarationInvoicePayload>[]
          }
          upsert: {
            args: Prisma.DeclarationInvoiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclarationInvoicePayload>
          }
          aggregate: {
            args: Prisma.DeclarationInvoiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeclarationInvoice>
          }
          groupBy: {
            args: Prisma.DeclarationInvoiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeclarationInvoiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeclarationInvoiceCountArgs<ExtArgs>
            result: $Utils.Optional<DeclarationInvoiceCountAggregateOutputType> | number
          }
        }
      }
      DeclarationInvoiceProduct: {
        payload: Prisma.$DeclarationInvoiceProductPayload<ExtArgs>
        fields: Prisma.DeclarationInvoiceProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeclarationInvoiceProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclarationInvoiceProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeclarationInvoiceProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclarationInvoiceProductPayload>
          }
          findFirst: {
            args: Prisma.DeclarationInvoiceProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclarationInvoiceProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeclarationInvoiceProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclarationInvoiceProductPayload>
          }
          findMany: {
            args: Prisma.DeclarationInvoiceProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclarationInvoiceProductPayload>[]
          }
          create: {
            args: Prisma.DeclarationInvoiceProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclarationInvoiceProductPayload>
          }
          createMany: {
            args: Prisma.DeclarationInvoiceProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeclarationInvoiceProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclarationInvoiceProductPayload>[]
          }
          delete: {
            args: Prisma.DeclarationInvoiceProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclarationInvoiceProductPayload>
          }
          update: {
            args: Prisma.DeclarationInvoiceProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclarationInvoiceProductPayload>
          }
          deleteMany: {
            args: Prisma.DeclarationInvoiceProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeclarationInvoiceProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeclarationInvoiceProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclarationInvoiceProductPayload>[]
          }
          upsert: {
            args: Prisma.DeclarationInvoiceProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclarationInvoiceProductPayload>
          }
          aggregate: {
            args: Prisma.DeclarationInvoiceProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeclarationInvoiceProduct>
          }
          groupBy: {
            args: Prisma.DeclarationInvoiceProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeclarationInvoiceProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeclarationInvoiceProductCountArgs<ExtArgs>
            result: $Utils.Optional<DeclarationInvoiceProductCountAggregateOutputType> | number
          }
        }
      }
      DeclarationInvoiceProductNCM: {
        payload: Prisma.$DeclarationInvoiceProductNCMPayload<ExtArgs>
        fields: Prisma.DeclarationInvoiceProductNCMFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeclarationInvoiceProductNCMFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclarationInvoiceProductNCMPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeclarationInvoiceProductNCMFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclarationInvoiceProductNCMPayload>
          }
          findFirst: {
            args: Prisma.DeclarationInvoiceProductNCMFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclarationInvoiceProductNCMPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeclarationInvoiceProductNCMFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclarationInvoiceProductNCMPayload>
          }
          findMany: {
            args: Prisma.DeclarationInvoiceProductNCMFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclarationInvoiceProductNCMPayload>[]
          }
          create: {
            args: Prisma.DeclarationInvoiceProductNCMCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclarationInvoiceProductNCMPayload>
          }
          createMany: {
            args: Prisma.DeclarationInvoiceProductNCMCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeclarationInvoiceProductNCMCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclarationInvoiceProductNCMPayload>[]
          }
          delete: {
            args: Prisma.DeclarationInvoiceProductNCMDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclarationInvoiceProductNCMPayload>
          }
          update: {
            args: Prisma.DeclarationInvoiceProductNCMUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclarationInvoiceProductNCMPayload>
          }
          deleteMany: {
            args: Prisma.DeclarationInvoiceProductNCMDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeclarationInvoiceProductNCMUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeclarationInvoiceProductNCMUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclarationInvoiceProductNCMPayload>[]
          }
          upsert: {
            args: Prisma.DeclarationInvoiceProductNCMUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclarationInvoiceProductNCMPayload>
          }
          aggregate: {
            args: Prisma.DeclarationInvoiceProductNCMAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeclarationInvoiceProductNCM>
          }
          groupBy: {
            args: Prisma.DeclarationInvoiceProductNCMGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeclarationInvoiceProductNCMGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeclarationInvoiceProductNCMCountArgs<ExtArgs>
            result: $Utils.Optional<DeclarationInvoiceProductNCMCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    nCM?: NCMOmit
    product?: ProductOmit
    invoice?: InvoiceOmit
    invoiceProduct?: InvoiceProductOmit
    expense?: ExpenseOmit
    declaration?: DeclarationOmit
    declarationExpense?: DeclarationExpenseOmit
    declarationInvoice?: DeclarationInvoiceOmit
    declarationInvoiceProduct?: DeclarationInvoiceProductOmit
    declarationInvoiceProductNCM?: DeclarationInvoiceProductNCMOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model NCM
   */

  export type AggregateNCM = {
    _count: NCMCountAggregateOutputType | null
    _avg: NCMAvgAggregateOutputType | null
    _sum: NCMSumAggregateOutputType | null
    _min: NCMMinAggregateOutputType | null
    _max: NCMMaxAggregateOutputType | null
  }

  export type NCMAvgAggregateOutputType = {
    code: number | null
    tax: number | null
    icms: number | null
    pis: number | null
    cofins: number | null
    ipi: number | null
  }

  export type NCMSumAggregateOutputType = {
    code: number | null
    tax: number | null
    icms: number | null
    pis: number | null
    cofins: number | null
    ipi: number | null
  }

  export type NCMMinAggregateOutputType = {
    ncmId: string | null
    id: string | null
    code: number | null
    tax: number | null
    icms: number | null
    pis: number | null
    cofins: number | null
    ipi: number | null
    event: $Enums.Events | null
    enable: boolean | null
    registeredAt: Date | null
  }

  export type NCMMaxAggregateOutputType = {
    ncmId: string | null
    id: string | null
    code: number | null
    tax: number | null
    icms: number | null
    pis: number | null
    cofins: number | null
    ipi: number | null
    event: $Enums.Events | null
    enable: boolean | null
    registeredAt: Date | null
  }

  export type NCMCountAggregateOutputType = {
    ncmId: number
    id: number
    code: number
    tax: number
    icms: number
    pis: number
    cofins: number
    ipi: number
    event: number
    enable: number
    registeredAt: number
    _all: number
  }


  export type NCMAvgAggregateInputType = {
    code?: true
    tax?: true
    icms?: true
    pis?: true
    cofins?: true
    ipi?: true
  }

  export type NCMSumAggregateInputType = {
    code?: true
    tax?: true
    icms?: true
    pis?: true
    cofins?: true
    ipi?: true
  }

  export type NCMMinAggregateInputType = {
    ncmId?: true
    id?: true
    code?: true
    tax?: true
    icms?: true
    pis?: true
    cofins?: true
    ipi?: true
    event?: true
    enable?: true
    registeredAt?: true
  }

  export type NCMMaxAggregateInputType = {
    ncmId?: true
    id?: true
    code?: true
    tax?: true
    icms?: true
    pis?: true
    cofins?: true
    ipi?: true
    event?: true
    enable?: true
    registeredAt?: true
  }

  export type NCMCountAggregateInputType = {
    ncmId?: true
    id?: true
    code?: true
    tax?: true
    icms?: true
    pis?: true
    cofins?: true
    ipi?: true
    event?: true
    enable?: true
    registeredAt?: true
    _all?: true
  }

  export type NCMAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NCM to aggregate.
     */
    where?: NCMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NCMS to fetch.
     */
    orderBy?: NCMOrderByWithRelationInput | NCMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NCMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NCMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NCMS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NCMS
    **/
    _count?: true | NCMCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NCMAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NCMSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NCMMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NCMMaxAggregateInputType
  }

  export type GetNCMAggregateType<T extends NCMAggregateArgs> = {
        [P in keyof T & keyof AggregateNCM]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNCM[P]>
      : GetScalarType<T[P], AggregateNCM[P]>
  }




  export type NCMGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NCMWhereInput
    orderBy?: NCMOrderByWithAggregationInput | NCMOrderByWithAggregationInput[]
    by: NCMScalarFieldEnum[] | NCMScalarFieldEnum
    having?: NCMScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NCMCountAggregateInputType | true
    _avg?: NCMAvgAggregateInputType
    _sum?: NCMSumAggregateInputType
    _min?: NCMMinAggregateInputType
    _max?: NCMMaxAggregateInputType
  }

  export type NCMGroupByOutputType = {
    ncmId: string
    id: string
    code: number
    tax: number
    icms: number
    pis: number
    cofins: number
    ipi: number
    event: $Enums.Events
    enable: boolean
    registeredAt: Date
    _count: NCMCountAggregateOutputType | null
    _avg: NCMAvgAggregateOutputType | null
    _sum: NCMSumAggregateOutputType | null
    _min: NCMMinAggregateOutputType | null
    _max: NCMMaxAggregateOutputType | null
  }

  type GetNCMGroupByPayload<T extends NCMGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NCMGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NCMGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NCMGroupByOutputType[P]>
            : GetScalarType<T[P], NCMGroupByOutputType[P]>
        }
      >
    >


  export type NCMSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ncmId?: boolean
    id?: boolean
    code?: boolean
    tax?: boolean
    icms?: boolean
    pis?: boolean
    cofins?: boolean
    ipi?: boolean
    event?: boolean
    enable?: boolean
    registeredAt?: boolean
  }, ExtArgs["result"]["nCM"]>

  export type NCMSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ncmId?: boolean
    id?: boolean
    code?: boolean
    tax?: boolean
    icms?: boolean
    pis?: boolean
    cofins?: boolean
    ipi?: boolean
    event?: boolean
    enable?: boolean
    registeredAt?: boolean
  }, ExtArgs["result"]["nCM"]>

  export type NCMSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ncmId?: boolean
    id?: boolean
    code?: boolean
    tax?: boolean
    icms?: boolean
    pis?: boolean
    cofins?: boolean
    ipi?: boolean
    event?: boolean
    enable?: boolean
    registeredAt?: boolean
  }, ExtArgs["result"]["nCM"]>

  export type NCMSelectScalar = {
    ncmId?: boolean
    id?: boolean
    code?: boolean
    tax?: boolean
    icms?: boolean
    pis?: boolean
    cofins?: boolean
    ipi?: boolean
    event?: boolean
    enable?: boolean
    registeredAt?: boolean
  }

  export type NCMOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ncmId" | "id" | "code" | "tax" | "icms" | "pis" | "cofins" | "ipi" | "event" | "enable" | "registeredAt", ExtArgs["result"]["nCM"]>

  export type $NCMPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NCM"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ncmId: string
      id: string
      code: number
      tax: number
      icms: number
      pis: number
      cofins: number
      ipi: number
      event: $Enums.Events
      enable: boolean
      registeredAt: Date
    }, ExtArgs["result"]["nCM"]>
    composites: {}
  }

  type NCMGetPayload<S extends boolean | null | undefined | NCMDefaultArgs> = $Result.GetResult<Prisma.$NCMPayload, S>

  type NCMCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NCMFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NCMCountAggregateInputType | true
    }

  export interface NCMDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NCM'], meta: { name: 'NCM' } }
    /**
     * Find zero or one NCM that matches the filter.
     * @param {NCMFindUniqueArgs} args - Arguments to find a NCM
     * @example
     * // Get one NCM
     * const nCM = await prisma.nCM.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NCMFindUniqueArgs>(args: SelectSubset<T, NCMFindUniqueArgs<ExtArgs>>): Prisma__NCMClient<$Result.GetResult<Prisma.$NCMPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NCM that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NCMFindUniqueOrThrowArgs} args - Arguments to find a NCM
     * @example
     * // Get one NCM
     * const nCM = await prisma.nCM.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NCMFindUniqueOrThrowArgs>(args: SelectSubset<T, NCMFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NCMClient<$Result.GetResult<Prisma.$NCMPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NCM that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NCMFindFirstArgs} args - Arguments to find a NCM
     * @example
     * // Get one NCM
     * const nCM = await prisma.nCM.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NCMFindFirstArgs>(args?: SelectSubset<T, NCMFindFirstArgs<ExtArgs>>): Prisma__NCMClient<$Result.GetResult<Prisma.$NCMPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NCM that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NCMFindFirstOrThrowArgs} args - Arguments to find a NCM
     * @example
     * // Get one NCM
     * const nCM = await prisma.nCM.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NCMFindFirstOrThrowArgs>(args?: SelectSubset<T, NCMFindFirstOrThrowArgs<ExtArgs>>): Prisma__NCMClient<$Result.GetResult<Prisma.$NCMPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NCMS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NCMFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NCMS
     * const nCMS = await prisma.nCM.findMany()
     * 
     * // Get first 10 NCMS
     * const nCMS = await prisma.nCM.findMany({ take: 10 })
     * 
     * // Only select the `ncmId`
     * const nCMWithNcmIdOnly = await prisma.nCM.findMany({ select: { ncmId: true } })
     * 
     */
    findMany<T extends NCMFindManyArgs>(args?: SelectSubset<T, NCMFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NCMPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NCM.
     * @param {NCMCreateArgs} args - Arguments to create a NCM.
     * @example
     * // Create one NCM
     * const NCM = await prisma.nCM.create({
     *   data: {
     *     // ... data to create a NCM
     *   }
     * })
     * 
     */
    create<T extends NCMCreateArgs>(args: SelectSubset<T, NCMCreateArgs<ExtArgs>>): Prisma__NCMClient<$Result.GetResult<Prisma.$NCMPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NCMS.
     * @param {NCMCreateManyArgs} args - Arguments to create many NCMS.
     * @example
     * // Create many NCMS
     * const nCM = await prisma.nCM.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NCMCreateManyArgs>(args?: SelectSubset<T, NCMCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NCMS and returns the data saved in the database.
     * @param {NCMCreateManyAndReturnArgs} args - Arguments to create many NCMS.
     * @example
     * // Create many NCMS
     * const nCM = await prisma.nCM.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NCMS and only return the `ncmId`
     * const nCMWithNcmIdOnly = await prisma.nCM.createManyAndReturn({
     *   select: { ncmId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NCMCreateManyAndReturnArgs>(args?: SelectSubset<T, NCMCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NCMPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NCM.
     * @param {NCMDeleteArgs} args - Arguments to delete one NCM.
     * @example
     * // Delete one NCM
     * const NCM = await prisma.nCM.delete({
     *   where: {
     *     // ... filter to delete one NCM
     *   }
     * })
     * 
     */
    delete<T extends NCMDeleteArgs>(args: SelectSubset<T, NCMDeleteArgs<ExtArgs>>): Prisma__NCMClient<$Result.GetResult<Prisma.$NCMPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NCM.
     * @param {NCMUpdateArgs} args - Arguments to update one NCM.
     * @example
     * // Update one NCM
     * const nCM = await prisma.nCM.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NCMUpdateArgs>(args: SelectSubset<T, NCMUpdateArgs<ExtArgs>>): Prisma__NCMClient<$Result.GetResult<Prisma.$NCMPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NCMS.
     * @param {NCMDeleteManyArgs} args - Arguments to filter NCMS to delete.
     * @example
     * // Delete a few NCMS
     * const { count } = await prisma.nCM.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NCMDeleteManyArgs>(args?: SelectSubset<T, NCMDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NCMS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NCMUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NCMS
     * const nCM = await prisma.nCM.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NCMUpdateManyArgs>(args: SelectSubset<T, NCMUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NCMS and returns the data updated in the database.
     * @param {NCMUpdateManyAndReturnArgs} args - Arguments to update many NCMS.
     * @example
     * // Update many NCMS
     * const nCM = await prisma.nCM.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NCMS and only return the `ncmId`
     * const nCMWithNcmIdOnly = await prisma.nCM.updateManyAndReturn({
     *   select: { ncmId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NCMUpdateManyAndReturnArgs>(args: SelectSubset<T, NCMUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NCMPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NCM.
     * @param {NCMUpsertArgs} args - Arguments to update or create a NCM.
     * @example
     * // Update or create a NCM
     * const nCM = await prisma.nCM.upsert({
     *   create: {
     *     // ... data to create a NCM
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NCM we want to update
     *   }
     * })
     */
    upsert<T extends NCMUpsertArgs>(args: SelectSubset<T, NCMUpsertArgs<ExtArgs>>): Prisma__NCMClient<$Result.GetResult<Prisma.$NCMPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NCMS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NCMCountArgs} args - Arguments to filter NCMS to count.
     * @example
     * // Count the number of NCMS
     * const count = await prisma.nCM.count({
     *   where: {
     *     // ... the filter for the NCMS we want to count
     *   }
     * })
    **/
    count<T extends NCMCountArgs>(
      args?: Subset<T, NCMCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NCMCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NCM.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NCMAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NCMAggregateArgs>(args: Subset<T, NCMAggregateArgs>): Prisma.PrismaPromise<GetNCMAggregateType<T>>

    /**
     * Group by NCM.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NCMGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NCMGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NCMGroupByArgs['orderBy'] }
        : { orderBy?: NCMGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NCMGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNCMGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NCM model
   */
  readonly fields: NCMFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NCM.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NCMClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NCM model
   */
  interface NCMFieldRefs {
    readonly ncmId: FieldRef<"NCM", 'String'>
    readonly id: FieldRef<"NCM", 'String'>
    readonly code: FieldRef<"NCM", 'Int'>
    readonly tax: FieldRef<"NCM", 'Int'>
    readonly icms: FieldRef<"NCM", 'Int'>
    readonly pis: FieldRef<"NCM", 'Int'>
    readonly cofins: FieldRef<"NCM", 'Int'>
    readonly ipi: FieldRef<"NCM", 'Int'>
    readonly event: FieldRef<"NCM", 'Events'>
    readonly enable: FieldRef<"NCM", 'Boolean'>
    readonly registeredAt: FieldRef<"NCM", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NCM findUnique
   */
  export type NCMFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NCM
     */
    select?: NCMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NCM
     */
    omit?: NCMOmit<ExtArgs> | null
    /**
     * Filter, which NCM to fetch.
     */
    where: NCMWhereUniqueInput
  }

  /**
   * NCM findUniqueOrThrow
   */
  export type NCMFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NCM
     */
    select?: NCMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NCM
     */
    omit?: NCMOmit<ExtArgs> | null
    /**
     * Filter, which NCM to fetch.
     */
    where: NCMWhereUniqueInput
  }

  /**
   * NCM findFirst
   */
  export type NCMFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NCM
     */
    select?: NCMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NCM
     */
    omit?: NCMOmit<ExtArgs> | null
    /**
     * Filter, which NCM to fetch.
     */
    where?: NCMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NCMS to fetch.
     */
    orderBy?: NCMOrderByWithRelationInput | NCMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NCMS.
     */
    cursor?: NCMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NCMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NCMS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NCMS.
     */
    distinct?: NCMScalarFieldEnum | NCMScalarFieldEnum[]
  }

  /**
   * NCM findFirstOrThrow
   */
  export type NCMFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NCM
     */
    select?: NCMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NCM
     */
    omit?: NCMOmit<ExtArgs> | null
    /**
     * Filter, which NCM to fetch.
     */
    where?: NCMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NCMS to fetch.
     */
    orderBy?: NCMOrderByWithRelationInput | NCMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NCMS.
     */
    cursor?: NCMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NCMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NCMS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NCMS.
     */
    distinct?: NCMScalarFieldEnum | NCMScalarFieldEnum[]
  }

  /**
   * NCM findMany
   */
  export type NCMFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NCM
     */
    select?: NCMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NCM
     */
    omit?: NCMOmit<ExtArgs> | null
    /**
     * Filter, which NCMS to fetch.
     */
    where?: NCMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NCMS to fetch.
     */
    orderBy?: NCMOrderByWithRelationInput | NCMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NCMS.
     */
    cursor?: NCMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NCMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NCMS.
     */
    skip?: number
    distinct?: NCMScalarFieldEnum | NCMScalarFieldEnum[]
  }

  /**
   * NCM create
   */
  export type NCMCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NCM
     */
    select?: NCMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NCM
     */
    omit?: NCMOmit<ExtArgs> | null
    /**
     * The data needed to create a NCM.
     */
    data: XOR<NCMCreateInput, NCMUncheckedCreateInput>
  }

  /**
   * NCM createMany
   */
  export type NCMCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NCMS.
     */
    data: NCMCreateManyInput | NCMCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NCM createManyAndReturn
   */
  export type NCMCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NCM
     */
    select?: NCMSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NCM
     */
    omit?: NCMOmit<ExtArgs> | null
    /**
     * The data used to create many NCMS.
     */
    data: NCMCreateManyInput | NCMCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NCM update
   */
  export type NCMUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NCM
     */
    select?: NCMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NCM
     */
    omit?: NCMOmit<ExtArgs> | null
    /**
     * The data needed to update a NCM.
     */
    data: XOR<NCMUpdateInput, NCMUncheckedUpdateInput>
    /**
     * Choose, which NCM to update.
     */
    where: NCMWhereUniqueInput
  }

  /**
   * NCM updateMany
   */
  export type NCMUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NCMS.
     */
    data: XOR<NCMUpdateManyMutationInput, NCMUncheckedUpdateManyInput>
    /**
     * Filter which NCMS to update
     */
    where?: NCMWhereInput
    /**
     * Limit how many NCMS to update.
     */
    limit?: number
  }

  /**
   * NCM updateManyAndReturn
   */
  export type NCMUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NCM
     */
    select?: NCMSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NCM
     */
    omit?: NCMOmit<ExtArgs> | null
    /**
     * The data used to update NCMS.
     */
    data: XOR<NCMUpdateManyMutationInput, NCMUncheckedUpdateManyInput>
    /**
     * Filter which NCMS to update
     */
    where?: NCMWhereInput
    /**
     * Limit how many NCMS to update.
     */
    limit?: number
  }

  /**
   * NCM upsert
   */
  export type NCMUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NCM
     */
    select?: NCMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NCM
     */
    omit?: NCMOmit<ExtArgs> | null
    /**
     * The filter to search for the NCM to update in case it exists.
     */
    where: NCMWhereUniqueInput
    /**
     * In case the NCM found by the `where` argument doesn't exist, create a new NCM with this data.
     */
    create: XOR<NCMCreateInput, NCMUncheckedCreateInput>
    /**
     * In case the NCM was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NCMUpdateInput, NCMUncheckedUpdateInput>
  }

  /**
   * NCM delete
   */
  export type NCMDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NCM
     */
    select?: NCMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NCM
     */
    omit?: NCMOmit<ExtArgs> | null
    /**
     * Filter which NCM to delete.
     */
    where: NCMWhereUniqueInput
  }

  /**
   * NCM deleteMany
   */
  export type NCMDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NCMS to delete
     */
    where?: NCMWhereInput
    /**
     * Limit how many NCMS to delete.
     */
    limit?: number
  }

  /**
   * NCM without action
   */
  export type NCMDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NCM
     */
    select?: NCMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NCM
     */
    omit?: NCMOmit<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    weight: number | null
    length: number | null
    height: number | null
    width: number | null
  }

  export type ProductSumAggregateOutputType = {
    weight: number | null
    length: number | null
    height: number | null
    width: number | null
  }

  export type ProductMinAggregateOutputType = {
    productId: string | null
    id: string | null
    name: string | null
    tid: string | null
    description: string | null
    weight: number | null
    length: number | null
    height: number | null
    width: number | null
    ncmId: string | null
    event: $Enums.Events | null
    enable: boolean | null
    registeredAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    productId: string | null
    id: string | null
    name: string | null
    tid: string | null
    description: string | null
    weight: number | null
    length: number | null
    height: number | null
    width: number | null
    ncmId: string | null
    event: $Enums.Events | null
    enable: boolean | null
    registeredAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    productId: number
    id: number
    name: number
    tid: number
    description: number
    weight: number
    length: number
    height: number
    width: number
    ncmId: number
    event: number
    enable: number
    registeredAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    weight?: true
    length?: true
    height?: true
    width?: true
  }

  export type ProductSumAggregateInputType = {
    weight?: true
    length?: true
    height?: true
    width?: true
  }

  export type ProductMinAggregateInputType = {
    productId?: true
    id?: true
    name?: true
    tid?: true
    description?: true
    weight?: true
    length?: true
    height?: true
    width?: true
    ncmId?: true
    event?: true
    enable?: true
    registeredAt?: true
  }

  export type ProductMaxAggregateInputType = {
    productId?: true
    id?: true
    name?: true
    tid?: true
    description?: true
    weight?: true
    length?: true
    height?: true
    width?: true
    ncmId?: true
    event?: true
    enable?: true
    registeredAt?: true
  }

  export type ProductCountAggregateInputType = {
    productId?: true
    id?: true
    name?: true
    tid?: true
    description?: true
    weight?: true
    length?: true
    height?: true
    width?: true
    ncmId?: true
    event?: true
    enable?: true
    registeredAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    productId: string
    id: string
    name: string
    tid: string
    description: string
    weight: number
    length: number
    height: number
    width: number
    ncmId: string
    event: $Enums.Events
    enable: boolean
    registeredAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productId?: boolean
    id?: boolean
    name?: boolean
    tid?: boolean
    description?: boolean
    weight?: boolean
    length?: boolean
    height?: boolean
    width?: boolean
    ncmId?: boolean
    event?: boolean
    enable?: boolean
    registeredAt?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productId?: boolean
    id?: boolean
    name?: boolean
    tid?: boolean
    description?: boolean
    weight?: boolean
    length?: boolean
    height?: boolean
    width?: boolean
    ncmId?: boolean
    event?: boolean
    enable?: boolean
    registeredAt?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productId?: boolean
    id?: boolean
    name?: boolean
    tid?: boolean
    description?: boolean
    weight?: boolean
    length?: boolean
    height?: boolean
    width?: boolean
    ncmId?: boolean
    event?: boolean
    enable?: boolean
    registeredAt?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    productId?: boolean
    id?: boolean
    name?: boolean
    tid?: boolean
    description?: boolean
    weight?: boolean
    length?: boolean
    height?: boolean
    width?: boolean
    ncmId?: boolean
    event?: boolean
    enable?: boolean
    registeredAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"productId" | "id" | "name" | "tid" | "description" | "weight" | "length" | "height" | "width" | "ncmId" | "event" | "enable" | "registeredAt", ExtArgs["result"]["product"]>

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      productId: string
      id: string
      name: string
      tid: string
      description: string
      weight: number
      length: number
      height: number
      width: number
      ncmId: string
      event: $Enums.Events
      enable: boolean
      registeredAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `productId`
     * const productWithProductIdOnly = await prisma.product.findMany({ select: { productId: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `productId`
     * const productWithProductIdOnly = await prisma.product.createManyAndReturn({
     *   select: { productId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `productId`
     * const productWithProductIdOnly = await prisma.product.updateManyAndReturn({
     *   select: { productId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly productId: FieldRef<"Product", 'String'>
    readonly id: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly tid: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly weight: FieldRef<"Product", 'Int'>
    readonly length: FieldRef<"Product", 'Int'>
    readonly height: FieldRef<"Product", 'Int'>
    readonly width: FieldRef<"Product", 'Int'>
    readonly ncmId: FieldRef<"Product", 'String'>
    readonly event: FieldRef<"Product", 'Events'>
    readonly enable: FieldRef<"Product", 'Boolean'>
    readonly registeredAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
  }


  /**
   * Model Invoice
   */

  export type AggregateInvoice = {
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  export type InvoiceAvgAggregateOutputType = {
    quote: number | null
  }

  export type InvoiceSumAggregateOutputType = {
    quote: number | null
  }

  export type InvoiceMinAggregateOutputType = {
    invoiceId: string | null
    id: string | null
    registration: string | null
    createdAt: Date | null
    quote: number | null
    event: $Enums.Events | null
    enable: boolean | null
    registeredAt: Date | null
  }

  export type InvoiceMaxAggregateOutputType = {
    invoiceId: string | null
    id: string | null
    registration: string | null
    createdAt: Date | null
    quote: number | null
    event: $Enums.Events | null
    enable: boolean | null
    registeredAt: Date | null
  }

  export type InvoiceCountAggregateOutputType = {
    invoiceId: number
    id: number
    registration: number
    createdAt: number
    quote: number
    event: number
    enable: number
    registeredAt: number
    _all: number
  }


  export type InvoiceAvgAggregateInputType = {
    quote?: true
  }

  export type InvoiceSumAggregateInputType = {
    quote?: true
  }

  export type InvoiceMinAggregateInputType = {
    invoiceId?: true
    id?: true
    registration?: true
    createdAt?: true
    quote?: true
    event?: true
    enable?: true
    registeredAt?: true
  }

  export type InvoiceMaxAggregateInputType = {
    invoiceId?: true
    id?: true
    registration?: true
    createdAt?: true
    quote?: true
    event?: true
    enable?: true
    registeredAt?: true
  }

  export type InvoiceCountAggregateInputType = {
    invoiceId?: true
    id?: true
    registration?: true
    createdAt?: true
    quote?: true
    event?: true
    enable?: true
    registeredAt?: true
    _all?: true
  }

  export type InvoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoice to aggregate.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invoices
    **/
    _count?: true | InvoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoiceMaxAggregateInputType
  }

  export type GetInvoiceAggregateType<T extends InvoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoice[P]>
      : GetScalarType<T[P], AggregateInvoice[P]>
  }




  export type InvoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithAggregationInput | InvoiceOrderByWithAggregationInput[]
    by: InvoiceScalarFieldEnum[] | InvoiceScalarFieldEnum
    having?: InvoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoiceCountAggregateInputType | true
    _avg?: InvoiceAvgAggregateInputType
    _sum?: InvoiceSumAggregateInputType
    _min?: InvoiceMinAggregateInputType
    _max?: InvoiceMaxAggregateInputType
  }

  export type InvoiceGroupByOutputType = {
    invoiceId: string
    id: string
    registration: string
    createdAt: Date
    quote: number
    event: $Enums.Events
    enable: boolean
    registeredAt: Date
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  type GetInvoiceGroupByPayload<T extends InvoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
            : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
        }
      >
    >


  export type InvoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    invoiceId?: boolean
    id?: boolean
    registration?: boolean
    createdAt?: boolean
    quote?: boolean
    event?: boolean
    enable?: boolean
    registeredAt?: boolean
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    invoiceId?: boolean
    id?: boolean
    registration?: boolean
    createdAt?: boolean
    quote?: boolean
    event?: boolean
    enable?: boolean
    registeredAt?: boolean
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    invoiceId?: boolean
    id?: boolean
    registration?: boolean
    createdAt?: boolean
    quote?: boolean
    event?: boolean
    enable?: boolean
    registeredAt?: boolean
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectScalar = {
    invoiceId?: boolean
    id?: boolean
    registration?: boolean
    createdAt?: boolean
    quote?: boolean
    event?: boolean
    enable?: boolean
    registeredAt?: boolean
  }

  export type InvoiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"invoiceId" | "id" | "registration" | "createdAt" | "quote" | "event" | "enable" | "registeredAt", ExtArgs["result"]["invoice"]>

  export type $InvoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invoice"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      invoiceId: string
      id: string
      registration: string
      createdAt: Date
      quote: number
      event: $Enums.Events
      enable: boolean
      registeredAt: Date
    }, ExtArgs["result"]["invoice"]>
    composites: {}
  }

  type InvoiceGetPayload<S extends boolean | null | undefined | InvoiceDefaultArgs> = $Result.GetResult<Prisma.$InvoicePayload, S>

  type InvoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvoiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvoiceCountAggregateInputType | true
    }

  export interface InvoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invoice'], meta: { name: 'Invoice' } }
    /**
     * Find zero or one Invoice that matches the filter.
     * @param {InvoiceFindUniqueArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvoiceFindUniqueArgs>(args: SelectSubset<T, InvoiceFindUniqueArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invoice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvoiceFindUniqueOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvoiceFindUniqueOrThrowArgs>(args: SelectSubset<T, InvoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvoiceFindFirstArgs>(args?: SelectSubset<T, InvoiceFindFirstArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvoiceFindFirstOrThrowArgs>(args?: SelectSubset<T, InvoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoices
     * const invoices = await prisma.invoice.findMany()
     * 
     * // Get first 10 Invoices
     * const invoices = await prisma.invoice.findMany({ take: 10 })
     * 
     * // Only select the `invoiceId`
     * const invoiceWithInvoiceIdOnly = await prisma.invoice.findMany({ select: { invoiceId: true } })
     * 
     */
    findMany<T extends InvoiceFindManyArgs>(args?: SelectSubset<T, InvoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invoice.
     * @param {InvoiceCreateArgs} args - Arguments to create a Invoice.
     * @example
     * // Create one Invoice
     * const Invoice = await prisma.invoice.create({
     *   data: {
     *     // ... data to create a Invoice
     *   }
     * })
     * 
     */
    create<T extends InvoiceCreateArgs>(args: SelectSubset<T, InvoiceCreateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invoices.
     * @param {InvoiceCreateManyArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvoiceCreateManyArgs>(args?: SelectSubset<T, InvoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invoices and returns the data saved in the database.
     * @param {InvoiceCreateManyAndReturnArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invoices and only return the `invoiceId`
     * const invoiceWithInvoiceIdOnly = await prisma.invoice.createManyAndReturn({
     *   select: { invoiceId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvoiceCreateManyAndReturnArgs>(args?: SelectSubset<T, InvoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invoice.
     * @param {InvoiceDeleteArgs} args - Arguments to delete one Invoice.
     * @example
     * // Delete one Invoice
     * const Invoice = await prisma.invoice.delete({
     *   where: {
     *     // ... filter to delete one Invoice
     *   }
     * })
     * 
     */
    delete<T extends InvoiceDeleteArgs>(args: SelectSubset<T, InvoiceDeleteArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invoice.
     * @param {InvoiceUpdateArgs} args - Arguments to update one Invoice.
     * @example
     * // Update one Invoice
     * const invoice = await prisma.invoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvoiceUpdateArgs>(args: SelectSubset<T, InvoiceUpdateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invoices.
     * @param {InvoiceDeleteManyArgs} args - Arguments to filter Invoices to delete.
     * @example
     * // Delete a few Invoices
     * const { count } = await prisma.invoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvoiceDeleteManyArgs>(args?: SelectSubset<T, InvoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvoiceUpdateManyArgs>(args: SelectSubset<T, InvoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices and returns the data updated in the database.
     * @param {InvoiceUpdateManyAndReturnArgs} args - Arguments to update many Invoices.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Invoices and only return the `invoiceId`
     * const invoiceWithInvoiceIdOnly = await prisma.invoice.updateManyAndReturn({
     *   select: { invoiceId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InvoiceUpdateManyAndReturnArgs>(args: SelectSubset<T, InvoiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invoice.
     * @param {InvoiceUpsertArgs} args - Arguments to update or create a Invoice.
     * @example
     * // Update or create a Invoice
     * const invoice = await prisma.invoice.upsert({
     *   create: {
     *     // ... data to create a Invoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoice we want to update
     *   }
     * })
     */
    upsert<T extends InvoiceUpsertArgs>(args: SelectSubset<T, InvoiceUpsertArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceCountArgs} args - Arguments to filter Invoices to count.
     * @example
     * // Count the number of Invoices
     * const count = await prisma.invoice.count({
     *   where: {
     *     // ... the filter for the Invoices we want to count
     *   }
     * })
    **/
    count<T extends InvoiceCountArgs>(
      args?: Subset<T, InvoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvoiceAggregateArgs>(args: Subset<T, InvoiceAggregateArgs>): Prisma.PrismaPromise<GetInvoiceAggregateType<T>>

    /**
     * Group by Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InvoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvoiceGroupByArgs['orderBy'] }
        : { orderBy?: InvoiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InvoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invoice model
   */
  readonly fields: InvoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Invoice model
   */
  interface InvoiceFieldRefs {
    readonly invoiceId: FieldRef<"Invoice", 'String'>
    readonly id: FieldRef<"Invoice", 'String'>
    readonly registration: FieldRef<"Invoice", 'String'>
    readonly createdAt: FieldRef<"Invoice", 'DateTime'>
    readonly quote: FieldRef<"Invoice", 'Int'>
    readonly event: FieldRef<"Invoice", 'Events'>
    readonly enable: FieldRef<"Invoice", 'Boolean'>
    readonly registeredAt: FieldRef<"Invoice", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Invoice findUnique
   */
  export type InvoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findUniqueOrThrow
   */
  export type InvoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findFirst
   */
  export type InvoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findFirstOrThrow
   */
  export type InvoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findMany
   */
  export type InvoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Filter, which Invoices to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice create
   */
  export type InvoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * The data needed to create a Invoice.
     */
    data: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
  }

  /**
   * Invoice createMany
   */
  export type InvoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Invoice createManyAndReturn
   */
  export type InvoiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Invoice update
   */
  export type InvoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * The data needed to update a Invoice.
     */
    data: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
    /**
     * Choose, which Invoice to update.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice updateMany
   */
  export type InvoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to update.
     */
    limit?: number
  }

  /**
   * Invoice updateManyAndReturn
   */
  export type InvoiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to update.
     */
    limit?: number
  }

  /**
   * Invoice upsert
   */
  export type InvoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * The filter to search for the Invoice to update in case it exists.
     */
    where: InvoiceWhereUniqueInput
    /**
     * In case the Invoice found by the `where` argument doesn't exist, create a new Invoice with this data.
     */
    create: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
    /**
     * In case the Invoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
  }

  /**
   * Invoice delete
   */
  export type InvoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Filter which Invoice to delete.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice deleteMany
   */
  export type InvoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoices to delete
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to delete.
     */
    limit?: number
  }

  /**
   * Invoice without action
   */
  export type InvoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
  }


  /**
   * Model InvoiceProduct
   */

  export type AggregateInvoiceProduct = {
    _count: InvoiceProductCountAggregateOutputType | null
    _avg: InvoiceProductAvgAggregateOutputType | null
    _sum: InvoiceProductSumAggregateOutputType | null
    _min: InvoiceProductMinAggregateOutputType | null
    _max: InvoiceProductMaxAggregateOutputType | null
  }

  export type InvoiceProductAvgAggregateOutputType = {
    amount: number | null
    quantity: number | null
  }

  export type InvoiceProductSumAggregateOutputType = {
    amount: number | null
    quantity: number | null
  }

  export type InvoiceProductMinAggregateOutputType = {
    invoiceProductId: string | null
    id: string | null
    productId: string | null
    invoiceId: string | null
    amount: number | null
    quantity: number | null
    event: $Enums.Events | null
    enable: boolean | null
    registeredAt: Date | null
  }

  export type InvoiceProductMaxAggregateOutputType = {
    invoiceProductId: string | null
    id: string | null
    productId: string | null
    invoiceId: string | null
    amount: number | null
    quantity: number | null
    event: $Enums.Events | null
    enable: boolean | null
    registeredAt: Date | null
  }

  export type InvoiceProductCountAggregateOutputType = {
    invoiceProductId: number
    id: number
    productId: number
    invoiceId: number
    amount: number
    quantity: number
    event: number
    enable: number
    registeredAt: number
    _all: number
  }


  export type InvoiceProductAvgAggregateInputType = {
    amount?: true
    quantity?: true
  }

  export type InvoiceProductSumAggregateInputType = {
    amount?: true
    quantity?: true
  }

  export type InvoiceProductMinAggregateInputType = {
    invoiceProductId?: true
    id?: true
    productId?: true
    invoiceId?: true
    amount?: true
    quantity?: true
    event?: true
    enable?: true
    registeredAt?: true
  }

  export type InvoiceProductMaxAggregateInputType = {
    invoiceProductId?: true
    id?: true
    productId?: true
    invoiceId?: true
    amount?: true
    quantity?: true
    event?: true
    enable?: true
    registeredAt?: true
  }

  export type InvoiceProductCountAggregateInputType = {
    invoiceProductId?: true
    id?: true
    productId?: true
    invoiceId?: true
    amount?: true
    quantity?: true
    event?: true
    enable?: true
    registeredAt?: true
    _all?: true
  }

  export type InvoiceProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InvoiceProduct to aggregate.
     */
    where?: InvoiceProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceProducts to fetch.
     */
    orderBy?: InvoiceProductOrderByWithRelationInput | InvoiceProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvoiceProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InvoiceProducts
    **/
    _count?: true | InvoiceProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoiceProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoiceProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoiceProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoiceProductMaxAggregateInputType
  }

  export type GetInvoiceProductAggregateType<T extends InvoiceProductAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoiceProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoiceProduct[P]>
      : GetScalarType<T[P], AggregateInvoiceProduct[P]>
  }




  export type InvoiceProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceProductWhereInput
    orderBy?: InvoiceProductOrderByWithAggregationInput | InvoiceProductOrderByWithAggregationInput[]
    by: InvoiceProductScalarFieldEnum[] | InvoiceProductScalarFieldEnum
    having?: InvoiceProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoiceProductCountAggregateInputType | true
    _avg?: InvoiceProductAvgAggregateInputType
    _sum?: InvoiceProductSumAggregateInputType
    _min?: InvoiceProductMinAggregateInputType
    _max?: InvoiceProductMaxAggregateInputType
  }

  export type InvoiceProductGroupByOutputType = {
    invoiceProductId: string
    id: string
    productId: string
    invoiceId: string
    amount: number
    quantity: number
    event: $Enums.Events
    enable: boolean
    registeredAt: Date
    _count: InvoiceProductCountAggregateOutputType | null
    _avg: InvoiceProductAvgAggregateOutputType | null
    _sum: InvoiceProductSumAggregateOutputType | null
    _min: InvoiceProductMinAggregateOutputType | null
    _max: InvoiceProductMaxAggregateOutputType | null
  }

  type GetInvoiceProductGroupByPayload<T extends InvoiceProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoiceProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoiceProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoiceProductGroupByOutputType[P]>
            : GetScalarType<T[P], InvoiceProductGroupByOutputType[P]>
        }
      >
    >


  export type InvoiceProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    invoiceProductId?: boolean
    id?: boolean
    productId?: boolean
    invoiceId?: boolean
    amount?: boolean
    quantity?: boolean
    event?: boolean
    enable?: boolean
    registeredAt?: boolean
  }, ExtArgs["result"]["invoiceProduct"]>

  export type InvoiceProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    invoiceProductId?: boolean
    id?: boolean
    productId?: boolean
    invoiceId?: boolean
    amount?: boolean
    quantity?: boolean
    event?: boolean
    enable?: boolean
    registeredAt?: boolean
  }, ExtArgs["result"]["invoiceProduct"]>

  export type InvoiceProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    invoiceProductId?: boolean
    id?: boolean
    productId?: boolean
    invoiceId?: boolean
    amount?: boolean
    quantity?: boolean
    event?: boolean
    enable?: boolean
    registeredAt?: boolean
  }, ExtArgs["result"]["invoiceProduct"]>

  export type InvoiceProductSelectScalar = {
    invoiceProductId?: boolean
    id?: boolean
    productId?: boolean
    invoiceId?: boolean
    amount?: boolean
    quantity?: boolean
    event?: boolean
    enable?: boolean
    registeredAt?: boolean
  }

  export type InvoiceProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"invoiceProductId" | "id" | "productId" | "invoiceId" | "amount" | "quantity" | "event" | "enable" | "registeredAt", ExtArgs["result"]["invoiceProduct"]>

  export type $InvoiceProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InvoiceProduct"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      invoiceProductId: string
      id: string
      productId: string
      invoiceId: string
      amount: number
      quantity: number
      event: $Enums.Events
      enable: boolean
      registeredAt: Date
    }, ExtArgs["result"]["invoiceProduct"]>
    composites: {}
  }

  type InvoiceProductGetPayload<S extends boolean | null | undefined | InvoiceProductDefaultArgs> = $Result.GetResult<Prisma.$InvoiceProductPayload, S>

  type InvoiceProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvoiceProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvoiceProductCountAggregateInputType | true
    }

  export interface InvoiceProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InvoiceProduct'], meta: { name: 'InvoiceProduct' } }
    /**
     * Find zero or one InvoiceProduct that matches the filter.
     * @param {InvoiceProductFindUniqueArgs} args - Arguments to find a InvoiceProduct
     * @example
     * // Get one InvoiceProduct
     * const invoiceProduct = await prisma.invoiceProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvoiceProductFindUniqueArgs>(args: SelectSubset<T, InvoiceProductFindUniqueArgs<ExtArgs>>): Prisma__InvoiceProductClient<$Result.GetResult<Prisma.$InvoiceProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InvoiceProduct that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvoiceProductFindUniqueOrThrowArgs} args - Arguments to find a InvoiceProduct
     * @example
     * // Get one InvoiceProduct
     * const invoiceProduct = await prisma.invoiceProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvoiceProductFindUniqueOrThrowArgs>(args: SelectSubset<T, InvoiceProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvoiceProductClient<$Result.GetResult<Prisma.$InvoiceProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InvoiceProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceProductFindFirstArgs} args - Arguments to find a InvoiceProduct
     * @example
     * // Get one InvoiceProduct
     * const invoiceProduct = await prisma.invoiceProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvoiceProductFindFirstArgs>(args?: SelectSubset<T, InvoiceProductFindFirstArgs<ExtArgs>>): Prisma__InvoiceProductClient<$Result.GetResult<Prisma.$InvoiceProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InvoiceProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceProductFindFirstOrThrowArgs} args - Arguments to find a InvoiceProduct
     * @example
     * // Get one InvoiceProduct
     * const invoiceProduct = await prisma.invoiceProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvoiceProductFindFirstOrThrowArgs>(args?: SelectSubset<T, InvoiceProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvoiceProductClient<$Result.GetResult<Prisma.$InvoiceProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InvoiceProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InvoiceProducts
     * const invoiceProducts = await prisma.invoiceProduct.findMany()
     * 
     * // Get first 10 InvoiceProducts
     * const invoiceProducts = await prisma.invoiceProduct.findMany({ take: 10 })
     * 
     * // Only select the `invoiceProductId`
     * const invoiceProductWithInvoiceProductIdOnly = await prisma.invoiceProduct.findMany({ select: { invoiceProductId: true } })
     * 
     */
    findMany<T extends InvoiceProductFindManyArgs>(args?: SelectSubset<T, InvoiceProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InvoiceProduct.
     * @param {InvoiceProductCreateArgs} args - Arguments to create a InvoiceProduct.
     * @example
     * // Create one InvoiceProduct
     * const InvoiceProduct = await prisma.invoiceProduct.create({
     *   data: {
     *     // ... data to create a InvoiceProduct
     *   }
     * })
     * 
     */
    create<T extends InvoiceProductCreateArgs>(args: SelectSubset<T, InvoiceProductCreateArgs<ExtArgs>>): Prisma__InvoiceProductClient<$Result.GetResult<Prisma.$InvoiceProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InvoiceProducts.
     * @param {InvoiceProductCreateManyArgs} args - Arguments to create many InvoiceProducts.
     * @example
     * // Create many InvoiceProducts
     * const invoiceProduct = await prisma.invoiceProduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvoiceProductCreateManyArgs>(args?: SelectSubset<T, InvoiceProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InvoiceProducts and returns the data saved in the database.
     * @param {InvoiceProductCreateManyAndReturnArgs} args - Arguments to create many InvoiceProducts.
     * @example
     * // Create many InvoiceProducts
     * const invoiceProduct = await prisma.invoiceProduct.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InvoiceProducts and only return the `invoiceProductId`
     * const invoiceProductWithInvoiceProductIdOnly = await prisma.invoiceProduct.createManyAndReturn({
     *   select: { invoiceProductId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvoiceProductCreateManyAndReturnArgs>(args?: SelectSubset<T, InvoiceProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InvoiceProduct.
     * @param {InvoiceProductDeleteArgs} args - Arguments to delete one InvoiceProduct.
     * @example
     * // Delete one InvoiceProduct
     * const InvoiceProduct = await prisma.invoiceProduct.delete({
     *   where: {
     *     // ... filter to delete one InvoiceProduct
     *   }
     * })
     * 
     */
    delete<T extends InvoiceProductDeleteArgs>(args: SelectSubset<T, InvoiceProductDeleteArgs<ExtArgs>>): Prisma__InvoiceProductClient<$Result.GetResult<Prisma.$InvoiceProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InvoiceProduct.
     * @param {InvoiceProductUpdateArgs} args - Arguments to update one InvoiceProduct.
     * @example
     * // Update one InvoiceProduct
     * const invoiceProduct = await prisma.invoiceProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvoiceProductUpdateArgs>(args: SelectSubset<T, InvoiceProductUpdateArgs<ExtArgs>>): Prisma__InvoiceProductClient<$Result.GetResult<Prisma.$InvoiceProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InvoiceProducts.
     * @param {InvoiceProductDeleteManyArgs} args - Arguments to filter InvoiceProducts to delete.
     * @example
     * // Delete a few InvoiceProducts
     * const { count } = await prisma.invoiceProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvoiceProductDeleteManyArgs>(args?: SelectSubset<T, InvoiceProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InvoiceProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InvoiceProducts
     * const invoiceProduct = await prisma.invoiceProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvoiceProductUpdateManyArgs>(args: SelectSubset<T, InvoiceProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InvoiceProducts and returns the data updated in the database.
     * @param {InvoiceProductUpdateManyAndReturnArgs} args - Arguments to update many InvoiceProducts.
     * @example
     * // Update many InvoiceProducts
     * const invoiceProduct = await prisma.invoiceProduct.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InvoiceProducts and only return the `invoiceProductId`
     * const invoiceProductWithInvoiceProductIdOnly = await prisma.invoiceProduct.updateManyAndReturn({
     *   select: { invoiceProductId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InvoiceProductUpdateManyAndReturnArgs>(args: SelectSubset<T, InvoiceProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InvoiceProduct.
     * @param {InvoiceProductUpsertArgs} args - Arguments to update or create a InvoiceProduct.
     * @example
     * // Update or create a InvoiceProduct
     * const invoiceProduct = await prisma.invoiceProduct.upsert({
     *   create: {
     *     // ... data to create a InvoiceProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InvoiceProduct we want to update
     *   }
     * })
     */
    upsert<T extends InvoiceProductUpsertArgs>(args: SelectSubset<T, InvoiceProductUpsertArgs<ExtArgs>>): Prisma__InvoiceProductClient<$Result.GetResult<Prisma.$InvoiceProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InvoiceProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceProductCountArgs} args - Arguments to filter InvoiceProducts to count.
     * @example
     * // Count the number of InvoiceProducts
     * const count = await prisma.invoiceProduct.count({
     *   where: {
     *     // ... the filter for the InvoiceProducts we want to count
     *   }
     * })
    **/
    count<T extends InvoiceProductCountArgs>(
      args?: Subset<T, InvoiceProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InvoiceProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvoiceProductAggregateArgs>(args: Subset<T, InvoiceProductAggregateArgs>): Prisma.PrismaPromise<GetInvoiceProductAggregateType<T>>

    /**
     * Group by InvoiceProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InvoiceProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvoiceProductGroupByArgs['orderBy'] }
        : { orderBy?: InvoiceProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InvoiceProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InvoiceProduct model
   */
  readonly fields: InvoiceProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InvoiceProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvoiceProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InvoiceProduct model
   */
  interface InvoiceProductFieldRefs {
    readonly invoiceProductId: FieldRef<"InvoiceProduct", 'String'>
    readonly id: FieldRef<"InvoiceProduct", 'String'>
    readonly productId: FieldRef<"InvoiceProduct", 'String'>
    readonly invoiceId: FieldRef<"InvoiceProduct", 'String'>
    readonly amount: FieldRef<"InvoiceProduct", 'Int'>
    readonly quantity: FieldRef<"InvoiceProduct", 'Int'>
    readonly event: FieldRef<"InvoiceProduct", 'Events'>
    readonly enable: FieldRef<"InvoiceProduct", 'Boolean'>
    readonly registeredAt: FieldRef<"InvoiceProduct", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InvoiceProduct findUnique
   */
  export type InvoiceProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceProduct
     */
    select?: InvoiceProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceProduct
     */
    omit?: InvoiceProductOmit<ExtArgs> | null
    /**
     * Filter, which InvoiceProduct to fetch.
     */
    where: InvoiceProductWhereUniqueInput
  }

  /**
   * InvoiceProduct findUniqueOrThrow
   */
  export type InvoiceProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceProduct
     */
    select?: InvoiceProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceProduct
     */
    omit?: InvoiceProductOmit<ExtArgs> | null
    /**
     * Filter, which InvoiceProduct to fetch.
     */
    where: InvoiceProductWhereUniqueInput
  }

  /**
   * InvoiceProduct findFirst
   */
  export type InvoiceProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceProduct
     */
    select?: InvoiceProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceProduct
     */
    omit?: InvoiceProductOmit<ExtArgs> | null
    /**
     * Filter, which InvoiceProduct to fetch.
     */
    where?: InvoiceProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceProducts to fetch.
     */
    orderBy?: InvoiceProductOrderByWithRelationInput | InvoiceProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InvoiceProducts.
     */
    cursor?: InvoiceProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InvoiceProducts.
     */
    distinct?: InvoiceProductScalarFieldEnum | InvoiceProductScalarFieldEnum[]
  }

  /**
   * InvoiceProduct findFirstOrThrow
   */
  export type InvoiceProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceProduct
     */
    select?: InvoiceProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceProduct
     */
    omit?: InvoiceProductOmit<ExtArgs> | null
    /**
     * Filter, which InvoiceProduct to fetch.
     */
    where?: InvoiceProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceProducts to fetch.
     */
    orderBy?: InvoiceProductOrderByWithRelationInput | InvoiceProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InvoiceProducts.
     */
    cursor?: InvoiceProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InvoiceProducts.
     */
    distinct?: InvoiceProductScalarFieldEnum | InvoiceProductScalarFieldEnum[]
  }

  /**
   * InvoiceProduct findMany
   */
  export type InvoiceProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceProduct
     */
    select?: InvoiceProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceProduct
     */
    omit?: InvoiceProductOmit<ExtArgs> | null
    /**
     * Filter, which InvoiceProducts to fetch.
     */
    where?: InvoiceProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceProducts to fetch.
     */
    orderBy?: InvoiceProductOrderByWithRelationInput | InvoiceProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InvoiceProducts.
     */
    cursor?: InvoiceProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceProducts.
     */
    skip?: number
    distinct?: InvoiceProductScalarFieldEnum | InvoiceProductScalarFieldEnum[]
  }

  /**
   * InvoiceProduct create
   */
  export type InvoiceProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceProduct
     */
    select?: InvoiceProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceProduct
     */
    omit?: InvoiceProductOmit<ExtArgs> | null
    /**
     * The data needed to create a InvoiceProduct.
     */
    data: XOR<InvoiceProductCreateInput, InvoiceProductUncheckedCreateInput>
  }

  /**
   * InvoiceProduct createMany
   */
  export type InvoiceProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InvoiceProducts.
     */
    data: InvoiceProductCreateManyInput | InvoiceProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InvoiceProduct createManyAndReturn
   */
  export type InvoiceProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceProduct
     */
    select?: InvoiceProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceProduct
     */
    omit?: InvoiceProductOmit<ExtArgs> | null
    /**
     * The data used to create many InvoiceProducts.
     */
    data: InvoiceProductCreateManyInput | InvoiceProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InvoiceProduct update
   */
  export type InvoiceProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceProduct
     */
    select?: InvoiceProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceProduct
     */
    omit?: InvoiceProductOmit<ExtArgs> | null
    /**
     * The data needed to update a InvoiceProduct.
     */
    data: XOR<InvoiceProductUpdateInput, InvoiceProductUncheckedUpdateInput>
    /**
     * Choose, which InvoiceProduct to update.
     */
    where: InvoiceProductWhereUniqueInput
  }

  /**
   * InvoiceProduct updateMany
   */
  export type InvoiceProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InvoiceProducts.
     */
    data: XOR<InvoiceProductUpdateManyMutationInput, InvoiceProductUncheckedUpdateManyInput>
    /**
     * Filter which InvoiceProducts to update
     */
    where?: InvoiceProductWhereInput
    /**
     * Limit how many InvoiceProducts to update.
     */
    limit?: number
  }

  /**
   * InvoiceProduct updateManyAndReturn
   */
  export type InvoiceProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceProduct
     */
    select?: InvoiceProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceProduct
     */
    omit?: InvoiceProductOmit<ExtArgs> | null
    /**
     * The data used to update InvoiceProducts.
     */
    data: XOR<InvoiceProductUpdateManyMutationInput, InvoiceProductUncheckedUpdateManyInput>
    /**
     * Filter which InvoiceProducts to update
     */
    where?: InvoiceProductWhereInput
    /**
     * Limit how many InvoiceProducts to update.
     */
    limit?: number
  }

  /**
   * InvoiceProduct upsert
   */
  export type InvoiceProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceProduct
     */
    select?: InvoiceProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceProduct
     */
    omit?: InvoiceProductOmit<ExtArgs> | null
    /**
     * The filter to search for the InvoiceProduct to update in case it exists.
     */
    where: InvoiceProductWhereUniqueInput
    /**
     * In case the InvoiceProduct found by the `where` argument doesn't exist, create a new InvoiceProduct with this data.
     */
    create: XOR<InvoiceProductCreateInput, InvoiceProductUncheckedCreateInput>
    /**
     * In case the InvoiceProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvoiceProductUpdateInput, InvoiceProductUncheckedUpdateInput>
  }

  /**
   * InvoiceProduct delete
   */
  export type InvoiceProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceProduct
     */
    select?: InvoiceProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceProduct
     */
    omit?: InvoiceProductOmit<ExtArgs> | null
    /**
     * Filter which InvoiceProduct to delete.
     */
    where: InvoiceProductWhereUniqueInput
  }

  /**
   * InvoiceProduct deleteMany
   */
  export type InvoiceProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InvoiceProducts to delete
     */
    where?: InvoiceProductWhereInput
    /**
     * Limit how many InvoiceProducts to delete.
     */
    limit?: number
  }

  /**
   * InvoiceProduct without action
   */
  export type InvoiceProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceProduct
     */
    select?: InvoiceProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceProduct
     */
    omit?: InvoiceProductOmit<ExtArgs> | null
  }


  /**
   * Model Expense
   */

  export type AggregateExpense = {
    _count: ExpenseCountAggregateOutputType | null
    _min: ExpenseMinAggregateOutputType | null
    _max: ExpenseMaxAggregateOutputType | null
  }

  export type ExpenseMinAggregateOutputType = {
    id: string | null
    name: string | null
    useICMSBase: boolean | null
    useCustomsBase: boolean | null
    allocationMethod: $Enums.AllocationMethod | null
    currency: $Enums.Currency | null
  }

  export type ExpenseMaxAggregateOutputType = {
    id: string | null
    name: string | null
    useICMSBase: boolean | null
    useCustomsBase: boolean | null
    allocationMethod: $Enums.AllocationMethod | null
    currency: $Enums.Currency | null
  }

  export type ExpenseCountAggregateOutputType = {
    id: number
    name: number
    useICMSBase: number
    useCustomsBase: number
    allocationMethod: number
    currency: number
    _all: number
  }


  export type ExpenseMinAggregateInputType = {
    id?: true
    name?: true
    useICMSBase?: true
    useCustomsBase?: true
    allocationMethod?: true
    currency?: true
  }

  export type ExpenseMaxAggregateInputType = {
    id?: true
    name?: true
    useICMSBase?: true
    useCustomsBase?: true
    allocationMethod?: true
    currency?: true
  }

  export type ExpenseCountAggregateInputType = {
    id?: true
    name?: true
    useICMSBase?: true
    useCustomsBase?: true
    allocationMethod?: true
    currency?: true
    _all?: true
  }

  export type ExpenseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expense to aggregate.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Expenses
    **/
    _count?: true | ExpenseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpenseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpenseMaxAggregateInputType
  }

  export type GetExpenseAggregateType<T extends ExpenseAggregateArgs> = {
        [P in keyof T & keyof AggregateExpense]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpense[P]>
      : GetScalarType<T[P], AggregateExpense[P]>
  }




  export type ExpenseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseWhereInput
    orderBy?: ExpenseOrderByWithAggregationInput | ExpenseOrderByWithAggregationInput[]
    by: ExpenseScalarFieldEnum[] | ExpenseScalarFieldEnum
    having?: ExpenseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpenseCountAggregateInputType | true
    _min?: ExpenseMinAggregateInputType
    _max?: ExpenseMaxAggregateInputType
  }

  export type ExpenseGroupByOutputType = {
    id: string
    name: string
    useICMSBase: boolean
    useCustomsBase: boolean
    allocationMethod: $Enums.AllocationMethod
    currency: $Enums.Currency
    _count: ExpenseCountAggregateOutputType | null
    _min: ExpenseMinAggregateOutputType | null
    _max: ExpenseMaxAggregateOutputType | null
  }

  type GetExpenseGroupByPayload<T extends ExpenseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpenseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpenseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpenseGroupByOutputType[P]>
            : GetScalarType<T[P], ExpenseGroupByOutputType[P]>
        }
      >
    >


  export type ExpenseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    useICMSBase?: boolean
    useCustomsBase?: boolean
    allocationMethod?: boolean
    currency?: boolean
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    useICMSBase?: boolean
    useCustomsBase?: boolean
    allocationMethod?: boolean
    currency?: boolean
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    useICMSBase?: boolean
    useCustomsBase?: boolean
    allocationMethod?: boolean
    currency?: boolean
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectScalar = {
    id?: boolean
    name?: boolean
    useICMSBase?: boolean
    useCustomsBase?: boolean
    allocationMethod?: boolean
    currency?: boolean
  }

  export type ExpenseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "useICMSBase" | "useCustomsBase" | "allocationMethod" | "currency", ExtArgs["result"]["expense"]>

  export type $ExpensePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Expense"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      useICMSBase: boolean
      useCustomsBase: boolean
      allocationMethod: $Enums.AllocationMethod
      currency: $Enums.Currency
    }, ExtArgs["result"]["expense"]>
    composites: {}
  }

  type ExpenseGetPayload<S extends boolean | null | undefined | ExpenseDefaultArgs> = $Result.GetResult<Prisma.$ExpensePayload, S>

  type ExpenseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExpenseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpenseCountAggregateInputType | true
    }

  export interface ExpenseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Expense'], meta: { name: 'Expense' } }
    /**
     * Find zero or one Expense that matches the filter.
     * @param {ExpenseFindUniqueArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpenseFindUniqueArgs>(args: SelectSubset<T, ExpenseFindUniqueArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Expense that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExpenseFindUniqueOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpenseFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpenseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expense that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindFirstArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpenseFindFirstArgs>(args?: SelectSubset<T, ExpenseFindFirstArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expense that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindFirstOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpenseFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpenseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Expenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Expenses
     * const expenses = await prisma.expense.findMany()
     * 
     * // Get first 10 Expenses
     * const expenses = await prisma.expense.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expenseWithIdOnly = await prisma.expense.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExpenseFindManyArgs>(args?: SelectSubset<T, ExpenseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Expense.
     * @param {ExpenseCreateArgs} args - Arguments to create a Expense.
     * @example
     * // Create one Expense
     * const Expense = await prisma.expense.create({
     *   data: {
     *     // ... data to create a Expense
     *   }
     * })
     * 
     */
    create<T extends ExpenseCreateArgs>(args: SelectSubset<T, ExpenseCreateArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Expenses.
     * @param {ExpenseCreateManyArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expense = await prisma.expense.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExpenseCreateManyArgs>(args?: SelectSubset<T, ExpenseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Expenses and returns the data saved in the database.
     * @param {ExpenseCreateManyAndReturnArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expense = await prisma.expense.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Expenses and only return the `id`
     * const expenseWithIdOnly = await prisma.expense.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExpenseCreateManyAndReturnArgs>(args?: SelectSubset<T, ExpenseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Expense.
     * @param {ExpenseDeleteArgs} args - Arguments to delete one Expense.
     * @example
     * // Delete one Expense
     * const Expense = await prisma.expense.delete({
     *   where: {
     *     // ... filter to delete one Expense
     *   }
     * })
     * 
     */
    delete<T extends ExpenseDeleteArgs>(args: SelectSubset<T, ExpenseDeleteArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Expense.
     * @param {ExpenseUpdateArgs} args - Arguments to update one Expense.
     * @example
     * // Update one Expense
     * const expense = await prisma.expense.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExpenseUpdateArgs>(args: SelectSubset<T, ExpenseUpdateArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Expenses.
     * @param {ExpenseDeleteManyArgs} args - Arguments to filter Expenses to delete.
     * @example
     * // Delete a few Expenses
     * const { count } = await prisma.expense.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExpenseDeleteManyArgs>(args?: SelectSubset<T, ExpenseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Expenses
     * const expense = await prisma.expense.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExpenseUpdateManyArgs>(args: SelectSubset<T, ExpenseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses and returns the data updated in the database.
     * @param {ExpenseUpdateManyAndReturnArgs} args - Arguments to update many Expenses.
     * @example
     * // Update many Expenses
     * const expense = await prisma.expense.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Expenses and only return the `id`
     * const expenseWithIdOnly = await prisma.expense.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExpenseUpdateManyAndReturnArgs>(args: SelectSubset<T, ExpenseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Expense.
     * @param {ExpenseUpsertArgs} args - Arguments to update or create a Expense.
     * @example
     * // Update or create a Expense
     * const expense = await prisma.expense.upsert({
     *   create: {
     *     // ... data to create a Expense
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Expense we want to update
     *   }
     * })
     */
    upsert<T extends ExpenseUpsertArgs>(args: SelectSubset<T, ExpenseUpsertArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseCountArgs} args - Arguments to filter Expenses to count.
     * @example
     * // Count the number of Expenses
     * const count = await prisma.expense.count({
     *   where: {
     *     // ... the filter for the Expenses we want to count
     *   }
     * })
    **/
    count<T extends ExpenseCountArgs>(
      args?: Subset<T, ExpenseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpenseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExpenseAggregateArgs>(args: Subset<T, ExpenseAggregateArgs>): Prisma.PrismaPromise<GetExpenseAggregateType<T>>

    /**
     * Group by Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExpenseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpenseGroupByArgs['orderBy'] }
        : { orderBy?: ExpenseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExpenseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Expense model
   */
  readonly fields: ExpenseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Expense.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpenseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Expense model
   */
  interface ExpenseFieldRefs {
    readonly id: FieldRef<"Expense", 'String'>
    readonly name: FieldRef<"Expense", 'String'>
    readonly useICMSBase: FieldRef<"Expense", 'Boolean'>
    readonly useCustomsBase: FieldRef<"Expense", 'Boolean'>
    readonly allocationMethod: FieldRef<"Expense", 'AllocationMethod'>
    readonly currency: FieldRef<"Expense", 'Currency'>
  }
    

  // Custom InputTypes
  /**
   * Expense findUnique
   */
  export type ExpenseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense findUniqueOrThrow
   */
  export type ExpenseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense findFirst
   */
  export type ExpenseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense findFirstOrThrow
   */
  export type ExpenseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense findMany
   */
  export type ExpenseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Filter, which Expenses to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense create
   */
  export type ExpenseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * The data needed to create a Expense.
     */
    data: XOR<ExpenseCreateInput, ExpenseUncheckedCreateInput>
  }

  /**
   * Expense createMany
   */
  export type ExpenseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Expenses.
     */
    data: ExpenseCreateManyInput | ExpenseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Expense createManyAndReturn
   */
  export type ExpenseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * The data used to create many Expenses.
     */
    data: ExpenseCreateManyInput | ExpenseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Expense update
   */
  export type ExpenseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * The data needed to update a Expense.
     */
    data: XOR<ExpenseUpdateInput, ExpenseUncheckedUpdateInput>
    /**
     * Choose, which Expense to update.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense updateMany
   */
  export type ExpenseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Expenses.
     */
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyInput>
    /**
     * Filter which Expenses to update
     */
    where?: ExpenseWhereInput
    /**
     * Limit how many Expenses to update.
     */
    limit?: number
  }

  /**
   * Expense updateManyAndReturn
   */
  export type ExpenseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * The data used to update Expenses.
     */
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyInput>
    /**
     * Filter which Expenses to update
     */
    where?: ExpenseWhereInput
    /**
     * Limit how many Expenses to update.
     */
    limit?: number
  }

  /**
   * Expense upsert
   */
  export type ExpenseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * The filter to search for the Expense to update in case it exists.
     */
    where: ExpenseWhereUniqueInput
    /**
     * In case the Expense found by the `where` argument doesn't exist, create a new Expense with this data.
     */
    create: XOR<ExpenseCreateInput, ExpenseUncheckedCreateInput>
    /**
     * In case the Expense was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpenseUpdateInput, ExpenseUncheckedUpdateInput>
  }

  /**
   * Expense delete
   */
  export type ExpenseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Filter which Expense to delete.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense deleteMany
   */
  export type ExpenseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expenses to delete
     */
    where?: ExpenseWhereInput
    /**
     * Limit how many Expenses to delete.
     */
    limit?: number
  }

  /**
   * Expense without action
   */
  export type ExpenseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
  }


  /**
   * Model Declaration
   */

  export type AggregateDeclaration = {
    _count: DeclarationCountAggregateOutputType | null
    _avg: DeclarationAvgAggregateOutputType | null
    _sum: DeclarationSumAggregateOutputType | null
    _min: DeclarationMinAggregateOutputType | null
    _max: DeclarationMaxAggregateOutputType | null
  }

  export type DeclarationAvgAggregateOutputType = {
    quote: number | null
  }

  export type DeclarationSumAggregateOutputType = {
    quote: number | null
  }

  export type DeclarationMinAggregateOutputType = {
    declarationId: string | null
    id: string | null
    registration: string | null
    quote: number | null
    createdAt: Date | null
    event: $Enums.Events | null
    enable: boolean | null
    registeredAt: Date | null
  }

  export type DeclarationMaxAggregateOutputType = {
    declarationId: string | null
    id: string | null
    registration: string | null
    quote: number | null
    createdAt: Date | null
    event: $Enums.Events | null
    enable: boolean | null
    registeredAt: Date | null
  }

  export type DeclarationCountAggregateOutputType = {
    declarationId: number
    id: number
    registration: number
    quote: number
    createdAt: number
    event: number
    enable: number
    registeredAt: number
    _all: number
  }


  export type DeclarationAvgAggregateInputType = {
    quote?: true
  }

  export type DeclarationSumAggregateInputType = {
    quote?: true
  }

  export type DeclarationMinAggregateInputType = {
    declarationId?: true
    id?: true
    registration?: true
    quote?: true
    createdAt?: true
    event?: true
    enable?: true
    registeredAt?: true
  }

  export type DeclarationMaxAggregateInputType = {
    declarationId?: true
    id?: true
    registration?: true
    quote?: true
    createdAt?: true
    event?: true
    enable?: true
    registeredAt?: true
  }

  export type DeclarationCountAggregateInputType = {
    declarationId?: true
    id?: true
    registration?: true
    quote?: true
    createdAt?: true
    event?: true
    enable?: true
    registeredAt?: true
    _all?: true
  }

  export type DeclarationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Declaration to aggregate.
     */
    where?: DeclarationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Declarations to fetch.
     */
    orderBy?: DeclarationOrderByWithRelationInput | DeclarationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeclarationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Declarations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Declarations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Declarations
    **/
    _count?: true | DeclarationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeclarationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeclarationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeclarationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeclarationMaxAggregateInputType
  }

  export type GetDeclarationAggregateType<T extends DeclarationAggregateArgs> = {
        [P in keyof T & keyof AggregateDeclaration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeclaration[P]>
      : GetScalarType<T[P], AggregateDeclaration[P]>
  }




  export type DeclarationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeclarationWhereInput
    orderBy?: DeclarationOrderByWithAggregationInput | DeclarationOrderByWithAggregationInput[]
    by: DeclarationScalarFieldEnum[] | DeclarationScalarFieldEnum
    having?: DeclarationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeclarationCountAggregateInputType | true
    _avg?: DeclarationAvgAggregateInputType
    _sum?: DeclarationSumAggregateInputType
    _min?: DeclarationMinAggregateInputType
    _max?: DeclarationMaxAggregateInputType
  }

  export type DeclarationGroupByOutputType = {
    declarationId: string
    id: string
    registration: string
    quote: number
    createdAt: Date
    event: $Enums.Events
    enable: boolean
    registeredAt: Date
    _count: DeclarationCountAggregateOutputType | null
    _avg: DeclarationAvgAggregateOutputType | null
    _sum: DeclarationSumAggregateOutputType | null
    _min: DeclarationMinAggregateOutputType | null
    _max: DeclarationMaxAggregateOutputType | null
  }

  type GetDeclarationGroupByPayload<T extends DeclarationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeclarationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeclarationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeclarationGroupByOutputType[P]>
            : GetScalarType<T[P], DeclarationGroupByOutputType[P]>
        }
      >
    >


  export type DeclarationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    declarationId?: boolean
    id?: boolean
    registration?: boolean
    quote?: boolean
    createdAt?: boolean
    event?: boolean
    enable?: boolean
    registeredAt?: boolean
  }, ExtArgs["result"]["declaration"]>

  export type DeclarationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    declarationId?: boolean
    id?: boolean
    registration?: boolean
    quote?: boolean
    createdAt?: boolean
    event?: boolean
    enable?: boolean
    registeredAt?: boolean
  }, ExtArgs["result"]["declaration"]>

  export type DeclarationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    declarationId?: boolean
    id?: boolean
    registration?: boolean
    quote?: boolean
    createdAt?: boolean
    event?: boolean
    enable?: boolean
    registeredAt?: boolean
  }, ExtArgs["result"]["declaration"]>

  export type DeclarationSelectScalar = {
    declarationId?: boolean
    id?: boolean
    registration?: boolean
    quote?: boolean
    createdAt?: boolean
    event?: boolean
    enable?: boolean
    registeredAt?: boolean
  }

  export type DeclarationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"declarationId" | "id" | "registration" | "quote" | "createdAt" | "event" | "enable" | "registeredAt", ExtArgs["result"]["declaration"]>

  export type $DeclarationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Declaration"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      declarationId: string
      id: string
      registration: string
      quote: number
      createdAt: Date
      event: $Enums.Events
      enable: boolean
      registeredAt: Date
    }, ExtArgs["result"]["declaration"]>
    composites: {}
  }

  type DeclarationGetPayload<S extends boolean | null | undefined | DeclarationDefaultArgs> = $Result.GetResult<Prisma.$DeclarationPayload, S>

  type DeclarationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeclarationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeclarationCountAggregateInputType | true
    }

  export interface DeclarationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Declaration'], meta: { name: 'Declaration' } }
    /**
     * Find zero or one Declaration that matches the filter.
     * @param {DeclarationFindUniqueArgs} args - Arguments to find a Declaration
     * @example
     * // Get one Declaration
     * const declaration = await prisma.declaration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeclarationFindUniqueArgs>(args: SelectSubset<T, DeclarationFindUniqueArgs<ExtArgs>>): Prisma__DeclarationClient<$Result.GetResult<Prisma.$DeclarationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Declaration that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeclarationFindUniqueOrThrowArgs} args - Arguments to find a Declaration
     * @example
     * // Get one Declaration
     * const declaration = await prisma.declaration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeclarationFindUniqueOrThrowArgs>(args: SelectSubset<T, DeclarationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeclarationClient<$Result.GetResult<Prisma.$DeclarationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Declaration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeclarationFindFirstArgs} args - Arguments to find a Declaration
     * @example
     * // Get one Declaration
     * const declaration = await prisma.declaration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeclarationFindFirstArgs>(args?: SelectSubset<T, DeclarationFindFirstArgs<ExtArgs>>): Prisma__DeclarationClient<$Result.GetResult<Prisma.$DeclarationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Declaration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeclarationFindFirstOrThrowArgs} args - Arguments to find a Declaration
     * @example
     * // Get one Declaration
     * const declaration = await prisma.declaration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeclarationFindFirstOrThrowArgs>(args?: SelectSubset<T, DeclarationFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeclarationClient<$Result.GetResult<Prisma.$DeclarationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Declarations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeclarationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Declarations
     * const declarations = await prisma.declaration.findMany()
     * 
     * // Get first 10 Declarations
     * const declarations = await prisma.declaration.findMany({ take: 10 })
     * 
     * // Only select the `declarationId`
     * const declarationWithDeclarationIdOnly = await prisma.declaration.findMany({ select: { declarationId: true } })
     * 
     */
    findMany<T extends DeclarationFindManyArgs>(args?: SelectSubset<T, DeclarationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeclarationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Declaration.
     * @param {DeclarationCreateArgs} args - Arguments to create a Declaration.
     * @example
     * // Create one Declaration
     * const Declaration = await prisma.declaration.create({
     *   data: {
     *     // ... data to create a Declaration
     *   }
     * })
     * 
     */
    create<T extends DeclarationCreateArgs>(args: SelectSubset<T, DeclarationCreateArgs<ExtArgs>>): Prisma__DeclarationClient<$Result.GetResult<Prisma.$DeclarationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Declarations.
     * @param {DeclarationCreateManyArgs} args - Arguments to create many Declarations.
     * @example
     * // Create many Declarations
     * const declaration = await prisma.declaration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeclarationCreateManyArgs>(args?: SelectSubset<T, DeclarationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Declarations and returns the data saved in the database.
     * @param {DeclarationCreateManyAndReturnArgs} args - Arguments to create many Declarations.
     * @example
     * // Create many Declarations
     * const declaration = await prisma.declaration.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Declarations and only return the `declarationId`
     * const declarationWithDeclarationIdOnly = await prisma.declaration.createManyAndReturn({
     *   select: { declarationId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeclarationCreateManyAndReturnArgs>(args?: SelectSubset<T, DeclarationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeclarationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Declaration.
     * @param {DeclarationDeleteArgs} args - Arguments to delete one Declaration.
     * @example
     * // Delete one Declaration
     * const Declaration = await prisma.declaration.delete({
     *   where: {
     *     // ... filter to delete one Declaration
     *   }
     * })
     * 
     */
    delete<T extends DeclarationDeleteArgs>(args: SelectSubset<T, DeclarationDeleteArgs<ExtArgs>>): Prisma__DeclarationClient<$Result.GetResult<Prisma.$DeclarationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Declaration.
     * @param {DeclarationUpdateArgs} args - Arguments to update one Declaration.
     * @example
     * // Update one Declaration
     * const declaration = await prisma.declaration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeclarationUpdateArgs>(args: SelectSubset<T, DeclarationUpdateArgs<ExtArgs>>): Prisma__DeclarationClient<$Result.GetResult<Prisma.$DeclarationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Declarations.
     * @param {DeclarationDeleteManyArgs} args - Arguments to filter Declarations to delete.
     * @example
     * // Delete a few Declarations
     * const { count } = await prisma.declaration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeclarationDeleteManyArgs>(args?: SelectSubset<T, DeclarationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Declarations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeclarationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Declarations
     * const declaration = await prisma.declaration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeclarationUpdateManyArgs>(args: SelectSubset<T, DeclarationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Declarations and returns the data updated in the database.
     * @param {DeclarationUpdateManyAndReturnArgs} args - Arguments to update many Declarations.
     * @example
     * // Update many Declarations
     * const declaration = await prisma.declaration.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Declarations and only return the `declarationId`
     * const declarationWithDeclarationIdOnly = await prisma.declaration.updateManyAndReturn({
     *   select: { declarationId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DeclarationUpdateManyAndReturnArgs>(args: SelectSubset<T, DeclarationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeclarationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Declaration.
     * @param {DeclarationUpsertArgs} args - Arguments to update or create a Declaration.
     * @example
     * // Update or create a Declaration
     * const declaration = await prisma.declaration.upsert({
     *   create: {
     *     // ... data to create a Declaration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Declaration we want to update
     *   }
     * })
     */
    upsert<T extends DeclarationUpsertArgs>(args: SelectSubset<T, DeclarationUpsertArgs<ExtArgs>>): Prisma__DeclarationClient<$Result.GetResult<Prisma.$DeclarationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Declarations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeclarationCountArgs} args - Arguments to filter Declarations to count.
     * @example
     * // Count the number of Declarations
     * const count = await prisma.declaration.count({
     *   where: {
     *     // ... the filter for the Declarations we want to count
     *   }
     * })
    **/
    count<T extends DeclarationCountArgs>(
      args?: Subset<T, DeclarationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeclarationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Declaration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeclarationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeclarationAggregateArgs>(args: Subset<T, DeclarationAggregateArgs>): Prisma.PrismaPromise<GetDeclarationAggregateType<T>>

    /**
     * Group by Declaration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeclarationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeclarationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeclarationGroupByArgs['orderBy'] }
        : { orderBy?: DeclarationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeclarationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeclarationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Declaration model
   */
  readonly fields: DeclarationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Declaration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeclarationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Declaration model
   */
  interface DeclarationFieldRefs {
    readonly declarationId: FieldRef<"Declaration", 'String'>
    readonly id: FieldRef<"Declaration", 'String'>
    readonly registration: FieldRef<"Declaration", 'String'>
    readonly quote: FieldRef<"Declaration", 'Int'>
    readonly createdAt: FieldRef<"Declaration", 'DateTime'>
    readonly event: FieldRef<"Declaration", 'Events'>
    readonly enable: FieldRef<"Declaration", 'Boolean'>
    readonly registeredAt: FieldRef<"Declaration", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Declaration findUnique
   */
  export type DeclarationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Declaration
     */
    select?: DeclarationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Declaration
     */
    omit?: DeclarationOmit<ExtArgs> | null
    /**
     * Filter, which Declaration to fetch.
     */
    where: DeclarationWhereUniqueInput
  }

  /**
   * Declaration findUniqueOrThrow
   */
  export type DeclarationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Declaration
     */
    select?: DeclarationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Declaration
     */
    omit?: DeclarationOmit<ExtArgs> | null
    /**
     * Filter, which Declaration to fetch.
     */
    where: DeclarationWhereUniqueInput
  }

  /**
   * Declaration findFirst
   */
  export type DeclarationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Declaration
     */
    select?: DeclarationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Declaration
     */
    omit?: DeclarationOmit<ExtArgs> | null
    /**
     * Filter, which Declaration to fetch.
     */
    where?: DeclarationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Declarations to fetch.
     */
    orderBy?: DeclarationOrderByWithRelationInput | DeclarationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Declarations.
     */
    cursor?: DeclarationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Declarations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Declarations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Declarations.
     */
    distinct?: DeclarationScalarFieldEnum | DeclarationScalarFieldEnum[]
  }

  /**
   * Declaration findFirstOrThrow
   */
  export type DeclarationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Declaration
     */
    select?: DeclarationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Declaration
     */
    omit?: DeclarationOmit<ExtArgs> | null
    /**
     * Filter, which Declaration to fetch.
     */
    where?: DeclarationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Declarations to fetch.
     */
    orderBy?: DeclarationOrderByWithRelationInput | DeclarationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Declarations.
     */
    cursor?: DeclarationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Declarations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Declarations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Declarations.
     */
    distinct?: DeclarationScalarFieldEnum | DeclarationScalarFieldEnum[]
  }

  /**
   * Declaration findMany
   */
  export type DeclarationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Declaration
     */
    select?: DeclarationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Declaration
     */
    omit?: DeclarationOmit<ExtArgs> | null
    /**
     * Filter, which Declarations to fetch.
     */
    where?: DeclarationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Declarations to fetch.
     */
    orderBy?: DeclarationOrderByWithRelationInput | DeclarationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Declarations.
     */
    cursor?: DeclarationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Declarations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Declarations.
     */
    skip?: number
    distinct?: DeclarationScalarFieldEnum | DeclarationScalarFieldEnum[]
  }

  /**
   * Declaration create
   */
  export type DeclarationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Declaration
     */
    select?: DeclarationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Declaration
     */
    omit?: DeclarationOmit<ExtArgs> | null
    /**
     * The data needed to create a Declaration.
     */
    data: XOR<DeclarationCreateInput, DeclarationUncheckedCreateInput>
  }

  /**
   * Declaration createMany
   */
  export type DeclarationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Declarations.
     */
    data: DeclarationCreateManyInput | DeclarationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Declaration createManyAndReturn
   */
  export type DeclarationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Declaration
     */
    select?: DeclarationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Declaration
     */
    omit?: DeclarationOmit<ExtArgs> | null
    /**
     * The data used to create many Declarations.
     */
    data: DeclarationCreateManyInput | DeclarationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Declaration update
   */
  export type DeclarationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Declaration
     */
    select?: DeclarationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Declaration
     */
    omit?: DeclarationOmit<ExtArgs> | null
    /**
     * The data needed to update a Declaration.
     */
    data: XOR<DeclarationUpdateInput, DeclarationUncheckedUpdateInput>
    /**
     * Choose, which Declaration to update.
     */
    where: DeclarationWhereUniqueInput
  }

  /**
   * Declaration updateMany
   */
  export type DeclarationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Declarations.
     */
    data: XOR<DeclarationUpdateManyMutationInput, DeclarationUncheckedUpdateManyInput>
    /**
     * Filter which Declarations to update
     */
    where?: DeclarationWhereInput
    /**
     * Limit how many Declarations to update.
     */
    limit?: number
  }

  /**
   * Declaration updateManyAndReturn
   */
  export type DeclarationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Declaration
     */
    select?: DeclarationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Declaration
     */
    omit?: DeclarationOmit<ExtArgs> | null
    /**
     * The data used to update Declarations.
     */
    data: XOR<DeclarationUpdateManyMutationInput, DeclarationUncheckedUpdateManyInput>
    /**
     * Filter which Declarations to update
     */
    where?: DeclarationWhereInput
    /**
     * Limit how many Declarations to update.
     */
    limit?: number
  }

  /**
   * Declaration upsert
   */
  export type DeclarationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Declaration
     */
    select?: DeclarationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Declaration
     */
    omit?: DeclarationOmit<ExtArgs> | null
    /**
     * The filter to search for the Declaration to update in case it exists.
     */
    where: DeclarationWhereUniqueInput
    /**
     * In case the Declaration found by the `where` argument doesn't exist, create a new Declaration with this data.
     */
    create: XOR<DeclarationCreateInput, DeclarationUncheckedCreateInput>
    /**
     * In case the Declaration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeclarationUpdateInput, DeclarationUncheckedUpdateInput>
  }

  /**
   * Declaration delete
   */
  export type DeclarationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Declaration
     */
    select?: DeclarationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Declaration
     */
    omit?: DeclarationOmit<ExtArgs> | null
    /**
     * Filter which Declaration to delete.
     */
    where: DeclarationWhereUniqueInput
  }

  /**
   * Declaration deleteMany
   */
  export type DeclarationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Declarations to delete
     */
    where?: DeclarationWhereInput
    /**
     * Limit how many Declarations to delete.
     */
    limit?: number
  }

  /**
   * Declaration without action
   */
  export type DeclarationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Declaration
     */
    select?: DeclarationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Declaration
     */
    omit?: DeclarationOmit<ExtArgs> | null
  }


  /**
   * Model DeclarationExpense
   */

  export type AggregateDeclarationExpense = {
    _count: DeclarationExpenseCountAggregateOutputType | null
    _avg: DeclarationExpenseAvgAggregateOutputType | null
    _sum: DeclarationExpenseSumAggregateOutputType | null
    _min: DeclarationExpenseMinAggregateOutputType | null
    _max: DeclarationExpenseMaxAggregateOutputType | null
  }

  export type DeclarationExpenseAvgAggregateOutputType = {
    amount: number | null
  }

  export type DeclarationExpenseSumAggregateOutputType = {
    amount: number | null
  }

  export type DeclarationExpenseMinAggregateOutputType = {
    declarationExpenseId: string | null
    declaration: string | null
    id: string | null
    name: string | null
    useICMSBase: boolean | null
    useCustomsBase: boolean | null
    allocationMethod: $Enums.AllocationMethod | null
    currency: $Enums.Currency | null
    amount: number | null
    event: $Enums.Events | null
    enable: boolean | null
    registeredAt: Date | null
  }

  export type DeclarationExpenseMaxAggregateOutputType = {
    declarationExpenseId: string | null
    declaration: string | null
    id: string | null
    name: string | null
    useICMSBase: boolean | null
    useCustomsBase: boolean | null
    allocationMethod: $Enums.AllocationMethod | null
    currency: $Enums.Currency | null
    amount: number | null
    event: $Enums.Events | null
    enable: boolean | null
    registeredAt: Date | null
  }

  export type DeclarationExpenseCountAggregateOutputType = {
    declarationExpenseId: number
    declaration: number
    id: number
    name: number
    useICMSBase: number
    useCustomsBase: number
    allocationMethod: number
    currency: number
    amount: number
    event: number
    enable: number
    registeredAt: number
    _all: number
  }


  export type DeclarationExpenseAvgAggregateInputType = {
    amount?: true
  }

  export type DeclarationExpenseSumAggregateInputType = {
    amount?: true
  }

  export type DeclarationExpenseMinAggregateInputType = {
    declarationExpenseId?: true
    declaration?: true
    id?: true
    name?: true
    useICMSBase?: true
    useCustomsBase?: true
    allocationMethod?: true
    currency?: true
    amount?: true
    event?: true
    enable?: true
    registeredAt?: true
  }

  export type DeclarationExpenseMaxAggregateInputType = {
    declarationExpenseId?: true
    declaration?: true
    id?: true
    name?: true
    useICMSBase?: true
    useCustomsBase?: true
    allocationMethod?: true
    currency?: true
    amount?: true
    event?: true
    enable?: true
    registeredAt?: true
  }

  export type DeclarationExpenseCountAggregateInputType = {
    declarationExpenseId?: true
    declaration?: true
    id?: true
    name?: true
    useICMSBase?: true
    useCustomsBase?: true
    allocationMethod?: true
    currency?: true
    amount?: true
    event?: true
    enable?: true
    registeredAt?: true
    _all?: true
  }

  export type DeclarationExpenseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeclarationExpense to aggregate.
     */
    where?: DeclarationExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeclarationExpenses to fetch.
     */
    orderBy?: DeclarationExpenseOrderByWithRelationInput | DeclarationExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeclarationExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeclarationExpenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeclarationExpenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DeclarationExpenses
    **/
    _count?: true | DeclarationExpenseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeclarationExpenseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeclarationExpenseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeclarationExpenseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeclarationExpenseMaxAggregateInputType
  }

  export type GetDeclarationExpenseAggregateType<T extends DeclarationExpenseAggregateArgs> = {
        [P in keyof T & keyof AggregateDeclarationExpense]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeclarationExpense[P]>
      : GetScalarType<T[P], AggregateDeclarationExpense[P]>
  }




  export type DeclarationExpenseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeclarationExpenseWhereInput
    orderBy?: DeclarationExpenseOrderByWithAggregationInput | DeclarationExpenseOrderByWithAggregationInput[]
    by: DeclarationExpenseScalarFieldEnum[] | DeclarationExpenseScalarFieldEnum
    having?: DeclarationExpenseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeclarationExpenseCountAggregateInputType | true
    _avg?: DeclarationExpenseAvgAggregateInputType
    _sum?: DeclarationExpenseSumAggregateInputType
    _min?: DeclarationExpenseMinAggregateInputType
    _max?: DeclarationExpenseMaxAggregateInputType
  }

  export type DeclarationExpenseGroupByOutputType = {
    declarationExpenseId: string
    declaration: string
    id: string
    name: string
    useICMSBase: boolean
    useCustomsBase: boolean
    allocationMethod: $Enums.AllocationMethod
    currency: $Enums.Currency
    amount: number
    event: $Enums.Events
    enable: boolean
    registeredAt: Date
    _count: DeclarationExpenseCountAggregateOutputType | null
    _avg: DeclarationExpenseAvgAggregateOutputType | null
    _sum: DeclarationExpenseSumAggregateOutputType | null
    _min: DeclarationExpenseMinAggregateOutputType | null
    _max: DeclarationExpenseMaxAggregateOutputType | null
  }

  type GetDeclarationExpenseGroupByPayload<T extends DeclarationExpenseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeclarationExpenseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeclarationExpenseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeclarationExpenseGroupByOutputType[P]>
            : GetScalarType<T[P], DeclarationExpenseGroupByOutputType[P]>
        }
      >
    >


  export type DeclarationExpenseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    declarationExpenseId?: boolean
    declaration?: boolean
    id?: boolean
    name?: boolean
    useICMSBase?: boolean
    useCustomsBase?: boolean
    allocationMethod?: boolean
    currency?: boolean
    amount?: boolean
    event?: boolean
    enable?: boolean
    registeredAt?: boolean
  }, ExtArgs["result"]["declarationExpense"]>

  export type DeclarationExpenseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    declarationExpenseId?: boolean
    declaration?: boolean
    id?: boolean
    name?: boolean
    useICMSBase?: boolean
    useCustomsBase?: boolean
    allocationMethod?: boolean
    currency?: boolean
    amount?: boolean
    event?: boolean
    enable?: boolean
    registeredAt?: boolean
  }, ExtArgs["result"]["declarationExpense"]>

  export type DeclarationExpenseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    declarationExpenseId?: boolean
    declaration?: boolean
    id?: boolean
    name?: boolean
    useICMSBase?: boolean
    useCustomsBase?: boolean
    allocationMethod?: boolean
    currency?: boolean
    amount?: boolean
    event?: boolean
    enable?: boolean
    registeredAt?: boolean
  }, ExtArgs["result"]["declarationExpense"]>

  export type DeclarationExpenseSelectScalar = {
    declarationExpenseId?: boolean
    declaration?: boolean
    id?: boolean
    name?: boolean
    useICMSBase?: boolean
    useCustomsBase?: boolean
    allocationMethod?: boolean
    currency?: boolean
    amount?: boolean
    event?: boolean
    enable?: boolean
    registeredAt?: boolean
  }

  export type DeclarationExpenseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"declarationExpenseId" | "declaration" | "id" | "name" | "useICMSBase" | "useCustomsBase" | "allocationMethod" | "currency" | "amount" | "event" | "enable" | "registeredAt", ExtArgs["result"]["declarationExpense"]>

  export type $DeclarationExpensePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DeclarationExpense"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      declarationExpenseId: string
      declaration: string
      id: string
      name: string
      useICMSBase: boolean
      useCustomsBase: boolean
      allocationMethod: $Enums.AllocationMethod
      currency: $Enums.Currency
      amount: number
      event: $Enums.Events
      enable: boolean
      registeredAt: Date
    }, ExtArgs["result"]["declarationExpense"]>
    composites: {}
  }

  type DeclarationExpenseGetPayload<S extends boolean | null | undefined | DeclarationExpenseDefaultArgs> = $Result.GetResult<Prisma.$DeclarationExpensePayload, S>

  type DeclarationExpenseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeclarationExpenseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeclarationExpenseCountAggregateInputType | true
    }

  export interface DeclarationExpenseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DeclarationExpense'], meta: { name: 'DeclarationExpense' } }
    /**
     * Find zero or one DeclarationExpense that matches the filter.
     * @param {DeclarationExpenseFindUniqueArgs} args - Arguments to find a DeclarationExpense
     * @example
     * // Get one DeclarationExpense
     * const declarationExpense = await prisma.declarationExpense.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeclarationExpenseFindUniqueArgs>(args: SelectSubset<T, DeclarationExpenseFindUniqueArgs<ExtArgs>>): Prisma__DeclarationExpenseClient<$Result.GetResult<Prisma.$DeclarationExpensePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DeclarationExpense that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeclarationExpenseFindUniqueOrThrowArgs} args - Arguments to find a DeclarationExpense
     * @example
     * // Get one DeclarationExpense
     * const declarationExpense = await prisma.declarationExpense.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeclarationExpenseFindUniqueOrThrowArgs>(args: SelectSubset<T, DeclarationExpenseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeclarationExpenseClient<$Result.GetResult<Prisma.$DeclarationExpensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeclarationExpense that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeclarationExpenseFindFirstArgs} args - Arguments to find a DeclarationExpense
     * @example
     * // Get one DeclarationExpense
     * const declarationExpense = await prisma.declarationExpense.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeclarationExpenseFindFirstArgs>(args?: SelectSubset<T, DeclarationExpenseFindFirstArgs<ExtArgs>>): Prisma__DeclarationExpenseClient<$Result.GetResult<Prisma.$DeclarationExpensePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeclarationExpense that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeclarationExpenseFindFirstOrThrowArgs} args - Arguments to find a DeclarationExpense
     * @example
     * // Get one DeclarationExpense
     * const declarationExpense = await prisma.declarationExpense.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeclarationExpenseFindFirstOrThrowArgs>(args?: SelectSubset<T, DeclarationExpenseFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeclarationExpenseClient<$Result.GetResult<Prisma.$DeclarationExpensePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DeclarationExpenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeclarationExpenseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeclarationExpenses
     * const declarationExpenses = await prisma.declarationExpense.findMany()
     * 
     * // Get first 10 DeclarationExpenses
     * const declarationExpenses = await prisma.declarationExpense.findMany({ take: 10 })
     * 
     * // Only select the `declarationExpenseId`
     * const declarationExpenseWithDeclarationExpenseIdOnly = await prisma.declarationExpense.findMany({ select: { declarationExpenseId: true } })
     * 
     */
    findMany<T extends DeclarationExpenseFindManyArgs>(args?: SelectSubset<T, DeclarationExpenseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeclarationExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DeclarationExpense.
     * @param {DeclarationExpenseCreateArgs} args - Arguments to create a DeclarationExpense.
     * @example
     * // Create one DeclarationExpense
     * const DeclarationExpense = await prisma.declarationExpense.create({
     *   data: {
     *     // ... data to create a DeclarationExpense
     *   }
     * })
     * 
     */
    create<T extends DeclarationExpenseCreateArgs>(args: SelectSubset<T, DeclarationExpenseCreateArgs<ExtArgs>>): Prisma__DeclarationExpenseClient<$Result.GetResult<Prisma.$DeclarationExpensePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DeclarationExpenses.
     * @param {DeclarationExpenseCreateManyArgs} args - Arguments to create many DeclarationExpenses.
     * @example
     * // Create many DeclarationExpenses
     * const declarationExpense = await prisma.declarationExpense.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeclarationExpenseCreateManyArgs>(args?: SelectSubset<T, DeclarationExpenseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DeclarationExpenses and returns the data saved in the database.
     * @param {DeclarationExpenseCreateManyAndReturnArgs} args - Arguments to create many DeclarationExpenses.
     * @example
     * // Create many DeclarationExpenses
     * const declarationExpense = await prisma.declarationExpense.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DeclarationExpenses and only return the `declarationExpenseId`
     * const declarationExpenseWithDeclarationExpenseIdOnly = await prisma.declarationExpense.createManyAndReturn({
     *   select: { declarationExpenseId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeclarationExpenseCreateManyAndReturnArgs>(args?: SelectSubset<T, DeclarationExpenseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeclarationExpensePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DeclarationExpense.
     * @param {DeclarationExpenseDeleteArgs} args - Arguments to delete one DeclarationExpense.
     * @example
     * // Delete one DeclarationExpense
     * const DeclarationExpense = await prisma.declarationExpense.delete({
     *   where: {
     *     // ... filter to delete one DeclarationExpense
     *   }
     * })
     * 
     */
    delete<T extends DeclarationExpenseDeleteArgs>(args: SelectSubset<T, DeclarationExpenseDeleteArgs<ExtArgs>>): Prisma__DeclarationExpenseClient<$Result.GetResult<Prisma.$DeclarationExpensePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DeclarationExpense.
     * @param {DeclarationExpenseUpdateArgs} args - Arguments to update one DeclarationExpense.
     * @example
     * // Update one DeclarationExpense
     * const declarationExpense = await prisma.declarationExpense.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeclarationExpenseUpdateArgs>(args: SelectSubset<T, DeclarationExpenseUpdateArgs<ExtArgs>>): Prisma__DeclarationExpenseClient<$Result.GetResult<Prisma.$DeclarationExpensePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DeclarationExpenses.
     * @param {DeclarationExpenseDeleteManyArgs} args - Arguments to filter DeclarationExpenses to delete.
     * @example
     * // Delete a few DeclarationExpenses
     * const { count } = await prisma.declarationExpense.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeclarationExpenseDeleteManyArgs>(args?: SelectSubset<T, DeclarationExpenseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeclarationExpenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeclarationExpenseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeclarationExpenses
     * const declarationExpense = await prisma.declarationExpense.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeclarationExpenseUpdateManyArgs>(args: SelectSubset<T, DeclarationExpenseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeclarationExpenses and returns the data updated in the database.
     * @param {DeclarationExpenseUpdateManyAndReturnArgs} args - Arguments to update many DeclarationExpenses.
     * @example
     * // Update many DeclarationExpenses
     * const declarationExpense = await prisma.declarationExpense.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DeclarationExpenses and only return the `declarationExpenseId`
     * const declarationExpenseWithDeclarationExpenseIdOnly = await prisma.declarationExpense.updateManyAndReturn({
     *   select: { declarationExpenseId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DeclarationExpenseUpdateManyAndReturnArgs>(args: SelectSubset<T, DeclarationExpenseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeclarationExpensePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DeclarationExpense.
     * @param {DeclarationExpenseUpsertArgs} args - Arguments to update or create a DeclarationExpense.
     * @example
     * // Update or create a DeclarationExpense
     * const declarationExpense = await prisma.declarationExpense.upsert({
     *   create: {
     *     // ... data to create a DeclarationExpense
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeclarationExpense we want to update
     *   }
     * })
     */
    upsert<T extends DeclarationExpenseUpsertArgs>(args: SelectSubset<T, DeclarationExpenseUpsertArgs<ExtArgs>>): Prisma__DeclarationExpenseClient<$Result.GetResult<Prisma.$DeclarationExpensePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DeclarationExpenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeclarationExpenseCountArgs} args - Arguments to filter DeclarationExpenses to count.
     * @example
     * // Count the number of DeclarationExpenses
     * const count = await prisma.declarationExpense.count({
     *   where: {
     *     // ... the filter for the DeclarationExpenses we want to count
     *   }
     * })
    **/
    count<T extends DeclarationExpenseCountArgs>(
      args?: Subset<T, DeclarationExpenseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeclarationExpenseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DeclarationExpense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeclarationExpenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeclarationExpenseAggregateArgs>(args: Subset<T, DeclarationExpenseAggregateArgs>): Prisma.PrismaPromise<GetDeclarationExpenseAggregateType<T>>

    /**
     * Group by DeclarationExpense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeclarationExpenseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeclarationExpenseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeclarationExpenseGroupByArgs['orderBy'] }
        : { orderBy?: DeclarationExpenseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeclarationExpenseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeclarationExpenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DeclarationExpense model
   */
  readonly fields: DeclarationExpenseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DeclarationExpense.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeclarationExpenseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DeclarationExpense model
   */
  interface DeclarationExpenseFieldRefs {
    readonly declarationExpenseId: FieldRef<"DeclarationExpense", 'String'>
    readonly declaration: FieldRef<"DeclarationExpense", 'String'>
    readonly id: FieldRef<"DeclarationExpense", 'String'>
    readonly name: FieldRef<"DeclarationExpense", 'String'>
    readonly useICMSBase: FieldRef<"DeclarationExpense", 'Boolean'>
    readonly useCustomsBase: FieldRef<"DeclarationExpense", 'Boolean'>
    readonly allocationMethod: FieldRef<"DeclarationExpense", 'AllocationMethod'>
    readonly currency: FieldRef<"DeclarationExpense", 'Currency'>
    readonly amount: FieldRef<"DeclarationExpense", 'Int'>
    readonly event: FieldRef<"DeclarationExpense", 'Events'>
    readonly enable: FieldRef<"DeclarationExpense", 'Boolean'>
    readonly registeredAt: FieldRef<"DeclarationExpense", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DeclarationExpense findUnique
   */
  export type DeclarationExpenseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclarationExpense
     */
    select?: DeclarationExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeclarationExpense
     */
    omit?: DeclarationExpenseOmit<ExtArgs> | null
    /**
     * Filter, which DeclarationExpense to fetch.
     */
    where: DeclarationExpenseWhereUniqueInput
  }

  /**
   * DeclarationExpense findUniqueOrThrow
   */
  export type DeclarationExpenseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclarationExpense
     */
    select?: DeclarationExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeclarationExpense
     */
    omit?: DeclarationExpenseOmit<ExtArgs> | null
    /**
     * Filter, which DeclarationExpense to fetch.
     */
    where: DeclarationExpenseWhereUniqueInput
  }

  /**
   * DeclarationExpense findFirst
   */
  export type DeclarationExpenseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclarationExpense
     */
    select?: DeclarationExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeclarationExpense
     */
    omit?: DeclarationExpenseOmit<ExtArgs> | null
    /**
     * Filter, which DeclarationExpense to fetch.
     */
    where?: DeclarationExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeclarationExpenses to fetch.
     */
    orderBy?: DeclarationExpenseOrderByWithRelationInput | DeclarationExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeclarationExpenses.
     */
    cursor?: DeclarationExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeclarationExpenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeclarationExpenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeclarationExpenses.
     */
    distinct?: DeclarationExpenseScalarFieldEnum | DeclarationExpenseScalarFieldEnum[]
  }

  /**
   * DeclarationExpense findFirstOrThrow
   */
  export type DeclarationExpenseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclarationExpense
     */
    select?: DeclarationExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeclarationExpense
     */
    omit?: DeclarationExpenseOmit<ExtArgs> | null
    /**
     * Filter, which DeclarationExpense to fetch.
     */
    where?: DeclarationExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeclarationExpenses to fetch.
     */
    orderBy?: DeclarationExpenseOrderByWithRelationInput | DeclarationExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeclarationExpenses.
     */
    cursor?: DeclarationExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeclarationExpenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeclarationExpenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeclarationExpenses.
     */
    distinct?: DeclarationExpenseScalarFieldEnum | DeclarationExpenseScalarFieldEnum[]
  }

  /**
   * DeclarationExpense findMany
   */
  export type DeclarationExpenseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclarationExpense
     */
    select?: DeclarationExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeclarationExpense
     */
    omit?: DeclarationExpenseOmit<ExtArgs> | null
    /**
     * Filter, which DeclarationExpenses to fetch.
     */
    where?: DeclarationExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeclarationExpenses to fetch.
     */
    orderBy?: DeclarationExpenseOrderByWithRelationInput | DeclarationExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DeclarationExpenses.
     */
    cursor?: DeclarationExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeclarationExpenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeclarationExpenses.
     */
    skip?: number
    distinct?: DeclarationExpenseScalarFieldEnum | DeclarationExpenseScalarFieldEnum[]
  }

  /**
   * DeclarationExpense create
   */
  export type DeclarationExpenseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclarationExpense
     */
    select?: DeclarationExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeclarationExpense
     */
    omit?: DeclarationExpenseOmit<ExtArgs> | null
    /**
     * The data needed to create a DeclarationExpense.
     */
    data: XOR<DeclarationExpenseCreateInput, DeclarationExpenseUncheckedCreateInput>
  }

  /**
   * DeclarationExpense createMany
   */
  export type DeclarationExpenseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeclarationExpenses.
     */
    data: DeclarationExpenseCreateManyInput | DeclarationExpenseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeclarationExpense createManyAndReturn
   */
  export type DeclarationExpenseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclarationExpense
     */
    select?: DeclarationExpenseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeclarationExpense
     */
    omit?: DeclarationExpenseOmit<ExtArgs> | null
    /**
     * The data used to create many DeclarationExpenses.
     */
    data: DeclarationExpenseCreateManyInput | DeclarationExpenseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeclarationExpense update
   */
  export type DeclarationExpenseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclarationExpense
     */
    select?: DeclarationExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeclarationExpense
     */
    omit?: DeclarationExpenseOmit<ExtArgs> | null
    /**
     * The data needed to update a DeclarationExpense.
     */
    data: XOR<DeclarationExpenseUpdateInput, DeclarationExpenseUncheckedUpdateInput>
    /**
     * Choose, which DeclarationExpense to update.
     */
    where: DeclarationExpenseWhereUniqueInput
  }

  /**
   * DeclarationExpense updateMany
   */
  export type DeclarationExpenseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DeclarationExpenses.
     */
    data: XOR<DeclarationExpenseUpdateManyMutationInput, DeclarationExpenseUncheckedUpdateManyInput>
    /**
     * Filter which DeclarationExpenses to update
     */
    where?: DeclarationExpenseWhereInput
    /**
     * Limit how many DeclarationExpenses to update.
     */
    limit?: number
  }

  /**
   * DeclarationExpense updateManyAndReturn
   */
  export type DeclarationExpenseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclarationExpense
     */
    select?: DeclarationExpenseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeclarationExpense
     */
    omit?: DeclarationExpenseOmit<ExtArgs> | null
    /**
     * The data used to update DeclarationExpenses.
     */
    data: XOR<DeclarationExpenseUpdateManyMutationInput, DeclarationExpenseUncheckedUpdateManyInput>
    /**
     * Filter which DeclarationExpenses to update
     */
    where?: DeclarationExpenseWhereInput
    /**
     * Limit how many DeclarationExpenses to update.
     */
    limit?: number
  }

  /**
   * DeclarationExpense upsert
   */
  export type DeclarationExpenseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclarationExpense
     */
    select?: DeclarationExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeclarationExpense
     */
    omit?: DeclarationExpenseOmit<ExtArgs> | null
    /**
     * The filter to search for the DeclarationExpense to update in case it exists.
     */
    where: DeclarationExpenseWhereUniqueInput
    /**
     * In case the DeclarationExpense found by the `where` argument doesn't exist, create a new DeclarationExpense with this data.
     */
    create: XOR<DeclarationExpenseCreateInput, DeclarationExpenseUncheckedCreateInput>
    /**
     * In case the DeclarationExpense was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeclarationExpenseUpdateInput, DeclarationExpenseUncheckedUpdateInput>
  }

  /**
   * DeclarationExpense delete
   */
  export type DeclarationExpenseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclarationExpense
     */
    select?: DeclarationExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeclarationExpense
     */
    omit?: DeclarationExpenseOmit<ExtArgs> | null
    /**
     * Filter which DeclarationExpense to delete.
     */
    where: DeclarationExpenseWhereUniqueInput
  }

  /**
   * DeclarationExpense deleteMany
   */
  export type DeclarationExpenseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeclarationExpenses to delete
     */
    where?: DeclarationExpenseWhereInput
    /**
     * Limit how many DeclarationExpenses to delete.
     */
    limit?: number
  }

  /**
   * DeclarationExpense without action
   */
  export type DeclarationExpenseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclarationExpense
     */
    select?: DeclarationExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeclarationExpense
     */
    omit?: DeclarationExpenseOmit<ExtArgs> | null
  }


  /**
   * Model DeclarationInvoice
   */

  export type AggregateDeclarationInvoice = {
    _count: DeclarationInvoiceCountAggregateOutputType | null
    _avg: DeclarationInvoiceAvgAggregateOutputType | null
    _sum: DeclarationInvoiceSumAggregateOutputType | null
    _min: DeclarationInvoiceMinAggregateOutputType | null
    _max: DeclarationInvoiceMaxAggregateOutputType | null
  }

  export type DeclarationInvoiceAvgAggregateOutputType = {
    quote: number | null
  }

  export type DeclarationInvoiceSumAggregateOutputType = {
    quote: number | null
  }

  export type DeclarationInvoiceMinAggregateOutputType = {
    declarationInvoiceId: string | null
    declaration: string | null
    id: string | null
    registration: string | null
    createdAt: Date | null
    quote: number | null
    event: $Enums.Events | null
    enable: boolean | null
    registeredAt: Date | null
  }

  export type DeclarationInvoiceMaxAggregateOutputType = {
    declarationInvoiceId: string | null
    declaration: string | null
    id: string | null
    registration: string | null
    createdAt: Date | null
    quote: number | null
    event: $Enums.Events | null
    enable: boolean | null
    registeredAt: Date | null
  }

  export type DeclarationInvoiceCountAggregateOutputType = {
    declarationInvoiceId: number
    declaration: number
    id: number
    registration: number
    createdAt: number
    quote: number
    event: number
    enable: number
    registeredAt: number
    _all: number
  }


  export type DeclarationInvoiceAvgAggregateInputType = {
    quote?: true
  }

  export type DeclarationInvoiceSumAggregateInputType = {
    quote?: true
  }

  export type DeclarationInvoiceMinAggregateInputType = {
    declarationInvoiceId?: true
    declaration?: true
    id?: true
    registration?: true
    createdAt?: true
    quote?: true
    event?: true
    enable?: true
    registeredAt?: true
  }

  export type DeclarationInvoiceMaxAggregateInputType = {
    declarationInvoiceId?: true
    declaration?: true
    id?: true
    registration?: true
    createdAt?: true
    quote?: true
    event?: true
    enable?: true
    registeredAt?: true
  }

  export type DeclarationInvoiceCountAggregateInputType = {
    declarationInvoiceId?: true
    declaration?: true
    id?: true
    registration?: true
    createdAt?: true
    quote?: true
    event?: true
    enable?: true
    registeredAt?: true
    _all?: true
  }

  export type DeclarationInvoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeclarationInvoice to aggregate.
     */
    where?: DeclarationInvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeclarationInvoices to fetch.
     */
    orderBy?: DeclarationInvoiceOrderByWithRelationInput | DeclarationInvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeclarationInvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeclarationInvoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeclarationInvoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DeclarationInvoices
    **/
    _count?: true | DeclarationInvoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeclarationInvoiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeclarationInvoiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeclarationInvoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeclarationInvoiceMaxAggregateInputType
  }

  export type GetDeclarationInvoiceAggregateType<T extends DeclarationInvoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateDeclarationInvoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeclarationInvoice[P]>
      : GetScalarType<T[P], AggregateDeclarationInvoice[P]>
  }




  export type DeclarationInvoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeclarationInvoiceWhereInput
    orderBy?: DeclarationInvoiceOrderByWithAggregationInput | DeclarationInvoiceOrderByWithAggregationInput[]
    by: DeclarationInvoiceScalarFieldEnum[] | DeclarationInvoiceScalarFieldEnum
    having?: DeclarationInvoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeclarationInvoiceCountAggregateInputType | true
    _avg?: DeclarationInvoiceAvgAggregateInputType
    _sum?: DeclarationInvoiceSumAggregateInputType
    _min?: DeclarationInvoiceMinAggregateInputType
    _max?: DeclarationInvoiceMaxAggregateInputType
  }

  export type DeclarationInvoiceGroupByOutputType = {
    declarationInvoiceId: string
    declaration: string
    id: string
    registration: string
    createdAt: Date
    quote: number
    event: $Enums.Events
    enable: boolean
    registeredAt: Date
    _count: DeclarationInvoiceCountAggregateOutputType | null
    _avg: DeclarationInvoiceAvgAggregateOutputType | null
    _sum: DeclarationInvoiceSumAggregateOutputType | null
    _min: DeclarationInvoiceMinAggregateOutputType | null
    _max: DeclarationInvoiceMaxAggregateOutputType | null
  }

  type GetDeclarationInvoiceGroupByPayload<T extends DeclarationInvoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeclarationInvoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeclarationInvoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeclarationInvoiceGroupByOutputType[P]>
            : GetScalarType<T[P], DeclarationInvoiceGroupByOutputType[P]>
        }
      >
    >


  export type DeclarationInvoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    declarationInvoiceId?: boolean
    declaration?: boolean
    id?: boolean
    registration?: boolean
    createdAt?: boolean
    quote?: boolean
    event?: boolean
    enable?: boolean
    registeredAt?: boolean
  }, ExtArgs["result"]["declarationInvoice"]>

  export type DeclarationInvoiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    declarationInvoiceId?: boolean
    declaration?: boolean
    id?: boolean
    registration?: boolean
    createdAt?: boolean
    quote?: boolean
    event?: boolean
    enable?: boolean
    registeredAt?: boolean
  }, ExtArgs["result"]["declarationInvoice"]>

  export type DeclarationInvoiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    declarationInvoiceId?: boolean
    declaration?: boolean
    id?: boolean
    registration?: boolean
    createdAt?: boolean
    quote?: boolean
    event?: boolean
    enable?: boolean
    registeredAt?: boolean
  }, ExtArgs["result"]["declarationInvoice"]>

  export type DeclarationInvoiceSelectScalar = {
    declarationInvoiceId?: boolean
    declaration?: boolean
    id?: boolean
    registration?: boolean
    createdAt?: boolean
    quote?: boolean
    event?: boolean
    enable?: boolean
    registeredAt?: boolean
  }

  export type DeclarationInvoiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"declarationInvoiceId" | "declaration" | "id" | "registration" | "createdAt" | "quote" | "event" | "enable" | "registeredAt", ExtArgs["result"]["declarationInvoice"]>

  export type $DeclarationInvoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DeclarationInvoice"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      declarationInvoiceId: string
      declaration: string
      id: string
      registration: string
      createdAt: Date
      quote: number
      event: $Enums.Events
      enable: boolean
      registeredAt: Date
    }, ExtArgs["result"]["declarationInvoice"]>
    composites: {}
  }

  type DeclarationInvoiceGetPayload<S extends boolean | null | undefined | DeclarationInvoiceDefaultArgs> = $Result.GetResult<Prisma.$DeclarationInvoicePayload, S>

  type DeclarationInvoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeclarationInvoiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeclarationInvoiceCountAggregateInputType | true
    }

  export interface DeclarationInvoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DeclarationInvoice'], meta: { name: 'DeclarationInvoice' } }
    /**
     * Find zero or one DeclarationInvoice that matches the filter.
     * @param {DeclarationInvoiceFindUniqueArgs} args - Arguments to find a DeclarationInvoice
     * @example
     * // Get one DeclarationInvoice
     * const declarationInvoice = await prisma.declarationInvoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeclarationInvoiceFindUniqueArgs>(args: SelectSubset<T, DeclarationInvoiceFindUniqueArgs<ExtArgs>>): Prisma__DeclarationInvoiceClient<$Result.GetResult<Prisma.$DeclarationInvoicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DeclarationInvoice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeclarationInvoiceFindUniqueOrThrowArgs} args - Arguments to find a DeclarationInvoice
     * @example
     * // Get one DeclarationInvoice
     * const declarationInvoice = await prisma.declarationInvoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeclarationInvoiceFindUniqueOrThrowArgs>(args: SelectSubset<T, DeclarationInvoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeclarationInvoiceClient<$Result.GetResult<Prisma.$DeclarationInvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeclarationInvoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeclarationInvoiceFindFirstArgs} args - Arguments to find a DeclarationInvoice
     * @example
     * // Get one DeclarationInvoice
     * const declarationInvoice = await prisma.declarationInvoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeclarationInvoiceFindFirstArgs>(args?: SelectSubset<T, DeclarationInvoiceFindFirstArgs<ExtArgs>>): Prisma__DeclarationInvoiceClient<$Result.GetResult<Prisma.$DeclarationInvoicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeclarationInvoice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeclarationInvoiceFindFirstOrThrowArgs} args - Arguments to find a DeclarationInvoice
     * @example
     * // Get one DeclarationInvoice
     * const declarationInvoice = await prisma.declarationInvoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeclarationInvoiceFindFirstOrThrowArgs>(args?: SelectSubset<T, DeclarationInvoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeclarationInvoiceClient<$Result.GetResult<Prisma.$DeclarationInvoicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DeclarationInvoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeclarationInvoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeclarationInvoices
     * const declarationInvoices = await prisma.declarationInvoice.findMany()
     * 
     * // Get first 10 DeclarationInvoices
     * const declarationInvoices = await prisma.declarationInvoice.findMany({ take: 10 })
     * 
     * // Only select the `declarationInvoiceId`
     * const declarationInvoiceWithDeclarationInvoiceIdOnly = await prisma.declarationInvoice.findMany({ select: { declarationInvoiceId: true } })
     * 
     */
    findMany<T extends DeclarationInvoiceFindManyArgs>(args?: SelectSubset<T, DeclarationInvoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeclarationInvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DeclarationInvoice.
     * @param {DeclarationInvoiceCreateArgs} args - Arguments to create a DeclarationInvoice.
     * @example
     * // Create one DeclarationInvoice
     * const DeclarationInvoice = await prisma.declarationInvoice.create({
     *   data: {
     *     // ... data to create a DeclarationInvoice
     *   }
     * })
     * 
     */
    create<T extends DeclarationInvoiceCreateArgs>(args: SelectSubset<T, DeclarationInvoiceCreateArgs<ExtArgs>>): Prisma__DeclarationInvoiceClient<$Result.GetResult<Prisma.$DeclarationInvoicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DeclarationInvoices.
     * @param {DeclarationInvoiceCreateManyArgs} args - Arguments to create many DeclarationInvoices.
     * @example
     * // Create many DeclarationInvoices
     * const declarationInvoice = await prisma.declarationInvoice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeclarationInvoiceCreateManyArgs>(args?: SelectSubset<T, DeclarationInvoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DeclarationInvoices and returns the data saved in the database.
     * @param {DeclarationInvoiceCreateManyAndReturnArgs} args - Arguments to create many DeclarationInvoices.
     * @example
     * // Create many DeclarationInvoices
     * const declarationInvoice = await prisma.declarationInvoice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DeclarationInvoices and only return the `declarationInvoiceId`
     * const declarationInvoiceWithDeclarationInvoiceIdOnly = await prisma.declarationInvoice.createManyAndReturn({
     *   select: { declarationInvoiceId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeclarationInvoiceCreateManyAndReturnArgs>(args?: SelectSubset<T, DeclarationInvoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeclarationInvoicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DeclarationInvoice.
     * @param {DeclarationInvoiceDeleteArgs} args - Arguments to delete one DeclarationInvoice.
     * @example
     * // Delete one DeclarationInvoice
     * const DeclarationInvoice = await prisma.declarationInvoice.delete({
     *   where: {
     *     // ... filter to delete one DeclarationInvoice
     *   }
     * })
     * 
     */
    delete<T extends DeclarationInvoiceDeleteArgs>(args: SelectSubset<T, DeclarationInvoiceDeleteArgs<ExtArgs>>): Prisma__DeclarationInvoiceClient<$Result.GetResult<Prisma.$DeclarationInvoicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DeclarationInvoice.
     * @param {DeclarationInvoiceUpdateArgs} args - Arguments to update one DeclarationInvoice.
     * @example
     * // Update one DeclarationInvoice
     * const declarationInvoice = await prisma.declarationInvoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeclarationInvoiceUpdateArgs>(args: SelectSubset<T, DeclarationInvoiceUpdateArgs<ExtArgs>>): Prisma__DeclarationInvoiceClient<$Result.GetResult<Prisma.$DeclarationInvoicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DeclarationInvoices.
     * @param {DeclarationInvoiceDeleteManyArgs} args - Arguments to filter DeclarationInvoices to delete.
     * @example
     * // Delete a few DeclarationInvoices
     * const { count } = await prisma.declarationInvoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeclarationInvoiceDeleteManyArgs>(args?: SelectSubset<T, DeclarationInvoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeclarationInvoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeclarationInvoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeclarationInvoices
     * const declarationInvoice = await prisma.declarationInvoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeclarationInvoiceUpdateManyArgs>(args: SelectSubset<T, DeclarationInvoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeclarationInvoices and returns the data updated in the database.
     * @param {DeclarationInvoiceUpdateManyAndReturnArgs} args - Arguments to update many DeclarationInvoices.
     * @example
     * // Update many DeclarationInvoices
     * const declarationInvoice = await prisma.declarationInvoice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DeclarationInvoices and only return the `declarationInvoiceId`
     * const declarationInvoiceWithDeclarationInvoiceIdOnly = await prisma.declarationInvoice.updateManyAndReturn({
     *   select: { declarationInvoiceId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DeclarationInvoiceUpdateManyAndReturnArgs>(args: SelectSubset<T, DeclarationInvoiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeclarationInvoicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DeclarationInvoice.
     * @param {DeclarationInvoiceUpsertArgs} args - Arguments to update or create a DeclarationInvoice.
     * @example
     * // Update or create a DeclarationInvoice
     * const declarationInvoice = await prisma.declarationInvoice.upsert({
     *   create: {
     *     // ... data to create a DeclarationInvoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeclarationInvoice we want to update
     *   }
     * })
     */
    upsert<T extends DeclarationInvoiceUpsertArgs>(args: SelectSubset<T, DeclarationInvoiceUpsertArgs<ExtArgs>>): Prisma__DeclarationInvoiceClient<$Result.GetResult<Prisma.$DeclarationInvoicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DeclarationInvoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeclarationInvoiceCountArgs} args - Arguments to filter DeclarationInvoices to count.
     * @example
     * // Count the number of DeclarationInvoices
     * const count = await prisma.declarationInvoice.count({
     *   where: {
     *     // ... the filter for the DeclarationInvoices we want to count
     *   }
     * })
    **/
    count<T extends DeclarationInvoiceCountArgs>(
      args?: Subset<T, DeclarationInvoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeclarationInvoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DeclarationInvoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeclarationInvoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeclarationInvoiceAggregateArgs>(args: Subset<T, DeclarationInvoiceAggregateArgs>): Prisma.PrismaPromise<GetDeclarationInvoiceAggregateType<T>>

    /**
     * Group by DeclarationInvoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeclarationInvoiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeclarationInvoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeclarationInvoiceGroupByArgs['orderBy'] }
        : { orderBy?: DeclarationInvoiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeclarationInvoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeclarationInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DeclarationInvoice model
   */
  readonly fields: DeclarationInvoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DeclarationInvoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeclarationInvoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DeclarationInvoice model
   */
  interface DeclarationInvoiceFieldRefs {
    readonly declarationInvoiceId: FieldRef<"DeclarationInvoice", 'String'>
    readonly declaration: FieldRef<"DeclarationInvoice", 'String'>
    readonly id: FieldRef<"DeclarationInvoice", 'String'>
    readonly registration: FieldRef<"DeclarationInvoice", 'String'>
    readonly createdAt: FieldRef<"DeclarationInvoice", 'DateTime'>
    readonly quote: FieldRef<"DeclarationInvoice", 'Int'>
    readonly event: FieldRef<"DeclarationInvoice", 'Events'>
    readonly enable: FieldRef<"DeclarationInvoice", 'Boolean'>
    readonly registeredAt: FieldRef<"DeclarationInvoice", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DeclarationInvoice findUnique
   */
  export type DeclarationInvoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclarationInvoice
     */
    select?: DeclarationInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeclarationInvoice
     */
    omit?: DeclarationInvoiceOmit<ExtArgs> | null
    /**
     * Filter, which DeclarationInvoice to fetch.
     */
    where: DeclarationInvoiceWhereUniqueInput
  }

  /**
   * DeclarationInvoice findUniqueOrThrow
   */
  export type DeclarationInvoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclarationInvoice
     */
    select?: DeclarationInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeclarationInvoice
     */
    omit?: DeclarationInvoiceOmit<ExtArgs> | null
    /**
     * Filter, which DeclarationInvoice to fetch.
     */
    where: DeclarationInvoiceWhereUniqueInput
  }

  /**
   * DeclarationInvoice findFirst
   */
  export type DeclarationInvoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclarationInvoice
     */
    select?: DeclarationInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeclarationInvoice
     */
    omit?: DeclarationInvoiceOmit<ExtArgs> | null
    /**
     * Filter, which DeclarationInvoice to fetch.
     */
    where?: DeclarationInvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeclarationInvoices to fetch.
     */
    orderBy?: DeclarationInvoiceOrderByWithRelationInput | DeclarationInvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeclarationInvoices.
     */
    cursor?: DeclarationInvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeclarationInvoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeclarationInvoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeclarationInvoices.
     */
    distinct?: DeclarationInvoiceScalarFieldEnum | DeclarationInvoiceScalarFieldEnum[]
  }

  /**
   * DeclarationInvoice findFirstOrThrow
   */
  export type DeclarationInvoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclarationInvoice
     */
    select?: DeclarationInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeclarationInvoice
     */
    omit?: DeclarationInvoiceOmit<ExtArgs> | null
    /**
     * Filter, which DeclarationInvoice to fetch.
     */
    where?: DeclarationInvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeclarationInvoices to fetch.
     */
    orderBy?: DeclarationInvoiceOrderByWithRelationInput | DeclarationInvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeclarationInvoices.
     */
    cursor?: DeclarationInvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeclarationInvoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeclarationInvoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeclarationInvoices.
     */
    distinct?: DeclarationInvoiceScalarFieldEnum | DeclarationInvoiceScalarFieldEnum[]
  }

  /**
   * DeclarationInvoice findMany
   */
  export type DeclarationInvoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclarationInvoice
     */
    select?: DeclarationInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeclarationInvoice
     */
    omit?: DeclarationInvoiceOmit<ExtArgs> | null
    /**
     * Filter, which DeclarationInvoices to fetch.
     */
    where?: DeclarationInvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeclarationInvoices to fetch.
     */
    orderBy?: DeclarationInvoiceOrderByWithRelationInput | DeclarationInvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DeclarationInvoices.
     */
    cursor?: DeclarationInvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeclarationInvoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeclarationInvoices.
     */
    skip?: number
    distinct?: DeclarationInvoiceScalarFieldEnum | DeclarationInvoiceScalarFieldEnum[]
  }

  /**
   * DeclarationInvoice create
   */
  export type DeclarationInvoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclarationInvoice
     */
    select?: DeclarationInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeclarationInvoice
     */
    omit?: DeclarationInvoiceOmit<ExtArgs> | null
    /**
     * The data needed to create a DeclarationInvoice.
     */
    data: XOR<DeclarationInvoiceCreateInput, DeclarationInvoiceUncheckedCreateInput>
  }

  /**
   * DeclarationInvoice createMany
   */
  export type DeclarationInvoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeclarationInvoices.
     */
    data: DeclarationInvoiceCreateManyInput | DeclarationInvoiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeclarationInvoice createManyAndReturn
   */
  export type DeclarationInvoiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclarationInvoice
     */
    select?: DeclarationInvoiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeclarationInvoice
     */
    omit?: DeclarationInvoiceOmit<ExtArgs> | null
    /**
     * The data used to create many DeclarationInvoices.
     */
    data: DeclarationInvoiceCreateManyInput | DeclarationInvoiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeclarationInvoice update
   */
  export type DeclarationInvoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclarationInvoice
     */
    select?: DeclarationInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeclarationInvoice
     */
    omit?: DeclarationInvoiceOmit<ExtArgs> | null
    /**
     * The data needed to update a DeclarationInvoice.
     */
    data: XOR<DeclarationInvoiceUpdateInput, DeclarationInvoiceUncheckedUpdateInput>
    /**
     * Choose, which DeclarationInvoice to update.
     */
    where: DeclarationInvoiceWhereUniqueInput
  }

  /**
   * DeclarationInvoice updateMany
   */
  export type DeclarationInvoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DeclarationInvoices.
     */
    data: XOR<DeclarationInvoiceUpdateManyMutationInput, DeclarationInvoiceUncheckedUpdateManyInput>
    /**
     * Filter which DeclarationInvoices to update
     */
    where?: DeclarationInvoiceWhereInput
    /**
     * Limit how many DeclarationInvoices to update.
     */
    limit?: number
  }

  /**
   * DeclarationInvoice updateManyAndReturn
   */
  export type DeclarationInvoiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclarationInvoice
     */
    select?: DeclarationInvoiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeclarationInvoice
     */
    omit?: DeclarationInvoiceOmit<ExtArgs> | null
    /**
     * The data used to update DeclarationInvoices.
     */
    data: XOR<DeclarationInvoiceUpdateManyMutationInput, DeclarationInvoiceUncheckedUpdateManyInput>
    /**
     * Filter which DeclarationInvoices to update
     */
    where?: DeclarationInvoiceWhereInput
    /**
     * Limit how many DeclarationInvoices to update.
     */
    limit?: number
  }

  /**
   * DeclarationInvoice upsert
   */
  export type DeclarationInvoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclarationInvoice
     */
    select?: DeclarationInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeclarationInvoice
     */
    omit?: DeclarationInvoiceOmit<ExtArgs> | null
    /**
     * The filter to search for the DeclarationInvoice to update in case it exists.
     */
    where: DeclarationInvoiceWhereUniqueInput
    /**
     * In case the DeclarationInvoice found by the `where` argument doesn't exist, create a new DeclarationInvoice with this data.
     */
    create: XOR<DeclarationInvoiceCreateInput, DeclarationInvoiceUncheckedCreateInput>
    /**
     * In case the DeclarationInvoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeclarationInvoiceUpdateInput, DeclarationInvoiceUncheckedUpdateInput>
  }

  /**
   * DeclarationInvoice delete
   */
  export type DeclarationInvoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclarationInvoice
     */
    select?: DeclarationInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeclarationInvoice
     */
    omit?: DeclarationInvoiceOmit<ExtArgs> | null
    /**
     * Filter which DeclarationInvoice to delete.
     */
    where: DeclarationInvoiceWhereUniqueInput
  }

  /**
   * DeclarationInvoice deleteMany
   */
  export type DeclarationInvoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeclarationInvoices to delete
     */
    where?: DeclarationInvoiceWhereInput
    /**
     * Limit how many DeclarationInvoices to delete.
     */
    limit?: number
  }

  /**
   * DeclarationInvoice without action
   */
  export type DeclarationInvoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclarationInvoice
     */
    select?: DeclarationInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeclarationInvoice
     */
    omit?: DeclarationInvoiceOmit<ExtArgs> | null
  }


  /**
   * Model DeclarationInvoiceProduct
   */

  export type AggregateDeclarationInvoiceProduct = {
    _count: DeclarationInvoiceProductCountAggregateOutputType | null
    _avg: DeclarationInvoiceProductAvgAggregateOutputType | null
    _sum: DeclarationInvoiceProductSumAggregateOutputType | null
    _min: DeclarationInvoiceProductMinAggregateOutputType | null
    _max: DeclarationInvoiceProductMaxAggregateOutputType | null
  }

  export type DeclarationInvoiceProductAvgAggregateOutputType = {
    weight: number | null
    length: number | null
    height: number | null
    width: number | null
    amount: number | null
    quantity: number | null
  }

  export type DeclarationInvoiceProductSumAggregateOutputType = {
    weight: number | null
    length: number | null
    height: number | null
    width: number | null
    amount: number | null
    quantity: number | null
  }

  export type DeclarationInvoiceProductMinAggregateOutputType = {
    declarationInvoiceProductId: string | null
    invoice: string | null
    id: string | null
    productId: string | null
    name: string | null
    tid: string | null
    description: string | null
    weight: number | null
    length: number | null
    height: number | null
    width: number | null
    amount: number | null
    quantity: number | null
    event: $Enums.Events | null
    enable: boolean | null
    registeredAt: Date | null
  }

  export type DeclarationInvoiceProductMaxAggregateOutputType = {
    declarationInvoiceProductId: string | null
    invoice: string | null
    id: string | null
    productId: string | null
    name: string | null
    tid: string | null
    description: string | null
    weight: number | null
    length: number | null
    height: number | null
    width: number | null
    amount: number | null
    quantity: number | null
    event: $Enums.Events | null
    enable: boolean | null
    registeredAt: Date | null
  }

  export type DeclarationInvoiceProductCountAggregateOutputType = {
    declarationInvoiceProductId: number
    invoice: number
    id: number
    productId: number
    name: number
    tid: number
    description: number
    weight: number
    length: number
    height: number
    width: number
    amount: number
    quantity: number
    event: number
    enable: number
    registeredAt: number
    _all: number
  }


  export type DeclarationInvoiceProductAvgAggregateInputType = {
    weight?: true
    length?: true
    height?: true
    width?: true
    amount?: true
    quantity?: true
  }

  export type DeclarationInvoiceProductSumAggregateInputType = {
    weight?: true
    length?: true
    height?: true
    width?: true
    amount?: true
    quantity?: true
  }

  export type DeclarationInvoiceProductMinAggregateInputType = {
    declarationInvoiceProductId?: true
    invoice?: true
    id?: true
    productId?: true
    name?: true
    tid?: true
    description?: true
    weight?: true
    length?: true
    height?: true
    width?: true
    amount?: true
    quantity?: true
    event?: true
    enable?: true
    registeredAt?: true
  }

  export type DeclarationInvoiceProductMaxAggregateInputType = {
    declarationInvoiceProductId?: true
    invoice?: true
    id?: true
    productId?: true
    name?: true
    tid?: true
    description?: true
    weight?: true
    length?: true
    height?: true
    width?: true
    amount?: true
    quantity?: true
    event?: true
    enable?: true
    registeredAt?: true
  }

  export type DeclarationInvoiceProductCountAggregateInputType = {
    declarationInvoiceProductId?: true
    invoice?: true
    id?: true
    productId?: true
    name?: true
    tid?: true
    description?: true
    weight?: true
    length?: true
    height?: true
    width?: true
    amount?: true
    quantity?: true
    event?: true
    enable?: true
    registeredAt?: true
    _all?: true
  }

  export type DeclarationInvoiceProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeclarationInvoiceProduct to aggregate.
     */
    where?: DeclarationInvoiceProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeclarationInvoiceProducts to fetch.
     */
    orderBy?: DeclarationInvoiceProductOrderByWithRelationInput | DeclarationInvoiceProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeclarationInvoiceProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeclarationInvoiceProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeclarationInvoiceProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DeclarationInvoiceProducts
    **/
    _count?: true | DeclarationInvoiceProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeclarationInvoiceProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeclarationInvoiceProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeclarationInvoiceProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeclarationInvoiceProductMaxAggregateInputType
  }

  export type GetDeclarationInvoiceProductAggregateType<T extends DeclarationInvoiceProductAggregateArgs> = {
        [P in keyof T & keyof AggregateDeclarationInvoiceProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeclarationInvoiceProduct[P]>
      : GetScalarType<T[P], AggregateDeclarationInvoiceProduct[P]>
  }




  export type DeclarationInvoiceProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeclarationInvoiceProductWhereInput
    orderBy?: DeclarationInvoiceProductOrderByWithAggregationInput | DeclarationInvoiceProductOrderByWithAggregationInput[]
    by: DeclarationInvoiceProductScalarFieldEnum[] | DeclarationInvoiceProductScalarFieldEnum
    having?: DeclarationInvoiceProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeclarationInvoiceProductCountAggregateInputType | true
    _avg?: DeclarationInvoiceProductAvgAggregateInputType
    _sum?: DeclarationInvoiceProductSumAggregateInputType
    _min?: DeclarationInvoiceProductMinAggregateInputType
    _max?: DeclarationInvoiceProductMaxAggregateInputType
  }

  export type DeclarationInvoiceProductGroupByOutputType = {
    declarationInvoiceProductId: string
    invoice: string
    id: string
    productId: string
    name: string
    tid: string
    description: string
    weight: number
    length: number
    height: number
    width: number
    amount: number
    quantity: number
    event: $Enums.Events
    enable: boolean
    registeredAt: Date
    _count: DeclarationInvoiceProductCountAggregateOutputType | null
    _avg: DeclarationInvoiceProductAvgAggregateOutputType | null
    _sum: DeclarationInvoiceProductSumAggregateOutputType | null
    _min: DeclarationInvoiceProductMinAggregateOutputType | null
    _max: DeclarationInvoiceProductMaxAggregateOutputType | null
  }

  type GetDeclarationInvoiceProductGroupByPayload<T extends DeclarationInvoiceProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeclarationInvoiceProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeclarationInvoiceProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeclarationInvoiceProductGroupByOutputType[P]>
            : GetScalarType<T[P], DeclarationInvoiceProductGroupByOutputType[P]>
        }
      >
    >


  export type DeclarationInvoiceProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    declarationInvoiceProductId?: boolean
    invoice?: boolean
    id?: boolean
    productId?: boolean
    name?: boolean
    tid?: boolean
    description?: boolean
    weight?: boolean
    length?: boolean
    height?: boolean
    width?: boolean
    amount?: boolean
    quantity?: boolean
    event?: boolean
    enable?: boolean
    registeredAt?: boolean
  }, ExtArgs["result"]["declarationInvoiceProduct"]>

  export type DeclarationInvoiceProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    declarationInvoiceProductId?: boolean
    invoice?: boolean
    id?: boolean
    productId?: boolean
    name?: boolean
    tid?: boolean
    description?: boolean
    weight?: boolean
    length?: boolean
    height?: boolean
    width?: boolean
    amount?: boolean
    quantity?: boolean
    event?: boolean
    enable?: boolean
    registeredAt?: boolean
  }, ExtArgs["result"]["declarationInvoiceProduct"]>

  export type DeclarationInvoiceProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    declarationInvoiceProductId?: boolean
    invoice?: boolean
    id?: boolean
    productId?: boolean
    name?: boolean
    tid?: boolean
    description?: boolean
    weight?: boolean
    length?: boolean
    height?: boolean
    width?: boolean
    amount?: boolean
    quantity?: boolean
    event?: boolean
    enable?: boolean
    registeredAt?: boolean
  }, ExtArgs["result"]["declarationInvoiceProduct"]>

  export type DeclarationInvoiceProductSelectScalar = {
    declarationInvoiceProductId?: boolean
    invoice?: boolean
    id?: boolean
    productId?: boolean
    name?: boolean
    tid?: boolean
    description?: boolean
    weight?: boolean
    length?: boolean
    height?: boolean
    width?: boolean
    amount?: boolean
    quantity?: boolean
    event?: boolean
    enable?: boolean
    registeredAt?: boolean
  }

  export type DeclarationInvoiceProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"declarationInvoiceProductId" | "invoice" | "id" | "productId" | "name" | "tid" | "description" | "weight" | "length" | "height" | "width" | "amount" | "quantity" | "event" | "enable" | "registeredAt", ExtArgs["result"]["declarationInvoiceProduct"]>

  export type $DeclarationInvoiceProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DeclarationInvoiceProduct"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      declarationInvoiceProductId: string
      invoice: string
      id: string
      productId: string
      name: string
      tid: string
      description: string
      weight: number
      length: number
      height: number
      width: number
      amount: number
      quantity: number
      event: $Enums.Events
      enable: boolean
      registeredAt: Date
    }, ExtArgs["result"]["declarationInvoiceProduct"]>
    composites: {}
  }

  type DeclarationInvoiceProductGetPayload<S extends boolean | null | undefined | DeclarationInvoiceProductDefaultArgs> = $Result.GetResult<Prisma.$DeclarationInvoiceProductPayload, S>

  type DeclarationInvoiceProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeclarationInvoiceProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeclarationInvoiceProductCountAggregateInputType | true
    }

  export interface DeclarationInvoiceProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DeclarationInvoiceProduct'], meta: { name: 'DeclarationInvoiceProduct' } }
    /**
     * Find zero or one DeclarationInvoiceProduct that matches the filter.
     * @param {DeclarationInvoiceProductFindUniqueArgs} args - Arguments to find a DeclarationInvoiceProduct
     * @example
     * // Get one DeclarationInvoiceProduct
     * const declarationInvoiceProduct = await prisma.declarationInvoiceProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeclarationInvoiceProductFindUniqueArgs>(args: SelectSubset<T, DeclarationInvoiceProductFindUniqueArgs<ExtArgs>>): Prisma__DeclarationInvoiceProductClient<$Result.GetResult<Prisma.$DeclarationInvoiceProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DeclarationInvoiceProduct that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeclarationInvoiceProductFindUniqueOrThrowArgs} args - Arguments to find a DeclarationInvoiceProduct
     * @example
     * // Get one DeclarationInvoiceProduct
     * const declarationInvoiceProduct = await prisma.declarationInvoiceProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeclarationInvoiceProductFindUniqueOrThrowArgs>(args: SelectSubset<T, DeclarationInvoiceProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeclarationInvoiceProductClient<$Result.GetResult<Prisma.$DeclarationInvoiceProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeclarationInvoiceProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeclarationInvoiceProductFindFirstArgs} args - Arguments to find a DeclarationInvoiceProduct
     * @example
     * // Get one DeclarationInvoiceProduct
     * const declarationInvoiceProduct = await prisma.declarationInvoiceProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeclarationInvoiceProductFindFirstArgs>(args?: SelectSubset<T, DeclarationInvoiceProductFindFirstArgs<ExtArgs>>): Prisma__DeclarationInvoiceProductClient<$Result.GetResult<Prisma.$DeclarationInvoiceProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeclarationInvoiceProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeclarationInvoiceProductFindFirstOrThrowArgs} args - Arguments to find a DeclarationInvoiceProduct
     * @example
     * // Get one DeclarationInvoiceProduct
     * const declarationInvoiceProduct = await prisma.declarationInvoiceProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeclarationInvoiceProductFindFirstOrThrowArgs>(args?: SelectSubset<T, DeclarationInvoiceProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeclarationInvoiceProductClient<$Result.GetResult<Prisma.$DeclarationInvoiceProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DeclarationInvoiceProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeclarationInvoiceProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeclarationInvoiceProducts
     * const declarationInvoiceProducts = await prisma.declarationInvoiceProduct.findMany()
     * 
     * // Get first 10 DeclarationInvoiceProducts
     * const declarationInvoiceProducts = await prisma.declarationInvoiceProduct.findMany({ take: 10 })
     * 
     * // Only select the `declarationInvoiceProductId`
     * const declarationInvoiceProductWithDeclarationInvoiceProductIdOnly = await prisma.declarationInvoiceProduct.findMany({ select: { declarationInvoiceProductId: true } })
     * 
     */
    findMany<T extends DeclarationInvoiceProductFindManyArgs>(args?: SelectSubset<T, DeclarationInvoiceProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeclarationInvoiceProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DeclarationInvoiceProduct.
     * @param {DeclarationInvoiceProductCreateArgs} args - Arguments to create a DeclarationInvoiceProduct.
     * @example
     * // Create one DeclarationInvoiceProduct
     * const DeclarationInvoiceProduct = await prisma.declarationInvoiceProduct.create({
     *   data: {
     *     // ... data to create a DeclarationInvoiceProduct
     *   }
     * })
     * 
     */
    create<T extends DeclarationInvoiceProductCreateArgs>(args: SelectSubset<T, DeclarationInvoiceProductCreateArgs<ExtArgs>>): Prisma__DeclarationInvoiceProductClient<$Result.GetResult<Prisma.$DeclarationInvoiceProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DeclarationInvoiceProducts.
     * @param {DeclarationInvoiceProductCreateManyArgs} args - Arguments to create many DeclarationInvoiceProducts.
     * @example
     * // Create many DeclarationInvoiceProducts
     * const declarationInvoiceProduct = await prisma.declarationInvoiceProduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeclarationInvoiceProductCreateManyArgs>(args?: SelectSubset<T, DeclarationInvoiceProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DeclarationInvoiceProducts and returns the data saved in the database.
     * @param {DeclarationInvoiceProductCreateManyAndReturnArgs} args - Arguments to create many DeclarationInvoiceProducts.
     * @example
     * // Create many DeclarationInvoiceProducts
     * const declarationInvoiceProduct = await prisma.declarationInvoiceProduct.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DeclarationInvoiceProducts and only return the `declarationInvoiceProductId`
     * const declarationInvoiceProductWithDeclarationInvoiceProductIdOnly = await prisma.declarationInvoiceProduct.createManyAndReturn({
     *   select: { declarationInvoiceProductId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeclarationInvoiceProductCreateManyAndReturnArgs>(args?: SelectSubset<T, DeclarationInvoiceProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeclarationInvoiceProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DeclarationInvoiceProduct.
     * @param {DeclarationInvoiceProductDeleteArgs} args - Arguments to delete one DeclarationInvoiceProduct.
     * @example
     * // Delete one DeclarationInvoiceProduct
     * const DeclarationInvoiceProduct = await prisma.declarationInvoiceProduct.delete({
     *   where: {
     *     // ... filter to delete one DeclarationInvoiceProduct
     *   }
     * })
     * 
     */
    delete<T extends DeclarationInvoiceProductDeleteArgs>(args: SelectSubset<T, DeclarationInvoiceProductDeleteArgs<ExtArgs>>): Prisma__DeclarationInvoiceProductClient<$Result.GetResult<Prisma.$DeclarationInvoiceProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DeclarationInvoiceProduct.
     * @param {DeclarationInvoiceProductUpdateArgs} args - Arguments to update one DeclarationInvoiceProduct.
     * @example
     * // Update one DeclarationInvoiceProduct
     * const declarationInvoiceProduct = await prisma.declarationInvoiceProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeclarationInvoiceProductUpdateArgs>(args: SelectSubset<T, DeclarationInvoiceProductUpdateArgs<ExtArgs>>): Prisma__DeclarationInvoiceProductClient<$Result.GetResult<Prisma.$DeclarationInvoiceProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DeclarationInvoiceProducts.
     * @param {DeclarationInvoiceProductDeleteManyArgs} args - Arguments to filter DeclarationInvoiceProducts to delete.
     * @example
     * // Delete a few DeclarationInvoiceProducts
     * const { count } = await prisma.declarationInvoiceProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeclarationInvoiceProductDeleteManyArgs>(args?: SelectSubset<T, DeclarationInvoiceProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeclarationInvoiceProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeclarationInvoiceProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeclarationInvoiceProducts
     * const declarationInvoiceProduct = await prisma.declarationInvoiceProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeclarationInvoiceProductUpdateManyArgs>(args: SelectSubset<T, DeclarationInvoiceProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeclarationInvoiceProducts and returns the data updated in the database.
     * @param {DeclarationInvoiceProductUpdateManyAndReturnArgs} args - Arguments to update many DeclarationInvoiceProducts.
     * @example
     * // Update many DeclarationInvoiceProducts
     * const declarationInvoiceProduct = await prisma.declarationInvoiceProduct.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DeclarationInvoiceProducts and only return the `declarationInvoiceProductId`
     * const declarationInvoiceProductWithDeclarationInvoiceProductIdOnly = await prisma.declarationInvoiceProduct.updateManyAndReturn({
     *   select: { declarationInvoiceProductId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DeclarationInvoiceProductUpdateManyAndReturnArgs>(args: SelectSubset<T, DeclarationInvoiceProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeclarationInvoiceProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DeclarationInvoiceProduct.
     * @param {DeclarationInvoiceProductUpsertArgs} args - Arguments to update or create a DeclarationInvoiceProduct.
     * @example
     * // Update or create a DeclarationInvoiceProduct
     * const declarationInvoiceProduct = await prisma.declarationInvoiceProduct.upsert({
     *   create: {
     *     // ... data to create a DeclarationInvoiceProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeclarationInvoiceProduct we want to update
     *   }
     * })
     */
    upsert<T extends DeclarationInvoiceProductUpsertArgs>(args: SelectSubset<T, DeclarationInvoiceProductUpsertArgs<ExtArgs>>): Prisma__DeclarationInvoiceProductClient<$Result.GetResult<Prisma.$DeclarationInvoiceProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DeclarationInvoiceProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeclarationInvoiceProductCountArgs} args - Arguments to filter DeclarationInvoiceProducts to count.
     * @example
     * // Count the number of DeclarationInvoiceProducts
     * const count = await prisma.declarationInvoiceProduct.count({
     *   where: {
     *     // ... the filter for the DeclarationInvoiceProducts we want to count
     *   }
     * })
    **/
    count<T extends DeclarationInvoiceProductCountArgs>(
      args?: Subset<T, DeclarationInvoiceProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeclarationInvoiceProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DeclarationInvoiceProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeclarationInvoiceProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeclarationInvoiceProductAggregateArgs>(args: Subset<T, DeclarationInvoiceProductAggregateArgs>): Prisma.PrismaPromise<GetDeclarationInvoiceProductAggregateType<T>>

    /**
     * Group by DeclarationInvoiceProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeclarationInvoiceProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeclarationInvoiceProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeclarationInvoiceProductGroupByArgs['orderBy'] }
        : { orderBy?: DeclarationInvoiceProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeclarationInvoiceProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeclarationInvoiceProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DeclarationInvoiceProduct model
   */
  readonly fields: DeclarationInvoiceProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DeclarationInvoiceProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeclarationInvoiceProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DeclarationInvoiceProduct model
   */
  interface DeclarationInvoiceProductFieldRefs {
    readonly declarationInvoiceProductId: FieldRef<"DeclarationInvoiceProduct", 'String'>
    readonly invoice: FieldRef<"DeclarationInvoiceProduct", 'String'>
    readonly id: FieldRef<"DeclarationInvoiceProduct", 'String'>
    readonly productId: FieldRef<"DeclarationInvoiceProduct", 'String'>
    readonly name: FieldRef<"DeclarationInvoiceProduct", 'String'>
    readonly tid: FieldRef<"DeclarationInvoiceProduct", 'String'>
    readonly description: FieldRef<"DeclarationInvoiceProduct", 'String'>
    readonly weight: FieldRef<"DeclarationInvoiceProduct", 'Int'>
    readonly length: FieldRef<"DeclarationInvoiceProduct", 'Int'>
    readonly height: FieldRef<"DeclarationInvoiceProduct", 'Int'>
    readonly width: FieldRef<"DeclarationInvoiceProduct", 'Int'>
    readonly amount: FieldRef<"DeclarationInvoiceProduct", 'Int'>
    readonly quantity: FieldRef<"DeclarationInvoiceProduct", 'Int'>
    readonly event: FieldRef<"DeclarationInvoiceProduct", 'Events'>
    readonly enable: FieldRef<"DeclarationInvoiceProduct", 'Boolean'>
    readonly registeredAt: FieldRef<"DeclarationInvoiceProduct", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DeclarationInvoiceProduct findUnique
   */
  export type DeclarationInvoiceProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclarationInvoiceProduct
     */
    select?: DeclarationInvoiceProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeclarationInvoiceProduct
     */
    omit?: DeclarationInvoiceProductOmit<ExtArgs> | null
    /**
     * Filter, which DeclarationInvoiceProduct to fetch.
     */
    where: DeclarationInvoiceProductWhereUniqueInput
  }

  /**
   * DeclarationInvoiceProduct findUniqueOrThrow
   */
  export type DeclarationInvoiceProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclarationInvoiceProduct
     */
    select?: DeclarationInvoiceProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeclarationInvoiceProduct
     */
    omit?: DeclarationInvoiceProductOmit<ExtArgs> | null
    /**
     * Filter, which DeclarationInvoiceProduct to fetch.
     */
    where: DeclarationInvoiceProductWhereUniqueInput
  }

  /**
   * DeclarationInvoiceProduct findFirst
   */
  export type DeclarationInvoiceProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclarationInvoiceProduct
     */
    select?: DeclarationInvoiceProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeclarationInvoiceProduct
     */
    omit?: DeclarationInvoiceProductOmit<ExtArgs> | null
    /**
     * Filter, which DeclarationInvoiceProduct to fetch.
     */
    where?: DeclarationInvoiceProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeclarationInvoiceProducts to fetch.
     */
    orderBy?: DeclarationInvoiceProductOrderByWithRelationInput | DeclarationInvoiceProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeclarationInvoiceProducts.
     */
    cursor?: DeclarationInvoiceProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeclarationInvoiceProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeclarationInvoiceProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeclarationInvoiceProducts.
     */
    distinct?: DeclarationInvoiceProductScalarFieldEnum | DeclarationInvoiceProductScalarFieldEnum[]
  }

  /**
   * DeclarationInvoiceProduct findFirstOrThrow
   */
  export type DeclarationInvoiceProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclarationInvoiceProduct
     */
    select?: DeclarationInvoiceProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeclarationInvoiceProduct
     */
    omit?: DeclarationInvoiceProductOmit<ExtArgs> | null
    /**
     * Filter, which DeclarationInvoiceProduct to fetch.
     */
    where?: DeclarationInvoiceProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeclarationInvoiceProducts to fetch.
     */
    orderBy?: DeclarationInvoiceProductOrderByWithRelationInput | DeclarationInvoiceProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeclarationInvoiceProducts.
     */
    cursor?: DeclarationInvoiceProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeclarationInvoiceProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeclarationInvoiceProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeclarationInvoiceProducts.
     */
    distinct?: DeclarationInvoiceProductScalarFieldEnum | DeclarationInvoiceProductScalarFieldEnum[]
  }

  /**
   * DeclarationInvoiceProduct findMany
   */
  export type DeclarationInvoiceProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclarationInvoiceProduct
     */
    select?: DeclarationInvoiceProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeclarationInvoiceProduct
     */
    omit?: DeclarationInvoiceProductOmit<ExtArgs> | null
    /**
     * Filter, which DeclarationInvoiceProducts to fetch.
     */
    where?: DeclarationInvoiceProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeclarationInvoiceProducts to fetch.
     */
    orderBy?: DeclarationInvoiceProductOrderByWithRelationInput | DeclarationInvoiceProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DeclarationInvoiceProducts.
     */
    cursor?: DeclarationInvoiceProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeclarationInvoiceProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeclarationInvoiceProducts.
     */
    skip?: number
    distinct?: DeclarationInvoiceProductScalarFieldEnum | DeclarationInvoiceProductScalarFieldEnum[]
  }

  /**
   * DeclarationInvoiceProduct create
   */
  export type DeclarationInvoiceProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclarationInvoiceProduct
     */
    select?: DeclarationInvoiceProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeclarationInvoiceProduct
     */
    omit?: DeclarationInvoiceProductOmit<ExtArgs> | null
    /**
     * The data needed to create a DeclarationInvoiceProduct.
     */
    data: XOR<DeclarationInvoiceProductCreateInput, DeclarationInvoiceProductUncheckedCreateInput>
  }

  /**
   * DeclarationInvoiceProduct createMany
   */
  export type DeclarationInvoiceProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeclarationInvoiceProducts.
     */
    data: DeclarationInvoiceProductCreateManyInput | DeclarationInvoiceProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeclarationInvoiceProduct createManyAndReturn
   */
  export type DeclarationInvoiceProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclarationInvoiceProduct
     */
    select?: DeclarationInvoiceProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeclarationInvoiceProduct
     */
    omit?: DeclarationInvoiceProductOmit<ExtArgs> | null
    /**
     * The data used to create many DeclarationInvoiceProducts.
     */
    data: DeclarationInvoiceProductCreateManyInput | DeclarationInvoiceProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeclarationInvoiceProduct update
   */
  export type DeclarationInvoiceProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclarationInvoiceProduct
     */
    select?: DeclarationInvoiceProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeclarationInvoiceProduct
     */
    omit?: DeclarationInvoiceProductOmit<ExtArgs> | null
    /**
     * The data needed to update a DeclarationInvoiceProduct.
     */
    data: XOR<DeclarationInvoiceProductUpdateInput, DeclarationInvoiceProductUncheckedUpdateInput>
    /**
     * Choose, which DeclarationInvoiceProduct to update.
     */
    where: DeclarationInvoiceProductWhereUniqueInput
  }

  /**
   * DeclarationInvoiceProduct updateMany
   */
  export type DeclarationInvoiceProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DeclarationInvoiceProducts.
     */
    data: XOR<DeclarationInvoiceProductUpdateManyMutationInput, DeclarationInvoiceProductUncheckedUpdateManyInput>
    /**
     * Filter which DeclarationInvoiceProducts to update
     */
    where?: DeclarationInvoiceProductWhereInput
    /**
     * Limit how many DeclarationInvoiceProducts to update.
     */
    limit?: number
  }

  /**
   * DeclarationInvoiceProduct updateManyAndReturn
   */
  export type DeclarationInvoiceProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclarationInvoiceProduct
     */
    select?: DeclarationInvoiceProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeclarationInvoiceProduct
     */
    omit?: DeclarationInvoiceProductOmit<ExtArgs> | null
    /**
     * The data used to update DeclarationInvoiceProducts.
     */
    data: XOR<DeclarationInvoiceProductUpdateManyMutationInput, DeclarationInvoiceProductUncheckedUpdateManyInput>
    /**
     * Filter which DeclarationInvoiceProducts to update
     */
    where?: DeclarationInvoiceProductWhereInput
    /**
     * Limit how many DeclarationInvoiceProducts to update.
     */
    limit?: number
  }

  /**
   * DeclarationInvoiceProduct upsert
   */
  export type DeclarationInvoiceProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclarationInvoiceProduct
     */
    select?: DeclarationInvoiceProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeclarationInvoiceProduct
     */
    omit?: DeclarationInvoiceProductOmit<ExtArgs> | null
    /**
     * The filter to search for the DeclarationInvoiceProduct to update in case it exists.
     */
    where: DeclarationInvoiceProductWhereUniqueInput
    /**
     * In case the DeclarationInvoiceProduct found by the `where` argument doesn't exist, create a new DeclarationInvoiceProduct with this data.
     */
    create: XOR<DeclarationInvoiceProductCreateInput, DeclarationInvoiceProductUncheckedCreateInput>
    /**
     * In case the DeclarationInvoiceProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeclarationInvoiceProductUpdateInput, DeclarationInvoiceProductUncheckedUpdateInput>
  }

  /**
   * DeclarationInvoiceProduct delete
   */
  export type DeclarationInvoiceProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclarationInvoiceProduct
     */
    select?: DeclarationInvoiceProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeclarationInvoiceProduct
     */
    omit?: DeclarationInvoiceProductOmit<ExtArgs> | null
    /**
     * Filter which DeclarationInvoiceProduct to delete.
     */
    where: DeclarationInvoiceProductWhereUniqueInput
  }

  /**
   * DeclarationInvoiceProduct deleteMany
   */
  export type DeclarationInvoiceProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeclarationInvoiceProducts to delete
     */
    where?: DeclarationInvoiceProductWhereInput
    /**
     * Limit how many DeclarationInvoiceProducts to delete.
     */
    limit?: number
  }

  /**
   * DeclarationInvoiceProduct without action
   */
  export type DeclarationInvoiceProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclarationInvoiceProduct
     */
    select?: DeclarationInvoiceProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeclarationInvoiceProduct
     */
    omit?: DeclarationInvoiceProductOmit<ExtArgs> | null
  }


  /**
   * Model DeclarationInvoiceProductNCM
   */

  export type AggregateDeclarationInvoiceProductNCM = {
    _count: DeclarationInvoiceProductNCMCountAggregateOutputType | null
    _avg: DeclarationInvoiceProductNCMAvgAggregateOutputType | null
    _sum: DeclarationInvoiceProductNCMSumAggregateOutputType | null
    _min: DeclarationInvoiceProductNCMMinAggregateOutputType | null
    _max: DeclarationInvoiceProductNCMMaxAggregateOutputType | null
  }

  export type DeclarationInvoiceProductNCMAvgAggregateOutputType = {
    code: number | null
    tax: number | null
    icms: number | null
    pis: number | null
    cofins: number | null
    ipi: number | null
  }

  export type DeclarationInvoiceProductNCMSumAggregateOutputType = {
    code: number | null
    tax: number | null
    icms: number | null
    pis: number | null
    cofins: number | null
    ipi: number | null
  }

  export type DeclarationInvoiceProductNCMMinAggregateOutputType = {
    declarationInvoiceProductNCMId: string | null
    product: string | null
    id: string | null
    code: number | null
    tax: number | null
    icms: number | null
    pis: number | null
    cofins: number | null
    ipi: number | null
    event: $Enums.Events | null
    enable: boolean | null
    registeredAt: Date | null
  }

  export type DeclarationInvoiceProductNCMMaxAggregateOutputType = {
    declarationInvoiceProductNCMId: string | null
    product: string | null
    id: string | null
    code: number | null
    tax: number | null
    icms: number | null
    pis: number | null
    cofins: number | null
    ipi: number | null
    event: $Enums.Events | null
    enable: boolean | null
    registeredAt: Date | null
  }

  export type DeclarationInvoiceProductNCMCountAggregateOutputType = {
    declarationInvoiceProductNCMId: number
    product: number
    id: number
    code: number
    tax: number
    icms: number
    pis: number
    cofins: number
    ipi: number
    event: number
    enable: number
    registeredAt: number
    _all: number
  }


  export type DeclarationInvoiceProductNCMAvgAggregateInputType = {
    code?: true
    tax?: true
    icms?: true
    pis?: true
    cofins?: true
    ipi?: true
  }

  export type DeclarationInvoiceProductNCMSumAggregateInputType = {
    code?: true
    tax?: true
    icms?: true
    pis?: true
    cofins?: true
    ipi?: true
  }

  export type DeclarationInvoiceProductNCMMinAggregateInputType = {
    declarationInvoiceProductNCMId?: true
    product?: true
    id?: true
    code?: true
    tax?: true
    icms?: true
    pis?: true
    cofins?: true
    ipi?: true
    event?: true
    enable?: true
    registeredAt?: true
  }

  export type DeclarationInvoiceProductNCMMaxAggregateInputType = {
    declarationInvoiceProductNCMId?: true
    product?: true
    id?: true
    code?: true
    tax?: true
    icms?: true
    pis?: true
    cofins?: true
    ipi?: true
    event?: true
    enable?: true
    registeredAt?: true
  }

  export type DeclarationInvoiceProductNCMCountAggregateInputType = {
    declarationInvoiceProductNCMId?: true
    product?: true
    id?: true
    code?: true
    tax?: true
    icms?: true
    pis?: true
    cofins?: true
    ipi?: true
    event?: true
    enable?: true
    registeredAt?: true
    _all?: true
  }

  export type DeclarationInvoiceProductNCMAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeclarationInvoiceProductNCM to aggregate.
     */
    where?: DeclarationInvoiceProductNCMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeclarationInvoiceProductNCMS to fetch.
     */
    orderBy?: DeclarationInvoiceProductNCMOrderByWithRelationInput | DeclarationInvoiceProductNCMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeclarationInvoiceProductNCMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeclarationInvoiceProductNCMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeclarationInvoiceProductNCMS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DeclarationInvoiceProductNCMS
    **/
    _count?: true | DeclarationInvoiceProductNCMCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeclarationInvoiceProductNCMAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeclarationInvoiceProductNCMSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeclarationInvoiceProductNCMMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeclarationInvoiceProductNCMMaxAggregateInputType
  }

  export type GetDeclarationInvoiceProductNCMAggregateType<T extends DeclarationInvoiceProductNCMAggregateArgs> = {
        [P in keyof T & keyof AggregateDeclarationInvoiceProductNCM]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeclarationInvoiceProductNCM[P]>
      : GetScalarType<T[P], AggregateDeclarationInvoiceProductNCM[P]>
  }




  export type DeclarationInvoiceProductNCMGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeclarationInvoiceProductNCMWhereInput
    orderBy?: DeclarationInvoiceProductNCMOrderByWithAggregationInput | DeclarationInvoiceProductNCMOrderByWithAggregationInput[]
    by: DeclarationInvoiceProductNCMScalarFieldEnum[] | DeclarationInvoiceProductNCMScalarFieldEnum
    having?: DeclarationInvoiceProductNCMScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeclarationInvoiceProductNCMCountAggregateInputType | true
    _avg?: DeclarationInvoiceProductNCMAvgAggregateInputType
    _sum?: DeclarationInvoiceProductNCMSumAggregateInputType
    _min?: DeclarationInvoiceProductNCMMinAggregateInputType
    _max?: DeclarationInvoiceProductNCMMaxAggregateInputType
  }

  export type DeclarationInvoiceProductNCMGroupByOutputType = {
    declarationInvoiceProductNCMId: string
    product: string
    id: string
    code: number
    tax: number
    icms: number
    pis: number
    cofins: number
    ipi: number
    event: $Enums.Events
    enable: boolean
    registeredAt: Date
    _count: DeclarationInvoiceProductNCMCountAggregateOutputType | null
    _avg: DeclarationInvoiceProductNCMAvgAggregateOutputType | null
    _sum: DeclarationInvoiceProductNCMSumAggregateOutputType | null
    _min: DeclarationInvoiceProductNCMMinAggregateOutputType | null
    _max: DeclarationInvoiceProductNCMMaxAggregateOutputType | null
  }

  type GetDeclarationInvoiceProductNCMGroupByPayload<T extends DeclarationInvoiceProductNCMGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeclarationInvoiceProductNCMGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeclarationInvoiceProductNCMGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeclarationInvoiceProductNCMGroupByOutputType[P]>
            : GetScalarType<T[P], DeclarationInvoiceProductNCMGroupByOutputType[P]>
        }
      >
    >


  export type DeclarationInvoiceProductNCMSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    declarationInvoiceProductNCMId?: boolean
    product?: boolean
    id?: boolean
    code?: boolean
    tax?: boolean
    icms?: boolean
    pis?: boolean
    cofins?: boolean
    ipi?: boolean
    event?: boolean
    enable?: boolean
    registeredAt?: boolean
  }, ExtArgs["result"]["declarationInvoiceProductNCM"]>

  export type DeclarationInvoiceProductNCMSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    declarationInvoiceProductNCMId?: boolean
    product?: boolean
    id?: boolean
    code?: boolean
    tax?: boolean
    icms?: boolean
    pis?: boolean
    cofins?: boolean
    ipi?: boolean
    event?: boolean
    enable?: boolean
    registeredAt?: boolean
  }, ExtArgs["result"]["declarationInvoiceProductNCM"]>

  export type DeclarationInvoiceProductNCMSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    declarationInvoiceProductNCMId?: boolean
    product?: boolean
    id?: boolean
    code?: boolean
    tax?: boolean
    icms?: boolean
    pis?: boolean
    cofins?: boolean
    ipi?: boolean
    event?: boolean
    enable?: boolean
    registeredAt?: boolean
  }, ExtArgs["result"]["declarationInvoiceProductNCM"]>

  export type DeclarationInvoiceProductNCMSelectScalar = {
    declarationInvoiceProductNCMId?: boolean
    product?: boolean
    id?: boolean
    code?: boolean
    tax?: boolean
    icms?: boolean
    pis?: boolean
    cofins?: boolean
    ipi?: boolean
    event?: boolean
    enable?: boolean
    registeredAt?: boolean
  }

  export type DeclarationInvoiceProductNCMOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"declarationInvoiceProductNCMId" | "product" | "id" | "code" | "tax" | "icms" | "pis" | "cofins" | "ipi" | "event" | "enable" | "registeredAt", ExtArgs["result"]["declarationInvoiceProductNCM"]>

  export type $DeclarationInvoiceProductNCMPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DeclarationInvoiceProductNCM"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      declarationInvoiceProductNCMId: string
      product: string
      id: string
      code: number
      tax: number
      icms: number
      pis: number
      cofins: number
      ipi: number
      event: $Enums.Events
      enable: boolean
      registeredAt: Date
    }, ExtArgs["result"]["declarationInvoiceProductNCM"]>
    composites: {}
  }

  type DeclarationInvoiceProductNCMGetPayload<S extends boolean | null | undefined | DeclarationInvoiceProductNCMDefaultArgs> = $Result.GetResult<Prisma.$DeclarationInvoiceProductNCMPayload, S>

  type DeclarationInvoiceProductNCMCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeclarationInvoiceProductNCMFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeclarationInvoiceProductNCMCountAggregateInputType | true
    }

  export interface DeclarationInvoiceProductNCMDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DeclarationInvoiceProductNCM'], meta: { name: 'DeclarationInvoiceProductNCM' } }
    /**
     * Find zero or one DeclarationInvoiceProductNCM that matches the filter.
     * @param {DeclarationInvoiceProductNCMFindUniqueArgs} args - Arguments to find a DeclarationInvoiceProductNCM
     * @example
     * // Get one DeclarationInvoiceProductNCM
     * const declarationInvoiceProductNCM = await prisma.declarationInvoiceProductNCM.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeclarationInvoiceProductNCMFindUniqueArgs>(args: SelectSubset<T, DeclarationInvoiceProductNCMFindUniqueArgs<ExtArgs>>): Prisma__DeclarationInvoiceProductNCMClient<$Result.GetResult<Prisma.$DeclarationInvoiceProductNCMPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DeclarationInvoiceProductNCM that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeclarationInvoiceProductNCMFindUniqueOrThrowArgs} args - Arguments to find a DeclarationInvoiceProductNCM
     * @example
     * // Get one DeclarationInvoiceProductNCM
     * const declarationInvoiceProductNCM = await prisma.declarationInvoiceProductNCM.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeclarationInvoiceProductNCMFindUniqueOrThrowArgs>(args: SelectSubset<T, DeclarationInvoiceProductNCMFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeclarationInvoiceProductNCMClient<$Result.GetResult<Prisma.$DeclarationInvoiceProductNCMPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeclarationInvoiceProductNCM that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeclarationInvoiceProductNCMFindFirstArgs} args - Arguments to find a DeclarationInvoiceProductNCM
     * @example
     * // Get one DeclarationInvoiceProductNCM
     * const declarationInvoiceProductNCM = await prisma.declarationInvoiceProductNCM.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeclarationInvoiceProductNCMFindFirstArgs>(args?: SelectSubset<T, DeclarationInvoiceProductNCMFindFirstArgs<ExtArgs>>): Prisma__DeclarationInvoiceProductNCMClient<$Result.GetResult<Prisma.$DeclarationInvoiceProductNCMPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeclarationInvoiceProductNCM that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeclarationInvoiceProductNCMFindFirstOrThrowArgs} args - Arguments to find a DeclarationInvoiceProductNCM
     * @example
     * // Get one DeclarationInvoiceProductNCM
     * const declarationInvoiceProductNCM = await prisma.declarationInvoiceProductNCM.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeclarationInvoiceProductNCMFindFirstOrThrowArgs>(args?: SelectSubset<T, DeclarationInvoiceProductNCMFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeclarationInvoiceProductNCMClient<$Result.GetResult<Prisma.$DeclarationInvoiceProductNCMPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DeclarationInvoiceProductNCMS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeclarationInvoiceProductNCMFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeclarationInvoiceProductNCMS
     * const declarationInvoiceProductNCMS = await prisma.declarationInvoiceProductNCM.findMany()
     * 
     * // Get first 10 DeclarationInvoiceProductNCMS
     * const declarationInvoiceProductNCMS = await prisma.declarationInvoiceProductNCM.findMany({ take: 10 })
     * 
     * // Only select the `declarationInvoiceProductNCMId`
     * const declarationInvoiceProductNCMWithDeclarationInvoiceProductNCMIdOnly = await prisma.declarationInvoiceProductNCM.findMany({ select: { declarationInvoiceProductNCMId: true } })
     * 
     */
    findMany<T extends DeclarationInvoiceProductNCMFindManyArgs>(args?: SelectSubset<T, DeclarationInvoiceProductNCMFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeclarationInvoiceProductNCMPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DeclarationInvoiceProductNCM.
     * @param {DeclarationInvoiceProductNCMCreateArgs} args - Arguments to create a DeclarationInvoiceProductNCM.
     * @example
     * // Create one DeclarationInvoiceProductNCM
     * const DeclarationInvoiceProductNCM = await prisma.declarationInvoiceProductNCM.create({
     *   data: {
     *     // ... data to create a DeclarationInvoiceProductNCM
     *   }
     * })
     * 
     */
    create<T extends DeclarationInvoiceProductNCMCreateArgs>(args: SelectSubset<T, DeclarationInvoiceProductNCMCreateArgs<ExtArgs>>): Prisma__DeclarationInvoiceProductNCMClient<$Result.GetResult<Prisma.$DeclarationInvoiceProductNCMPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DeclarationInvoiceProductNCMS.
     * @param {DeclarationInvoiceProductNCMCreateManyArgs} args - Arguments to create many DeclarationInvoiceProductNCMS.
     * @example
     * // Create many DeclarationInvoiceProductNCMS
     * const declarationInvoiceProductNCM = await prisma.declarationInvoiceProductNCM.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeclarationInvoiceProductNCMCreateManyArgs>(args?: SelectSubset<T, DeclarationInvoiceProductNCMCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DeclarationInvoiceProductNCMS and returns the data saved in the database.
     * @param {DeclarationInvoiceProductNCMCreateManyAndReturnArgs} args - Arguments to create many DeclarationInvoiceProductNCMS.
     * @example
     * // Create many DeclarationInvoiceProductNCMS
     * const declarationInvoiceProductNCM = await prisma.declarationInvoiceProductNCM.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DeclarationInvoiceProductNCMS and only return the `declarationInvoiceProductNCMId`
     * const declarationInvoiceProductNCMWithDeclarationInvoiceProductNCMIdOnly = await prisma.declarationInvoiceProductNCM.createManyAndReturn({
     *   select: { declarationInvoiceProductNCMId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeclarationInvoiceProductNCMCreateManyAndReturnArgs>(args?: SelectSubset<T, DeclarationInvoiceProductNCMCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeclarationInvoiceProductNCMPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DeclarationInvoiceProductNCM.
     * @param {DeclarationInvoiceProductNCMDeleteArgs} args - Arguments to delete one DeclarationInvoiceProductNCM.
     * @example
     * // Delete one DeclarationInvoiceProductNCM
     * const DeclarationInvoiceProductNCM = await prisma.declarationInvoiceProductNCM.delete({
     *   where: {
     *     // ... filter to delete one DeclarationInvoiceProductNCM
     *   }
     * })
     * 
     */
    delete<T extends DeclarationInvoiceProductNCMDeleteArgs>(args: SelectSubset<T, DeclarationInvoiceProductNCMDeleteArgs<ExtArgs>>): Prisma__DeclarationInvoiceProductNCMClient<$Result.GetResult<Prisma.$DeclarationInvoiceProductNCMPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DeclarationInvoiceProductNCM.
     * @param {DeclarationInvoiceProductNCMUpdateArgs} args - Arguments to update one DeclarationInvoiceProductNCM.
     * @example
     * // Update one DeclarationInvoiceProductNCM
     * const declarationInvoiceProductNCM = await prisma.declarationInvoiceProductNCM.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeclarationInvoiceProductNCMUpdateArgs>(args: SelectSubset<T, DeclarationInvoiceProductNCMUpdateArgs<ExtArgs>>): Prisma__DeclarationInvoiceProductNCMClient<$Result.GetResult<Prisma.$DeclarationInvoiceProductNCMPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DeclarationInvoiceProductNCMS.
     * @param {DeclarationInvoiceProductNCMDeleteManyArgs} args - Arguments to filter DeclarationInvoiceProductNCMS to delete.
     * @example
     * // Delete a few DeclarationInvoiceProductNCMS
     * const { count } = await prisma.declarationInvoiceProductNCM.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeclarationInvoiceProductNCMDeleteManyArgs>(args?: SelectSubset<T, DeclarationInvoiceProductNCMDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeclarationInvoiceProductNCMS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeclarationInvoiceProductNCMUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeclarationInvoiceProductNCMS
     * const declarationInvoiceProductNCM = await prisma.declarationInvoiceProductNCM.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeclarationInvoiceProductNCMUpdateManyArgs>(args: SelectSubset<T, DeclarationInvoiceProductNCMUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeclarationInvoiceProductNCMS and returns the data updated in the database.
     * @param {DeclarationInvoiceProductNCMUpdateManyAndReturnArgs} args - Arguments to update many DeclarationInvoiceProductNCMS.
     * @example
     * // Update many DeclarationInvoiceProductNCMS
     * const declarationInvoiceProductNCM = await prisma.declarationInvoiceProductNCM.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DeclarationInvoiceProductNCMS and only return the `declarationInvoiceProductNCMId`
     * const declarationInvoiceProductNCMWithDeclarationInvoiceProductNCMIdOnly = await prisma.declarationInvoiceProductNCM.updateManyAndReturn({
     *   select: { declarationInvoiceProductNCMId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DeclarationInvoiceProductNCMUpdateManyAndReturnArgs>(args: SelectSubset<T, DeclarationInvoiceProductNCMUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeclarationInvoiceProductNCMPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DeclarationInvoiceProductNCM.
     * @param {DeclarationInvoiceProductNCMUpsertArgs} args - Arguments to update or create a DeclarationInvoiceProductNCM.
     * @example
     * // Update or create a DeclarationInvoiceProductNCM
     * const declarationInvoiceProductNCM = await prisma.declarationInvoiceProductNCM.upsert({
     *   create: {
     *     // ... data to create a DeclarationInvoiceProductNCM
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeclarationInvoiceProductNCM we want to update
     *   }
     * })
     */
    upsert<T extends DeclarationInvoiceProductNCMUpsertArgs>(args: SelectSubset<T, DeclarationInvoiceProductNCMUpsertArgs<ExtArgs>>): Prisma__DeclarationInvoiceProductNCMClient<$Result.GetResult<Prisma.$DeclarationInvoiceProductNCMPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DeclarationInvoiceProductNCMS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeclarationInvoiceProductNCMCountArgs} args - Arguments to filter DeclarationInvoiceProductNCMS to count.
     * @example
     * // Count the number of DeclarationInvoiceProductNCMS
     * const count = await prisma.declarationInvoiceProductNCM.count({
     *   where: {
     *     // ... the filter for the DeclarationInvoiceProductNCMS we want to count
     *   }
     * })
    **/
    count<T extends DeclarationInvoiceProductNCMCountArgs>(
      args?: Subset<T, DeclarationInvoiceProductNCMCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeclarationInvoiceProductNCMCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DeclarationInvoiceProductNCM.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeclarationInvoiceProductNCMAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeclarationInvoiceProductNCMAggregateArgs>(args: Subset<T, DeclarationInvoiceProductNCMAggregateArgs>): Prisma.PrismaPromise<GetDeclarationInvoiceProductNCMAggregateType<T>>

    /**
     * Group by DeclarationInvoiceProductNCM.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeclarationInvoiceProductNCMGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeclarationInvoiceProductNCMGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeclarationInvoiceProductNCMGroupByArgs['orderBy'] }
        : { orderBy?: DeclarationInvoiceProductNCMGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeclarationInvoiceProductNCMGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeclarationInvoiceProductNCMGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DeclarationInvoiceProductNCM model
   */
  readonly fields: DeclarationInvoiceProductNCMFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DeclarationInvoiceProductNCM.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeclarationInvoiceProductNCMClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DeclarationInvoiceProductNCM model
   */
  interface DeclarationInvoiceProductNCMFieldRefs {
    readonly declarationInvoiceProductNCMId: FieldRef<"DeclarationInvoiceProductNCM", 'String'>
    readonly product: FieldRef<"DeclarationInvoiceProductNCM", 'String'>
    readonly id: FieldRef<"DeclarationInvoiceProductNCM", 'String'>
    readonly code: FieldRef<"DeclarationInvoiceProductNCM", 'Int'>
    readonly tax: FieldRef<"DeclarationInvoiceProductNCM", 'Int'>
    readonly icms: FieldRef<"DeclarationInvoiceProductNCM", 'Int'>
    readonly pis: FieldRef<"DeclarationInvoiceProductNCM", 'Int'>
    readonly cofins: FieldRef<"DeclarationInvoiceProductNCM", 'Int'>
    readonly ipi: FieldRef<"DeclarationInvoiceProductNCM", 'Int'>
    readonly event: FieldRef<"DeclarationInvoiceProductNCM", 'Events'>
    readonly enable: FieldRef<"DeclarationInvoiceProductNCM", 'Boolean'>
    readonly registeredAt: FieldRef<"DeclarationInvoiceProductNCM", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DeclarationInvoiceProductNCM findUnique
   */
  export type DeclarationInvoiceProductNCMFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclarationInvoiceProductNCM
     */
    select?: DeclarationInvoiceProductNCMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeclarationInvoiceProductNCM
     */
    omit?: DeclarationInvoiceProductNCMOmit<ExtArgs> | null
    /**
     * Filter, which DeclarationInvoiceProductNCM to fetch.
     */
    where: DeclarationInvoiceProductNCMWhereUniqueInput
  }

  /**
   * DeclarationInvoiceProductNCM findUniqueOrThrow
   */
  export type DeclarationInvoiceProductNCMFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclarationInvoiceProductNCM
     */
    select?: DeclarationInvoiceProductNCMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeclarationInvoiceProductNCM
     */
    omit?: DeclarationInvoiceProductNCMOmit<ExtArgs> | null
    /**
     * Filter, which DeclarationInvoiceProductNCM to fetch.
     */
    where: DeclarationInvoiceProductNCMWhereUniqueInput
  }

  /**
   * DeclarationInvoiceProductNCM findFirst
   */
  export type DeclarationInvoiceProductNCMFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclarationInvoiceProductNCM
     */
    select?: DeclarationInvoiceProductNCMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeclarationInvoiceProductNCM
     */
    omit?: DeclarationInvoiceProductNCMOmit<ExtArgs> | null
    /**
     * Filter, which DeclarationInvoiceProductNCM to fetch.
     */
    where?: DeclarationInvoiceProductNCMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeclarationInvoiceProductNCMS to fetch.
     */
    orderBy?: DeclarationInvoiceProductNCMOrderByWithRelationInput | DeclarationInvoiceProductNCMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeclarationInvoiceProductNCMS.
     */
    cursor?: DeclarationInvoiceProductNCMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeclarationInvoiceProductNCMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeclarationInvoiceProductNCMS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeclarationInvoiceProductNCMS.
     */
    distinct?: DeclarationInvoiceProductNCMScalarFieldEnum | DeclarationInvoiceProductNCMScalarFieldEnum[]
  }

  /**
   * DeclarationInvoiceProductNCM findFirstOrThrow
   */
  export type DeclarationInvoiceProductNCMFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclarationInvoiceProductNCM
     */
    select?: DeclarationInvoiceProductNCMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeclarationInvoiceProductNCM
     */
    omit?: DeclarationInvoiceProductNCMOmit<ExtArgs> | null
    /**
     * Filter, which DeclarationInvoiceProductNCM to fetch.
     */
    where?: DeclarationInvoiceProductNCMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeclarationInvoiceProductNCMS to fetch.
     */
    orderBy?: DeclarationInvoiceProductNCMOrderByWithRelationInput | DeclarationInvoiceProductNCMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeclarationInvoiceProductNCMS.
     */
    cursor?: DeclarationInvoiceProductNCMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeclarationInvoiceProductNCMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeclarationInvoiceProductNCMS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeclarationInvoiceProductNCMS.
     */
    distinct?: DeclarationInvoiceProductNCMScalarFieldEnum | DeclarationInvoiceProductNCMScalarFieldEnum[]
  }

  /**
   * DeclarationInvoiceProductNCM findMany
   */
  export type DeclarationInvoiceProductNCMFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclarationInvoiceProductNCM
     */
    select?: DeclarationInvoiceProductNCMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeclarationInvoiceProductNCM
     */
    omit?: DeclarationInvoiceProductNCMOmit<ExtArgs> | null
    /**
     * Filter, which DeclarationInvoiceProductNCMS to fetch.
     */
    where?: DeclarationInvoiceProductNCMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeclarationInvoiceProductNCMS to fetch.
     */
    orderBy?: DeclarationInvoiceProductNCMOrderByWithRelationInput | DeclarationInvoiceProductNCMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DeclarationInvoiceProductNCMS.
     */
    cursor?: DeclarationInvoiceProductNCMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeclarationInvoiceProductNCMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeclarationInvoiceProductNCMS.
     */
    skip?: number
    distinct?: DeclarationInvoiceProductNCMScalarFieldEnum | DeclarationInvoiceProductNCMScalarFieldEnum[]
  }

  /**
   * DeclarationInvoiceProductNCM create
   */
  export type DeclarationInvoiceProductNCMCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclarationInvoiceProductNCM
     */
    select?: DeclarationInvoiceProductNCMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeclarationInvoiceProductNCM
     */
    omit?: DeclarationInvoiceProductNCMOmit<ExtArgs> | null
    /**
     * The data needed to create a DeclarationInvoiceProductNCM.
     */
    data: XOR<DeclarationInvoiceProductNCMCreateInput, DeclarationInvoiceProductNCMUncheckedCreateInput>
  }

  /**
   * DeclarationInvoiceProductNCM createMany
   */
  export type DeclarationInvoiceProductNCMCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeclarationInvoiceProductNCMS.
     */
    data: DeclarationInvoiceProductNCMCreateManyInput | DeclarationInvoiceProductNCMCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeclarationInvoiceProductNCM createManyAndReturn
   */
  export type DeclarationInvoiceProductNCMCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclarationInvoiceProductNCM
     */
    select?: DeclarationInvoiceProductNCMSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeclarationInvoiceProductNCM
     */
    omit?: DeclarationInvoiceProductNCMOmit<ExtArgs> | null
    /**
     * The data used to create many DeclarationInvoiceProductNCMS.
     */
    data: DeclarationInvoiceProductNCMCreateManyInput | DeclarationInvoiceProductNCMCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeclarationInvoiceProductNCM update
   */
  export type DeclarationInvoiceProductNCMUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclarationInvoiceProductNCM
     */
    select?: DeclarationInvoiceProductNCMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeclarationInvoiceProductNCM
     */
    omit?: DeclarationInvoiceProductNCMOmit<ExtArgs> | null
    /**
     * The data needed to update a DeclarationInvoiceProductNCM.
     */
    data: XOR<DeclarationInvoiceProductNCMUpdateInput, DeclarationInvoiceProductNCMUncheckedUpdateInput>
    /**
     * Choose, which DeclarationInvoiceProductNCM to update.
     */
    where: DeclarationInvoiceProductNCMWhereUniqueInput
  }

  /**
   * DeclarationInvoiceProductNCM updateMany
   */
  export type DeclarationInvoiceProductNCMUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DeclarationInvoiceProductNCMS.
     */
    data: XOR<DeclarationInvoiceProductNCMUpdateManyMutationInput, DeclarationInvoiceProductNCMUncheckedUpdateManyInput>
    /**
     * Filter which DeclarationInvoiceProductNCMS to update
     */
    where?: DeclarationInvoiceProductNCMWhereInput
    /**
     * Limit how many DeclarationInvoiceProductNCMS to update.
     */
    limit?: number
  }

  /**
   * DeclarationInvoiceProductNCM updateManyAndReturn
   */
  export type DeclarationInvoiceProductNCMUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclarationInvoiceProductNCM
     */
    select?: DeclarationInvoiceProductNCMSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeclarationInvoiceProductNCM
     */
    omit?: DeclarationInvoiceProductNCMOmit<ExtArgs> | null
    /**
     * The data used to update DeclarationInvoiceProductNCMS.
     */
    data: XOR<DeclarationInvoiceProductNCMUpdateManyMutationInput, DeclarationInvoiceProductNCMUncheckedUpdateManyInput>
    /**
     * Filter which DeclarationInvoiceProductNCMS to update
     */
    where?: DeclarationInvoiceProductNCMWhereInput
    /**
     * Limit how many DeclarationInvoiceProductNCMS to update.
     */
    limit?: number
  }

  /**
   * DeclarationInvoiceProductNCM upsert
   */
  export type DeclarationInvoiceProductNCMUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclarationInvoiceProductNCM
     */
    select?: DeclarationInvoiceProductNCMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeclarationInvoiceProductNCM
     */
    omit?: DeclarationInvoiceProductNCMOmit<ExtArgs> | null
    /**
     * The filter to search for the DeclarationInvoiceProductNCM to update in case it exists.
     */
    where: DeclarationInvoiceProductNCMWhereUniqueInput
    /**
     * In case the DeclarationInvoiceProductNCM found by the `where` argument doesn't exist, create a new DeclarationInvoiceProductNCM with this data.
     */
    create: XOR<DeclarationInvoiceProductNCMCreateInput, DeclarationInvoiceProductNCMUncheckedCreateInput>
    /**
     * In case the DeclarationInvoiceProductNCM was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeclarationInvoiceProductNCMUpdateInput, DeclarationInvoiceProductNCMUncheckedUpdateInput>
  }

  /**
   * DeclarationInvoiceProductNCM delete
   */
  export type DeclarationInvoiceProductNCMDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclarationInvoiceProductNCM
     */
    select?: DeclarationInvoiceProductNCMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeclarationInvoiceProductNCM
     */
    omit?: DeclarationInvoiceProductNCMOmit<ExtArgs> | null
    /**
     * Filter which DeclarationInvoiceProductNCM to delete.
     */
    where: DeclarationInvoiceProductNCMWhereUniqueInput
  }

  /**
   * DeclarationInvoiceProductNCM deleteMany
   */
  export type DeclarationInvoiceProductNCMDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeclarationInvoiceProductNCMS to delete
     */
    where?: DeclarationInvoiceProductNCMWhereInput
    /**
     * Limit how many DeclarationInvoiceProductNCMS to delete.
     */
    limit?: number
  }

  /**
   * DeclarationInvoiceProductNCM without action
   */
  export type DeclarationInvoiceProductNCMDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclarationInvoiceProductNCM
     */
    select?: DeclarationInvoiceProductNCMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeclarationInvoiceProductNCM
     */
    omit?: DeclarationInvoiceProductNCMOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const NCMScalarFieldEnum: {
    ncmId: 'ncmId',
    id: 'id',
    code: 'code',
    tax: 'tax',
    icms: 'icms',
    pis: 'pis',
    cofins: 'cofins',
    ipi: 'ipi',
    event: 'event',
    enable: 'enable',
    registeredAt: 'registeredAt'
  };

  export type NCMScalarFieldEnum = (typeof NCMScalarFieldEnum)[keyof typeof NCMScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    productId: 'productId',
    id: 'id',
    name: 'name',
    tid: 'tid',
    description: 'description',
    weight: 'weight',
    length: 'length',
    height: 'height',
    width: 'width',
    ncmId: 'ncmId',
    event: 'event',
    enable: 'enable',
    registeredAt: 'registeredAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const InvoiceScalarFieldEnum: {
    invoiceId: 'invoiceId',
    id: 'id',
    registration: 'registration',
    createdAt: 'createdAt',
    quote: 'quote',
    event: 'event',
    enable: 'enable',
    registeredAt: 'registeredAt'
  };

  export type InvoiceScalarFieldEnum = (typeof InvoiceScalarFieldEnum)[keyof typeof InvoiceScalarFieldEnum]


  export const InvoiceProductScalarFieldEnum: {
    invoiceProductId: 'invoiceProductId',
    id: 'id',
    productId: 'productId',
    invoiceId: 'invoiceId',
    amount: 'amount',
    quantity: 'quantity',
    event: 'event',
    enable: 'enable',
    registeredAt: 'registeredAt'
  };

  export type InvoiceProductScalarFieldEnum = (typeof InvoiceProductScalarFieldEnum)[keyof typeof InvoiceProductScalarFieldEnum]


  export const ExpenseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    useICMSBase: 'useICMSBase',
    useCustomsBase: 'useCustomsBase',
    allocationMethod: 'allocationMethod',
    currency: 'currency'
  };

  export type ExpenseScalarFieldEnum = (typeof ExpenseScalarFieldEnum)[keyof typeof ExpenseScalarFieldEnum]


  export const DeclarationScalarFieldEnum: {
    declarationId: 'declarationId',
    id: 'id',
    registration: 'registration',
    quote: 'quote',
    createdAt: 'createdAt',
    event: 'event',
    enable: 'enable',
    registeredAt: 'registeredAt'
  };

  export type DeclarationScalarFieldEnum = (typeof DeclarationScalarFieldEnum)[keyof typeof DeclarationScalarFieldEnum]


  export const DeclarationExpenseScalarFieldEnum: {
    declarationExpenseId: 'declarationExpenseId',
    declaration: 'declaration',
    id: 'id',
    name: 'name',
    useICMSBase: 'useICMSBase',
    useCustomsBase: 'useCustomsBase',
    allocationMethod: 'allocationMethod',
    currency: 'currency',
    amount: 'amount',
    event: 'event',
    enable: 'enable',
    registeredAt: 'registeredAt'
  };

  export type DeclarationExpenseScalarFieldEnum = (typeof DeclarationExpenseScalarFieldEnum)[keyof typeof DeclarationExpenseScalarFieldEnum]


  export const DeclarationInvoiceScalarFieldEnum: {
    declarationInvoiceId: 'declarationInvoiceId',
    declaration: 'declaration',
    id: 'id',
    registration: 'registration',
    createdAt: 'createdAt',
    quote: 'quote',
    event: 'event',
    enable: 'enable',
    registeredAt: 'registeredAt'
  };

  export type DeclarationInvoiceScalarFieldEnum = (typeof DeclarationInvoiceScalarFieldEnum)[keyof typeof DeclarationInvoiceScalarFieldEnum]


  export const DeclarationInvoiceProductScalarFieldEnum: {
    declarationInvoiceProductId: 'declarationInvoiceProductId',
    invoice: 'invoice',
    id: 'id',
    productId: 'productId',
    name: 'name',
    tid: 'tid',
    description: 'description',
    weight: 'weight',
    length: 'length',
    height: 'height',
    width: 'width',
    amount: 'amount',
    quantity: 'quantity',
    event: 'event',
    enable: 'enable',
    registeredAt: 'registeredAt'
  };

  export type DeclarationInvoiceProductScalarFieldEnum = (typeof DeclarationInvoiceProductScalarFieldEnum)[keyof typeof DeclarationInvoiceProductScalarFieldEnum]


  export const DeclarationInvoiceProductNCMScalarFieldEnum: {
    declarationInvoiceProductNCMId: 'declarationInvoiceProductNCMId',
    product: 'product',
    id: 'id',
    code: 'code',
    tax: 'tax',
    icms: 'icms',
    pis: 'pis',
    cofins: 'cofins',
    ipi: 'ipi',
    event: 'event',
    enable: 'enable',
    registeredAt: 'registeredAt'
  };

  export type DeclarationInvoiceProductNCMScalarFieldEnum = (typeof DeclarationInvoiceProductNCMScalarFieldEnum)[keyof typeof DeclarationInvoiceProductNCMScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Events'
   */
  export type EnumEventsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Events'>
    


  /**
   * Reference to a field of type 'Events[]'
   */
  export type ListEnumEventsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Events[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'AllocationMethod'
   */
  export type EnumAllocationMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AllocationMethod'>
    


  /**
   * Reference to a field of type 'AllocationMethod[]'
   */
  export type ListEnumAllocationMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AllocationMethod[]'>
    


  /**
   * Reference to a field of type 'Currency'
   */
  export type EnumCurrencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Currency'>
    


  /**
   * Reference to a field of type 'Currency[]'
   */
  export type ListEnumCurrencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Currency[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type NCMWhereInput = {
    AND?: NCMWhereInput | NCMWhereInput[]
    OR?: NCMWhereInput[]
    NOT?: NCMWhereInput | NCMWhereInput[]
    ncmId?: StringFilter<"NCM"> | string
    id?: StringFilter<"NCM"> | string
    code?: IntFilter<"NCM"> | number
    tax?: IntFilter<"NCM"> | number
    icms?: IntFilter<"NCM"> | number
    pis?: IntFilter<"NCM"> | number
    cofins?: IntFilter<"NCM"> | number
    ipi?: IntFilter<"NCM"> | number
    event?: EnumEventsFilter<"NCM"> | $Enums.Events
    enable?: BoolFilter<"NCM"> | boolean
    registeredAt?: DateTimeFilter<"NCM"> | Date | string
  }

  export type NCMOrderByWithRelationInput = {
    ncmId?: SortOrder
    id?: SortOrder
    code?: SortOrder
    tax?: SortOrder
    icms?: SortOrder
    pis?: SortOrder
    cofins?: SortOrder
    ipi?: SortOrder
    event?: SortOrder
    enable?: SortOrder
    registeredAt?: SortOrder
  }

  export type NCMWhereUniqueInput = Prisma.AtLeast<{
    ncmId?: string
    AND?: NCMWhereInput | NCMWhereInput[]
    OR?: NCMWhereInput[]
    NOT?: NCMWhereInput | NCMWhereInput[]
    id?: StringFilter<"NCM"> | string
    code?: IntFilter<"NCM"> | number
    tax?: IntFilter<"NCM"> | number
    icms?: IntFilter<"NCM"> | number
    pis?: IntFilter<"NCM"> | number
    cofins?: IntFilter<"NCM"> | number
    ipi?: IntFilter<"NCM"> | number
    event?: EnumEventsFilter<"NCM"> | $Enums.Events
    enable?: BoolFilter<"NCM"> | boolean
    registeredAt?: DateTimeFilter<"NCM"> | Date | string
  }, "ncmId">

  export type NCMOrderByWithAggregationInput = {
    ncmId?: SortOrder
    id?: SortOrder
    code?: SortOrder
    tax?: SortOrder
    icms?: SortOrder
    pis?: SortOrder
    cofins?: SortOrder
    ipi?: SortOrder
    event?: SortOrder
    enable?: SortOrder
    registeredAt?: SortOrder
    _count?: NCMCountOrderByAggregateInput
    _avg?: NCMAvgOrderByAggregateInput
    _max?: NCMMaxOrderByAggregateInput
    _min?: NCMMinOrderByAggregateInput
    _sum?: NCMSumOrderByAggregateInput
  }

  export type NCMScalarWhereWithAggregatesInput = {
    AND?: NCMScalarWhereWithAggregatesInput | NCMScalarWhereWithAggregatesInput[]
    OR?: NCMScalarWhereWithAggregatesInput[]
    NOT?: NCMScalarWhereWithAggregatesInput | NCMScalarWhereWithAggregatesInput[]
    ncmId?: StringWithAggregatesFilter<"NCM"> | string
    id?: StringWithAggregatesFilter<"NCM"> | string
    code?: IntWithAggregatesFilter<"NCM"> | number
    tax?: IntWithAggregatesFilter<"NCM"> | number
    icms?: IntWithAggregatesFilter<"NCM"> | number
    pis?: IntWithAggregatesFilter<"NCM"> | number
    cofins?: IntWithAggregatesFilter<"NCM"> | number
    ipi?: IntWithAggregatesFilter<"NCM"> | number
    event?: EnumEventsWithAggregatesFilter<"NCM"> | $Enums.Events
    enable?: BoolWithAggregatesFilter<"NCM"> | boolean
    registeredAt?: DateTimeWithAggregatesFilter<"NCM"> | Date | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    productId?: StringFilter<"Product"> | string
    id?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    tid?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    weight?: IntFilter<"Product"> | number
    length?: IntFilter<"Product"> | number
    height?: IntFilter<"Product"> | number
    width?: IntFilter<"Product"> | number
    ncmId?: StringFilter<"Product"> | string
    event?: EnumEventsFilter<"Product"> | $Enums.Events
    enable?: BoolFilter<"Product"> | boolean
    registeredAt?: DateTimeFilter<"Product"> | Date | string
  }

  export type ProductOrderByWithRelationInput = {
    productId?: SortOrder
    id?: SortOrder
    name?: SortOrder
    tid?: SortOrder
    description?: SortOrder
    weight?: SortOrder
    length?: SortOrder
    height?: SortOrder
    width?: SortOrder
    ncmId?: SortOrder
    event?: SortOrder
    enable?: SortOrder
    registeredAt?: SortOrder
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    productId?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    tid?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    weight?: IntFilter<"Product"> | number
    length?: IntFilter<"Product"> | number
    height?: IntFilter<"Product"> | number
    width?: IntFilter<"Product"> | number
    ncmId?: StringFilter<"Product"> | string
    event?: EnumEventsFilter<"Product"> | $Enums.Events
    enable?: BoolFilter<"Product"> | boolean
    registeredAt?: DateTimeFilter<"Product"> | Date | string
  }, "productId">

  export type ProductOrderByWithAggregationInput = {
    productId?: SortOrder
    id?: SortOrder
    name?: SortOrder
    tid?: SortOrder
    description?: SortOrder
    weight?: SortOrder
    length?: SortOrder
    height?: SortOrder
    width?: SortOrder
    ncmId?: SortOrder
    event?: SortOrder
    enable?: SortOrder
    registeredAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    productId?: StringWithAggregatesFilter<"Product"> | string
    id?: StringWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    tid?: StringWithAggregatesFilter<"Product"> | string
    description?: StringWithAggregatesFilter<"Product"> | string
    weight?: IntWithAggregatesFilter<"Product"> | number
    length?: IntWithAggregatesFilter<"Product"> | number
    height?: IntWithAggregatesFilter<"Product"> | number
    width?: IntWithAggregatesFilter<"Product"> | number
    ncmId?: StringWithAggregatesFilter<"Product"> | string
    event?: EnumEventsWithAggregatesFilter<"Product"> | $Enums.Events
    enable?: BoolWithAggregatesFilter<"Product"> | boolean
    registeredAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type InvoiceWhereInput = {
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    invoiceId?: StringFilter<"Invoice"> | string
    id?: StringFilter<"Invoice"> | string
    registration?: StringFilter<"Invoice"> | string
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    quote?: IntFilter<"Invoice"> | number
    event?: EnumEventsFilter<"Invoice"> | $Enums.Events
    enable?: BoolFilter<"Invoice"> | boolean
    registeredAt?: DateTimeFilter<"Invoice"> | Date | string
  }

  export type InvoiceOrderByWithRelationInput = {
    invoiceId?: SortOrder
    id?: SortOrder
    registration?: SortOrder
    createdAt?: SortOrder
    quote?: SortOrder
    event?: SortOrder
    enable?: SortOrder
    registeredAt?: SortOrder
  }

  export type InvoiceWhereUniqueInput = Prisma.AtLeast<{
    invoiceId?: string
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    id?: StringFilter<"Invoice"> | string
    registration?: StringFilter<"Invoice"> | string
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    quote?: IntFilter<"Invoice"> | number
    event?: EnumEventsFilter<"Invoice"> | $Enums.Events
    enable?: BoolFilter<"Invoice"> | boolean
    registeredAt?: DateTimeFilter<"Invoice"> | Date | string
  }, "invoiceId">

  export type InvoiceOrderByWithAggregationInput = {
    invoiceId?: SortOrder
    id?: SortOrder
    registration?: SortOrder
    createdAt?: SortOrder
    quote?: SortOrder
    event?: SortOrder
    enable?: SortOrder
    registeredAt?: SortOrder
    _count?: InvoiceCountOrderByAggregateInput
    _avg?: InvoiceAvgOrderByAggregateInput
    _max?: InvoiceMaxOrderByAggregateInput
    _min?: InvoiceMinOrderByAggregateInput
    _sum?: InvoiceSumOrderByAggregateInput
  }

  export type InvoiceScalarWhereWithAggregatesInput = {
    AND?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    OR?: InvoiceScalarWhereWithAggregatesInput[]
    NOT?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    invoiceId?: StringWithAggregatesFilter<"Invoice"> | string
    id?: StringWithAggregatesFilter<"Invoice"> | string
    registration?: StringWithAggregatesFilter<"Invoice"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
    quote?: IntWithAggregatesFilter<"Invoice"> | number
    event?: EnumEventsWithAggregatesFilter<"Invoice"> | $Enums.Events
    enable?: BoolWithAggregatesFilter<"Invoice"> | boolean
    registeredAt?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
  }

  export type InvoiceProductWhereInput = {
    AND?: InvoiceProductWhereInput | InvoiceProductWhereInput[]
    OR?: InvoiceProductWhereInput[]
    NOT?: InvoiceProductWhereInput | InvoiceProductWhereInput[]
    invoiceProductId?: StringFilter<"InvoiceProduct"> | string
    id?: StringFilter<"InvoiceProduct"> | string
    productId?: StringFilter<"InvoiceProduct"> | string
    invoiceId?: StringFilter<"InvoiceProduct"> | string
    amount?: IntFilter<"InvoiceProduct"> | number
    quantity?: IntFilter<"InvoiceProduct"> | number
    event?: EnumEventsFilter<"InvoiceProduct"> | $Enums.Events
    enable?: BoolFilter<"InvoiceProduct"> | boolean
    registeredAt?: DateTimeFilter<"InvoiceProduct"> | Date | string
  }

  export type InvoiceProductOrderByWithRelationInput = {
    invoiceProductId?: SortOrder
    id?: SortOrder
    productId?: SortOrder
    invoiceId?: SortOrder
    amount?: SortOrder
    quantity?: SortOrder
    event?: SortOrder
    enable?: SortOrder
    registeredAt?: SortOrder
  }

  export type InvoiceProductWhereUniqueInput = Prisma.AtLeast<{
    invoiceProductId?: string
    AND?: InvoiceProductWhereInput | InvoiceProductWhereInput[]
    OR?: InvoiceProductWhereInput[]
    NOT?: InvoiceProductWhereInput | InvoiceProductWhereInput[]
    id?: StringFilter<"InvoiceProduct"> | string
    productId?: StringFilter<"InvoiceProduct"> | string
    invoiceId?: StringFilter<"InvoiceProduct"> | string
    amount?: IntFilter<"InvoiceProduct"> | number
    quantity?: IntFilter<"InvoiceProduct"> | number
    event?: EnumEventsFilter<"InvoiceProduct"> | $Enums.Events
    enable?: BoolFilter<"InvoiceProduct"> | boolean
    registeredAt?: DateTimeFilter<"InvoiceProduct"> | Date | string
  }, "invoiceProductId">

  export type InvoiceProductOrderByWithAggregationInput = {
    invoiceProductId?: SortOrder
    id?: SortOrder
    productId?: SortOrder
    invoiceId?: SortOrder
    amount?: SortOrder
    quantity?: SortOrder
    event?: SortOrder
    enable?: SortOrder
    registeredAt?: SortOrder
    _count?: InvoiceProductCountOrderByAggregateInput
    _avg?: InvoiceProductAvgOrderByAggregateInput
    _max?: InvoiceProductMaxOrderByAggregateInput
    _min?: InvoiceProductMinOrderByAggregateInput
    _sum?: InvoiceProductSumOrderByAggregateInput
  }

  export type InvoiceProductScalarWhereWithAggregatesInput = {
    AND?: InvoiceProductScalarWhereWithAggregatesInput | InvoiceProductScalarWhereWithAggregatesInput[]
    OR?: InvoiceProductScalarWhereWithAggregatesInput[]
    NOT?: InvoiceProductScalarWhereWithAggregatesInput | InvoiceProductScalarWhereWithAggregatesInput[]
    invoiceProductId?: StringWithAggregatesFilter<"InvoiceProduct"> | string
    id?: StringWithAggregatesFilter<"InvoiceProduct"> | string
    productId?: StringWithAggregatesFilter<"InvoiceProduct"> | string
    invoiceId?: StringWithAggregatesFilter<"InvoiceProduct"> | string
    amount?: IntWithAggregatesFilter<"InvoiceProduct"> | number
    quantity?: IntWithAggregatesFilter<"InvoiceProduct"> | number
    event?: EnumEventsWithAggregatesFilter<"InvoiceProduct"> | $Enums.Events
    enable?: BoolWithAggregatesFilter<"InvoiceProduct"> | boolean
    registeredAt?: DateTimeWithAggregatesFilter<"InvoiceProduct"> | Date | string
  }

  export type ExpenseWhereInput = {
    AND?: ExpenseWhereInput | ExpenseWhereInput[]
    OR?: ExpenseWhereInput[]
    NOT?: ExpenseWhereInput | ExpenseWhereInput[]
    id?: StringFilter<"Expense"> | string
    name?: StringFilter<"Expense"> | string
    useICMSBase?: BoolFilter<"Expense"> | boolean
    useCustomsBase?: BoolFilter<"Expense"> | boolean
    allocationMethod?: EnumAllocationMethodFilter<"Expense"> | $Enums.AllocationMethod
    currency?: EnumCurrencyFilter<"Expense"> | $Enums.Currency
  }

  export type ExpenseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    useICMSBase?: SortOrder
    useCustomsBase?: SortOrder
    allocationMethod?: SortOrder
    currency?: SortOrder
  }

  export type ExpenseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExpenseWhereInput | ExpenseWhereInput[]
    OR?: ExpenseWhereInput[]
    NOT?: ExpenseWhereInput | ExpenseWhereInput[]
    name?: StringFilter<"Expense"> | string
    useICMSBase?: BoolFilter<"Expense"> | boolean
    useCustomsBase?: BoolFilter<"Expense"> | boolean
    allocationMethod?: EnumAllocationMethodFilter<"Expense"> | $Enums.AllocationMethod
    currency?: EnumCurrencyFilter<"Expense"> | $Enums.Currency
  }, "id">

  export type ExpenseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    useICMSBase?: SortOrder
    useCustomsBase?: SortOrder
    allocationMethod?: SortOrder
    currency?: SortOrder
    _count?: ExpenseCountOrderByAggregateInput
    _max?: ExpenseMaxOrderByAggregateInput
    _min?: ExpenseMinOrderByAggregateInput
  }

  export type ExpenseScalarWhereWithAggregatesInput = {
    AND?: ExpenseScalarWhereWithAggregatesInput | ExpenseScalarWhereWithAggregatesInput[]
    OR?: ExpenseScalarWhereWithAggregatesInput[]
    NOT?: ExpenseScalarWhereWithAggregatesInput | ExpenseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Expense"> | string
    name?: StringWithAggregatesFilter<"Expense"> | string
    useICMSBase?: BoolWithAggregatesFilter<"Expense"> | boolean
    useCustomsBase?: BoolWithAggregatesFilter<"Expense"> | boolean
    allocationMethod?: EnumAllocationMethodWithAggregatesFilter<"Expense"> | $Enums.AllocationMethod
    currency?: EnumCurrencyWithAggregatesFilter<"Expense"> | $Enums.Currency
  }

  export type DeclarationWhereInput = {
    AND?: DeclarationWhereInput | DeclarationWhereInput[]
    OR?: DeclarationWhereInput[]
    NOT?: DeclarationWhereInput | DeclarationWhereInput[]
    declarationId?: StringFilter<"Declaration"> | string
    id?: StringFilter<"Declaration"> | string
    registration?: StringFilter<"Declaration"> | string
    quote?: IntFilter<"Declaration"> | number
    createdAt?: DateTimeFilter<"Declaration"> | Date | string
    event?: EnumEventsFilter<"Declaration"> | $Enums.Events
    enable?: BoolFilter<"Declaration"> | boolean
    registeredAt?: DateTimeFilter<"Declaration"> | Date | string
  }

  export type DeclarationOrderByWithRelationInput = {
    declarationId?: SortOrder
    id?: SortOrder
    registration?: SortOrder
    quote?: SortOrder
    createdAt?: SortOrder
    event?: SortOrder
    enable?: SortOrder
    registeredAt?: SortOrder
  }

  export type DeclarationWhereUniqueInput = Prisma.AtLeast<{
    declarationId?: string
    AND?: DeclarationWhereInput | DeclarationWhereInput[]
    OR?: DeclarationWhereInput[]
    NOT?: DeclarationWhereInput | DeclarationWhereInput[]
    id?: StringFilter<"Declaration"> | string
    registration?: StringFilter<"Declaration"> | string
    quote?: IntFilter<"Declaration"> | number
    createdAt?: DateTimeFilter<"Declaration"> | Date | string
    event?: EnumEventsFilter<"Declaration"> | $Enums.Events
    enable?: BoolFilter<"Declaration"> | boolean
    registeredAt?: DateTimeFilter<"Declaration"> | Date | string
  }, "declarationId">

  export type DeclarationOrderByWithAggregationInput = {
    declarationId?: SortOrder
    id?: SortOrder
    registration?: SortOrder
    quote?: SortOrder
    createdAt?: SortOrder
    event?: SortOrder
    enable?: SortOrder
    registeredAt?: SortOrder
    _count?: DeclarationCountOrderByAggregateInput
    _avg?: DeclarationAvgOrderByAggregateInput
    _max?: DeclarationMaxOrderByAggregateInput
    _min?: DeclarationMinOrderByAggregateInput
    _sum?: DeclarationSumOrderByAggregateInput
  }

  export type DeclarationScalarWhereWithAggregatesInput = {
    AND?: DeclarationScalarWhereWithAggregatesInput | DeclarationScalarWhereWithAggregatesInput[]
    OR?: DeclarationScalarWhereWithAggregatesInput[]
    NOT?: DeclarationScalarWhereWithAggregatesInput | DeclarationScalarWhereWithAggregatesInput[]
    declarationId?: StringWithAggregatesFilter<"Declaration"> | string
    id?: StringWithAggregatesFilter<"Declaration"> | string
    registration?: StringWithAggregatesFilter<"Declaration"> | string
    quote?: IntWithAggregatesFilter<"Declaration"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Declaration"> | Date | string
    event?: EnumEventsWithAggregatesFilter<"Declaration"> | $Enums.Events
    enable?: BoolWithAggregatesFilter<"Declaration"> | boolean
    registeredAt?: DateTimeWithAggregatesFilter<"Declaration"> | Date | string
  }

  export type DeclarationExpenseWhereInput = {
    AND?: DeclarationExpenseWhereInput | DeclarationExpenseWhereInput[]
    OR?: DeclarationExpenseWhereInput[]
    NOT?: DeclarationExpenseWhereInput | DeclarationExpenseWhereInput[]
    declarationExpenseId?: StringFilter<"DeclarationExpense"> | string
    declaration?: StringFilter<"DeclarationExpense"> | string
    id?: StringFilter<"DeclarationExpense"> | string
    name?: StringFilter<"DeclarationExpense"> | string
    useICMSBase?: BoolFilter<"DeclarationExpense"> | boolean
    useCustomsBase?: BoolFilter<"DeclarationExpense"> | boolean
    allocationMethod?: EnumAllocationMethodFilter<"DeclarationExpense"> | $Enums.AllocationMethod
    currency?: EnumCurrencyFilter<"DeclarationExpense"> | $Enums.Currency
    amount?: IntFilter<"DeclarationExpense"> | number
    event?: EnumEventsFilter<"DeclarationExpense"> | $Enums.Events
    enable?: BoolFilter<"DeclarationExpense"> | boolean
    registeredAt?: DateTimeFilter<"DeclarationExpense"> | Date | string
  }

  export type DeclarationExpenseOrderByWithRelationInput = {
    declarationExpenseId?: SortOrder
    declaration?: SortOrder
    id?: SortOrder
    name?: SortOrder
    useICMSBase?: SortOrder
    useCustomsBase?: SortOrder
    allocationMethod?: SortOrder
    currency?: SortOrder
    amount?: SortOrder
    event?: SortOrder
    enable?: SortOrder
    registeredAt?: SortOrder
  }

  export type DeclarationExpenseWhereUniqueInput = Prisma.AtLeast<{
    declarationExpenseId?: string
    AND?: DeclarationExpenseWhereInput | DeclarationExpenseWhereInput[]
    OR?: DeclarationExpenseWhereInput[]
    NOT?: DeclarationExpenseWhereInput | DeclarationExpenseWhereInput[]
    declaration?: StringFilter<"DeclarationExpense"> | string
    id?: StringFilter<"DeclarationExpense"> | string
    name?: StringFilter<"DeclarationExpense"> | string
    useICMSBase?: BoolFilter<"DeclarationExpense"> | boolean
    useCustomsBase?: BoolFilter<"DeclarationExpense"> | boolean
    allocationMethod?: EnumAllocationMethodFilter<"DeclarationExpense"> | $Enums.AllocationMethod
    currency?: EnumCurrencyFilter<"DeclarationExpense"> | $Enums.Currency
    amount?: IntFilter<"DeclarationExpense"> | number
    event?: EnumEventsFilter<"DeclarationExpense"> | $Enums.Events
    enable?: BoolFilter<"DeclarationExpense"> | boolean
    registeredAt?: DateTimeFilter<"DeclarationExpense"> | Date | string
  }, "declarationExpenseId">

  export type DeclarationExpenseOrderByWithAggregationInput = {
    declarationExpenseId?: SortOrder
    declaration?: SortOrder
    id?: SortOrder
    name?: SortOrder
    useICMSBase?: SortOrder
    useCustomsBase?: SortOrder
    allocationMethod?: SortOrder
    currency?: SortOrder
    amount?: SortOrder
    event?: SortOrder
    enable?: SortOrder
    registeredAt?: SortOrder
    _count?: DeclarationExpenseCountOrderByAggregateInput
    _avg?: DeclarationExpenseAvgOrderByAggregateInput
    _max?: DeclarationExpenseMaxOrderByAggregateInput
    _min?: DeclarationExpenseMinOrderByAggregateInput
    _sum?: DeclarationExpenseSumOrderByAggregateInput
  }

  export type DeclarationExpenseScalarWhereWithAggregatesInput = {
    AND?: DeclarationExpenseScalarWhereWithAggregatesInput | DeclarationExpenseScalarWhereWithAggregatesInput[]
    OR?: DeclarationExpenseScalarWhereWithAggregatesInput[]
    NOT?: DeclarationExpenseScalarWhereWithAggregatesInput | DeclarationExpenseScalarWhereWithAggregatesInput[]
    declarationExpenseId?: StringWithAggregatesFilter<"DeclarationExpense"> | string
    declaration?: StringWithAggregatesFilter<"DeclarationExpense"> | string
    id?: StringWithAggregatesFilter<"DeclarationExpense"> | string
    name?: StringWithAggregatesFilter<"DeclarationExpense"> | string
    useICMSBase?: BoolWithAggregatesFilter<"DeclarationExpense"> | boolean
    useCustomsBase?: BoolWithAggregatesFilter<"DeclarationExpense"> | boolean
    allocationMethod?: EnumAllocationMethodWithAggregatesFilter<"DeclarationExpense"> | $Enums.AllocationMethod
    currency?: EnumCurrencyWithAggregatesFilter<"DeclarationExpense"> | $Enums.Currency
    amount?: IntWithAggregatesFilter<"DeclarationExpense"> | number
    event?: EnumEventsWithAggregatesFilter<"DeclarationExpense"> | $Enums.Events
    enable?: BoolWithAggregatesFilter<"DeclarationExpense"> | boolean
    registeredAt?: DateTimeWithAggregatesFilter<"DeclarationExpense"> | Date | string
  }

  export type DeclarationInvoiceWhereInput = {
    AND?: DeclarationInvoiceWhereInput | DeclarationInvoiceWhereInput[]
    OR?: DeclarationInvoiceWhereInput[]
    NOT?: DeclarationInvoiceWhereInput | DeclarationInvoiceWhereInput[]
    declarationInvoiceId?: StringFilter<"DeclarationInvoice"> | string
    declaration?: StringFilter<"DeclarationInvoice"> | string
    id?: StringFilter<"DeclarationInvoice"> | string
    registration?: StringFilter<"DeclarationInvoice"> | string
    createdAt?: DateTimeFilter<"DeclarationInvoice"> | Date | string
    quote?: IntFilter<"DeclarationInvoice"> | number
    event?: EnumEventsFilter<"DeclarationInvoice"> | $Enums.Events
    enable?: BoolFilter<"DeclarationInvoice"> | boolean
    registeredAt?: DateTimeFilter<"DeclarationInvoice"> | Date | string
  }

  export type DeclarationInvoiceOrderByWithRelationInput = {
    declarationInvoiceId?: SortOrder
    declaration?: SortOrder
    id?: SortOrder
    registration?: SortOrder
    createdAt?: SortOrder
    quote?: SortOrder
    event?: SortOrder
    enable?: SortOrder
    registeredAt?: SortOrder
  }

  export type DeclarationInvoiceWhereUniqueInput = Prisma.AtLeast<{
    declarationInvoiceId?: string
    AND?: DeclarationInvoiceWhereInput | DeclarationInvoiceWhereInput[]
    OR?: DeclarationInvoiceWhereInput[]
    NOT?: DeclarationInvoiceWhereInput | DeclarationInvoiceWhereInput[]
    declaration?: StringFilter<"DeclarationInvoice"> | string
    id?: StringFilter<"DeclarationInvoice"> | string
    registration?: StringFilter<"DeclarationInvoice"> | string
    createdAt?: DateTimeFilter<"DeclarationInvoice"> | Date | string
    quote?: IntFilter<"DeclarationInvoice"> | number
    event?: EnumEventsFilter<"DeclarationInvoice"> | $Enums.Events
    enable?: BoolFilter<"DeclarationInvoice"> | boolean
    registeredAt?: DateTimeFilter<"DeclarationInvoice"> | Date | string
  }, "declarationInvoiceId">

  export type DeclarationInvoiceOrderByWithAggregationInput = {
    declarationInvoiceId?: SortOrder
    declaration?: SortOrder
    id?: SortOrder
    registration?: SortOrder
    createdAt?: SortOrder
    quote?: SortOrder
    event?: SortOrder
    enable?: SortOrder
    registeredAt?: SortOrder
    _count?: DeclarationInvoiceCountOrderByAggregateInput
    _avg?: DeclarationInvoiceAvgOrderByAggregateInput
    _max?: DeclarationInvoiceMaxOrderByAggregateInput
    _min?: DeclarationInvoiceMinOrderByAggregateInput
    _sum?: DeclarationInvoiceSumOrderByAggregateInput
  }

  export type DeclarationInvoiceScalarWhereWithAggregatesInput = {
    AND?: DeclarationInvoiceScalarWhereWithAggregatesInput | DeclarationInvoiceScalarWhereWithAggregatesInput[]
    OR?: DeclarationInvoiceScalarWhereWithAggregatesInput[]
    NOT?: DeclarationInvoiceScalarWhereWithAggregatesInput | DeclarationInvoiceScalarWhereWithAggregatesInput[]
    declarationInvoiceId?: StringWithAggregatesFilter<"DeclarationInvoice"> | string
    declaration?: StringWithAggregatesFilter<"DeclarationInvoice"> | string
    id?: StringWithAggregatesFilter<"DeclarationInvoice"> | string
    registration?: StringWithAggregatesFilter<"DeclarationInvoice"> | string
    createdAt?: DateTimeWithAggregatesFilter<"DeclarationInvoice"> | Date | string
    quote?: IntWithAggregatesFilter<"DeclarationInvoice"> | number
    event?: EnumEventsWithAggregatesFilter<"DeclarationInvoice"> | $Enums.Events
    enable?: BoolWithAggregatesFilter<"DeclarationInvoice"> | boolean
    registeredAt?: DateTimeWithAggregatesFilter<"DeclarationInvoice"> | Date | string
  }

  export type DeclarationInvoiceProductWhereInput = {
    AND?: DeclarationInvoiceProductWhereInput | DeclarationInvoiceProductWhereInput[]
    OR?: DeclarationInvoiceProductWhereInput[]
    NOT?: DeclarationInvoiceProductWhereInput | DeclarationInvoiceProductWhereInput[]
    declarationInvoiceProductId?: StringFilter<"DeclarationInvoiceProduct"> | string
    invoice?: StringFilter<"DeclarationInvoiceProduct"> | string
    id?: StringFilter<"DeclarationInvoiceProduct"> | string
    productId?: StringFilter<"DeclarationInvoiceProduct"> | string
    name?: StringFilter<"DeclarationInvoiceProduct"> | string
    tid?: StringFilter<"DeclarationInvoiceProduct"> | string
    description?: StringFilter<"DeclarationInvoiceProduct"> | string
    weight?: IntFilter<"DeclarationInvoiceProduct"> | number
    length?: IntFilter<"DeclarationInvoiceProduct"> | number
    height?: IntFilter<"DeclarationInvoiceProduct"> | number
    width?: IntFilter<"DeclarationInvoiceProduct"> | number
    amount?: IntFilter<"DeclarationInvoiceProduct"> | number
    quantity?: IntFilter<"DeclarationInvoiceProduct"> | number
    event?: EnumEventsFilter<"DeclarationInvoiceProduct"> | $Enums.Events
    enable?: BoolFilter<"DeclarationInvoiceProduct"> | boolean
    registeredAt?: DateTimeFilter<"DeclarationInvoiceProduct"> | Date | string
  }

  export type DeclarationInvoiceProductOrderByWithRelationInput = {
    declarationInvoiceProductId?: SortOrder
    invoice?: SortOrder
    id?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    tid?: SortOrder
    description?: SortOrder
    weight?: SortOrder
    length?: SortOrder
    height?: SortOrder
    width?: SortOrder
    amount?: SortOrder
    quantity?: SortOrder
    event?: SortOrder
    enable?: SortOrder
    registeredAt?: SortOrder
  }

  export type DeclarationInvoiceProductWhereUniqueInput = Prisma.AtLeast<{
    declarationInvoiceProductId?: string
    AND?: DeclarationInvoiceProductWhereInput | DeclarationInvoiceProductWhereInput[]
    OR?: DeclarationInvoiceProductWhereInput[]
    NOT?: DeclarationInvoiceProductWhereInput | DeclarationInvoiceProductWhereInput[]
    invoice?: StringFilter<"DeclarationInvoiceProduct"> | string
    id?: StringFilter<"DeclarationInvoiceProduct"> | string
    productId?: StringFilter<"DeclarationInvoiceProduct"> | string
    name?: StringFilter<"DeclarationInvoiceProduct"> | string
    tid?: StringFilter<"DeclarationInvoiceProduct"> | string
    description?: StringFilter<"DeclarationInvoiceProduct"> | string
    weight?: IntFilter<"DeclarationInvoiceProduct"> | number
    length?: IntFilter<"DeclarationInvoiceProduct"> | number
    height?: IntFilter<"DeclarationInvoiceProduct"> | number
    width?: IntFilter<"DeclarationInvoiceProduct"> | number
    amount?: IntFilter<"DeclarationInvoiceProduct"> | number
    quantity?: IntFilter<"DeclarationInvoiceProduct"> | number
    event?: EnumEventsFilter<"DeclarationInvoiceProduct"> | $Enums.Events
    enable?: BoolFilter<"DeclarationInvoiceProduct"> | boolean
    registeredAt?: DateTimeFilter<"DeclarationInvoiceProduct"> | Date | string
  }, "declarationInvoiceProductId">

  export type DeclarationInvoiceProductOrderByWithAggregationInput = {
    declarationInvoiceProductId?: SortOrder
    invoice?: SortOrder
    id?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    tid?: SortOrder
    description?: SortOrder
    weight?: SortOrder
    length?: SortOrder
    height?: SortOrder
    width?: SortOrder
    amount?: SortOrder
    quantity?: SortOrder
    event?: SortOrder
    enable?: SortOrder
    registeredAt?: SortOrder
    _count?: DeclarationInvoiceProductCountOrderByAggregateInput
    _avg?: DeclarationInvoiceProductAvgOrderByAggregateInput
    _max?: DeclarationInvoiceProductMaxOrderByAggregateInput
    _min?: DeclarationInvoiceProductMinOrderByAggregateInput
    _sum?: DeclarationInvoiceProductSumOrderByAggregateInput
  }

  export type DeclarationInvoiceProductScalarWhereWithAggregatesInput = {
    AND?: DeclarationInvoiceProductScalarWhereWithAggregatesInput | DeclarationInvoiceProductScalarWhereWithAggregatesInput[]
    OR?: DeclarationInvoiceProductScalarWhereWithAggregatesInput[]
    NOT?: DeclarationInvoiceProductScalarWhereWithAggregatesInput | DeclarationInvoiceProductScalarWhereWithAggregatesInput[]
    declarationInvoiceProductId?: StringWithAggregatesFilter<"DeclarationInvoiceProduct"> | string
    invoice?: StringWithAggregatesFilter<"DeclarationInvoiceProduct"> | string
    id?: StringWithAggregatesFilter<"DeclarationInvoiceProduct"> | string
    productId?: StringWithAggregatesFilter<"DeclarationInvoiceProduct"> | string
    name?: StringWithAggregatesFilter<"DeclarationInvoiceProduct"> | string
    tid?: StringWithAggregatesFilter<"DeclarationInvoiceProduct"> | string
    description?: StringWithAggregatesFilter<"DeclarationInvoiceProduct"> | string
    weight?: IntWithAggregatesFilter<"DeclarationInvoiceProduct"> | number
    length?: IntWithAggregatesFilter<"DeclarationInvoiceProduct"> | number
    height?: IntWithAggregatesFilter<"DeclarationInvoiceProduct"> | number
    width?: IntWithAggregatesFilter<"DeclarationInvoiceProduct"> | number
    amount?: IntWithAggregatesFilter<"DeclarationInvoiceProduct"> | number
    quantity?: IntWithAggregatesFilter<"DeclarationInvoiceProduct"> | number
    event?: EnumEventsWithAggregatesFilter<"DeclarationInvoiceProduct"> | $Enums.Events
    enable?: BoolWithAggregatesFilter<"DeclarationInvoiceProduct"> | boolean
    registeredAt?: DateTimeWithAggregatesFilter<"DeclarationInvoiceProduct"> | Date | string
  }

  export type DeclarationInvoiceProductNCMWhereInput = {
    AND?: DeclarationInvoiceProductNCMWhereInput | DeclarationInvoiceProductNCMWhereInput[]
    OR?: DeclarationInvoiceProductNCMWhereInput[]
    NOT?: DeclarationInvoiceProductNCMWhereInput | DeclarationInvoiceProductNCMWhereInput[]
    declarationInvoiceProductNCMId?: StringFilter<"DeclarationInvoiceProductNCM"> | string
    product?: StringFilter<"DeclarationInvoiceProductNCM"> | string
    id?: StringFilter<"DeclarationInvoiceProductNCM"> | string
    code?: IntFilter<"DeclarationInvoiceProductNCM"> | number
    tax?: IntFilter<"DeclarationInvoiceProductNCM"> | number
    icms?: IntFilter<"DeclarationInvoiceProductNCM"> | number
    pis?: IntFilter<"DeclarationInvoiceProductNCM"> | number
    cofins?: IntFilter<"DeclarationInvoiceProductNCM"> | number
    ipi?: IntFilter<"DeclarationInvoiceProductNCM"> | number
    event?: EnumEventsFilter<"DeclarationInvoiceProductNCM"> | $Enums.Events
    enable?: BoolFilter<"DeclarationInvoiceProductNCM"> | boolean
    registeredAt?: DateTimeFilter<"DeclarationInvoiceProductNCM"> | Date | string
  }

  export type DeclarationInvoiceProductNCMOrderByWithRelationInput = {
    declarationInvoiceProductNCMId?: SortOrder
    product?: SortOrder
    id?: SortOrder
    code?: SortOrder
    tax?: SortOrder
    icms?: SortOrder
    pis?: SortOrder
    cofins?: SortOrder
    ipi?: SortOrder
    event?: SortOrder
    enable?: SortOrder
    registeredAt?: SortOrder
  }

  export type DeclarationInvoiceProductNCMWhereUniqueInput = Prisma.AtLeast<{
    declarationInvoiceProductNCMId?: string
    AND?: DeclarationInvoiceProductNCMWhereInput | DeclarationInvoiceProductNCMWhereInput[]
    OR?: DeclarationInvoiceProductNCMWhereInput[]
    NOT?: DeclarationInvoiceProductNCMWhereInput | DeclarationInvoiceProductNCMWhereInput[]
    product?: StringFilter<"DeclarationInvoiceProductNCM"> | string
    id?: StringFilter<"DeclarationInvoiceProductNCM"> | string
    code?: IntFilter<"DeclarationInvoiceProductNCM"> | number
    tax?: IntFilter<"DeclarationInvoiceProductNCM"> | number
    icms?: IntFilter<"DeclarationInvoiceProductNCM"> | number
    pis?: IntFilter<"DeclarationInvoiceProductNCM"> | number
    cofins?: IntFilter<"DeclarationInvoiceProductNCM"> | number
    ipi?: IntFilter<"DeclarationInvoiceProductNCM"> | number
    event?: EnumEventsFilter<"DeclarationInvoiceProductNCM"> | $Enums.Events
    enable?: BoolFilter<"DeclarationInvoiceProductNCM"> | boolean
    registeredAt?: DateTimeFilter<"DeclarationInvoiceProductNCM"> | Date | string
  }, "declarationInvoiceProductNCMId">

  export type DeclarationInvoiceProductNCMOrderByWithAggregationInput = {
    declarationInvoiceProductNCMId?: SortOrder
    product?: SortOrder
    id?: SortOrder
    code?: SortOrder
    tax?: SortOrder
    icms?: SortOrder
    pis?: SortOrder
    cofins?: SortOrder
    ipi?: SortOrder
    event?: SortOrder
    enable?: SortOrder
    registeredAt?: SortOrder
    _count?: DeclarationInvoiceProductNCMCountOrderByAggregateInput
    _avg?: DeclarationInvoiceProductNCMAvgOrderByAggregateInput
    _max?: DeclarationInvoiceProductNCMMaxOrderByAggregateInput
    _min?: DeclarationInvoiceProductNCMMinOrderByAggregateInput
    _sum?: DeclarationInvoiceProductNCMSumOrderByAggregateInput
  }

  export type DeclarationInvoiceProductNCMScalarWhereWithAggregatesInput = {
    AND?: DeclarationInvoiceProductNCMScalarWhereWithAggregatesInput | DeclarationInvoiceProductNCMScalarWhereWithAggregatesInput[]
    OR?: DeclarationInvoiceProductNCMScalarWhereWithAggregatesInput[]
    NOT?: DeclarationInvoiceProductNCMScalarWhereWithAggregatesInput | DeclarationInvoiceProductNCMScalarWhereWithAggregatesInput[]
    declarationInvoiceProductNCMId?: StringWithAggregatesFilter<"DeclarationInvoiceProductNCM"> | string
    product?: StringWithAggregatesFilter<"DeclarationInvoiceProductNCM"> | string
    id?: StringWithAggregatesFilter<"DeclarationInvoiceProductNCM"> | string
    code?: IntWithAggregatesFilter<"DeclarationInvoiceProductNCM"> | number
    tax?: IntWithAggregatesFilter<"DeclarationInvoiceProductNCM"> | number
    icms?: IntWithAggregatesFilter<"DeclarationInvoiceProductNCM"> | number
    pis?: IntWithAggregatesFilter<"DeclarationInvoiceProductNCM"> | number
    cofins?: IntWithAggregatesFilter<"DeclarationInvoiceProductNCM"> | number
    ipi?: IntWithAggregatesFilter<"DeclarationInvoiceProductNCM"> | number
    event?: EnumEventsWithAggregatesFilter<"DeclarationInvoiceProductNCM"> | $Enums.Events
    enable?: BoolWithAggregatesFilter<"DeclarationInvoiceProductNCM"> | boolean
    registeredAt?: DateTimeWithAggregatesFilter<"DeclarationInvoiceProductNCM"> | Date | string
  }

  export type NCMCreateInput = {
    ncmId?: string
    id: string
    code: number
    tax: number
    icms: number
    pis: number
    cofins: number
    ipi: number
    event?: $Enums.Events
    enable?: boolean
    registeredAt?: Date | string
  }

  export type NCMUncheckedCreateInput = {
    ncmId?: string
    id: string
    code: number
    tax: number
    icms: number
    pis: number
    cofins: number
    ipi: number
    event?: $Enums.Events
    enable?: boolean
    registeredAt?: Date | string
  }

  export type NCMUpdateInput = {
    ncmId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    code?: IntFieldUpdateOperationsInput | number
    tax?: IntFieldUpdateOperationsInput | number
    icms?: IntFieldUpdateOperationsInput | number
    pis?: IntFieldUpdateOperationsInput | number
    cofins?: IntFieldUpdateOperationsInput | number
    ipi?: IntFieldUpdateOperationsInput | number
    event?: EnumEventsFieldUpdateOperationsInput | $Enums.Events
    enable?: BoolFieldUpdateOperationsInput | boolean
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NCMUncheckedUpdateInput = {
    ncmId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    code?: IntFieldUpdateOperationsInput | number
    tax?: IntFieldUpdateOperationsInput | number
    icms?: IntFieldUpdateOperationsInput | number
    pis?: IntFieldUpdateOperationsInput | number
    cofins?: IntFieldUpdateOperationsInput | number
    ipi?: IntFieldUpdateOperationsInput | number
    event?: EnumEventsFieldUpdateOperationsInput | $Enums.Events
    enable?: BoolFieldUpdateOperationsInput | boolean
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NCMCreateManyInput = {
    ncmId?: string
    id: string
    code: number
    tax: number
    icms: number
    pis: number
    cofins: number
    ipi: number
    event?: $Enums.Events
    enable?: boolean
    registeredAt?: Date | string
  }

  export type NCMUpdateManyMutationInput = {
    ncmId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    code?: IntFieldUpdateOperationsInput | number
    tax?: IntFieldUpdateOperationsInput | number
    icms?: IntFieldUpdateOperationsInput | number
    pis?: IntFieldUpdateOperationsInput | number
    cofins?: IntFieldUpdateOperationsInput | number
    ipi?: IntFieldUpdateOperationsInput | number
    event?: EnumEventsFieldUpdateOperationsInput | $Enums.Events
    enable?: BoolFieldUpdateOperationsInput | boolean
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NCMUncheckedUpdateManyInput = {
    ncmId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    code?: IntFieldUpdateOperationsInput | number
    tax?: IntFieldUpdateOperationsInput | number
    icms?: IntFieldUpdateOperationsInput | number
    pis?: IntFieldUpdateOperationsInput | number
    cofins?: IntFieldUpdateOperationsInput | number
    ipi?: IntFieldUpdateOperationsInput | number
    event?: EnumEventsFieldUpdateOperationsInput | $Enums.Events
    enable?: BoolFieldUpdateOperationsInput | boolean
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    productId?: string
    id: string
    name?: string
    tid?: string
    description?: string
    weight: number
    length: number
    height: number
    width: number
    ncmId: string
    event?: $Enums.Events
    enable?: boolean
    registeredAt?: Date | string
  }

  export type ProductUncheckedCreateInput = {
    productId?: string
    id: string
    name?: string
    tid?: string
    description?: string
    weight: number
    length: number
    height: number
    width: number
    ncmId: string
    event?: $Enums.Events
    enable?: boolean
    registeredAt?: Date | string
  }

  export type ProductUpdateInput = {
    productId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tid?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    length?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    ncmId?: StringFieldUpdateOperationsInput | string
    event?: EnumEventsFieldUpdateOperationsInput | $Enums.Events
    enable?: BoolFieldUpdateOperationsInput | boolean
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateInput = {
    productId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tid?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    length?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    ncmId?: StringFieldUpdateOperationsInput | string
    event?: EnumEventsFieldUpdateOperationsInput | $Enums.Events
    enable?: BoolFieldUpdateOperationsInput | boolean
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateManyInput = {
    productId?: string
    id: string
    name?: string
    tid?: string
    description?: string
    weight: number
    length: number
    height: number
    width: number
    ncmId: string
    event?: $Enums.Events
    enable?: boolean
    registeredAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    productId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tid?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    length?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    ncmId?: StringFieldUpdateOperationsInput | string
    event?: EnumEventsFieldUpdateOperationsInput | $Enums.Events
    enable?: BoolFieldUpdateOperationsInput | boolean
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    productId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tid?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    length?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    ncmId?: StringFieldUpdateOperationsInput | string
    event?: EnumEventsFieldUpdateOperationsInput | $Enums.Events
    enable?: BoolFieldUpdateOperationsInput | boolean
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceCreateInput = {
    invoiceId?: string
    id: string
    registration: string
    createdAt?: Date | string
    quote: number
    event?: $Enums.Events
    enable?: boolean
    registeredAt?: Date | string
  }

  export type InvoiceUncheckedCreateInput = {
    invoiceId?: string
    id: string
    registration: string
    createdAt?: Date | string
    quote: number
    event?: $Enums.Events
    enable?: boolean
    registeredAt?: Date | string
  }

  export type InvoiceUpdateInput = {
    invoiceId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    registration?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quote?: IntFieldUpdateOperationsInput | number
    event?: EnumEventsFieldUpdateOperationsInput | $Enums.Events
    enable?: BoolFieldUpdateOperationsInput | boolean
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUncheckedUpdateInput = {
    invoiceId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    registration?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quote?: IntFieldUpdateOperationsInput | number
    event?: EnumEventsFieldUpdateOperationsInput | $Enums.Events
    enable?: BoolFieldUpdateOperationsInput | boolean
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceCreateManyInput = {
    invoiceId?: string
    id: string
    registration: string
    createdAt?: Date | string
    quote: number
    event?: $Enums.Events
    enable?: boolean
    registeredAt?: Date | string
  }

  export type InvoiceUpdateManyMutationInput = {
    invoiceId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    registration?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quote?: IntFieldUpdateOperationsInput | number
    event?: EnumEventsFieldUpdateOperationsInput | $Enums.Events
    enable?: BoolFieldUpdateOperationsInput | boolean
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUncheckedUpdateManyInput = {
    invoiceId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    registration?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quote?: IntFieldUpdateOperationsInput | number
    event?: EnumEventsFieldUpdateOperationsInput | $Enums.Events
    enable?: BoolFieldUpdateOperationsInput | boolean
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceProductCreateInput = {
    invoiceProductId?: string
    id: string
    productId: string
    invoiceId: string
    amount: number
    quantity: number
    event?: $Enums.Events
    enable?: boolean
    registeredAt?: Date | string
  }

  export type InvoiceProductUncheckedCreateInput = {
    invoiceProductId?: string
    id: string
    productId: string
    invoiceId: string
    amount: number
    quantity: number
    event?: $Enums.Events
    enable?: boolean
    registeredAt?: Date | string
  }

  export type InvoiceProductUpdateInput = {
    invoiceProductId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    event?: EnumEventsFieldUpdateOperationsInput | $Enums.Events
    enable?: BoolFieldUpdateOperationsInput | boolean
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceProductUncheckedUpdateInput = {
    invoiceProductId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    event?: EnumEventsFieldUpdateOperationsInput | $Enums.Events
    enable?: BoolFieldUpdateOperationsInput | boolean
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceProductCreateManyInput = {
    invoiceProductId?: string
    id: string
    productId: string
    invoiceId: string
    amount: number
    quantity: number
    event?: $Enums.Events
    enable?: boolean
    registeredAt?: Date | string
  }

  export type InvoiceProductUpdateManyMutationInput = {
    invoiceProductId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    event?: EnumEventsFieldUpdateOperationsInput | $Enums.Events
    enable?: BoolFieldUpdateOperationsInput | boolean
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceProductUncheckedUpdateManyInput = {
    invoiceProductId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    event?: EnumEventsFieldUpdateOperationsInput | $Enums.Events
    enable?: BoolFieldUpdateOperationsInput | boolean
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseCreateInput = {
    id?: string
    name: string
    useICMSBase?: boolean
    useCustomsBase?: boolean
    allocationMethod: $Enums.AllocationMethod
    currency: $Enums.Currency
  }

  export type ExpenseUncheckedCreateInput = {
    id?: string
    name: string
    useICMSBase?: boolean
    useCustomsBase?: boolean
    allocationMethod: $Enums.AllocationMethod
    currency: $Enums.Currency
  }

  export type ExpenseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    useICMSBase?: BoolFieldUpdateOperationsInput | boolean
    useCustomsBase?: BoolFieldUpdateOperationsInput | boolean
    allocationMethod?: EnumAllocationMethodFieldUpdateOperationsInput | $Enums.AllocationMethod
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
  }

  export type ExpenseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    useICMSBase?: BoolFieldUpdateOperationsInput | boolean
    useCustomsBase?: BoolFieldUpdateOperationsInput | boolean
    allocationMethod?: EnumAllocationMethodFieldUpdateOperationsInput | $Enums.AllocationMethod
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
  }

  export type ExpenseCreateManyInput = {
    id?: string
    name: string
    useICMSBase?: boolean
    useCustomsBase?: boolean
    allocationMethod: $Enums.AllocationMethod
    currency: $Enums.Currency
  }

  export type ExpenseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    useICMSBase?: BoolFieldUpdateOperationsInput | boolean
    useCustomsBase?: BoolFieldUpdateOperationsInput | boolean
    allocationMethod?: EnumAllocationMethodFieldUpdateOperationsInput | $Enums.AllocationMethod
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
  }

  export type ExpenseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    useICMSBase?: BoolFieldUpdateOperationsInput | boolean
    useCustomsBase?: BoolFieldUpdateOperationsInput | boolean
    allocationMethod?: EnumAllocationMethodFieldUpdateOperationsInput | $Enums.AllocationMethod
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
  }

  export type DeclarationCreateInput = {
    declarationId?: string
    id: string
    registration: string
    quote: number
    createdAt?: Date | string
    event?: $Enums.Events
    enable?: boolean
    registeredAt?: Date | string
  }

  export type DeclarationUncheckedCreateInput = {
    declarationId?: string
    id: string
    registration: string
    quote: number
    createdAt?: Date | string
    event?: $Enums.Events
    enable?: boolean
    registeredAt?: Date | string
  }

  export type DeclarationUpdateInput = {
    declarationId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    registration?: StringFieldUpdateOperationsInput | string
    quote?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EnumEventsFieldUpdateOperationsInput | $Enums.Events
    enable?: BoolFieldUpdateOperationsInput | boolean
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeclarationUncheckedUpdateInput = {
    declarationId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    registration?: StringFieldUpdateOperationsInput | string
    quote?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EnumEventsFieldUpdateOperationsInput | $Enums.Events
    enable?: BoolFieldUpdateOperationsInput | boolean
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeclarationCreateManyInput = {
    declarationId?: string
    id: string
    registration: string
    quote: number
    createdAt?: Date | string
    event?: $Enums.Events
    enable?: boolean
    registeredAt?: Date | string
  }

  export type DeclarationUpdateManyMutationInput = {
    declarationId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    registration?: StringFieldUpdateOperationsInput | string
    quote?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EnumEventsFieldUpdateOperationsInput | $Enums.Events
    enable?: BoolFieldUpdateOperationsInput | boolean
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeclarationUncheckedUpdateManyInput = {
    declarationId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    registration?: StringFieldUpdateOperationsInput | string
    quote?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EnumEventsFieldUpdateOperationsInput | $Enums.Events
    enable?: BoolFieldUpdateOperationsInput | boolean
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeclarationExpenseCreateInput = {
    declarationExpenseId?: string
    declaration: string
    id: string
    name: string
    useICMSBase?: boolean
    useCustomsBase?: boolean
    allocationMethod: $Enums.AllocationMethod
    currency: $Enums.Currency
    amount?: number
    event?: $Enums.Events
    enable?: boolean
    registeredAt?: Date | string
  }

  export type DeclarationExpenseUncheckedCreateInput = {
    declarationExpenseId?: string
    declaration: string
    id: string
    name: string
    useICMSBase?: boolean
    useCustomsBase?: boolean
    allocationMethod: $Enums.AllocationMethod
    currency: $Enums.Currency
    amount?: number
    event?: $Enums.Events
    enable?: boolean
    registeredAt?: Date | string
  }

  export type DeclarationExpenseUpdateInput = {
    declarationExpenseId?: StringFieldUpdateOperationsInput | string
    declaration?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    useICMSBase?: BoolFieldUpdateOperationsInput | boolean
    useCustomsBase?: BoolFieldUpdateOperationsInput | boolean
    allocationMethod?: EnumAllocationMethodFieldUpdateOperationsInput | $Enums.AllocationMethod
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    amount?: IntFieldUpdateOperationsInput | number
    event?: EnumEventsFieldUpdateOperationsInput | $Enums.Events
    enable?: BoolFieldUpdateOperationsInput | boolean
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeclarationExpenseUncheckedUpdateInput = {
    declarationExpenseId?: StringFieldUpdateOperationsInput | string
    declaration?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    useICMSBase?: BoolFieldUpdateOperationsInput | boolean
    useCustomsBase?: BoolFieldUpdateOperationsInput | boolean
    allocationMethod?: EnumAllocationMethodFieldUpdateOperationsInput | $Enums.AllocationMethod
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    amount?: IntFieldUpdateOperationsInput | number
    event?: EnumEventsFieldUpdateOperationsInput | $Enums.Events
    enable?: BoolFieldUpdateOperationsInput | boolean
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeclarationExpenseCreateManyInput = {
    declarationExpenseId?: string
    declaration: string
    id: string
    name: string
    useICMSBase?: boolean
    useCustomsBase?: boolean
    allocationMethod: $Enums.AllocationMethod
    currency: $Enums.Currency
    amount?: number
    event?: $Enums.Events
    enable?: boolean
    registeredAt?: Date | string
  }

  export type DeclarationExpenseUpdateManyMutationInput = {
    declarationExpenseId?: StringFieldUpdateOperationsInput | string
    declaration?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    useICMSBase?: BoolFieldUpdateOperationsInput | boolean
    useCustomsBase?: BoolFieldUpdateOperationsInput | boolean
    allocationMethod?: EnumAllocationMethodFieldUpdateOperationsInput | $Enums.AllocationMethod
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    amount?: IntFieldUpdateOperationsInput | number
    event?: EnumEventsFieldUpdateOperationsInput | $Enums.Events
    enable?: BoolFieldUpdateOperationsInput | boolean
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeclarationExpenseUncheckedUpdateManyInput = {
    declarationExpenseId?: StringFieldUpdateOperationsInput | string
    declaration?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    useICMSBase?: BoolFieldUpdateOperationsInput | boolean
    useCustomsBase?: BoolFieldUpdateOperationsInput | boolean
    allocationMethod?: EnumAllocationMethodFieldUpdateOperationsInput | $Enums.AllocationMethod
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    amount?: IntFieldUpdateOperationsInput | number
    event?: EnumEventsFieldUpdateOperationsInput | $Enums.Events
    enable?: BoolFieldUpdateOperationsInput | boolean
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeclarationInvoiceCreateInput = {
    declarationInvoiceId?: string
    declaration: string
    id: string
    registration: string
    createdAt?: Date | string
    quote: number
    event?: $Enums.Events
    enable?: boolean
    registeredAt?: Date | string
  }

  export type DeclarationInvoiceUncheckedCreateInput = {
    declarationInvoiceId?: string
    declaration: string
    id: string
    registration: string
    createdAt?: Date | string
    quote: number
    event?: $Enums.Events
    enable?: boolean
    registeredAt?: Date | string
  }

  export type DeclarationInvoiceUpdateInput = {
    declarationInvoiceId?: StringFieldUpdateOperationsInput | string
    declaration?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    registration?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quote?: IntFieldUpdateOperationsInput | number
    event?: EnumEventsFieldUpdateOperationsInput | $Enums.Events
    enable?: BoolFieldUpdateOperationsInput | boolean
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeclarationInvoiceUncheckedUpdateInput = {
    declarationInvoiceId?: StringFieldUpdateOperationsInput | string
    declaration?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    registration?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quote?: IntFieldUpdateOperationsInput | number
    event?: EnumEventsFieldUpdateOperationsInput | $Enums.Events
    enable?: BoolFieldUpdateOperationsInput | boolean
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeclarationInvoiceCreateManyInput = {
    declarationInvoiceId?: string
    declaration: string
    id: string
    registration: string
    createdAt?: Date | string
    quote: number
    event?: $Enums.Events
    enable?: boolean
    registeredAt?: Date | string
  }

  export type DeclarationInvoiceUpdateManyMutationInput = {
    declarationInvoiceId?: StringFieldUpdateOperationsInput | string
    declaration?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    registration?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quote?: IntFieldUpdateOperationsInput | number
    event?: EnumEventsFieldUpdateOperationsInput | $Enums.Events
    enable?: BoolFieldUpdateOperationsInput | boolean
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeclarationInvoiceUncheckedUpdateManyInput = {
    declarationInvoiceId?: StringFieldUpdateOperationsInput | string
    declaration?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    registration?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quote?: IntFieldUpdateOperationsInput | number
    event?: EnumEventsFieldUpdateOperationsInput | $Enums.Events
    enable?: BoolFieldUpdateOperationsInput | boolean
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeclarationInvoiceProductCreateInput = {
    declarationInvoiceProductId?: string
    invoice: string
    id: string
    productId: string
    name?: string
    tid?: string
    description?: string
    weight: number
    length: number
    height: number
    width: number
    amount: number
    quantity: number
    event?: $Enums.Events
    enable?: boolean
    registeredAt?: Date | string
  }

  export type DeclarationInvoiceProductUncheckedCreateInput = {
    declarationInvoiceProductId?: string
    invoice: string
    id: string
    productId: string
    name?: string
    tid?: string
    description?: string
    weight: number
    length: number
    height: number
    width: number
    amount: number
    quantity: number
    event?: $Enums.Events
    enable?: boolean
    registeredAt?: Date | string
  }

  export type DeclarationInvoiceProductUpdateInput = {
    declarationInvoiceProductId?: StringFieldUpdateOperationsInput | string
    invoice?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tid?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    length?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    event?: EnumEventsFieldUpdateOperationsInput | $Enums.Events
    enable?: BoolFieldUpdateOperationsInput | boolean
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeclarationInvoiceProductUncheckedUpdateInput = {
    declarationInvoiceProductId?: StringFieldUpdateOperationsInput | string
    invoice?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tid?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    length?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    event?: EnumEventsFieldUpdateOperationsInput | $Enums.Events
    enable?: BoolFieldUpdateOperationsInput | boolean
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeclarationInvoiceProductCreateManyInput = {
    declarationInvoiceProductId?: string
    invoice: string
    id: string
    productId: string
    name?: string
    tid?: string
    description?: string
    weight: number
    length: number
    height: number
    width: number
    amount: number
    quantity: number
    event?: $Enums.Events
    enable?: boolean
    registeredAt?: Date | string
  }

  export type DeclarationInvoiceProductUpdateManyMutationInput = {
    declarationInvoiceProductId?: StringFieldUpdateOperationsInput | string
    invoice?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tid?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    length?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    event?: EnumEventsFieldUpdateOperationsInput | $Enums.Events
    enable?: BoolFieldUpdateOperationsInput | boolean
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeclarationInvoiceProductUncheckedUpdateManyInput = {
    declarationInvoiceProductId?: StringFieldUpdateOperationsInput | string
    invoice?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tid?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    length?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    event?: EnumEventsFieldUpdateOperationsInput | $Enums.Events
    enable?: BoolFieldUpdateOperationsInput | boolean
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeclarationInvoiceProductNCMCreateInput = {
    declarationInvoiceProductNCMId?: string
    product: string
    id: string
    code: number
    tax: number
    icms: number
    pis: number
    cofins: number
    ipi: number
    event?: $Enums.Events
    enable?: boolean
    registeredAt?: Date | string
  }

  export type DeclarationInvoiceProductNCMUncheckedCreateInput = {
    declarationInvoiceProductNCMId?: string
    product: string
    id: string
    code: number
    tax: number
    icms: number
    pis: number
    cofins: number
    ipi: number
    event?: $Enums.Events
    enable?: boolean
    registeredAt?: Date | string
  }

  export type DeclarationInvoiceProductNCMUpdateInput = {
    declarationInvoiceProductNCMId?: StringFieldUpdateOperationsInput | string
    product?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    code?: IntFieldUpdateOperationsInput | number
    tax?: IntFieldUpdateOperationsInput | number
    icms?: IntFieldUpdateOperationsInput | number
    pis?: IntFieldUpdateOperationsInput | number
    cofins?: IntFieldUpdateOperationsInput | number
    ipi?: IntFieldUpdateOperationsInput | number
    event?: EnumEventsFieldUpdateOperationsInput | $Enums.Events
    enable?: BoolFieldUpdateOperationsInput | boolean
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeclarationInvoiceProductNCMUncheckedUpdateInput = {
    declarationInvoiceProductNCMId?: StringFieldUpdateOperationsInput | string
    product?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    code?: IntFieldUpdateOperationsInput | number
    tax?: IntFieldUpdateOperationsInput | number
    icms?: IntFieldUpdateOperationsInput | number
    pis?: IntFieldUpdateOperationsInput | number
    cofins?: IntFieldUpdateOperationsInput | number
    ipi?: IntFieldUpdateOperationsInput | number
    event?: EnumEventsFieldUpdateOperationsInput | $Enums.Events
    enable?: BoolFieldUpdateOperationsInput | boolean
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeclarationInvoiceProductNCMCreateManyInput = {
    declarationInvoiceProductNCMId?: string
    product: string
    id: string
    code: number
    tax: number
    icms: number
    pis: number
    cofins: number
    ipi: number
    event?: $Enums.Events
    enable?: boolean
    registeredAt?: Date | string
  }

  export type DeclarationInvoiceProductNCMUpdateManyMutationInput = {
    declarationInvoiceProductNCMId?: StringFieldUpdateOperationsInput | string
    product?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    code?: IntFieldUpdateOperationsInput | number
    tax?: IntFieldUpdateOperationsInput | number
    icms?: IntFieldUpdateOperationsInput | number
    pis?: IntFieldUpdateOperationsInput | number
    cofins?: IntFieldUpdateOperationsInput | number
    ipi?: IntFieldUpdateOperationsInput | number
    event?: EnumEventsFieldUpdateOperationsInput | $Enums.Events
    enable?: BoolFieldUpdateOperationsInput | boolean
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeclarationInvoiceProductNCMUncheckedUpdateManyInput = {
    declarationInvoiceProductNCMId?: StringFieldUpdateOperationsInput | string
    product?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    code?: IntFieldUpdateOperationsInput | number
    tax?: IntFieldUpdateOperationsInput | number
    icms?: IntFieldUpdateOperationsInput | number
    pis?: IntFieldUpdateOperationsInput | number
    cofins?: IntFieldUpdateOperationsInput | number
    ipi?: IntFieldUpdateOperationsInput | number
    event?: EnumEventsFieldUpdateOperationsInput | $Enums.Events
    enable?: BoolFieldUpdateOperationsInput | boolean
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumEventsFilter<$PrismaModel = never> = {
    equals?: $Enums.Events | EnumEventsFieldRefInput<$PrismaModel>
    in?: $Enums.Events[] | ListEnumEventsFieldRefInput<$PrismaModel>
    notIn?: $Enums.Events[] | ListEnumEventsFieldRefInput<$PrismaModel>
    not?: NestedEnumEventsFilter<$PrismaModel> | $Enums.Events
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NCMCountOrderByAggregateInput = {
    ncmId?: SortOrder
    id?: SortOrder
    code?: SortOrder
    tax?: SortOrder
    icms?: SortOrder
    pis?: SortOrder
    cofins?: SortOrder
    ipi?: SortOrder
    event?: SortOrder
    enable?: SortOrder
    registeredAt?: SortOrder
  }

  export type NCMAvgOrderByAggregateInput = {
    code?: SortOrder
    tax?: SortOrder
    icms?: SortOrder
    pis?: SortOrder
    cofins?: SortOrder
    ipi?: SortOrder
  }

  export type NCMMaxOrderByAggregateInput = {
    ncmId?: SortOrder
    id?: SortOrder
    code?: SortOrder
    tax?: SortOrder
    icms?: SortOrder
    pis?: SortOrder
    cofins?: SortOrder
    ipi?: SortOrder
    event?: SortOrder
    enable?: SortOrder
    registeredAt?: SortOrder
  }

  export type NCMMinOrderByAggregateInput = {
    ncmId?: SortOrder
    id?: SortOrder
    code?: SortOrder
    tax?: SortOrder
    icms?: SortOrder
    pis?: SortOrder
    cofins?: SortOrder
    ipi?: SortOrder
    event?: SortOrder
    enable?: SortOrder
    registeredAt?: SortOrder
  }

  export type NCMSumOrderByAggregateInput = {
    code?: SortOrder
    tax?: SortOrder
    icms?: SortOrder
    pis?: SortOrder
    cofins?: SortOrder
    ipi?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumEventsWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Events | EnumEventsFieldRefInput<$PrismaModel>
    in?: $Enums.Events[] | ListEnumEventsFieldRefInput<$PrismaModel>
    notIn?: $Enums.Events[] | ListEnumEventsFieldRefInput<$PrismaModel>
    not?: NestedEnumEventsWithAggregatesFilter<$PrismaModel> | $Enums.Events
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventsFilter<$PrismaModel>
    _max?: NestedEnumEventsFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ProductCountOrderByAggregateInput = {
    productId?: SortOrder
    id?: SortOrder
    name?: SortOrder
    tid?: SortOrder
    description?: SortOrder
    weight?: SortOrder
    length?: SortOrder
    height?: SortOrder
    width?: SortOrder
    ncmId?: SortOrder
    event?: SortOrder
    enable?: SortOrder
    registeredAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    weight?: SortOrder
    length?: SortOrder
    height?: SortOrder
    width?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    productId?: SortOrder
    id?: SortOrder
    name?: SortOrder
    tid?: SortOrder
    description?: SortOrder
    weight?: SortOrder
    length?: SortOrder
    height?: SortOrder
    width?: SortOrder
    ncmId?: SortOrder
    event?: SortOrder
    enable?: SortOrder
    registeredAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    productId?: SortOrder
    id?: SortOrder
    name?: SortOrder
    tid?: SortOrder
    description?: SortOrder
    weight?: SortOrder
    length?: SortOrder
    height?: SortOrder
    width?: SortOrder
    ncmId?: SortOrder
    event?: SortOrder
    enable?: SortOrder
    registeredAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    weight?: SortOrder
    length?: SortOrder
    height?: SortOrder
    width?: SortOrder
  }

  export type InvoiceCountOrderByAggregateInput = {
    invoiceId?: SortOrder
    id?: SortOrder
    registration?: SortOrder
    createdAt?: SortOrder
    quote?: SortOrder
    event?: SortOrder
    enable?: SortOrder
    registeredAt?: SortOrder
  }

  export type InvoiceAvgOrderByAggregateInput = {
    quote?: SortOrder
  }

  export type InvoiceMaxOrderByAggregateInput = {
    invoiceId?: SortOrder
    id?: SortOrder
    registration?: SortOrder
    createdAt?: SortOrder
    quote?: SortOrder
    event?: SortOrder
    enable?: SortOrder
    registeredAt?: SortOrder
  }

  export type InvoiceMinOrderByAggregateInput = {
    invoiceId?: SortOrder
    id?: SortOrder
    registration?: SortOrder
    createdAt?: SortOrder
    quote?: SortOrder
    event?: SortOrder
    enable?: SortOrder
    registeredAt?: SortOrder
  }

  export type InvoiceSumOrderByAggregateInput = {
    quote?: SortOrder
  }

  export type InvoiceProductCountOrderByAggregateInput = {
    invoiceProductId?: SortOrder
    id?: SortOrder
    productId?: SortOrder
    invoiceId?: SortOrder
    amount?: SortOrder
    quantity?: SortOrder
    event?: SortOrder
    enable?: SortOrder
    registeredAt?: SortOrder
  }

  export type InvoiceProductAvgOrderByAggregateInput = {
    amount?: SortOrder
    quantity?: SortOrder
  }

  export type InvoiceProductMaxOrderByAggregateInput = {
    invoiceProductId?: SortOrder
    id?: SortOrder
    productId?: SortOrder
    invoiceId?: SortOrder
    amount?: SortOrder
    quantity?: SortOrder
    event?: SortOrder
    enable?: SortOrder
    registeredAt?: SortOrder
  }

  export type InvoiceProductMinOrderByAggregateInput = {
    invoiceProductId?: SortOrder
    id?: SortOrder
    productId?: SortOrder
    invoiceId?: SortOrder
    amount?: SortOrder
    quantity?: SortOrder
    event?: SortOrder
    enable?: SortOrder
    registeredAt?: SortOrder
  }

  export type InvoiceProductSumOrderByAggregateInput = {
    amount?: SortOrder
    quantity?: SortOrder
  }

  export type EnumAllocationMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.AllocationMethod | EnumAllocationMethodFieldRefInput<$PrismaModel>
    in?: $Enums.AllocationMethod[] | ListEnumAllocationMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.AllocationMethod[] | ListEnumAllocationMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumAllocationMethodFilter<$PrismaModel> | $Enums.AllocationMethod
  }

  export type EnumCurrencyFilter<$PrismaModel = never> = {
    equals?: $Enums.Currency | EnumCurrencyFieldRefInput<$PrismaModel>
    in?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyFilter<$PrismaModel> | $Enums.Currency
  }

  export type ExpenseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    useICMSBase?: SortOrder
    useCustomsBase?: SortOrder
    allocationMethod?: SortOrder
    currency?: SortOrder
  }

  export type ExpenseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    useICMSBase?: SortOrder
    useCustomsBase?: SortOrder
    allocationMethod?: SortOrder
    currency?: SortOrder
  }

  export type ExpenseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    useICMSBase?: SortOrder
    useCustomsBase?: SortOrder
    allocationMethod?: SortOrder
    currency?: SortOrder
  }

  export type EnumAllocationMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AllocationMethod | EnumAllocationMethodFieldRefInput<$PrismaModel>
    in?: $Enums.AllocationMethod[] | ListEnumAllocationMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.AllocationMethod[] | ListEnumAllocationMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumAllocationMethodWithAggregatesFilter<$PrismaModel> | $Enums.AllocationMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAllocationMethodFilter<$PrismaModel>
    _max?: NestedEnumAllocationMethodFilter<$PrismaModel>
  }

  export type EnumCurrencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Currency | EnumCurrencyFieldRefInput<$PrismaModel>
    in?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyWithAggregatesFilter<$PrismaModel> | $Enums.Currency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCurrencyFilter<$PrismaModel>
    _max?: NestedEnumCurrencyFilter<$PrismaModel>
  }

  export type DeclarationCountOrderByAggregateInput = {
    declarationId?: SortOrder
    id?: SortOrder
    registration?: SortOrder
    quote?: SortOrder
    createdAt?: SortOrder
    event?: SortOrder
    enable?: SortOrder
    registeredAt?: SortOrder
  }

  export type DeclarationAvgOrderByAggregateInput = {
    quote?: SortOrder
  }

  export type DeclarationMaxOrderByAggregateInput = {
    declarationId?: SortOrder
    id?: SortOrder
    registration?: SortOrder
    quote?: SortOrder
    createdAt?: SortOrder
    event?: SortOrder
    enable?: SortOrder
    registeredAt?: SortOrder
  }

  export type DeclarationMinOrderByAggregateInput = {
    declarationId?: SortOrder
    id?: SortOrder
    registration?: SortOrder
    quote?: SortOrder
    createdAt?: SortOrder
    event?: SortOrder
    enable?: SortOrder
    registeredAt?: SortOrder
  }

  export type DeclarationSumOrderByAggregateInput = {
    quote?: SortOrder
  }

  export type DeclarationExpenseCountOrderByAggregateInput = {
    declarationExpenseId?: SortOrder
    declaration?: SortOrder
    id?: SortOrder
    name?: SortOrder
    useICMSBase?: SortOrder
    useCustomsBase?: SortOrder
    allocationMethod?: SortOrder
    currency?: SortOrder
    amount?: SortOrder
    event?: SortOrder
    enable?: SortOrder
    registeredAt?: SortOrder
  }

  export type DeclarationExpenseAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type DeclarationExpenseMaxOrderByAggregateInput = {
    declarationExpenseId?: SortOrder
    declaration?: SortOrder
    id?: SortOrder
    name?: SortOrder
    useICMSBase?: SortOrder
    useCustomsBase?: SortOrder
    allocationMethod?: SortOrder
    currency?: SortOrder
    amount?: SortOrder
    event?: SortOrder
    enable?: SortOrder
    registeredAt?: SortOrder
  }

  export type DeclarationExpenseMinOrderByAggregateInput = {
    declarationExpenseId?: SortOrder
    declaration?: SortOrder
    id?: SortOrder
    name?: SortOrder
    useICMSBase?: SortOrder
    useCustomsBase?: SortOrder
    allocationMethod?: SortOrder
    currency?: SortOrder
    amount?: SortOrder
    event?: SortOrder
    enable?: SortOrder
    registeredAt?: SortOrder
  }

  export type DeclarationExpenseSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type DeclarationInvoiceCountOrderByAggregateInput = {
    declarationInvoiceId?: SortOrder
    declaration?: SortOrder
    id?: SortOrder
    registration?: SortOrder
    createdAt?: SortOrder
    quote?: SortOrder
    event?: SortOrder
    enable?: SortOrder
    registeredAt?: SortOrder
  }

  export type DeclarationInvoiceAvgOrderByAggregateInput = {
    quote?: SortOrder
  }

  export type DeclarationInvoiceMaxOrderByAggregateInput = {
    declarationInvoiceId?: SortOrder
    declaration?: SortOrder
    id?: SortOrder
    registration?: SortOrder
    createdAt?: SortOrder
    quote?: SortOrder
    event?: SortOrder
    enable?: SortOrder
    registeredAt?: SortOrder
  }

  export type DeclarationInvoiceMinOrderByAggregateInput = {
    declarationInvoiceId?: SortOrder
    declaration?: SortOrder
    id?: SortOrder
    registration?: SortOrder
    createdAt?: SortOrder
    quote?: SortOrder
    event?: SortOrder
    enable?: SortOrder
    registeredAt?: SortOrder
  }

  export type DeclarationInvoiceSumOrderByAggregateInput = {
    quote?: SortOrder
  }

  export type DeclarationInvoiceProductCountOrderByAggregateInput = {
    declarationInvoiceProductId?: SortOrder
    invoice?: SortOrder
    id?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    tid?: SortOrder
    description?: SortOrder
    weight?: SortOrder
    length?: SortOrder
    height?: SortOrder
    width?: SortOrder
    amount?: SortOrder
    quantity?: SortOrder
    event?: SortOrder
    enable?: SortOrder
    registeredAt?: SortOrder
  }

  export type DeclarationInvoiceProductAvgOrderByAggregateInput = {
    weight?: SortOrder
    length?: SortOrder
    height?: SortOrder
    width?: SortOrder
    amount?: SortOrder
    quantity?: SortOrder
  }

  export type DeclarationInvoiceProductMaxOrderByAggregateInput = {
    declarationInvoiceProductId?: SortOrder
    invoice?: SortOrder
    id?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    tid?: SortOrder
    description?: SortOrder
    weight?: SortOrder
    length?: SortOrder
    height?: SortOrder
    width?: SortOrder
    amount?: SortOrder
    quantity?: SortOrder
    event?: SortOrder
    enable?: SortOrder
    registeredAt?: SortOrder
  }

  export type DeclarationInvoiceProductMinOrderByAggregateInput = {
    declarationInvoiceProductId?: SortOrder
    invoice?: SortOrder
    id?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    tid?: SortOrder
    description?: SortOrder
    weight?: SortOrder
    length?: SortOrder
    height?: SortOrder
    width?: SortOrder
    amount?: SortOrder
    quantity?: SortOrder
    event?: SortOrder
    enable?: SortOrder
    registeredAt?: SortOrder
  }

  export type DeclarationInvoiceProductSumOrderByAggregateInput = {
    weight?: SortOrder
    length?: SortOrder
    height?: SortOrder
    width?: SortOrder
    amount?: SortOrder
    quantity?: SortOrder
  }

  export type DeclarationInvoiceProductNCMCountOrderByAggregateInput = {
    declarationInvoiceProductNCMId?: SortOrder
    product?: SortOrder
    id?: SortOrder
    code?: SortOrder
    tax?: SortOrder
    icms?: SortOrder
    pis?: SortOrder
    cofins?: SortOrder
    ipi?: SortOrder
    event?: SortOrder
    enable?: SortOrder
    registeredAt?: SortOrder
  }

  export type DeclarationInvoiceProductNCMAvgOrderByAggregateInput = {
    code?: SortOrder
    tax?: SortOrder
    icms?: SortOrder
    pis?: SortOrder
    cofins?: SortOrder
    ipi?: SortOrder
  }

  export type DeclarationInvoiceProductNCMMaxOrderByAggregateInput = {
    declarationInvoiceProductNCMId?: SortOrder
    product?: SortOrder
    id?: SortOrder
    code?: SortOrder
    tax?: SortOrder
    icms?: SortOrder
    pis?: SortOrder
    cofins?: SortOrder
    ipi?: SortOrder
    event?: SortOrder
    enable?: SortOrder
    registeredAt?: SortOrder
  }

  export type DeclarationInvoiceProductNCMMinOrderByAggregateInput = {
    declarationInvoiceProductNCMId?: SortOrder
    product?: SortOrder
    id?: SortOrder
    code?: SortOrder
    tax?: SortOrder
    icms?: SortOrder
    pis?: SortOrder
    cofins?: SortOrder
    ipi?: SortOrder
    event?: SortOrder
    enable?: SortOrder
    registeredAt?: SortOrder
  }

  export type DeclarationInvoiceProductNCMSumOrderByAggregateInput = {
    code?: SortOrder
    tax?: SortOrder
    icms?: SortOrder
    pis?: SortOrder
    cofins?: SortOrder
    ipi?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumEventsFieldUpdateOperationsInput = {
    set?: $Enums.Events
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumAllocationMethodFieldUpdateOperationsInput = {
    set?: $Enums.AllocationMethod
  }

  export type EnumCurrencyFieldUpdateOperationsInput = {
    set?: $Enums.Currency
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumEventsFilter<$PrismaModel = never> = {
    equals?: $Enums.Events | EnumEventsFieldRefInput<$PrismaModel>
    in?: $Enums.Events[] | ListEnumEventsFieldRefInput<$PrismaModel>
    notIn?: $Enums.Events[] | ListEnumEventsFieldRefInput<$PrismaModel>
    not?: NestedEnumEventsFilter<$PrismaModel> | $Enums.Events
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumEventsWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Events | EnumEventsFieldRefInput<$PrismaModel>
    in?: $Enums.Events[] | ListEnumEventsFieldRefInput<$PrismaModel>
    notIn?: $Enums.Events[] | ListEnumEventsFieldRefInput<$PrismaModel>
    not?: NestedEnumEventsWithAggregatesFilter<$PrismaModel> | $Enums.Events
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventsFilter<$PrismaModel>
    _max?: NestedEnumEventsFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumAllocationMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.AllocationMethod | EnumAllocationMethodFieldRefInput<$PrismaModel>
    in?: $Enums.AllocationMethod[] | ListEnumAllocationMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.AllocationMethod[] | ListEnumAllocationMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumAllocationMethodFilter<$PrismaModel> | $Enums.AllocationMethod
  }

  export type NestedEnumCurrencyFilter<$PrismaModel = never> = {
    equals?: $Enums.Currency | EnumCurrencyFieldRefInput<$PrismaModel>
    in?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyFilter<$PrismaModel> | $Enums.Currency
  }

  export type NestedEnumAllocationMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AllocationMethod | EnumAllocationMethodFieldRefInput<$PrismaModel>
    in?: $Enums.AllocationMethod[] | ListEnumAllocationMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.AllocationMethod[] | ListEnumAllocationMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumAllocationMethodWithAggregatesFilter<$PrismaModel> | $Enums.AllocationMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAllocationMethodFilter<$PrismaModel>
    _max?: NestedEnumAllocationMethodFilter<$PrismaModel>
  }

  export type NestedEnumCurrencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Currency | EnumCurrencyFieldRefInput<$PrismaModel>
    in?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyWithAggregatesFilter<$PrismaModel> | $Enums.Currency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCurrencyFilter<$PrismaModel>
    _max?: NestedEnumCurrencyFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}