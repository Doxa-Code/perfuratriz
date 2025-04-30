
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
 * Model ProductNCM
 * 
 */
export type ProductNCM = $Result.DefaultSelection<Prisma.$ProductNCMPayload>
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
 * Enums
 */
export namespace $Enums {
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
   * `prisma.productNCM`: Exposes CRUD operations for the **ProductNCM** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductNCMS
    * const productNCMS = await prisma.productNCM.findMany()
    * ```
    */
  get productNCM(): Prisma.ProductNCMDelegate<ExtArgs, ClientOptions>;

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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    ProductNCM: 'ProductNCM',
    Invoice: 'Invoice',
    InvoiceProduct: 'InvoiceProduct',
    Expense: 'Expense'
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
      modelProps: "nCM" | "product" | "productNCM" | "invoice" | "invoiceProduct" | "expense"
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
      ProductNCM: {
        payload: Prisma.$ProductNCMPayload<ExtArgs>
        fields: Prisma.ProductNCMFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductNCMFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductNCMPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductNCMFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductNCMPayload>
          }
          findFirst: {
            args: Prisma.ProductNCMFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductNCMPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductNCMFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductNCMPayload>
          }
          findMany: {
            args: Prisma.ProductNCMFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductNCMPayload>[]
          }
          create: {
            args: Prisma.ProductNCMCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductNCMPayload>
          }
          createMany: {
            args: Prisma.ProductNCMCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductNCMCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductNCMPayload>[]
          }
          delete: {
            args: Prisma.ProductNCMDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductNCMPayload>
          }
          update: {
            args: Prisma.ProductNCMUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductNCMPayload>
          }
          deleteMany: {
            args: Prisma.ProductNCMDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductNCMUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductNCMUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductNCMPayload>[]
          }
          upsert: {
            args: Prisma.ProductNCMUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductNCMPayload>
          }
          aggregate: {
            args: Prisma.ProductNCMAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductNCM>
          }
          groupBy: {
            args: Prisma.ProductNCMGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductNCMGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductNCMCountArgs<ExtArgs>
            result: $Utils.Optional<ProductNCMCountAggregateOutputType> | number
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
    productNCM?: ProductNCMOmit
    invoice?: InvoiceOmit
    invoiceProduct?: InvoiceProductOmit
    expense?: ExpenseOmit
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
   * Count Type ProductNCMCountOutputType
   */

  export type ProductNCMCountOutputType = {
    product: number
  }

  export type ProductNCMCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductNCMCountOutputTypeCountProductArgs
  }

  // Custom InputTypes
  /**
   * ProductNCMCountOutputType without action
   */
  export type ProductNCMCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductNCMCountOutputType
     */
    select?: ProductNCMCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductNCMCountOutputType without action
   */
  export type ProductNCMCountOutputTypeCountProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type InvoiceCountOutputType
   */

  export type InvoiceCountOutputType = {
    products: number
  }

  export type InvoiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | InvoiceCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * InvoiceCountOutputType without action
   */
  export type InvoiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceCountOutputType
     */
    select?: InvoiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InvoiceCountOutputType without action
   */
  export type InvoiceCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceProductWhereInput
  }


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
    id: string | null
    code: number | null
    tax: number | null
    icms: number | null
    pis: number | null
    cofins: number | null
    ipi: number | null
  }

  export type NCMMaxAggregateOutputType = {
    id: string | null
    code: number | null
    tax: number | null
    icms: number | null
    pis: number | null
    cofins: number | null
    ipi: number | null
  }

  export type NCMCountAggregateOutputType = {
    id: number
    code: number
    tax: number
    icms: number
    pis: number
    cofins: number
    ipi: number
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
    id?: true
    code?: true
    tax?: true
    icms?: true
    pis?: true
    cofins?: true
    ipi?: true
  }

  export type NCMMaxAggregateInputType = {
    id?: true
    code?: true
    tax?: true
    icms?: true
    pis?: true
    cofins?: true
    ipi?: true
  }

  export type NCMCountAggregateInputType = {
    id?: true
    code?: true
    tax?: true
    icms?: true
    pis?: true
    cofins?: true
    ipi?: true
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
    id: string
    code: number
    tax: number
    icms: number
    pis: number
    cofins: number
    ipi: number
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
    id?: boolean
    code?: boolean
    tax?: boolean
    icms?: boolean
    pis?: boolean
    cofins?: boolean
    ipi?: boolean
  }, ExtArgs["result"]["nCM"]>

  export type NCMSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    tax?: boolean
    icms?: boolean
    pis?: boolean
    cofins?: boolean
    ipi?: boolean
  }, ExtArgs["result"]["nCM"]>

  export type NCMSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    tax?: boolean
    icms?: boolean
    pis?: boolean
    cofins?: boolean
    ipi?: boolean
  }, ExtArgs["result"]["nCM"]>

  export type NCMSelectScalar = {
    id?: boolean
    code?: boolean
    tax?: boolean
    icms?: boolean
    pis?: boolean
    cofins?: boolean
    ipi?: boolean
  }

  export type NCMOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "tax" | "icms" | "pis" | "cofins" | "ipi", ExtArgs["result"]["nCM"]>

  export type $NCMPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NCM"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: number
      tax: number
      icms: number
      pis: number
      cofins: number
      ipi: number
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
     * // Only select the `id`
     * const nCMWithIdOnly = await prisma.nCM.findMany({ select: { id: true } })
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
     * // Create many NCMS and only return the `id`
     * const nCMWithIdOnly = await prisma.nCM.createManyAndReturn({
     *   select: { id: true },
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
     * // Update zero or more NCMS and only return the `id`
     * const nCMWithIdOnly = await prisma.nCM.updateManyAndReturn({
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
    readonly id: FieldRef<"NCM", 'String'>
    readonly code: FieldRef<"NCM", 'Float'>
    readonly tax: FieldRef<"NCM", 'Float'>
    readonly icms: FieldRef<"NCM", 'Float'>
    readonly pis: FieldRef<"NCM", 'Float'>
    readonly cofins: FieldRef<"NCM", 'Float'>
    readonly ipi: FieldRef<"NCM", 'Float'>
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
    id: string | null
    name: string | null
    weight: number | null
    length: number | null
    height: number | null
    width: number | null
    ncmId: string | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    name: string | null
    weight: number | null
    length: number | null
    height: number | null
    width: number | null
    ncmId: string | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    weight: number
    length: number
    height: number
    width: number
    ncmId: number
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
    id?: true
    name?: true
    weight?: true
    length?: true
    height?: true
    width?: true
    ncmId?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    weight?: true
    length?: true
    height?: true
    width?: true
    ncmId?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    weight?: true
    length?: true
    height?: true
    width?: true
    ncmId?: true
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
    id: string
    name: string
    weight: number
    length: number
    height: number
    width: number
    ncmId: string
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
    id?: boolean
    name?: boolean
    weight?: boolean
    length?: boolean
    height?: boolean
    width?: boolean
    ncmId?: boolean
    ncm?: boolean | ProductNCMDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    weight?: boolean
    length?: boolean
    height?: boolean
    width?: boolean
    ncmId?: boolean
    ncm?: boolean | ProductNCMDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    weight?: boolean
    length?: boolean
    height?: boolean
    width?: boolean
    ncmId?: boolean
    ncm?: boolean | ProductNCMDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    weight?: boolean
    length?: boolean
    height?: boolean
    width?: boolean
    ncmId?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "weight" | "length" | "height" | "width" | "ncmId", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ncm?: boolean | ProductNCMDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ncm?: boolean | ProductNCMDefaultArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ncm?: boolean | ProductNCMDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      ncm: Prisma.$ProductNCMPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      weight: number
      length: number
      height: number
      width: number
      ncmId: string
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
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
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
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
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
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
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
    ncm<T extends ProductNCMDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductNCMDefaultArgs<ExtArgs>>): Prisma__ProductNCMClient<$Result.GetResult<Prisma.$ProductNCMPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly id: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly weight: FieldRef<"Product", 'Float'>
    readonly length: FieldRef<"Product", 'Float'>
    readonly height: FieldRef<"Product", 'Float'>
    readonly width: FieldRef<"Product", 'Float'>
    readonly ncmId: FieldRef<"Product", 'String'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model ProductNCM
   */

  export type AggregateProductNCM = {
    _count: ProductNCMCountAggregateOutputType | null
    _avg: ProductNCMAvgAggregateOutputType | null
    _sum: ProductNCMSumAggregateOutputType | null
    _min: ProductNCMMinAggregateOutputType | null
    _max: ProductNCMMaxAggregateOutputType | null
  }

  export type ProductNCMAvgAggregateOutputType = {
    code: number | null
    cofins: number | null
    icms: number | null
    ipi: number | null
    pis: number | null
    tax: number | null
  }

  export type ProductNCMSumAggregateOutputType = {
    code: number | null
    cofins: number | null
    icms: number | null
    ipi: number | null
    pis: number | null
    tax: number | null
  }

  export type ProductNCMMinAggregateOutputType = {
    id: string | null
    code: number | null
    cofins: number | null
    icms: number | null
    ipi: number | null
    pis: number | null
    tax: number | null
  }

  export type ProductNCMMaxAggregateOutputType = {
    id: string | null
    code: number | null
    cofins: number | null
    icms: number | null
    ipi: number | null
    pis: number | null
    tax: number | null
  }

  export type ProductNCMCountAggregateOutputType = {
    id: number
    code: number
    cofins: number
    icms: number
    ipi: number
    pis: number
    tax: number
    _all: number
  }


  export type ProductNCMAvgAggregateInputType = {
    code?: true
    cofins?: true
    icms?: true
    ipi?: true
    pis?: true
    tax?: true
  }

  export type ProductNCMSumAggregateInputType = {
    code?: true
    cofins?: true
    icms?: true
    ipi?: true
    pis?: true
    tax?: true
  }

  export type ProductNCMMinAggregateInputType = {
    id?: true
    code?: true
    cofins?: true
    icms?: true
    ipi?: true
    pis?: true
    tax?: true
  }

  export type ProductNCMMaxAggregateInputType = {
    id?: true
    code?: true
    cofins?: true
    icms?: true
    ipi?: true
    pis?: true
    tax?: true
  }

  export type ProductNCMCountAggregateInputType = {
    id?: true
    code?: true
    cofins?: true
    icms?: true
    ipi?: true
    pis?: true
    tax?: true
    _all?: true
  }

  export type ProductNCMAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductNCM to aggregate.
     */
    where?: ProductNCMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductNCMS to fetch.
     */
    orderBy?: ProductNCMOrderByWithRelationInput | ProductNCMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductNCMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductNCMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductNCMS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductNCMS
    **/
    _count?: true | ProductNCMCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductNCMAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductNCMSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductNCMMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductNCMMaxAggregateInputType
  }

  export type GetProductNCMAggregateType<T extends ProductNCMAggregateArgs> = {
        [P in keyof T & keyof AggregateProductNCM]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductNCM[P]>
      : GetScalarType<T[P], AggregateProductNCM[P]>
  }




  export type ProductNCMGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductNCMWhereInput
    orderBy?: ProductNCMOrderByWithAggregationInput | ProductNCMOrderByWithAggregationInput[]
    by: ProductNCMScalarFieldEnum[] | ProductNCMScalarFieldEnum
    having?: ProductNCMScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductNCMCountAggregateInputType | true
    _avg?: ProductNCMAvgAggregateInputType
    _sum?: ProductNCMSumAggregateInputType
    _min?: ProductNCMMinAggregateInputType
    _max?: ProductNCMMaxAggregateInputType
  }

  export type ProductNCMGroupByOutputType = {
    id: string
    code: number
    cofins: number
    icms: number
    ipi: number
    pis: number
    tax: number
    _count: ProductNCMCountAggregateOutputType | null
    _avg: ProductNCMAvgAggregateOutputType | null
    _sum: ProductNCMSumAggregateOutputType | null
    _min: ProductNCMMinAggregateOutputType | null
    _max: ProductNCMMaxAggregateOutputType | null
  }

  type GetProductNCMGroupByPayload<T extends ProductNCMGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductNCMGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductNCMGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductNCMGroupByOutputType[P]>
            : GetScalarType<T[P], ProductNCMGroupByOutputType[P]>
        }
      >
    >


  export type ProductNCMSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    cofins?: boolean
    icms?: boolean
    ipi?: boolean
    pis?: boolean
    tax?: boolean
    product?: boolean | ProductNCM$productArgs<ExtArgs>
    _count?: boolean | ProductNCMCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productNCM"]>

  export type ProductNCMSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    cofins?: boolean
    icms?: boolean
    ipi?: boolean
    pis?: boolean
    tax?: boolean
  }, ExtArgs["result"]["productNCM"]>

  export type ProductNCMSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    cofins?: boolean
    icms?: boolean
    ipi?: boolean
    pis?: boolean
    tax?: boolean
  }, ExtArgs["result"]["productNCM"]>

  export type ProductNCMSelectScalar = {
    id?: boolean
    code?: boolean
    cofins?: boolean
    icms?: boolean
    ipi?: boolean
    pis?: boolean
    tax?: boolean
  }

  export type ProductNCMOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "cofins" | "icms" | "ipi" | "pis" | "tax", ExtArgs["result"]["productNCM"]>
  export type ProductNCMInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductNCM$productArgs<ExtArgs>
    _count?: boolean | ProductNCMCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductNCMIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProductNCMIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductNCMPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductNCM"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: number
      cofins: number
      icms: number
      ipi: number
      pis: number
      tax: number
    }, ExtArgs["result"]["productNCM"]>
    composites: {}
  }

  type ProductNCMGetPayload<S extends boolean | null | undefined | ProductNCMDefaultArgs> = $Result.GetResult<Prisma.$ProductNCMPayload, S>

  type ProductNCMCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductNCMFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductNCMCountAggregateInputType | true
    }

  export interface ProductNCMDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductNCM'], meta: { name: 'ProductNCM' } }
    /**
     * Find zero or one ProductNCM that matches the filter.
     * @param {ProductNCMFindUniqueArgs} args - Arguments to find a ProductNCM
     * @example
     * // Get one ProductNCM
     * const productNCM = await prisma.productNCM.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductNCMFindUniqueArgs>(args: SelectSubset<T, ProductNCMFindUniqueArgs<ExtArgs>>): Prisma__ProductNCMClient<$Result.GetResult<Prisma.$ProductNCMPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductNCM that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductNCMFindUniqueOrThrowArgs} args - Arguments to find a ProductNCM
     * @example
     * // Get one ProductNCM
     * const productNCM = await prisma.productNCM.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductNCMFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductNCMFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductNCMClient<$Result.GetResult<Prisma.$ProductNCMPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductNCM that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductNCMFindFirstArgs} args - Arguments to find a ProductNCM
     * @example
     * // Get one ProductNCM
     * const productNCM = await prisma.productNCM.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductNCMFindFirstArgs>(args?: SelectSubset<T, ProductNCMFindFirstArgs<ExtArgs>>): Prisma__ProductNCMClient<$Result.GetResult<Prisma.$ProductNCMPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductNCM that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductNCMFindFirstOrThrowArgs} args - Arguments to find a ProductNCM
     * @example
     * // Get one ProductNCM
     * const productNCM = await prisma.productNCM.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductNCMFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductNCMFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductNCMClient<$Result.GetResult<Prisma.$ProductNCMPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductNCMS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductNCMFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductNCMS
     * const productNCMS = await prisma.productNCM.findMany()
     * 
     * // Get first 10 ProductNCMS
     * const productNCMS = await prisma.productNCM.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productNCMWithIdOnly = await prisma.productNCM.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductNCMFindManyArgs>(args?: SelectSubset<T, ProductNCMFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductNCMPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductNCM.
     * @param {ProductNCMCreateArgs} args - Arguments to create a ProductNCM.
     * @example
     * // Create one ProductNCM
     * const ProductNCM = await prisma.productNCM.create({
     *   data: {
     *     // ... data to create a ProductNCM
     *   }
     * })
     * 
     */
    create<T extends ProductNCMCreateArgs>(args: SelectSubset<T, ProductNCMCreateArgs<ExtArgs>>): Prisma__ProductNCMClient<$Result.GetResult<Prisma.$ProductNCMPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductNCMS.
     * @param {ProductNCMCreateManyArgs} args - Arguments to create many ProductNCMS.
     * @example
     * // Create many ProductNCMS
     * const productNCM = await prisma.productNCM.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductNCMCreateManyArgs>(args?: SelectSubset<T, ProductNCMCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductNCMS and returns the data saved in the database.
     * @param {ProductNCMCreateManyAndReturnArgs} args - Arguments to create many ProductNCMS.
     * @example
     * // Create many ProductNCMS
     * const productNCM = await prisma.productNCM.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductNCMS and only return the `id`
     * const productNCMWithIdOnly = await prisma.productNCM.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductNCMCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductNCMCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductNCMPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductNCM.
     * @param {ProductNCMDeleteArgs} args - Arguments to delete one ProductNCM.
     * @example
     * // Delete one ProductNCM
     * const ProductNCM = await prisma.productNCM.delete({
     *   where: {
     *     // ... filter to delete one ProductNCM
     *   }
     * })
     * 
     */
    delete<T extends ProductNCMDeleteArgs>(args: SelectSubset<T, ProductNCMDeleteArgs<ExtArgs>>): Prisma__ProductNCMClient<$Result.GetResult<Prisma.$ProductNCMPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductNCM.
     * @param {ProductNCMUpdateArgs} args - Arguments to update one ProductNCM.
     * @example
     * // Update one ProductNCM
     * const productNCM = await prisma.productNCM.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductNCMUpdateArgs>(args: SelectSubset<T, ProductNCMUpdateArgs<ExtArgs>>): Prisma__ProductNCMClient<$Result.GetResult<Prisma.$ProductNCMPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductNCMS.
     * @param {ProductNCMDeleteManyArgs} args - Arguments to filter ProductNCMS to delete.
     * @example
     * // Delete a few ProductNCMS
     * const { count } = await prisma.productNCM.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductNCMDeleteManyArgs>(args?: SelectSubset<T, ProductNCMDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductNCMS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductNCMUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductNCMS
     * const productNCM = await prisma.productNCM.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductNCMUpdateManyArgs>(args: SelectSubset<T, ProductNCMUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductNCMS and returns the data updated in the database.
     * @param {ProductNCMUpdateManyAndReturnArgs} args - Arguments to update many ProductNCMS.
     * @example
     * // Update many ProductNCMS
     * const productNCM = await prisma.productNCM.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductNCMS and only return the `id`
     * const productNCMWithIdOnly = await prisma.productNCM.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductNCMUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductNCMUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductNCMPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductNCM.
     * @param {ProductNCMUpsertArgs} args - Arguments to update or create a ProductNCM.
     * @example
     * // Update or create a ProductNCM
     * const productNCM = await prisma.productNCM.upsert({
     *   create: {
     *     // ... data to create a ProductNCM
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductNCM we want to update
     *   }
     * })
     */
    upsert<T extends ProductNCMUpsertArgs>(args: SelectSubset<T, ProductNCMUpsertArgs<ExtArgs>>): Prisma__ProductNCMClient<$Result.GetResult<Prisma.$ProductNCMPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductNCMS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductNCMCountArgs} args - Arguments to filter ProductNCMS to count.
     * @example
     * // Count the number of ProductNCMS
     * const count = await prisma.productNCM.count({
     *   where: {
     *     // ... the filter for the ProductNCMS we want to count
     *   }
     * })
    **/
    count<T extends ProductNCMCountArgs>(
      args?: Subset<T, ProductNCMCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductNCMCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductNCM.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductNCMAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductNCMAggregateArgs>(args: Subset<T, ProductNCMAggregateArgs>): Prisma.PrismaPromise<GetProductNCMAggregateType<T>>

    /**
     * Group by ProductNCM.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductNCMGroupByArgs} args - Group by arguments.
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
      T extends ProductNCMGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductNCMGroupByArgs['orderBy'] }
        : { orderBy?: ProductNCMGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductNCMGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductNCMGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductNCM model
   */
  readonly fields: ProductNCMFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductNCM.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductNCMClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductNCM$productArgs<ExtArgs> = {}>(args?: Subset<T, ProductNCM$productArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ProductNCM model
   */
  interface ProductNCMFieldRefs {
    readonly id: FieldRef<"ProductNCM", 'String'>
    readonly code: FieldRef<"ProductNCM", 'Float'>
    readonly cofins: FieldRef<"ProductNCM", 'Float'>
    readonly icms: FieldRef<"ProductNCM", 'Float'>
    readonly ipi: FieldRef<"ProductNCM", 'Float'>
    readonly pis: FieldRef<"ProductNCM", 'Float'>
    readonly tax: FieldRef<"ProductNCM", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * ProductNCM findUnique
   */
  export type ProductNCMFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductNCM
     */
    select?: ProductNCMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductNCM
     */
    omit?: ProductNCMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductNCMInclude<ExtArgs> | null
    /**
     * Filter, which ProductNCM to fetch.
     */
    where: ProductNCMWhereUniqueInput
  }

  /**
   * ProductNCM findUniqueOrThrow
   */
  export type ProductNCMFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductNCM
     */
    select?: ProductNCMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductNCM
     */
    omit?: ProductNCMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductNCMInclude<ExtArgs> | null
    /**
     * Filter, which ProductNCM to fetch.
     */
    where: ProductNCMWhereUniqueInput
  }

  /**
   * ProductNCM findFirst
   */
  export type ProductNCMFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductNCM
     */
    select?: ProductNCMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductNCM
     */
    omit?: ProductNCMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductNCMInclude<ExtArgs> | null
    /**
     * Filter, which ProductNCM to fetch.
     */
    where?: ProductNCMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductNCMS to fetch.
     */
    orderBy?: ProductNCMOrderByWithRelationInput | ProductNCMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductNCMS.
     */
    cursor?: ProductNCMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductNCMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductNCMS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductNCMS.
     */
    distinct?: ProductNCMScalarFieldEnum | ProductNCMScalarFieldEnum[]
  }

  /**
   * ProductNCM findFirstOrThrow
   */
  export type ProductNCMFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductNCM
     */
    select?: ProductNCMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductNCM
     */
    omit?: ProductNCMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductNCMInclude<ExtArgs> | null
    /**
     * Filter, which ProductNCM to fetch.
     */
    where?: ProductNCMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductNCMS to fetch.
     */
    orderBy?: ProductNCMOrderByWithRelationInput | ProductNCMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductNCMS.
     */
    cursor?: ProductNCMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductNCMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductNCMS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductNCMS.
     */
    distinct?: ProductNCMScalarFieldEnum | ProductNCMScalarFieldEnum[]
  }

  /**
   * ProductNCM findMany
   */
  export type ProductNCMFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductNCM
     */
    select?: ProductNCMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductNCM
     */
    omit?: ProductNCMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductNCMInclude<ExtArgs> | null
    /**
     * Filter, which ProductNCMS to fetch.
     */
    where?: ProductNCMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductNCMS to fetch.
     */
    orderBy?: ProductNCMOrderByWithRelationInput | ProductNCMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductNCMS.
     */
    cursor?: ProductNCMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductNCMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductNCMS.
     */
    skip?: number
    distinct?: ProductNCMScalarFieldEnum | ProductNCMScalarFieldEnum[]
  }

  /**
   * ProductNCM create
   */
  export type ProductNCMCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductNCM
     */
    select?: ProductNCMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductNCM
     */
    omit?: ProductNCMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductNCMInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductNCM.
     */
    data: XOR<ProductNCMCreateInput, ProductNCMUncheckedCreateInput>
  }

  /**
   * ProductNCM createMany
   */
  export type ProductNCMCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductNCMS.
     */
    data: ProductNCMCreateManyInput | ProductNCMCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductNCM createManyAndReturn
   */
  export type ProductNCMCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductNCM
     */
    select?: ProductNCMSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductNCM
     */
    omit?: ProductNCMOmit<ExtArgs> | null
    /**
     * The data used to create many ProductNCMS.
     */
    data: ProductNCMCreateManyInput | ProductNCMCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductNCM update
   */
  export type ProductNCMUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductNCM
     */
    select?: ProductNCMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductNCM
     */
    omit?: ProductNCMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductNCMInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductNCM.
     */
    data: XOR<ProductNCMUpdateInput, ProductNCMUncheckedUpdateInput>
    /**
     * Choose, which ProductNCM to update.
     */
    where: ProductNCMWhereUniqueInput
  }

  /**
   * ProductNCM updateMany
   */
  export type ProductNCMUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductNCMS.
     */
    data: XOR<ProductNCMUpdateManyMutationInput, ProductNCMUncheckedUpdateManyInput>
    /**
     * Filter which ProductNCMS to update
     */
    where?: ProductNCMWhereInput
    /**
     * Limit how many ProductNCMS to update.
     */
    limit?: number
  }

  /**
   * ProductNCM updateManyAndReturn
   */
  export type ProductNCMUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductNCM
     */
    select?: ProductNCMSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductNCM
     */
    omit?: ProductNCMOmit<ExtArgs> | null
    /**
     * The data used to update ProductNCMS.
     */
    data: XOR<ProductNCMUpdateManyMutationInput, ProductNCMUncheckedUpdateManyInput>
    /**
     * Filter which ProductNCMS to update
     */
    where?: ProductNCMWhereInput
    /**
     * Limit how many ProductNCMS to update.
     */
    limit?: number
  }

  /**
   * ProductNCM upsert
   */
  export type ProductNCMUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductNCM
     */
    select?: ProductNCMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductNCM
     */
    omit?: ProductNCMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductNCMInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductNCM to update in case it exists.
     */
    where: ProductNCMWhereUniqueInput
    /**
     * In case the ProductNCM found by the `where` argument doesn't exist, create a new ProductNCM with this data.
     */
    create: XOR<ProductNCMCreateInput, ProductNCMUncheckedCreateInput>
    /**
     * In case the ProductNCM was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductNCMUpdateInput, ProductNCMUncheckedUpdateInput>
  }

  /**
   * ProductNCM delete
   */
  export type ProductNCMDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductNCM
     */
    select?: ProductNCMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductNCM
     */
    omit?: ProductNCMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductNCMInclude<ExtArgs> | null
    /**
     * Filter which ProductNCM to delete.
     */
    where: ProductNCMWhereUniqueInput
  }

  /**
   * ProductNCM deleteMany
   */
  export type ProductNCMDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductNCMS to delete
     */
    where?: ProductNCMWhereInput
    /**
     * Limit how many ProductNCMS to delete.
     */
    limit?: number
  }

  /**
   * ProductNCM.product
   */
  export type ProductNCM$productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * ProductNCM without action
   */
  export type ProductNCMDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductNCM
     */
    select?: ProductNCMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductNCM
     */
    omit?: ProductNCMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductNCMInclude<ExtArgs> | null
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
    id: string | null
    registration: string | null
    createdAt: Date | null
    quote: number | null
  }

  export type InvoiceMaxAggregateOutputType = {
    id: string | null
    registration: string | null
    createdAt: Date | null
    quote: number | null
  }

  export type InvoiceCountAggregateOutputType = {
    id: number
    registration: number
    createdAt: number
    quote: number
    _all: number
  }


  export type InvoiceAvgAggregateInputType = {
    quote?: true
  }

  export type InvoiceSumAggregateInputType = {
    quote?: true
  }

  export type InvoiceMinAggregateInputType = {
    id?: true
    registration?: true
    createdAt?: true
    quote?: true
  }

  export type InvoiceMaxAggregateInputType = {
    id?: true
    registration?: true
    createdAt?: true
    quote?: true
  }

  export type InvoiceCountAggregateInputType = {
    id?: true
    registration?: true
    createdAt?: true
    quote?: true
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
    id: string
    registration: string
    createdAt: Date
    quote: number
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
    id?: boolean
    registration?: boolean
    createdAt?: boolean
    quote?: boolean
    products?: boolean | Invoice$productsArgs<ExtArgs>
    _count?: boolean | InvoiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    registration?: boolean
    createdAt?: boolean
    quote?: boolean
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    registration?: boolean
    createdAt?: boolean
    quote?: boolean
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectScalar = {
    id?: boolean
    registration?: boolean
    createdAt?: boolean
    quote?: boolean
  }

  export type InvoiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "registration" | "createdAt" | "quote", ExtArgs["result"]["invoice"]>
  export type InvoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Invoice$productsArgs<ExtArgs>
    _count?: boolean | InvoiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InvoiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type InvoiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $InvoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invoice"
    objects: {
      products: Prisma.$InvoiceProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      registration: string
      createdAt: Date
      quote: number
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
     * // Only select the `id`
     * const invoiceWithIdOnly = await prisma.invoice.findMany({ select: { id: true } })
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
     * // Create many Invoices and only return the `id`
     * const invoiceWithIdOnly = await prisma.invoice.createManyAndReturn({
     *   select: { id: true },
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
     * // Update zero or more Invoices and only return the `id`
     * const invoiceWithIdOnly = await prisma.invoice.updateManyAndReturn({
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
    products<T extends Invoice$productsArgs<ExtArgs> = {}>(args?: Subset<T, Invoice$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"Invoice", 'String'>
    readonly registration: FieldRef<"Invoice", 'String'>
    readonly createdAt: FieldRef<"Invoice", 'DateTime'>
    readonly quote: FieldRef<"Invoice", 'Float'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
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
   * Invoice.products
   */
  export type Invoice$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceProduct
     */
    select?: InvoiceProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceProduct
     */
    omit?: InvoiceProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceProductInclude<ExtArgs> | null
    where?: InvoiceProductWhereInput
    orderBy?: InvoiceProductOrderByWithRelationInput | InvoiceProductOrderByWithRelationInput[]
    cursor?: InvoiceProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceProductScalarFieldEnum | InvoiceProductScalarFieldEnum[]
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
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
    productWeight: number | null
    productVolume: number | null
    quantity: number | null
    amount: number | null
  }

  export type InvoiceProductSumAggregateOutputType = {
    productWeight: number | null
    productVolume: number | null
    quantity: number | null
    amount: number | null
  }

  export type InvoiceProductMinAggregateOutputType = {
    id: string | null
    productId: string | null
    productName: string | null
    productWeight: number | null
    productVolume: number | null
    quantity: number | null
    amount: number | null
    invoiceId: string | null
  }

  export type InvoiceProductMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    productName: string | null
    productWeight: number | null
    productVolume: number | null
    quantity: number | null
    amount: number | null
    invoiceId: string | null
  }

  export type InvoiceProductCountAggregateOutputType = {
    id: number
    productId: number
    productName: number
    productWeight: number
    productVolume: number
    quantity: number
    amount: number
    invoiceId: number
    _all: number
  }


  export type InvoiceProductAvgAggregateInputType = {
    productWeight?: true
    productVolume?: true
    quantity?: true
    amount?: true
  }

  export type InvoiceProductSumAggregateInputType = {
    productWeight?: true
    productVolume?: true
    quantity?: true
    amount?: true
  }

  export type InvoiceProductMinAggregateInputType = {
    id?: true
    productId?: true
    productName?: true
    productWeight?: true
    productVolume?: true
    quantity?: true
    amount?: true
    invoiceId?: true
  }

  export type InvoiceProductMaxAggregateInputType = {
    id?: true
    productId?: true
    productName?: true
    productWeight?: true
    productVolume?: true
    quantity?: true
    amount?: true
    invoiceId?: true
  }

  export type InvoiceProductCountAggregateInputType = {
    id?: true
    productId?: true
    productName?: true
    productWeight?: true
    productVolume?: true
    quantity?: true
    amount?: true
    invoiceId?: true
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
    id: string
    productId: string
    productName: string
    productWeight: number
    productVolume: number
    quantity: number
    amount: number
    invoiceId: string
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
    id?: boolean
    productId?: boolean
    productName?: boolean
    productWeight?: boolean
    productVolume?: boolean
    quantity?: boolean
    amount?: boolean
    invoiceId?: boolean
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoiceProduct"]>

  export type InvoiceProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    productName?: boolean
    productWeight?: boolean
    productVolume?: boolean
    quantity?: boolean
    amount?: boolean
    invoiceId?: boolean
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoiceProduct"]>

  export type InvoiceProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    productName?: boolean
    productWeight?: boolean
    productVolume?: boolean
    quantity?: boolean
    amount?: boolean
    invoiceId?: boolean
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoiceProduct"]>

  export type InvoiceProductSelectScalar = {
    id?: boolean
    productId?: boolean
    productName?: boolean
    productWeight?: boolean
    productVolume?: boolean
    quantity?: boolean
    amount?: boolean
    invoiceId?: boolean
  }

  export type InvoiceProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "productName" | "productWeight" | "productVolume" | "quantity" | "amount" | "invoiceId", ExtArgs["result"]["invoiceProduct"]>
  export type InvoiceProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }
  export type InvoiceProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }
  export type InvoiceProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }

  export type $InvoiceProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InvoiceProduct"
    objects: {
      invoice: Prisma.$InvoicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      productName: string
      productWeight: number
      productVolume: number
      quantity: number
      amount: number
      invoiceId: string
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
     * // Only select the `id`
     * const invoiceProductWithIdOnly = await prisma.invoiceProduct.findMany({ select: { id: true } })
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
     * // Create many InvoiceProducts and only return the `id`
     * const invoiceProductWithIdOnly = await prisma.invoiceProduct.createManyAndReturn({
     *   select: { id: true },
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
     * // Update zero or more InvoiceProducts and only return the `id`
     * const invoiceProductWithIdOnly = await prisma.invoiceProduct.updateManyAndReturn({
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
    invoice<T extends InvoiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InvoiceDefaultArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly id: FieldRef<"InvoiceProduct", 'String'>
    readonly productId: FieldRef<"InvoiceProduct", 'String'>
    readonly productName: FieldRef<"InvoiceProduct", 'String'>
    readonly productWeight: FieldRef<"InvoiceProduct", 'Float'>
    readonly productVolume: FieldRef<"InvoiceProduct", 'Float'>
    readonly quantity: FieldRef<"InvoiceProduct", 'Int'>
    readonly amount: FieldRef<"InvoiceProduct", 'Float'>
    readonly invoiceId: FieldRef<"InvoiceProduct", 'String'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceProductInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceProductInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceProductInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceProductInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceProductInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceProductInclude<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceProductIncludeCreateManyAndReturn<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceProductInclude<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceProductIncludeUpdateManyAndReturn<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceProductInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceProductInclude<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceProductInclude<ExtArgs> | null
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
    id: 'id',
    code: 'code',
    tax: 'tax',
    icms: 'icms',
    pis: 'pis',
    cofins: 'cofins',
    ipi: 'ipi'
  };

  export type NCMScalarFieldEnum = (typeof NCMScalarFieldEnum)[keyof typeof NCMScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    weight: 'weight',
    length: 'length',
    height: 'height',
    width: 'width',
    ncmId: 'ncmId'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ProductNCMScalarFieldEnum: {
    id: 'id',
    code: 'code',
    cofins: 'cofins',
    icms: 'icms',
    ipi: 'ipi',
    pis: 'pis',
    tax: 'tax'
  };

  export type ProductNCMScalarFieldEnum = (typeof ProductNCMScalarFieldEnum)[keyof typeof ProductNCMScalarFieldEnum]


  export const InvoiceScalarFieldEnum: {
    id: 'id',
    registration: 'registration',
    createdAt: 'createdAt',
    quote: 'quote'
  };

  export type InvoiceScalarFieldEnum = (typeof InvoiceScalarFieldEnum)[keyof typeof InvoiceScalarFieldEnum]


  export const InvoiceProductScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    productName: 'productName',
    productWeight: 'productWeight',
    productVolume: 'productVolume',
    quantity: 'quantity',
    amount: 'amount',
    invoiceId: 'invoiceId'
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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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
   * Deep Input Types
   */


  export type NCMWhereInput = {
    AND?: NCMWhereInput | NCMWhereInput[]
    OR?: NCMWhereInput[]
    NOT?: NCMWhereInput | NCMWhereInput[]
    id?: StringFilter<"NCM"> | string
    code?: FloatFilter<"NCM"> | number
    tax?: FloatFilter<"NCM"> | number
    icms?: FloatFilter<"NCM"> | number
    pis?: FloatFilter<"NCM"> | number
    cofins?: FloatFilter<"NCM"> | number
    ipi?: FloatFilter<"NCM"> | number
  }

  export type NCMOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    tax?: SortOrder
    icms?: SortOrder
    pis?: SortOrder
    cofins?: SortOrder
    ipi?: SortOrder
  }

  export type NCMWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NCMWhereInput | NCMWhereInput[]
    OR?: NCMWhereInput[]
    NOT?: NCMWhereInput | NCMWhereInput[]
    code?: FloatFilter<"NCM"> | number
    tax?: FloatFilter<"NCM"> | number
    icms?: FloatFilter<"NCM"> | number
    pis?: FloatFilter<"NCM"> | number
    cofins?: FloatFilter<"NCM"> | number
    ipi?: FloatFilter<"NCM"> | number
  }, "id">

  export type NCMOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    tax?: SortOrder
    icms?: SortOrder
    pis?: SortOrder
    cofins?: SortOrder
    ipi?: SortOrder
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
    id?: StringWithAggregatesFilter<"NCM"> | string
    code?: FloatWithAggregatesFilter<"NCM"> | number
    tax?: FloatWithAggregatesFilter<"NCM"> | number
    icms?: FloatWithAggregatesFilter<"NCM"> | number
    pis?: FloatWithAggregatesFilter<"NCM"> | number
    cofins?: FloatWithAggregatesFilter<"NCM"> | number
    ipi?: FloatWithAggregatesFilter<"NCM"> | number
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    weight?: FloatFilter<"Product"> | number
    length?: FloatFilter<"Product"> | number
    height?: FloatFilter<"Product"> | number
    width?: FloatFilter<"Product"> | number
    ncmId?: StringFilter<"Product"> | string
    ncm?: XOR<ProductNCMScalarRelationFilter, ProductNCMWhereInput>
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    weight?: SortOrder
    length?: SortOrder
    height?: SortOrder
    width?: SortOrder
    ncmId?: SortOrder
    ncm?: ProductNCMOrderByWithRelationInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    weight?: FloatFilter<"Product"> | number
    length?: FloatFilter<"Product"> | number
    height?: FloatFilter<"Product"> | number
    width?: FloatFilter<"Product"> | number
    ncmId?: StringFilter<"Product"> | string
    ncm?: XOR<ProductNCMScalarRelationFilter, ProductNCMWhereInput>
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    weight?: SortOrder
    length?: SortOrder
    height?: SortOrder
    width?: SortOrder
    ncmId?: SortOrder
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
    id?: StringWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    weight?: FloatWithAggregatesFilter<"Product"> | number
    length?: FloatWithAggregatesFilter<"Product"> | number
    height?: FloatWithAggregatesFilter<"Product"> | number
    width?: FloatWithAggregatesFilter<"Product"> | number
    ncmId?: StringWithAggregatesFilter<"Product"> | string
  }

  export type ProductNCMWhereInput = {
    AND?: ProductNCMWhereInput | ProductNCMWhereInput[]
    OR?: ProductNCMWhereInput[]
    NOT?: ProductNCMWhereInput | ProductNCMWhereInput[]
    id?: StringFilter<"ProductNCM"> | string
    code?: FloatFilter<"ProductNCM"> | number
    cofins?: FloatFilter<"ProductNCM"> | number
    icms?: FloatFilter<"ProductNCM"> | number
    ipi?: FloatFilter<"ProductNCM"> | number
    pis?: FloatFilter<"ProductNCM"> | number
    tax?: FloatFilter<"ProductNCM"> | number
    product?: ProductListRelationFilter
  }

  export type ProductNCMOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    cofins?: SortOrder
    icms?: SortOrder
    ipi?: SortOrder
    pis?: SortOrder
    tax?: SortOrder
    product?: ProductOrderByRelationAggregateInput
  }

  export type ProductNCMWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductNCMWhereInput | ProductNCMWhereInput[]
    OR?: ProductNCMWhereInput[]
    NOT?: ProductNCMWhereInput | ProductNCMWhereInput[]
    code?: FloatFilter<"ProductNCM"> | number
    cofins?: FloatFilter<"ProductNCM"> | number
    icms?: FloatFilter<"ProductNCM"> | number
    ipi?: FloatFilter<"ProductNCM"> | number
    pis?: FloatFilter<"ProductNCM"> | number
    tax?: FloatFilter<"ProductNCM"> | number
    product?: ProductListRelationFilter
  }, "id">

  export type ProductNCMOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    cofins?: SortOrder
    icms?: SortOrder
    ipi?: SortOrder
    pis?: SortOrder
    tax?: SortOrder
    _count?: ProductNCMCountOrderByAggregateInput
    _avg?: ProductNCMAvgOrderByAggregateInput
    _max?: ProductNCMMaxOrderByAggregateInput
    _min?: ProductNCMMinOrderByAggregateInput
    _sum?: ProductNCMSumOrderByAggregateInput
  }

  export type ProductNCMScalarWhereWithAggregatesInput = {
    AND?: ProductNCMScalarWhereWithAggregatesInput | ProductNCMScalarWhereWithAggregatesInput[]
    OR?: ProductNCMScalarWhereWithAggregatesInput[]
    NOT?: ProductNCMScalarWhereWithAggregatesInput | ProductNCMScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductNCM"> | string
    code?: FloatWithAggregatesFilter<"ProductNCM"> | number
    cofins?: FloatWithAggregatesFilter<"ProductNCM"> | number
    icms?: FloatWithAggregatesFilter<"ProductNCM"> | number
    ipi?: FloatWithAggregatesFilter<"ProductNCM"> | number
    pis?: FloatWithAggregatesFilter<"ProductNCM"> | number
    tax?: FloatWithAggregatesFilter<"ProductNCM"> | number
  }

  export type InvoiceWhereInput = {
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    id?: StringFilter<"Invoice"> | string
    registration?: StringFilter<"Invoice"> | string
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    quote?: FloatFilter<"Invoice"> | number
    products?: InvoiceProductListRelationFilter
  }

  export type InvoiceOrderByWithRelationInput = {
    id?: SortOrder
    registration?: SortOrder
    createdAt?: SortOrder
    quote?: SortOrder
    products?: InvoiceProductOrderByRelationAggregateInput
  }

  export type InvoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    registration?: StringFilter<"Invoice"> | string
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    quote?: FloatFilter<"Invoice"> | number
    products?: InvoiceProductListRelationFilter
  }, "id">

  export type InvoiceOrderByWithAggregationInput = {
    id?: SortOrder
    registration?: SortOrder
    createdAt?: SortOrder
    quote?: SortOrder
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
    id?: StringWithAggregatesFilter<"Invoice"> | string
    registration?: StringWithAggregatesFilter<"Invoice"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
    quote?: FloatWithAggregatesFilter<"Invoice"> | number
  }

  export type InvoiceProductWhereInput = {
    AND?: InvoiceProductWhereInput | InvoiceProductWhereInput[]
    OR?: InvoiceProductWhereInput[]
    NOT?: InvoiceProductWhereInput | InvoiceProductWhereInput[]
    id?: StringFilter<"InvoiceProduct"> | string
    productId?: StringFilter<"InvoiceProduct"> | string
    productName?: StringFilter<"InvoiceProduct"> | string
    productWeight?: FloatFilter<"InvoiceProduct"> | number
    productVolume?: FloatFilter<"InvoiceProduct"> | number
    quantity?: IntFilter<"InvoiceProduct"> | number
    amount?: FloatFilter<"InvoiceProduct"> | number
    invoiceId?: StringFilter<"InvoiceProduct"> | string
    invoice?: XOR<InvoiceScalarRelationFilter, InvoiceWhereInput>
  }

  export type InvoiceProductOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    productWeight?: SortOrder
    productVolume?: SortOrder
    quantity?: SortOrder
    amount?: SortOrder
    invoiceId?: SortOrder
    invoice?: InvoiceOrderByWithRelationInput
  }

  export type InvoiceProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InvoiceProductWhereInput | InvoiceProductWhereInput[]
    OR?: InvoiceProductWhereInput[]
    NOT?: InvoiceProductWhereInput | InvoiceProductWhereInput[]
    productId?: StringFilter<"InvoiceProduct"> | string
    productName?: StringFilter<"InvoiceProduct"> | string
    productWeight?: FloatFilter<"InvoiceProduct"> | number
    productVolume?: FloatFilter<"InvoiceProduct"> | number
    quantity?: IntFilter<"InvoiceProduct"> | number
    amount?: FloatFilter<"InvoiceProduct"> | number
    invoiceId?: StringFilter<"InvoiceProduct"> | string
    invoice?: XOR<InvoiceScalarRelationFilter, InvoiceWhereInput>
  }, "id">

  export type InvoiceProductOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    productWeight?: SortOrder
    productVolume?: SortOrder
    quantity?: SortOrder
    amount?: SortOrder
    invoiceId?: SortOrder
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
    id?: StringWithAggregatesFilter<"InvoiceProduct"> | string
    productId?: StringWithAggregatesFilter<"InvoiceProduct"> | string
    productName?: StringWithAggregatesFilter<"InvoiceProduct"> | string
    productWeight?: FloatWithAggregatesFilter<"InvoiceProduct"> | number
    productVolume?: FloatWithAggregatesFilter<"InvoiceProduct"> | number
    quantity?: IntWithAggregatesFilter<"InvoiceProduct"> | number
    amount?: FloatWithAggregatesFilter<"InvoiceProduct"> | number
    invoiceId?: StringWithAggregatesFilter<"InvoiceProduct"> | string
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

  export type NCMCreateInput = {
    id?: string
    code: number
    tax: number
    icms: number
    pis: number
    cofins: number
    ipi: number
  }

  export type NCMUncheckedCreateInput = {
    id?: string
    code: number
    tax: number
    icms: number
    pis: number
    cofins: number
    ipi: number
  }

  export type NCMUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    icms?: FloatFieldUpdateOperationsInput | number
    pis?: FloatFieldUpdateOperationsInput | number
    cofins?: FloatFieldUpdateOperationsInput | number
    ipi?: FloatFieldUpdateOperationsInput | number
  }

  export type NCMUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    icms?: FloatFieldUpdateOperationsInput | number
    pis?: FloatFieldUpdateOperationsInput | number
    cofins?: FloatFieldUpdateOperationsInput | number
    ipi?: FloatFieldUpdateOperationsInput | number
  }

  export type NCMCreateManyInput = {
    id?: string
    code: number
    tax: number
    icms: number
    pis: number
    cofins: number
    ipi: number
  }

  export type NCMUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    icms?: FloatFieldUpdateOperationsInput | number
    pis?: FloatFieldUpdateOperationsInput | number
    cofins?: FloatFieldUpdateOperationsInput | number
    ipi?: FloatFieldUpdateOperationsInput | number
  }

  export type NCMUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    icms?: FloatFieldUpdateOperationsInput | number
    pis?: FloatFieldUpdateOperationsInput | number
    cofins?: FloatFieldUpdateOperationsInput | number
    ipi?: FloatFieldUpdateOperationsInput | number
  }

  export type ProductCreateInput = {
    id?: string
    name?: string
    weight: number
    length: number
    height: number
    width: number
    ncm: ProductNCMCreateNestedOneWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    name?: string
    weight: number
    length: number
    height: number
    width: number
    ncmId: string
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    length?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    width?: FloatFieldUpdateOperationsInput | number
    ncm?: ProductNCMUpdateOneRequiredWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    length?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    width?: FloatFieldUpdateOperationsInput | number
    ncmId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateManyInput = {
    id?: string
    name?: string
    weight: number
    length: number
    height: number
    width: number
    ncmId: string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    length?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    width?: FloatFieldUpdateOperationsInput | number
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    length?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    width?: FloatFieldUpdateOperationsInput | number
    ncmId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductNCMCreateInput = {
    id?: string
    code: number
    cofins: number
    icms: number
    ipi: number
    pis: number
    tax: number
    product?: ProductCreateNestedManyWithoutNcmInput
  }

  export type ProductNCMUncheckedCreateInput = {
    id?: string
    code: number
    cofins: number
    icms: number
    ipi: number
    pis: number
    tax: number
    product?: ProductUncheckedCreateNestedManyWithoutNcmInput
  }

  export type ProductNCMUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: FloatFieldUpdateOperationsInput | number
    cofins?: FloatFieldUpdateOperationsInput | number
    icms?: FloatFieldUpdateOperationsInput | number
    ipi?: FloatFieldUpdateOperationsInput | number
    pis?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    product?: ProductUpdateManyWithoutNcmNestedInput
  }

  export type ProductNCMUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: FloatFieldUpdateOperationsInput | number
    cofins?: FloatFieldUpdateOperationsInput | number
    icms?: FloatFieldUpdateOperationsInput | number
    ipi?: FloatFieldUpdateOperationsInput | number
    pis?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    product?: ProductUncheckedUpdateManyWithoutNcmNestedInput
  }

  export type ProductNCMCreateManyInput = {
    id?: string
    code: number
    cofins: number
    icms: number
    ipi: number
    pis: number
    tax: number
  }

  export type ProductNCMUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: FloatFieldUpdateOperationsInput | number
    cofins?: FloatFieldUpdateOperationsInput | number
    icms?: FloatFieldUpdateOperationsInput | number
    ipi?: FloatFieldUpdateOperationsInput | number
    pis?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
  }

  export type ProductNCMUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: FloatFieldUpdateOperationsInput | number
    cofins?: FloatFieldUpdateOperationsInput | number
    icms?: FloatFieldUpdateOperationsInput | number
    ipi?: FloatFieldUpdateOperationsInput | number
    pis?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
  }

  export type InvoiceCreateInput = {
    id?: string
    registration: string
    createdAt?: Date | string
    quote: number
    products?: InvoiceProductCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateInput = {
    id?: string
    registration: string
    createdAt?: Date | string
    quote: number
    products?: InvoiceProductUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    registration?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quote?: FloatFieldUpdateOperationsInput | number
    products?: InvoiceProductUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    registration?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quote?: FloatFieldUpdateOperationsInput | number
    products?: InvoiceProductUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceCreateManyInput = {
    id?: string
    registration: string
    createdAt?: Date | string
    quote: number
  }

  export type InvoiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    registration?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quote?: FloatFieldUpdateOperationsInput | number
  }

  export type InvoiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    registration?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quote?: FloatFieldUpdateOperationsInput | number
  }

  export type InvoiceProductCreateInput = {
    id?: string
    productId: string
    productName: string
    productWeight: number
    productVolume: number
    quantity?: number
    amount?: number
    invoice: InvoiceCreateNestedOneWithoutProductsInput
  }

  export type InvoiceProductUncheckedCreateInput = {
    id?: string
    productId: string
    productName: string
    productWeight: number
    productVolume: number
    quantity?: number
    amount?: number
    invoiceId: string
  }

  export type InvoiceProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productWeight?: FloatFieldUpdateOperationsInput | number
    productVolume?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    invoice?: InvoiceUpdateOneRequiredWithoutProductsNestedInput
  }

  export type InvoiceProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productWeight?: FloatFieldUpdateOperationsInput | number
    productVolume?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    invoiceId?: StringFieldUpdateOperationsInput | string
  }

  export type InvoiceProductCreateManyInput = {
    id?: string
    productId: string
    productName: string
    productWeight: number
    productVolume: number
    quantity?: number
    amount?: number
    invoiceId: string
  }

  export type InvoiceProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productWeight?: FloatFieldUpdateOperationsInput | number
    productVolume?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type InvoiceProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productWeight?: FloatFieldUpdateOperationsInput | number
    productVolume?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    invoiceId?: StringFieldUpdateOperationsInput | string
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NCMCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    tax?: SortOrder
    icms?: SortOrder
    pis?: SortOrder
    cofins?: SortOrder
    ipi?: SortOrder
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
    id?: SortOrder
    code?: SortOrder
    tax?: SortOrder
    icms?: SortOrder
    pis?: SortOrder
    cofins?: SortOrder
    ipi?: SortOrder
  }

  export type NCMMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    tax?: SortOrder
    icms?: SortOrder
    pis?: SortOrder
    cofins?: SortOrder
    ipi?: SortOrder
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ProductNCMScalarRelationFilter = {
    is?: ProductNCMWhereInput
    isNot?: ProductNCMWhereInput
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    weight?: SortOrder
    length?: SortOrder
    height?: SortOrder
    width?: SortOrder
    ncmId?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    weight?: SortOrder
    length?: SortOrder
    height?: SortOrder
    width?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    weight?: SortOrder
    length?: SortOrder
    height?: SortOrder
    width?: SortOrder
    ncmId?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    weight?: SortOrder
    length?: SortOrder
    height?: SortOrder
    width?: SortOrder
    ncmId?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    weight?: SortOrder
    length?: SortOrder
    height?: SortOrder
    width?: SortOrder
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductNCMCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    cofins?: SortOrder
    icms?: SortOrder
    ipi?: SortOrder
    pis?: SortOrder
    tax?: SortOrder
  }

  export type ProductNCMAvgOrderByAggregateInput = {
    code?: SortOrder
    cofins?: SortOrder
    icms?: SortOrder
    ipi?: SortOrder
    pis?: SortOrder
    tax?: SortOrder
  }

  export type ProductNCMMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    cofins?: SortOrder
    icms?: SortOrder
    ipi?: SortOrder
    pis?: SortOrder
    tax?: SortOrder
  }

  export type ProductNCMMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    cofins?: SortOrder
    icms?: SortOrder
    ipi?: SortOrder
    pis?: SortOrder
    tax?: SortOrder
  }

  export type ProductNCMSumOrderByAggregateInput = {
    code?: SortOrder
    cofins?: SortOrder
    icms?: SortOrder
    ipi?: SortOrder
    pis?: SortOrder
    tax?: SortOrder
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

  export type InvoiceProductListRelationFilter = {
    every?: InvoiceProductWhereInput
    some?: InvoiceProductWhereInput
    none?: InvoiceProductWhereInput
  }

  export type InvoiceProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InvoiceCountOrderByAggregateInput = {
    id?: SortOrder
    registration?: SortOrder
    createdAt?: SortOrder
    quote?: SortOrder
  }

  export type InvoiceAvgOrderByAggregateInput = {
    quote?: SortOrder
  }

  export type InvoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    registration?: SortOrder
    createdAt?: SortOrder
    quote?: SortOrder
  }

  export type InvoiceMinOrderByAggregateInput = {
    id?: SortOrder
    registration?: SortOrder
    createdAt?: SortOrder
    quote?: SortOrder
  }

  export type InvoiceSumOrderByAggregateInput = {
    quote?: SortOrder
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

  export type InvoiceScalarRelationFilter = {
    is?: InvoiceWhereInput
    isNot?: InvoiceWhereInput
  }

  export type InvoiceProductCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    productWeight?: SortOrder
    productVolume?: SortOrder
    quantity?: SortOrder
    amount?: SortOrder
    invoiceId?: SortOrder
  }

  export type InvoiceProductAvgOrderByAggregateInput = {
    productWeight?: SortOrder
    productVolume?: SortOrder
    quantity?: SortOrder
    amount?: SortOrder
  }

  export type InvoiceProductMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    productWeight?: SortOrder
    productVolume?: SortOrder
    quantity?: SortOrder
    amount?: SortOrder
    invoiceId?: SortOrder
  }

  export type InvoiceProductMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    productWeight?: SortOrder
    productVolume?: SortOrder
    quantity?: SortOrder
    amount?: SortOrder
    invoiceId?: SortOrder
  }

  export type InvoiceProductSumOrderByAggregateInput = {
    productWeight?: SortOrder
    productVolume?: SortOrder
    quantity?: SortOrder
    amount?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductNCMCreateNestedOneWithoutProductInput = {
    create?: XOR<ProductNCMCreateWithoutProductInput, ProductNCMUncheckedCreateWithoutProductInput>
    connectOrCreate?: ProductNCMCreateOrConnectWithoutProductInput
    connect?: ProductNCMWhereUniqueInput
  }

  export type ProductNCMUpdateOneRequiredWithoutProductNestedInput = {
    create?: XOR<ProductNCMCreateWithoutProductInput, ProductNCMUncheckedCreateWithoutProductInput>
    connectOrCreate?: ProductNCMCreateOrConnectWithoutProductInput
    upsert?: ProductNCMUpsertWithoutProductInput
    connect?: ProductNCMWhereUniqueInput
    update?: XOR<XOR<ProductNCMUpdateToOneWithWhereWithoutProductInput, ProductNCMUpdateWithoutProductInput>, ProductNCMUncheckedUpdateWithoutProductInput>
  }

  export type ProductCreateNestedManyWithoutNcmInput = {
    create?: XOR<ProductCreateWithoutNcmInput, ProductUncheckedCreateWithoutNcmInput> | ProductCreateWithoutNcmInput[] | ProductUncheckedCreateWithoutNcmInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutNcmInput | ProductCreateOrConnectWithoutNcmInput[]
    createMany?: ProductCreateManyNcmInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutNcmInput = {
    create?: XOR<ProductCreateWithoutNcmInput, ProductUncheckedCreateWithoutNcmInput> | ProductCreateWithoutNcmInput[] | ProductUncheckedCreateWithoutNcmInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutNcmInput | ProductCreateOrConnectWithoutNcmInput[]
    createMany?: ProductCreateManyNcmInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUpdateManyWithoutNcmNestedInput = {
    create?: XOR<ProductCreateWithoutNcmInput, ProductUncheckedCreateWithoutNcmInput> | ProductCreateWithoutNcmInput[] | ProductUncheckedCreateWithoutNcmInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutNcmInput | ProductCreateOrConnectWithoutNcmInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutNcmInput | ProductUpsertWithWhereUniqueWithoutNcmInput[]
    createMany?: ProductCreateManyNcmInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutNcmInput | ProductUpdateWithWhereUniqueWithoutNcmInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutNcmInput | ProductUpdateManyWithWhereWithoutNcmInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutNcmNestedInput = {
    create?: XOR<ProductCreateWithoutNcmInput, ProductUncheckedCreateWithoutNcmInput> | ProductCreateWithoutNcmInput[] | ProductUncheckedCreateWithoutNcmInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutNcmInput | ProductCreateOrConnectWithoutNcmInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutNcmInput | ProductUpsertWithWhereUniqueWithoutNcmInput[]
    createMany?: ProductCreateManyNcmInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutNcmInput | ProductUpdateWithWhereUniqueWithoutNcmInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutNcmInput | ProductUpdateManyWithWhereWithoutNcmInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type InvoiceProductCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<InvoiceProductCreateWithoutInvoiceInput, InvoiceProductUncheckedCreateWithoutInvoiceInput> | InvoiceProductCreateWithoutInvoiceInput[] | InvoiceProductUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: InvoiceProductCreateOrConnectWithoutInvoiceInput | InvoiceProductCreateOrConnectWithoutInvoiceInput[]
    createMany?: InvoiceProductCreateManyInvoiceInputEnvelope
    connect?: InvoiceProductWhereUniqueInput | InvoiceProductWhereUniqueInput[]
  }

  export type InvoiceProductUncheckedCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<InvoiceProductCreateWithoutInvoiceInput, InvoiceProductUncheckedCreateWithoutInvoiceInput> | InvoiceProductCreateWithoutInvoiceInput[] | InvoiceProductUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: InvoiceProductCreateOrConnectWithoutInvoiceInput | InvoiceProductCreateOrConnectWithoutInvoiceInput[]
    createMany?: InvoiceProductCreateManyInvoiceInputEnvelope
    connect?: InvoiceProductWhereUniqueInput | InvoiceProductWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type InvoiceProductUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<InvoiceProductCreateWithoutInvoiceInput, InvoiceProductUncheckedCreateWithoutInvoiceInput> | InvoiceProductCreateWithoutInvoiceInput[] | InvoiceProductUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: InvoiceProductCreateOrConnectWithoutInvoiceInput | InvoiceProductCreateOrConnectWithoutInvoiceInput[]
    upsert?: InvoiceProductUpsertWithWhereUniqueWithoutInvoiceInput | InvoiceProductUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: InvoiceProductCreateManyInvoiceInputEnvelope
    set?: InvoiceProductWhereUniqueInput | InvoiceProductWhereUniqueInput[]
    disconnect?: InvoiceProductWhereUniqueInput | InvoiceProductWhereUniqueInput[]
    delete?: InvoiceProductWhereUniqueInput | InvoiceProductWhereUniqueInput[]
    connect?: InvoiceProductWhereUniqueInput | InvoiceProductWhereUniqueInput[]
    update?: InvoiceProductUpdateWithWhereUniqueWithoutInvoiceInput | InvoiceProductUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: InvoiceProductUpdateManyWithWhereWithoutInvoiceInput | InvoiceProductUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: InvoiceProductScalarWhereInput | InvoiceProductScalarWhereInput[]
  }

  export type InvoiceProductUncheckedUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<InvoiceProductCreateWithoutInvoiceInput, InvoiceProductUncheckedCreateWithoutInvoiceInput> | InvoiceProductCreateWithoutInvoiceInput[] | InvoiceProductUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: InvoiceProductCreateOrConnectWithoutInvoiceInput | InvoiceProductCreateOrConnectWithoutInvoiceInput[]
    upsert?: InvoiceProductUpsertWithWhereUniqueWithoutInvoiceInput | InvoiceProductUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: InvoiceProductCreateManyInvoiceInputEnvelope
    set?: InvoiceProductWhereUniqueInput | InvoiceProductWhereUniqueInput[]
    disconnect?: InvoiceProductWhereUniqueInput | InvoiceProductWhereUniqueInput[]
    delete?: InvoiceProductWhereUniqueInput | InvoiceProductWhereUniqueInput[]
    connect?: InvoiceProductWhereUniqueInput | InvoiceProductWhereUniqueInput[]
    update?: InvoiceProductUpdateWithWhereUniqueWithoutInvoiceInput | InvoiceProductUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: InvoiceProductUpdateManyWithWhereWithoutInvoiceInput | InvoiceProductUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: InvoiceProductScalarWhereInput | InvoiceProductScalarWhereInput[]
  }

  export type InvoiceCreateNestedOneWithoutProductsInput = {
    create?: XOR<InvoiceCreateWithoutProductsInput, InvoiceUncheckedCreateWithoutProductsInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutProductsInput
    connect?: InvoiceWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type InvoiceUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<InvoiceCreateWithoutProductsInput, InvoiceUncheckedCreateWithoutProductsInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutProductsInput
    upsert?: InvoiceUpsertWithoutProductsInput
    connect?: InvoiceWhereUniqueInput
    update?: XOR<XOR<InvoiceUpdateToOneWithWhereWithoutProductsInput, InvoiceUpdateWithoutProductsInput>, InvoiceUncheckedUpdateWithoutProductsInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type ProductNCMCreateWithoutProductInput = {
    id?: string
    code: number
    cofins: number
    icms: number
    ipi: number
    pis: number
    tax: number
  }

  export type ProductNCMUncheckedCreateWithoutProductInput = {
    id?: string
    code: number
    cofins: number
    icms: number
    ipi: number
    pis: number
    tax: number
  }

  export type ProductNCMCreateOrConnectWithoutProductInput = {
    where: ProductNCMWhereUniqueInput
    create: XOR<ProductNCMCreateWithoutProductInput, ProductNCMUncheckedCreateWithoutProductInput>
  }

  export type ProductNCMUpsertWithoutProductInput = {
    update: XOR<ProductNCMUpdateWithoutProductInput, ProductNCMUncheckedUpdateWithoutProductInput>
    create: XOR<ProductNCMCreateWithoutProductInput, ProductNCMUncheckedCreateWithoutProductInput>
    where?: ProductNCMWhereInput
  }

  export type ProductNCMUpdateToOneWithWhereWithoutProductInput = {
    where?: ProductNCMWhereInput
    data: XOR<ProductNCMUpdateWithoutProductInput, ProductNCMUncheckedUpdateWithoutProductInput>
  }

  export type ProductNCMUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: FloatFieldUpdateOperationsInput | number
    cofins?: FloatFieldUpdateOperationsInput | number
    icms?: FloatFieldUpdateOperationsInput | number
    ipi?: FloatFieldUpdateOperationsInput | number
    pis?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
  }

  export type ProductNCMUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: FloatFieldUpdateOperationsInput | number
    cofins?: FloatFieldUpdateOperationsInput | number
    icms?: FloatFieldUpdateOperationsInput | number
    ipi?: FloatFieldUpdateOperationsInput | number
    pis?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
  }

  export type ProductCreateWithoutNcmInput = {
    id?: string
    name?: string
    weight: number
    length: number
    height: number
    width: number
  }

  export type ProductUncheckedCreateWithoutNcmInput = {
    id?: string
    name?: string
    weight: number
    length: number
    height: number
    width: number
  }

  export type ProductCreateOrConnectWithoutNcmInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutNcmInput, ProductUncheckedCreateWithoutNcmInput>
  }

  export type ProductCreateManyNcmInputEnvelope = {
    data: ProductCreateManyNcmInput | ProductCreateManyNcmInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutNcmInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutNcmInput, ProductUncheckedUpdateWithoutNcmInput>
    create: XOR<ProductCreateWithoutNcmInput, ProductUncheckedCreateWithoutNcmInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutNcmInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutNcmInput, ProductUncheckedUpdateWithoutNcmInput>
  }

  export type ProductUpdateManyWithWhereWithoutNcmInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutNcmInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    weight?: FloatFilter<"Product"> | number
    length?: FloatFilter<"Product"> | number
    height?: FloatFilter<"Product"> | number
    width?: FloatFilter<"Product"> | number
    ncmId?: StringFilter<"Product"> | string
  }

  export type InvoiceProductCreateWithoutInvoiceInput = {
    id?: string
    productId: string
    productName: string
    productWeight: number
    productVolume: number
    quantity?: number
    amount?: number
  }

  export type InvoiceProductUncheckedCreateWithoutInvoiceInput = {
    id?: string
    productId: string
    productName: string
    productWeight: number
    productVolume: number
    quantity?: number
    amount?: number
  }

  export type InvoiceProductCreateOrConnectWithoutInvoiceInput = {
    where: InvoiceProductWhereUniqueInput
    create: XOR<InvoiceProductCreateWithoutInvoiceInput, InvoiceProductUncheckedCreateWithoutInvoiceInput>
  }

  export type InvoiceProductCreateManyInvoiceInputEnvelope = {
    data: InvoiceProductCreateManyInvoiceInput | InvoiceProductCreateManyInvoiceInput[]
    skipDuplicates?: boolean
  }

  export type InvoiceProductUpsertWithWhereUniqueWithoutInvoiceInput = {
    where: InvoiceProductWhereUniqueInput
    update: XOR<InvoiceProductUpdateWithoutInvoiceInput, InvoiceProductUncheckedUpdateWithoutInvoiceInput>
    create: XOR<InvoiceProductCreateWithoutInvoiceInput, InvoiceProductUncheckedCreateWithoutInvoiceInput>
  }

  export type InvoiceProductUpdateWithWhereUniqueWithoutInvoiceInput = {
    where: InvoiceProductWhereUniqueInput
    data: XOR<InvoiceProductUpdateWithoutInvoiceInput, InvoiceProductUncheckedUpdateWithoutInvoiceInput>
  }

  export type InvoiceProductUpdateManyWithWhereWithoutInvoiceInput = {
    where: InvoiceProductScalarWhereInput
    data: XOR<InvoiceProductUpdateManyMutationInput, InvoiceProductUncheckedUpdateManyWithoutInvoiceInput>
  }

  export type InvoiceProductScalarWhereInput = {
    AND?: InvoiceProductScalarWhereInput | InvoiceProductScalarWhereInput[]
    OR?: InvoiceProductScalarWhereInput[]
    NOT?: InvoiceProductScalarWhereInput | InvoiceProductScalarWhereInput[]
    id?: StringFilter<"InvoiceProduct"> | string
    productId?: StringFilter<"InvoiceProduct"> | string
    productName?: StringFilter<"InvoiceProduct"> | string
    productWeight?: FloatFilter<"InvoiceProduct"> | number
    productVolume?: FloatFilter<"InvoiceProduct"> | number
    quantity?: IntFilter<"InvoiceProduct"> | number
    amount?: FloatFilter<"InvoiceProduct"> | number
    invoiceId?: StringFilter<"InvoiceProduct"> | string
  }

  export type InvoiceCreateWithoutProductsInput = {
    id?: string
    registration: string
    createdAt?: Date | string
    quote: number
  }

  export type InvoiceUncheckedCreateWithoutProductsInput = {
    id?: string
    registration: string
    createdAt?: Date | string
    quote: number
  }

  export type InvoiceCreateOrConnectWithoutProductsInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutProductsInput, InvoiceUncheckedCreateWithoutProductsInput>
  }

  export type InvoiceUpsertWithoutProductsInput = {
    update: XOR<InvoiceUpdateWithoutProductsInput, InvoiceUncheckedUpdateWithoutProductsInput>
    create: XOR<InvoiceCreateWithoutProductsInput, InvoiceUncheckedCreateWithoutProductsInput>
    where?: InvoiceWhereInput
  }

  export type InvoiceUpdateToOneWithWhereWithoutProductsInput = {
    where?: InvoiceWhereInput
    data: XOR<InvoiceUpdateWithoutProductsInput, InvoiceUncheckedUpdateWithoutProductsInput>
  }

  export type InvoiceUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    registration?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quote?: FloatFieldUpdateOperationsInput | number
  }

  export type InvoiceUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    registration?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quote?: FloatFieldUpdateOperationsInput | number
  }

  export type ProductCreateManyNcmInput = {
    id?: string
    name?: string
    weight: number
    length: number
    height: number
    width: number
  }

  export type ProductUpdateWithoutNcmInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    length?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    width?: FloatFieldUpdateOperationsInput | number
  }

  export type ProductUncheckedUpdateWithoutNcmInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    length?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    width?: FloatFieldUpdateOperationsInput | number
  }

  export type ProductUncheckedUpdateManyWithoutNcmInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    length?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    width?: FloatFieldUpdateOperationsInput | number
  }

  export type InvoiceProductCreateManyInvoiceInput = {
    id?: string
    productId: string
    productName: string
    productWeight: number
    productVolume: number
    quantity?: number
    amount?: number
  }

  export type InvoiceProductUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productWeight?: FloatFieldUpdateOperationsInput | number
    productVolume?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type InvoiceProductUncheckedUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productWeight?: FloatFieldUpdateOperationsInput | number
    productVolume?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type InvoiceProductUncheckedUpdateManyWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productWeight?: FloatFieldUpdateOperationsInput | number
    productVolume?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
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