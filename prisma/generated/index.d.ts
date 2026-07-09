
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Package
 * 
 */
export type Package = $Result.DefaultSelection<Prisma.$PackagePayload>
/**
 * Model TrackingUpdate
 * 
 */
export type TrackingUpdate = $Result.DefaultSelection<Prisma.$TrackingUpdatePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  SENDER: 'SENDER',
  RECEIVER: 'RECEIVER',
  ADMIN: 'ADMIN',
  RIDER: 'RIDER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const PackageStatus: {
  PENDING: 'PENDING',
  PICKED_UP: 'PICKED_UP',
  IN_TRANSIT: 'IN_TRANSIT',
  DELIVERED: 'DELIVERED',
  CANCELLED: 'CANCELLED'
};

export type PackageStatus = (typeof PackageStatus)[keyof typeof PackageStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type PackageStatus = $Enums.PackageStatus

export const PackageStatus: typeof $Enums.PackageStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.package`: Exposes CRUD operations for the **Package** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Packages
    * const packages = await prisma.package.findMany()
    * ```
    */
  get package(): Prisma.PackageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trackingUpdate`: Exposes CRUD operations for the **TrackingUpdate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrackingUpdates
    * const trackingUpdates = await prisma.trackingUpdate.findMany()
    * ```
    */
  get trackingUpdate(): Prisma.TrackingUpdateDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    User: 'User',
    Package: 'Package',
    TrackingUpdate: 'TrackingUpdate'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "package" | "trackingUpdate"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Package: {
        payload: Prisma.$PackagePayload<ExtArgs>
        fields: Prisma.PackageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PackageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PackageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          findFirst: {
            args: Prisma.PackageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PackageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          findMany: {
            args: Prisma.PackageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>[]
          }
          create: {
            args: Prisma.PackageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          createMany: {
            args: Prisma.PackageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PackageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>[]
          }
          delete: {
            args: Prisma.PackageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          update: {
            args: Prisma.PackageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          deleteMany: {
            args: Prisma.PackageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PackageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PackageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>[]
          }
          upsert: {
            args: Prisma.PackageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          aggregate: {
            args: Prisma.PackageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePackage>
          }
          groupBy: {
            args: Prisma.PackageGroupByArgs<ExtArgs>
            result: $Utils.Optional<PackageGroupByOutputType>[]
          }
          count: {
            args: Prisma.PackageCountArgs<ExtArgs>
            result: $Utils.Optional<PackageCountAggregateOutputType> | number
          }
        }
      }
      TrackingUpdate: {
        payload: Prisma.$TrackingUpdatePayload<ExtArgs>
        fields: Prisma.TrackingUpdateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrackingUpdateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackingUpdatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrackingUpdateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackingUpdatePayload>
          }
          findFirst: {
            args: Prisma.TrackingUpdateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackingUpdatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrackingUpdateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackingUpdatePayload>
          }
          findMany: {
            args: Prisma.TrackingUpdateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackingUpdatePayload>[]
          }
          create: {
            args: Prisma.TrackingUpdateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackingUpdatePayload>
          }
          createMany: {
            args: Prisma.TrackingUpdateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TrackingUpdateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackingUpdatePayload>[]
          }
          delete: {
            args: Prisma.TrackingUpdateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackingUpdatePayload>
          }
          update: {
            args: Prisma.TrackingUpdateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackingUpdatePayload>
          }
          deleteMany: {
            args: Prisma.TrackingUpdateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrackingUpdateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TrackingUpdateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackingUpdatePayload>[]
          }
          upsert: {
            args: Prisma.TrackingUpdateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackingUpdatePayload>
          }
          aggregate: {
            args: Prisma.TrackingUpdateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrackingUpdate>
          }
          groupBy: {
            args: Prisma.TrackingUpdateGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrackingUpdateGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrackingUpdateCountArgs<ExtArgs>
            result: $Utils.Optional<TrackingUpdateCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    package?: PackageOmit
    trackingUpdate?: TrackingUpdateOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sentPackages: number
    receivedPackages: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sentPackages?: boolean | UserCountOutputTypeCountSentPackagesArgs
    receivedPackages?: boolean | UserCountOutputTypeCountReceivedPackagesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentPackagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PackageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedPackagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PackageWhereInput
  }


  /**
   * Count Type PackageCountOutputType
   */

  export type PackageCountOutputType = {
    updates: number
  }

  export type PackageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    updates?: boolean | PackageCountOutputTypeCountUpdatesArgs
  }

  // Custom InputTypes
  /**
   * PackageCountOutputType without action
   */
  export type PackageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageCountOutputType
     */
    select?: PackageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PackageCountOutputType without action
   */
  export type PackageCountOutputTypeCountUpdatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackingUpdateWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    fullName: number
    email: number
    password: number
    role: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    fullName: string
    email: string
    password: string
    role: $Enums.UserRole
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    sentPackages?: boolean | User$sentPackagesArgs<ExtArgs>
    receivedPackages?: boolean | User$receivedPackagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "email" | "password" | "role" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sentPackages?: boolean | User$sentPackagesArgs<ExtArgs>
    receivedPackages?: boolean | User$receivedPackagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sentPackages: Prisma.$PackagePayload<ExtArgs>[]
      receivedPackages: Prisma.$PackagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      email: string
      password: string
      role: $Enums.UserRole
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sentPackages<T extends User$sentPackagesArgs<ExtArgs> = {}>(args?: Subset<T, User$sentPackagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedPackages<T extends User$receivedPackagesArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedPackagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.sentPackages
   */
  export type User$sentPackagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    where?: PackageWhereInput
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    cursor?: PackageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PackageScalarFieldEnum | PackageScalarFieldEnum[]
  }

  /**
   * User.receivedPackages
   */
  export type User$receivedPackagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    where?: PackageWhereInput
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    cursor?: PackageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PackageScalarFieldEnum | PackageScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Package
   */

  export type AggregatePackage = {
    _count: PackageCountAggregateOutputType | null
    _avg: PackageAvgAggregateOutputType | null
    _sum: PackageSumAggregateOutputType | null
    _min: PackageMinAggregateOutputType | null
    _max: PackageMaxAggregateOutputType | null
  }

  export type PackageAvgAggregateOutputType = {
    weight: number | null
    deliveryFee: number | null
  }

  export type PackageSumAggregateOutputType = {
    weight: number | null
    deliveryFee: number | null
  }

  export type PackageMinAggregateOutputType = {
    id: string | null
    trackingNumber: string | null
    itemName: string | null
    description: string | null
    weight: number | null
    deliveryFee: number | null
    status: $Enums.PackageStatus | null
    senderName: string | null
    senderPhone: string | null
    senderAddress: string | null
    senderLga: string | null
    senderState: string | null
    receiverName: string | null
    receiverPhone: string | null
    receiverAddress: string | null
    receiverLga: string | null
    receiverState: string | null
    currentLga: string | null
    currentState: string | null
    senderId: string | null
    receiverId: string | null
    createdAt: Date | null
  }

  export type PackageMaxAggregateOutputType = {
    id: string | null
    trackingNumber: string | null
    itemName: string | null
    description: string | null
    weight: number | null
    deliveryFee: number | null
    status: $Enums.PackageStatus | null
    senderName: string | null
    senderPhone: string | null
    senderAddress: string | null
    senderLga: string | null
    senderState: string | null
    receiverName: string | null
    receiverPhone: string | null
    receiverAddress: string | null
    receiverLga: string | null
    receiverState: string | null
    currentLga: string | null
    currentState: string | null
    senderId: string | null
    receiverId: string | null
    createdAt: Date | null
  }

  export type PackageCountAggregateOutputType = {
    id: number
    trackingNumber: number
    itemName: number
    description: number
    weight: number
    deliveryFee: number
    status: number
    senderName: number
    senderPhone: number
    senderAddress: number
    senderLga: number
    senderState: number
    receiverName: number
    receiverPhone: number
    receiverAddress: number
    receiverLga: number
    receiverState: number
    currentLga: number
    currentState: number
    senderId: number
    receiverId: number
    createdAt: number
    _all: number
  }


  export type PackageAvgAggregateInputType = {
    weight?: true
    deliveryFee?: true
  }

  export type PackageSumAggregateInputType = {
    weight?: true
    deliveryFee?: true
  }

  export type PackageMinAggregateInputType = {
    id?: true
    trackingNumber?: true
    itemName?: true
    description?: true
    weight?: true
    deliveryFee?: true
    status?: true
    senderName?: true
    senderPhone?: true
    senderAddress?: true
    senderLga?: true
    senderState?: true
    receiverName?: true
    receiverPhone?: true
    receiverAddress?: true
    receiverLga?: true
    receiverState?: true
    currentLga?: true
    currentState?: true
    senderId?: true
    receiverId?: true
    createdAt?: true
  }

  export type PackageMaxAggregateInputType = {
    id?: true
    trackingNumber?: true
    itemName?: true
    description?: true
    weight?: true
    deliveryFee?: true
    status?: true
    senderName?: true
    senderPhone?: true
    senderAddress?: true
    senderLga?: true
    senderState?: true
    receiverName?: true
    receiverPhone?: true
    receiverAddress?: true
    receiverLga?: true
    receiverState?: true
    currentLga?: true
    currentState?: true
    senderId?: true
    receiverId?: true
    createdAt?: true
  }

  export type PackageCountAggregateInputType = {
    id?: true
    trackingNumber?: true
    itemName?: true
    description?: true
    weight?: true
    deliveryFee?: true
    status?: true
    senderName?: true
    senderPhone?: true
    senderAddress?: true
    senderLga?: true
    senderState?: true
    receiverName?: true
    receiverPhone?: true
    receiverAddress?: true
    receiverLga?: true
    receiverState?: true
    currentLga?: true
    currentState?: true
    senderId?: true
    receiverId?: true
    createdAt?: true
    _all?: true
  }

  export type PackageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Package to aggregate.
     */
    where?: PackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packages to fetch.
     */
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Packages
    **/
    _count?: true | PackageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PackageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PackageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PackageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PackageMaxAggregateInputType
  }

  export type GetPackageAggregateType<T extends PackageAggregateArgs> = {
        [P in keyof T & keyof AggregatePackage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePackage[P]>
      : GetScalarType<T[P], AggregatePackage[P]>
  }




  export type PackageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PackageWhereInput
    orderBy?: PackageOrderByWithAggregationInput | PackageOrderByWithAggregationInput[]
    by: PackageScalarFieldEnum[] | PackageScalarFieldEnum
    having?: PackageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PackageCountAggregateInputType | true
    _avg?: PackageAvgAggregateInputType
    _sum?: PackageSumAggregateInputType
    _min?: PackageMinAggregateInputType
    _max?: PackageMaxAggregateInputType
  }

  export type PackageGroupByOutputType = {
    id: string
    trackingNumber: string
    itemName: string
    description: string | null
    weight: number
    deliveryFee: number
    status: $Enums.PackageStatus
    senderName: string
    senderPhone: string
    senderAddress: string
    senderLga: string
    senderState: string
    receiverName: string
    receiverPhone: string
    receiverAddress: string
    receiverLga: string
    receiverState: string
    currentLga: string | null
    currentState: string | null
    senderId: string
    receiverId: string
    createdAt: Date
    _count: PackageCountAggregateOutputType | null
    _avg: PackageAvgAggregateOutputType | null
    _sum: PackageSumAggregateOutputType | null
    _min: PackageMinAggregateOutputType | null
    _max: PackageMaxAggregateOutputType | null
  }

  type GetPackageGroupByPayload<T extends PackageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PackageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PackageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PackageGroupByOutputType[P]>
            : GetScalarType<T[P], PackageGroupByOutputType[P]>
        }
      >
    >


  export type PackageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trackingNumber?: boolean
    itemName?: boolean
    description?: boolean
    weight?: boolean
    deliveryFee?: boolean
    status?: boolean
    senderName?: boolean
    senderPhone?: boolean
    senderAddress?: boolean
    senderLga?: boolean
    senderState?: boolean
    receiverName?: boolean
    receiverPhone?: boolean
    receiverAddress?: boolean
    receiverLga?: boolean
    receiverState?: boolean
    currentLga?: boolean
    currentState?: boolean
    senderId?: boolean
    receiverId?: boolean
    createdAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    updates?: boolean | Package$updatesArgs<ExtArgs>
    _count?: boolean | PackageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["package"]>

  export type PackageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trackingNumber?: boolean
    itemName?: boolean
    description?: boolean
    weight?: boolean
    deliveryFee?: boolean
    status?: boolean
    senderName?: boolean
    senderPhone?: boolean
    senderAddress?: boolean
    senderLga?: boolean
    senderState?: boolean
    receiverName?: boolean
    receiverPhone?: boolean
    receiverAddress?: boolean
    receiverLga?: boolean
    receiverState?: boolean
    currentLga?: boolean
    currentState?: boolean
    senderId?: boolean
    receiverId?: boolean
    createdAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["package"]>

  export type PackageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trackingNumber?: boolean
    itemName?: boolean
    description?: boolean
    weight?: boolean
    deliveryFee?: boolean
    status?: boolean
    senderName?: boolean
    senderPhone?: boolean
    senderAddress?: boolean
    senderLga?: boolean
    senderState?: boolean
    receiverName?: boolean
    receiverPhone?: boolean
    receiverAddress?: boolean
    receiverLga?: boolean
    receiverState?: boolean
    currentLga?: boolean
    currentState?: boolean
    senderId?: boolean
    receiverId?: boolean
    createdAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["package"]>

  export type PackageSelectScalar = {
    id?: boolean
    trackingNumber?: boolean
    itemName?: boolean
    description?: boolean
    weight?: boolean
    deliveryFee?: boolean
    status?: boolean
    senderName?: boolean
    senderPhone?: boolean
    senderAddress?: boolean
    senderLga?: boolean
    senderState?: boolean
    receiverName?: boolean
    receiverPhone?: boolean
    receiverAddress?: boolean
    receiverLga?: boolean
    receiverState?: boolean
    currentLga?: boolean
    currentState?: boolean
    senderId?: boolean
    receiverId?: boolean
    createdAt?: boolean
  }

  export type PackageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "trackingNumber" | "itemName" | "description" | "weight" | "deliveryFee" | "status" | "senderName" | "senderPhone" | "senderAddress" | "senderLga" | "senderState" | "receiverName" | "receiverPhone" | "receiverAddress" | "receiverLga" | "receiverState" | "currentLga" | "currentState" | "senderId" | "receiverId" | "createdAt", ExtArgs["result"]["package"]>
  export type PackageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    updates?: boolean | Package$updatesArgs<ExtArgs>
    _count?: boolean | PackageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PackageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PackageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PackagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Package"
    objects: {
      sender: Prisma.$UserPayload<ExtArgs>
      receiver: Prisma.$UserPayload<ExtArgs>
      updates: Prisma.$TrackingUpdatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      trackingNumber: string
      itemName: string
      description: string | null
      weight: number
      deliveryFee: number
      status: $Enums.PackageStatus
      senderName: string
      senderPhone: string
      senderAddress: string
      senderLga: string
      senderState: string
      receiverName: string
      receiverPhone: string
      receiverAddress: string
      receiverLga: string
      receiverState: string
      currentLga: string | null
      currentState: string | null
      senderId: string
      receiverId: string
      createdAt: Date
    }, ExtArgs["result"]["package"]>
    composites: {}
  }

  type PackageGetPayload<S extends boolean | null | undefined | PackageDefaultArgs> = $Result.GetResult<Prisma.$PackagePayload, S>

  type PackageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PackageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PackageCountAggregateInputType | true
    }

  export interface PackageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Package'], meta: { name: 'Package' } }
    /**
     * Find zero or one Package that matches the filter.
     * @param {PackageFindUniqueArgs} args - Arguments to find a Package
     * @example
     * // Get one Package
     * const package = await prisma.package.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PackageFindUniqueArgs>(args: SelectSubset<T, PackageFindUniqueArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Package that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PackageFindUniqueOrThrowArgs} args - Arguments to find a Package
     * @example
     * // Get one Package
     * const package = await prisma.package.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PackageFindUniqueOrThrowArgs>(args: SelectSubset<T, PackageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Package that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageFindFirstArgs} args - Arguments to find a Package
     * @example
     * // Get one Package
     * const package = await prisma.package.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PackageFindFirstArgs>(args?: SelectSubset<T, PackageFindFirstArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Package that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageFindFirstOrThrowArgs} args - Arguments to find a Package
     * @example
     * // Get one Package
     * const package = await prisma.package.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PackageFindFirstOrThrowArgs>(args?: SelectSubset<T, PackageFindFirstOrThrowArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Packages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Packages
     * const packages = await prisma.package.findMany()
     * 
     * // Get first 10 Packages
     * const packages = await prisma.package.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const packageWithIdOnly = await prisma.package.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PackageFindManyArgs>(args?: SelectSubset<T, PackageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Package.
     * @param {PackageCreateArgs} args - Arguments to create a Package.
     * @example
     * // Create one Package
     * const Package = await prisma.package.create({
     *   data: {
     *     // ... data to create a Package
     *   }
     * })
     * 
     */
    create<T extends PackageCreateArgs>(args: SelectSubset<T, PackageCreateArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Packages.
     * @param {PackageCreateManyArgs} args - Arguments to create many Packages.
     * @example
     * // Create many Packages
     * const package = await prisma.package.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PackageCreateManyArgs>(args?: SelectSubset<T, PackageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Packages and returns the data saved in the database.
     * @param {PackageCreateManyAndReturnArgs} args - Arguments to create many Packages.
     * @example
     * // Create many Packages
     * const package = await prisma.package.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Packages and only return the `id`
     * const packageWithIdOnly = await prisma.package.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PackageCreateManyAndReturnArgs>(args?: SelectSubset<T, PackageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Package.
     * @param {PackageDeleteArgs} args - Arguments to delete one Package.
     * @example
     * // Delete one Package
     * const Package = await prisma.package.delete({
     *   where: {
     *     // ... filter to delete one Package
     *   }
     * })
     * 
     */
    delete<T extends PackageDeleteArgs>(args: SelectSubset<T, PackageDeleteArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Package.
     * @param {PackageUpdateArgs} args - Arguments to update one Package.
     * @example
     * // Update one Package
     * const package = await prisma.package.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PackageUpdateArgs>(args: SelectSubset<T, PackageUpdateArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Packages.
     * @param {PackageDeleteManyArgs} args - Arguments to filter Packages to delete.
     * @example
     * // Delete a few Packages
     * const { count } = await prisma.package.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PackageDeleteManyArgs>(args?: SelectSubset<T, PackageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Packages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Packages
     * const package = await prisma.package.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PackageUpdateManyArgs>(args: SelectSubset<T, PackageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Packages and returns the data updated in the database.
     * @param {PackageUpdateManyAndReturnArgs} args - Arguments to update many Packages.
     * @example
     * // Update many Packages
     * const package = await prisma.package.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Packages and only return the `id`
     * const packageWithIdOnly = await prisma.package.updateManyAndReturn({
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
    updateManyAndReturn<T extends PackageUpdateManyAndReturnArgs>(args: SelectSubset<T, PackageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Package.
     * @param {PackageUpsertArgs} args - Arguments to update or create a Package.
     * @example
     * // Update or create a Package
     * const package = await prisma.package.upsert({
     *   create: {
     *     // ... data to create a Package
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Package we want to update
     *   }
     * })
     */
    upsert<T extends PackageUpsertArgs>(args: SelectSubset<T, PackageUpsertArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Packages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageCountArgs} args - Arguments to filter Packages to count.
     * @example
     * // Count the number of Packages
     * const count = await prisma.package.count({
     *   where: {
     *     // ... the filter for the Packages we want to count
     *   }
     * })
    **/
    count<T extends PackageCountArgs>(
      args?: Subset<T, PackageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PackageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Package.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PackageAggregateArgs>(args: Subset<T, PackageAggregateArgs>): Prisma.PrismaPromise<GetPackageAggregateType<T>>

    /**
     * Group by Package.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageGroupByArgs} args - Group by arguments.
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
      T extends PackageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PackageGroupByArgs['orderBy'] }
        : { orderBy?: PackageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PackageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPackageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Package model
   */
  readonly fields: PackageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Package.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PackageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    updates<T extends Package$updatesArgs<ExtArgs> = {}>(args?: Subset<T, Package$updatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackingUpdatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Package model
   */
  interface PackageFieldRefs {
    readonly id: FieldRef<"Package", 'String'>
    readonly trackingNumber: FieldRef<"Package", 'String'>
    readonly itemName: FieldRef<"Package", 'String'>
    readonly description: FieldRef<"Package", 'String'>
    readonly weight: FieldRef<"Package", 'Float'>
    readonly deliveryFee: FieldRef<"Package", 'Float'>
    readonly status: FieldRef<"Package", 'PackageStatus'>
    readonly senderName: FieldRef<"Package", 'String'>
    readonly senderPhone: FieldRef<"Package", 'String'>
    readonly senderAddress: FieldRef<"Package", 'String'>
    readonly senderLga: FieldRef<"Package", 'String'>
    readonly senderState: FieldRef<"Package", 'String'>
    readonly receiverName: FieldRef<"Package", 'String'>
    readonly receiverPhone: FieldRef<"Package", 'String'>
    readonly receiverAddress: FieldRef<"Package", 'String'>
    readonly receiverLga: FieldRef<"Package", 'String'>
    readonly receiverState: FieldRef<"Package", 'String'>
    readonly currentLga: FieldRef<"Package", 'String'>
    readonly currentState: FieldRef<"Package", 'String'>
    readonly senderId: FieldRef<"Package", 'String'>
    readonly receiverId: FieldRef<"Package", 'String'>
    readonly createdAt: FieldRef<"Package", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Package findUnique
   */
  export type PackageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter, which Package to fetch.
     */
    where: PackageWhereUniqueInput
  }

  /**
   * Package findUniqueOrThrow
   */
  export type PackageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter, which Package to fetch.
     */
    where: PackageWhereUniqueInput
  }

  /**
   * Package findFirst
   */
  export type PackageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter, which Package to fetch.
     */
    where?: PackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packages to fetch.
     */
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Packages.
     */
    cursor?: PackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Packages.
     */
    distinct?: PackageScalarFieldEnum | PackageScalarFieldEnum[]
  }

  /**
   * Package findFirstOrThrow
   */
  export type PackageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter, which Package to fetch.
     */
    where?: PackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packages to fetch.
     */
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Packages.
     */
    cursor?: PackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Packages.
     */
    distinct?: PackageScalarFieldEnum | PackageScalarFieldEnum[]
  }

  /**
   * Package findMany
   */
  export type PackageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter, which Packages to fetch.
     */
    where?: PackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packages to fetch.
     */
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Packages.
     */
    cursor?: PackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Packages.
     */
    distinct?: PackageScalarFieldEnum | PackageScalarFieldEnum[]
  }

  /**
   * Package create
   */
  export type PackageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * The data needed to create a Package.
     */
    data: XOR<PackageCreateInput, PackageUncheckedCreateInput>
  }

  /**
   * Package createMany
   */
  export type PackageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Packages.
     */
    data: PackageCreateManyInput | PackageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Package createManyAndReturn
   */
  export type PackageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * The data used to create many Packages.
     */
    data: PackageCreateManyInput | PackageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Package update
   */
  export type PackageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * The data needed to update a Package.
     */
    data: XOR<PackageUpdateInput, PackageUncheckedUpdateInput>
    /**
     * Choose, which Package to update.
     */
    where: PackageWhereUniqueInput
  }

  /**
   * Package updateMany
   */
  export type PackageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Packages.
     */
    data: XOR<PackageUpdateManyMutationInput, PackageUncheckedUpdateManyInput>
    /**
     * Filter which Packages to update
     */
    where?: PackageWhereInput
    /**
     * Limit how many Packages to update.
     */
    limit?: number
  }

  /**
   * Package updateManyAndReturn
   */
  export type PackageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * The data used to update Packages.
     */
    data: XOR<PackageUpdateManyMutationInput, PackageUncheckedUpdateManyInput>
    /**
     * Filter which Packages to update
     */
    where?: PackageWhereInput
    /**
     * Limit how many Packages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Package upsert
   */
  export type PackageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * The filter to search for the Package to update in case it exists.
     */
    where: PackageWhereUniqueInput
    /**
     * In case the Package found by the `where` argument doesn't exist, create a new Package with this data.
     */
    create: XOR<PackageCreateInput, PackageUncheckedCreateInput>
    /**
     * In case the Package was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PackageUpdateInput, PackageUncheckedUpdateInput>
  }

  /**
   * Package delete
   */
  export type PackageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter which Package to delete.
     */
    where: PackageWhereUniqueInput
  }

  /**
   * Package deleteMany
   */
  export type PackageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Packages to delete
     */
    where?: PackageWhereInput
    /**
     * Limit how many Packages to delete.
     */
    limit?: number
  }

  /**
   * Package.updates
   */
  export type Package$updatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingUpdate
     */
    select?: TrackingUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackingUpdate
     */
    omit?: TrackingUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingUpdateInclude<ExtArgs> | null
    where?: TrackingUpdateWhereInput
    orderBy?: TrackingUpdateOrderByWithRelationInput | TrackingUpdateOrderByWithRelationInput[]
    cursor?: TrackingUpdateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrackingUpdateScalarFieldEnum | TrackingUpdateScalarFieldEnum[]
  }

  /**
   * Package without action
   */
  export type PackageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
  }


  /**
   * Model TrackingUpdate
   */

  export type AggregateTrackingUpdate = {
    _count: TrackingUpdateCountAggregateOutputType | null
    _min: TrackingUpdateMinAggregateOutputType | null
    _max: TrackingUpdateMaxAggregateOutputType | null
  }

  export type TrackingUpdateMinAggregateOutputType = {
    id: string | null
    status: string | null
    note: string | null
    state: string | null
    lga: string | null
    packageId: string | null
    createdAt: Date | null
  }

  export type TrackingUpdateMaxAggregateOutputType = {
    id: string | null
    status: string | null
    note: string | null
    state: string | null
    lga: string | null
    packageId: string | null
    createdAt: Date | null
  }

  export type TrackingUpdateCountAggregateOutputType = {
    id: number
    status: number
    note: number
    state: number
    lga: number
    packageId: number
    createdAt: number
    _all: number
  }


  export type TrackingUpdateMinAggregateInputType = {
    id?: true
    status?: true
    note?: true
    state?: true
    lga?: true
    packageId?: true
    createdAt?: true
  }

  export type TrackingUpdateMaxAggregateInputType = {
    id?: true
    status?: true
    note?: true
    state?: true
    lga?: true
    packageId?: true
    createdAt?: true
  }

  export type TrackingUpdateCountAggregateInputType = {
    id?: true
    status?: true
    note?: true
    state?: true
    lga?: true
    packageId?: true
    createdAt?: true
    _all?: true
  }

  export type TrackingUpdateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrackingUpdate to aggregate.
     */
    where?: TrackingUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackingUpdates to fetch.
     */
    orderBy?: TrackingUpdateOrderByWithRelationInput | TrackingUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrackingUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackingUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackingUpdates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TrackingUpdates
    **/
    _count?: true | TrackingUpdateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrackingUpdateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrackingUpdateMaxAggregateInputType
  }

  export type GetTrackingUpdateAggregateType<T extends TrackingUpdateAggregateArgs> = {
        [P in keyof T & keyof AggregateTrackingUpdate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrackingUpdate[P]>
      : GetScalarType<T[P], AggregateTrackingUpdate[P]>
  }




  export type TrackingUpdateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackingUpdateWhereInput
    orderBy?: TrackingUpdateOrderByWithAggregationInput | TrackingUpdateOrderByWithAggregationInput[]
    by: TrackingUpdateScalarFieldEnum[] | TrackingUpdateScalarFieldEnum
    having?: TrackingUpdateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrackingUpdateCountAggregateInputType | true
    _min?: TrackingUpdateMinAggregateInputType
    _max?: TrackingUpdateMaxAggregateInputType
  }

  export type TrackingUpdateGroupByOutputType = {
    id: string
    status: string
    note: string | null
    state: string | null
    lga: string | null
    packageId: string
    createdAt: Date
    _count: TrackingUpdateCountAggregateOutputType | null
    _min: TrackingUpdateMinAggregateOutputType | null
    _max: TrackingUpdateMaxAggregateOutputType | null
  }

  type GetTrackingUpdateGroupByPayload<T extends TrackingUpdateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrackingUpdateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrackingUpdateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrackingUpdateGroupByOutputType[P]>
            : GetScalarType<T[P], TrackingUpdateGroupByOutputType[P]>
        }
      >
    >


  export type TrackingUpdateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    note?: boolean
    state?: boolean
    lga?: boolean
    packageId?: boolean
    createdAt?: boolean
    package?: boolean | PackageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trackingUpdate"]>

  export type TrackingUpdateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    note?: boolean
    state?: boolean
    lga?: boolean
    packageId?: boolean
    createdAt?: boolean
    package?: boolean | PackageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trackingUpdate"]>

  export type TrackingUpdateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    note?: boolean
    state?: boolean
    lga?: boolean
    packageId?: boolean
    createdAt?: boolean
    package?: boolean | PackageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trackingUpdate"]>

  export type TrackingUpdateSelectScalar = {
    id?: boolean
    status?: boolean
    note?: boolean
    state?: boolean
    lga?: boolean
    packageId?: boolean
    createdAt?: boolean
  }

  export type TrackingUpdateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "note" | "state" | "lga" | "packageId" | "createdAt", ExtArgs["result"]["trackingUpdate"]>
  export type TrackingUpdateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    package?: boolean | PackageDefaultArgs<ExtArgs>
  }
  export type TrackingUpdateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    package?: boolean | PackageDefaultArgs<ExtArgs>
  }
  export type TrackingUpdateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    package?: boolean | PackageDefaultArgs<ExtArgs>
  }

  export type $TrackingUpdatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TrackingUpdate"
    objects: {
      package: Prisma.$PackagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      status: string
      note: string | null
      state: string | null
      lga: string | null
      packageId: string
      createdAt: Date
    }, ExtArgs["result"]["trackingUpdate"]>
    composites: {}
  }

  type TrackingUpdateGetPayload<S extends boolean | null | undefined | TrackingUpdateDefaultArgs> = $Result.GetResult<Prisma.$TrackingUpdatePayload, S>

  type TrackingUpdateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TrackingUpdateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TrackingUpdateCountAggregateInputType | true
    }

  export interface TrackingUpdateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TrackingUpdate'], meta: { name: 'TrackingUpdate' } }
    /**
     * Find zero or one TrackingUpdate that matches the filter.
     * @param {TrackingUpdateFindUniqueArgs} args - Arguments to find a TrackingUpdate
     * @example
     * // Get one TrackingUpdate
     * const trackingUpdate = await prisma.trackingUpdate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrackingUpdateFindUniqueArgs>(args: SelectSubset<T, TrackingUpdateFindUniqueArgs<ExtArgs>>): Prisma__TrackingUpdateClient<$Result.GetResult<Prisma.$TrackingUpdatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TrackingUpdate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrackingUpdateFindUniqueOrThrowArgs} args - Arguments to find a TrackingUpdate
     * @example
     * // Get one TrackingUpdate
     * const trackingUpdate = await prisma.trackingUpdate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrackingUpdateFindUniqueOrThrowArgs>(args: SelectSubset<T, TrackingUpdateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrackingUpdateClient<$Result.GetResult<Prisma.$TrackingUpdatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrackingUpdate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackingUpdateFindFirstArgs} args - Arguments to find a TrackingUpdate
     * @example
     * // Get one TrackingUpdate
     * const trackingUpdate = await prisma.trackingUpdate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrackingUpdateFindFirstArgs>(args?: SelectSubset<T, TrackingUpdateFindFirstArgs<ExtArgs>>): Prisma__TrackingUpdateClient<$Result.GetResult<Prisma.$TrackingUpdatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrackingUpdate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackingUpdateFindFirstOrThrowArgs} args - Arguments to find a TrackingUpdate
     * @example
     * // Get one TrackingUpdate
     * const trackingUpdate = await prisma.trackingUpdate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrackingUpdateFindFirstOrThrowArgs>(args?: SelectSubset<T, TrackingUpdateFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrackingUpdateClient<$Result.GetResult<Prisma.$TrackingUpdatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TrackingUpdates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackingUpdateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrackingUpdates
     * const trackingUpdates = await prisma.trackingUpdate.findMany()
     * 
     * // Get first 10 TrackingUpdates
     * const trackingUpdates = await prisma.trackingUpdate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trackingUpdateWithIdOnly = await prisma.trackingUpdate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TrackingUpdateFindManyArgs>(args?: SelectSubset<T, TrackingUpdateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackingUpdatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TrackingUpdate.
     * @param {TrackingUpdateCreateArgs} args - Arguments to create a TrackingUpdate.
     * @example
     * // Create one TrackingUpdate
     * const TrackingUpdate = await prisma.trackingUpdate.create({
     *   data: {
     *     // ... data to create a TrackingUpdate
     *   }
     * })
     * 
     */
    create<T extends TrackingUpdateCreateArgs>(args: SelectSubset<T, TrackingUpdateCreateArgs<ExtArgs>>): Prisma__TrackingUpdateClient<$Result.GetResult<Prisma.$TrackingUpdatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TrackingUpdates.
     * @param {TrackingUpdateCreateManyArgs} args - Arguments to create many TrackingUpdates.
     * @example
     * // Create many TrackingUpdates
     * const trackingUpdate = await prisma.trackingUpdate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrackingUpdateCreateManyArgs>(args?: SelectSubset<T, TrackingUpdateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TrackingUpdates and returns the data saved in the database.
     * @param {TrackingUpdateCreateManyAndReturnArgs} args - Arguments to create many TrackingUpdates.
     * @example
     * // Create many TrackingUpdates
     * const trackingUpdate = await prisma.trackingUpdate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TrackingUpdates and only return the `id`
     * const trackingUpdateWithIdOnly = await prisma.trackingUpdate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TrackingUpdateCreateManyAndReturnArgs>(args?: SelectSubset<T, TrackingUpdateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackingUpdatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TrackingUpdate.
     * @param {TrackingUpdateDeleteArgs} args - Arguments to delete one TrackingUpdate.
     * @example
     * // Delete one TrackingUpdate
     * const TrackingUpdate = await prisma.trackingUpdate.delete({
     *   where: {
     *     // ... filter to delete one TrackingUpdate
     *   }
     * })
     * 
     */
    delete<T extends TrackingUpdateDeleteArgs>(args: SelectSubset<T, TrackingUpdateDeleteArgs<ExtArgs>>): Prisma__TrackingUpdateClient<$Result.GetResult<Prisma.$TrackingUpdatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TrackingUpdate.
     * @param {TrackingUpdateUpdateArgs} args - Arguments to update one TrackingUpdate.
     * @example
     * // Update one TrackingUpdate
     * const trackingUpdate = await prisma.trackingUpdate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrackingUpdateUpdateArgs>(args: SelectSubset<T, TrackingUpdateUpdateArgs<ExtArgs>>): Prisma__TrackingUpdateClient<$Result.GetResult<Prisma.$TrackingUpdatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TrackingUpdates.
     * @param {TrackingUpdateDeleteManyArgs} args - Arguments to filter TrackingUpdates to delete.
     * @example
     * // Delete a few TrackingUpdates
     * const { count } = await prisma.trackingUpdate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrackingUpdateDeleteManyArgs>(args?: SelectSubset<T, TrackingUpdateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrackingUpdates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackingUpdateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrackingUpdates
     * const trackingUpdate = await prisma.trackingUpdate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrackingUpdateUpdateManyArgs>(args: SelectSubset<T, TrackingUpdateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrackingUpdates and returns the data updated in the database.
     * @param {TrackingUpdateUpdateManyAndReturnArgs} args - Arguments to update many TrackingUpdates.
     * @example
     * // Update many TrackingUpdates
     * const trackingUpdate = await prisma.trackingUpdate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TrackingUpdates and only return the `id`
     * const trackingUpdateWithIdOnly = await prisma.trackingUpdate.updateManyAndReturn({
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
    updateManyAndReturn<T extends TrackingUpdateUpdateManyAndReturnArgs>(args: SelectSubset<T, TrackingUpdateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackingUpdatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TrackingUpdate.
     * @param {TrackingUpdateUpsertArgs} args - Arguments to update or create a TrackingUpdate.
     * @example
     * // Update or create a TrackingUpdate
     * const trackingUpdate = await prisma.trackingUpdate.upsert({
     *   create: {
     *     // ... data to create a TrackingUpdate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrackingUpdate we want to update
     *   }
     * })
     */
    upsert<T extends TrackingUpdateUpsertArgs>(args: SelectSubset<T, TrackingUpdateUpsertArgs<ExtArgs>>): Prisma__TrackingUpdateClient<$Result.GetResult<Prisma.$TrackingUpdatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TrackingUpdates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackingUpdateCountArgs} args - Arguments to filter TrackingUpdates to count.
     * @example
     * // Count the number of TrackingUpdates
     * const count = await prisma.trackingUpdate.count({
     *   where: {
     *     // ... the filter for the TrackingUpdates we want to count
     *   }
     * })
    **/
    count<T extends TrackingUpdateCountArgs>(
      args?: Subset<T, TrackingUpdateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrackingUpdateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrackingUpdate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackingUpdateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TrackingUpdateAggregateArgs>(args: Subset<T, TrackingUpdateAggregateArgs>): Prisma.PrismaPromise<GetTrackingUpdateAggregateType<T>>

    /**
     * Group by TrackingUpdate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackingUpdateGroupByArgs} args - Group by arguments.
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
      T extends TrackingUpdateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrackingUpdateGroupByArgs['orderBy'] }
        : { orderBy?: TrackingUpdateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TrackingUpdateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrackingUpdateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TrackingUpdate model
   */
  readonly fields: TrackingUpdateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TrackingUpdate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrackingUpdateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    package<T extends PackageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PackageDefaultArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TrackingUpdate model
   */
  interface TrackingUpdateFieldRefs {
    readonly id: FieldRef<"TrackingUpdate", 'String'>
    readonly status: FieldRef<"TrackingUpdate", 'String'>
    readonly note: FieldRef<"TrackingUpdate", 'String'>
    readonly state: FieldRef<"TrackingUpdate", 'String'>
    readonly lga: FieldRef<"TrackingUpdate", 'String'>
    readonly packageId: FieldRef<"TrackingUpdate", 'String'>
    readonly createdAt: FieldRef<"TrackingUpdate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TrackingUpdate findUnique
   */
  export type TrackingUpdateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingUpdate
     */
    select?: TrackingUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackingUpdate
     */
    omit?: TrackingUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingUpdateInclude<ExtArgs> | null
    /**
     * Filter, which TrackingUpdate to fetch.
     */
    where: TrackingUpdateWhereUniqueInput
  }

  /**
   * TrackingUpdate findUniqueOrThrow
   */
  export type TrackingUpdateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingUpdate
     */
    select?: TrackingUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackingUpdate
     */
    omit?: TrackingUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingUpdateInclude<ExtArgs> | null
    /**
     * Filter, which TrackingUpdate to fetch.
     */
    where: TrackingUpdateWhereUniqueInput
  }

  /**
   * TrackingUpdate findFirst
   */
  export type TrackingUpdateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingUpdate
     */
    select?: TrackingUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackingUpdate
     */
    omit?: TrackingUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingUpdateInclude<ExtArgs> | null
    /**
     * Filter, which TrackingUpdate to fetch.
     */
    where?: TrackingUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackingUpdates to fetch.
     */
    orderBy?: TrackingUpdateOrderByWithRelationInput | TrackingUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrackingUpdates.
     */
    cursor?: TrackingUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackingUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackingUpdates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrackingUpdates.
     */
    distinct?: TrackingUpdateScalarFieldEnum | TrackingUpdateScalarFieldEnum[]
  }

  /**
   * TrackingUpdate findFirstOrThrow
   */
  export type TrackingUpdateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingUpdate
     */
    select?: TrackingUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackingUpdate
     */
    omit?: TrackingUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingUpdateInclude<ExtArgs> | null
    /**
     * Filter, which TrackingUpdate to fetch.
     */
    where?: TrackingUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackingUpdates to fetch.
     */
    orderBy?: TrackingUpdateOrderByWithRelationInput | TrackingUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrackingUpdates.
     */
    cursor?: TrackingUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackingUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackingUpdates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrackingUpdates.
     */
    distinct?: TrackingUpdateScalarFieldEnum | TrackingUpdateScalarFieldEnum[]
  }

  /**
   * TrackingUpdate findMany
   */
  export type TrackingUpdateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingUpdate
     */
    select?: TrackingUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackingUpdate
     */
    omit?: TrackingUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingUpdateInclude<ExtArgs> | null
    /**
     * Filter, which TrackingUpdates to fetch.
     */
    where?: TrackingUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackingUpdates to fetch.
     */
    orderBy?: TrackingUpdateOrderByWithRelationInput | TrackingUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TrackingUpdates.
     */
    cursor?: TrackingUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackingUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackingUpdates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrackingUpdates.
     */
    distinct?: TrackingUpdateScalarFieldEnum | TrackingUpdateScalarFieldEnum[]
  }

  /**
   * TrackingUpdate create
   */
  export type TrackingUpdateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingUpdate
     */
    select?: TrackingUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackingUpdate
     */
    omit?: TrackingUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingUpdateInclude<ExtArgs> | null
    /**
     * The data needed to create a TrackingUpdate.
     */
    data: XOR<TrackingUpdateCreateInput, TrackingUpdateUncheckedCreateInput>
  }

  /**
   * TrackingUpdate createMany
   */
  export type TrackingUpdateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TrackingUpdates.
     */
    data: TrackingUpdateCreateManyInput | TrackingUpdateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TrackingUpdate createManyAndReturn
   */
  export type TrackingUpdateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingUpdate
     */
    select?: TrackingUpdateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrackingUpdate
     */
    omit?: TrackingUpdateOmit<ExtArgs> | null
    /**
     * The data used to create many TrackingUpdates.
     */
    data: TrackingUpdateCreateManyInput | TrackingUpdateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingUpdateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TrackingUpdate update
   */
  export type TrackingUpdateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingUpdate
     */
    select?: TrackingUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackingUpdate
     */
    omit?: TrackingUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingUpdateInclude<ExtArgs> | null
    /**
     * The data needed to update a TrackingUpdate.
     */
    data: XOR<TrackingUpdateUpdateInput, TrackingUpdateUncheckedUpdateInput>
    /**
     * Choose, which TrackingUpdate to update.
     */
    where: TrackingUpdateWhereUniqueInput
  }

  /**
   * TrackingUpdate updateMany
   */
  export type TrackingUpdateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TrackingUpdates.
     */
    data: XOR<TrackingUpdateUpdateManyMutationInput, TrackingUpdateUncheckedUpdateManyInput>
    /**
     * Filter which TrackingUpdates to update
     */
    where?: TrackingUpdateWhereInput
    /**
     * Limit how many TrackingUpdates to update.
     */
    limit?: number
  }

  /**
   * TrackingUpdate updateManyAndReturn
   */
  export type TrackingUpdateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingUpdate
     */
    select?: TrackingUpdateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrackingUpdate
     */
    omit?: TrackingUpdateOmit<ExtArgs> | null
    /**
     * The data used to update TrackingUpdates.
     */
    data: XOR<TrackingUpdateUpdateManyMutationInput, TrackingUpdateUncheckedUpdateManyInput>
    /**
     * Filter which TrackingUpdates to update
     */
    where?: TrackingUpdateWhereInput
    /**
     * Limit how many TrackingUpdates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingUpdateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TrackingUpdate upsert
   */
  export type TrackingUpdateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingUpdate
     */
    select?: TrackingUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackingUpdate
     */
    omit?: TrackingUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingUpdateInclude<ExtArgs> | null
    /**
     * The filter to search for the TrackingUpdate to update in case it exists.
     */
    where: TrackingUpdateWhereUniqueInput
    /**
     * In case the TrackingUpdate found by the `where` argument doesn't exist, create a new TrackingUpdate with this data.
     */
    create: XOR<TrackingUpdateCreateInput, TrackingUpdateUncheckedCreateInput>
    /**
     * In case the TrackingUpdate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrackingUpdateUpdateInput, TrackingUpdateUncheckedUpdateInput>
  }

  /**
   * TrackingUpdate delete
   */
  export type TrackingUpdateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingUpdate
     */
    select?: TrackingUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackingUpdate
     */
    omit?: TrackingUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingUpdateInclude<ExtArgs> | null
    /**
     * Filter which TrackingUpdate to delete.
     */
    where: TrackingUpdateWhereUniqueInput
  }

  /**
   * TrackingUpdate deleteMany
   */
  export type TrackingUpdateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrackingUpdates to delete
     */
    where?: TrackingUpdateWhereInput
    /**
     * Limit how many TrackingUpdates to delete.
     */
    limit?: number
  }

  /**
   * TrackingUpdate without action
   */
  export type TrackingUpdateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingUpdate
     */
    select?: TrackingUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackingUpdate
     */
    omit?: TrackingUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingUpdateInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PackageScalarFieldEnum: {
    id: 'id',
    trackingNumber: 'trackingNumber',
    itemName: 'itemName',
    description: 'description',
    weight: 'weight',
    deliveryFee: 'deliveryFee',
    status: 'status',
    senderName: 'senderName',
    senderPhone: 'senderPhone',
    senderAddress: 'senderAddress',
    senderLga: 'senderLga',
    senderState: 'senderState',
    receiverName: 'receiverName',
    receiverPhone: 'receiverPhone',
    receiverAddress: 'receiverAddress',
    receiverLga: 'receiverLga',
    receiverState: 'receiverState',
    currentLga: 'currentLga',
    currentState: 'currentState',
    senderId: 'senderId',
    receiverId: 'receiverId',
    createdAt: 'createdAt'
  };

  export type PackageScalarFieldEnum = (typeof PackageScalarFieldEnum)[keyof typeof PackageScalarFieldEnum]


  export const TrackingUpdateScalarFieldEnum: {
    id: 'id',
    status: 'status',
    note: 'note',
    state: 'state',
    lga: 'lga',
    packageId: 'packageId',
    createdAt: 'createdAt'
  };

  export type TrackingUpdateScalarFieldEnum = (typeof TrackingUpdateScalarFieldEnum)[keyof typeof TrackingUpdateScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'PackageStatus'
   */
  export type EnumPackageStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PackageStatus'>
    


  /**
   * Reference to a field of type 'PackageStatus[]'
   */
  export type ListEnumPackageStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PackageStatus[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    sentPackages?: PackageListRelationFilter
    receivedPackages?: PackageListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    sentPackages?: PackageOrderByRelationAggregateInput
    receivedPackages?: PackageOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    sentPackages?: PackageListRelationFilter
    receivedPackages?: PackageListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    fullName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PackageWhereInput = {
    AND?: PackageWhereInput | PackageWhereInput[]
    OR?: PackageWhereInput[]
    NOT?: PackageWhereInput | PackageWhereInput[]
    id?: StringFilter<"Package"> | string
    trackingNumber?: StringFilter<"Package"> | string
    itemName?: StringFilter<"Package"> | string
    description?: StringNullableFilter<"Package"> | string | null
    weight?: FloatFilter<"Package"> | number
    deliveryFee?: FloatFilter<"Package"> | number
    status?: EnumPackageStatusFilter<"Package"> | $Enums.PackageStatus
    senderName?: StringFilter<"Package"> | string
    senderPhone?: StringFilter<"Package"> | string
    senderAddress?: StringFilter<"Package"> | string
    senderLga?: StringFilter<"Package"> | string
    senderState?: StringFilter<"Package"> | string
    receiverName?: StringFilter<"Package"> | string
    receiverPhone?: StringFilter<"Package"> | string
    receiverAddress?: StringFilter<"Package"> | string
    receiverLga?: StringFilter<"Package"> | string
    receiverState?: StringFilter<"Package"> | string
    currentLga?: StringNullableFilter<"Package"> | string | null
    currentState?: StringNullableFilter<"Package"> | string | null
    senderId?: StringFilter<"Package"> | string
    receiverId?: StringFilter<"Package"> | string
    createdAt?: DateTimeFilter<"Package"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
    updates?: TrackingUpdateListRelationFilter
  }

  export type PackageOrderByWithRelationInput = {
    id?: SortOrder
    trackingNumber?: SortOrder
    itemName?: SortOrder
    description?: SortOrderInput | SortOrder
    weight?: SortOrder
    deliveryFee?: SortOrder
    status?: SortOrder
    senderName?: SortOrder
    senderPhone?: SortOrder
    senderAddress?: SortOrder
    senderLga?: SortOrder
    senderState?: SortOrder
    receiverName?: SortOrder
    receiverPhone?: SortOrder
    receiverAddress?: SortOrder
    receiverLga?: SortOrder
    receiverState?: SortOrder
    currentLga?: SortOrderInput | SortOrder
    currentState?: SortOrderInput | SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    createdAt?: SortOrder
    sender?: UserOrderByWithRelationInput
    receiver?: UserOrderByWithRelationInput
    updates?: TrackingUpdateOrderByRelationAggregateInput
  }

  export type PackageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    trackingNumber?: string
    AND?: PackageWhereInput | PackageWhereInput[]
    OR?: PackageWhereInput[]
    NOT?: PackageWhereInput | PackageWhereInput[]
    itemName?: StringFilter<"Package"> | string
    description?: StringNullableFilter<"Package"> | string | null
    weight?: FloatFilter<"Package"> | number
    deliveryFee?: FloatFilter<"Package"> | number
    status?: EnumPackageStatusFilter<"Package"> | $Enums.PackageStatus
    senderName?: StringFilter<"Package"> | string
    senderPhone?: StringFilter<"Package"> | string
    senderAddress?: StringFilter<"Package"> | string
    senderLga?: StringFilter<"Package"> | string
    senderState?: StringFilter<"Package"> | string
    receiverName?: StringFilter<"Package"> | string
    receiverPhone?: StringFilter<"Package"> | string
    receiverAddress?: StringFilter<"Package"> | string
    receiverLga?: StringFilter<"Package"> | string
    receiverState?: StringFilter<"Package"> | string
    currentLga?: StringNullableFilter<"Package"> | string | null
    currentState?: StringNullableFilter<"Package"> | string | null
    senderId?: StringFilter<"Package"> | string
    receiverId?: StringFilter<"Package"> | string
    createdAt?: DateTimeFilter<"Package"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
    updates?: TrackingUpdateListRelationFilter
  }, "id" | "trackingNumber">

  export type PackageOrderByWithAggregationInput = {
    id?: SortOrder
    trackingNumber?: SortOrder
    itemName?: SortOrder
    description?: SortOrderInput | SortOrder
    weight?: SortOrder
    deliveryFee?: SortOrder
    status?: SortOrder
    senderName?: SortOrder
    senderPhone?: SortOrder
    senderAddress?: SortOrder
    senderLga?: SortOrder
    senderState?: SortOrder
    receiverName?: SortOrder
    receiverPhone?: SortOrder
    receiverAddress?: SortOrder
    receiverLga?: SortOrder
    receiverState?: SortOrder
    currentLga?: SortOrderInput | SortOrder
    currentState?: SortOrderInput | SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    createdAt?: SortOrder
    _count?: PackageCountOrderByAggregateInput
    _avg?: PackageAvgOrderByAggregateInput
    _max?: PackageMaxOrderByAggregateInput
    _min?: PackageMinOrderByAggregateInput
    _sum?: PackageSumOrderByAggregateInput
  }

  export type PackageScalarWhereWithAggregatesInput = {
    AND?: PackageScalarWhereWithAggregatesInput | PackageScalarWhereWithAggregatesInput[]
    OR?: PackageScalarWhereWithAggregatesInput[]
    NOT?: PackageScalarWhereWithAggregatesInput | PackageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Package"> | string
    trackingNumber?: StringWithAggregatesFilter<"Package"> | string
    itemName?: StringWithAggregatesFilter<"Package"> | string
    description?: StringNullableWithAggregatesFilter<"Package"> | string | null
    weight?: FloatWithAggregatesFilter<"Package"> | number
    deliveryFee?: FloatWithAggregatesFilter<"Package"> | number
    status?: EnumPackageStatusWithAggregatesFilter<"Package"> | $Enums.PackageStatus
    senderName?: StringWithAggregatesFilter<"Package"> | string
    senderPhone?: StringWithAggregatesFilter<"Package"> | string
    senderAddress?: StringWithAggregatesFilter<"Package"> | string
    senderLga?: StringWithAggregatesFilter<"Package"> | string
    senderState?: StringWithAggregatesFilter<"Package"> | string
    receiverName?: StringWithAggregatesFilter<"Package"> | string
    receiverPhone?: StringWithAggregatesFilter<"Package"> | string
    receiverAddress?: StringWithAggregatesFilter<"Package"> | string
    receiverLga?: StringWithAggregatesFilter<"Package"> | string
    receiverState?: StringWithAggregatesFilter<"Package"> | string
    currentLga?: StringNullableWithAggregatesFilter<"Package"> | string | null
    currentState?: StringNullableWithAggregatesFilter<"Package"> | string | null
    senderId?: StringWithAggregatesFilter<"Package"> | string
    receiverId?: StringWithAggregatesFilter<"Package"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Package"> | Date | string
  }

  export type TrackingUpdateWhereInput = {
    AND?: TrackingUpdateWhereInput | TrackingUpdateWhereInput[]
    OR?: TrackingUpdateWhereInput[]
    NOT?: TrackingUpdateWhereInput | TrackingUpdateWhereInput[]
    id?: StringFilter<"TrackingUpdate"> | string
    status?: StringFilter<"TrackingUpdate"> | string
    note?: StringNullableFilter<"TrackingUpdate"> | string | null
    state?: StringNullableFilter<"TrackingUpdate"> | string | null
    lga?: StringNullableFilter<"TrackingUpdate"> | string | null
    packageId?: StringFilter<"TrackingUpdate"> | string
    createdAt?: DateTimeFilter<"TrackingUpdate"> | Date | string
    package?: XOR<PackageScalarRelationFilter, PackageWhereInput>
  }

  export type TrackingUpdateOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    note?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    lga?: SortOrderInput | SortOrder
    packageId?: SortOrder
    createdAt?: SortOrder
    package?: PackageOrderByWithRelationInput
  }

  export type TrackingUpdateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TrackingUpdateWhereInput | TrackingUpdateWhereInput[]
    OR?: TrackingUpdateWhereInput[]
    NOT?: TrackingUpdateWhereInput | TrackingUpdateWhereInput[]
    status?: StringFilter<"TrackingUpdate"> | string
    note?: StringNullableFilter<"TrackingUpdate"> | string | null
    state?: StringNullableFilter<"TrackingUpdate"> | string | null
    lga?: StringNullableFilter<"TrackingUpdate"> | string | null
    packageId?: StringFilter<"TrackingUpdate"> | string
    createdAt?: DateTimeFilter<"TrackingUpdate"> | Date | string
    package?: XOR<PackageScalarRelationFilter, PackageWhereInput>
  }, "id">

  export type TrackingUpdateOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    note?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    lga?: SortOrderInput | SortOrder
    packageId?: SortOrder
    createdAt?: SortOrder
    _count?: TrackingUpdateCountOrderByAggregateInput
    _max?: TrackingUpdateMaxOrderByAggregateInput
    _min?: TrackingUpdateMinOrderByAggregateInput
  }

  export type TrackingUpdateScalarWhereWithAggregatesInput = {
    AND?: TrackingUpdateScalarWhereWithAggregatesInput | TrackingUpdateScalarWhereWithAggregatesInput[]
    OR?: TrackingUpdateScalarWhereWithAggregatesInput[]
    NOT?: TrackingUpdateScalarWhereWithAggregatesInput | TrackingUpdateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TrackingUpdate"> | string
    status?: StringWithAggregatesFilter<"TrackingUpdate"> | string
    note?: StringNullableWithAggregatesFilter<"TrackingUpdate"> | string | null
    state?: StringNullableWithAggregatesFilter<"TrackingUpdate"> | string | null
    lga?: StringNullableWithAggregatesFilter<"TrackingUpdate"> | string | null
    packageId?: StringWithAggregatesFilter<"TrackingUpdate"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TrackingUpdate"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    fullName: string
    email: string
    password: string
    role: $Enums.UserRole
    createdAt?: Date | string
    sentPackages?: PackageCreateNestedManyWithoutSenderInput
    receivedPackages?: PackageCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    fullName: string
    email: string
    password: string
    role: $Enums.UserRole
    createdAt?: Date | string
    sentPackages?: PackageUncheckedCreateNestedManyWithoutSenderInput
    receivedPackages?: PackageUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentPackages?: PackageUpdateManyWithoutSenderNestedInput
    receivedPackages?: PackageUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentPackages?: PackageUncheckedUpdateManyWithoutSenderNestedInput
    receivedPackages?: PackageUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    fullName: string
    email: string
    password: string
    role: $Enums.UserRole
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PackageCreateInput = {
    id?: string
    trackingNumber: string
    itemName: string
    description?: string | null
    weight: number
    deliveryFee: number
    status?: $Enums.PackageStatus
    senderName: string
    senderPhone: string
    senderAddress: string
    senderLga: string
    senderState: string
    receiverName: string
    receiverPhone: string
    receiverAddress: string
    receiverLga: string
    receiverState: string
    currentLga?: string | null
    currentState?: string | null
    createdAt?: Date | string
    sender: UserCreateNestedOneWithoutSentPackagesInput
    receiver: UserCreateNestedOneWithoutReceivedPackagesInput
    updates?: TrackingUpdateCreateNestedManyWithoutPackageInput
  }

  export type PackageUncheckedCreateInput = {
    id?: string
    trackingNumber: string
    itemName: string
    description?: string | null
    weight: number
    deliveryFee: number
    status?: $Enums.PackageStatus
    senderName: string
    senderPhone: string
    senderAddress: string
    senderLga: string
    senderState: string
    receiverName: string
    receiverPhone: string
    receiverAddress: string
    receiverLga: string
    receiverState: string
    currentLga?: string | null
    currentState?: string | null
    senderId: string
    receiverId: string
    createdAt?: Date | string
    updates?: TrackingUpdateUncheckedCreateNestedManyWithoutPackageInput
  }

  export type PackageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: FloatFieldUpdateOperationsInput | number
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    status?: EnumPackageStatusFieldUpdateOperationsInput | $Enums.PackageStatus
    senderName?: StringFieldUpdateOperationsInput | string
    senderPhone?: StringFieldUpdateOperationsInput | string
    senderAddress?: StringFieldUpdateOperationsInput | string
    senderLga?: StringFieldUpdateOperationsInput | string
    senderState?: StringFieldUpdateOperationsInput | string
    receiverName?: StringFieldUpdateOperationsInput | string
    receiverPhone?: StringFieldUpdateOperationsInput | string
    receiverAddress?: StringFieldUpdateOperationsInput | string
    receiverLga?: StringFieldUpdateOperationsInput | string
    receiverState?: StringFieldUpdateOperationsInput | string
    currentLga?: NullableStringFieldUpdateOperationsInput | string | null
    currentState?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentPackagesNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedPackagesNestedInput
    updates?: TrackingUpdateUpdateManyWithoutPackageNestedInput
  }

  export type PackageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: FloatFieldUpdateOperationsInput | number
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    status?: EnumPackageStatusFieldUpdateOperationsInput | $Enums.PackageStatus
    senderName?: StringFieldUpdateOperationsInput | string
    senderPhone?: StringFieldUpdateOperationsInput | string
    senderAddress?: StringFieldUpdateOperationsInput | string
    senderLga?: StringFieldUpdateOperationsInput | string
    senderState?: StringFieldUpdateOperationsInput | string
    receiverName?: StringFieldUpdateOperationsInput | string
    receiverPhone?: StringFieldUpdateOperationsInput | string
    receiverAddress?: StringFieldUpdateOperationsInput | string
    receiverLga?: StringFieldUpdateOperationsInput | string
    receiverState?: StringFieldUpdateOperationsInput | string
    currentLga?: NullableStringFieldUpdateOperationsInput | string | null
    currentState?: NullableStringFieldUpdateOperationsInput | string | null
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updates?: TrackingUpdateUncheckedUpdateManyWithoutPackageNestedInput
  }

  export type PackageCreateManyInput = {
    id?: string
    trackingNumber: string
    itemName: string
    description?: string | null
    weight: number
    deliveryFee: number
    status?: $Enums.PackageStatus
    senderName: string
    senderPhone: string
    senderAddress: string
    senderLga: string
    senderState: string
    receiverName: string
    receiverPhone: string
    receiverAddress: string
    receiverLga: string
    receiverState: string
    currentLga?: string | null
    currentState?: string | null
    senderId: string
    receiverId: string
    createdAt?: Date | string
  }

  export type PackageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: FloatFieldUpdateOperationsInput | number
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    status?: EnumPackageStatusFieldUpdateOperationsInput | $Enums.PackageStatus
    senderName?: StringFieldUpdateOperationsInput | string
    senderPhone?: StringFieldUpdateOperationsInput | string
    senderAddress?: StringFieldUpdateOperationsInput | string
    senderLga?: StringFieldUpdateOperationsInput | string
    senderState?: StringFieldUpdateOperationsInput | string
    receiverName?: StringFieldUpdateOperationsInput | string
    receiverPhone?: StringFieldUpdateOperationsInput | string
    receiverAddress?: StringFieldUpdateOperationsInput | string
    receiverLga?: StringFieldUpdateOperationsInput | string
    receiverState?: StringFieldUpdateOperationsInput | string
    currentLga?: NullableStringFieldUpdateOperationsInput | string | null
    currentState?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PackageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: FloatFieldUpdateOperationsInput | number
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    status?: EnumPackageStatusFieldUpdateOperationsInput | $Enums.PackageStatus
    senderName?: StringFieldUpdateOperationsInput | string
    senderPhone?: StringFieldUpdateOperationsInput | string
    senderAddress?: StringFieldUpdateOperationsInput | string
    senderLga?: StringFieldUpdateOperationsInput | string
    senderState?: StringFieldUpdateOperationsInput | string
    receiverName?: StringFieldUpdateOperationsInput | string
    receiverPhone?: StringFieldUpdateOperationsInput | string
    receiverAddress?: StringFieldUpdateOperationsInput | string
    receiverLga?: StringFieldUpdateOperationsInput | string
    receiverState?: StringFieldUpdateOperationsInput | string
    currentLga?: NullableStringFieldUpdateOperationsInput | string | null
    currentState?: NullableStringFieldUpdateOperationsInput | string | null
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackingUpdateCreateInput = {
    id?: string
    status: string
    note?: string | null
    state?: string | null
    lga?: string | null
    createdAt?: Date | string
    package: PackageCreateNestedOneWithoutUpdatesInput
  }

  export type TrackingUpdateUncheckedCreateInput = {
    id?: string
    status: string
    note?: string | null
    state?: string | null
    lga?: string | null
    packageId: string
    createdAt?: Date | string
  }

  export type TrackingUpdateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    lga?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    package?: PackageUpdateOneRequiredWithoutUpdatesNestedInput
  }

  export type TrackingUpdateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    lga?: NullableStringFieldUpdateOperationsInput | string | null
    packageId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackingUpdateCreateManyInput = {
    id?: string
    status: string
    note?: string | null
    state?: string | null
    lga?: string | null
    packageId: string
    createdAt?: Date | string
  }

  export type TrackingUpdateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    lga?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackingUpdateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    lga?: NullableStringFieldUpdateOperationsInput | string | null
    packageId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type PackageListRelationFilter = {
    every?: PackageWhereInput
    some?: PackageWhereInput
    none?: PackageWhereInput
  }

  export type PackageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
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

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type EnumPackageStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PackageStatus | EnumPackageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PackageStatus[] | ListEnumPackageStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PackageStatus[] | ListEnumPackageStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPackageStatusFilter<$PrismaModel> | $Enums.PackageStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TrackingUpdateListRelationFilter = {
    every?: TrackingUpdateWhereInput
    some?: TrackingUpdateWhereInput
    none?: TrackingUpdateWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TrackingUpdateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PackageCountOrderByAggregateInput = {
    id?: SortOrder
    trackingNumber?: SortOrder
    itemName?: SortOrder
    description?: SortOrder
    weight?: SortOrder
    deliveryFee?: SortOrder
    status?: SortOrder
    senderName?: SortOrder
    senderPhone?: SortOrder
    senderAddress?: SortOrder
    senderLga?: SortOrder
    senderState?: SortOrder
    receiverName?: SortOrder
    receiverPhone?: SortOrder
    receiverAddress?: SortOrder
    receiverLga?: SortOrder
    receiverState?: SortOrder
    currentLga?: SortOrder
    currentState?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    createdAt?: SortOrder
  }

  export type PackageAvgOrderByAggregateInput = {
    weight?: SortOrder
    deliveryFee?: SortOrder
  }

  export type PackageMaxOrderByAggregateInput = {
    id?: SortOrder
    trackingNumber?: SortOrder
    itemName?: SortOrder
    description?: SortOrder
    weight?: SortOrder
    deliveryFee?: SortOrder
    status?: SortOrder
    senderName?: SortOrder
    senderPhone?: SortOrder
    senderAddress?: SortOrder
    senderLga?: SortOrder
    senderState?: SortOrder
    receiverName?: SortOrder
    receiverPhone?: SortOrder
    receiverAddress?: SortOrder
    receiverLga?: SortOrder
    receiverState?: SortOrder
    currentLga?: SortOrder
    currentState?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    createdAt?: SortOrder
  }

  export type PackageMinOrderByAggregateInput = {
    id?: SortOrder
    trackingNumber?: SortOrder
    itemName?: SortOrder
    description?: SortOrder
    weight?: SortOrder
    deliveryFee?: SortOrder
    status?: SortOrder
    senderName?: SortOrder
    senderPhone?: SortOrder
    senderAddress?: SortOrder
    senderLga?: SortOrder
    senderState?: SortOrder
    receiverName?: SortOrder
    receiverPhone?: SortOrder
    receiverAddress?: SortOrder
    receiverLga?: SortOrder
    receiverState?: SortOrder
    currentLga?: SortOrder
    currentState?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    createdAt?: SortOrder
  }

  export type PackageSumOrderByAggregateInput = {
    weight?: SortOrder
    deliveryFee?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type EnumPackageStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PackageStatus | EnumPackageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PackageStatus[] | ListEnumPackageStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PackageStatus[] | ListEnumPackageStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPackageStatusWithAggregatesFilter<$PrismaModel> | $Enums.PackageStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPackageStatusFilter<$PrismaModel>
    _max?: NestedEnumPackageStatusFilter<$PrismaModel>
  }

  export type PackageScalarRelationFilter = {
    is?: PackageWhereInput
    isNot?: PackageWhereInput
  }

  export type TrackingUpdateCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    note?: SortOrder
    state?: SortOrder
    lga?: SortOrder
    packageId?: SortOrder
    createdAt?: SortOrder
  }

  export type TrackingUpdateMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    note?: SortOrder
    state?: SortOrder
    lga?: SortOrder
    packageId?: SortOrder
    createdAt?: SortOrder
  }

  export type TrackingUpdateMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    note?: SortOrder
    state?: SortOrder
    lga?: SortOrder
    packageId?: SortOrder
    createdAt?: SortOrder
  }

  export type PackageCreateNestedManyWithoutSenderInput = {
    create?: XOR<PackageCreateWithoutSenderInput, PackageUncheckedCreateWithoutSenderInput> | PackageCreateWithoutSenderInput[] | PackageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: PackageCreateOrConnectWithoutSenderInput | PackageCreateOrConnectWithoutSenderInput[]
    createMany?: PackageCreateManySenderInputEnvelope
    connect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
  }

  export type PackageCreateNestedManyWithoutReceiverInput = {
    create?: XOR<PackageCreateWithoutReceiverInput, PackageUncheckedCreateWithoutReceiverInput> | PackageCreateWithoutReceiverInput[] | PackageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: PackageCreateOrConnectWithoutReceiverInput | PackageCreateOrConnectWithoutReceiverInput[]
    createMany?: PackageCreateManyReceiverInputEnvelope
    connect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
  }

  export type PackageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<PackageCreateWithoutSenderInput, PackageUncheckedCreateWithoutSenderInput> | PackageCreateWithoutSenderInput[] | PackageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: PackageCreateOrConnectWithoutSenderInput | PackageCreateOrConnectWithoutSenderInput[]
    createMany?: PackageCreateManySenderInputEnvelope
    connect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
  }

  export type PackageUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<PackageCreateWithoutReceiverInput, PackageUncheckedCreateWithoutReceiverInput> | PackageCreateWithoutReceiverInput[] | PackageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: PackageCreateOrConnectWithoutReceiverInput | PackageCreateOrConnectWithoutReceiverInput[]
    createMany?: PackageCreateManyReceiverInputEnvelope
    connect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PackageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<PackageCreateWithoutSenderInput, PackageUncheckedCreateWithoutSenderInput> | PackageCreateWithoutSenderInput[] | PackageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: PackageCreateOrConnectWithoutSenderInput | PackageCreateOrConnectWithoutSenderInput[]
    upsert?: PackageUpsertWithWhereUniqueWithoutSenderInput | PackageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: PackageCreateManySenderInputEnvelope
    set?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    disconnect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    delete?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    connect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    update?: PackageUpdateWithWhereUniqueWithoutSenderInput | PackageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: PackageUpdateManyWithWhereWithoutSenderInput | PackageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: PackageScalarWhereInput | PackageScalarWhereInput[]
  }

  export type PackageUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<PackageCreateWithoutReceiverInput, PackageUncheckedCreateWithoutReceiverInput> | PackageCreateWithoutReceiverInput[] | PackageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: PackageCreateOrConnectWithoutReceiverInput | PackageCreateOrConnectWithoutReceiverInput[]
    upsert?: PackageUpsertWithWhereUniqueWithoutReceiverInput | PackageUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: PackageCreateManyReceiverInputEnvelope
    set?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    disconnect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    delete?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    connect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    update?: PackageUpdateWithWhereUniqueWithoutReceiverInput | PackageUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: PackageUpdateManyWithWhereWithoutReceiverInput | PackageUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: PackageScalarWhereInput | PackageScalarWhereInput[]
  }

  export type PackageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<PackageCreateWithoutSenderInput, PackageUncheckedCreateWithoutSenderInput> | PackageCreateWithoutSenderInput[] | PackageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: PackageCreateOrConnectWithoutSenderInput | PackageCreateOrConnectWithoutSenderInput[]
    upsert?: PackageUpsertWithWhereUniqueWithoutSenderInput | PackageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: PackageCreateManySenderInputEnvelope
    set?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    disconnect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    delete?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    connect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    update?: PackageUpdateWithWhereUniqueWithoutSenderInput | PackageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: PackageUpdateManyWithWhereWithoutSenderInput | PackageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: PackageScalarWhereInput | PackageScalarWhereInput[]
  }

  export type PackageUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<PackageCreateWithoutReceiverInput, PackageUncheckedCreateWithoutReceiverInput> | PackageCreateWithoutReceiverInput[] | PackageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: PackageCreateOrConnectWithoutReceiverInput | PackageCreateOrConnectWithoutReceiverInput[]
    upsert?: PackageUpsertWithWhereUniqueWithoutReceiverInput | PackageUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: PackageCreateManyReceiverInputEnvelope
    set?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    disconnect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    delete?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    connect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    update?: PackageUpdateWithWhereUniqueWithoutReceiverInput | PackageUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: PackageUpdateManyWithWhereWithoutReceiverInput | PackageUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: PackageScalarWhereInput | PackageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSentPackagesInput = {
    create?: XOR<UserCreateWithoutSentPackagesInput, UserUncheckedCreateWithoutSentPackagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentPackagesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedPackagesInput = {
    create?: XOR<UserCreateWithoutReceivedPackagesInput, UserUncheckedCreateWithoutReceivedPackagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedPackagesInput
    connect?: UserWhereUniqueInput
  }

  export type TrackingUpdateCreateNestedManyWithoutPackageInput = {
    create?: XOR<TrackingUpdateCreateWithoutPackageInput, TrackingUpdateUncheckedCreateWithoutPackageInput> | TrackingUpdateCreateWithoutPackageInput[] | TrackingUpdateUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: TrackingUpdateCreateOrConnectWithoutPackageInput | TrackingUpdateCreateOrConnectWithoutPackageInput[]
    createMany?: TrackingUpdateCreateManyPackageInputEnvelope
    connect?: TrackingUpdateWhereUniqueInput | TrackingUpdateWhereUniqueInput[]
  }

  export type TrackingUpdateUncheckedCreateNestedManyWithoutPackageInput = {
    create?: XOR<TrackingUpdateCreateWithoutPackageInput, TrackingUpdateUncheckedCreateWithoutPackageInput> | TrackingUpdateCreateWithoutPackageInput[] | TrackingUpdateUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: TrackingUpdateCreateOrConnectWithoutPackageInput | TrackingUpdateCreateOrConnectWithoutPackageInput[]
    createMany?: TrackingUpdateCreateManyPackageInputEnvelope
    connect?: TrackingUpdateWhereUniqueInput | TrackingUpdateWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumPackageStatusFieldUpdateOperationsInput = {
    set?: $Enums.PackageStatus
  }

  export type UserUpdateOneRequiredWithoutSentPackagesNestedInput = {
    create?: XOR<UserCreateWithoutSentPackagesInput, UserUncheckedCreateWithoutSentPackagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentPackagesInput
    upsert?: UserUpsertWithoutSentPackagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentPackagesInput, UserUpdateWithoutSentPackagesInput>, UserUncheckedUpdateWithoutSentPackagesInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedPackagesNestedInput = {
    create?: XOR<UserCreateWithoutReceivedPackagesInput, UserUncheckedCreateWithoutReceivedPackagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedPackagesInput
    upsert?: UserUpsertWithoutReceivedPackagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedPackagesInput, UserUpdateWithoutReceivedPackagesInput>, UserUncheckedUpdateWithoutReceivedPackagesInput>
  }

  export type TrackingUpdateUpdateManyWithoutPackageNestedInput = {
    create?: XOR<TrackingUpdateCreateWithoutPackageInput, TrackingUpdateUncheckedCreateWithoutPackageInput> | TrackingUpdateCreateWithoutPackageInput[] | TrackingUpdateUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: TrackingUpdateCreateOrConnectWithoutPackageInput | TrackingUpdateCreateOrConnectWithoutPackageInput[]
    upsert?: TrackingUpdateUpsertWithWhereUniqueWithoutPackageInput | TrackingUpdateUpsertWithWhereUniqueWithoutPackageInput[]
    createMany?: TrackingUpdateCreateManyPackageInputEnvelope
    set?: TrackingUpdateWhereUniqueInput | TrackingUpdateWhereUniqueInput[]
    disconnect?: TrackingUpdateWhereUniqueInput | TrackingUpdateWhereUniqueInput[]
    delete?: TrackingUpdateWhereUniqueInput | TrackingUpdateWhereUniqueInput[]
    connect?: TrackingUpdateWhereUniqueInput | TrackingUpdateWhereUniqueInput[]
    update?: TrackingUpdateUpdateWithWhereUniqueWithoutPackageInput | TrackingUpdateUpdateWithWhereUniqueWithoutPackageInput[]
    updateMany?: TrackingUpdateUpdateManyWithWhereWithoutPackageInput | TrackingUpdateUpdateManyWithWhereWithoutPackageInput[]
    deleteMany?: TrackingUpdateScalarWhereInput | TrackingUpdateScalarWhereInput[]
  }

  export type TrackingUpdateUncheckedUpdateManyWithoutPackageNestedInput = {
    create?: XOR<TrackingUpdateCreateWithoutPackageInput, TrackingUpdateUncheckedCreateWithoutPackageInput> | TrackingUpdateCreateWithoutPackageInput[] | TrackingUpdateUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: TrackingUpdateCreateOrConnectWithoutPackageInput | TrackingUpdateCreateOrConnectWithoutPackageInput[]
    upsert?: TrackingUpdateUpsertWithWhereUniqueWithoutPackageInput | TrackingUpdateUpsertWithWhereUniqueWithoutPackageInput[]
    createMany?: TrackingUpdateCreateManyPackageInputEnvelope
    set?: TrackingUpdateWhereUniqueInput | TrackingUpdateWhereUniqueInput[]
    disconnect?: TrackingUpdateWhereUniqueInput | TrackingUpdateWhereUniqueInput[]
    delete?: TrackingUpdateWhereUniqueInput | TrackingUpdateWhereUniqueInput[]
    connect?: TrackingUpdateWhereUniqueInput | TrackingUpdateWhereUniqueInput[]
    update?: TrackingUpdateUpdateWithWhereUniqueWithoutPackageInput | TrackingUpdateUpdateWithWhereUniqueWithoutPackageInput[]
    updateMany?: TrackingUpdateUpdateManyWithWhereWithoutPackageInput | TrackingUpdateUpdateManyWithWhereWithoutPackageInput[]
    deleteMany?: TrackingUpdateScalarWhereInput | TrackingUpdateScalarWhereInput[]
  }

  export type PackageCreateNestedOneWithoutUpdatesInput = {
    create?: XOR<PackageCreateWithoutUpdatesInput, PackageUncheckedCreateWithoutUpdatesInput>
    connectOrCreate?: PackageCreateOrConnectWithoutUpdatesInput
    connect?: PackageWhereUniqueInput
  }

  export type PackageUpdateOneRequiredWithoutUpdatesNestedInput = {
    create?: XOR<PackageCreateWithoutUpdatesInput, PackageUncheckedCreateWithoutUpdatesInput>
    connectOrCreate?: PackageCreateOrConnectWithoutUpdatesInput
    upsert?: PackageUpsertWithoutUpdatesInput
    connect?: PackageWhereUniqueInput
    update?: XOR<XOR<PackageUpdateToOneWithWhereWithoutUpdatesInput, PackageUpdateWithoutUpdatesInput>, PackageUncheckedUpdateWithoutUpdatesInput>
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

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedEnumPackageStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PackageStatus | EnumPackageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PackageStatus[] | ListEnumPackageStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PackageStatus[] | ListEnumPackageStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPackageStatusFilter<$PrismaModel> | $Enums.PackageStatus
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type NestedEnumPackageStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PackageStatus | EnumPackageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PackageStatus[] | ListEnumPackageStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PackageStatus[] | ListEnumPackageStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPackageStatusWithAggregatesFilter<$PrismaModel> | $Enums.PackageStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPackageStatusFilter<$PrismaModel>
    _max?: NestedEnumPackageStatusFilter<$PrismaModel>
  }

  export type PackageCreateWithoutSenderInput = {
    id?: string
    trackingNumber: string
    itemName: string
    description?: string | null
    weight: number
    deliveryFee: number
    status?: $Enums.PackageStatus
    senderName: string
    senderPhone: string
    senderAddress: string
    senderLga: string
    senderState: string
    receiverName: string
    receiverPhone: string
    receiverAddress: string
    receiverLga: string
    receiverState: string
    currentLga?: string | null
    currentState?: string | null
    createdAt?: Date | string
    receiver: UserCreateNestedOneWithoutReceivedPackagesInput
    updates?: TrackingUpdateCreateNestedManyWithoutPackageInput
  }

  export type PackageUncheckedCreateWithoutSenderInput = {
    id?: string
    trackingNumber: string
    itemName: string
    description?: string | null
    weight: number
    deliveryFee: number
    status?: $Enums.PackageStatus
    senderName: string
    senderPhone: string
    senderAddress: string
    senderLga: string
    senderState: string
    receiverName: string
    receiverPhone: string
    receiverAddress: string
    receiverLga: string
    receiverState: string
    currentLga?: string | null
    currentState?: string | null
    receiverId: string
    createdAt?: Date | string
    updates?: TrackingUpdateUncheckedCreateNestedManyWithoutPackageInput
  }

  export type PackageCreateOrConnectWithoutSenderInput = {
    where: PackageWhereUniqueInput
    create: XOR<PackageCreateWithoutSenderInput, PackageUncheckedCreateWithoutSenderInput>
  }

  export type PackageCreateManySenderInputEnvelope = {
    data: PackageCreateManySenderInput | PackageCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type PackageCreateWithoutReceiverInput = {
    id?: string
    trackingNumber: string
    itemName: string
    description?: string | null
    weight: number
    deliveryFee: number
    status?: $Enums.PackageStatus
    senderName: string
    senderPhone: string
    senderAddress: string
    senderLga: string
    senderState: string
    receiverName: string
    receiverPhone: string
    receiverAddress: string
    receiverLga: string
    receiverState: string
    currentLga?: string | null
    currentState?: string | null
    createdAt?: Date | string
    sender: UserCreateNestedOneWithoutSentPackagesInput
    updates?: TrackingUpdateCreateNestedManyWithoutPackageInput
  }

  export type PackageUncheckedCreateWithoutReceiverInput = {
    id?: string
    trackingNumber: string
    itemName: string
    description?: string | null
    weight: number
    deliveryFee: number
    status?: $Enums.PackageStatus
    senderName: string
    senderPhone: string
    senderAddress: string
    senderLga: string
    senderState: string
    receiverName: string
    receiverPhone: string
    receiverAddress: string
    receiverLga: string
    receiverState: string
    currentLga?: string | null
    currentState?: string | null
    senderId: string
    createdAt?: Date | string
    updates?: TrackingUpdateUncheckedCreateNestedManyWithoutPackageInput
  }

  export type PackageCreateOrConnectWithoutReceiverInput = {
    where: PackageWhereUniqueInput
    create: XOR<PackageCreateWithoutReceiverInput, PackageUncheckedCreateWithoutReceiverInput>
  }

  export type PackageCreateManyReceiverInputEnvelope = {
    data: PackageCreateManyReceiverInput | PackageCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type PackageUpsertWithWhereUniqueWithoutSenderInput = {
    where: PackageWhereUniqueInput
    update: XOR<PackageUpdateWithoutSenderInput, PackageUncheckedUpdateWithoutSenderInput>
    create: XOR<PackageCreateWithoutSenderInput, PackageUncheckedCreateWithoutSenderInput>
  }

  export type PackageUpdateWithWhereUniqueWithoutSenderInput = {
    where: PackageWhereUniqueInput
    data: XOR<PackageUpdateWithoutSenderInput, PackageUncheckedUpdateWithoutSenderInput>
  }

  export type PackageUpdateManyWithWhereWithoutSenderInput = {
    where: PackageScalarWhereInput
    data: XOR<PackageUpdateManyMutationInput, PackageUncheckedUpdateManyWithoutSenderInput>
  }

  export type PackageScalarWhereInput = {
    AND?: PackageScalarWhereInput | PackageScalarWhereInput[]
    OR?: PackageScalarWhereInput[]
    NOT?: PackageScalarWhereInput | PackageScalarWhereInput[]
    id?: StringFilter<"Package"> | string
    trackingNumber?: StringFilter<"Package"> | string
    itemName?: StringFilter<"Package"> | string
    description?: StringNullableFilter<"Package"> | string | null
    weight?: FloatFilter<"Package"> | number
    deliveryFee?: FloatFilter<"Package"> | number
    status?: EnumPackageStatusFilter<"Package"> | $Enums.PackageStatus
    senderName?: StringFilter<"Package"> | string
    senderPhone?: StringFilter<"Package"> | string
    senderAddress?: StringFilter<"Package"> | string
    senderLga?: StringFilter<"Package"> | string
    senderState?: StringFilter<"Package"> | string
    receiverName?: StringFilter<"Package"> | string
    receiverPhone?: StringFilter<"Package"> | string
    receiverAddress?: StringFilter<"Package"> | string
    receiverLga?: StringFilter<"Package"> | string
    receiverState?: StringFilter<"Package"> | string
    currentLga?: StringNullableFilter<"Package"> | string | null
    currentState?: StringNullableFilter<"Package"> | string | null
    senderId?: StringFilter<"Package"> | string
    receiverId?: StringFilter<"Package"> | string
    createdAt?: DateTimeFilter<"Package"> | Date | string
  }

  export type PackageUpsertWithWhereUniqueWithoutReceiverInput = {
    where: PackageWhereUniqueInput
    update: XOR<PackageUpdateWithoutReceiverInput, PackageUncheckedUpdateWithoutReceiverInput>
    create: XOR<PackageCreateWithoutReceiverInput, PackageUncheckedCreateWithoutReceiverInput>
  }

  export type PackageUpdateWithWhereUniqueWithoutReceiverInput = {
    where: PackageWhereUniqueInput
    data: XOR<PackageUpdateWithoutReceiverInput, PackageUncheckedUpdateWithoutReceiverInput>
  }

  export type PackageUpdateManyWithWhereWithoutReceiverInput = {
    where: PackageScalarWhereInput
    data: XOR<PackageUpdateManyMutationInput, PackageUncheckedUpdateManyWithoutReceiverInput>
  }

  export type UserCreateWithoutSentPackagesInput = {
    id?: string
    fullName: string
    email: string
    password: string
    role: $Enums.UserRole
    createdAt?: Date | string
    receivedPackages?: PackageCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutSentPackagesInput = {
    id?: string
    fullName: string
    email: string
    password: string
    role: $Enums.UserRole
    createdAt?: Date | string
    receivedPackages?: PackageUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutSentPackagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentPackagesInput, UserUncheckedCreateWithoutSentPackagesInput>
  }

  export type UserCreateWithoutReceivedPackagesInput = {
    id?: string
    fullName: string
    email: string
    password: string
    role: $Enums.UserRole
    createdAt?: Date | string
    sentPackages?: PackageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutReceivedPackagesInput = {
    id?: string
    fullName: string
    email: string
    password: string
    role: $Enums.UserRole
    createdAt?: Date | string
    sentPackages?: PackageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutReceivedPackagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedPackagesInput, UserUncheckedCreateWithoutReceivedPackagesInput>
  }

  export type TrackingUpdateCreateWithoutPackageInput = {
    id?: string
    status: string
    note?: string | null
    state?: string | null
    lga?: string | null
    createdAt?: Date | string
  }

  export type TrackingUpdateUncheckedCreateWithoutPackageInput = {
    id?: string
    status: string
    note?: string | null
    state?: string | null
    lga?: string | null
    createdAt?: Date | string
  }

  export type TrackingUpdateCreateOrConnectWithoutPackageInput = {
    where: TrackingUpdateWhereUniqueInput
    create: XOR<TrackingUpdateCreateWithoutPackageInput, TrackingUpdateUncheckedCreateWithoutPackageInput>
  }

  export type TrackingUpdateCreateManyPackageInputEnvelope = {
    data: TrackingUpdateCreateManyPackageInput | TrackingUpdateCreateManyPackageInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSentPackagesInput = {
    update: XOR<UserUpdateWithoutSentPackagesInput, UserUncheckedUpdateWithoutSentPackagesInput>
    create: XOR<UserCreateWithoutSentPackagesInput, UserUncheckedCreateWithoutSentPackagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentPackagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentPackagesInput, UserUncheckedUpdateWithoutSentPackagesInput>
  }

  export type UserUpdateWithoutSentPackagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedPackages?: PackageUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutSentPackagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedPackages?: PackageUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserUpsertWithoutReceivedPackagesInput = {
    update: XOR<UserUpdateWithoutReceivedPackagesInput, UserUncheckedUpdateWithoutReceivedPackagesInput>
    create: XOR<UserCreateWithoutReceivedPackagesInput, UserUncheckedCreateWithoutReceivedPackagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedPackagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedPackagesInput, UserUncheckedUpdateWithoutReceivedPackagesInput>
  }

  export type UserUpdateWithoutReceivedPackagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentPackages?: PackageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedPackagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentPackages?: PackageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type TrackingUpdateUpsertWithWhereUniqueWithoutPackageInput = {
    where: TrackingUpdateWhereUniqueInput
    update: XOR<TrackingUpdateUpdateWithoutPackageInput, TrackingUpdateUncheckedUpdateWithoutPackageInput>
    create: XOR<TrackingUpdateCreateWithoutPackageInput, TrackingUpdateUncheckedCreateWithoutPackageInput>
  }

  export type TrackingUpdateUpdateWithWhereUniqueWithoutPackageInput = {
    where: TrackingUpdateWhereUniqueInput
    data: XOR<TrackingUpdateUpdateWithoutPackageInput, TrackingUpdateUncheckedUpdateWithoutPackageInput>
  }

  export type TrackingUpdateUpdateManyWithWhereWithoutPackageInput = {
    where: TrackingUpdateScalarWhereInput
    data: XOR<TrackingUpdateUpdateManyMutationInput, TrackingUpdateUncheckedUpdateManyWithoutPackageInput>
  }

  export type TrackingUpdateScalarWhereInput = {
    AND?: TrackingUpdateScalarWhereInput | TrackingUpdateScalarWhereInput[]
    OR?: TrackingUpdateScalarWhereInput[]
    NOT?: TrackingUpdateScalarWhereInput | TrackingUpdateScalarWhereInput[]
    id?: StringFilter<"TrackingUpdate"> | string
    status?: StringFilter<"TrackingUpdate"> | string
    note?: StringNullableFilter<"TrackingUpdate"> | string | null
    state?: StringNullableFilter<"TrackingUpdate"> | string | null
    lga?: StringNullableFilter<"TrackingUpdate"> | string | null
    packageId?: StringFilter<"TrackingUpdate"> | string
    createdAt?: DateTimeFilter<"TrackingUpdate"> | Date | string
  }

  export type PackageCreateWithoutUpdatesInput = {
    id?: string
    trackingNumber: string
    itemName: string
    description?: string | null
    weight: number
    deliveryFee: number
    status?: $Enums.PackageStatus
    senderName: string
    senderPhone: string
    senderAddress: string
    senderLga: string
    senderState: string
    receiverName: string
    receiverPhone: string
    receiverAddress: string
    receiverLga: string
    receiverState: string
    currentLga?: string | null
    currentState?: string | null
    createdAt?: Date | string
    sender: UserCreateNestedOneWithoutSentPackagesInput
    receiver: UserCreateNestedOneWithoutReceivedPackagesInput
  }

  export type PackageUncheckedCreateWithoutUpdatesInput = {
    id?: string
    trackingNumber: string
    itemName: string
    description?: string | null
    weight: number
    deliveryFee: number
    status?: $Enums.PackageStatus
    senderName: string
    senderPhone: string
    senderAddress: string
    senderLga: string
    senderState: string
    receiverName: string
    receiverPhone: string
    receiverAddress: string
    receiverLga: string
    receiverState: string
    currentLga?: string | null
    currentState?: string | null
    senderId: string
    receiverId: string
    createdAt?: Date | string
  }

  export type PackageCreateOrConnectWithoutUpdatesInput = {
    where: PackageWhereUniqueInput
    create: XOR<PackageCreateWithoutUpdatesInput, PackageUncheckedCreateWithoutUpdatesInput>
  }

  export type PackageUpsertWithoutUpdatesInput = {
    update: XOR<PackageUpdateWithoutUpdatesInput, PackageUncheckedUpdateWithoutUpdatesInput>
    create: XOR<PackageCreateWithoutUpdatesInput, PackageUncheckedCreateWithoutUpdatesInput>
    where?: PackageWhereInput
  }

  export type PackageUpdateToOneWithWhereWithoutUpdatesInput = {
    where?: PackageWhereInput
    data: XOR<PackageUpdateWithoutUpdatesInput, PackageUncheckedUpdateWithoutUpdatesInput>
  }

  export type PackageUpdateWithoutUpdatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: FloatFieldUpdateOperationsInput | number
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    status?: EnumPackageStatusFieldUpdateOperationsInput | $Enums.PackageStatus
    senderName?: StringFieldUpdateOperationsInput | string
    senderPhone?: StringFieldUpdateOperationsInput | string
    senderAddress?: StringFieldUpdateOperationsInput | string
    senderLga?: StringFieldUpdateOperationsInput | string
    senderState?: StringFieldUpdateOperationsInput | string
    receiverName?: StringFieldUpdateOperationsInput | string
    receiverPhone?: StringFieldUpdateOperationsInput | string
    receiverAddress?: StringFieldUpdateOperationsInput | string
    receiverLga?: StringFieldUpdateOperationsInput | string
    receiverState?: StringFieldUpdateOperationsInput | string
    currentLga?: NullableStringFieldUpdateOperationsInput | string | null
    currentState?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentPackagesNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedPackagesNestedInput
  }

  export type PackageUncheckedUpdateWithoutUpdatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: FloatFieldUpdateOperationsInput | number
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    status?: EnumPackageStatusFieldUpdateOperationsInput | $Enums.PackageStatus
    senderName?: StringFieldUpdateOperationsInput | string
    senderPhone?: StringFieldUpdateOperationsInput | string
    senderAddress?: StringFieldUpdateOperationsInput | string
    senderLga?: StringFieldUpdateOperationsInput | string
    senderState?: StringFieldUpdateOperationsInput | string
    receiverName?: StringFieldUpdateOperationsInput | string
    receiverPhone?: StringFieldUpdateOperationsInput | string
    receiverAddress?: StringFieldUpdateOperationsInput | string
    receiverLga?: StringFieldUpdateOperationsInput | string
    receiverState?: StringFieldUpdateOperationsInput | string
    currentLga?: NullableStringFieldUpdateOperationsInput | string | null
    currentState?: NullableStringFieldUpdateOperationsInput | string | null
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PackageCreateManySenderInput = {
    id?: string
    trackingNumber: string
    itemName: string
    description?: string | null
    weight: number
    deliveryFee: number
    status?: $Enums.PackageStatus
    senderName: string
    senderPhone: string
    senderAddress: string
    senderLga: string
    senderState: string
    receiverName: string
    receiverPhone: string
    receiverAddress: string
    receiverLga: string
    receiverState: string
    currentLga?: string | null
    currentState?: string | null
    receiverId: string
    createdAt?: Date | string
  }

  export type PackageCreateManyReceiverInput = {
    id?: string
    trackingNumber: string
    itemName: string
    description?: string | null
    weight: number
    deliveryFee: number
    status?: $Enums.PackageStatus
    senderName: string
    senderPhone: string
    senderAddress: string
    senderLga: string
    senderState: string
    receiverName: string
    receiverPhone: string
    receiverAddress: string
    receiverLga: string
    receiverState: string
    currentLga?: string | null
    currentState?: string | null
    senderId: string
    createdAt?: Date | string
  }

  export type PackageUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: FloatFieldUpdateOperationsInput | number
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    status?: EnumPackageStatusFieldUpdateOperationsInput | $Enums.PackageStatus
    senderName?: StringFieldUpdateOperationsInput | string
    senderPhone?: StringFieldUpdateOperationsInput | string
    senderAddress?: StringFieldUpdateOperationsInput | string
    senderLga?: StringFieldUpdateOperationsInput | string
    senderState?: StringFieldUpdateOperationsInput | string
    receiverName?: StringFieldUpdateOperationsInput | string
    receiverPhone?: StringFieldUpdateOperationsInput | string
    receiverAddress?: StringFieldUpdateOperationsInput | string
    receiverLga?: StringFieldUpdateOperationsInput | string
    receiverState?: StringFieldUpdateOperationsInput | string
    currentLga?: NullableStringFieldUpdateOperationsInput | string | null
    currentState?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiver?: UserUpdateOneRequiredWithoutReceivedPackagesNestedInput
    updates?: TrackingUpdateUpdateManyWithoutPackageNestedInput
  }

  export type PackageUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: FloatFieldUpdateOperationsInput | number
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    status?: EnumPackageStatusFieldUpdateOperationsInput | $Enums.PackageStatus
    senderName?: StringFieldUpdateOperationsInput | string
    senderPhone?: StringFieldUpdateOperationsInput | string
    senderAddress?: StringFieldUpdateOperationsInput | string
    senderLga?: StringFieldUpdateOperationsInput | string
    senderState?: StringFieldUpdateOperationsInput | string
    receiverName?: StringFieldUpdateOperationsInput | string
    receiverPhone?: StringFieldUpdateOperationsInput | string
    receiverAddress?: StringFieldUpdateOperationsInput | string
    receiverLga?: StringFieldUpdateOperationsInput | string
    receiverState?: StringFieldUpdateOperationsInput | string
    currentLga?: NullableStringFieldUpdateOperationsInput | string | null
    currentState?: NullableStringFieldUpdateOperationsInput | string | null
    receiverId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updates?: TrackingUpdateUncheckedUpdateManyWithoutPackageNestedInput
  }

  export type PackageUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: FloatFieldUpdateOperationsInput | number
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    status?: EnumPackageStatusFieldUpdateOperationsInput | $Enums.PackageStatus
    senderName?: StringFieldUpdateOperationsInput | string
    senderPhone?: StringFieldUpdateOperationsInput | string
    senderAddress?: StringFieldUpdateOperationsInput | string
    senderLga?: StringFieldUpdateOperationsInput | string
    senderState?: StringFieldUpdateOperationsInput | string
    receiverName?: StringFieldUpdateOperationsInput | string
    receiverPhone?: StringFieldUpdateOperationsInput | string
    receiverAddress?: StringFieldUpdateOperationsInput | string
    receiverLga?: StringFieldUpdateOperationsInput | string
    receiverState?: StringFieldUpdateOperationsInput | string
    currentLga?: NullableStringFieldUpdateOperationsInput | string | null
    currentState?: NullableStringFieldUpdateOperationsInput | string | null
    receiverId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PackageUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: FloatFieldUpdateOperationsInput | number
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    status?: EnumPackageStatusFieldUpdateOperationsInput | $Enums.PackageStatus
    senderName?: StringFieldUpdateOperationsInput | string
    senderPhone?: StringFieldUpdateOperationsInput | string
    senderAddress?: StringFieldUpdateOperationsInput | string
    senderLga?: StringFieldUpdateOperationsInput | string
    senderState?: StringFieldUpdateOperationsInput | string
    receiverName?: StringFieldUpdateOperationsInput | string
    receiverPhone?: StringFieldUpdateOperationsInput | string
    receiverAddress?: StringFieldUpdateOperationsInput | string
    receiverLga?: StringFieldUpdateOperationsInput | string
    receiverState?: StringFieldUpdateOperationsInput | string
    currentLga?: NullableStringFieldUpdateOperationsInput | string | null
    currentState?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentPackagesNestedInput
    updates?: TrackingUpdateUpdateManyWithoutPackageNestedInput
  }

  export type PackageUncheckedUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: FloatFieldUpdateOperationsInput | number
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    status?: EnumPackageStatusFieldUpdateOperationsInput | $Enums.PackageStatus
    senderName?: StringFieldUpdateOperationsInput | string
    senderPhone?: StringFieldUpdateOperationsInput | string
    senderAddress?: StringFieldUpdateOperationsInput | string
    senderLga?: StringFieldUpdateOperationsInput | string
    senderState?: StringFieldUpdateOperationsInput | string
    receiverName?: StringFieldUpdateOperationsInput | string
    receiverPhone?: StringFieldUpdateOperationsInput | string
    receiverAddress?: StringFieldUpdateOperationsInput | string
    receiverLga?: StringFieldUpdateOperationsInput | string
    receiverState?: StringFieldUpdateOperationsInput | string
    currentLga?: NullableStringFieldUpdateOperationsInput | string | null
    currentState?: NullableStringFieldUpdateOperationsInput | string | null
    senderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updates?: TrackingUpdateUncheckedUpdateManyWithoutPackageNestedInput
  }

  export type PackageUncheckedUpdateManyWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: FloatFieldUpdateOperationsInput | number
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    status?: EnumPackageStatusFieldUpdateOperationsInput | $Enums.PackageStatus
    senderName?: StringFieldUpdateOperationsInput | string
    senderPhone?: StringFieldUpdateOperationsInput | string
    senderAddress?: StringFieldUpdateOperationsInput | string
    senderLga?: StringFieldUpdateOperationsInput | string
    senderState?: StringFieldUpdateOperationsInput | string
    receiverName?: StringFieldUpdateOperationsInput | string
    receiverPhone?: StringFieldUpdateOperationsInput | string
    receiverAddress?: StringFieldUpdateOperationsInput | string
    receiverLga?: StringFieldUpdateOperationsInput | string
    receiverState?: StringFieldUpdateOperationsInput | string
    currentLga?: NullableStringFieldUpdateOperationsInput | string | null
    currentState?: NullableStringFieldUpdateOperationsInput | string | null
    senderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackingUpdateCreateManyPackageInput = {
    id?: string
    status: string
    note?: string | null
    state?: string | null
    lga?: string | null
    createdAt?: Date | string
  }

  export type TrackingUpdateUpdateWithoutPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    lga?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackingUpdateUncheckedUpdateWithoutPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    lga?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackingUpdateUncheckedUpdateManyWithoutPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    lga?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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