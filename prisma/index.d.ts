
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    NCM: 'NCM'
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
      modelProps: "nCM"
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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
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