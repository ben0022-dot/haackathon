
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
 * Model Skill
 * 
 */
export type Skill = $Result.DefaultSelection<Prisma.$SkillPayload>
/**
 * Model UserSkill
 * 
 */
export type UserSkill = $Result.DefaultSelection<Prisma.$UserSkillPayload>
/**
 * Model Opportunity
 * 
 */
export type Opportunity = $Result.DefaultSelection<Prisma.$OpportunityPayload>
/**
 * Model OpportunitySkill
 * 
 */
export type OpportunitySkill = $Result.DefaultSelection<Prisma.$OpportunitySkillPayload>
/**
 * Model Application
 * 
 */
export type Application = $Result.DefaultSelection<Prisma.$ApplicationPayload>
/**
 * Model PhoneOtp
 * 
 */
export type PhoneOtp = $Result.DefaultSelection<Prisma.$PhoneOtpPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model MatchExplanation
 * 
 */
export type MatchExplanation = $Result.DefaultSelection<Prisma.$MatchExplanationPayload>
/**
 * Model SkillRequest
 * 
 */
export type SkillRequest = $Result.DefaultSelection<Prisma.$SkillRequestPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  GRADUATE: 'GRADUATE',
  EMPLOYER: 'EMPLOYER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const ExperienceLevel: {
  BEGINNER: 'BEGINNER',
  INTERMEDIATE: 'INTERMEDIATE',
  ADVANCED: 'ADVANCED'
};

export type ExperienceLevel = (typeof ExperienceLevel)[keyof typeof ExperienceLevel]


export const OpportunityType: {
  JOB: 'JOB',
  GIG: 'GIG',
  CONTRACT: 'CONTRACT',
  APPRENTICESHIP: 'APPRENTICESHIP',
  SERVICE_REQUEST: 'SERVICE_REQUEST'
};

export type OpportunityType = (typeof OpportunityType)[keyof typeof OpportunityType]


export const OpportunityStatus: {
  OPEN: 'OPEN',
  CLOSED: 'CLOSED'
};

export type OpportunityStatus = (typeof OpportunityStatus)[keyof typeof OpportunityStatus]


export const PaymentType: {
  FIXED: 'FIXED',
  PER_DAY: 'PER_DAY',
  PER_HOUR: 'PER_HOUR',
  NEGOTIABLE: 'NEGOTIABLE'
};

export type PaymentType = (typeof PaymentType)[keyof typeof PaymentType]


export const ApplicationStatus: {
  PENDING: 'PENDING',
  REVIEWING: 'REVIEWING',
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED',
  COMPLETED: 'COMPLETED'
};

export type ApplicationStatus = (typeof ApplicationStatus)[keyof typeof ApplicationStatus]


export const SkillRequestStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  MERGED: 'MERGED',
  REJECTED: 'REJECTED'
};

export type SkillRequestStatus = (typeof SkillRequestStatus)[keyof typeof SkillRequestStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type ExperienceLevel = $Enums.ExperienceLevel

export const ExperienceLevel: typeof $Enums.ExperienceLevel

export type OpportunityType = $Enums.OpportunityType

export const OpportunityType: typeof $Enums.OpportunityType

export type OpportunityStatus = $Enums.OpportunityStatus

export const OpportunityStatus: typeof $Enums.OpportunityStatus

export type PaymentType = $Enums.PaymentType

export const PaymentType: typeof $Enums.PaymentType

export type ApplicationStatus = $Enums.ApplicationStatus

export const ApplicationStatus: typeof $Enums.ApplicationStatus

export type SkillRequestStatus = $Enums.SkillRequestStatus

export const SkillRequestStatus: typeof $Enums.SkillRequestStatus

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

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
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
   * `prisma.skill`: Exposes CRUD operations for the **Skill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skills
    * const skills = await prisma.skill.findMany()
    * ```
    */
  get skill(): Prisma.SkillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userSkill`: Exposes CRUD operations for the **UserSkill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSkills
    * const userSkills = await prisma.userSkill.findMany()
    * ```
    */
  get userSkill(): Prisma.UserSkillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.opportunity`: Exposes CRUD operations for the **Opportunity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Opportunities
    * const opportunities = await prisma.opportunity.findMany()
    * ```
    */
  get opportunity(): Prisma.OpportunityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.opportunitySkill`: Exposes CRUD operations for the **OpportunitySkill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OpportunitySkills
    * const opportunitySkills = await prisma.opportunitySkill.findMany()
    * ```
    */
  get opportunitySkill(): Prisma.OpportunitySkillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.application`: Exposes CRUD operations for the **Application** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Applications
    * const applications = await prisma.application.findMany()
    * ```
    */
  get application(): Prisma.ApplicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.phoneOtp`: Exposes CRUD operations for the **PhoneOtp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PhoneOtps
    * const phoneOtps = await prisma.phoneOtp.findMany()
    * ```
    */
  get phoneOtp(): Prisma.PhoneOtpDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.matchExplanation`: Exposes CRUD operations for the **MatchExplanation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MatchExplanations
    * const matchExplanations = await prisma.matchExplanation.findMany()
    * ```
    */
  get matchExplanation(): Prisma.MatchExplanationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skillRequest`: Exposes CRUD operations for the **SkillRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SkillRequests
    * const skillRequests = await prisma.skillRequest.findMany()
    * ```
    */
  get skillRequest(): Prisma.SkillRequestDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.10.0
   * Query Engine version: 0edf323efd1d98336f3f0a68684b56f689b900d3
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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
    Skill: 'Skill',
    UserSkill: 'UserSkill',
    Opportunity: 'Opportunity',
    OpportunitySkill: 'OpportunitySkill',
    Application: 'Application',
    PhoneOtp: 'PhoneOtp',
    Review: 'Review',
    MatchExplanation: 'MatchExplanation',
    SkillRequest: 'SkillRequest'
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
      modelProps: "user" | "skill" | "userSkill" | "opportunity" | "opportunitySkill" | "application" | "phoneOtp" | "review" | "matchExplanation" | "skillRequest"
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
      Skill: {
        payload: Prisma.$SkillPayload<ExtArgs>
        fields: Prisma.SkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findFirst: {
            args: Prisma.SkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findMany: {
            args: Prisma.SkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          create: {
            args: Prisma.SkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          createMany: {
            args: Prisma.SkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SkillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          delete: {
            args: Prisma.SkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          update: {
            args: Prisma.SkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          deleteMany: {
            args: Prisma.SkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SkillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          upsert: {
            args: Prisma.SkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          aggregate: {
            args: Prisma.SkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkill>
          }
          groupBy: {
            args: Prisma.SkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkillCountArgs<ExtArgs>
            result: $Utils.Optional<SkillCountAggregateOutputType> | number
          }
        }
      }
      UserSkill: {
        payload: Prisma.$UserSkillPayload<ExtArgs>
        fields: Prisma.UserSkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload>
          }
          findFirst: {
            args: Prisma.UserSkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload>
          }
          findMany: {
            args: Prisma.UserSkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload>[]
          }
          create: {
            args: Prisma.UserSkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload>
          }
          createMany: {
            args: Prisma.UserSkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserSkillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload>[]
          }
          delete: {
            args: Prisma.UserSkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload>
          }
          update: {
            args: Prisma.UserSkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload>
          }
          deleteMany: {
            args: Prisma.UserSkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserSkillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload>[]
          }
          upsert: {
            args: Prisma.UserSkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload>
          }
          aggregate: {
            args: Prisma.UserSkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSkill>
          }
          groupBy: {
            args: Prisma.UserSkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSkillCountArgs<ExtArgs>
            result: $Utils.Optional<UserSkillCountAggregateOutputType> | number
          }
        }
      }
      Opportunity: {
        payload: Prisma.$OpportunityPayload<ExtArgs>
        fields: Prisma.OpportunityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OpportunityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OpportunityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityPayload>
          }
          findFirst: {
            args: Prisma.OpportunityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OpportunityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityPayload>
          }
          findMany: {
            args: Prisma.OpportunityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityPayload>[]
          }
          create: {
            args: Prisma.OpportunityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityPayload>
          }
          createMany: {
            args: Prisma.OpportunityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OpportunityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityPayload>[]
          }
          delete: {
            args: Prisma.OpportunityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityPayload>
          }
          update: {
            args: Prisma.OpportunityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityPayload>
          }
          deleteMany: {
            args: Prisma.OpportunityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OpportunityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OpportunityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityPayload>[]
          }
          upsert: {
            args: Prisma.OpportunityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityPayload>
          }
          aggregate: {
            args: Prisma.OpportunityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOpportunity>
          }
          groupBy: {
            args: Prisma.OpportunityGroupByArgs<ExtArgs>
            result: $Utils.Optional<OpportunityGroupByOutputType>[]
          }
          count: {
            args: Prisma.OpportunityCountArgs<ExtArgs>
            result: $Utils.Optional<OpportunityCountAggregateOutputType> | number
          }
        }
      }
      OpportunitySkill: {
        payload: Prisma.$OpportunitySkillPayload<ExtArgs>
        fields: Prisma.OpportunitySkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OpportunitySkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunitySkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OpportunitySkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunitySkillPayload>
          }
          findFirst: {
            args: Prisma.OpportunitySkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunitySkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OpportunitySkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunitySkillPayload>
          }
          findMany: {
            args: Prisma.OpportunitySkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunitySkillPayload>[]
          }
          create: {
            args: Prisma.OpportunitySkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunitySkillPayload>
          }
          createMany: {
            args: Prisma.OpportunitySkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OpportunitySkillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunitySkillPayload>[]
          }
          delete: {
            args: Prisma.OpportunitySkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunitySkillPayload>
          }
          update: {
            args: Prisma.OpportunitySkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunitySkillPayload>
          }
          deleteMany: {
            args: Prisma.OpportunitySkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OpportunitySkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OpportunitySkillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunitySkillPayload>[]
          }
          upsert: {
            args: Prisma.OpportunitySkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunitySkillPayload>
          }
          aggregate: {
            args: Prisma.OpportunitySkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOpportunitySkill>
          }
          groupBy: {
            args: Prisma.OpportunitySkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<OpportunitySkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.OpportunitySkillCountArgs<ExtArgs>
            result: $Utils.Optional<OpportunitySkillCountAggregateOutputType> | number
          }
        }
      }
      Application: {
        payload: Prisma.$ApplicationPayload<ExtArgs>
        fields: Prisma.ApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApplicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApplicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          findFirst: {
            args: Prisma.ApplicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApplicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          findMany: {
            args: Prisma.ApplicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          create: {
            args: Prisma.ApplicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          createMany: {
            args: Prisma.ApplicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApplicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          delete: {
            args: Prisma.ApplicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          update: {
            args: Prisma.ApplicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          deleteMany: {
            args: Prisma.ApplicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApplicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApplicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          upsert: {
            args: Prisma.ApplicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          aggregate: {
            args: Prisma.ApplicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApplication>
          }
          groupBy: {
            args: Prisma.ApplicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApplicationCountArgs<ExtArgs>
            result: $Utils.Optional<ApplicationCountAggregateOutputType> | number
          }
        }
      }
      PhoneOtp: {
        payload: Prisma.$PhoneOtpPayload<ExtArgs>
        fields: Prisma.PhoneOtpFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhoneOtpFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneOtpPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhoneOtpFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneOtpPayload>
          }
          findFirst: {
            args: Prisma.PhoneOtpFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneOtpPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhoneOtpFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneOtpPayload>
          }
          findMany: {
            args: Prisma.PhoneOtpFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneOtpPayload>[]
          }
          create: {
            args: Prisma.PhoneOtpCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneOtpPayload>
          }
          createMany: {
            args: Prisma.PhoneOtpCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PhoneOtpCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneOtpPayload>[]
          }
          delete: {
            args: Prisma.PhoneOtpDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneOtpPayload>
          }
          update: {
            args: Prisma.PhoneOtpUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneOtpPayload>
          }
          deleteMany: {
            args: Prisma.PhoneOtpDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PhoneOtpUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PhoneOtpUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneOtpPayload>[]
          }
          upsert: {
            args: Prisma.PhoneOtpUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneOtpPayload>
          }
          aggregate: {
            args: Prisma.PhoneOtpAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhoneOtp>
          }
          groupBy: {
            args: Prisma.PhoneOtpGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhoneOtpGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhoneOtpCountArgs<ExtArgs>
            result: $Utils.Optional<PhoneOtpCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      MatchExplanation: {
        payload: Prisma.$MatchExplanationPayload<ExtArgs>
        fields: Prisma.MatchExplanationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatchExplanationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchExplanationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatchExplanationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchExplanationPayload>
          }
          findFirst: {
            args: Prisma.MatchExplanationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchExplanationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatchExplanationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchExplanationPayload>
          }
          findMany: {
            args: Prisma.MatchExplanationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchExplanationPayload>[]
          }
          create: {
            args: Prisma.MatchExplanationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchExplanationPayload>
          }
          createMany: {
            args: Prisma.MatchExplanationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MatchExplanationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchExplanationPayload>[]
          }
          delete: {
            args: Prisma.MatchExplanationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchExplanationPayload>
          }
          update: {
            args: Prisma.MatchExplanationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchExplanationPayload>
          }
          deleteMany: {
            args: Prisma.MatchExplanationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatchExplanationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MatchExplanationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchExplanationPayload>[]
          }
          upsert: {
            args: Prisma.MatchExplanationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchExplanationPayload>
          }
          aggregate: {
            args: Prisma.MatchExplanationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatchExplanation>
          }
          groupBy: {
            args: Prisma.MatchExplanationGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatchExplanationGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatchExplanationCountArgs<ExtArgs>
            result: $Utils.Optional<MatchExplanationCountAggregateOutputType> | number
          }
        }
      }
      SkillRequest: {
        payload: Prisma.$SkillRequestPayload<ExtArgs>
        fields: Prisma.SkillRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkillRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkillRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillRequestPayload>
          }
          findFirst: {
            args: Prisma.SkillRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkillRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillRequestPayload>
          }
          findMany: {
            args: Prisma.SkillRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillRequestPayload>[]
          }
          create: {
            args: Prisma.SkillRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillRequestPayload>
          }
          createMany: {
            args: Prisma.SkillRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SkillRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillRequestPayload>[]
          }
          delete: {
            args: Prisma.SkillRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillRequestPayload>
          }
          update: {
            args: Prisma.SkillRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillRequestPayload>
          }
          deleteMany: {
            args: Prisma.SkillRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkillRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SkillRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillRequestPayload>[]
          }
          upsert: {
            args: Prisma.SkillRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillRequestPayload>
          }
          aggregate: {
            args: Prisma.SkillRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkillRequest>
          }
          groupBy: {
            args: Prisma.SkillRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkillRequestCountArgs<ExtArgs>
            result: $Utils.Optional<SkillRequestCountAggregateOutputType> | number
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
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
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
    skill?: SkillOmit
    userSkill?: UserSkillOmit
    opportunity?: OpportunityOmit
    opportunitySkill?: OpportunitySkillOmit
    application?: ApplicationOmit
    phoneOtp?: PhoneOtpOmit
    review?: ReviewOmit
    matchExplanation?: MatchExplanationOmit
    skillRequest?: SkillRequestOmit
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
    skills: number
    opportunities: number
    applications: number
    matchExplanations: number
    skillRequests: number
    otps: number
    reviewsGiven: number
    reviewsReceived: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skills?: boolean | UserCountOutputTypeCountSkillsArgs
    opportunities?: boolean | UserCountOutputTypeCountOpportunitiesArgs
    applications?: boolean | UserCountOutputTypeCountApplicationsArgs
    matchExplanations?: boolean | UserCountOutputTypeCountMatchExplanationsArgs
    skillRequests?: boolean | UserCountOutputTypeCountSkillRequestsArgs
    otps?: boolean | UserCountOutputTypeCountOtpsArgs
    reviewsGiven?: boolean | UserCountOutputTypeCountReviewsGivenArgs
    reviewsReceived?: boolean | UserCountOutputTypeCountReviewsReceivedArgs
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
  export type UserCountOutputTypeCountSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSkillWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOpportunitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OpportunityWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMatchExplanationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchExplanationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSkillRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOtpsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhoneOtpWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsGivenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type SkillCountOutputType
   */

  export type SkillCountOutputType = {
    users: number
    opportunities: number
  }

  export type SkillCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | SkillCountOutputTypeCountUsersArgs
    opportunities?: boolean | SkillCountOutputTypeCountOpportunitiesArgs
  }

  // Custom InputTypes
  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCountOutputType
     */
    select?: SkillCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSkillWhereInput
  }

  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeCountOpportunitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OpportunitySkillWhereInput
  }


  /**
   * Count Type OpportunityCountOutputType
   */

  export type OpportunityCountOutputType = {
    skills: number
    applications: number
    matchExplanations: number
  }

  export type OpportunityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skills?: boolean | OpportunityCountOutputTypeCountSkillsArgs
    applications?: boolean | OpportunityCountOutputTypeCountApplicationsArgs
    matchExplanations?: boolean | OpportunityCountOutputTypeCountMatchExplanationsArgs
  }

  // Custom InputTypes
  /**
   * OpportunityCountOutputType without action
   */
  export type OpportunityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpportunityCountOutputType
     */
    select?: OpportunityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OpportunityCountOutputType without action
   */
  export type OpportunityCountOutputTypeCountSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OpportunitySkillWhereInput
  }

  /**
   * OpportunityCountOutputType without action
   */
  export type OpportunityCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
  }

  /**
   * OpportunityCountOutputType without action
   */
  export type OpportunityCountOutputTypeCountMatchExplanationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchExplanationWhereInput
  }


  /**
   * Count Type ApplicationCountOutputType
   */

  export type ApplicationCountOutputType = {
    reviews: number
  }

  export type ApplicationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | ApplicationCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * ApplicationCountOutputType without action
   */
  export type ApplicationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationCountOutputType
     */
    select?: ApplicationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ApplicationCountOutputType without action
   */
  export type ApplicationCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
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
    firebaseUid: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    phone: string | null
    phoneVerified: boolean | null
    role: $Enums.Role | null
    bio: string | null
    companyName: string | null
    jobTitle: string | null
    location: string | null
    avatarUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    firebaseUid: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    phone: string | null
    phoneVerified: boolean | null
    role: $Enums.Role | null
    bio: string | null
    companyName: string | null
    jobTitle: string | null
    location: string | null
    avatarUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firebaseUid: number
    name: number
    email: number
    emailVerified: number
    phone: number
    phoneVerified: number
    role: number
    bio: number
    companyName: number
    jobTitle: number
    location: number
    avatarUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    firebaseUid?: true
    name?: true
    email?: true
    emailVerified?: true
    phone?: true
    phoneVerified?: true
    role?: true
    bio?: true
    companyName?: true
    jobTitle?: true
    location?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firebaseUid?: true
    name?: true
    email?: true
    emailVerified?: true
    phone?: true
    phoneVerified?: true
    role?: true
    bio?: true
    companyName?: true
    jobTitle?: true
    location?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firebaseUid?: true
    name?: true
    email?: true
    emailVerified?: true
    phone?: true
    phoneVerified?: true
    role?: true
    bio?: true
    companyName?: true
    jobTitle?: true
    location?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
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
    firebaseUid: string
    name: string
    email: string
    emailVerified: boolean
    phone: string | null
    phoneVerified: boolean
    role: $Enums.Role
    bio: string | null
    companyName: string | null
    jobTitle: string | null
    location: string | null
    avatarUrl: string | null
    createdAt: Date
    updatedAt: Date
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
    firebaseUid?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    phone?: boolean
    phoneVerified?: boolean
    role?: boolean
    bio?: boolean
    companyName?: boolean
    jobTitle?: boolean
    location?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    skills?: boolean | User$skillsArgs<ExtArgs>
    opportunities?: boolean | User$opportunitiesArgs<ExtArgs>
    applications?: boolean | User$applicationsArgs<ExtArgs>
    matchExplanations?: boolean | User$matchExplanationsArgs<ExtArgs>
    skillRequests?: boolean | User$skillRequestsArgs<ExtArgs>
    otps?: boolean | User$otpsArgs<ExtArgs>
    reviewsGiven?: boolean | User$reviewsGivenArgs<ExtArgs>
    reviewsReceived?: boolean | User$reviewsReceivedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firebaseUid?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    phone?: boolean
    phoneVerified?: boolean
    role?: boolean
    bio?: boolean
    companyName?: boolean
    jobTitle?: boolean
    location?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firebaseUid?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    phone?: boolean
    phoneVerified?: boolean
    role?: boolean
    bio?: boolean
    companyName?: boolean
    jobTitle?: boolean
    location?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firebaseUid?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    phone?: boolean
    phoneVerified?: boolean
    role?: boolean
    bio?: boolean
    companyName?: boolean
    jobTitle?: boolean
    location?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firebaseUid" | "name" | "email" | "emailVerified" | "phone" | "phoneVerified" | "role" | "bio" | "companyName" | "jobTitle" | "location" | "avatarUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skills?: boolean | User$skillsArgs<ExtArgs>
    opportunities?: boolean | User$opportunitiesArgs<ExtArgs>
    applications?: boolean | User$applicationsArgs<ExtArgs>
    matchExplanations?: boolean | User$matchExplanationsArgs<ExtArgs>
    skillRequests?: boolean | User$skillRequestsArgs<ExtArgs>
    otps?: boolean | User$otpsArgs<ExtArgs>
    reviewsGiven?: boolean | User$reviewsGivenArgs<ExtArgs>
    reviewsReceived?: boolean | User$reviewsReceivedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      skills: Prisma.$UserSkillPayload<ExtArgs>[]
      opportunities: Prisma.$OpportunityPayload<ExtArgs>[]
      applications: Prisma.$ApplicationPayload<ExtArgs>[]
      matchExplanations: Prisma.$MatchExplanationPayload<ExtArgs>[]
      skillRequests: Prisma.$SkillRequestPayload<ExtArgs>[]
      otps: Prisma.$PhoneOtpPayload<ExtArgs>[]
      reviewsGiven: Prisma.$ReviewPayload<ExtArgs>[]
      reviewsReceived: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firebaseUid: string
      name: string
      email: string
      emailVerified: boolean
      phone: string | null
      phoneVerified: boolean
      role: $Enums.Role
      bio: string | null
      companyName: string | null
      jobTitle: string | null
      location: string | null
      avatarUrl: string | null
      createdAt: Date
      updatedAt: Date
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
    skills<T extends User$skillsArgs<ExtArgs> = {}>(args?: Subset<T, User$skillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    opportunities<T extends User$opportunitiesArgs<ExtArgs> = {}>(args?: Subset<T, User$opportunitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpportunityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    applications<T extends User$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, User$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    matchExplanations<T extends User$matchExplanationsArgs<ExtArgs> = {}>(args?: Subset<T, User$matchExplanationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchExplanationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    skillRequests<T extends User$skillRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$skillRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    otps<T extends User$otpsArgs<ExtArgs> = {}>(args?: Subset<T, User$otpsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhoneOtpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviewsGiven<T extends User$reviewsGivenArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsGivenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviewsReceived<T extends User$reviewsReceivedArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly firebaseUid: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly phone: FieldRef<"User", 'String'>
    readonly phoneVerified: FieldRef<"User", 'Boolean'>
    readonly role: FieldRef<"User", 'Role'>
    readonly bio: FieldRef<"User", 'String'>
    readonly companyName: FieldRef<"User", 'String'>
    readonly jobTitle: FieldRef<"User", 'String'>
    readonly location: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
   * User.skills
   */
  export type User$skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    where?: UserSkillWhereInput
    orderBy?: UserSkillOrderByWithRelationInput | UserSkillOrderByWithRelationInput[]
    cursor?: UserSkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSkillScalarFieldEnum | UserSkillScalarFieldEnum[]
  }

  /**
   * User.opportunities
   */
  export type User$opportunitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opportunity
     */
    select?: OpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opportunity
     */
    omit?: OpportunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityInclude<ExtArgs> | null
    where?: OpportunityWhereInput
    orderBy?: OpportunityOrderByWithRelationInput | OpportunityOrderByWithRelationInput[]
    cursor?: OpportunityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OpportunityScalarFieldEnum | OpportunityScalarFieldEnum[]
  }

  /**
   * User.applications
   */
  export type User$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    cursor?: ApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * User.matchExplanations
   */
  export type User$matchExplanationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchExplanation
     */
    select?: MatchExplanationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchExplanation
     */
    omit?: MatchExplanationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchExplanationInclude<ExtArgs> | null
    where?: MatchExplanationWhereInput
    orderBy?: MatchExplanationOrderByWithRelationInput | MatchExplanationOrderByWithRelationInput[]
    cursor?: MatchExplanationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchExplanationScalarFieldEnum | MatchExplanationScalarFieldEnum[]
  }

  /**
   * User.skillRequests
   */
  export type User$skillRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillRequest
     */
    select?: SkillRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillRequest
     */
    omit?: SkillRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillRequestInclude<ExtArgs> | null
    where?: SkillRequestWhereInput
    orderBy?: SkillRequestOrderByWithRelationInput | SkillRequestOrderByWithRelationInput[]
    cursor?: SkillRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SkillRequestScalarFieldEnum | SkillRequestScalarFieldEnum[]
  }

  /**
   * User.otps
   */
  export type User$otpsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneOtp
     */
    select?: PhoneOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneOtp
     */
    omit?: PhoneOtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneOtpInclude<ExtArgs> | null
    where?: PhoneOtpWhereInput
    orderBy?: PhoneOtpOrderByWithRelationInput | PhoneOtpOrderByWithRelationInput[]
    cursor?: PhoneOtpWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PhoneOtpScalarFieldEnum | PhoneOtpScalarFieldEnum[]
  }

  /**
   * User.reviewsGiven
   */
  export type User$reviewsGivenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User.reviewsReceived
   */
  export type User$reviewsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
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
   * Model Skill
   */

  export type AggregateSkill = {
    _count: SkillCountAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  export type SkillMinAggregateOutputType = {
    id: string | null
    name: string | null
    category: string | null
    createdAt: Date | null
  }

  export type SkillMaxAggregateOutputType = {
    id: string | null
    name: string | null
    category: string | null
    createdAt: Date | null
  }

  export type SkillCountAggregateOutputType = {
    id: number
    name: number
    category: number
    createdAt: number
    _all: number
  }


  export type SkillMinAggregateInputType = {
    id?: true
    name?: true
    category?: true
    createdAt?: true
  }

  export type SkillMaxAggregateInputType = {
    id?: true
    name?: true
    category?: true
    createdAt?: true
  }

  export type SkillCountAggregateInputType = {
    id?: true
    name?: true
    category?: true
    createdAt?: true
    _all?: true
  }

  export type SkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skill to aggregate.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Skills
    **/
    _count?: true | SkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillMaxAggregateInputType
  }

  export type GetSkillAggregateType<T extends SkillAggregateArgs> = {
        [P in keyof T & keyof AggregateSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkill[P]>
      : GetScalarType<T[P], AggregateSkill[P]>
  }




  export type SkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillWhereInput
    orderBy?: SkillOrderByWithAggregationInput | SkillOrderByWithAggregationInput[]
    by: SkillScalarFieldEnum[] | SkillScalarFieldEnum
    having?: SkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillCountAggregateInputType | true
    _min?: SkillMinAggregateInputType
    _max?: SkillMaxAggregateInputType
  }

  export type SkillGroupByOutputType = {
    id: string
    name: string
    category: string | null
    createdAt: Date
    _count: SkillCountAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  type GetSkillGroupByPayload<T extends SkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillGroupByOutputType[P]>
            : GetScalarType<T[P], SkillGroupByOutputType[P]>
        }
      >
    >


  export type SkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    createdAt?: boolean
    users?: boolean | Skill$usersArgs<ExtArgs>
    opportunities?: boolean | Skill$opportunitiesArgs<ExtArgs>
    _count?: boolean | SkillCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectScalar = {
    id?: boolean
    name?: boolean
    category?: boolean
    createdAt?: boolean
  }

  export type SkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "category" | "createdAt", ExtArgs["result"]["skill"]>
  export type SkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Skill$usersArgs<ExtArgs>
    opportunities?: boolean | Skill$opportunitiesArgs<ExtArgs>
    _count?: boolean | SkillCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SkillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SkillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Skill"
    objects: {
      users: Prisma.$UserSkillPayload<ExtArgs>[]
      opportunities: Prisma.$OpportunitySkillPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      category: string | null
      createdAt: Date
    }, ExtArgs["result"]["skill"]>
    composites: {}
  }

  type SkillGetPayload<S extends boolean | null | undefined | SkillDefaultArgs> = $Result.GetResult<Prisma.$SkillPayload, S>

  type SkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkillCountAggregateInputType | true
    }

  export interface SkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Skill'], meta: { name: 'Skill' } }
    /**
     * Find zero or one Skill that matches the filter.
     * @param {SkillFindUniqueArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkillFindUniqueArgs>(args: SelectSubset<T, SkillFindUniqueArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Skill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SkillFindUniqueOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkillFindUniqueOrThrowArgs>(args: SelectSubset<T, SkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkillFindFirstArgs>(args?: SelectSubset<T, SkillFindFirstArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkillFindFirstOrThrowArgs>(args?: SelectSubset<T, SkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skills
     * const skills = await prisma.skill.findMany()
     * 
     * // Get first 10 Skills
     * const skills = await prisma.skill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillWithIdOnly = await prisma.skill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SkillFindManyArgs>(args?: SelectSubset<T, SkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Skill.
     * @param {SkillCreateArgs} args - Arguments to create a Skill.
     * @example
     * // Create one Skill
     * const Skill = await prisma.skill.create({
     *   data: {
     *     // ... data to create a Skill
     *   }
     * })
     * 
     */
    create<T extends SkillCreateArgs>(args: SelectSubset<T, SkillCreateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Skills.
     * @param {SkillCreateManyArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SkillCreateManyArgs>(args?: SelectSubset<T, SkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Skills and returns the data saved in the database.
     * @param {SkillCreateManyAndReturnArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SkillCreateManyAndReturnArgs>(args?: SelectSubset<T, SkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Skill.
     * @param {SkillDeleteArgs} args - Arguments to delete one Skill.
     * @example
     * // Delete one Skill
     * const Skill = await prisma.skill.delete({
     *   where: {
     *     // ... filter to delete one Skill
     *   }
     * })
     * 
     */
    delete<T extends SkillDeleteArgs>(args: SelectSubset<T, SkillDeleteArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Skill.
     * @param {SkillUpdateArgs} args - Arguments to update one Skill.
     * @example
     * // Update one Skill
     * const skill = await prisma.skill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SkillUpdateArgs>(args: SelectSubset<T, SkillUpdateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Skills.
     * @param {SkillDeleteManyArgs} args - Arguments to filter Skills to delete.
     * @example
     * // Delete a few Skills
     * const { count } = await prisma.skill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SkillDeleteManyArgs>(args?: SelectSubset<T, SkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SkillUpdateManyArgs>(args: SelectSubset<T, SkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills and returns the data updated in the database.
     * @param {SkillUpdateManyAndReturnArgs} args - Arguments to update many Skills.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.updateManyAndReturn({
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
    updateManyAndReturn<T extends SkillUpdateManyAndReturnArgs>(args: SelectSubset<T, SkillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Skill.
     * @param {SkillUpsertArgs} args - Arguments to update or create a Skill.
     * @example
     * // Update or create a Skill
     * const skill = await prisma.skill.upsert({
     *   create: {
     *     // ... data to create a Skill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skill we want to update
     *   }
     * })
     */
    upsert<T extends SkillUpsertArgs>(args: SelectSubset<T, SkillUpsertArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCountArgs} args - Arguments to filter Skills to count.
     * @example
     * // Count the number of Skills
     * const count = await prisma.skill.count({
     *   where: {
     *     // ... the filter for the Skills we want to count
     *   }
     * })
    **/
    count<T extends SkillCountArgs>(
      args?: Subset<T, SkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SkillAggregateArgs>(args: Subset<T, SkillAggregateArgs>): Prisma.PrismaPromise<GetSkillAggregateType<T>>

    /**
     * Group by Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillGroupByArgs} args - Group by arguments.
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
      T extends SkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillGroupByArgs['orderBy'] }
        : { orderBy?: SkillGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Skill model
   */
  readonly fields: SkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Skill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Skill$usersArgs<ExtArgs> = {}>(args?: Subset<T, Skill$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    opportunities<T extends Skill$opportunitiesArgs<ExtArgs> = {}>(args?: Subset<T, Skill$opportunitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpportunitySkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Skill model
   */
  interface SkillFieldRefs {
    readonly id: FieldRef<"Skill", 'String'>
    readonly name: FieldRef<"Skill", 'String'>
    readonly category: FieldRef<"Skill", 'String'>
    readonly createdAt: FieldRef<"Skill", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Skill findUnique
   */
  export type SkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findUniqueOrThrow
   */
  export type SkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findFirst
   */
  export type SkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findFirstOrThrow
   */
  export type SkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findMany
   */
  export type SkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill create
   */
  export type SkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The data needed to create a Skill.
     */
    data: XOR<SkillCreateInput, SkillUncheckedCreateInput>
  }

  /**
   * Skill createMany
   */
  export type SkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Skill createManyAndReturn
   */
  export type SkillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Skill update
   */
  export type SkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The data needed to update a Skill.
     */
    data: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
    /**
     * Choose, which Skill to update.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill updateMany
   */
  export type SkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to update.
     */
    limit?: number
  }

  /**
   * Skill updateManyAndReturn
   */
  export type SkillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to update.
     */
    limit?: number
  }

  /**
   * Skill upsert
   */
  export type SkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The filter to search for the Skill to update in case it exists.
     */
    where: SkillWhereUniqueInput
    /**
     * In case the Skill found by the `where` argument doesn't exist, create a new Skill with this data.
     */
    create: XOR<SkillCreateInput, SkillUncheckedCreateInput>
    /**
     * In case the Skill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
  }

  /**
   * Skill delete
   */
  export type SkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter which Skill to delete.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill deleteMany
   */
  export type SkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skills to delete
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to delete.
     */
    limit?: number
  }

  /**
   * Skill.users
   */
  export type Skill$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    where?: UserSkillWhereInput
    orderBy?: UserSkillOrderByWithRelationInput | UserSkillOrderByWithRelationInput[]
    cursor?: UserSkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSkillScalarFieldEnum | UserSkillScalarFieldEnum[]
  }

  /**
   * Skill.opportunities
   */
  export type Skill$opportunitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpportunitySkill
     */
    select?: OpportunitySkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpportunitySkill
     */
    omit?: OpportunitySkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunitySkillInclude<ExtArgs> | null
    where?: OpportunitySkillWhereInput
    orderBy?: OpportunitySkillOrderByWithRelationInput | OpportunitySkillOrderByWithRelationInput[]
    cursor?: OpportunitySkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OpportunitySkillScalarFieldEnum | OpportunitySkillScalarFieldEnum[]
  }

  /**
   * Skill without action
   */
  export type SkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
  }


  /**
   * Model UserSkill
   */

  export type AggregateUserSkill = {
    _count: UserSkillCountAggregateOutputType | null
    _min: UserSkillMinAggregateOutputType | null
    _max: UserSkillMaxAggregateOutputType | null
  }

  export type UserSkillMinAggregateOutputType = {
    id: string | null
    userId: string | null
    skillId: string | null
    experienceLevel: $Enums.ExperienceLevel | null
    createdAt: Date | null
  }

  export type UserSkillMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    skillId: string | null
    experienceLevel: $Enums.ExperienceLevel | null
    createdAt: Date | null
  }

  export type UserSkillCountAggregateOutputType = {
    id: number
    userId: number
    skillId: number
    experienceLevel: number
    createdAt: number
    _all: number
  }


  export type UserSkillMinAggregateInputType = {
    id?: true
    userId?: true
    skillId?: true
    experienceLevel?: true
    createdAt?: true
  }

  export type UserSkillMaxAggregateInputType = {
    id?: true
    userId?: true
    skillId?: true
    experienceLevel?: true
    createdAt?: true
  }

  export type UserSkillCountAggregateInputType = {
    id?: true
    userId?: true
    skillId?: true
    experienceLevel?: true
    createdAt?: true
    _all?: true
  }

  export type UserSkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSkill to aggregate.
     */
    where?: UserSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSkills to fetch.
     */
    orderBy?: UserSkillOrderByWithRelationInput | UserSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSkills
    **/
    _count?: true | UserSkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSkillMaxAggregateInputType
  }

  export type GetUserSkillAggregateType<T extends UserSkillAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSkill[P]>
      : GetScalarType<T[P], AggregateUserSkill[P]>
  }




  export type UserSkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSkillWhereInput
    orderBy?: UserSkillOrderByWithAggregationInput | UserSkillOrderByWithAggregationInput[]
    by: UserSkillScalarFieldEnum[] | UserSkillScalarFieldEnum
    having?: UserSkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSkillCountAggregateInputType | true
    _min?: UserSkillMinAggregateInputType
    _max?: UserSkillMaxAggregateInputType
  }

  export type UserSkillGroupByOutputType = {
    id: string
    userId: string
    skillId: string
    experienceLevel: $Enums.ExperienceLevel
    createdAt: Date
    _count: UserSkillCountAggregateOutputType | null
    _min: UserSkillMinAggregateOutputType | null
    _max: UserSkillMaxAggregateOutputType | null
  }

  type GetUserSkillGroupByPayload<T extends UserSkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSkillGroupByOutputType[P]>
            : GetScalarType<T[P], UserSkillGroupByOutputType[P]>
        }
      >
    >


  export type UserSkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    skillId?: boolean
    experienceLevel?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSkill"]>

  export type UserSkillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    skillId?: boolean
    experienceLevel?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSkill"]>

  export type UserSkillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    skillId?: boolean
    experienceLevel?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSkill"]>

  export type UserSkillSelectScalar = {
    id?: boolean
    userId?: boolean
    skillId?: boolean
    experienceLevel?: boolean
    createdAt?: boolean
  }

  export type UserSkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "skillId" | "experienceLevel" | "createdAt", ExtArgs["result"]["userSkill"]>
  export type UserSkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }
  export type UserSkillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }
  export type UserSkillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }

  export type $UserSkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSkill"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      skill: Prisma.$SkillPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      skillId: string
      experienceLevel: $Enums.ExperienceLevel
      createdAt: Date
    }, ExtArgs["result"]["userSkill"]>
    composites: {}
  }

  type UserSkillGetPayload<S extends boolean | null | undefined | UserSkillDefaultArgs> = $Result.GetResult<Prisma.$UserSkillPayload, S>

  type UserSkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSkillCountAggregateInputType | true
    }

  export interface UserSkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSkill'], meta: { name: 'UserSkill' } }
    /**
     * Find zero or one UserSkill that matches the filter.
     * @param {UserSkillFindUniqueArgs} args - Arguments to find a UserSkill
     * @example
     * // Get one UserSkill
     * const userSkill = await prisma.userSkill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSkillFindUniqueArgs>(args: SelectSubset<T, UserSkillFindUniqueArgs<ExtArgs>>): Prisma__UserSkillClient<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSkill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSkillFindUniqueOrThrowArgs} args - Arguments to find a UserSkill
     * @example
     * // Get one UserSkill
     * const userSkill = await prisma.userSkill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSkillFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSkillClient<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSkill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillFindFirstArgs} args - Arguments to find a UserSkill
     * @example
     * // Get one UserSkill
     * const userSkill = await prisma.userSkill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSkillFindFirstArgs>(args?: SelectSubset<T, UserSkillFindFirstArgs<ExtArgs>>): Prisma__UserSkillClient<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSkill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillFindFirstOrThrowArgs} args - Arguments to find a UserSkill
     * @example
     * // Get one UserSkill
     * const userSkill = await prisma.userSkill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSkillFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSkillClient<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSkills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSkills
     * const userSkills = await prisma.userSkill.findMany()
     * 
     * // Get first 10 UserSkills
     * const userSkills = await prisma.userSkill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userSkillWithIdOnly = await prisma.userSkill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserSkillFindManyArgs>(args?: SelectSubset<T, UserSkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSkill.
     * @param {UserSkillCreateArgs} args - Arguments to create a UserSkill.
     * @example
     * // Create one UserSkill
     * const UserSkill = await prisma.userSkill.create({
     *   data: {
     *     // ... data to create a UserSkill
     *   }
     * })
     * 
     */
    create<T extends UserSkillCreateArgs>(args: SelectSubset<T, UserSkillCreateArgs<ExtArgs>>): Prisma__UserSkillClient<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSkills.
     * @param {UserSkillCreateManyArgs} args - Arguments to create many UserSkills.
     * @example
     * // Create many UserSkills
     * const userSkill = await prisma.userSkill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSkillCreateManyArgs>(args?: SelectSubset<T, UserSkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSkills and returns the data saved in the database.
     * @param {UserSkillCreateManyAndReturnArgs} args - Arguments to create many UserSkills.
     * @example
     * // Create many UserSkills
     * const userSkill = await prisma.userSkill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserSkills and only return the `id`
     * const userSkillWithIdOnly = await prisma.userSkill.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserSkillCreateManyAndReturnArgs>(args?: SelectSubset<T, UserSkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserSkill.
     * @param {UserSkillDeleteArgs} args - Arguments to delete one UserSkill.
     * @example
     * // Delete one UserSkill
     * const UserSkill = await prisma.userSkill.delete({
     *   where: {
     *     // ... filter to delete one UserSkill
     *   }
     * })
     * 
     */
    delete<T extends UserSkillDeleteArgs>(args: SelectSubset<T, UserSkillDeleteArgs<ExtArgs>>): Prisma__UserSkillClient<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSkill.
     * @param {UserSkillUpdateArgs} args - Arguments to update one UserSkill.
     * @example
     * // Update one UserSkill
     * const userSkill = await prisma.userSkill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSkillUpdateArgs>(args: SelectSubset<T, UserSkillUpdateArgs<ExtArgs>>): Prisma__UserSkillClient<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSkills.
     * @param {UserSkillDeleteManyArgs} args - Arguments to filter UserSkills to delete.
     * @example
     * // Delete a few UserSkills
     * const { count } = await prisma.userSkill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSkillDeleteManyArgs>(args?: SelectSubset<T, UserSkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSkills
     * const userSkill = await prisma.userSkill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSkillUpdateManyArgs>(args: SelectSubset<T, UserSkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSkills and returns the data updated in the database.
     * @param {UserSkillUpdateManyAndReturnArgs} args - Arguments to update many UserSkills.
     * @example
     * // Update many UserSkills
     * const userSkill = await prisma.userSkill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserSkills and only return the `id`
     * const userSkillWithIdOnly = await prisma.userSkill.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserSkillUpdateManyAndReturnArgs>(args: SelectSubset<T, UserSkillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserSkill.
     * @param {UserSkillUpsertArgs} args - Arguments to update or create a UserSkill.
     * @example
     * // Update or create a UserSkill
     * const userSkill = await prisma.userSkill.upsert({
     *   create: {
     *     // ... data to create a UserSkill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSkill we want to update
     *   }
     * })
     */
    upsert<T extends UserSkillUpsertArgs>(args: SelectSubset<T, UserSkillUpsertArgs<ExtArgs>>): Prisma__UserSkillClient<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillCountArgs} args - Arguments to filter UserSkills to count.
     * @example
     * // Count the number of UserSkills
     * const count = await prisma.userSkill.count({
     *   where: {
     *     // ... the filter for the UserSkills we want to count
     *   }
     * })
    **/
    count<T extends UserSkillCountArgs>(
      args?: Subset<T, UserSkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserSkillAggregateArgs>(args: Subset<T, UserSkillAggregateArgs>): Prisma.PrismaPromise<GetUserSkillAggregateType<T>>

    /**
     * Group by UserSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillGroupByArgs} args - Group by arguments.
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
      T extends UserSkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSkillGroupByArgs['orderBy'] }
        : { orderBy?: UserSkillGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserSkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSkill model
   */
  readonly fields: UserSkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSkill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    skill<T extends SkillDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SkillDefaultArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserSkill model
   */
  interface UserSkillFieldRefs {
    readonly id: FieldRef<"UserSkill", 'String'>
    readonly userId: FieldRef<"UserSkill", 'String'>
    readonly skillId: FieldRef<"UserSkill", 'String'>
    readonly experienceLevel: FieldRef<"UserSkill", 'ExperienceLevel'>
    readonly createdAt: FieldRef<"UserSkill", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserSkill findUnique
   */
  export type UserSkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    /**
     * Filter, which UserSkill to fetch.
     */
    where: UserSkillWhereUniqueInput
  }

  /**
   * UserSkill findUniqueOrThrow
   */
  export type UserSkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    /**
     * Filter, which UserSkill to fetch.
     */
    where: UserSkillWhereUniqueInput
  }

  /**
   * UserSkill findFirst
   */
  export type UserSkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    /**
     * Filter, which UserSkill to fetch.
     */
    where?: UserSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSkills to fetch.
     */
    orderBy?: UserSkillOrderByWithRelationInput | UserSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSkills.
     */
    cursor?: UserSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSkills.
     */
    distinct?: UserSkillScalarFieldEnum | UserSkillScalarFieldEnum[]
  }

  /**
   * UserSkill findFirstOrThrow
   */
  export type UserSkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    /**
     * Filter, which UserSkill to fetch.
     */
    where?: UserSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSkills to fetch.
     */
    orderBy?: UserSkillOrderByWithRelationInput | UserSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSkills.
     */
    cursor?: UserSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSkills.
     */
    distinct?: UserSkillScalarFieldEnum | UserSkillScalarFieldEnum[]
  }

  /**
   * UserSkill findMany
   */
  export type UserSkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    /**
     * Filter, which UserSkills to fetch.
     */
    where?: UserSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSkills to fetch.
     */
    orderBy?: UserSkillOrderByWithRelationInput | UserSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSkills.
     */
    cursor?: UserSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSkills.
     */
    distinct?: UserSkillScalarFieldEnum | UserSkillScalarFieldEnum[]
  }

  /**
   * UserSkill create
   */
  export type UserSkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSkill.
     */
    data: XOR<UserSkillCreateInput, UserSkillUncheckedCreateInput>
  }

  /**
   * UserSkill createMany
   */
  export type UserSkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSkills.
     */
    data: UserSkillCreateManyInput | UserSkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSkill createManyAndReturn
   */
  export type UserSkillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * The data used to create many UserSkills.
     */
    data: UserSkillCreateManyInput | UserSkillCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSkill update
   */
  export type UserSkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSkill.
     */
    data: XOR<UserSkillUpdateInput, UserSkillUncheckedUpdateInput>
    /**
     * Choose, which UserSkill to update.
     */
    where: UserSkillWhereUniqueInput
  }

  /**
   * UserSkill updateMany
   */
  export type UserSkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSkills.
     */
    data: XOR<UserSkillUpdateManyMutationInput, UserSkillUncheckedUpdateManyInput>
    /**
     * Filter which UserSkills to update
     */
    where?: UserSkillWhereInput
    /**
     * Limit how many UserSkills to update.
     */
    limit?: number
  }

  /**
   * UserSkill updateManyAndReturn
   */
  export type UserSkillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * The data used to update UserSkills.
     */
    data: XOR<UserSkillUpdateManyMutationInput, UserSkillUncheckedUpdateManyInput>
    /**
     * Filter which UserSkills to update
     */
    where?: UserSkillWhereInput
    /**
     * Limit how many UserSkills to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSkill upsert
   */
  export type UserSkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSkill to update in case it exists.
     */
    where: UserSkillWhereUniqueInput
    /**
     * In case the UserSkill found by the `where` argument doesn't exist, create a new UserSkill with this data.
     */
    create: XOR<UserSkillCreateInput, UserSkillUncheckedCreateInput>
    /**
     * In case the UserSkill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSkillUpdateInput, UserSkillUncheckedUpdateInput>
  }

  /**
   * UserSkill delete
   */
  export type UserSkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    /**
     * Filter which UserSkill to delete.
     */
    where: UserSkillWhereUniqueInput
  }

  /**
   * UserSkill deleteMany
   */
  export type UserSkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSkills to delete
     */
    where?: UserSkillWhereInput
    /**
     * Limit how many UserSkills to delete.
     */
    limit?: number
  }

  /**
   * UserSkill without action
   */
  export type UserSkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
  }


  /**
   * Model Opportunity
   */

  export type AggregateOpportunity = {
    _count: OpportunityCountAggregateOutputType | null
    _avg: OpportunityAvgAggregateOutputType | null
    _sum: OpportunitySumAggregateOutputType | null
    _min: OpportunityMinAggregateOutputType | null
    _max: OpportunityMaxAggregateOutputType | null
  }

  export type OpportunityAvgAggregateOutputType = {
    payment: number | null
  }

  export type OpportunitySumAggregateOutputType = {
    payment: number | null
  }

  export type OpportunityMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    type: $Enums.OpportunityType | null
    location: string | null
    payment: number | null
    paymentType: $Enums.PaymentType | null
    deadline: Date | null
    employerId: string | null
    status: $Enums.OpportunityStatus | null
    verified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OpportunityMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    type: $Enums.OpportunityType | null
    location: string | null
    payment: number | null
    paymentType: $Enums.PaymentType | null
    deadline: Date | null
    employerId: string | null
    status: $Enums.OpportunityStatus | null
    verified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OpportunityCountAggregateOutputType = {
    id: number
    title: number
    description: number
    type: number
    location: number
    payment: number
    paymentType: number
    deadline: number
    employerId: number
    status: number
    verified: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OpportunityAvgAggregateInputType = {
    payment?: true
  }

  export type OpportunitySumAggregateInputType = {
    payment?: true
  }

  export type OpportunityMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    location?: true
    payment?: true
    paymentType?: true
    deadline?: true
    employerId?: true
    status?: true
    verified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OpportunityMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    location?: true
    payment?: true
    paymentType?: true
    deadline?: true
    employerId?: true
    status?: true
    verified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OpportunityCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    location?: true
    payment?: true
    paymentType?: true
    deadline?: true
    employerId?: true
    status?: true
    verified?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OpportunityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Opportunity to aggregate.
     */
    where?: OpportunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Opportunities to fetch.
     */
    orderBy?: OpportunityOrderByWithRelationInput | OpportunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OpportunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Opportunities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Opportunities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Opportunities
    **/
    _count?: true | OpportunityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OpportunityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OpportunitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OpportunityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OpportunityMaxAggregateInputType
  }

  export type GetOpportunityAggregateType<T extends OpportunityAggregateArgs> = {
        [P in keyof T & keyof AggregateOpportunity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOpportunity[P]>
      : GetScalarType<T[P], AggregateOpportunity[P]>
  }




  export type OpportunityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OpportunityWhereInput
    orderBy?: OpportunityOrderByWithAggregationInput | OpportunityOrderByWithAggregationInput[]
    by: OpportunityScalarFieldEnum[] | OpportunityScalarFieldEnum
    having?: OpportunityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OpportunityCountAggregateInputType | true
    _avg?: OpportunityAvgAggregateInputType
    _sum?: OpportunitySumAggregateInputType
    _min?: OpportunityMinAggregateInputType
    _max?: OpportunityMaxAggregateInputType
  }

  export type OpportunityGroupByOutputType = {
    id: string
    title: string
    description: string
    type: $Enums.OpportunityType
    location: string
    payment: number | null
    paymentType: $Enums.PaymentType
    deadline: Date | null
    employerId: string
    status: $Enums.OpportunityStatus
    verified: boolean
    createdAt: Date
    updatedAt: Date
    _count: OpportunityCountAggregateOutputType | null
    _avg: OpportunityAvgAggregateOutputType | null
    _sum: OpportunitySumAggregateOutputType | null
    _min: OpportunityMinAggregateOutputType | null
    _max: OpportunityMaxAggregateOutputType | null
  }

  type GetOpportunityGroupByPayload<T extends OpportunityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OpportunityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OpportunityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OpportunityGroupByOutputType[P]>
            : GetScalarType<T[P], OpportunityGroupByOutputType[P]>
        }
      >
    >


  export type OpportunitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    location?: boolean
    payment?: boolean
    paymentType?: boolean
    deadline?: boolean
    employerId?: boolean
    status?: boolean
    verified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employer?: boolean | UserDefaultArgs<ExtArgs>
    skills?: boolean | Opportunity$skillsArgs<ExtArgs>
    applications?: boolean | Opportunity$applicationsArgs<ExtArgs>
    matchExplanations?: boolean | Opportunity$matchExplanationsArgs<ExtArgs>
    _count?: boolean | OpportunityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["opportunity"]>

  export type OpportunitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    location?: boolean
    payment?: boolean
    paymentType?: boolean
    deadline?: boolean
    employerId?: boolean
    status?: boolean
    verified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["opportunity"]>

  export type OpportunitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    location?: boolean
    payment?: boolean
    paymentType?: boolean
    deadline?: boolean
    employerId?: boolean
    status?: boolean
    verified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["opportunity"]>

  export type OpportunitySelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    location?: boolean
    payment?: boolean
    paymentType?: boolean
    deadline?: boolean
    employerId?: boolean
    status?: boolean
    verified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OpportunityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "type" | "location" | "payment" | "paymentType" | "deadline" | "employerId" | "status" | "verified" | "createdAt" | "updatedAt", ExtArgs["result"]["opportunity"]>
  export type OpportunityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employer?: boolean | UserDefaultArgs<ExtArgs>
    skills?: boolean | Opportunity$skillsArgs<ExtArgs>
    applications?: boolean | Opportunity$applicationsArgs<ExtArgs>
    matchExplanations?: boolean | Opportunity$matchExplanationsArgs<ExtArgs>
    _count?: boolean | OpportunityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OpportunityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employer?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OpportunityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employer?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OpportunityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Opportunity"
    objects: {
      employer: Prisma.$UserPayload<ExtArgs>
      skills: Prisma.$OpportunitySkillPayload<ExtArgs>[]
      applications: Prisma.$ApplicationPayload<ExtArgs>[]
      matchExplanations: Prisma.$MatchExplanationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      type: $Enums.OpportunityType
      location: string
      payment: number | null
      paymentType: $Enums.PaymentType
      deadline: Date | null
      employerId: string
      status: $Enums.OpportunityStatus
      verified: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["opportunity"]>
    composites: {}
  }

  type OpportunityGetPayload<S extends boolean | null | undefined | OpportunityDefaultArgs> = $Result.GetResult<Prisma.$OpportunityPayload, S>

  type OpportunityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OpportunityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OpportunityCountAggregateInputType | true
    }

  export interface OpportunityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Opportunity'], meta: { name: 'Opportunity' } }
    /**
     * Find zero or one Opportunity that matches the filter.
     * @param {OpportunityFindUniqueArgs} args - Arguments to find a Opportunity
     * @example
     * // Get one Opportunity
     * const opportunity = await prisma.opportunity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OpportunityFindUniqueArgs>(args: SelectSubset<T, OpportunityFindUniqueArgs<ExtArgs>>): Prisma__OpportunityClient<$Result.GetResult<Prisma.$OpportunityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Opportunity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OpportunityFindUniqueOrThrowArgs} args - Arguments to find a Opportunity
     * @example
     * // Get one Opportunity
     * const opportunity = await prisma.opportunity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OpportunityFindUniqueOrThrowArgs>(args: SelectSubset<T, OpportunityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OpportunityClient<$Result.GetResult<Prisma.$OpportunityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Opportunity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpportunityFindFirstArgs} args - Arguments to find a Opportunity
     * @example
     * // Get one Opportunity
     * const opportunity = await prisma.opportunity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OpportunityFindFirstArgs>(args?: SelectSubset<T, OpportunityFindFirstArgs<ExtArgs>>): Prisma__OpportunityClient<$Result.GetResult<Prisma.$OpportunityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Opportunity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpportunityFindFirstOrThrowArgs} args - Arguments to find a Opportunity
     * @example
     * // Get one Opportunity
     * const opportunity = await prisma.opportunity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OpportunityFindFirstOrThrowArgs>(args?: SelectSubset<T, OpportunityFindFirstOrThrowArgs<ExtArgs>>): Prisma__OpportunityClient<$Result.GetResult<Prisma.$OpportunityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Opportunities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpportunityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Opportunities
     * const opportunities = await prisma.opportunity.findMany()
     * 
     * // Get first 10 Opportunities
     * const opportunities = await prisma.opportunity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const opportunityWithIdOnly = await prisma.opportunity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OpportunityFindManyArgs>(args?: SelectSubset<T, OpportunityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpportunityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Opportunity.
     * @param {OpportunityCreateArgs} args - Arguments to create a Opportunity.
     * @example
     * // Create one Opportunity
     * const Opportunity = await prisma.opportunity.create({
     *   data: {
     *     // ... data to create a Opportunity
     *   }
     * })
     * 
     */
    create<T extends OpportunityCreateArgs>(args: SelectSubset<T, OpportunityCreateArgs<ExtArgs>>): Prisma__OpportunityClient<$Result.GetResult<Prisma.$OpportunityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Opportunities.
     * @param {OpportunityCreateManyArgs} args - Arguments to create many Opportunities.
     * @example
     * // Create many Opportunities
     * const opportunity = await prisma.opportunity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OpportunityCreateManyArgs>(args?: SelectSubset<T, OpportunityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Opportunities and returns the data saved in the database.
     * @param {OpportunityCreateManyAndReturnArgs} args - Arguments to create many Opportunities.
     * @example
     * // Create many Opportunities
     * const opportunity = await prisma.opportunity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Opportunities and only return the `id`
     * const opportunityWithIdOnly = await prisma.opportunity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OpportunityCreateManyAndReturnArgs>(args?: SelectSubset<T, OpportunityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpportunityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Opportunity.
     * @param {OpportunityDeleteArgs} args - Arguments to delete one Opportunity.
     * @example
     * // Delete one Opportunity
     * const Opportunity = await prisma.opportunity.delete({
     *   where: {
     *     // ... filter to delete one Opportunity
     *   }
     * })
     * 
     */
    delete<T extends OpportunityDeleteArgs>(args: SelectSubset<T, OpportunityDeleteArgs<ExtArgs>>): Prisma__OpportunityClient<$Result.GetResult<Prisma.$OpportunityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Opportunity.
     * @param {OpportunityUpdateArgs} args - Arguments to update one Opportunity.
     * @example
     * // Update one Opportunity
     * const opportunity = await prisma.opportunity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OpportunityUpdateArgs>(args: SelectSubset<T, OpportunityUpdateArgs<ExtArgs>>): Prisma__OpportunityClient<$Result.GetResult<Prisma.$OpportunityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Opportunities.
     * @param {OpportunityDeleteManyArgs} args - Arguments to filter Opportunities to delete.
     * @example
     * // Delete a few Opportunities
     * const { count } = await prisma.opportunity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OpportunityDeleteManyArgs>(args?: SelectSubset<T, OpportunityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Opportunities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpportunityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Opportunities
     * const opportunity = await prisma.opportunity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OpportunityUpdateManyArgs>(args: SelectSubset<T, OpportunityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Opportunities and returns the data updated in the database.
     * @param {OpportunityUpdateManyAndReturnArgs} args - Arguments to update many Opportunities.
     * @example
     * // Update many Opportunities
     * const opportunity = await prisma.opportunity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Opportunities and only return the `id`
     * const opportunityWithIdOnly = await prisma.opportunity.updateManyAndReturn({
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
    updateManyAndReturn<T extends OpportunityUpdateManyAndReturnArgs>(args: SelectSubset<T, OpportunityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpportunityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Opportunity.
     * @param {OpportunityUpsertArgs} args - Arguments to update or create a Opportunity.
     * @example
     * // Update or create a Opportunity
     * const opportunity = await prisma.opportunity.upsert({
     *   create: {
     *     // ... data to create a Opportunity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Opportunity we want to update
     *   }
     * })
     */
    upsert<T extends OpportunityUpsertArgs>(args: SelectSubset<T, OpportunityUpsertArgs<ExtArgs>>): Prisma__OpportunityClient<$Result.GetResult<Prisma.$OpportunityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Opportunities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpportunityCountArgs} args - Arguments to filter Opportunities to count.
     * @example
     * // Count the number of Opportunities
     * const count = await prisma.opportunity.count({
     *   where: {
     *     // ... the filter for the Opportunities we want to count
     *   }
     * })
    **/
    count<T extends OpportunityCountArgs>(
      args?: Subset<T, OpportunityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OpportunityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Opportunity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpportunityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OpportunityAggregateArgs>(args: Subset<T, OpportunityAggregateArgs>): Prisma.PrismaPromise<GetOpportunityAggregateType<T>>

    /**
     * Group by Opportunity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpportunityGroupByArgs} args - Group by arguments.
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
      T extends OpportunityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OpportunityGroupByArgs['orderBy'] }
        : { orderBy?: OpportunityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OpportunityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOpportunityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Opportunity model
   */
  readonly fields: OpportunityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Opportunity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OpportunityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    skills<T extends Opportunity$skillsArgs<ExtArgs> = {}>(args?: Subset<T, Opportunity$skillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpportunitySkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    applications<T extends Opportunity$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, Opportunity$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    matchExplanations<T extends Opportunity$matchExplanationsArgs<ExtArgs> = {}>(args?: Subset<T, Opportunity$matchExplanationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchExplanationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Opportunity model
   */
  interface OpportunityFieldRefs {
    readonly id: FieldRef<"Opportunity", 'String'>
    readonly title: FieldRef<"Opportunity", 'String'>
    readonly description: FieldRef<"Opportunity", 'String'>
    readonly type: FieldRef<"Opportunity", 'OpportunityType'>
    readonly location: FieldRef<"Opportunity", 'String'>
    readonly payment: FieldRef<"Opportunity", 'Int'>
    readonly paymentType: FieldRef<"Opportunity", 'PaymentType'>
    readonly deadline: FieldRef<"Opportunity", 'DateTime'>
    readonly employerId: FieldRef<"Opportunity", 'String'>
    readonly status: FieldRef<"Opportunity", 'OpportunityStatus'>
    readonly verified: FieldRef<"Opportunity", 'Boolean'>
    readonly createdAt: FieldRef<"Opportunity", 'DateTime'>
    readonly updatedAt: FieldRef<"Opportunity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Opportunity findUnique
   */
  export type OpportunityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opportunity
     */
    select?: OpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opportunity
     */
    omit?: OpportunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityInclude<ExtArgs> | null
    /**
     * Filter, which Opportunity to fetch.
     */
    where: OpportunityWhereUniqueInput
  }

  /**
   * Opportunity findUniqueOrThrow
   */
  export type OpportunityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opportunity
     */
    select?: OpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opportunity
     */
    omit?: OpportunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityInclude<ExtArgs> | null
    /**
     * Filter, which Opportunity to fetch.
     */
    where: OpportunityWhereUniqueInput
  }

  /**
   * Opportunity findFirst
   */
  export type OpportunityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opportunity
     */
    select?: OpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opportunity
     */
    omit?: OpportunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityInclude<ExtArgs> | null
    /**
     * Filter, which Opportunity to fetch.
     */
    where?: OpportunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Opportunities to fetch.
     */
    orderBy?: OpportunityOrderByWithRelationInput | OpportunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Opportunities.
     */
    cursor?: OpportunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Opportunities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Opportunities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Opportunities.
     */
    distinct?: OpportunityScalarFieldEnum | OpportunityScalarFieldEnum[]
  }

  /**
   * Opportunity findFirstOrThrow
   */
  export type OpportunityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opportunity
     */
    select?: OpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opportunity
     */
    omit?: OpportunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityInclude<ExtArgs> | null
    /**
     * Filter, which Opportunity to fetch.
     */
    where?: OpportunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Opportunities to fetch.
     */
    orderBy?: OpportunityOrderByWithRelationInput | OpportunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Opportunities.
     */
    cursor?: OpportunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Opportunities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Opportunities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Opportunities.
     */
    distinct?: OpportunityScalarFieldEnum | OpportunityScalarFieldEnum[]
  }

  /**
   * Opportunity findMany
   */
  export type OpportunityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opportunity
     */
    select?: OpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opportunity
     */
    omit?: OpportunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityInclude<ExtArgs> | null
    /**
     * Filter, which Opportunities to fetch.
     */
    where?: OpportunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Opportunities to fetch.
     */
    orderBy?: OpportunityOrderByWithRelationInput | OpportunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Opportunities.
     */
    cursor?: OpportunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Opportunities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Opportunities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Opportunities.
     */
    distinct?: OpportunityScalarFieldEnum | OpportunityScalarFieldEnum[]
  }

  /**
   * Opportunity create
   */
  export type OpportunityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opportunity
     */
    select?: OpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opportunity
     */
    omit?: OpportunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityInclude<ExtArgs> | null
    /**
     * The data needed to create a Opportunity.
     */
    data: XOR<OpportunityCreateInput, OpportunityUncheckedCreateInput>
  }

  /**
   * Opportunity createMany
   */
  export type OpportunityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Opportunities.
     */
    data: OpportunityCreateManyInput | OpportunityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Opportunity createManyAndReturn
   */
  export type OpportunityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opportunity
     */
    select?: OpportunitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Opportunity
     */
    omit?: OpportunityOmit<ExtArgs> | null
    /**
     * The data used to create many Opportunities.
     */
    data: OpportunityCreateManyInput | OpportunityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Opportunity update
   */
  export type OpportunityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opportunity
     */
    select?: OpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opportunity
     */
    omit?: OpportunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityInclude<ExtArgs> | null
    /**
     * The data needed to update a Opportunity.
     */
    data: XOR<OpportunityUpdateInput, OpportunityUncheckedUpdateInput>
    /**
     * Choose, which Opportunity to update.
     */
    where: OpportunityWhereUniqueInput
  }

  /**
   * Opportunity updateMany
   */
  export type OpportunityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Opportunities.
     */
    data: XOR<OpportunityUpdateManyMutationInput, OpportunityUncheckedUpdateManyInput>
    /**
     * Filter which Opportunities to update
     */
    where?: OpportunityWhereInput
    /**
     * Limit how many Opportunities to update.
     */
    limit?: number
  }

  /**
   * Opportunity updateManyAndReturn
   */
  export type OpportunityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opportunity
     */
    select?: OpportunitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Opportunity
     */
    omit?: OpportunityOmit<ExtArgs> | null
    /**
     * The data used to update Opportunities.
     */
    data: XOR<OpportunityUpdateManyMutationInput, OpportunityUncheckedUpdateManyInput>
    /**
     * Filter which Opportunities to update
     */
    where?: OpportunityWhereInput
    /**
     * Limit how many Opportunities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Opportunity upsert
   */
  export type OpportunityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opportunity
     */
    select?: OpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opportunity
     */
    omit?: OpportunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityInclude<ExtArgs> | null
    /**
     * The filter to search for the Opportunity to update in case it exists.
     */
    where: OpportunityWhereUniqueInput
    /**
     * In case the Opportunity found by the `where` argument doesn't exist, create a new Opportunity with this data.
     */
    create: XOR<OpportunityCreateInput, OpportunityUncheckedCreateInput>
    /**
     * In case the Opportunity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OpportunityUpdateInput, OpportunityUncheckedUpdateInput>
  }

  /**
   * Opportunity delete
   */
  export type OpportunityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opportunity
     */
    select?: OpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opportunity
     */
    omit?: OpportunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityInclude<ExtArgs> | null
    /**
     * Filter which Opportunity to delete.
     */
    where: OpportunityWhereUniqueInput
  }

  /**
   * Opportunity deleteMany
   */
  export type OpportunityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Opportunities to delete
     */
    where?: OpportunityWhereInput
    /**
     * Limit how many Opportunities to delete.
     */
    limit?: number
  }

  /**
   * Opportunity.skills
   */
  export type Opportunity$skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpportunitySkill
     */
    select?: OpportunitySkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpportunitySkill
     */
    omit?: OpportunitySkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunitySkillInclude<ExtArgs> | null
    where?: OpportunitySkillWhereInput
    orderBy?: OpportunitySkillOrderByWithRelationInput | OpportunitySkillOrderByWithRelationInput[]
    cursor?: OpportunitySkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OpportunitySkillScalarFieldEnum | OpportunitySkillScalarFieldEnum[]
  }

  /**
   * Opportunity.applications
   */
  export type Opportunity$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    cursor?: ApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Opportunity.matchExplanations
   */
  export type Opportunity$matchExplanationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchExplanation
     */
    select?: MatchExplanationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchExplanation
     */
    omit?: MatchExplanationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchExplanationInclude<ExtArgs> | null
    where?: MatchExplanationWhereInput
    orderBy?: MatchExplanationOrderByWithRelationInput | MatchExplanationOrderByWithRelationInput[]
    cursor?: MatchExplanationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchExplanationScalarFieldEnum | MatchExplanationScalarFieldEnum[]
  }

  /**
   * Opportunity without action
   */
  export type OpportunityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opportunity
     */
    select?: OpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opportunity
     */
    omit?: OpportunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityInclude<ExtArgs> | null
  }


  /**
   * Model OpportunitySkill
   */

  export type AggregateOpportunitySkill = {
    _count: OpportunitySkillCountAggregateOutputType | null
    _min: OpportunitySkillMinAggregateOutputType | null
    _max: OpportunitySkillMaxAggregateOutputType | null
  }

  export type OpportunitySkillMinAggregateOutputType = {
    id: string | null
    opportunityId: string | null
    skillId: string | null
  }

  export type OpportunitySkillMaxAggregateOutputType = {
    id: string | null
    opportunityId: string | null
    skillId: string | null
  }

  export type OpportunitySkillCountAggregateOutputType = {
    id: number
    opportunityId: number
    skillId: number
    _all: number
  }


  export type OpportunitySkillMinAggregateInputType = {
    id?: true
    opportunityId?: true
    skillId?: true
  }

  export type OpportunitySkillMaxAggregateInputType = {
    id?: true
    opportunityId?: true
    skillId?: true
  }

  export type OpportunitySkillCountAggregateInputType = {
    id?: true
    opportunityId?: true
    skillId?: true
    _all?: true
  }

  export type OpportunitySkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OpportunitySkill to aggregate.
     */
    where?: OpportunitySkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpportunitySkills to fetch.
     */
    orderBy?: OpportunitySkillOrderByWithRelationInput | OpportunitySkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OpportunitySkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpportunitySkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpportunitySkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OpportunitySkills
    **/
    _count?: true | OpportunitySkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OpportunitySkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OpportunitySkillMaxAggregateInputType
  }

  export type GetOpportunitySkillAggregateType<T extends OpportunitySkillAggregateArgs> = {
        [P in keyof T & keyof AggregateOpportunitySkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOpportunitySkill[P]>
      : GetScalarType<T[P], AggregateOpportunitySkill[P]>
  }




  export type OpportunitySkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OpportunitySkillWhereInput
    orderBy?: OpportunitySkillOrderByWithAggregationInput | OpportunitySkillOrderByWithAggregationInput[]
    by: OpportunitySkillScalarFieldEnum[] | OpportunitySkillScalarFieldEnum
    having?: OpportunitySkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OpportunitySkillCountAggregateInputType | true
    _min?: OpportunitySkillMinAggregateInputType
    _max?: OpportunitySkillMaxAggregateInputType
  }

  export type OpportunitySkillGroupByOutputType = {
    id: string
    opportunityId: string
    skillId: string
    _count: OpportunitySkillCountAggregateOutputType | null
    _min: OpportunitySkillMinAggregateOutputType | null
    _max: OpportunitySkillMaxAggregateOutputType | null
  }

  type GetOpportunitySkillGroupByPayload<T extends OpportunitySkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OpportunitySkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OpportunitySkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OpportunitySkillGroupByOutputType[P]>
            : GetScalarType<T[P], OpportunitySkillGroupByOutputType[P]>
        }
      >
    >


  export type OpportunitySkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    opportunityId?: boolean
    skillId?: boolean
    opportunity?: boolean | OpportunityDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["opportunitySkill"]>

  export type OpportunitySkillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    opportunityId?: boolean
    skillId?: boolean
    opportunity?: boolean | OpportunityDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["opportunitySkill"]>

  export type OpportunitySkillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    opportunityId?: boolean
    skillId?: boolean
    opportunity?: boolean | OpportunityDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["opportunitySkill"]>

  export type OpportunitySkillSelectScalar = {
    id?: boolean
    opportunityId?: boolean
    skillId?: boolean
  }

  export type OpportunitySkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "opportunityId" | "skillId", ExtArgs["result"]["opportunitySkill"]>
  export type OpportunitySkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    opportunity?: boolean | OpportunityDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }
  export type OpportunitySkillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    opportunity?: boolean | OpportunityDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }
  export type OpportunitySkillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    opportunity?: boolean | OpportunityDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }

  export type $OpportunitySkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OpportunitySkill"
    objects: {
      opportunity: Prisma.$OpportunityPayload<ExtArgs>
      skill: Prisma.$SkillPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      opportunityId: string
      skillId: string
    }, ExtArgs["result"]["opportunitySkill"]>
    composites: {}
  }

  type OpportunitySkillGetPayload<S extends boolean | null | undefined | OpportunitySkillDefaultArgs> = $Result.GetResult<Prisma.$OpportunitySkillPayload, S>

  type OpportunitySkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OpportunitySkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OpportunitySkillCountAggregateInputType | true
    }

  export interface OpportunitySkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OpportunitySkill'], meta: { name: 'OpportunitySkill' } }
    /**
     * Find zero or one OpportunitySkill that matches the filter.
     * @param {OpportunitySkillFindUniqueArgs} args - Arguments to find a OpportunitySkill
     * @example
     * // Get one OpportunitySkill
     * const opportunitySkill = await prisma.opportunitySkill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OpportunitySkillFindUniqueArgs>(args: SelectSubset<T, OpportunitySkillFindUniqueArgs<ExtArgs>>): Prisma__OpportunitySkillClient<$Result.GetResult<Prisma.$OpportunitySkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OpportunitySkill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OpportunitySkillFindUniqueOrThrowArgs} args - Arguments to find a OpportunitySkill
     * @example
     * // Get one OpportunitySkill
     * const opportunitySkill = await prisma.opportunitySkill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OpportunitySkillFindUniqueOrThrowArgs>(args: SelectSubset<T, OpportunitySkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OpportunitySkillClient<$Result.GetResult<Prisma.$OpportunitySkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OpportunitySkill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpportunitySkillFindFirstArgs} args - Arguments to find a OpportunitySkill
     * @example
     * // Get one OpportunitySkill
     * const opportunitySkill = await prisma.opportunitySkill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OpportunitySkillFindFirstArgs>(args?: SelectSubset<T, OpportunitySkillFindFirstArgs<ExtArgs>>): Prisma__OpportunitySkillClient<$Result.GetResult<Prisma.$OpportunitySkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OpportunitySkill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpportunitySkillFindFirstOrThrowArgs} args - Arguments to find a OpportunitySkill
     * @example
     * // Get one OpportunitySkill
     * const opportunitySkill = await prisma.opportunitySkill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OpportunitySkillFindFirstOrThrowArgs>(args?: SelectSubset<T, OpportunitySkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__OpportunitySkillClient<$Result.GetResult<Prisma.$OpportunitySkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OpportunitySkills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpportunitySkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OpportunitySkills
     * const opportunitySkills = await prisma.opportunitySkill.findMany()
     * 
     * // Get first 10 OpportunitySkills
     * const opportunitySkills = await prisma.opportunitySkill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const opportunitySkillWithIdOnly = await prisma.opportunitySkill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OpportunitySkillFindManyArgs>(args?: SelectSubset<T, OpportunitySkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpportunitySkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OpportunitySkill.
     * @param {OpportunitySkillCreateArgs} args - Arguments to create a OpportunitySkill.
     * @example
     * // Create one OpportunitySkill
     * const OpportunitySkill = await prisma.opportunitySkill.create({
     *   data: {
     *     // ... data to create a OpportunitySkill
     *   }
     * })
     * 
     */
    create<T extends OpportunitySkillCreateArgs>(args: SelectSubset<T, OpportunitySkillCreateArgs<ExtArgs>>): Prisma__OpportunitySkillClient<$Result.GetResult<Prisma.$OpportunitySkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OpportunitySkills.
     * @param {OpportunitySkillCreateManyArgs} args - Arguments to create many OpportunitySkills.
     * @example
     * // Create many OpportunitySkills
     * const opportunitySkill = await prisma.opportunitySkill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OpportunitySkillCreateManyArgs>(args?: SelectSubset<T, OpportunitySkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OpportunitySkills and returns the data saved in the database.
     * @param {OpportunitySkillCreateManyAndReturnArgs} args - Arguments to create many OpportunitySkills.
     * @example
     * // Create many OpportunitySkills
     * const opportunitySkill = await prisma.opportunitySkill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OpportunitySkills and only return the `id`
     * const opportunitySkillWithIdOnly = await prisma.opportunitySkill.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OpportunitySkillCreateManyAndReturnArgs>(args?: SelectSubset<T, OpportunitySkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpportunitySkillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OpportunitySkill.
     * @param {OpportunitySkillDeleteArgs} args - Arguments to delete one OpportunitySkill.
     * @example
     * // Delete one OpportunitySkill
     * const OpportunitySkill = await prisma.opportunitySkill.delete({
     *   where: {
     *     // ... filter to delete one OpportunitySkill
     *   }
     * })
     * 
     */
    delete<T extends OpportunitySkillDeleteArgs>(args: SelectSubset<T, OpportunitySkillDeleteArgs<ExtArgs>>): Prisma__OpportunitySkillClient<$Result.GetResult<Prisma.$OpportunitySkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OpportunitySkill.
     * @param {OpportunitySkillUpdateArgs} args - Arguments to update one OpportunitySkill.
     * @example
     * // Update one OpportunitySkill
     * const opportunitySkill = await prisma.opportunitySkill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OpportunitySkillUpdateArgs>(args: SelectSubset<T, OpportunitySkillUpdateArgs<ExtArgs>>): Prisma__OpportunitySkillClient<$Result.GetResult<Prisma.$OpportunitySkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OpportunitySkills.
     * @param {OpportunitySkillDeleteManyArgs} args - Arguments to filter OpportunitySkills to delete.
     * @example
     * // Delete a few OpportunitySkills
     * const { count } = await prisma.opportunitySkill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OpportunitySkillDeleteManyArgs>(args?: SelectSubset<T, OpportunitySkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OpportunitySkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpportunitySkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OpportunitySkills
     * const opportunitySkill = await prisma.opportunitySkill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OpportunitySkillUpdateManyArgs>(args: SelectSubset<T, OpportunitySkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OpportunitySkills and returns the data updated in the database.
     * @param {OpportunitySkillUpdateManyAndReturnArgs} args - Arguments to update many OpportunitySkills.
     * @example
     * // Update many OpportunitySkills
     * const opportunitySkill = await prisma.opportunitySkill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OpportunitySkills and only return the `id`
     * const opportunitySkillWithIdOnly = await prisma.opportunitySkill.updateManyAndReturn({
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
    updateManyAndReturn<T extends OpportunitySkillUpdateManyAndReturnArgs>(args: SelectSubset<T, OpportunitySkillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpportunitySkillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OpportunitySkill.
     * @param {OpportunitySkillUpsertArgs} args - Arguments to update or create a OpportunitySkill.
     * @example
     * // Update or create a OpportunitySkill
     * const opportunitySkill = await prisma.opportunitySkill.upsert({
     *   create: {
     *     // ... data to create a OpportunitySkill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OpportunitySkill we want to update
     *   }
     * })
     */
    upsert<T extends OpportunitySkillUpsertArgs>(args: SelectSubset<T, OpportunitySkillUpsertArgs<ExtArgs>>): Prisma__OpportunitySkillClient<$Result.GetResult<Prisma.$OpportunitySkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OpportunitySkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpportunitySkillCountArgs} args - Arguments to filter OpportunitySkills to count.
     * @example
     * // Count the number of OpportunitySkills
     * const count = await prisma.opportunitySkill.count({
     *   where: {
     *     // ... the filter for the OpportunitySkills we want to count
     *   }
     * })
    **/
    count<T extends OpportunitySkillCountArgs>(
      args?: Subset<T, OpportunitySkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OpportunitySkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OpportunitySkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpportunitySkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OpportunitySkillAggregateArgs>(args: Subset<T, OpportunitySkillAggregateArgs>): Prisma.PrismaPromise<GetOpportunitySkillAggregateType<T>>

    /**
     * Group by OpportunitySkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpportunitySkillGroupByArgs} args - Group by arguments.
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
      T extends OpportunitySkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OpportunitySkillGroupByArgs['orderBy'] }
        : { orderBy?: OpportunitySkillGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OpportunitySkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOpportunitySkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OpportunitySkill model
   */
  readonly fields: OpportunitySkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OpportunitySkill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OpportunitySkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    opportunity<T extends OpportunityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OpportunityDefaultArgs<ExtArgs>>): Prisma__OpportunityClient<$Result.GetResult<Prisma.$OpportunityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    skill<T extends SkillDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SkillDefaultArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OpportunitySkill model
   */
  interface OpportunitySkillFieldRefs {
    readonly id: FieldRef<"OpportunitySkill", 'String'>
    readonly opportunityId: FieldRef<"OpportunitySkill", 'String'>
    readonly skillId: FieldRef<"OpportunitySkill", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OpportunitySkill findUnique
   */
  export type OpportunitySkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpportunitySkill
     */
    select?: OpportunitySkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpportunitySkill
     */
    omit?: OpportunitySkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunitySkillInclude<ExtArgs> | null
    /**
     * Filter, which OpportunitySkill to fetch.
     */
    where: OpportunitySkillWhereUniqueInput
  }

  /**
   * OpportunitySkill findUniqueOrThrow
   */
  export type OpportunitySkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpportunitySkill
     */
    select?: OpportunitySkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpportunitySkill
     */
    omit?: OpportunitySkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunitySkillInclude<ExtArgs> | null
    /**
     * Filter, which OpportunitySkill to fetch.
     */
    where: OpportunitySkillWhereUniqueInput
  }

  /**
   * OpportunitySkill findFirst
   */
  export type OpportunitySkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpportunitySkill
     */
    select?: OpportunitySkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpportunitySkill
     */
    omit?: OpportunitySkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunitySkillInclude<ExtArgs> | null
    /**
     * Filter, which OpportunitySkill to fetch.
     */
    where?: OpportunitySkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpportunitySkills to fetch.
     */
    orderBy?: OpportunitySkillOrderByWithRelationInput | OpportunitySkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OpportunitySkills.
     */
    cursor?: OpportunitySkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpportunitySkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpportunitySkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OpportunitySkills.
     */
    distinct?: OpportunitySkillScalarFieldEnum | OpportunitySkillScalarFieldEnum[]
  }

  /**
   * OpportunitySkill findFirstOrThrow
   */
  export type OpportunitySkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpportunitySkill
     */
    select?: OpportunitySkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpportunitySkill
     */
    omit?: OpportunitySkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunitySkillInclude<ExtArgs> | null
    /**
     * Filter, which OpportunitySkill to fetch.
     */
    where?: OpportunitySkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpportunitySkills to fetch.
     */
    orderBy?: OpportunitySkillOrderByWithRelationInput | OpportunitySkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OpportunitySkills.
     */
    cursor?: OpportunitySkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpportunitySkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpportunitySkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OpportunitySkills.
     */
    distinct?: OpportunitySkillScalarFieldEnum | OpportunitySkillScalarFieldEnum[]
  }

  /**
   * OpportunitySkill findMany
   */
  export type OpportunitySkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpportunitySkill
     */
    select?: OpportunitySkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpportunitySkill
     */
    omit?: OpportunitySkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunitySkillInclude<ExtArgs> | null
    /**
     * Filter, which OpportunitySkills to fetch.
     */
    where?: OpportunitySkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpportunitySkills to fetch.
     */
    orderBy?: OpportunitySkillOrderByWithRelationInput | OpportunitySkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OpportunitySkills.
     */
    cursor?: OpportunitySkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpportunitySkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpportunitySkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OpportunitySkills.
     */
    distinct?: OpportunitySkillScalarFieldEnum | OpportunitySkillScalarFieldEnum[]
  }

  /**
   * OpportunitySkill create
   */
  export type OpportunitySkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpportunitySkill
     */
    select?: OpportunitySkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpportunitySkill
     */
    omit?: OpportunitySkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunitySkillInclude<ExtArgs> | null
    /**
     * The data needed to create a OpportunitySkill.
     */
    data: XOR<OpportunitySkillCreateInput, OpportunitySkillUncheckedCreateInput>
  }

  /**
   * OpportunitySkill createMany
   */
  export type OpportunitySkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OpportunitySkills.
     */
    data: OpportunitySkillCreateManyInput | OpportunitySkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OpportunitySkill createManyAndReturn
   */
  export type OpportunitySkillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpportunitySkill
     */
    select?: OpportunitySkillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OpportunitySkill
     */
    omit?: OpportunitySkillOmit<ExtArgs> | null
    /**
     * The data used to create many OpportunitySkills.
     */
    data: OpportunitySkillCreateManyInput | OpportunitySkillCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunitySkillIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OpportunitySkill update
   */
  export type OpportunitySkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpportunitySkill
     */
    select?: OpportunitySkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpportunitySkill
     */
    omit?: OpportunitySkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunitySkillInclude<ExtArgs> | null
    /**
     * The data needed to update a OpportunitySkill.
     */
    data: XOR<OpportunitySkillUpdateInput, OpportunitySkillUncheckedUpdateInput>
    /**
     * Choose, which OpportunitySkill to update.
     */
    where: OpportunitySkillWhereUniqueInput
  }

  /**
   * OpportunitySkill updateMany
   */
  export type OpportunitySkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OpportunitySkills.
     */
    data: XOR<OpportunitySkillUpdateManyMutationInput, OpportunitySkillUncheckedUpdateManyInput>
    /**
     * Filter which OpportunitySkills to update
     */
    where?: OpportunitySkillWhereInput
    /**
     * Limit how many OpportunitySkills to update.
     */
    limit?: number
  }

  /**
   * OpportunitySkill updateManyAndReturn
   */
  export type OpportunitySkillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpportunitySkill
     */
    select?: OpportunitySkillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OpportunitySkill
     */
    omit?: OpportunitySkillOmit<ExtArgs> | null
    /**
     * The data used to update OpportunitySkills.
     */
    data: XOR<OpportunitySkillUpdateManyMutationInput, OpportunitySkillUncheckedUpdateManyInput>
    /**
     * Filter which OpportunitySkills to update
     */
    where?: OpportunitySkillWhereInput
    /**
     * Limit how many OpportunitySkills to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunitySkillIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OpportunitySkill upsert
   */
  export type OpportunitySkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpportunitySkill
     */
    select?: OpportunitySkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpportunitySkill
     */
    omit?: OpportunitySkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunitySkillInclude<ExtArgs> | null
    /**
     * The filter to search for the OpportunitySkill to update in case it exists.
     */
    where: OpportunitySkillWhereUniqueInput
    /**
     * In case the OpportunitySkill found by the `where` argument doesn't exist, create a new OpportunitySkill with this data.
     */
    create: XOR<OpportunitySkillCreateInput, OpportunitySkillUncheckedCreateInput>
    /**
     * In case the OpportunitySkill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OpportunitySkillUpdateInput, OpportunitySkillUncheckedUpdateInput>
  }

  /**
   * OpportunitySkill delete
   */
  export type OpportunitySkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpportunitySkill
     */
    select?: OpportunitySkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpportunitySkill
     */
    omit?: OpportunitySkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunitySkillInclude<ExtArgs> | null
    /**
     * Filter which OpportunitySkill to delete.
     */
    where: OpportunitySkillWhereUniqueInput
  }

  /**
   * OpportunitySkill deleteMany
   */
  export type OpportunitySkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OpportunitySkills to delete
     */
    where?: OpportunitySkillWhereInput
    /**
     * Limit how many OpportunitySkills to delete.
     */
    limit?: number
  }

  /**
   * OpportunitySkill without action
   */
  export type OpportunitySkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpportunitySkill
     */
    select?: OpportunitySkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpportunitySkill
     */
    omit?: OpportunitySkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunitySkillInclude<ExtArgs> | null
  }


  /**
   * Model Application
   */

  export type AggregateApplication = {
    _count: ApplicationCountAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  export type ApplicationMinAggregateOutputType = {
    id: string | null
    opportunityId: string | null
    applicantId: string | null
    message: string | null
    status: $Enums.ApplicationStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApplicationMaxAggregateOutputType = {
    id: string | null
    opportunityId: string | null
    applicantId: string | null
    message: string | null
    status: $Enums.ApplicationStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApplicationCountAggregateOutputType = {
    id: number
    opportunityId: number
    applicantId: number
    message: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ApplicationMinAggregateInputType = {
    id?: true
    opportunityId?: true
    applicantId?: true
    message?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApplicationMaxAggregateInputType = {
    id?: true
    opportunityId?: true
    applicantId?: true
    message?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApplicationCountAggregateInputType = {
    id?: true
    opportunityId?: true
    applicantId?: true
    message?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Application to aggregate.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Applications
    **/
    _count?: true | ApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicationMaxAggregateInputType
  }

  export type GetApplicationAggregateType<T extends ApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplication[P]>
      : GetScalarType<T[P], AggregateApplication[P]>
  }




  export type ApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithAggregationInput | ApplicationOrderByWithAggregationInput[]
    by: ApplicationScalarFieldEnum[] | ApplicationScalarFieldEnum
    having?: ApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicationCountAggregateInputType | true
    _min?: ApplicationMinAggregateInputType
    _max?: ApplicationMaxAggregateInputType
  }

  export type ApplicationGroupByOutputType = {
    id: string
    opportunityId: string
    applicantId: string
    message: string
    status: $Enums.ApplicationStatus
    createdAt: Date
    updatedAt: Date
    _count: ApplicationCountAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  type GetApplicationGroupByPayload<T extends ApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
        }
      >
    >


  export type ApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    opportunityId?: boolean
    applicantId?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    opportunity?: boolean | OpportunityDefaultArgs<ExtArgs>
    applicant?: boolean | UserDefaultArgs<ExtArgs>
    reviews?: boolean | Application$reviewsArgs<ExtArgs>
    _count?: boolean | ApplicationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    opportunityId?: boolean
    applicantId?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    opportunity?: boolean | OpportunityDefaultArgs<ExtArgs>
    applicant?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    opportunityId?: boolean
    applicantId?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    opportunity?: boolean | OpportunityDefaultArgs<ExtArgs>
    applicant?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectScalar = {
    id?: boolean
    opportunityId?: boolean
    applicantId?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ApplicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "opportunityId" | "applicantId" | "message" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["application"]>
  export type ApplicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    opportunity?: boolean | OpportunityDefaultArgs<ExtArgs>
    applicant?: boolean | UserDefaultArgs<ExtArgs>
    reviews?: boolean | Application$reviewsArgs<ExtArgs>
    _count?: boolean | ApplicationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ApplicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    opportunity?: boolean | OpportunityDefaultArgs<ExtArgs>
    applicant?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ApplicationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    opportunity?: boolean | OpportunityDefaultArgs<ExtArgs>
    applicant?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Application"
    objects: {
      opportunity: Prisma.$OpportunityPayload<ExtArgs>
      applicant: Prisma.$UserPayload<ExtArgs>
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      opportunityId: string
      applicantId: string
      message: string
      status: $Enums.ApplicationStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["application"]>
    composites: {}
  }

  type ApplicationGetPayload<S extends boolean | null | undefined | ApplicationDefaultArgs> = $Result.GetResult<Prisma.$ApplicationPayload, S>

  type ApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApplicationCountAggregateInputType | true
    }

  export interface ApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Application'], meta: { name: 'Application' } }
    /**
     * Find zero or one Application that matches the filter.
     * @param {ApplicationFindUniqueArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApplicationFindUniqueArgs>(args: SelectSubset<T, ApplicationFindUniqueArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Application that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApplicationFindUniqueOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApplicationFindUniqueOrThrowArgs>(args: SelectSubset<T, ApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Application that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApplicationFindFirstArgs>(args?: SelectSubset<T, ApplicationFindFirstArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Application that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApplicationFindFirstOrThrowArgs>(args?: SelectSubset<T, ApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Applications
     * const applications = await prisma.application.findMany()
     * 
     * // Get first 10 Applications
     * const applications = await prisma.application.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const applicationWithIdOnly = await prisma.application.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApplicationFindManyArgs>(args?: SelectSubset<T, ApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Application.
     * @param {ApplicationCreateArgs} args - Arguments to create a Application.
     * @example
     * // Create one Application
     * const Application = await prisma.application.create({
     *   data: {
     *     // ... data to create a Application
     *   }
     * })
     * 
     */
    create<T extends ApplicationCreateArgs>(args: SelectSubset<T, ApplicationCreateArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Applications.
     * @param {ApplicationCreateManyArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const application = await prisma.application.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApplicationCreateManyArgs>(args?: SelectSubset<T, ApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Applications and returns the data saved in the database.
     * @param {ApplicationCreateManyAndReturnArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const application = await prisma.application.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Applications and only return the `id`
     * const applicationWithIdOnly = await prisma.application.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApplicationCreateManyAndReturnArgs>(args?: SelectSubset<T, ApplicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Application.
     * @param {ApplicationDeleteArgs} args - Arguments to delete one Application.
     * @example
     * // Delete one Application
     * const Application = await prisma.application.delete({
     *   where: {
     *     // ... filter to delete one Application
     *   }
     * })
     * 
     */
    delete<T extends ApplicationDeleteArgs>(args: SelectSubset<T, ApplicationDeleteArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Application.
     * @param {ApplicationUpdateArgs} args - Arguments to update one Application.
     * @example
     * // Update one Application
     * const application = await prisma.application.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApplicationUpdateArgs>(args: SelectSubset<T, ApplicationUpdateArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Applications.
     * @param {ApplicationDeleteManyArgs} args - Arguments to filter Applications to delete.
     * @example
     * // Delete a few Applications
     * const { count } = await prisma.application.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApplicationDeleteManyArgs>(args?: SelectSubset<T, ApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApplicationUpdateManyArgs>(args: SelectSubset<T, ApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications and returns the data updated in the database.
     * @param {ApplicationUpdateManyAndReturnArgs} args - Arguments to update many Applications.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Applications and only return the `id`
     * const applicationWithIdOnly = await prisma.application.updateManyAndReturn({
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
    updateManyAndReturn<T extends ApplicationUpdateManyAndReturnArgs>(args: SelectSubset<T, ApplicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Application.
     * @param {ApplicationUpsertArgs} args - Arguments to update or create a Application.
     * @example
     * // Update or create a Application
     * const application = await prisma.application.upsert({
     *   create: {
     *     // ... data to create a Application
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Application we want to update
     *   }
     * })
     */
    upsert<T extends ApplicationUpsertArgs>(args: SelectSubset<T, ApplicationUpsertArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationCountArgs} args - Arguments to filter Applications to count.
     * @example
     * // Count the number of Applications
     * const count = await prisma.application.count({
     *   where: {
     *     // ... the filter for the Applications we want to count
     *   }
     * })
    **/
    count<T extends ApplicationCountArgs>(
      args?: Subset<T, ApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApplicationAggregateArgs>(args: Subset<T, ApplicationAggregateArgs>): Prisma.PrismaPromise<GetApplicationAggregateType<T>>

    /**
     * Group by Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationGroupByArgs} args - Group by arguments.
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
      T extends ApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplicationGroupByArgs['orderBy'] }
        : { orderBy?: ApplicationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Application model
   */
  readonly fields: ApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Application.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    opportunity<T extends OpportunityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OpportunityDefaultArgs<ExtArgs>>): Prisma__OpportunityClient<$Result.GetResult<Prisma.$OpportunityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    applicant<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reviews<T extends Application$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Application$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Application model
   */
  interface ApplicationFieldRefs {
    readonly id: FieldRef<"Application", 'String'>
    readonly opportunityId: FieldRef<"Application", 'String'>
    readonly applicantId: FieldRef<"Application", 'String'>
    readonly message: FieldRef<"Application", 'String'>
    readonly status: FieldRef<"Application", 'ApplicationStatus'>
    readonly createdAt: FieldRef<"Application", 'DateTime'>
    readonly updatedAt: FieldRef<"Application", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Application findUnique
   */
  export type ApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application findUniqueOrThrow
   */
  export type ApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application findFirst
   */
  export type ApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application findFirstOrThrow
   */
  export type ApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application findMany
   */
  export type ApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Applications to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application create
   */
  export type ApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The data needed to create a Application.
     */
    data: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
  }

  /**
   * Application createMany
   */
  export type ApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Applications.
     */
    data: ApplicationCreateManyInput | ApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Application createManyAndReturn
   */
  export type ApplicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * The data used to create many Applications.
     */
    data: ApplicationCreateManyInput | ApplicationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Application update
   */
  export type ApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The data needed to update a Application.
     */
    data: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
    /**
     * Choose, which Application to update.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application updateMany
   */
  export type ApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Applications.
     */
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyInput>
    /**
     * Filter which Applications to update
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to update.
     */
    limit?: number
  }

  /**
   * Application updateManyAndReturn
   */
  export type ApplicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * The data used to update Applications.
     */
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyInput>
    /**
     * Filter which Applications to update
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Application upsert
   */
  export type ApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The filter to search for the Application to update in case it exists.
     */
    where: ApplicationWhereUniqueInput
    /**
     * In case the Application found by the `where` argument doesn't exist, create a new Application with this data.
     */
    create: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
    /**
     * In case the Application was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
  }

  /**
   * Application delete
   */
  export type ApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter which Application to delete.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application deleteMany
   */
  export type ApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Applications to delete
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to delete.
     */
    limit?: number
  }

  /**
   * Application.reviews
   */
  export type Application$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Application without action
   */
  export type ApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
  }


  /**
   * Model PhoneOtp
   */

  export type AggregatePhoneOtp = {
    _count: PhoneOtpCountAggregateOutputType | null
    _avg: PhoneOtpAvgAggregateOutputType | null
    _sum: PhoneOtpSumAggregateOutputType | null
    _min: PhoneOtpMinAggregateOutputType | null
    _max: PhoneOtpMaxAggregateOutputType | null
  }

  export type PhoneOtpAvgAggregateOutputType = {
    attempts: number | null
  }

  export type PhoneOtpSumAggregateOutputType = {
    attempts: number | null
  }

  export type PhoneOtpMinAggregateOutputType = {
    id: string | null
    userId: string | null
    phone: string | null
    codeHash: string | null
    attempts: number | null
    expiresAt: Date | null
    used: boolean | null
    createdAt: Date | null
  }

  export type PhoneOtpMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    phone: string | null
    codeHash: string | null
    attempts: number | null
    expiresAt: Date | null
    used: boolean | null
    createdAt: Date | null
  }

  export type PhoneOtpCountAggregateOutputType = {
    id: number
    userId: number
    phone: number
    codeHash: number
    attempts: number
    expiresAt: number
    used: number
    createdAt: number
    _all: number
  }


  export type PhoneOtpAvgAggregateInputType = {
    attempts?: true
  }

  export type PhoneOtpSumAggregateInputType = {
    attempts?: true
  }

  export type PhoneOtpMinAggregateInputType = {
    id?: true
    userId?: true
    phone?: true
    codeHash?: true
    attempts?: true
    expiresAt?: true
    used?: true
    createdAt?: true
  }

  export type PhoneOtpMaxAggregateInputType = {
    id?: true
    userId?: true
    phone?: true
    codeHash?: true
    attempts?: true
    expiresAt?: true
    used?: true
    createdAt?: true
  }

  export type PhoneOtpCountAggregateInputType = {
    id?: true
    userId?: true
    phone?: true
    codeHash?: true
    attempts?: true
    expiresAt?: true
    used?: true
    createdAt?: true
    _all?: true
  }

  export type PhoneOtpAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhoneOtp to aggregate.
     */
    where?: PhoneOtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhoneOtps to fetch.
     */
    orderBy?: PhoneOtpOrderByWithRelationInput | PhoneOtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhoneOtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhoneOtps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhoneOtps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PhoneOtps
    **/
    _count?: true | PhoneOtpCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PhoneOtpAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PhoneOtpSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhoneOtpMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhoneOtpMaxAggregateInputType
  }

  export type GetPhoneOtpAggregateType<T extends PhoneOtpAggregateArgs> = {
        [P in keyof T & keyof AggregatePhoneOtp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhoneOtp[P]>
      : GetScalarType<T[P], AggregatePhoneOtp[P]>
  }




  export type PhoneOtpGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhoneOtpWhereInput
    orderBy?: PhoneOtpOrderByWithAggregationInput | PhoneOtpOrderByWithAggregationInput[]
    by: PhoneOtpScalarFieldEnum[] | PhoneOtpScalarFieldEnum
    having?: PhoneOtpScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhoneOtpCountAggregateInputType | true
    _avg?: PhoneOtpAvgAggregateInputType
    _sum?: PhoneOtpSumAggregateInputType
    _min?: PhoneOtpMinAggregateInputType
    _max?: PhoneOtpMaxAggregateInputType
  }

  export type PhoneOtpGroupByOutputType = {
    id: string
    userId: string
    phone: string
    codeHash: string
    attempts: number
    expiresAt: Date
    used: boolean
    createdAt: Date
    _count: PhoneOtpCountAggregateOutputType | null
    _avg: PhoneOtpAvgAggregateOutputType | null
    _sum: PhoneOtpSumAggregateOutputType | null
    _min: PhoneOtpMinAggregateOutputType | null
    _max: PhoneOtpMaxAggregateOutputType | null
  }

  type GetPhoneOtpGroupByPayload<T extends PhoneOtpGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhoneOtpGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhoneOtpGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhoneOtpGroupByOutputType[P]>
            : GetScalarType<T[P], PhoneOtpGroupByOutputType[P]>
        }
      >
    >


  export type PhoneOtpSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    phone?: boolean
    codeHash?: boolean
    attempts?: boolean
    expiresAt?: boolean
    used?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["phoneOtp"]>

  export type PhoneOtpSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    phone?: boolean
    codeHash?: boolean
    attempts?: boolean
    expiresAt?: boolean
    used?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["phoneOtp"]>

  export type PhoneOtpSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    phone?: boolean
    codeHash?: boolean
    attempts?: boolean
    expiresAt?: boolean
    used?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["phoneOtp"]>

  export type PhoneOtpSelectScalar = {
    id?: boolean
    userId?: boolean
    phone?: boolean
    codeHash?: boolean
    attempts?: boolean
    expiresAt?: boolean
    used?: boolean
    createdAt?: boolean
  }

  export type PhoneOtpOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "phone" | "codeHash" | "attempts" | "expiresAt" | "used" | "createdAt", ExtArgs["result"]["phoneOtp"]>
  export type PhoneOtpInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PhoneOtpIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PhoneOtpIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PhoneOtpPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PhoneOtp"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      phone: string
      codeHash: string
      attempts: number
      expiresAt: Date
      used: boolean
      createdAt: Date
    }, ExtArgs["result"]["phoneOtp"]>
    composites: {}
  }

  type PhoneOtpGetPayload<S extends boolean | null | undefined | PhoneOtpDefaultArgs> = $Result.GetResult<Prisma.$PhoneOtpPayload, S>

  type PhoneOtpCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PhoneOtpFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PhoneOtpCountAggregateInputType | true
    }

  export interface PhoneOtpDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PhoneOtp'], meta: { name: 'PhoneOtp' } }
    /**
     * Find zero or one PhoneOtp that matches the filter.
     * @param {PhoneOtpFindUniqueArgs} args - Arguments to find a PhoneOtp
     * @example
     * // Get one PhoneOtp
     * const phoneOtp = await prisma.phoneOtp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PhoneOtpFindUniqueArgs>(args: SelectSubset<T, PhoneOtpFindUniqueArgs<ExtArgs>>): Prisma__PhoneOtpClient<$Result.GetResult<Prisma.$PhoneOtpPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PhoneOtp that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PhoneOtpFindUniqueOrThrowArgs} args - Arguments to find a PhoneOtp
     * @example
     * // Get one PhoneOtp
     * const phoneOtp = await prisma.phoneOtp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PhoneOtpFindUniqueOrThrowArgs>(args: SelectSubset<T, PhoneOtpFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PhoneOtpClient<$Result.GetResult<Prisma.$PhoneOtpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PhoneOtp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneOtpFindFirstArgs} args - Arguments to find a PhoneOtp
     * @example
     * // Get one PhoneOtp
     * const phoneOtp = await prisma.phoneOtp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PhoneOtpFindFirstArgs>(args?: SelectSubset<T, PhoneOtpFindFirstArgs<ExtArgs>>): Prisma__PhoneOtpClient<$Result.GetResult<Prisma.$PhoneOtpPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PhoneOtp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneOtpFindFirstOrThrowArgs} args - Arguments to find a PhoneOtp
     * @example
     * // Get one PhoneOtp
     * const phoneOtp = await prisma.phoneOtp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PhoneOtpFindFirstOrThrowArgs>(args?: SelectSubset<T, PhoneOtpFindFirstOrThrowArgs<ExtArgs>>): Prisma__PhoneOtpClient<$Result.GetResult<Prisma.$PhoneOtpPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PhoneOtps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneOtpFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PhoneOtps
     * const phoneOtps = await prisma.phoneOtp.findMany()
     * 
     * // Get first 10 PhoneOtps
     * const phoneOtps = await prisma.phoneOtp.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const phoneOtpWithIdOnly = await prisma.phoneOtp.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PhoneOtpFindManyArgs>(args?: SelectSubset<T, PhoneOtpFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhoneOtpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PhoneOtp.
     * @param {PhoneOtpCreateArgs} args - Arguments to create a PhoneOtp.
     * @example
     * // Create one PhoneOtp
     * const PhoneOtp = await prisma.phoneOtp.create({
     *   data: {
     *     // ... data to create a PhoneOtp
     *   }
     * })
     * 
     */
    create<T extends PhoneOtpCreateArgs>(args: SelectSubset<T, PhoneOtpCreateArgs<ExtArgs>>): Prisma__PhoneOtpClient<$Result.GetResult<Prisma.$PhoneOtpPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PhoneOtps.
     * @param {PhoneOtpCreateManyArgs} args - Arguments to create many PhoneOtps.
     * @example
     * // Create many PhoneOtps
     * const phoneOtp = await prisma.phoneOtp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PhoneOtpCreateManyArgs>(args?: SelectSubset<T, PhoneOtpCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PhoneOtps and returns the data saved in the database.
     * @param {PhoneOtpCreateManyAndReturnArgs} args - Arguments to create many PhoneOtps.
     * @example
     * // Create many PhoneOtps
     * const phoneOtp = await prisma.phoneOtp.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PhoneOtps and only return the `id`
     * const phoneOtpWithIdOnly = await prisma.phoneOtp.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PhoneOtpCreateManyAndReturnArgs>(args?: SelectSubset<T, PhoneOtpCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhoneOtpPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PhoneOtp.
     * @param {PhoneOtpDeleteArgs} args - Arguments to delete one PhoneOtp.
     * @example
     * // Delete one PhoneOtp
     * const PhoneOtp = await prisma.phoneOtp.delete({
     *   where: {
     *     // ... filter to delete one PhoneOtp
     *   }
     * })
     * 
     */
    delete<T extends PhoneOtpDeleteArgs>(args: SelectSubset<T, PhoneOtpDeleteArgs<ExtArgs>>): Prisma__PhoneOtpClient<$Result.GetResult<Prisma.$PhoneOtpPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PhoneOtp.
     * @param {PhoneOtpUpdateArgs} args - Arguments to update one PhoneOtp.
     * @example
     * // Update one PhoneOtp
     * const phoneOtp = await prisma.phoneOtp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PhoneOtpUpdateArgs>(args: SelectSubset<T, PhoneOtpUpdateArgs<ExtArgs>>): Prisma__PhoneOtpClient<$Result.GetResult<Prisma.$PhoneOtpPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PhoneOtps.
     * @param {PhoneOtpDeleteManyArgs} args - Arguments to filter PhoneOtps to delete.
     * @example
     * // Delete a few PhoneOtps
     * const { count } = await prisma.phoneOtp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PhoneOtpDeleteManyArgs>(args?: SelectSubset<T, PhoneOtpDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PhoneOtps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneOtpUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PhoneOtps
     * const phoneOtp = await prisma.phoneOtp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PhoneOtpUpdateManyArgs>(args: SelectSubset<T, PhoneOtpUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PhoneOtps and returns the data updated in the database.
     * @param {PhoneOtpUpdateManyAndReturnArgs} args - Arguments to update many PhoneOtps.
     * @example
     * // Update many PhoneOtps
     * const phoneOtp = await prisma.phoneOtp.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PhoneOtps and only return the `id`
     * const phoneOtpWithIdOnly = await prisma.phoneOtp.updateManyAndReturn({
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
    updateManyAndReturn<T extends PhoneOtpUpdateManyAndReturnArgs>(args: SelectSubset<T, PhoneOtpUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhoneOtpPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PhoneOtp.
     * @param {PhoneOtpUpsertArgs} args - Arguments to update or create a PhoneOtp.
     * @example
     * // Update or create a PhoneOtp
     * const phoneOtp = await prisma.phoneOtp.upsert({
     *   create: {
     *     // ... data to create a PhoneOtp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PhoneOtp we want to update
     *   }
     * })
     */
    upsert<T extends PhoneOtpUpsertArgs>(args: SelectSubset<T, PhoneOtpUpsertArgs<ExtArgs>>): Prisma__PhoneOtpClient<$Result.GetResult<Prisma.$PhoneOtpPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PhoneOtps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneOtpCountArgs} args - Arguments to filter PhoneOtps to count.
     * @example
     * // Count the number of PhoneOtps
     * const count = await prisma.phoneOtp.count({
     *   where: {
     *     // ... the filter for the PhoneOtps we want to count
     *   }
     * })
    **/
    count<T extends PhoneOtpCountArgs>(
      args?: Subset<T, PhoneOtpCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhoneOtpCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PhoneOtp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneOtpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PhoneOtpAggregateArgs>(args: Subset<T, PhoneOtpAggregateArgs>): Prisma.PrismaPromise<GetPhoneOtpAggregateType<T>>

    /**
     * Group by PhoneOtp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneOtpGroupByArgs} args - Group by arguments.
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
      T extends PhoneOtpGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhoneOtpGroupByArgs['orderBy'] }
        : { orderBy?: PhoneOtpGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PhoneOtpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhoneOtpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PhoneOtp model
   */
  readonly fields: PhoneOtpFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PhoneOtp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhoneOtpClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PhoneOtp model
   */
  interface PhoneOtpFieldRefs {
    readonly id: FieldRef<"PhoneOtp", 'String'>
    readonly userId: FieldRef<"PhoneOtp", 'String'>
    readonly phone: FieldRef<"PhoneOtp", 'String'>
    readonly codeHash: FieldRef<"PhoneOtp", 'String'>
    readonly attempts: FieldRef<"PhoneOtp", 'Int'>
    readonly expiresAt: FieldRef<"PhoneOtp", 'DateTime'>
    readonly used: FieldRef<"PhoneOtp", 'Boolean'>
    readonly createdAt: FieldRef<"PhoneOtp", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PhoneOtp findUnique
   */
  export type PhoneOtpFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneOtp
     */
    select?: PhoneOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneOtp
     */
    omit?: PhoneOtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneOtpInclude<ExtArgs> | null
    /**
     * Filter, which PhoneOtp to fetch.
     */
    where: PhoneOtpWhereUniqueInput
  }

  /**
   * PhoneOtp findUniqueOrThrow
   */
  export type PhoneOtpFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneOtp
     */
    select?: PhoneOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneOtp
     */
    omit?: PhoneOtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneOtpInclude<ExtArgs> | null
    /**
     * Filter, which PhoneOtp to fetch.
     */
    where: PhoneOtpWhereUniqueInput
  }

  /**
   * PhoneOtp findFirst
   */
  export type PhoneOtpFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneOtp
     */
    select?: PhoneOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneOtp
     */
    omit?: PhoneOtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneOtpInclude<ExtArgs> | null
    /**
     * Filter, which PhoneOtp to fetch.
     */
    where?: PhoneOtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhoneOtps to fetch.
     */
    orderBy?: PhoneOtpOrderByWithRelationInput | PhoneOtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhoneOtps.
     */
    cursor?: PhoneOtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhoneOtps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhoneOtps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhoneOtps.
     */
    distinct?: PhoneOtpScalarFieldEnum | PhoneOtpScalarFieldEnum[]
  }

  /**
   * PhoneOtp findFirstOrThrow
   */
  export type PhoneOtpFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneOtp
     */
    select?: PhoneOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneOtp
     */
    omit?: PhoneOtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneOtpInclude<ExtArgs> | null
    /**
     * Filter, which PhoneOtp to fetch.
     */
    where?: PhoneOtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhoneOtps to fetch.
     */
    orderBy?: PhoneOtpOrderByWithRelationInput | PhoneOtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhoneOtps.
     */
    cursor?: PhoneOtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhoneOtps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhoneOtps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhoneOtps.
     */
    distinct?: PhoneOtpScalarFieldEnum | PhoneOtpScalarFieldEnum[]
  }

  /**
   * PhoneOtp findMany
   */
  export type PhoneOtpFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneOtp
     */
    select?: PhoneOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneOtp
     */
    omit?: PhoneOtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneOtpInclude<ExtArgs> | null
    /**
     * Filter, which PhoneOtps to fetch.
     */
    where?: PhoneOtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhoneOtps to fetch.
     */
    orderBy?: PhoneOtpOrderByWithRelationInput | PhoneOtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PhoneOtps.
     */
    cursor?: PhoneOtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhoneOtps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhoneOtps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhoneOtps.
     */
    distinct?: PhoneOtpScalarFieldEnum | PhoneOtpScalarFieldEnum[]
  }

  /**
   * PhoneOtp create
   */
  export type PhoneOtpCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneOtp
     */
    select?: PhoneOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneOtp
     */
    omit?: PhoneOtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneOtpInclude<ExtArgs> | null
    /**
     * The data needed to create a PhoneOtp.
     */
    data: XOR<PhoneOtpCreateInput, PhoneOtpUncheckedCreateInput>
  }

  /**
   * PhoneOtp createMany
   */
  export type PhoneOtpCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PhoneOtps.
     */
    data: PhoneOtpCreateManyInput | PhoneOtpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PhoneOtp createManyAndReturn
   */
  export type PhoneOtpCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneOtp
     */
    select?: PhoneOtpSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneOtp
     */
    omit?: PhoneOtpOmit<ExtArgs> | null
    /**
     * The data used to create many PhoneOtps.
     */
    data: PhoneOtpCreateManyInput | PhoneOtpCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneOtpIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PhoneOtp update
   */
  export type PhoneOtpUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneOtp
     */
    select?: PhoneOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneOtp
     */
    omit?: PhoneOtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneOtpInclude<ExtArgs> | null
    /**
     * The data needed to update a PhoneOtp.
     */
    data: XOR<PhoneOtpUpdateInput, PhoneOtpUncheckedUpdateInput>
    /**
     * Choose, which PhoneOtp to update.
     */
    where: PhoneOtpWhereUniqueInput
  }

  /**
   * PhoneOtp updateMany
   */
  export type PhoneOtpUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PhoneOtps.
     */
    data: XOR<PhoneOtpUpdateManyMutationInput, PhoneOtpUncheckedUpdateManyInput>
    /**
     * Filter which PhoneOtps to update
     */
    where?: PhoneOtpWhereInput
    /**
     * Limit how many PhoneOtps to update.
     */
    limit?: number
  }

  /**
   * PhoneOtp updateManyAndReturn
   */
  export type PhoneOtpUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneOtp
     */
    select?: PhoneOtpSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneOtp
     */
    omit?: PhoneOtpOmit<ExtArgs> | null
    /**
     * The data used to update PhoneOtps.
     */
    data: XOR<PhoneOtpUpdateManyMutationInput, PhoneOtpUncheckedUpdateManyInput>
    /**
     * Filter which PhoneOtps to update
     */
    where?: PhoneOtpWhereInput
    /**
     * Limit how many PhoneOtps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneOtpIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PhoneOtp upsert
   */
  export type PhoneOtpUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneOtp
     */
    select?: PhoneOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneOtp
     */
    omit?: PhoneOtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneOtpInclude<ExtArgs> | null
    /**
     * The filter to search for the PhoneOtp to update in case it exists.
     */
    where: PhoneOtpWhereUniqueInput
    /**
     * In case the PhoneOtp found by the `where` argument doesn't exist, create a new PhoneOtp with this data.
     */
    create: XOR<PhoneOtpCreateInput, PhoneOtpUncheckedCreateInput>
    /**
     * In case the PhoneOtp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhoneOtpUpdateInput, PhoneOtpUncheckedUpdateInput>
  }

  /**
   * PhoneOtp delete
   */
  export type PhoneOtpDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneOtp
     */
    select?: PhoneOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneOtp
     */
    omit?: PhoneOtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneOtpInclude<ExtArgs> | null
    /**
     * Filter which PhoneOtp to delete.
     */
    where: PhoneOtpWhereUniqueInput
  }

  /**
   * PhoneOtp deleteMany
   */
  export type PhoneOtpDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhoneOtps to delete
     */
    where?: PhoneOtpWhereInput
    /**
     * Limit how many PhoneOtps to delete.
     */
    limit?: number
  }

  /**
   * PhoneOtp without action
   */
  export type PhoneOtpDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneOtp
     */
    select?: PhoneOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneOtp
     */
    omit?: PhoneOtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneOtpInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: string | null
    applicationId: string | null
    reviewerId: string | null
    revieweeId: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: string | null
    applicationId: string | null
    reviewerId: string | null
    revieweeId: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    applicationId: number
    reviewerId: number
    revieweeId: number
    rating: number
    comment: number
    createdAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    applicationId?: true
    reviewerId?: true
    revieweeId?: true
    rating?: true
    comment?: true
    createdAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    applicationId?: true
    reviewerId?: true
    revieweeId?: true
    rating?: true
    comment?: true
    createdAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    applicationId?: true
    reviewerId?: true
    revieweeId?: true
    rating?: true
    comment?: true
    createdAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: string
    applicationId: string
    reviewerId: string
    revieweeId: string
    rating: number
    comment: string | null
    createdAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    reviewerId?: boolean
    revieweeId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
    reviewer?: boolean | UserDefaultArgs<ExtArgs>
    reviewee?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    reviewerId?: boolean
    revieweeId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
    reviewer?: boolean | UserDefaultArgs<ExtArgs>
    reviewee?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    reviewerId?: boolean
    revieweeId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
    reviewer?: boolean | UserDefaultArgs<ExtArgs>
    reviewee?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    applicationId?: boolean
    reviewerId?: boolean
    revieweeId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "applicationId" | "reviewerId" | "revieweeId" | "rating" | "comment" | "createdAt", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
    reviewer?: boolean | UserDefaultArgs<ExtArgs>
    reviewee?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
    reviewer?: boolean | UserDefaultArgs<ExtArgs>
    reviewee?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
    reviewer?: boolean | UserDefaultArgs<ExtArgs>
    reviewee?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      application: Prisma.$ApplicationPayload<ExtArgs>
      reviewer: Prisma.$UserPayload<ExtArgs>
      reviewee: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      applicationId: string
      reviewerId: string
      revieweeId: string
      rating: number
      comment: string | null
      createdAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
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
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    application<T extends ApplicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApplicationDefaultArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reviewer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reviewee<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'String'>
    readonly applicationId: FieldRef<"Review", 'String'>
    readonly reviewerId: FieldRef<"Review", 'String'>
    readonly revieweeId: FieldRef<"Review", 'String'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly comment: FieldRef<"Review", 'String'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model MatchExplanation
   */

  export type AggregateMatchExplanation = {
    _count: MatchExplanationCountAggregateOutputType | null
    _min: MatchExplanationMinAggregateOutputType | null
    _max: MatchExplanationMaxAggregateOutputType | null
  }

  export type MatchExplanationMinAggregateOutputType = {
    id: string | null
    graduateId: string | null
    opportunityId: string | null
    explanation: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MatchExplanationMaxAggregateOutputType = {
    id: string | null
    graduateId: string | null
    opportunityId: string | null
    explanation: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MatchExplanationCountAggregateOutputType = {
    id: number
    graduateId: number
    opportunityId: number
    explanation: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MatchExplanationMinAggregateInputType = {
    id?: true
    graduateId?: true
    opportunityId?: true
    explanation?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MatchExplanationMaxAggregateInputType = {
    id?: true
    graduateId?: true
    opportunityId?: true
    explanation?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MatchExplanationCountAggregateInputType = {
    id?: true
    graduateId?: true
    opportunityId?: true
    explanation?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MatchExplanationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatchExplanation to aggregate.
     */
    where?: MatchExplanationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchExplanations to fetch.
     */
    orderBy?: MatchExplanationOrderByWithRelationInput | MatchExplanationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatchExplanationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchExplanations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchExplanations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MatchExplanations
    **/
    _count?: true | MatchExplanationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchExplanationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchExplanationMaxAggregateInputType
  }

  export type GetMatchExplanationAggregateType<T extends MatchExplanationAggregateArgs> = {
        [P in keyof T & keyof AggregateMatchExplanation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatchExplanation[P]>
      : GetScalarType<T[P], AggregateMatchExplanation[P]>
  }




  export type MatchExplanationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchExplanationWhereInput
    orderBy?: MatchExplanationOrderByWithAggregationInput | MatchExplanationOrderByWithAggregationInput[]
    by: MatchExplanationScalarFieldEnum[] | MatchExplanationScalarFieldEnum
    having?: MatchExplanationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchExplanationCountAggregateInputType | true
    _min?: MatchExplanationMinAggregateInputType
    _max?: MatchExplanationMaxAggregateInputType
  }

  export type MatchExplanationGroupByOutputType = {
    id: string
    graduateId: string
    opportunityId: string
    explanation: string
    createdAt: Date
    updatedAt: Date
    _count: MatchExplanationCountAggregateOutputType | null
    _min: MatchExplanationMinAggregateOutputType | null
    _max: MatchExplanationMaxAggregateOutputType | null
  }

  type GetMatchExplanationGroupByPayload<T extends MatchExplanationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchExplanationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchExplanationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchExplanationGroupByOutputType[P]>
            : GetScalarType<T[P], MatchExplanationGroupByOutputType[P]>
        }
      >
    >


  export type MatchExplanationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    graduateId?: boolean
    opportunityId?: boolean
    explanation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    graduate?: boolean | UserDefaultArgs<ExtArgs>
    opportunity?: boolean | OpportunityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matchExplanation"]>

  export type MatchExplanationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    graduateId?: boolean
    opportunityId?: boolean
    explanation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    graduate?: boolean | UserDefaultArgs<ExtArgs>
    opportunity?: boolean | OpportunityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matchExplanation"]>

  export type MatchExplanationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    graduateId?: boolean
    opportunityId?: boolean
    explanation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    graduate?: boolean | UserDefaultArgs<ExtArgs>
    opportunity?: boolean | OpportunityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matchExplanation"]>

  export type MatchExplanationSelectScalar = {
    id?: boolean
    graduateId?: boolean
    opportunityId?: boolean
    explanation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MatchExplanationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "graduateId" | "opportunityId" | "explanation" | "createdAt" | "updatedAt", ExtArgs["result"]["matchExplanation"]>
  export type MatchExplanationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    graduate?: boolean | UserDefaultArgs<ExtArgs>
    opportunity?: boolean | OpportunityDefaultArgs<ExtArgs>
  }
  export type MatchExplanationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    graduate?: boolean | UserDefaultArgs<ExtArgs>
    opportunity?: boolean | OpportunityDefaultArgs<ExtArgs>
  }
  export type MatchExplanationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    graduate?: boolean | UserDefaultArgs<ExtArgs>
    opportunity?: boolean | OpportunityDefaultArgs<ExtArgs>
  }

  export type $MatchExplanationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MatchExplanation"
    objects: {
      graduate: Prisma.$UserPayload<ExtArgs>
      opportunity: Prisma.$OpportunityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      graduateId: string
      opportunityId: string
      explanation: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["matchExplanation"]>
    composites: {}
  }

  type MatchExplanationGetPayload<S extends boolean | null | undefined | MatchExplanationDefaultArgs> = $Result.GetResult<Prisma.$MatchExplanationPayload, S>

  type MatchExplanationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MatchExplanationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatchExplanationCountAggregateInputType | true
    }

  export interface MatchExplanationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MatchExplanation'], meta: { name: 'MatchExplanation' } }
    /**
     * Find zero or one MatchExplanation that matches the filter.
     * @param {MatchExplanationFindUniqueArgs} args - Arguments to find a MatchExplanation
     * @example
     * // Get one MatchExplanation
     * const matchExplanation = await prisma.matchExplanation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatchExplanationFindUniqueArgs>(args: SelectSubset<T, MatchExplanationFindUniqueArgs<ExtArgs>>): Prisma__MatchExplanationClient<$Result.GetResult<Prisma.$MatchExplanationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MatchExplanation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MatchExplanationFindUniqueOrThrowArgs} args - Arguments to find a MatchExplanation
     * @example
     * // Get one MatchExplanation
     * const matchExplanation = await prisma.matchExplanation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatchExplanationFindUniqueOrThrowArgs>(args: SelectSubset<T, MatchExplanationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatchExplanationClient<$Result.GetResult<Prisma.$MatchExplanationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MatchExplanation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchExplanationFindFirstArgs} args - Arguments to find a MatchExplanation
     * @example
     * // Get one MatchExplanation
     * const matchExplanation = await prisma.matchExplanation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatchExplanationFindFirstArgs>(args?: SelectSubset<T, MatchExplanationFindFirstArgs<ExtArgs>>): Prisma__MatchExplanationClient<$Result.GetResult<Prisma.$MatchExplanationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MatchExplanation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchExplanationFindFirstOrThrowArgs} args - Arguments to find a MatchExplanation
     * @example
     * // Get one MatchExplanation
     * const matchExplanation = await prisma.matchExplanation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatchExplanationFindFirstOrThrowArgs>(args?: SelectSubset<T, MatchExplanationFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatchExplanationClient<$Result.GetResult<Prisma.$MatchExplanationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MatchExplanations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchExplanationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MatchExplanations
     * const matchExplanations = await prisma.matchExplanation.findMany()
     * 
     * // Get first 10 MatchExplanations
     * const matchExplanations = await prisma.matchExplanation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matchExplanationWithIdOnly = await prisma.matchExplanation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MatchExplanationFindManyArgs>(args?: SelectSubset<T, MatchExplanationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchExplanationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MatchExplanation.
     * @param {MatchExplanationCreateArgs} args - Arguments to create a MatchExplanation.
     * @example
     * // Create one MatchExplanation
     * const MatchExplanation = await prisma.matchExplanation.create({
     *   data: {
     *     // ... data to create a MatchExplanation
     *   }
     * })
     * 
     */
    create<T extends MatchExplanationCreateArgs>(args: SelectSubset<T, MatchExplanationCreateArgs<ExtArgs>>): Prisma__MatchExplanationClient<$Result.GetResult<Prisma.$MatchExplanationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MatchExplanations.
     * @param {MatchExplanationCreateManyArgs} args - Arguments to create many MatchExplanations.
     * @example
     * // Create many MatchExplanations
     * const matchExplanation = await prisma.matchExplanation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatchExplanationCreateManyArgs>(args?: SelectSubset<T, MatchExplanationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MatchExplanations and returns the data saved in the database.
     * @param {MatchExplanationCreateManyAndReturnArgs} args - Arguments to create many MatchExplanations.
     * @example
     * // Create many MatchExplanations
     * const matchExplanation = await prisma.matchExplanation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MatchExplanations and only return the `id`
     * const matchExplanationWithIdOnly = await prisma.matchExplanation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MatchExplanationCreateManyAndReturnArgs>(args?: SelectSubset<T, MatchExplanationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchExplanationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MatchExplanation.
     * @param {MatchExplanationDeleteArgs} args - Arguments to delete one MatchExplanation.
     * @example
     * // Delete one MatchExplanation
     * const MatchExplanation = await prisma.matchExplanation.delete({
     *   where: {
     *     // ... filter to delete one MatchExplanation
     *   }
     * })
     * 
     */
    delete<T extends MatchExplanationDeleteArgs>(args: SelectSubset<T, MatchExplanationDeleteArgs<ExtArgs>>): Prisma__MatchExplanationClient<$Result.GetResult<Prisma.$MatchExplanationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MatchExplanation.
     * @param {MatchExplanationUpdateArgs} args - Arguments to update one MatchExplanation.
     * @example
     * // Update one MatchExplanation
     * const matchExplanation = await prisma.matchExplanation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatchExplanationUpdateArgs>(args: SelectSubset<T, MatchExplanationUpdateArgs<ExtArgs>>): Prisma__MatchExplanationClient<$Result.GetResult<Prisma.$MatchExplanationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MatchExplanations.
     * @param {MatchExplanationDeleteManyArgs} args - Arguments to filter MatchExplanations to delete.
     * @example
     * // Delete a few MatchExplanations
     * const { count } = await prisma.matchExplanation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatchExplanationDeleteManyArgs>(args?: SelectSubset<T, MatchExplanationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MatchExplanations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchExplanationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MatchExplanations
     * const matchExplanation = await prisma.matchExplanation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatchExplanationUpdateManyArgs>(args: SelectSubset<T, MatchExplanationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MatchExplanations and returns the data updated in the database.
     * @param {MatchExplanationUpdateManyAndReturnArgs} args - Arguments to update many MatchExplanations.
     * @example
     * // Update many MatchExplanations
     * const matchExplanation = await prisma.matchExplanation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MatchExplanations and only return the `id`
     * const matchExplanationWithIdOnly = await prisma.matchExplanation.updateManyAndReturn({
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
    updateManyAndReturn<T extends MatchExplanationUpdateManyAndReturnArgs>(args: SelectSubset<T, MatchExplanationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchExplanationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MatchExplanation.
     * @param {MatchExplanationUpsertArgs} args - Arguments to update or create a MatchExplanation.
     * @example
     * // Update or create a MatchExplanation
     * const matchExplanation = await prisma.matchExplanation.upsert({
     *   create: {
     *     // ... data to create a MatchExplanation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MatchExplanation we want to update
     *   }
     * })
     */
    upsert<T extends MatchExplanationUpsertArgs>(args: SelectSubset<T, MatchExplanationUpsertArgs<ExtArgs>>): Prisma__MatchExplanationClient<$Result.GetResult<Prisma.$MatchExplanationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MatchExplanations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchExplanationCountArgs} args - Arguments to filter MatchExplanations to count.
     * @example
     * // Count the number of MatchExplanations
     * const count = await prisma.matchExplanation.count({
     *   where: {
     *     // ... the filter for the MatchExplanations we want to count
     *   }
     * })
    **/
    count<T extends MatchExplanationCountArgs>(
      args?: Subset<T, MatchExplanationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchExplanationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MatchExplanation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchExplanationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MatchExplanationAggregateArgs>(args: Subset<T, MatchExplanationAggregateArgs>): Prisma.PrismaPromise<GetMatchExplanationAggregateType<T>>

    /**
     * Group by MatchExplanation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchExplanationGroupByArgs} args - Group by arguments.
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
      T extends MatchExplanationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchExplanationGroupByArgs['orderBy'] }
        : { orderBy?: MatchExplanationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MatchExplanationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchExplanationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MatchExplanation model
   */
  readonly fields: MatchExplanationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MatchExplanation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatchExplanationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    graduate<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    opportunity<T extends OpportunityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OpportunityDefaultArgs<ExtArgs>>): Prisma__OpportunityClient<$Result.GetResult<Prisma.$OpportunityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MatchExplanation model
   */
  interface MatchExplanationFieldRefs {
    readonly id: FieldRef<"MatchExplanation", 'String'>
    readonly graduateId: FieldRef<"MatchExplanation", 'String'>
    readonly opportunityId: FieldRef<"MatchExplanation", 'String'>
    readonly explanation: FieldRef<"MatchExplanation", 'String'>
    readonly createdAt: FieldRef<"MatchExplanation", 'DateTime'>
    readonly updatedAt: FieldRef<"MatchExplanation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MatchExplanation findUnique
   */
  export type MatchExplanationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchExplanation
     */
    select?: MatchExplanationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchExplanation
     */
    omit?: MatchExplanationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchExplanationInclude<ExtArgs> | null
    /**
     * Filter, which MatchExplanation to fetch.
     */
    where: MatchExplanationWhereUniqueInput
  }

  /**
   * MatchExplanation findUniqueOrThrow
   */
  export type MatchExplanationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchExplanation
     */
    select?: MatchExplanationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchExplanation
     */
    omit?: MatchExplanationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchExplanationInclude<ExtArgs> | null
    /**
     * Filter, which MatchExplanation to fetch.
     */
    where: MatchExplanationWhereUniqueInput
  }

  /**
   * MatchExplanation findFirst
   */
  export type MatchExplanationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchExplanation
     */
    select?: MatchExplanationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchExplanation
     */
    omit?: MatchExplanationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchExplanationInclude<ExtArgs> | null
    /**
     * Filter, which MatchExplanation to fetch.
     */
    where?: MatchExplanationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchExplanations to fetch.
     */
    orderBy?: MatchExplanationOrderByWithRelationInput | MatchExplanationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatchExplanations.
     */
    cursor?: MatchExplanationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchExplanations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchExplanations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatchExplanations.
     */
    distinct?: MatchExplanationScalarFieldEnum | MatchExplanationScalarFieldEnum[]
  }

  /**
   * MatchExplanation findFirstOrThrow
   */
  export type MatchExplanationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchExplanation
     */
    select?: MatchExplanationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchExplanation
     */
    omit?: MatchExplanationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchExplanationInclude<ExtArgs> | null
    /**
     * Filter, which MatchExplanation to fetch.
     */
    where?: MatchExplanationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchExplanations to fetch.
     */
    orderBy?: MatchExplanationOrderByWithRelationInput | MatchExplanationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatchExplanations.
     */
    cursor?: MatchExplanationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchExplanations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchExplanations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatchExplanations.
     */
    distinct?: MatchExplanationScalarFieldEnum | MatchExplanationScalarFieldEnum[]
  }

  /**
   * MatchExplanation findMany
   */
  export type MatchExplanationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchExplanation
     */
    select?: MatchExplanationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchExplanation
     */
    omit?: MatchExplanationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchExplanationInclude<ExtArgs> | null
    /**
     * Filter, which MatchExplanations to fetch.
     */
    where?: MatchExplanationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchExplanations to fetch.
     */
    orderBy?: MatchExplanationOrderByWithRelationInput | MatchExplanationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MatchExplanations.
     */
    cursor?: MatchExplanationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchExplanations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchExplanations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatchExplanations.
     */
    distinct?: MatchExplanationScalarFieldEnum | MatchExplanationScalarFieldEnum[]
  }

  /**
   * MatchExplanation create
   */
  export type MatchExplanationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchExplanation
     */
    select?: MatchExplanationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchExplanation
     */
    omit?: MatchExplanationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchExplanationInclude<ExtArgs> | null
    /**
     * The data needed to create a MatchExplanation.
     */
    data: XOR<MatchExplanationCreateInput, MatchExplanationUncheckedCreateInput>
  }

  /**
   * MatchExplanation createMany
   */
  export type MatchExplanationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MatchExplanations.
     */
    data: MatchExplanationCreateManyInput | MatchExplanationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MatchExplanation createManyAndReturn
   */
  export type MatchExplanationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchExplanation
     */
    select?: MatchExplanationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MatchExplanation
     */
    omit?: MatchExplanationOmit<ExtArgs> | null
    /**
     * The data used to create many MatchExplanations.
     */
    data: MatchExplanationCreateManyInput | MatchExplanationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchExplanationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MatchExplanation update
   */
  export type MatchExplanationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchExplanation
     */
    select?: MatchExplanationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchExplanation
     */
    omit?: MatchExplanationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchExplanationInclude<ExtArgs> | null
    /**
     * The data needed to update a MatchExplanation.
     */
    data: XOR<MatchExplanationUpdateInput, MatchExplanationUncheckedUpdateInput>
    /**
     * Choose, which MatchExplanation to update.
     */
    where: MatchExplanationWhereUniqueInput
  }

  /**
   * MatchExplanation updateMany
   */
  export type MatchExplanationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MatchExplanations.
     */
    data: XOR<MatchExplanationUpdateManyMutationInput, MatchExplanationUncheckedUpdateManyInput>
    /**
     * Filter which MatchExplanations to update
     */
    where?: MatchExplanationWhereInput
    /**
     * Limit how many MatchExplanations to update.
     */
    limit?: number
  }

  /**
   * MatchExplanation updateManyAndReturn
   */
  export type MatchExplanationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchExplanation
     */
    select?: MatchExplanationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MatchExplanation
     */
    omit?: MatchExplanationOmit<ExtArgs> | null
    /**
     * The data used to update MatchExplanations.
     */
    data: XOR<MatchExplanationUpdateManyMutationInput, MatchExplanationUncheckedUpdateManyInput>
    /**
     * Filter which MatchExplanations to update
     */
    where?: MatchExplanationWhereInput
    /**
     * Limit how many MatchExplanations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchExplanationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MatchExplanation upsert
   */
  export type MatchExplanationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchExplanation
     */
    select?: MatchExplanationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchExplanation
     */
    omit?: MatchExplanationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchExplanationInclude<ExtArgs> | null
    /**
     * The filter to search for the MatchExplanation to update in case it exists.
     */
    where: MatchExplanationWhereUniqueInput
    /**
     * In case the MatchExplanation found by the `where` argument doesn't exist, create a new MatchExplanation with this data.
     */
    create: XOR<MatchExplanationCreateInput, MatchExplanationUncheckedCreateInput>
    /**
     * In case the MatchExplanation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchExplanationUpdateInput, MatchExplanationUncheckedUpdateInput>
  }

  /**
   * MatchExplanation delete
   */
  export type MatchExplanationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchExplanation
     */
    select?: MatchExplanationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchExplanation
     */
    omit?: MatchExplanationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchExplanationInclude<ExtArgs> | null
    /**
     * Filter which MatchExplanation to delete.
     */
    where: MatchExplanationWhereUniqueInput
  }

  /**
   * MatchExplanation deleteMany
   */
  export type MatchExplanationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatchExplanations to delete
     */
    where?: MatchExplanationWhereInput
    /**
     * Limit how many MatchExplanations to delete.
     */
    limit?: number
  }

  /**
   * MatchExplanation without action
   */
  export type MatchExplanationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchExplanation
     */
    select?: MatchExplanationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchExplanation
     */
    omit?: MatchExplanationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchExplanationInclude<ExtArgs> | null
  }


  /**
   * Model SkillRequest
   */

  export type AggregateSkillRequest = {
    _count: SkillRequestCountAggregateOutputType | null
    _min: SkillRequestMinAggregateOutputType | null
    _max: SkillRequestMaxAggregateOutputType | null
  }

  export type SkillRequestMinAggregateOutputType = {
    id: string | null
    name: string | null
    employerId: string | null
    status: $Enums.SkillRequestStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SkillRequestMaxAggregateOutputType = {
    id: string | null
    name: string | null
    employerId: string | null
    status: $Enums.SkillRequestStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SkillRequestCountAggregateOutputType = {
    id: number
    name: number
    employerId: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SkillRequestMinAggregateInputType = {
    id?: true
    name?: true
    employerId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SkillRequestMaxAggregateInputType = {
    id?: true
    name?: true
    employerId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SkillRequestCountAggregateInputType = {
    id?: true
    name?: true
    employerId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SkillRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SkillRequest to aggregate.
     */
    where?: SkillRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillRequests to fetch.
     */
    orderBy?: SkillRequestOrderByWithRelationInput | SkillRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkillRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SkillRequests
    **/
    _count?: true | SkillRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillRequestMaxAggregateInputType
  }

  export type GetSkillRequestAggregateType<T extends SkillRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateSkillRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkillRequest[P]>
      : GetScalarType<T[P], AggregateSkillRequest[P]>
  }




  export type SkillRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillRequestWhereInput
    orderBy?: SkillRequestOrderByWithAggregationInput | SkillRequestOrderByWithAggregationInput[]
    by: SkillRequestScalarFieldEnum[] | SkillRequestScalarFieldEnum
    having?: SkillRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillRequestCountAggregateInputType | true
    _min?: SkillRequestMinAggregateInputType
    _max?: SkillRequestMaxAggregateInputType
  }

  export type SkillRequestGroupByOutputType = {
    id: string
    name: string
    employerId: string
    status: $Enums.SkillRequestStatus
    createdAt: Date
    updatedAt: Date
    _count: SkillRequestCountAggregateOutputType | null
    _min: SkillRequestMinAggregateOutputType | null
    _max: SkillRequestMaxAggregateOutputType | null
  }

  type GetSkillRequestGroupByPayload<T extends SkillRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillRequestGroupByOutputType[P]>
            : GetScalarType<T[P], SkillRequestGroupByOutputType[P]>
        }
      >
    >


  export type SkillRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    employerId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skillRequest"]>

  export type SkillRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    employerId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skillRequest"]>

  export type SkillRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    employerId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skillRequest"]>

  export type SkillRequestSelectScalar = {
    id?: boolean
    name?: boolean
    employerId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SkillRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "employerId" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["skillRequest"]>
  export type SkillRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employer?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SkillRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employer?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SkillRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employer?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SkillRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SkillRequest"
    objects: {
      employer: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      employerId: string
      status: $Enums.SkillRequestStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["skillRequest"]>
    composites: {}
  }

  type SkillRequestGetPayload<S extends boolean | null | undefined | SkillRequestDefaultArgs> = $Result.GetResult<Prisma.$SkillRequestPayload, S>

  type SkillRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SkillRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkillRequestCountAggregateInputType | true
    }

  export interface SkillRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SkillRequest'], meta: { name: 'SkillRequest' } }
    /**
     * Find zero or one SkillRequest that matches the filter.
     * @param {SkillRequestFindUniqueArgs} args - Arguments to find a SkillRequest
     * @example
     * // Get one SkillRequest
     * const skillRequest = await prisma.skillRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkillRequestFindUniqueArgs>(args: SelectSubset<T, SkillRequestFindUniqueArgs<ExtArgs>>): Prisma__SkillRequestClient<$Result.GetResult<Prisma.$SkillRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SkillRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SkillRequestFindUniqueOrThrowArgs} args - Arguments to find a SkillRequest
     * @example
     * // Get one SkillRequest
     * const skillRequest = await prisma.skillRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkillRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, SkillRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SkillRequestClient<$Result.GetResult<Prisma.$SkillRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SkillRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillRequestFindFirstArgs} args - Arguments to find a SkillRequest
     * @example
     * // Get one SkillRequest
     * const skillRequest = await prisma.skillRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkillRequestFindFirstArgs>(args?: SelectSubset<T, SkillRequestFindFirstArgs<ExtArgs>>): Prisma__SkillRequestClient<$Result.GetResult<Prisma.$SkillRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SkillRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillRequestFindFirstOrThrowArgs} args - Arguments to find a SkillRequest
     * @example
     * // Get one SkillRequest
     * const skillRequest = await prisma.skillRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkillRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, SkillRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__SkillRequestClient<$Result.GetResult<Prisma.$SkillRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SkillRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SkillRequests
     * const skillRequests = await prisma.skillRequest.findMany()
     * 
     * // Get first 10 SkillRequests
     * const skillRequests = await prisma.skillRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillRequestWithIdOnly = await prisma.skillRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SkillRequestFindManyArgs>(args?: SelectSubset<T, SkillRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SkillRequest.
     * @param {SkillRequestCreateArgs} args - Arguments to create a SkillRequest.
     * @example
     * // Create one SkillRequest
     * const SkillRequest = await prisma.skillRequest.create({
     *   data: {
     *     // ... data to create a SkillRequest
     *   }
     * })
     * 
     */
    create<T extends SkillRequestCreateArgs>(args: SelectSubset<T, SkillRequestCreateArgs<ExtArgs>>): Prisma__SkillRequestClient<$Result.GetResult<Prisma.$SkillRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SkillRequests.
     * @param {SkillRequestCreateManyArgs} args - Arguments to create many SkillRequests.
     * @example
     * // Create many SkillRequests
     * const skillRequest = await prisma.skillRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SkillRequestCreateManyArgs>(args?: SelectSubset<T, SkillRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SkillRequests and returns the data saved in the database.
     * @param {SkillRequestCreateManyAndReturnArgs} args - Arguments to create many SkillRequests.
     * @example
     * // Create many SkillRequests
     * const skillRequest = await prisma.skillRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SkillRequests and only return the `id`
     * const skillRequestWithIdOnly = await prisma.skillRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SkillRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, SkillRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SkillRequest.
     * @param {SkillRequestDeleteArgs} args - Arguments to delete one SkillRequest.
     * @example
     * // Delete one SkillRequest
     * const SkillRequest = await prisma.skillRequest.delete({
     *   where: {
     *     // ... filter to delete one SkillRequest
     *   }
     * })
     * 
     */
    delete<T extends SkillRequestDeleteArgs>(args: SelectSubset<T, SkillRequestDeleteArgs<ExtArgs>>): Prisma__SkillRequestClient<$Result.GetResult<Prisma.$SkillRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SkillRequest.
     * @param {SkillRequestUpdateArgs} args - Arguments to update one SkillRequest.
     * @example
     * // Update one SkillRequest
     * const skillRequest = await prisma.skillRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SkillRequestUpdateArgs>(args: SelectSubset<T, SkillRequestUpdateArgs<ExtArgs>>): Prisma__SkillRequestClient<$Result.GetResult<Prisma.$SkillRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SkillRequests.
     * @param {SkillRequestDeleteManyArgs} args - Arguments to filter SkillRequests to delete.
     * @example
     * // Delete a few SkillRequests
     * const { count } = await prisma.skillRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SkillRequestDeleteManyArgs>(args?: SelectSubset<T, SkillRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SkillRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SkillRequests
     * const skillRequest = await prisma.skillRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SkillRequestUpdateManyArgs>(args: SelectSubset<T, SkillRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SkillRequests and returns the data updated in the database.
     * @param {SkillRequestUpdateManyAndReturnArgs} args - Arguments to update many SkillRequests.
     * @example
     * // Update many SkillRequests
     * const skillRequest = await prisma.skillRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SkillRequests and only return the `id`
     * const skillRequestWithIdOnly = await prisma.skillRequest.updateManyAndReturn({
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
    updateManyAndReturn<T extends SkillRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, SkillRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SkillRequest.
     * @param {SkillRequestUpsertArgs} args - Arguments to update or create a SkillRequest.
     * @example
     * // Update or create a SkillRequest
     * const skillRequest = await prisma.skillRequest.upsert({
     *   create: {
     *     // ... data to create a SkillRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SkillRequest we want to update
     *   }
     * })
     */
    upsert<T extends SkillRequestUpsertArgs>(args: SelectSubset<T, SkillRequestUpsertArgs<ExtArgs>>): Prisma__SkillRequestClient<$Result.GetResult<Prisma.$SkillRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SkillRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillRequestCountArgs} args - Arguments to filter SkillRequests to count.
     * @example
     * // Count the number of SkillRequests
     * const count = await prisma.skillRequest.count({
     *   where: {
     *     // ... the filter for the SkillRequests we want to count
     *   }
     * })
    **/
    count<T extends SkillRequestCountArgs>(
      args?: Subset<T, SkillRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SkillRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SkillRequestAggregateArgs>(args: Subset<T, SkillRequestAggregateArgs>): Prisma.PrismaPromise<GetSkillRequestAggregateType<T>>

    /**
     * Group by SkillRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillRequestGroupByArgs} args - Group by arguments.
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
      T extends SkillRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillRequestGroupByArgs['orderBy'] }
        : { orderBy?: SkillRequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SkillRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SkillRequest model
   */
  readonly fields: SkillRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SkillRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkillRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SkillRequest model
   */
  interface SkillRequestFieldRefs {
    readonly id: FieldRef<"SkillRequest", 'String'>
    readonly name: FieldRef<"SkillRequest", 'String'>
    readonly employerId: FieldRef<"SkillRequest", 'String'>
    readonly status: FieldRef<"SkillRequest", 'SkillRequestStatus'>
    readonly createdAt: FieldRef<"SkillRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"SkillRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SkillRequest findUnique
   */
  export type SkillRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillRequest
     */
    select?: SkillRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillRequest
     */
    omit?: SkillRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillRequestInclude<ExtArgs> | null
    /**
     * Filter, which SkillRequest to fetch.
     */
    where: SkillRequestWhereUniqueInput
  }

  /**
   * SkillRequest findUniqueOrThrow
   */
  export type SkillRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillRequest
     */
    select?: SkillRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillRequest
     */
    omit?: SkillRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillRequestInclude<ExtArgs> | null
    /**
     * Filter, which SkillRequest to fetch.
     */
    where: SkillRequestWhereUniqueInput
  }

  /**
   * SkillRequest findFirst
   */
  export type SkillRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillRequest
     */
    select?: SkillRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillRequest
     */
    omit?: SkillRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillRequestInclude<ExtArgs> | null
    /**
     * Filter, which SkillRequest to fetch.
     */
    where?: SkillRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillRequests to fetch.
     */
    orderBy?: SkillRequestOrderByWithRelationInput | SkillRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SkillRequests.
     */
    cursor?: SkillRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SkillRequests.
     */
    distinct?: SkillRequestScalarFieldEnum | SkillRequestScalarFieldEnum[]
  }

  /**
   * SkillRequest findFirstOrThrow
   */
  export type SkillRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillRequest
     */
    select?: SkillRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillRequest
     */
    omit?: SkillRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillRequestInclude<ExtArgs> | null
    /**
     * Filter, which SkillRequest to fetch.
     */
    where?: SkillRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillRequests to fetch.
     */
    orderBy?: SkillRequestOrderByWithRelationInput | SkillRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SkillRequests.
     */
    cursor?: SkillRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SkillRequests.
     */
    distinct?: SkillRequestScalarFieldEnum | SkillRequestScalarFieldEnum[]
  }

  /**
   * SkillRequest findMany
   */
  export type SkillRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillRequest
     */
    select?: SkillRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillRequest
     */
    omit?: SkillRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillRequestInclude<ExtArgs> | null
    /**
     * Filter, which SkillRequests to fetch.
     */
    where?: SkillRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillRequests to fetch.
     */
    orderBy?: SkillRequestOrderByWithRelationInput | SkillRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SkillRequests.
     */
    cursor?: SkillRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SkillRequests.
     */
    distinct?: SkillRequestScalarFieldEnum | SkillRequestScalarFieldEnum[]
  }

  /**
   * SkillRequest create
   */
  export type SkillRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillRequest
     */
    select?: SkillRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillRequest
     */
    omit?: SkillRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a SkillRequest.
     */
    data: XOR<SkillRequestCreateInput, SkillRequestUncheckedCreateInput>
  }

  /**
   * SkillRequest createMany
   */
  export type SkillRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SkillRequests.
     */
    data: SkillRequestCreateManyInput | SkillRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SkillRequest createManyAndReturn
   */
  export type SkillRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillRequest
     */
    select?: SkillRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SkillRequest
     */
    omit?: SkillRequestOmit<ExtArgs> | null
    /**
     * The data used to create many SkillRequests.
     */
    data: SkillRequestCreateManyInput | SkillRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SkillRequest update
   */
  export type SkillRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillRequest
     */
    select?: SkillRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillRequest
     */
    omit?: SkillRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a SkillRequest.
     */
    data: XOR<SkillRequestUpdateInput, SkillRequestUncheckedUpdateInput>
    /**
     * Choose, which SkillRequest to update.
     */
    where: SkillRequestWhereUniqueInput
  }

  /**
   * SkillRequest updateMany
   */
  export type SkillRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SkillRequests.
     */
    data: XOR<SkillRequestUpdateManyMutationInput, SkillRequestUncheckedUpdateManyInput>
    /**
     * Filter which SkillRequests to update
     */
    where?: SkillRequestWhereInput
    /**
     * Limit how many SkillRequests to update.
     */
    limit?: number
  }

  /**
   * SkillRequest updateManyAndReturn
   */
  export type SkillRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillRequest
     */
    select?: SkillRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SkillRequest
     */
    omit?: SkillRequestOmit<ExtArgs> | null
    /**
     * The data used to update SkillRequests.
     */
    data: XOR<SkillRequestUpdateManyMutationInput, SkillRequestUncheckedUpdateManyInput>
    /**
     * Filter which SkillRequests to update
     */
    where?: SkillRequestWhereInput
    /**
     * Limit how many SkillRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SkillRequest upsert
   */
  export type SkillRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillRequest
     */
    select?: SkillRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillRequest
     */
    omit?: SkillRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the SkillRequest to update in case it exists.
     */
    where: SkillRequestWhereUniqueInput
    /**
     * In case the SkillRequest found by the `where` argument doesn't exist, create a new SkillRequest with this data.
     */
    create: XOR<SkillRequestCreateInput, SkillRequestUncheckedCreateInput>
    /**
     * In case the SkillRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkillRequestUpdateInput, SkillRequestUncheckedUpdateInput>
  }

  /**
   * SkillRequest delete
   */
  export type SkillRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillRequest
     */
    select?: SkillRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillRequest
     */
    omit?: SkillRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillRequestInclude<ExtArgs> | null
    /**
     * Filter which SkillRequest to delete.
     */
    where: SkillRequestWhereUniqueInput
  }

  /**
   * SkillRequest deleteMany
   */
  export type SkillRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SkillRequests to delete
     */
    where?: SkillRequestWhereInput
    /**
     * Limit how many SkillRequests to delete.
     */
    limit?: number
  }

  /**
   * SkillRequest without action
   */
  export type SkillRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillRequest
     */
    select?: SkillRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillRequest
     */
    omit?: SkillRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillRequestInclude<ExtArgs> | null
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
    firebaseUid: 'firebaseUid',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    phone: 'phone',
    phoneVerified: 'phoneVerified',
    role: 'role',
    bio: 'bio',
    companyName: 'companyName',
    jobTitle: 'jobTitle',
    location: 'location',
    avatarUrl: 'avatarUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SkillScalarFieldEnum: {
    id: 'id',
    name: 'name',
    category: 'category',
    createdAt: 'createdAt'
  };

  export type SkillScalarFieldEnum = (typeof SkillScalarFieldEnum)[keyof typeof SkillScalarFieldEnum]


  export const UserSkillScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    skillId: 'skillId',
    experienceLevel: 'experienceLevel',
    createdAt: 'createdAt'
  };

  export type UserSkillScalarFieldEnum = (typeof UserSkillScalarFieldEnum)[keyof typeof UserSkillScalarFieldEnum]


  export const OpportunityScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    type: 'type',
    location: 'location',
    payment: 'payment',
    paymentType: 'paymentType',
    deadline: 'deadline',
    employerId: 'employerId',
    status: 'status',
    verified: 'verified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OpportunityScalarFieldEnum = (typeof OpportunityScalarFieldEnum)[keyof typeof OpportunityScalarFieldEnum]


  export const OpportunitySkillScalarFieldEnum: {
    id: 'id',
    opportunityId: 'opportunityId',
    skillId: 'skillId'
  };

  export type OpportunitySkillScalarFieldEnum = (typeof OpportunitySkillScalarFieldEnum)[keyof typeof OpportunitySkillScalarFieldEnum]


  export const ApplicationScalarFieldEnum: {
    id: 'id',
    opportunityId: 'opportunityId',
    applicantId: 'applicantId',
    message: 'message',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ApplicationScalarFieldEnum = (typeof ApplicationScalarFieldEnum)[keyof typeof ApplicationScalarFieldEnum]


  export const PhoneOtpScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    phone: 'phone',
    codeHash: 'codeHash',
    attempts: 'attempts',
    expiresAt: 'expiresAt',
    used: 'used',
    createdAt: 'createdAt'
  };

  export type PhoneOtpScalarFieldEnum = (typeof PhoneOtpScalarFieldEnum)[keyof typeof PhoneOtpScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    applicationId: 'applicationId',
    reviewerId: 'reviewerId',
    revieweeId: 'revieweeId',
    rating: 'rating',
    comment: 'comment',
    createdAt: 'createdAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const MatchExplanationScalarFieldEnum: {
    id: 'id',
    graduateId: 'graduateId',
    opportunityId: 'opportunityId',
    explanation: 'explanation',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MatchExplanationScalarFieldEnum = (typeof MatchExplanationScalarFieldEnum)[keyof typeof MatchExplanationScalarFieldEnum]


  export const SkillRequestScalarFieldEnum: {
    id: 'id',
    name: 'name',
    employerId: 'employerId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SkillRequestScalarFieldEnum = (typeof SkillRequestScalarFieldEnum)[keyof typeof SkillRequestScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ExperienceLevel'
   */
  export type EnumExperienceLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExperienceLevel'>
    


  /**
   * Reference to a field of type 'ExperienceLevel[]'
   */
  export type ListEnumExperienceLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExperienceLevel[]'>
    


  /**
   * Reference to a field of type 'OpportunityType'
   */
  export type EnumOpportunityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OpportunityType'>
    


  /**
   * Reference to a field of type 'OpportunityType[]'
   */
  export type ListEnumOpportunityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OpportunityType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'PaymentType'
   */
  export type EnumPaymentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentType'>
    


  /**
   * Reference to a field of type 'PaymentType[]'
   */
  export type ListEnumPaymentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentType[]'>
    


  /**
   * Reference to a field of type 'OpportunityStatus'
   */
  export type EnumOpportunityStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OpportunityStatus'>
    


  /**
   * Reference to a field of type 'OpportunityStatus[]'
   */
  export type ListEnumOpportunityStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OpportunityStatus[]'>
    


  /**
   * Reference to a field of type 'ApplicationStatus'
   */
  export type EnumApplicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApplicationStatus'>
    


  /**
   * Reference to a field of type 'ApplicationStatus[]'
   */
  export type ListEnumApplicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApplicationStatus[]'>
    


  /**
   * Reference to a field of type 'SkillRequestStatus'
   */
  export type EnumSkillRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SkillRequestStatus'>
    


  /**
   * Reference to a field of type 'SkillRequestStatus[]'
   */
  export type ListEnumSkillRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SkillRequestStatus[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    firebaseUid?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    phone?: StringNullableFilter<"User"> | string | null
    phoneVerified?: BoolFilter<"User"> | boolean
    role?: EnumRoleFilter<"User"> | $Enums.Role
    bio?: StringNullableFilter<"User"> | string | null
    companyName?: StringNullableFilter<"User"> | string | null
    jobTitle?: StringNullableFilter<"User"> | string | null
    location?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    skills?: UserSkillListRelationFilter
    opportunities?: OpportunityListRelationFilter
    applications?: ApplicationListRelationFilter
    matchExplanations?: MatchExplanationListRelationFilter
    skillRequests?: SkillRequestListRelationFilter
    otps?: PhoneOtpListRelationFilter
    reviewsGiven?: ReviewListRelationFilter
    reviewsReceived?: ReviewListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firebaseUid?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    phone?: SortOrderInput | SortOrder
    phoneVerified?: SortOrder
    role?: SortOrder
    bio?: SortOrderInput | SortOrder
    companyName?: SortOrderInput | SortOrder
    jobTitle?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    skills?: UserSkillOrderByRelationAggregateInput
    opportunities?: OpportunityOrderByRelationAggregateInput
    applications?: ApplicationOrderByRelationAggregateInput
    matchExplanations?: MatchExplanationOrderByRelationAggregateInput
    skillRequests?: SkillRequestOrderByRelationAggregateInput
    otps?: PhoneOtpOrderByRelationAggregateInput
    reviewsGiven?: ReviewOrderByRelationAggregateInput
    reviewsReceived?: ReviewOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    firebaseUid?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    phone?: StringNullableFilter<"User"> | string | null
    phoneVerified?: BoolFilter<"User"> | boolean
    role?: EnumRoleFilter<"User"> | $Enums.Role
    bio?: StringNullableFilter<"User"> | string | null
    companyName?: StringNullableFilter<"User"> | string | null
    jobTitle?: StringNullableFilter<"User"> | string | null
    location?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    skills?: UserSkillListRelationFilter
    opportunities?: OpportunityListRelationFilter
    applications?: ApplicationListRelationFilter
    matchExplanations?: MatchExplanationListRelationFilter
    skillRequests?: SkillRequestListRelationFilter
    otps?: PhoneOtpListRelationFilter
    reviewsGiven?: ReviewListRelationFilter
    reviewsReceived?: ReviewListRelationFilter
  }, "id" | "firebaseUid" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firebaseUid?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    phone?: SortOrderInput | SortOrder
    phoneVerified?: SortOrder
    role?: SortOrder
    bio?: SortOrderInput | SortOrder
    companyName?: SortOrderInput | SortOrder
    jobTitle?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    firebaseUid?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    phoneVerified?: BoolWithAggregatesFilter<"User"> | boolean
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    companyName?: StringNullableWithAggregatesFilter<"User"> | string | null
    jobTitle?: StringNullableWithAggregatesFilter<"User"> | string | null
    location?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SkillWhereInput = {
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    id?: StringFilter<"Skill"> | string
    name?: StringFilter<"Skill"> | string
    category?: StringNullableFilter<"Skill"> | string | null
    createdAt?: DateTimeFilter<"Skill"> | Date | string
    users?: UserSkillListRelationFilter
    opportunities?: OpportunitySkillListRelationFilter
  }

  export type SkillOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    users?: UserSkillOrderByRelationAggregateInput
    opportunities?: OpportunitySkillOrderByRelationAggregateInput
  }

  export type SkillWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    category?: StringNullableFilter<"Skill"> | string | null
    createdAt?: DateTimeFilter<"Skill"> | Date | string
    users?: UserSkillListRelationFilter
    opportunities?: OpportunitySkillListRelationFilter
  }, "id" | "name">

  export type SkillOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SkillCountOrderByAggregateInput
    _max?: SkillMaxOrderByAggregateInput
    _min?: SkillMinOrderByAggregateInput
  }

  export type SkillScalarWhereWithAggregatesInput = {
    AND?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    OR?: SkillScalarWhereWithAggregatesInput[]
    NOT?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Skill"> | string
    name?: StringWithAggregatesFilter<"Skill"> | string
    category?: StringNullableWithAggregatesFilter<"Skill"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Skill"> | Date | string
  }

  export type UserSkillWhereInput = {
    AND?: UserSkillWhereInput | UserSkillWhereInput[]
    OR?: UserSkillWhereInput[]
    NOT?: UserSkillWhereInput | UserSkillWhereInput[]
    id?: StringFilter<"UserSkill"> | string
    userId?: StringFilter<"UserSkill"> | string
    skillId?: StringFilter<"UserSkill"> | string
    experienceLevel?: EnumExperienceLevelFilter<"UserSkill"> | $Enums.ExperienceLevel
    createdAt?: DateTimeFilter<"UserSkill"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    skill?: XOR<SkillScalarRelationFilter, SkillWhereInput>
  }

  export type UserSkillOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    skillId?: SortOrder
    experienceLevel?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    skill?: SkillOrderByWithRelationInput
  }

  export type UserSkillWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_skillId?: UserSkillUserIdSkillIdCompoundUniqueInput
    AND?: UserSkillWhereInput | UserSkillWhereInput[]
    OR?: UserSkillWhereInput[]
    NOT?: UserSkillWhereInput | UserSkillWhereInput[]
    userId?: StringFilter<"UserSkill"> | string
    skillId?: StringFilter<"UserSkill"> | string
    experienceLevel?: EnumExperienceLevelFilter<"UserSkill"> | $Enums.ExperienceLevel
    createdAt?: DateTimeFilter<"UserSkill"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    skill?: XOR<SkillScalarRelationFilter, SkillWhereInput>
  }, "id" | "userId_skillId">

  export type UserSkillOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    skillId?: SortOrder
    experienceLevel?: SortOrder
    createdAt?: SortOrder
    _count?: UserSkillCountOrderByAggregateInput
    _max?: UserSkillMaxOrderByAggregateInput
    _min?: UserSkillMinOrderByAggregateInput
  }

  export type UserSkillScalarWhereWithAggregatesInput = {
    AND?: UserSkillScalarWhereWithAggregatesInput | UserSkillScalarWhereWithAggregatesInput[]
    OR?: UserSkillScalarWhereWithAggregatesInput[]
    NOT?: UserSkillScalarWhereWithAggregatesInput | UserSkillScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserSkill"> | string
    userId?: StringWithAggregatesFilter<"UserSkill"> | string
    skillId?: StringWithAggregatesFilter<"UserSkill"> | string
    experienceLevel?: EnumExperienceLevelWithAggregatesFilter<"UserSkill"> | $Enums.ExperienceLevel
    createdAt?: DateTimeWithAggregatesFilter<"UserSkill"> | Date | string
  }

  export type OpportunityWhereInput = {
    AND?: OpportunityWhereInput | OpportunityWhereInput[]
    OR?: OpportunityWhereInput[]
    NOT?: OpportunityWhereInput | OpportunityWhereInput[]
    id?: StringFilter<"Opportunity"> | string
    title?: StringFilter<"Opportunity"> | string
    description?: StringFilter<"Opportunity"> | string
    type?: EnumOpportunityTypeFilter<"Opportunity"> | $Enums.OpportunityType
    location?: StringFilter<"Opportunity"> | string
    payment?: IntNullableFilter<"Opportunity"> | number | null
    paymentType?: EnumPaymentTypeFilter<"Opportunity"> | $Enums.PaymentType
    deadline?: DateTimeNullableFilter<"Opportunity"> | Date | string | null
    employerId?: StringFilter<"Opportunity"> | string
    status?: EnumOpportunityStatusFilter<"Opportunity"> | $Enums.OpportunityStatus
    verified?: BoolFilter<"Opportunity"> | boolean
    createdAt?: DateTimeFilter<"Opportunity"> | Date | string
    updatedAt?: DateTimeFilter<"Opportunity"> | Date | string
    employer?: XOR<UserScalarRelationFilter, UserWhereInput>
    skills?: OpportunitySkillListRelationFilter
    applications?: ApplicationListRelationFilter
    matchExplanations?: MatchExplanationListRelationFilter
  }

  export type OpportunityOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    location?: SortOrder
    payment?: SortOrderInput | SortOrder
    paymentType?: SortOrder
    deadline?: SortOrderInput | SortOrder
    employerId?: SortOrder
    status?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    employer?: UserOrderByWithRelationInput
    skills?: OpportunitySkillOrderByRelationAggregateInput
    applications?: ApplicationOrderByRelationAggregateInput
    matchExplanations?: MatchExplanationOrderByRelationAggregateInput
  }

  export type OpportunityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OpportunityWhereInput | OpportunityWhereInput[]
    OR?: OpportunityWhereInput[]
    NOT?: OpportunityWhereInput | OpportunityWhereInput[]
    title?: StringFilter<"Opportunity"> | string
    description?: StringFilter<"Opportunity"> | string
    type?: EnumOpportunityTypeFilter<"Opportunity"> | $Enums.OpportunityType
    location?: StringFilter<"Opportunity"> | string
    payment?: IntNullableFilter<"Opportunity"> | number | null
    paymentType?: EnumPaymentTypeFilter<"Opportunity"> | $Enums.PaymentType
    deadline?: DateTimeNullableFilter<"Opportunity"> | Date | string | null
    employerId?: StringFilter<"Opportunity"> | string
    status?: EnumOpportunityStatusFilter<"Opportunity"> | $Enums.OpportunityStatus
    verified?: BoolFilter<"Opportunity"> | boolean
    createdAt?: DateTimeFilter<"Opportunity"> | Date | string
    updatedAt?: DateTimeFilter<"Opportunity"> | Date | string
    employer?: XOR<UserScalarRelationFilter, UserWhereInput>
    skills?: OpportunitySkillListRelationFilter
    applications?: ApplicationListRelationFilter
    matchExplanations?: MatchExplanationListRelationFilter
  }, "id">

  export type OpportunityOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    location?: SortOrder
    payment?: SortOrderInput | SortOrder
    paymentType?: SortOrder
    deadline?: SortOrderInput | SortOrder
    employerId?: SortOrder
    status?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OpportunityCountOrderByAggregateInput
    _avg?: OpportunityAvgOrderByAggregateInput
    _max?: OpportunityMaxOrderByAggregateInput
    _min?: OpportunityMinOrderByAggregateInput
    _sum?: OpportunitySumOrderByAggregateInput
  }

  export type OpportunityScalarWhereWithAggregatesInput = {
    AND?: OpportunityScalarWhereWithAggregatesInput | OpportunityScalarWhereWithAggregatesInput[]
    OR?: OpportunityScalarWhereWithAggregatesInput[]
    NOT?: OpportunityScalarWhereWithAggregatesInput | OpportunityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Opportunity"> | string
    title?: StringWithAggregatesFilter<"Opportunity"> | string
    description?: StringWithAggregatesFilter<"Opportunity"> | string
    type?: EnumOpportunityTypeWithAggregatesFilter<"Opportunity"> | $Enums.OpportunityType
    location?: StringWithAggregatesFilter<"Opportunity"> | string
    payment?: IntNullableWithAggregatesFilter<"Opportunity"> | number | null
    paymentType?: EnumPaymentTypeWithAggregatesFilter<"Opportunity"> | $Enums.PaymentType
    deadline?: DateTimeNullableWithAggregatesFilter<"Opportunity"> | Date | string | null
    employerId?: StringWithAggregatesFilter<"Opportunity"> | string
    status?: EnumOpportunityStatusWithAggregatesFilter<"Opportunity"> | $Enums.OpportunityStatus
    verified?: BoolWithAggregatesFilter<"Opportunity"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Opportunity"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Opportunity"> | Date | string
  }

  export type OpportunitySkillWhereInput = {
    AND?: OpportunitySkillWhereInput | OpportunitySkillWhereInput[]
    OR?: OpportunitySkillWhereInput[]
    NOT?: OpportunitySkillWhereInput | OpportunitySkillWhereInput[]
    id?: StringFilter<"OpportunitySkill"> | string
    opportunityId?: StringFilter<"OpportunitySkill"> | string
    skillId?: StringFilter<"OpportunitySkill"> | string
    opportunity?: XOR<OpportunityScalarRelationFilter, OpportunityWhereInput>
    skill?: XOR<SkillScalarRelationFilter, SkillWhereInput>
  }

  export type OpportunitySkillOrderByWithRelationInput = {
    id?: SortOrder
    opportunityId?: SortOrder
    skillId?: SortOrder
    opportunity?: OpportunityOrderByWithRelationInput
    skill?: SkillOrderByWithRelationInput
  }

  export type OpportunitySkillWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    opportunityId_skillId?: OpportunitySkillOpportunityIdSkillIdCompoundUniqueInput
    AND?: OpportunitySkillWhereInput | OpportunitySkillWhereInput[]
    OR?: OpportunitySkillWhereInput[]
    NOT?: OpportunitySkillWhereInput | OpportunitySkillWhereInput[]
    opportunityId?: StringFilter<"OpportunitySkill"> | string
    skillId?: StringFilter<"OpportunitySkill"> | string
    opportunity?: XOR<OpportunityScalarRelationFilter, OpportunityWhereInput>
    skill?: XOR<SkillScalarRelationFilter, SkillWhereInput>
  }, "id" | "opportunityId_skillId">

  export type OpportunitySkillOrderByWithAggregationInput = {
    id?: SortOrder
    opportunityId?: SortOrder
    skillId?: SortOrder
    _count?: OpportunitySkillCountOrderByAggregateInput
    _max?: OpportunitySkillMaxOrderByAggregateInput
    _min?: OpportunitySkillMinOrderByAggregateInput
  }

  export type OpportunitySkillScalarWhereWithAggregatesInput = {
    AND?: OpportunitySkillScalarWhereWithAggregatesInput | OpportunitySkillScalarWhereWithAggregatesInput[]
    OR?: OpportunitySkillScalarWhereWithAggregatesInput[]
    NOT?: OpportunitySkillScalarWhereWithAggregatesInput | OpportunitySkillScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OpportunitySkill"> | string
    opportunityId?: StringWithAggregatesFilter<"OpportunitySkill"> | string
    skillId?: StringWithAggregatesFilter<"OpportunitySkill"> | string
  }

  export type ApplicationWhereInput = {
    AND?: ApplicationWhereInput | ApplicationWhereInput[]
    OR?: ApplicationWhereInput[]
    NOT?: ApplicationWhereInput | ApplicationWhereInput[]
    id?: StringFilter<"Application"> | string
    opportunityId?: StringFilter<"Application"> | string
    applicantId?: StringFilter<"Application"> | string
    message?: StringFilter<"Application"> | string
    status?: EnumApplicationStatusFilter<"Application"> | $Enums.ApplicationStatus
    createdAt?: DateTimeFilter<"Application"> | Date | string
    updatedAt?: DateTimeFilter<"Application"> | Date | string
    opportunity?: XOR<OpportunityScalarRelationFilter, OpportunityWhereInput>
    applicant?: XOR<UserScalarRelationFilter, UserWhereInput>
    reviews?: ReviewListRelationFilter
  }

  export type ApplicationOrderByWithRelationInput = {
    id?: SortOrder
    opportunityId?: SortOrder
    applicantId?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    opportunity?: OpportunityOrderByWithRelationInput
    applicant?: UserOrderByWithRelationInput
    reviews?: ReviewOrderByRelationAggregateInput
  }

  export type ApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    opportunityId_applicantId?: ApplicationOpportunityIdApplicantIdCompoundUniqueInput
    AND?: ApplicationWhereInput | ApplicationWhereInput[]
    OR?: ApplicationWhereInput[]
    NOT?: ApplicationWhereInput | ApplicationWhereInput[]
    opportunityId?: StringFilter<"Application"> | string
    applicantId?: StringFilter<"Application"> | string
    message?: StringFilter<"Application"> | string
    status?: EnumApplicationStatusFilter<"Application"> | $Enums.ApplicationStatus
    createdAt?: DateTimeFilter<"Application"> | Date | string
    updatedAt?: DateTimeFilter<"Application"> | Date | string
    opportunity?: XOR<OpportunityScalarRelationFilter, OpportunityWhereInput>
    applicant?: XOR<UserScalarRelationFilter, UserWhereInput>
    reviews?: ReviewListRelationFilter
  }, "id" | "opportunityId_applicantId">

  export type ApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    opportunityId?: SortOrder
    applicantId?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ApplicationCountOrderByAggregateInput
    _max?: ApplicationMaxOrderByAggregateInput
    _min?: ApplicationMinOrderByAggregateInput
  }

  export type ApplicationScalarWhereWithAggregatesInput = {
    AND?: ApplicationScalarWhereWithAggregatesInput | ApplicationScalarWhereWithAggregatesInput[]
    OR?: ApplicationScalarWhereWithAggregatesInput[]
    NOT?: ApplicationScalarWhereWithAggregatesInput | ApplicationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Application"> | string
    opportunityId?: StringWithAggregatesFilter<"Application"> | string
    applicantId?: StringWithAggregatesFilter<"Application"> | string
    message?: StringWithAggregatesFilter<"Application"> | string
    status?: EnumApplicationStatusWithAggregatesFilter<"Application"> | $Enums.ApplicationStatus
    createdAt?: DateTimeWithAggregatesFilter<"Application"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Application"> | Date | string
  }

  export type PhoneOtpWhereInput = {
    AND?: PhoneOtpWhereInput | PhoneOtpWhereInput[]
    OR?: PhoneOtpWhereInput[]
    NOT?: PhoneOtpWhereInput | PhoneOtpWhereInput[]
    id?: StringFilter<"PhoneOtp"> | string
    userId?: StringFilter<"PhoneOtp"> | string
    phone?: StringFilter<"PhoneOtp"> | string
    codeHash?: StringFilter<"PhoneOtp"> | string
    attempts?: IntFilter<"PhoneOtp"> | number
    expiresAt?: DateTimeFilter<"PhoneOtp"> | Date | string
    used?: BoolFilter<"PhoneOtp"> | boolean
    createdAt?: DateTimeFilter<"PhoneOtp"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PhoneOtpOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    phone?: SortOrder
    codeHash?: SortOrder
    attempts?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PhoneOtpWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PhoneOtpWhereInput | PhoneOtpWhereInput[]
    OR?: PhoneOtpWhereInput[]
    NOT?: PhoneOtpWhereInput | PhoneOtpWhereInput[]
    userId?: StringFilter<"PhoneOtp"> | string
    phone?: StringFilter<"PhoneOtp"> | string
    codeHash?: StringFilter<"PhoneOtp"> | string
    attempts?: IntFilter<"PhoneOtp"> | number
    expiresAt?: DateTimeFilter<"PhoneOtp"> | Date | string
    used?: BoolFilter<"PhoneOtp"> | boolean
    createdAt?: DateTimeFilter<"PhoneOtp"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PhoneOtpOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    phone?: SortOrder
    codeHash?: SortOrder
    attempts?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
    createdAt?: SortOrder
    _count?: PhoneOtpCountOrderByAggregateInput
    _avg?: PhoneOtpAvgOrderByAggregateInput
    _max?: PhoneOtpMaxOrderByAggregateInput
    _min?: PhoneOtpMinOrderByAggregateInput
    _sum?: PhoneOtpSumOrderByAggregateInput
  }

  export type PhoneOtpScalarWhereWithAggregatesInput = {
    AND?: PhoneOtpScalarWhereWithAggregatesInput | PhoneOtpScalarWhereWithAggregatesInput[]
    OR?: PhoneOtpScalarWhereWithAggregatesInput[]
    NOT?: PhoneOtpScalarWhereWithAggregatesInput | PhoneOtpScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PhoneOtp"> | string
    userId?: StringWithAggregatesFilter<"PhoneOtp"> | string
    phone?: StringWithAggregatesFilter<"PhoneOtp"> | string
    codeHash?: StringWithAggregatesFilter<"PhoneOtp"> | string
    attempts?: IntWithAggregatesFilter<"PhoneOtp"> | number
    expiresAt?: DateTimeWithAggregatesFilter<"PhoneOtp"> | Date | string
    used?: BoolWithAggregatesFilter<"PhoneOtp"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"PhoneOtp"> | Date | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: StringFilter<"Review"> | string
    applicationId?: StringFilter<"Review"> | string
    reviewerId?: StringFilter<"Review"> | string
    revieweeId?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    application?: XOR<ApplicationScalarRelationFilter, ApplicationWhereInput>
    reviewer?: XOR<UserScalarRelationFilter, UserWhereInput>
    reviewee?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    reviewerId?: SortOrder
    revieweeId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    application?: ApplicationOrderByWithRelationInput
    reviewer?: UserOrderByWithRelationInput
    reviewee?: UserOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    applicationId_reviewerId?: ReviewApplicationIdReviewerIdCompoundUniqueInput
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    applicationId?: StringFilter<"Review"> | string
    reviewerId?: StringFilter<"Review"> | string
    revieweeId?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    application?: XOR<ApplicationScalarRelationFilter, ApplicationWhereInput>
    reviewer?: XOR<UserScalarRelationFilter, UserWhereInput>
    reviewee?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "applicationId_reviewerId">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    reviewerId?: SortOrder
    revieweeId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Review"> | string
    applicationId?: StringWithAggregatesFilter<"Review"> | string
    reviewerId?: StringWithAggregatesFilter<"Review"> | string
    revieweeId?: StringWithAggregatesFilter<"Review"> | string
    rating?: IntWithAggregatesFilter<"Review"> | number
    comment?: StringNullableWithAggregatesFilter<"Review"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type MatchExplanationWhereInput = {
    AND?: MatchExplanationWhereInput | MatchExplanationWhereInput[]
    OR?: MatchExplanationWhereInput[]
    NOT?: MatchExplanationWhereInput | MatchExplanationWhereInput[]
    id?: StringFilter<"MatchExplanation"> | string
    graduateId?: StringFilter<"MatchExplanation"> | string
    opportunityId?: StringFilter<"MatchExplanation"> | string
    explanation?: StringFilter<"MatchExplanation"> | string
    createdAt?: DateTimeFilter<"MatchExplanation"> | Date | string
    updatedAt?: DateTimeFilter<"MatchExplanation"> | Date | string
    graduate?: XOR<UserScalarRelationFilter, UserWhereInput>
    opportunity?: XOR<OpportunityScalarRelationFilter, OpportunityWhereInput>
  }

  export type MatchExplanationOrderByWithRelationInput = {
    id?: SortOrder
    graduateId?: SortOrder
    opportunityId?: SortOrder
    explanation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    graduate?: UserOrderByWithRelationInput
    opportunity?: OpportunityOrderByWithRelationInput
  }

  export type MatchExplanationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    graduateId_opportunityId?: MatchExplanationGraduateIdOpportunityIdCompoundUniqueInput
    AND?: MatchExplanationWhereInput | MatchExplanationWhereInput[]
    OR?: MatchExplanationWhereInput[]
    NOT?: MatchExplanationWhereInput | MatchExplanationWhereInput[]
    graduateId?: StringFilter<"MatchExplanation"> | string
    opportunityId?: StringFilter<"MatchExplanation"> | string
    explanation?: StringFilter<"MatchExplanation"> | string
    createdAt?: DateTimeFilter<"MatchExplanation"> | Date | string
    updatedAt?: DateTimeFilter<"MatchExplanation"> | Date | string
    graduate?: XOR<UserScalarRelationFilter, UserWhereInput>
    opportunity?: XOR<OpportunityScalarRelationFilter, OpportunityWhereInput>
  }, "id" | "graduateId_opportunityId">

  export type MatchExplanationOrderByWithAggregationInput = {
    id?: SortOrder
    graduateId?: SortOrder
    opportunityId?: SortOrder
    explanation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MatchExplanationCountOrderByAggregateInput
    _max?: MatchExplanationMaxOrderByAggregateInput
    _min?: MatchExplanationMinOrderByAggregateInput
  }

  export type MatchExplanationScalarWhereWithAggregatesInput = {
    AND?: MatchExplanationScalarWhereWithAggregatesInput | MatchExplanationScalarWhereWithAggregatesInput[]
    OR?: MatchExplanationScalarWhereWithAggregatesInput[]
    NOT?: MatchExplanationScalarWhereWithAggregatesInput | MatchExplanationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MatchExplanation"> | string
    graduateId?: StringWithAggregatesFilter<"MatchExplanation"> | string
    opportunityId?: StringWithAggregatesFilter<"MatchExplanation"> | string
    explanation?: StringWithAggregatesFilter<"MatchExplanation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MatchExplanation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MatchExplanation"> | Date | string
  }

  export type SkillRequestWhereInput = {
    AND?: SkillRequestWhereInput | SkillRequestWhereInput[]
    OR?: SkillRequestWhereInput[]
    NOT?: SkillRequestWhereInput | SkillRequestWhereInput[]
    id?: StringFilter<"SkillRequest"> | string
    name?: StringFilter<"SkillRequest"> | string
    employerId?: StringFilter<"SkillRequest"> | string
    status?: EnumSkillRequestStatusFilter<"SkillRequest"> | $Enums.SkillRequestStatus
    createdAt?: DateTimeFilter<"SkillRequest"> | Date | string
    updatedAt?: DateTimeFilter<"SkillRequest"> | Date | string
    employer?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SkillRequestOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    employerId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    employer?: UserOrderByWithRelationInput
  }

  export type SkillRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SkillRequestWhereInput | SkillRequestWhereInput[]
    OR?: SkillRequestWhereInput[]
    NOT?: SkillRequestWhereInput | SkillRequestWhereInput[]
    name?: StringFilter<"SkillRequest"> | string
    employerId?: StringFilter<"SkillRequest"> | string
    status?: EnumSkillRequestStatusFilter<"SkillRequest"> | $Enums.SkillRequestStatus
    createdAt?: DateTimeFilter<"SkillRequest"> | Date | string
    updatedAt?: DateTimeFilter<"SkillRequest"> | Date | string
    employer?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SkillRequestOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    employerId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SkillRequestCountOrderByAggregateInput
    _max?: SkillRequestMaxOrderByAggregateInput
    _min?: SkillRequestMinOrderByAggregateInput
  }

  export type SkillRequestScalarWhereWithAggregatesInput = {
    AND?: SkillRequestScalarWhereWithAggregatesInput | SkillRequestScalarWhereWithAggregatesInput[]
    OR?: SkillRequestScalarWhereWithAggregatesInput[]
    NOT?: SkillRequestScalarWhereWithAggregatesInput | SkillRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SkillRequest"> | string
    name?: StringWithAggregatesFilter<"SkillRequest"> | string
    employerId?: StringWithAggregatesFilter<"SkillRequest"> | string
    status?: EnumSkillRequestStatusWithAggregatesFilter<"SkillRequest"> | $Enums.SkillRequestStatus
    createdAt?: DateTimeWithAggregatesFilter<"SkillRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SkillRequest"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    firebaseUid: string
    name: string
    email: string
    emailVerified?: boolean
    phone?: string | null
    phoneVerified?: boolean
    role?: $Enums.Role
    bio?: string | null
    companyName?: string | null
    jobTitle?: string | null
    location?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: UserSkillCreateNestedManyWithoutUserInput
    opportunities?: OpportunityCreateNestedManyWithoutEmployerInput
    applications?: ApplicationCreateNestedManyWithoutApplicantInput
    matchExplanations?: MatchExplanationCreateNestedManyWithoutGraduateInput
    skillRequests?: SkillRequestCreateNestedManyWithoutEmployerInput
    otps?: PhoneOtpCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewCreateNestedManyWithoutRevieweeInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    firebaseUid: string
    name: string
    email: string
    emailVerified?: boolean
    phone?: string | null
    phoneVerified?: boolean
    role?: $Enums.Role
    bio?: string | null
    companyName?: string | null
    jobTitle?: string | null
    location?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: UserSkillUncheckedCreateNestedManyWithoutUserInput
    opportunities?: OpportunityUncheckedCreateNestedManyWithoutEmployerInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutApplicantInput
    matchExplanations?: MatchExplanationUncheckedCreateNestedManyWithoutGraduateInput
    skillRequests?: SkillRequestUncheckedCreateNestedManyWithoutEmployerInput
    otps?: PhoneOtpUncheckedCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutRevieweeInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: UserSkillUpdateManyWithoutUserNestedInput
    opportunities?: OpportunityUpdateManyWithoutEmployerNestedInput
    applications?: ApplicationUpdateManyWithoutApplicantNestedInput
    matchExplanations?: MatchExplanationUpdateManyWithoutGraduateNestedInput
    skillRequests?: SkillRequestUpdateManyWithoutEmployerNestedInput
    otps?: PhoneOtpUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutRevieweeNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: UserSkillUncheckedUpdateManyWithoutUserNestedInput
    opportunities?: OpportunityUncheckedUpdateManyWithoutEmployerNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutApplicantNestedInput
    matchExplanations?: MatchExplanationUncheckedUpdateManyWithoutGraduateNestedInput
    skillRequests?: SkillRequestUncheckedUpdateManyWithoutEmployerNestedInput
    otps?: PhoneOtpUncheckedUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutRevieweeNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    firebaseUid: string
    name: string
    email: string
    emailVerified?: boolean
    phone?: string | null
    phoneVerified?: boolean
    role?: $Enums.Role
    bio?: string | null
    companyName?: string | null
    jobTitle?: string | null
    location?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillCreateInput = {
    id?: string
    name: string
    category?: string | null
    createdAt?: Date | string
    users?: UserSkillCreateNestedManyWithoutSkillInput
    opportunities?: OpportunitySkillCreateNestedManyWithoutSkillInput
  }

  export type SkillUncheckedCreateInput = {
    id?: string
    name: string
    category?: string | null
    createdAt?: Date | string
    users?: UserSkillUncheckedCreateNestedManyWithoutSkillInput
    opportunities?: OpportunitySkillUncheckedCreateNestedManyWithoutSkillInput
  }

  export type SkillUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserSkillUpdateManyWithoutSkillNestedInput
    opportunities?: OpportunitySkillUpdateManyWithoutSkillNestedInput
  }

  export type SkillUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserSkillUncheckedUpdateManyWithoutSkillNestedInput
    opportunities?: OpportunitySkillUncheckedUpdateManyWithoutSkillNestedInput
  }

  export type SkillCreateManyInput = {
    id?: string
    name: string
    category?: string | null
    createdAt?: Date | string
  }

  export type SkillUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSkillCreateInput = {
    id?: string
    experienceLevel?: $Enums.ExperienceLevel
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSkillsInput
    skill: SkillCreateNestedOneWithoutUsersInput
  }

  export type UserSkillUncheckedCreateInput = {
    id?: string
    userId: string
    skillId: string
    experienceLevel?: $Enums.ExperienceLevel
    createdAt?: Date | string
  }

  export type UserSkillUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    experienceLevel?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSkillsNestedInput
    skill?: SkillUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserSkillUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
    experienceLevel?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSkillCreateManyInput = {
    id?: string
    userId: string
    skillId: string
    experienceLevel?: $Enums.ExperienceLevel
    createdAt?: Date | string
  }

  export type UserSkillUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    experienceLevel?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSkillUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
    experienceLevel?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpportunityCreateInput = {
    id?: string
    title: string
    description: string
    type?: $Enums.OpportunityType
    location: string
    payment?: number | null
    paymentType?: $Enums.PaymentType
    deadline?: Date | string | null
    status?: $Enums.OpportunityStatus
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    employer: UserCreateNestedOneWithoutOpportunitiesInput
    skills?: OpportunitySkillCreateNestedManyWithoutOpportunityInput
    applications?: ApplicationCreateNestedManyWithoutOpportunityInput
    matchExplanations?: MatchExplanationCreateNestedManyWithoutOpportunityInput
  }

  export type OpportunityUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    type?: $Enums.OpportunityType
    location: string
    payment?: number | null
    paymentType?: $Enums.PaymentType
    deadline?: Date | string | null
    employerId: string
    status?: $Enums.OpportunityStatus
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: OpportunitySkillUncheckedCreateNestedManyWithoutOpportunityInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutOpportunityInput
    matchExplanations?: MatchExplanationUncheckedCreateNestedManyWithoutOpportunityInput
  }

  export type OpportunityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumOpportunityTypeFieldUpdateOperationsInput | $Enums.OpportunityType
    location?: StringFieldUpdateOperationsInput | string
    payment?: NullableIntFieldUpdateOperationsInput | number | null
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumOpportunityStatusFieldUpdateOperationsInput | $Enums.OpportunityStatus
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employer?: UserUpdateOneRequiredWithoutOpportunitiesNestedInput
    skills?: OpportunitySkillUpdateManyWithoutOpportunityNestedInput
    applications?: ApplicationUpdateManyWithoutOpportunityNestedInput
    matchExplanations?: MatchExplanationUpdateManyWithoutOpportunityNestedInput
  }

  export type OpportunityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumOpportunityTypeFieldUpdateOperationsInput | $Enums.OpportunityType
    location?: StringFieldUpdateOperationsInput | string
    payment?: NullableIntFieldUpdateOperationsInput | number | null
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employerId?: StringFieldUpdateOperationsInput | string
    status?: EnumOpportunityStatusFieldUpdateOperationsInput | $Enums.OpportunityStatus
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: OpportunitySkillUncheckedUpdateManyWithoutOpportunityNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutOpportunityNestedInput
    matchExplanations?: MatchExplanationUncheckedUpdateManyWithoutOpportunityNestedInput
  }

  export type OpportunityCreateManyInput = {
    id?: string
    title: string
    description: string
    type?: $Enums.OpportunityType
    location: string
    payment?: number | null
    paymentType?: $Enums.PaymentType
    deadline?: Date | string | null
    employerId: string
    status?: $Enums.OpportunityStatus
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OpportunityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumOpportunityTypeFieldUpdateOperationsInput | $Enums.OpportunityType
    location?: StringFieldUpdateOperationsInput | string
    payment?: NullableIntFieldUpdateOperationsInput | number | null
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumOpportunityStatusFieldUpdateOperationsInput | $Enums.OpportunityStatus
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpportunityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumOpportunityTypeFieldUpdateOperationsInput | $Enums.OpportunityType
    location?: StringFieldUpdateOperationsInput | string
    payment?: NullableIntFieldUpdateOperationsInput | number | null
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employerId?: StringFieldUpdateOperationsInput | string
    status?: EnumOpportunityStatusFieldUpdateOperationsInput | $Enums.OpportunityStatus
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpportunitySkillCreateInput = {
    id?: string
    opportunity: OpportunityCreateNestedOneWithoutSkillsInput
    skill: SkillCreateNestedOneWithoutOpportunitiesInput
  }

  export type OpportunitySkillUncheckedCreateInput = {
    id?: string
    opportunityId: string
    skillId: string
  }

  export type OpportunitySkillUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    opportunity?: OpportunityUpdateOneRequiredWithoutSkillsNestedInput
    skill?: SkillUpdateOneRequiredWithoutOpportunitiesNestedInput
  }

  export type OpportunitySkillUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    opportunityId?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
  }

  export type OpportunitySkillCreateManyInput = {
    id?: string
    opportunityId: string
    skillId: string
  }

  export type OpportunitySkillUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type OpportunitySkillUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    opportunityId?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
  }

  export type ApplicationCreateInput = {
    id?: string
    message: string
    status?: $Enums.ApplicationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    opportunity: OpportunityCreateNestedOneWithoutApplicationsInput
    applicant: UserCreateNestedOneWithoutApplicationsInput
    reviews?: ReviewCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateInput = {
    id?: string
    opportunityId: string
    applicantId: string
    message: string
    status?: $Enums.ApplicationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    opportunity?: OpportunityUpdateOneRequiredWithoutApplicationsNestedInput
    applicant?: UserUpdateOneRequiredWithoutApplicationsNestedInput
    reviews?: ReviewUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    opportunityId?: StringFieldUpdateOperationsInput | string
    applicantId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationCreateManyInput = {
    id?: string
    opportunityId: string
    applicantId: string
    message: string
    status?: $Enums.ApplicationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    opportunityId?: StringFieldUpdateOperationsInput | string
    applicantId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhoneOtpCreateInput = {
    id?: string
    phone: string
    codeHash: string
    attempts?: number
    expiresAt: Date | string
    used?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutOtpsInput
  }

  export type PhoneOtpUncheckedCreateInput = {
    id?: string
    userId: string
    phone: string
    codeHash: string
    attempts?: number
    expiresAt: Date | string
    used?: boolean
    createdAt?: Date | string
  }

  export type PhoneOtpUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    codeHash?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOtpsNestedInput
  }

  export type PhoneOtpUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    codeHash?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhoneOtpCreateManyInput = {
    id?: string
    userId: string
    phone: string
    codeHash: string
    attempts?: number
    expiresAt: Date | string
    used?: boolean
    createdAt?: Date | string
  }

  export type PhoneOtpUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    codeHash?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhoneOtpUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    codeHash?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    application: ApplicationCreateNestedOneWithoutReviewsInput
    reviewer: UserCreateNestedOneWithoutReviewsGivenInput
    reviewee: UserCreateNestedOneWithoutReviewsReceivedInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: string
    applicationId: string
    reviewerId: string
    revieweeId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    application?: ApplicationUpdateOneRequiredWithoutReviewsNestedInput
    reviewer?: UserUpdateOneRequiredWithoutReviewsGivenNestedInput
    reviewee?: UserUpdateOneRequiredWithoutReviewsReceivedNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    reviewerId?: StringFieldUpdateOperationsInput | string
    revieweeId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyInput = {
    id?: string
    applicationId: string
    reviewerId: string
    revieweeId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    reviewerId?: StringFieldUpdateOperationsInput | string
    revieweeId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchExplanationCreateInput = {
    id?: string
    explanation: string
    createdAt?: Date | string
    updatedAt?: Date | string
    graduate: UserCreateNestedOneWithoutMatchExplanationsInput
    opportunity: OpportunityCreateNestedOneWithoutMatchExplanationsInput
  }

  export type MatchExplanationUncheckedCreateInput = {
    id?: string
    graduateId: string
    opportunityId: string
    explanation: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchExplanationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    explanation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    graduate?: UserUpdateOneRequiredWithoutMatchExplanationsNestedInput
    opportunity?: OpportunityUpdateOneRequiredWithoutMatchExplanationsNestedInput
  }

  export type MatchExplanationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    graduateId?: StringFieldUpdateOperationsInput | string
    opportunityId?: StringFieldUpdateOperationsInput | string
    explanation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchExplanationCreateManyInput = {
    id?: string
    graduateId: string
    opportunityId: string
    explanation: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchExplanationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    explanation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchExplanationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    graduateId?: StringFieldUpdateOperationsInput | string
    opportunityId?: StringFieldUpdateOperationsInput | string
    explanation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillRequestCreateInput = {
    id?: string
    name: string
    status?: $Enums.SkillRequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    employer: UserCreateNestedOneWithoutSkillRequestsInput
  }

  export type SkillRequestUncheckedCreateInput = {
    id?: string
    name: string
    employerId: string
    status?: $Enums.SkillRequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SkillRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumSkillRequestStatusFieldUpdateOperationsInput | $Enums.SkillRequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employer?: UserUpdateOneRequiredWithoutSkillRequestsNestedInput
  }

  export type SkillRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    employerId?: StringFieldUpdateOperationsInput | string
    status?: EnumSkillRequestStatusFieldUpdateOperationsInput | $Enums.SkillRequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillRequestCreateManyInput = {
    id?: string
    name: string
    employerId: string
    status?: $Enums.SkillRequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SkillRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumSkillRequestStatusFieldUpdateOperationsInput | $Enums.SkillRequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    employerId?: StringFieldUpdateOperationsInput | string
    status?: EnumSkillRequestStatusFieldUpdateOperationsInput | $Enums.SkillRequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type UserSkillListRelationFilter = {
    every?: UserSkillWhereInput
    some?: UserSkillWhereInput
    none?: UserSkillWhereInput
  }

  export type OpportunityListRelationFilter = {
    every?: OpportunityWhereInput
    some?: OpportunityWhereInput
    none?: OpportunityWhereInput
  }

  export type ApplicationListRelationFilter = {
    every?: ApplicationWhereInput
    some?: ApplicationWhereInput
    none?: ApplicationWhereInput
  }

  export type MatchExplanationListRelationFilter = {
    every?: MatchExplanationWhereInput
    some?: MatchExplanationWhereInput
    none?: MatchExplanationWhereInput
  }

  export type SkillRequestListRelationFilter = {
    every?: SkillRequestWhereInput
    some?: SkillRequestWhereInput
    none?: SkillRequestWhereInput
  }

  export type PhoneOtpListRelationFilter = {
    every?: PhoneOtpWhereInput
    some?: PhoneOtpWhereInput
    none?: PhoneOtpWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserSkillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OpportunityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApplicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MatchExplanationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SkillRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PhoneOtpOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firebaseUid?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    phone?: SortOrder
    phoneVerified?: SortOrder
    role?: SortOrder
    bio?: SortOrder
    companyName?: SortOrder
    jobTitle?: SortOrder
    location?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firebaseUid?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    phone?: SortOrder
    phoneVerified?: SortOrder
    role?: SortOrder
    bio?: SortOrder
    companyName?: SortOrder
    jobTitle?: SortOrder
    location?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firebaseUid?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    phone?: SortOrder
    phoneVerified?: SortOrder
    role?: SortOrder
    bio?: SortOrder
    companyName?: SortOrder
    jobTitle?: SortOrder
    location?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type OpportunitySkillListRelationFilter = {
    every?: OpportunitySkillWhereInput
    some?: OpportunitySkillWhereInput
    none?: OpportunitySkillWhereInput
  }

  export type OpportunitySkillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SkillCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
  }

  export type SkillMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
  }

  export type SkillMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumExperienceLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.ExperienceLevel | EnumExperienceLevelFieldRefInput<$PrismaModel>
    in?: $Enums.ExperienceLevel[] | ListEnumExperienceLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExperienceLevel[] | ListEnumExperienceLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumExperienceLevelFilter<$PrismaModel> | $Enums.ExperienceLevel
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SkillScalarRelationFilter = {
    is?: SkillWhereInput
    isNot?: SkillWhereInput
  }

  export type UserSkillUserIdSkillIdCompoundUniqueInput = {
    userId: string
    skillId: string
  }

  export type UserSkillCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    skillId?: SortOrder
    experienceLevel?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSkillMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    skillId?: SortOrder
    experienceLevel?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSkillMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    skillId?: SortOrder
    experienceLevel?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumExperienceLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExperienceLevel | EnumExperienceLevelFieldRefInput<$PrismaModel>
    in?: $Enums.ExperienceLevel[] | ListEnumExperienceLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExperienceLevel[] | ListEnumExperienceLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumExperienceLevelWithAggregatesFilter<$PrismaModel> | $Enums.ExperienceLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExperienceLevelFilter<$PrismaModel>
    _max?: NestedEnumExperienceLevelFilter<$PrismaModel>
  }

  export type EnumOpportunityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.OpportunityType | EnumOpportunityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OpportunityType[] | ListEnumOpportunityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OpportunityType[] | ListEnumOpportunityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOpportunityTypeFilter<$PrismaModel> | $Enums.OpportunityType
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumPaymentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentType | EnumPaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentTypeFilter<$PrismaModel> | $Enums.PaymentType
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumOpportunityStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OpportunityStatus | EnumOpportunityStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OpportunityStatus[] | ListEnumOpportunityStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OpportunityStatus[] | ListEnumOpportunityStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOpportunityStatusFilter<$PrismaModel> | $Enums.OpportunityStatus
  }

  export type OpportunityCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    location?: SortOrder
    payment?: SortOrder
    paymentType?: SortOrder
    deadline?: SortOrder
    employerId?: SortOrder
    status?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OpportunityAvgOrderByAggregateInput = {
    payment?: SortOrder
  }

  export type OpportunityMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    location?: SortOrder
    payment?: SortOrder
    paymentType?: SortOrder
    deadline?: SortOrder
    employerId?: SortOrder
    status?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OpportunityMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    location?: SortOrder
    payment?: SortOrder
    paymentType?: SortOrder
    deadline?: SortOrder
    employerId?: SortOrder
    status?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OpportunitySumOrderByAggregateInput = {
    payment?: SortOrder
  }

  export type EnumOpportunityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OpportunityType | EnumOpportunityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OpportunityType[] | ListEnumOpportunityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OpportunityType[] | ListEnumOpportunityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOpportunityTypeWithAggregatesFilter<$PrismaModel> | $Enums.OpportunityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOpportunityTypeFilter<$PrismaModel>
    _max?: NestedEnumOpportunityTypeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumPaymentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentType | EnumPaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentTypeWithAggregatesFilter<$PrismaModel> | $Enums.PaymentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentTypeFilter<$PrismaModel>
    _max?: NestedEnumPaymentTypeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumOpportunityStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OpportunityStatus | EnumOpportunityStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OpportunityStatus[] | ListEnumOpportunityStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OpportunityStatus[] | ListEnumOpportunityStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOpportunityStatusWithAggregatesFilter<$PrismaModel> | $Enums.OpportunityStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOpportunityStatusFilter<$PrismaModel>
    _max?: NestedEnumOpportunityStatusFilter<$PrismaModel>
  }

  export type OpportunityScalarRelationFilter = {
    is?: OpportunityWhereInput
    isNot?: OpportunityWhereInput
  }

  export type OpportunitySkillOpportunityIdSkillIdCompoundUniqueInput = {
    opportunityId: string
    skillId: string
  }

  export type OpportunitySkillCountOrderByAggregateInput = {
    id?: SortOrder
    opportunityId?: SortOrder
    skillId?: SortOrder
  }

  export type OpportunitySkillMaxOrderByAggregateInput = {
    id?: SortOrder
    opportunityId?: SortOrder
    skillId?: SortOrder
  }

  export type OpportunitySkillMinOrderByAggregateInput = {
    id?: SortOrder
    opportunityId?: SortOrder
    skillId?: SortOrder
  }

  export type EnumApplicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusFilter<$PrismaModel> | $Enums.ApplicationStatus
  }

  export type ApplicationOpportunityIdApplicantIdCompoundUniqueInput = {
    opportunityId: string
    applicantId: string
  }

  export type ApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    opportunityId?: SortOrder
    applicantId?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    opportunityId?: SortOrder
    applicantId?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    opportunityId?: SortOrder
    applicantId?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumApplicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApplicationStatusFilter<$PrismaModel>
    _max?: NestedEnumApplicationStatusFilter<$PrismaModel>
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

  export type PhoneOtpCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    phone?: SortOrder
    codeHash?: SortOrder
    attempts?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
    createdAt?: SortOrder
  }

  export type PhoneOtpAvgOrderByAggregateInput = {
    attempts?: SortOrder
  }

  export type PhoneOtpMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    phone?: SortOrder
    codeHash?: SortOrder
    attempts?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
    createdAt?: SortOrder
  }

  export type PhoneOtpMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    phone?: SortOrder
    codeHash?: SortOrder
    attempts?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
    createdAt?: SortOrder
  }

  export type PhoneOtpSumOrderByAggregateInput = {
    attempts?: SortOrder
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

  export type ApplicationScalarRelationFilter = {
    is?: ApplicationWhereInput
    isNot?: ApplicationWhereInput
  }

  export type ReviewApplicationIdReviewerIdCompoundUniqueInput = {
    applicationId: string
    reviewerId: string
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    reviewerId?: SortOrder
    revieweeId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    reviewerId?: SortOrder
    revieweeId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    reviewerId?: SortOrder
    revieweeId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type MatchExplanationGraduateIdOpportunityIdCompoundUniqueInput = {
    graduateId: string
    opportunityId: string
  }

  export type MatchExplanationCountOrderByAggregateInput = {
    id?: SortOrder
    graduateId?: SortOrder
    opportunityId?: SortOrder
    explanation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatchExplanationMaxOrderByAggregateInput = {
    id?: SortOrder
    graduateId?: SortOrder
    opportunityId?: SortOrder
    explanation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatchExplanationMinOrderByAggregateInput = {
    id?: SortOrder
    graduateId?: SortOrder
    opportunityId?: SortOrder
    explanation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumSkillRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillRequestStatus | EnumSkillRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SkillRequestStatus[] | ListEnumSkillRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SkillRequestStatus[] | ListEnumSkillRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSkillRequestStatusFilter<$PrismaModel> | $Enums.SkillRequestStatus
  }

  export type SkillRequestCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    employerId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SkillRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    employerId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SkillRequestMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    employerId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumSkillRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillRequestStatus | EnumSkillRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SkillRequestStatus[] | ListEnumSkillRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SkillRequestStatus[] | ListEnumSkillRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSkillRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.SkillRequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSkillRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumSkillRequestStatusFilter<$PrismaModel>
  }

  export type UserSkillCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSkillCreateWithoutUserInput, UserSkillUncheckedCreateWithoutUserInput> | UserSkillCreateWithoutUserInput[] | UserSkillUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSkillCreateOrConnectWithoutUserInput | UserSkillCreateOrConnectWithoutUserInput[]
    createMany?: UserSkillCreateManyUserInputEnvelope
    connect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
  }

  export type OpportunityCreateNestedManyWithoutEmployerInput = {
    create?: XOR<OpportunityCreateWithoutEmployerInput, OpportunityUncheckedCreateWithoutEmployerInput> | OpportunityCreateWithoutEmployerInput[] | OpportunityUncheckedCreateWithoutEmployerInput[]
    connectOrCreate?: OpportunityCreateOrConnectWithoutEmployerInput | OpportunityCreateOrConnectWithoutEmployerInput[]
    createMany?: OpportunityCreateManyEmployerInputEnvelope
    connect?: OpportunityWhereUniqueInput | OpportunityWhereUniqueInput[]
  }

  export type ApplicationCreateNestedManyWithoutApplicantInput = {
    create?: XOR<ApplicationCreateWithoutApplicantInput, ApplicationUncheckedCreateWithoutApplicantInput> | ApplicationCreateWithoutApplicantInput[] | ApplicationUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutApplicantInput | ApplicationCreateOrConnectWithoutApplicantInput[]
    createMany?: ApplicationCreateManyApplicantInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type MatchExplanationCreateNestedManyWithoutGraduateInput = {
    create?: XOR<MatchExplanationCreateWithoutGraduateInput, MatchExplanationUncheckedCreateWithoutGraduateInput> | MatchExplanationCreateWithoutGraduateInput[] | MatchExplanationUncheckedCreateWithoutGraduateInput[]
    connectOrCreate?: MatchExplanationCreateOrConnectWithoutGraduateInput | MatchExplanationCreateOrConnectWithoutGraduateInput[]
    createMany?: MatchExplanationCreateManyGraduateInputEnvelope
    connect?: MatchExplanationWhereUniqueInput | MatchExplanationWhereUniqueInput[]
  }

  export type SkillRequestCreateNestedManyWithoutEmployerInput = {
    create?: XOR<SkillRequestCreateWithoutEmployerInput, SkillRequestUncheckedCreateWithoutEmployerInput> | SkillRequestCreateWithoutEmployerInput[] | SkillRequestUncheckedCreateWithoutEmployerInput[]
    connectOrCreate?: SkillRequestCreateOrConnectWithoutEmployerInput | SkillRequestCreateOrConnectWithoutEmployerInput[]
    createMany?: SkillRequestCreateManyEmployerInputEnvelope
    connect?: SkillRequestWhereUniqueInput | SkillRequestWhereUniqueInput[]
  }

  export type PhoneOtpCreateNestedManyWithoutUserInput = {
    create?: XOR<PhoneOtpCreateWithoutUserInput, PhoneOtpUncheckedCreateWithoutUserInput> | PhoneOtpCreateWithoutUserInput[] | PhoneOtpUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PhoneOtpCreateOrConnectWithoutUserInput | PhoneOtpCreateOrConnectWithoutUserInput[]
    createMany?: PhoneOtpCreateManyUserInputEnvelope
    connect?: PhoneOtpWhereUniqueInput | PhoneOtpWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutReviewerInput = {
    create?: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput> | ReviewCreateWithoutReviewerInput[] | ReviewUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewerInput | ReviewCreateOrConnectWithoutReviewerInput[]
    createMany?: ReviewCreateManyReviewerInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutRevieweeInput = {
    create?: XOR<ReviewCreateWithoutRevieweeInput, ReviewUncheckedCreateWithoutRevieweeInput> | ReviewCreateWithoutRevieweeInput[] | ReviewUncheckedCreateWithoutRevieweeInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutRevieweeInput | ReviewCreateOrConnectWithoutRevieweeInput[]
    createMany?: ReviewCreateManyRevieweeInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type UserSkillUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSkillCreateWithoutUserInput, UserSkillUncheckedCreateWithoutUserInput> | UserSkillCreateWithoutUserInput[] | UserSkillUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSkillCreateOrConnectWithoutUserInput | UserSkillCreateOrConnectWithoutUserInput[]
    createMany?: UserSkillCreateManyUserInputEnvelope
    connect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
  }

  export type OpportunityUncheckedCreateNestedManyWithoutEmployerInput = {
    create?: XOR<OpportunityCreateWithoutEmployerInput, OpportunityUncheckedCreateWithoutEmployerInput> | OpportunityCreateWithoutEmployerInput[] | OpportunityUncheckedCreateWithoutEmployerInput[]
    connectOrCreate?: OpportunityCreateOrConnectWithoutEmployerInput | OpportunityCreateOrConnectWithoutEmployerInput[]
    createMany?: OpportunityCreateManyEmployerInputEnvelope
    connect?: OpportunityWhereUniqueInput | OpportunityWhereUniqueInput[]
  }

  export type ApplicationUncheckedCreateNestedManyWithoutApplicantInput = {
    create?: XOR<ApplicationCreateWithoutApplicantInput, ApplicationUncheckedCreateWithoutApplicantInput> | ApplicationCreateWithoutApplicantInput[] | ApplicationUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutApplicantInput | ApplicationCreateOrConnectWithoutApplicantInput[]
    createMany?: ApplicationCreateManyApplicantInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type MatchExplanationUncheckedCreateNestedManyWithoutGraduateInput = {
    create?: XOR<MatchExplanationCreateWithoutGraduateInput, MatchExplanationUncheckedCreateWithoutGraduateInput> | MatchExplanationCreateWithoutGraduateInput[] | MatchExplanationUncheckedCreateWithoutGraduateInput[]
    connectOrCreate?: MatchExplanationCreateOrConnectWithoutGraduateInput | MatchExplanationCreateOrConnectWithoutGraduateInput[]
    createMany?: MatchExplanationCreateManyGraduateInputEnvelope
    connect?: MatchExplanationWhereUniqueInput | MatchExplanationWhereUniqueInput[]
  }

  export type SkillRequestUncheckedCreateNestedManyWithoutEmployerInput = {
    create?: XOR<SkillRequestCreateWithoutEmployerInput, SkillRequestUncheckedCreateWithoutEmployerInput> | SkillRequestCreateWithoutEmployerInput[] | SkillRequestUncheckedCreateWithoutEmployerInput[]
    connectOrCreate?: SkillRequestCreateOrConnectWithoutEmployerInput | SkillRequestCreateOrConnectWithoutEmployerInput[]
    createMany?: SkillRequestCreateManyEmployerInputEnvelope
    connect?: SkillRequestWhereUniqueInput | SkillRequestWhereUniqueInput[]
  }

  export type PhoneOtpUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PhoneOtpCreateWithoutUserInput, PhoneOtpUncheckedCreateWithoutUserInput> | PhoneOtpCreateWithoutUserInput[] | PhoneOtpUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PhoneOtpCreateOrConnectWithoutUserInput | PhoneOtpCreateOrConnectWithoutUserInput[]
    createMany?: PhoneOtpCreateManyUserInputEnvelope
    connect?: PhoneOtpWhereUniqueInput | PhoneOtpWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutReviewerInput = {
    create?: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput> | ReviewCreateWithoutReviewerInput[] | ReviewUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewerInput | ReviewCreateOrConnectWithoutReviewerInput[]
    createMany?: ReviewCreateManyReviewerInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutRevieweeInput = {
    create?: XOR<ReviewCreateWithoutRevieweeInput, ReviewUncheckedCreateWithoutRevieweeInput> | ReviewCreateWithoutRevieweeInput[] | ReviewUncheckedCreateWithoutRevieweeInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutRevieweeInput | ReviewCreateOrConnectWithoutRevieweeInput[]
    createMany?: ReviewCreateManyRevieweeInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserSkillUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSkillCreateWithoutUserInput, UserSkillUncheckedCreateWithoutUserInput> | UserSkillCreateWithoutUserInput[] | UserSkillUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSkillCreateOrConnectWithoutUserInput | UserSkillCreateOrConnectWithoutUserInput[]
    upsert?: UserSkillUpsertWithWhereUniqueWithoutUserInput | UserSkillUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSkillCreateManyUserInputEnvelope
    set?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    disconnect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    delete?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    connect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    update?: UserSkillUpdateWithWhereUniqueWithoutUserInput | UserSkillUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSkillUpdateManyWithWhereWithoutUserInput | UserSkillUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSkillScalarWhereInput | UserSkillScalarWhereInput[]
  }

  export type OpportunityUpdateManyWithoutEmployerNestedInput = {
    create?: XOR<OpportunityCreateWithoutEmployerInput, OpportunityUncheckedCreateWithoutEmployerInput> | OpportunityCreateWithoutEmployerInput[] | OpportunityUncheckedCreateWithoutEmployerInput[]
    connectOrCreate?: OpportunityCreateOrConnectWithoutEmployerInput | OpportunityCreateOrConnectWithoutEmployerInput[]
    upsert?: OpportunityUpsertWithWhereUniqueWithoutEmployerInput | OpportunityUpsertWithWhereUniqueWithoutEmployerInput[]
    createMany?: OpportunityCreateManyEmployerInputEnvelope
    set?: OpportunityWhereUniqueInput | OpportunityWhereUniqueInput[]
    disconnect?: OpportunityWhereUniqueInput | OpportunityWhereUniqueInput[]
    delete?: OpportunityWhereUniqueInput | OpportunityWhereUniqueInput[]
    connect?: OpportunityWhereUniqueInput | OpportunityWhereUniqueInput[]
    update?: OpportunityUpdateWithWhereUniqueWithoutEmployerInput | OpportunityUpdateWithWhereUniqueWithoutEmployerInput[]
    updateMany?: OpportunityUpdateManyWithWhereWithoutEmployerInput | OpportunityUpdateManyWithWhereWithoutEmployerInput[]
    deleteMany?: OpportunityScalarWhereInput | OpportunityScalarWhereInput[]
  }

  export type ApplicationUpdateManyWithoutApplicantNestedInput = {
    create?: XOR<ApplicationCreateWithoutApplicantInput, ApplicationUncheckedCreateWithoutApplicantInput> | ApplicationCreateWithoutApplicantInput[] | ApplicationUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutApplicantInput | ApplicationCreateOrConnectWithoutApplicantInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutApplicantInput | ApplicationUpsertWithWhereUniqueWithoutApplicantInput[]
    createMany?: ApplicationCreateManyApplicantInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutApplicantInput | ApplicationUpdateWithWhereUniqueWithoutApplicantInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutApplicantInput | ApplicationUpdateManyWithWhereWithoutApplicantInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type MatchExplanationUpdateManyWithoutGraduateNestedInput = {
    create?: XOR<MatchExplanationCreateWithoutGraduateInput, MatchExplanationUncheckedCreateWithoutGraduateInput> | MatchExplanationCreateWithoutGraduateInput[] | MatchExplanationUncheckedCreateWithoutGraduateInput[]
    connectOrCreate?: MatchExplanationCreateOrConnectWithoutGraduateInput | MatchExplanationCreateOrConnectWithoutGraduateInput[]
    upsert?: MatchExplanationUpsertWithWhereUniqueWithoutGraduateInput | MatchExplanationUpsertWithWhereUniqueWithoutGraduateInput[]
    createMany?: MatchExplanationCreateManyGraduateInputEnvelope
    set?: MatchExplanationWhereUniqueInput | MatchExplanationWhereUniqueInput[]
    disconnect?: MatchExplanationWhereUniqueInput | MatchExplanationWhereUniqueInput[]
    delete?: MatchExplanationWhereUniqueInput | MatchExplanationWhereUniqueInput[]
    connect?: MatchExplanationWhereUniqueInput | MatchExplanationWhereUniqueInput[]
    update?: MatchExplanationUpdateWithWhereUniqueWithoutGraduateInput | MatchExplanationUpdateWithWhereUniqueWithoutGraduateInput[]
    updateMany?: MatchExplanationUpdateManyWithWhereWithoutGraduateInput | MatchExplanationUpdateManyWithWhereWithoutGraduateInput[]
    deleteMany?: MatchExplanationScalarWhereInput | MatchExplanationScalarWhereInput[]
  }

  export type SkillRequestUpdateManyWithoutEmployerNestedInput = {
    create?: XOR<SkillRequestCreateWithoutEmployerInput, SkillRequestUncheckedCreateWithoutEmployerInput> | SkillRequestCreateWithoutEmployerInput[] | SkillRequestUncheckedCreateWithoutEmployerInput[]
    connectOrCreate?: SkillRequestCreateOrConnectWithoutEmployerInput | SkillRequestCreateOrConnectWithoutEmployerInput[]
    upsert?: SkillRequestUpsertWithWhereUniqueWithoutEmployerInput | SkillRequestUpsertWithWhereUniqueWithoutEmployerInput[]
    createMany?: SkillRequestCreateManyEmployerInputEnvelope
    set?: SkillRequestWhereUniqueInput | SkillRequestWhereUniqueInput[]
    disconnect?: SkillRequestWhereUniqueInput | SkillRequestWhereUniqueInput[]
    delete?: SkillRequestWhereUniqueInput | SkillRequestWhereUniqueInput[]
    connect?: SkillRequestWhereUniqueInput | SkillRequestWhereUniqueInput[]
    update?: SkillRequestUpdateWithWhereUniqueWithoutEmployerInput | SkillRequestUpdateWithWhereUniqueWithoutEmployerInput[]
    updateMany?: SkillRequestUpdateManyWithWhereWithoutEmployerInput | SkillRequestUpdateManyWithWhereWithoutEmployerInput[]
    deleteMany?: SkillRequestScalarWhereInput | SkillRequestScalarWhereInput[]
  }

  export type PhoneOtpUpdateManyWithoutUserNestedInput = {
    create?: XOR<PhoneOtpCreateWithoutUserInput, PhoneOtpUncheckedCreateWithoutUserInput> | PhoneOtpCreateWithoutUserInput[] | PhoneOtpUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PhoneOtpCreateOrConnectWithoutUserInput | PhoneOtpCreateOrConnectWithoutUserInput[]
    upsert?: PhoneOtpUpsertWithWhereUniqueWithoutUserInput | PhoneOtpUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PhoneOtpCreateManyUserInputEnvelope
    set?: PhoneOtpWhereUniqueInput | PhoneOtpWhereUniqueInput[]
    disconnect?: PhoneOtpWhereUniqueInput | PhoneOtpWhereUniqueInput[]
    delete?: PhoneOtpWhereUniqueInput | PhoneOtpWhereUniqueInput[]
    connect?: PhoneOtpWhereUniqueInput | PhoneOtpWhereUniqueInput[]
    update?: PhoneOtpUpdateWithWhereUniqueWithoutUserInput | PhoneOtpUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PhoneOtpUpdateManyWithWhereWithoutUserInput | PhoneOtpUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PhoneOtpScalarWhereInput | PhoneOtpScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutReviewerNestedInput = {
    create?: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput> | ReviewCreateWithoutReviewerInput[] | ReviewUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewerInput | ReviewCreateOrConnectWithoutReviewerInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutReviewerInput | ReviewUpsertWithWhereUniqueWithoutReviewerInput[]
    createMany?: ReviewCreateManyReviewerInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutReviewerInput | ReviewUpdateWithWhereUniqueWithoutReviewerInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutReviewerInput | ReviewUpdateManyWithWhereWithoutReviewerInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutRevieweeNestedInput = {
    create?: XOR<ReviewCreateWithoutRevieweeInput, ReviewUncheckedCreateWithoutRevieweeInput> | ReviewCreateWithoutRevieweeInput[] | ReviewUncheckedCreateWithoutRevieweeInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutRevieweeInput | ReviewCreateOrConnectWithoutRevieweeInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutRevieweeInput | ReviewUpsertWithWhereUniqueWithoutRevieweeInput[]
    createMany?: ReviewCreateManyRevieweeInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutRevieweeInput | ReviewUpdateWithWhereUniqueWithoutRevieweeInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutRevieweeInput | ReviewUpdateManyWithWhereWithoutRevieweeInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type UserSkillUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSkillCreateWithoutUserInput, UserSkillUncheckedCreateWithoutUserInput> | UserSkillCreateWithoutUserInput[] | UserSkillUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSkillCreateOrConnectWithoutUserInput | UserSkillCreateOrConnectWithoutUserInput[]
    upsert?: UserSkillUpsertWithWhereUniqueWithoutUserInput | UserSkillUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSkillCreateManyUserInputEnvelope
    set?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    disconnect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    delete?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    connect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    update?: UserSkillUpdateWithWhereUniqueWithoutUserInput | UserSkillUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSkillUpdateManyWithWhereWithoutUserInput | UserSkillUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSkillScalarWhereInput | UserSkillScalarWhereInput[]
  }

  export type OpportunityUncheckedUpdateManyWithoutEmployerNestedInput = {
    create?: XOR<OpportunityCreateWithoutEmployerInput, OpportunityUncheckedCreateWithoutEmployerInput> | OpportunityCreateWithoutEmployerInput[] | OpportunityUncheckedCreateWithoutEmployerInput[]
    connectOrCreate?: OpportunityCreateOrConnectWithoutEmployerInput | OpportunityCreateOrConnectWithoutEmployerInput[]
    upsert?: OpportunityUpsertWithWhereUniqueWithoutEmployerInput | OpportunityUpsertWithWhereUniqueWithoutEmployerInput[]
    createMany?: OpportunityCreateManyEmployerInputEnvelope
    set?: OpportunityWhereUniqueInput | OpportunityWhereUniqueInput[]
    disconnect?: OpportunityWhereUniqueInput | OpportunityWhereUniqueInput[]
    delete?: OpportunityWhereUniqueInput | OpportunityWhereUniqueInput[]
    connect?: OpportunityWhereUniqueInput | OpportunityWhereUniqueInput[]
    update?: OpportunityUpdateWithWhereUniqueWithoutEmployerInput | OpportunityUpdateWithWhereUniqueWithoutEmployerInput[]
    updateMany?: OpportunityUpdateManyWithWhereWithoutEmployerInput | OpportunityUpdateManyWithWhereWithoutEmployerInput[]
    deleteMany?: OpportunityScalarWhereInput | OpportunityScalarWhereInput[]
  }

  export type ApplicationUncheckedUpdateManyWithoutApplicantNestedInput = {
    create?: XOR<ApplicationCreateWithoutApplicantInput, ApplicationUncheckedCreateWithoutApplicantInput> | ApplicationCreateWithoutApplicantInput[] | ApplicationUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutApplicantInput | ApplicationCreateOrConnectWithoutApplicantInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutApplicantInput | ApplicationUpsertWithWhereUniqueWithoutApplicantInput[]
    createMany?: ApplicationCreateManyApplicantInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutApplicantInput | ApplicationUpdateWithWhereUniqueWithoutApplicantInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutApplicantInput | ApplicationUpdateManyWithWhereWithoutApplicantInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type MatchExplanationUncheckedUpdateManyWithoutGraduateNestedInput = {
    create?: XOR<MatchExplanationCreateWithoutGraduateInput, MatchExplanationUncheckedCreateWithoutGraduateInput> | MatchExplanationCreateWithoutGraduateInput[] | MatchExplanationUncheckedCreateWithoutGraduateInput[]
    connectOrCreate?: MatchExplanationCreateOrConnectWithoutGraduateInput | MatchExplanationCreateOrConnectWithoutGraduateInput[]
    upsert?: MatchExplanationUpsertWithWhereUniqueWithoutGraduateInput | MatchExplanationUpsertWithWhereUniqueWithoutGraduateInput[]
    createMany?: MatchExplanationCreateManyGraduateInputEnvelope
    set?: MatchExplanationWhereUniqueInput | MatchExplanationWhereUniqueInput[]
    disconnect?: MatchExplanationWhereUniqueInput | MatchExplanationWhereUniqueInput[]
    delete?: MatchExplanationWhereUniqueInput | MatchExplanationWhereUniqueInput[]
    connect?: MatchExplanationWhereUniqueInput | MatchExplanationWhereUniqueInput[]
    update?: MatchExplanationUpdateWithWhereUniqueWithoutGraduateInput | MatchExplanationUpdateWithWhereUniqueWithoutGraduateInput[]
    updateMany?: MatchExplanationUpdateManyWithWhereWithoutGraduateInput | MatchExplanationUpdateManyWithWhereWithoutGraduateInput[]
    deleteMany?: MatchExplanationScalarWhereInput | MatchExplanationScalarWhereInput[]
  }

  export type SkillRequestUncheckedUpdateManyWithoutEmployerNestedInput = {
    create?: XOR<SkillRequestCreateWithoutEmployerInput, SkillRequestUncheckedCreateWithoutEmployerInput> | SkillRequestCreateWithoutEmployerInput[] | SkillRequestUncheckedCreateWithoutEmployerInput[]
    connectOrCreate?: SkillRequestCreateOrConnectWithoutEmployerInput | SkillRequestCreateOrConnectWithoutEmployerInput[]
    upsert?: SkillRequestUpsertWithWhereUniqueWithoutEmployerInput | SkillRequestUpsertWithWhereUniqueWithoutEmployerInput[]
    createMany?: SkillRequestCreateManyEmployerInputEnvelope
    set?: SkillRequestWhereUniqueInput | SkillRequestWhereUniqueInput[]
    disconnect?: SkillRequestWhereUniqueInput | SkillRequestWhereUniqueInput[]
    delete?: SkillRequestWhereUniqueInput | SkillRequestWhereUniqueInput[]
    connect?: SkillRequestWhereUniqueInput | SkillRequestWhereUniqueInput[]
    update?: SkillRequestUpdateWithWhereUniqueWithoutEmployerInput | SkillRequestUpdateWithWhereUniqueWithoutEmployerInput[]
    updateMany?: SkillRequestUpdateManyWithWhereWithoutEmployerInput | SkillRequestUpdateManyWithWhereWithoutEmployerInput[]
    deleteMany?: SkillRequestScalarWhereInput | SkillRequestScalarWhereInput[]
  }

  export type PhoneOtpUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PhoneOtpCreateWithoutUserInput, PhoneOtpUncheckedCreateWithoutUserInput> | PhoneOtpCreateWithoutUserInput[] | PhoneOtpUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PhoneOtpCreateOrConnectWithoutUserInput | PhoneOtpCreateOrConnectWithoutUserInput[]
    upsert?: PhoneOtpUpsertWithWhereUniqueWithoutUserInput | PhoneOtpUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PhoneOtpCreateManyUserInputEnvelope
    set?: PhoneOtpWhereUniqueInput | PhoneOtpWhereUniqueInput[]
    disconnect?: PhoneOtpWhereUniqueInput | PhoneOtpWhereUniqueInput[]
    delete?: PhoneOtpWhereUniqueInput | PhoneOtpWhereUniqueInput[]
    connect?: PhoneOtpWhereUniqueInput | PhoneOtpWhereUniqueInput[]
    update?: PhoneOtpUpdateWithWhereUniqueWithoutUserInput | PhoneOtpUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PhoneOtpUpdateManyWithWhereWithoutUserInput | PhoneOtpUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PhoneOtpScalarWhereInput | PhoneOtpScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutReviewerNestedInput = {
    create?: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput> | ReviewCreateWithoutReviewerInput[] | ReviewUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewerInput | ReviewCreateOrConnectWithoutReviewerInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutReviewerInput | ReviewUpsertWithWhereUniqueWithoutReviewerInput[]
    createMany?: ReviewCreateManyReviewerInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutReviewerInput | ReviewUpdateWithWhereUniqueWithoutReviewerInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutReviewerInput | ReviewUpdateManyWithWhereWithoutReviewerInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutRevieweeNestedInput = {
    create?: XOR<ReviewCreateWithoutRevieweeInput, ReviewUncheckedCreateWithoutRevieweeInput> | ReviewCreateWithoutRevieweeInput[] | ReviewUncheckedCreateWithoutRevieweeInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutRevieweeInput | ReviewCreateOrConnectWithoutRevieweeInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutRevieweeInput | ReviewUpsertWithWhereUniqueWithoutRevieweeInput[]
    createMany?: ReviewCreateManyRevieweeInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutRevieweeInput | ReviewUpdateWithWhereUniqueWithoutRevieweeInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutRevieweeInput | ReviewUpdateManyWithWhereWithoutRevieweeInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type UserSkillCreateNestedManyWithoutSkillInput = {
    create?: XOR<UserSkillCreateWithoutSkillInput, UserSkillUncheckedCreateWithoutSkillInput> | UserSkillCreateWithoutSkillInput[] | UserSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: UserSkillCreateOrConnectWithoutSkillInput | UserSkillCreateOrConnectWithoutSkillInput[]
    createMany?: UserSkillCreateManySkillInputEnvelope
    connect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
  }

  export type OpportunitySkillCreateNestedManyWithoutSkillInput = {
    create?: XOR<OpportunitySkillCreateWithoutSkillInput, OpportunitySkillUncheckedCreateWithoutSkillInput> | OpportunitySkillCreateWithoutSkillInput[] | OpportunitySkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: OpportunitySkillCreateOrConnectWithoutSkillInput | OpportunitySkillCreateOrConnectWithoutSkillInput[]
    createMany?: OpportunitySkillCreateManySkillInputEnvelope
    connect?: OpportunitySkillWhereUniqueInput | OpportunitySkillWhereUniqueInput[]
  }

  export type UserSkillUncheckedCreateNestedManyWithoutSkillInput = {
    create?: XOR<UserSkillCreateWithoutSkillInput, UserSkillUncheckedCreateWithoutSkillInput> | UserSkillCreateWithoutSkillInput[] | UserSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: UserSkillCreateOrConnectWithoutSkillInput | UserSkillCreateOrConnectWithoutSkillInput[]
    createMany?: UserSkillCreateManySkillInputEnvelope
    connect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
  }

  export type OpportunitySkillUncheckedCreateNestedManyWithoutSkillInput = {
    create?: XOR<OpportunitySkillCreateWithoutSkillInput, OpportunitySkillUncheckedCreateWithoutSkillInput> | OpportunitySkillCreateWithoutSkillInput[] | OpportunitySkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: OpportunitySkillCreateOrConnectWithoutSkillInput | OpportunitySkillCreateOrConnectWithoutSkillInput[]
    createMany?: OpportunitySkillCreateManySkillInputEnvelope
    connect?: OpportunitySkillWhereUniqueInput | OpportunitySkillWhereUniqueInput[]
  }

  export type UserSkillUpdateManyWithoutSkillNestedInput = {
    create?: XOR<UserSkillCreateWithoutSkillInput, UserSkillUncheckedCreateWithoutSkillInput> | UserSkillCreateWithoutSkillInput[] | UserSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: UserSkillCreateOrConnectWithoutSkillInput | UserSkillCreateOrConnectWithoutSkillInput[]
    upsert?: UserSkillUpsertWithWhereUniqueWithoutSkillInput | UserSkillUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: UserSkillCreateManySkillInputEnvelope
    set?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    disconnect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    delete?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    connect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    update?: UserSkillUpdateWithWhereUniqueWithoutSkillInput | UserSkillUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: UserSkillUpdateManyWithWhereWithoutSkillInput | UserSkillUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: UserSkillScalarWhereInput | UserSkillScalarWhereInput[]
  }

  export type OpportunitySkillUpdateManyWithoutSkillNestedInput = {
    create?: XOR<OpportunitySkillCreateWithoutSkillInput, OpportunitySkillUncheckedCreateWithoutSkillInput> | OpportunitySkillCreateWithoutSkillInput[] | OpportunitySkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: OpportunitySkillCreateOrConnectWithoutSkillInput | OpportunitySkillCreateOrConnectWithoutSkillInput[]
    upsert?: OpportunitySkillUpsertWithWhereUniqueWithoutSkillInput | OpportunitySkillUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: OpportunitySkillCreateManySkillInputEnvelope
    set?: OpportunitySkillWhereUniqueInput | OpportunitySkillWhereUniqueInput[]
    disconnect?: OpportunitySkillWhereUniqueInput | OpportunitySkillWhereUniqueInput[]
    delete?: OpportunitySkillWhereUniqueInput | OpportunitySkillWhereUniqueInput[]
    connect?: OpportunitySkillWhereUniqueInput | OpportunitySkillWhereUniqueInput[]
    update?: OpportunitySkillUpdateWithWhereUniqueWithoutSkillInput | OpportunitySkillUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: OpportunitySkillUpdateManyWithWhereWithoutSkillInput | OpportunitySkillUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: OpportunitySkillScalarWhereInput | OpportunitySkillScalarWhereInput[]
  }

  export type UserSkillUncheckedUpdateManyWithoutSkillNestedInput = {
    create?: XOR<UserSkillCreateWithoutSkillInput, UserSkillUncheckedCreateWithoutSkillInput> | UserSkillCreateWithoutSkillInput[] | UserSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: UserSkillCreateOrConnectWithoutSkillInput | UserSkillCreateOrConnectWithoutSkillInput[]
    upsert?: UserSkillUpsertWithWhereUniqueWithoutSkillInput | UserSkillUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: UserSkillCreateManySkillInputEnvelope
    set?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    disconnect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    delete?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    connect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    update?: UserSkillUpdateWithWhereUniqueWithoutSkillInput | UserSkillUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: UserSkillUpdateManyWithWhereWithoutSkillInput | UserSkillUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: UserSkillScalarWhereInput | UserSkillScalarWhereInput[]
  }

  export type OpportunitySkillUncheckedUpdateManyWithoutSkillNestedInput = {
    create?: XOR<OpportunitySkillCreateWithoutSkillInput, OpportunitySkillUncheckedCreateWithoutSkillInput> | OpportunitySkillCreateWithoutSkillInput[] | OpportunitySkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: OpportunitySkillCreateOrConnectWithoutSkillInput | OpportunitySkillCreateOrConnectWithoutSkillInput[]
    upsert?: OpportunitySkillUpsertWithWhereUniqueWithoutSkillInput | OpportunitySkillUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: OpportunitySkillCreateManySkillInputEnvelope
    set?: OpportunitySkillWhereUniqueInput | OpportunitySkillWhereUniqueInput[]
    disconnect?: OpportunitySkillWhereUniqueInput | OpportunitySkillWhereUniqueInput[]
    delete?: OpportunitySkillWhereUniqueInput | OpportunitySkillWhereUniqueInput[]
    connect?: OpportunitySkillWhereUniqueInput | OpportunitySkillWhereUniqueInput[]
    update?: OpportunitySkillUpdateWithWhereUniqueWithoutSkillInput | OpportunitySkillUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: OpportunitySkillUpdateManyWithWhereWithoutSkillInput | OpportunitySkillUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: OpportunitySkillScalarWhereInput | OpportunitySkillScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSkillsInput = {
    create?: XOR<UserCreateWithoutSkillsInput, UserUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSkillsInput
    connect?: UserWhereUniqueInput
  }

  export type SkillCreateNestedOneWithoutUsersInput = {
    create?: XOR<SkillCreateWithoutUsersInput, SkillUncheckedCreateWithoutUsersInput>
    connectOrCreate?: SkillCreateOrConnectWithoutUsersInput
    connect?: SkillWhereUniqueInput
  }

  export type EnumExperienceLevelFieldUpdateOperationsInput = {
    set?: $Enums.ExperienceLevel
  }

  export type UserUpdateOneRequiredWithoutSkillsNestedInput = {
    create?: XOR<UserCreateWithoutSkillsInput, UserUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSkillsInput
    upsert?: UserUpsertWithoutSkillsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSkillsInput, UserUpdateWithoutSkillsInput>, UserUncheckedUpdateWithoutSkillsInput>
  }

  export type SkillUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<SkillCreateWithoutUsersInput, SkillUncheckedCreateWithoutUsersInput>
    connectOrCreate?: SkillCreateOrConnectWithoutUsersInput
    upsert?: SkillUpsertWithoutUsersInput
    connect?: SkillWhereUniqueInput
    update?: XOR<XOR<SkillUpdateToOneWithWhereWithoutUsersInput, SkillUpdateWithoutUsersInput>, SkillUncheckedUpdateWithoutUsersInput>
  }

  export type UserCreateNestedOneWithoutOpportunitiesInput = {
    create?: XOR<UserCreateWithoutOpportunitiesInput, UserUncheckedCreateWithoutOpportunitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutOpportunitiesInput
    connect?: UserWhereUniqueInput
  }

  export type OpportunitySkillCreateNestedManyWithoutOpportunityInput = {
    create?: XOR<OpportunitySkillCreateWithoutOpportunityInput, OpportunitySkillUncheckedCreateWithoutOpportunityInput> | OpportunitySkillCreateWithoutOpportunityInput[] | OpportunitySkillUncheckedCreateWithoutOpportunityInput[]
    connectOrCreate?: OpportunitySkillCreateOrConnectWithoutOpportunityInput | OpportunitySkillCreateOrConnectWithoutOpportunityInput[]
    createMany?: OpportunitySkillCreateManyOpportunityInputEnvelope
    connect?: OpportunitySkillWhereUniqueInput | OpportunitySkillWhereUniqueInput[]
  }

  export type ApplicationCreateNestedManyWithoutOpportunityInput = {
    create?: XOR<ApplicationCreateWithoutOpportunityInput, ApplicationUncheckedCreateWithoutOpportunityInput> | ApplicationCreateWithoutOpportunityInput[] | ApplicationUncheckedCreateWithoutOpportunityInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutOpportunityInput | ApplicationCreateOrConnectWithoutOpportunityInput[]
    createMany?: ApplicationCreateManyOpportunityInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type MatchExplanationCreateNestedManyWithoutOpportunityInput = {
    create?: XOR<MatchExplanationCreateWithoutOpportunityInput, MatchExplanationUncheckedCreateWithoutOpportunityInput> | MatchExplanationCreateWithoutOpportunityInput[] | MatchExplanationUncheckedCreateWithoutOpportunityInput[]
    connectOrCreate?: MatchExplanationCreateOrConnectWithoutOpportunityInput | MatchExplanationCreateOrConnectWithoutOpportunityInput[]
    createMany?: MatchExplanationCreateManyOpportunityInputEnvelope
    connect?: MatchExplanationWhereUniqueInput | MatchExplanationWhereUniqueInput[]
  }

  export type OpportunitySkillUncheckedCreateNestedManyWithoutOpportunityInput = {
    create?: XOR<OpportunitySkillCreateWithoutOpportunityInput, OpportunitySkillUncheckedCreateWithoutOpportunityInput> | OpportunitySkillCreateWithoutOpportunityInput[] | OpportunitySkillUncheckedCreateWithoutOpportunityInput[]
    connectOrCreate?: OpportunitySkillCreateOrConnectWithoutOpportunityInput | OpportunitySkillCreateOrConnectWithoutOpportunityInput[]
    createMany?: OpportunitySkillCreateManyOpportunityInputEnvelope
    connect?: OpportunitySkillWhereUniqueInput | OpportunitySkillWhereUniqueInput[]
  }

  export type ApplicationUncheckedCreateNestedManyWithoutOpportunityInput = {
    create?: XOR<ApplicationCreateWithoutOpportunityInput, ApplicationUncheckedCreateWithoutOpportunityInput> | ApplicationCreateWithoutOpportunityInput[] | ApplicationUncheckedCreateWithoutOpportunityInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutOpportunityInput | ApplicationCreateOrConnectWithoutOpportunityInput[]
    createMany?: ApplicationCreateManyOpportunityInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type MatchExplanationUncheckedCreateNestedManyWithoutOpportunityInput = {
    create?: XOR<MatchExplanationCreateWithoutOpportunityInput, MatchExplanationUncheckedCreateWithoutOpportunityInput> | MatchExplanationCreateWithoutOpportunityInput[] | MatchExplanationUncheckedCreateWithoutOpportunityInput[]
    connectOrCreate?: MatchExplanationCreateOrConnectWithoutOpportunityInput | MatchExplanationCreateOrConnectWithoutOpportunityInput[]
    createMany?: MatchExplanationCreateManyOpportunityInputEnvelope
    connect?: MatchExplanationWhereUniqueInput | MatchExplanationWhereUniqueInput[]
  }

  export type EnumOpportunityTypeFieldUpdateOperationsInput = {
    set?: $Enums.OpportunityType
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumPaymentTypeFieldUpdateOperationsInput = {
    set?: $Enums.PaymentType
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumOpportunityStatusFieldUpdateOperationsInput = {
    set?: $Enums.OpportunityStatus
  }

  export type UserUpdateOneRequiredWithoutOpportunitiesNestedInput = {
    create?: XOR<UserCreateWithoutOpportunitiesInput, UserUncheckedCreateWithoutOpportunitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutOpportunitiesInput
    upsert?: UserUpsertWithoutOpportunitiesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOpportunitiesInput, UserUpdateWithoutOpportunitiesInput>, UserUncheckedUpdateWithoutOpportunitiesInput>
  }

  export type OpportunitySkillUpdateManyWithoutOpportunityNestedInput = {
    create?: XOR<OpportunitySkillCreateWithoutOpportunityInput, OpportunitySkillUncheckedCreateWithoutOpportunityInput> | OpportunitySkillCreateWithoutOpportunityInput[] | OpportunitySkillUncheckedCreateWithoutOpportunityInput[]
    connectOrCreate?: OpportunitySkillCreateOrConnectWithoutOpportunityInput | OpportunitySkillCreateOrConnectWithoutOpportunityInput[]
    upsert?: OpportunitySkillUpsertWithWhereUniqueWithoutOpportunityInput | OpportunitySkillUpsertWithWhereUniqueWithoutOpportunityInput[]
    createMany?: OpportunitySkillCreateManyOpportunityInputEnvelope
    set?: OpportunitySkillWhereUniqueInput | OpportunitySkillWhereUniqueInput[]
    disconnect?: OpportunitySkillWhereUniqueInput | OpportunitySkillWhereUniqueInput[]
    delete?: OpportunitySkillWhereUniqueInput | OpportunitySkillWhereUniqueInput[]
    connect?: OpportunitySkillWhereUniqueInput | OpportunitySkillWhereUniqueInput[]
    update?: OpportunitySkillUpdateWithWhereUniqueWithoutOpportunityInput | OpportunitySkillUpdateWithWhereUniqueWithoutOpportunityInput[]
    updateMany?: OpportunitySkillUpdateManyWithWhereWithoutOpportunityInput | OpportunitySkillUpdateManyWithWhereWithoutOpportunityInput[]
    deleteMany?: OpportunitySkillScalarWhereInput | OpportunitySkillScalarWhereInput[]
  }

  export type ApplicationUpdateManyWithoutOpportunityNestedInput = {
    create?: XOR<ApplicationCreateWithoutOpportunityInput, ApplicationUncheckedCreateWithoutOpportunityInput> | ApplicationCreateWithoutOpportunityInput[] | ApplicationUncheckedCreateWithoutOpportunityInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutOpportunityInput | ApplicationCreateOrConnectWithoutOpportunityInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutOpportunityInput | ApplicationUpsertWithWhereUniqueWithoutOpportunityInput[]
    createMany?: ApplicationCreateManyOpportunityInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutOpportunityInput | ApplicationUpdateWithWhereUniqueWithoutOpportunityInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutOpportunityInput | ApplicationUpdateManyWithWhereWithoutOpportunityInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type MatchExplanationUpdateManyWithoutOpportunityNestedInput = {
    create?: XOR<MatchExplanationCreateWithoutOpportunityInput, MatchExplanationUncheckedCreateWithoutOpportunityInput> | MatchExplanationCreateWithoutOpportunityInput[] | MatchExplanationUncheckedCreateWithoutOpportunityInput[]
    connectOrCreate?: MatchExplanationCreateOrConnectWithoutOpportunityInput | MatchExplanationCreateOrConnectWithoutOpportunityInput[]
    upsert?: MatchExplanationUpsertWithWhereUniqueWithoutOpportunityInput | MatchExplanationUpsertWithWhereUniqueWithoutOpportunityInput[]
    createMany?: MatchExplanationCreateManyOpportunityInputEnvelope
    set?: MatchExplanationWhereUniqueInput | MatchExplanationWhereUniqueInput[]
    disconnect?: MatchExplanationWhereUniqueInput | MatchExplanationWhereUniqueInput[]
    delete?: MatchExplanationWhereUniqueInput | MatchExplanationWhereUniqueInput[]
    connect?: MatchExplanationWhereUniqueInput | MatchExplanationWhereUniqueInput[]
    update?: MatchExplanationUpdateWithWhereUniqueWithoutOpportunityInput | MatchExplanationUpdateWithWhereUniqueWithoutOpportunityInput[]
    updateMany?: MatchExplanationUpdateManyWithWhereWithoutOpportunityInput | MatchExplanationUpdateManyWithWhereWithoutOpportunityInput[]
    deleteMany?: MatchExplanationScalarWhereInput | MatchExplanationScalarWhereInput[]
  }

  export type OpportunitySkillUncheckedUpdateManyWithoutOpportunityNestedInput = {
    create?: XOR<OpportunitySkillCreateWithoutOpportunityInput, OpportunitySkillUncheckedCreateWithoutOpportunityInput> | OpportunitySkillCreateWithoutOpportunityInput[] | OpportunitySkillUncheckedCreateWithoutOpportunityInput[]
    connectOrCreate?: OpportunitySkillCreateOrConnectWithoutOpportunityInput | OpportunitySkillCreateOrConnectWithoutOpportunityInput[]
    upsert?: OpportunitySkillUpsertWithWhereUniqueWithoutOpportunityInput | OpportunitySkillUpsertWithWhereUniqueWithoutOpportunityInput[]
    createMany?: OpportunitySkillCreateManyOpportunityInputEnvelope
    set?: OpportunitySkillWhereUniqueInput | OpportunitySkillWhereUniqueInput[]
    disconnect?: OpportunitySkillWhereUniqueInput | OpportunitySkillWhereUniqueInput[]
    delete?: OpportunitySkillWhereUniqueInput | OpportunitySkillWhereUniqueInput[]
    connect?: OpportunitySkillWhereUniqueInput | OpportunitySkillWhereUniqueInput[]
    update?: OpportunitySkillUpdateWithWhereUniqueWithoutOpportunityInput | OpportunitySkillUpdateWithWhereUniqueWithoutOpportunityInput[]
    updateMany?: OpportunitySkillUpdateManyWithWhereWithoutOpportunityInput | OpportunitySkillUpdateManyWithWhereWithoutOpportunityInput[]
    deleteMany?: OpportunitySkillScalarWhereInput | OpportunitySkillScalarWhereInput[]
  }

  export type ApplicationUncheckedUpdateManyWithoutOpportunityNestedInput = {
    create?: XOR<ApplicationCreateWithoutOpportunityInput, ApplicationUncheckedCreateWithoutOpportunityInput> | ApplicationCreateWithoutOpportunityInput[] | ApplicationUncheckedCreateWithoutOpportunityInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutOpportunityInput | ApplicationCreateOrConnectWithoutOpportunityInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutOpportunityInput | ApplicationUpsertWithWhereUniqueWithoutOpportunityInput[]
    createMany?: ApplicationCreateManyOpportunityInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutOpportunityInput | ApplicationUpdateWithWhereUniqueWithoutOpportunityInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutOpportunityInput | ApplicationUpdateManyWithWhereWithoutOpportunityInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type MatchExplanationUncheckedUpdateManyWithoutOpportunityNestedInput = {
    create?: XOR<MatchExplanationCreateWithoutOpportunityInput, MatchExplanationUncheckedCreateWithoutOpportunityInput> | MatchExplanationCreateWithoutOpportunityInput[] | MatchExplanationUncheckedCreateWithoutOpportunityInput[]
    connectOrCreate?: MatchExplanationCreateOrConnectWithoutOpportunityInput | MatchExplanationCreateOrConnectWithoutOpportunityInput[]
    upsert?: MatchExplanationUpsertWithWhereUniqueWithoutOpportunityInput | MatchExplanationUpsertWithWhereUniqueWithoutOpportunityInput[]
    createMany?: MatchExplanationCreateManyOpportunityInputEnvelope
    set?: MatchExplanationWhereUniqueInput | MatchExplanationWhereUniqueInput[]
    disconnect?: MatchExplanationWhereUniqueInput | MatchExplanationWhereUniqueInput[]
    delete?: MatchExplanationWhereUniqueInput | MatchExplanationWhereUniqueInput[]
    connect?: MatchExplanationWhereUniqueInput | MatchExplanationWhereUniqueInput[]
    update?: MatchExplanationUpdateWithWhereUniqueWithoutOpportunityInput | MatchExplanationUpdateWithWhereUniqueWithoutOpportunityInput[]
    updateMany?: MatchExplanationUpdateManyWithWhereWithoutOpportunityInput | MatchExplanationUpdateManyWithWhereWithoutOpportunityInput[]
    deleteMany?: MatchExplanationScalarWhereInput | MatchExplanationScalarWhereInput[]
  }

  export type OpportunityCreateNestedOneWithoutSkillsInput = {
    create?: XOR<OpportunityCreateWithoutSkillsInput, OpportunityUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: OpportunityCreateOrConnectWithoutSkillsInput
    connect?: OpportunityWhereUniqueInput
  }

  export type SkillCreateNestedOneWithoutOpportunitiesInput = {
    create?: XOR<SkillCreateWithoutOpportunitiesInput, SkillUncheckedCreateWithoutOpportunitiesInput>
    connectOrCreate?: SkillCreateOrConnectWithoutOpportunitiesInput
    connect?: SkillWhereUniqueInput
  }

  export type OpportunityUpdateOneRequiredWithoutSkillsNestedInput = {
    create?: XOR<OpportunityCreateWithoutSkillsInput, OpportunityUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: OpportunityCreateOrConnectWithoutSkillsInput
    upsert?: OpportunityUpsertWithoutSkillsInput
    connect?: OpportunityWhereUniqueInput
    update?: XOR<XOR<OpportunityUpdateToOneWithWhereWithoutSkillsInput, OpportunityUpdateWithoutSkillsInput>, OpportunityUncheckedUpdateWithoutSkillsInput>
  }

  export type SkillUpdateOneRequiredWithoutOpportunitiesNestedInput = {
    create?: XOR<SkillCreateWithoutOpportunitiesInput, SkillUncheckedCreateWithoutOpportunitiesInput>
    connectOrCreate?: SkillCreateOrConnectWithoutOpportunitiesInput
    upsert?: SkillUpsertWithoutOpportunitiesInput
    connect?: SkillWhereUniqueInput
    update?: XOR<XOR<SkillUpdateToOneWithWhereWithoutOpportunitiesInput, SkillUpdateWithoutOpportunitiesInput>, SkillUncheckedUpdateWithoutOpportunitiesInput>
  }

  export type OpportunityCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<OpportunityCreateWithoutApplicationsInput, OpportunityUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: OpportunityCreateOrConnectWithoutApplicationsInput
    connect?: OpportunityWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApplicationsInput
    connect?: UserWhereUniqueInput
  }

  export type ReviewCreateNestedManyWithoutApplicationInput = {
    create?: XOR<ReviewCreateWithoutApplicationInput, ReviewUncheckedCreateWithoutApplicationInput> | ReviewCreateWithoutApplicationInput[] | ReviewUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutApplicationInput | ReviewCreateOrConnectWithoutApplicationInput[]
    createMany?: ReviewCreateManyApplicationInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutApplicationInput = {
    create?: XOR<ReviewCreateWithoutApplicationInput, ReviewUncheckedCreateWithoutApplicationInput> | ReviewCreateWithoutApplicationInput[] | ReviewUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutApplicationInput | ReviewCreateOrConnectWithoutApplicationInput[]
    createMany?: ReviewCreateManyApplicationInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type EnumApplicationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ApplicationStatus
  }

  export type OpportunityUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<OpportunityCreateWithoutApplicationsInput, OpportunityUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: OpportunityCreateOrConnectWithoutApplicationsInput
    upsert?: OpportunityUpsertWithoutApplicationsInput
    connect?: OpportunityWhereUniqueInput
    update?: XOR<XOR<OpportunityUpdateToOneWithWhereWithoutApplicationsInput, OpportunityUpdateWithoutApplicationsInput>, OpportunityUncheckedUpdateWithoutApplicationsInput>
  }

  export type UserUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApplicationsInput
    upsert?: UserUpsertWithoutApplicationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApplicationsInput, UserUpdateWithoutApplicationsInput>, UserUncheckedUpdateWithoutApplicationsInput>
  }

  export type ReviewUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<ReviewCreateWithoutApplicationInput, ReviewUncheckedCreateWithoutApplicationInput> | ReviewCreateWithoutApplicationInput[] | ReviewUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutApplicationInput | ReviewCreateOrConnectWithoutApplicationInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutApplicationInput | ReviewUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: ReviewCreateManyApplicationInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutApplicationInput | ReviewUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutApplicationInput | ReviewUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<ReviewCreateWithoutApplicationInput, ReviewUncheckedCreateWithoutApplicationInput> | ReviewCreateWithoutApplicationInput[] | ReviewUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutApplicationInput | ReviewCreateOrConnectWithoutApplicationInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutApplicationInput | ReviewUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: ReviewCreateManyApplicationInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutApplicationInput | ReviewUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutApplicationInput | ReviewUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOtpsInput = {
    create?: XOR<UserCreateWithoutOtpsInput, UserUncheckedCreateWithoutOtpsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOtpsInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutOtpsNestedInput = {
    create?: XOR<UserCreateWithoutOtpsInput, UserUncheckedCreateWithoutOtpsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOtpsInput
    upsert?: UserUpsertWithoutOtpsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOtpsInput, UserUpdateWithoutOtpsInput>, UserUncheckedUpdateWithoutOtpsInput>
  }

  export type ApplicationCreateNestedOneWithoutReviewsInput = {
    create?: XOR<ApplicationCreateWithoutReviewsInput, ApplicationUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutReviewsInput
    connect?: ApplicationWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReviewsGivenInput = {
    create?: XOR<UserCreateWithoutReviewsGivenInput, UserUncheckedCreateWithoutReviewsGivenInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsGivenInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReviewsReceivedInput = {
    create?: XOR<UserCreateWithoutReviewsReceivedInput, UserUncheckedCreateWithoutReviewsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsReceivedInput
    connect?: UserWhereUniqueInput
  }

  export type ApplicationUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<ApplicationCreateWithoutReviewsInput, ApplicationUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutReviewsInput
    upsert?: ApplicationUpsertWithoutReviewsInput
    connect?: ApplicationWhereUniqueInput
    update?: XOR<XOR<ApplicationUpdateToOneWithWhereWithoutReviewsInput, ApplicationUpdateWithoutReviewsInput>, ApplicationUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateOneRequiredWithoutReviewsGivenNestedInput = {
    create?: XOR<UserCreateWithoutReviewsGivenInput, UserUncheckedCreateWithoutReviewsGivenInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsGivenInput
    upsert?: UserUpsertWithoutReviewsGivenInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsGivenInput, UserUpdateWithoutReviewsGivenInput>, UserUncheckedUpdateWithoutReviewsGivenInput>
  }

  export type UserUpdateOneRequiredWithoutReviewsReceivedNestedInput = {
    create?: XOR<UserCreateWithoutReviewsReceivedInput, UserUncheckedCreateWithoutReviewsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsReceivedInput
    upsert?: UserUpsertWithoutReviewsReceivedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsReceivedInput, UserUpdateWithoutReviewsReceivedInput>, UserUncheckedUpdateWithoutReviewsReceivedInput>
  }

  export type UserCreateNestedOneWithoutMatchExplanationsInput = {
    create?: XOR<UserCreateWithoutMatchExplanationsInput, UserUncheckedCreateWithoutMatchExplanationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMatchExplanationsInput
    connect?: UserWhereUniqueInput
  }

  export type OpportunityCreateNestedOneWithoutMatchExplanationsInput = {
    create?: XOR<OpportunityCreateWithoutMatchExplanationsInput, OpportunityUncheckedCreateWithoutMatchExplanationsInput>
    connectOrCreate?: OpportunityCreateOrConnectWithoutMatchExplanationsInput
    connect?: OpportunityWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMatchExplanationsNestedInput = {
    create?: XOR<UserCreateWithoutMatchExplanationsInput, UserUncheckedCreateWithoutMatchExplanationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMatchExplanationsInput
    upsert?: UserUpsertWithoutMatchExplanationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMatchExplanationsInput, UserUpdateWithoutMatchExplanationsInput>, UserUncheckedUpdateWithoutMatchExplanationsInput>
  }

  export type OpportunityUpdateOneRequiredWithoutMatchExplanationsNestedInput = {
    create?: XOR<OpportunityCreateWithoutMatchExplanationsInput, OpportunityUncheckedCreateWithoutMatchExplanationsInput>
    connectOrCreate?: OpportunityCreateOrConnectWithoutMatchExplanationsInput
    upsert?: OpportunityUpsertWithoutMatchExplanationsInput
    connect?: OpportunityWhereUniqueInput
    update?: XOR<XOR<OpportunityUpdateToOneWithWhereWithoutMatchExplanationsInput, OpportunityUpdateWithoutMatchExplanationsInput>, OpportunityUncheckedUpdateWithoutMatchExplanationsInput>
  }

  export type UserCreateNestedOneWithoutSkillRequestsInput = {
    create?: XOR<UserCreateWithoutSkillRequestsInput, UserUncheckedCreateWithoutSkillRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSkillRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumSkillRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.SkillRequestStatus
  }

  export type UserUpdateOneRequiredWithoutSkillRequestsNestedInput = {
    create?: XOR<UserCreateWithoutSkillRequestsInput, UserUncheckedCreateWithoutSkillRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSkillRequestsInput
    upsert?: UserUpsertWithoutSkillRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSkillRequestsInput, UserUpdateWithoutSkillRequestsInput>, UserUncheckedUpdateWithoutSkillRequestsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedEnumExperienceLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.ExperienceLevel | EnumExperienceLevelFieldRefInput<$PrismaModel>
    in?: $Enums.ExperienceLevel[] | ListEnumExperienceLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExperienceLevel[] | ListEnumExperienceLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumExperienceLevelFilter<$PrismaModel> | $Enums.ExperienceLevel
  }

  export type NestedEnumExperienceLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExperienceLevel | EnumExperienceLevelFieldRefInput<$PrismaModel>
    in?: $Enums.ExperienceLevel[] | ListEnumExperienceLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExperienceLevel[] | ListEnumExperienceLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumExperienceLevelWithAggregatesFilter<$PrismaModel> | $Enums.ExperienceLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExperienceLevelFilter<$PrismaModel>
    _max?: NestedEnumExperienceLevelFilter<$PrismaModel>
  }

  export type NestedEnumOpportunityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.OpportunityType | EnumOpportunityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OpportunityType[] | ListEnumOpportunityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OpportunityType[] | ListEnumOpportunityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOpportunityTypeFilter<$PrismaModel> | $Enums.OpportunityType
  }

  export type NestedEnumPaymentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentType | EnumPaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentTypeFilter<$PrismaModel> | $Enums.PaymentType
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumOpportunityStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OpportunityStatus | EnumOpportunityStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OpportunityStatus[] | ListEnumOpportunityStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OpportunityStatus[] | ListEnumOpportunityStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOpportunityStatusFilter<$PrismaModel> | $Enums.OpportunityStatus
  }

  export type NestedEnumOpportunityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OpportunityType | EnumOpportunityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OpportunityType[] | ListEnumOpportunityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OpportunityType[] | ListEnumOpportunityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOpportunityTypeWithAggregatesFilter<$PrismaModel> | $Enums.OpportunityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOpportunityTypeFilter<$PrismaModel>
    _max?: NestedEnumOpportunityTypeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumPaymentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentType | EnumPaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentTypeWithAggregatesFilter<$PrismaModel> | $Enums.PaymentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentTypeFilter<$PrismaModel>
    _max?: NestedEnumPaymentTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumOpportunityStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OpportunityStatus | EnumOpportunityStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OpportunityStatus[] | ListEnumOpportunityStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OpportunityStatus[] | ListEnumOpportunityStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOpportunityStatusWithAggregatesFilter<$PrismaModel> | $Enums.OpportunityStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOpportunityStatusFilter<$PrismaModel>
    _max?: NestedEnumOpportunityStatusFilter<$PrismaModel>
  }

  export type NestedEnumApplicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusFilter<$PrismaModel> | $Enums.ApplicationStatus
  }

  export type NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApplicationStatusFilter<$PrismaModel>
    _max?: NestedEnumApplicationStatusFilter<$PrismaModel>
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

  export type NestedEnumSkillRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillRequestStatus | EnumSkillRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SkillRequestStatus[] | ListEnumSkillRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SkillRequestStatus[] | ListEnumSkillRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSkillRequestStatusFilter<$PrismaModel> | $Enums.SkillRequestStatus
  }

  export type NestedEnumSkillRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillRequestStatus | EnumSkillRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SkillRequestStatus[] | ListEnumSkillRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SkillRequestStatus[] | ListEnumSkillRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSkillRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.SkillRequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSkillRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumSkillRequestStatusFilter<$PrismaModel>
  }

  export type UserSkillCreateWithoutUserInput = {
    id?: string
    experienceLevel?: $Enums.ExperienceLevel
    createdAt?: Date | string
    skill: SkillCreateNestedOneWithoutUsersInput
  }

  export type UserSkillUncheckedCreateWithoutUserInput = {
    id?: string
    skillId: string
    experienceLevel?: $Enums.ExperienceLevel
    createdAt?: Date | string
  }

  export type UserSkillCreateOrConnectWithoutUserInput = {
    where: UserSkillWhereUniqueInput
    create: XOR<UserSkillCreateWithoutUserInput, UserSkillUncheckedCreateWithoutUserInput>
  }

  export type UserSkillCreateManyUserInputEnvelope = {
    data: UserSkillCreateManyUserInput | UserSkillCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OpportunityCreateWithoutEmployerInput = {
    id?: string
    title: string
    description: string
    type?: $Enums.OpportunityType
    location: string
    payment?: number | null
    paymentType?: $Enums.PaymentType
    deadline?: Date | string | null
    status?: $Enums.OpportunityStatus
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: OpportunitySkillCreateNestedManyWithoutOpportunityInput
    applications?: ApplicationCreateNestedManyWithoutOpportunityInput
    matchExplanations?: MatchExplanationCreateNestedManyWithoutOpportunityInput
  }

  export type OpportunityUncheckedCreateWithoutEmployerInput = {
    id?: string
    title: string
    description: string
    type?: $Enums.OpportunityType
    location: string
    payment?: number | null
    paymentType?: $Enums.PaymentType
    deadline?: Date | string | null
    status?: $Enums.OpportunityStatus
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: OpportunitySkillUncheckedCreateNestedManyWithoutOpportunityInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutOpportunityInput
    matchExplanations?: MatchExplanationUncheckedCreateNestedManyWithoutOpportunityInput
  }

  export type OpportunityCreateOrConnectWithoutEmployerInput = {
    where: OpportunityWhereUniqueInput
    create: XOR<OpportunityCreateWithoutEmployerInput, OpportunityUncheckedCreateWithoutEmployerInput>
  }

  export type OpportunityCreateManyEmployerInputEnvelope = {
    data: OpportunityCreateManyEmployerInput | OpportunityCreateManyEmployerInput[]
    skipDuplicates?: boolean
  }

  export type ApplicationCreateWithoutApplicantInput = {
    id?: string
    message: string
    status?: $Enums.ApplicationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    opportunity: OpportunityCreateNestedOneWithoutApplicationsInput
    reviews?: ReviewCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateWithoutApplicantInput = {
    id?: string
    opportunityId: string
    message: string
    status?: $Enums.ApplicationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationCreateOrConnectWithoutApplicantInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutApplicantInput, ApplicationUncheckedCreateWithoutApplicantInput>
  }

  export type ApplicationCreateManyApplicantInputEnvelope = {
    data: ApplicationCreateManyApplicantInput | ApplicationCreateManyApplicantInput[]
    skipDuplicates?: boolean
  }

  export type MatchExplanationCreateWithoutGraduateInput = {
    id?: string
    explanation: string
    createdAt?: Date | string
    updatedAt?: Date | string
    opportunity: OpportunityCreateNestedOneWithoutMatchExplanationsInput
  }

  export type MatchExplanationUncheckedCreateWithoutGraduateInput = {
    id?: string
    opportunityId: string
    explanation: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchExplanationCreateOrConnectWithoutGraduateInput = {
    where: MatchExplanationWhereUniqueInput
    create: XOR<MatchExplanationCreateWithoutGraduateInput, MatchExplanationUncheckedCreateWithoutGraduateInput>
  }

  export type MatchExplanationCreateManyGraduateInputEnvelope = {
    data: MatchExplanationCreateManyGraduateInput | MatchExplanationCreateManyGraduateInput[]
    skipDuplicates?: boolean
  }

  export type SkillRequestCreateWithoutEmployerInput = {
    id?: string
    name: string
    status?: $Enums.SkillRequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SkillRequestUncheckedCreateWithoutEmployerInput = {
    id?: string
    name: string
    status?: $Enums.SkillRequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SkillRequestCreateOrConnectWithoutEmployerInput = {
    where: SkillRequestWhereUniqueInput
    create: XOR<SkillRequestCreateWithoutEmployerInput, SkillRequestUncheckedCreateWithoutEmployerInput>
  }

  export type SkillRequestCreateManyEmployerInputEnvelope = {
    data: SkillRequestCreateManyEmployerInput | SkillRequestCreateManyEmployerInput[]
    skipDuplicates?: boolean
  }

  export type PhoneOtpCreateWithoutUserInput = {
    id?: string
    phone: string
    codeHash: string
    attempts?: number
    expiresAt: Date | string
    used?: boolean
    createdAt?: Date | string
  }

  export type PhoneOtpUncheckedCreateWithoutUserInput = {
    id?: string
    phone: string
    codeHash: string
    attempts?: number
    expiresAt: Date | string
    used?: boolean
    createdAt?: Date | string
  }

  export type PhoneOtpCreateOrConnectWithoutUserInput = {
    where: PhoneOtpWhereUniqueInput
    create: XOR<PhoneOtpCreateWithoutUserInput, PhoneOtpUncheckedCreateWithoutUserInput>
  }

  export type PhoneOtpCreateManyUserInputEnvelope = {
    data: PhoneOtpCreateManyUserInput | PhoneOtpCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutReviewerInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    application: ApplicationCreateNestedOneWithoutReviewsInput
    reviewee: UserCreateNestedOneWithoutReviewsReceivedInput
  }

  export type ReviewUncheckedCreateWithoutReviewerInput = {
    id?: string
    applicationId: string
    revieweeId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutReviewerInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput>
  }

  export type ReviewCreateManyReviewerInputEnvelope = {
    data: ReviewCreateManyReviewerInput | ReviewCreateManyReviewerInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutRevieweeInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    application: ApplicationCreateNestedOneWithoutReviewsInput
    reviewer: UserCreateNestedOneWithoutReviewsGivenInput
  }

  export type ReviewUncheckedCreateWithoutRevieweeInput = {
    id?: string
    applicationId: string
    reviewerId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutRevieweeInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutRevieweeInput, ReviewUncheckedCreateWithoutRevieweeInput>
  }

  export type ReviewCreateManyRevieweeInputEnvelope = {
    data: ReviewCreateManyRevieweeInput | ReviewCreateManyRevieweeInput[]
    skipDuplicates?: boolean
  }

  export type UserSkillUpsertWithWhereUniqueWithoutUserInput = {
    where: UserSkillWhereUniqueInput
    update: XOR<UserSkillUpdateWithoutUserInput, UserSkillUncheckedUpdateWithoutUserInput>
    create: XOR<UserSkillCreateWithoutUserInput, UserSkillUncheckedCreateWithoutUserInput>
  }

  export type UserSkillUpdateWithWhereUniqueWithoutUserInput = {
    where: UserSkillWhereUniqueInput
    data: XOR<UserSkillUpdateWithoutUserInput, UserSkillUncheckedUpdateWithoutUserInput>
  }

  export type UserSkillUpdateManyWithWhereWithoutUserInput = {
    where: UserSkillScalarWhereInput
    data: XOR<UserSkillUpdateManyMutationInput, UserSkillUncheckedUpdateManyWithoutUserInput>
  }

  export type UserSkillScalarWhereInput = {
    AND?: UserSkillScalarWhereInput | UserSkillScalarWhereInput[]
    OR?: UserSkillScalarWhereInput[]
    NOT?: UserSkillScalarWhereInput | UserSkillScalarWhereInput[]
    id?: StringFilter<"UserSkill"> | string
    userId?: StringFilter<"UserSkill"> | string
    skillId?: StringFilter<"UserSkill"> | string
    experienceLevel?: EnumExperienceLevelFilter<"UserSkill"> | $Enums.ExperienceLevel
    createdAt?: DateTimeFilter<"UserSkill"> | Date | string
  }

  export type OpportunityUpsertWithWhereUniqueWithoutEmployerInput = {
    where: OpportunityWhereUniqueInput
    update: XOR<OpportunityUpdateWithoutEmployerInput, OpportunityUncheckedUpdateWithoutEmployerInput>
    create: XOR<OpportunityCreateWithoutEmployerInput, OpportunityUncheckedCreateWithoutEmployerInput>
  }

  export type OpportunityUpdateWithWhereUniqueWithoutEmployerInput = {
    where: OpportunityWhereUniqueInput
    data: XOR<OpportunityUpdateWithoutEmployerInput, OpportunityUncheckedUpdateWithoutEmployerInput>
  }

  export type OpportunityUpdateManyWithWhereWithoutEmployerInput = {
    where: OpportunityScalarWhereInput
    data: XOR<OpportunityUpdateManyMutationInput, OpportunityUncheckedUpdateManyWithoutEmployerInput>
  }

  export type OpportunityScalarWhereInput = {
    AND?: OpportunityScalarWhereInput | OpportunityScalarWhereInput[]
    OR?: OpportunityScalarWhereInput[]
    NOT?: OpportunityScalarWhereInput | OpportunityScalarWhereInput[]
    id?: StringFilter<"Opportunity"> | string
    title?: StringFilter<"Opportunity"> | string
    description?: StringFilter<"Opportunity"> | string
    type?: EnumOpportunityTypeFilter<"Opportunity"> | $Enums.OpportunityType
    location?: StringFilter<"Opportunity"> | string
    payment?: IntNullableFilter<"Opportunity"> | number | null
    paymentType?: EnumPaymentTypeFilter<"Opportunity"> | $Enums.PaymentType
    deadline?: DateTimeNullableFilter<"Opportunity"> | Date | string | null
    employerId?: StringFilter<"Opportunity"> | string
    status?: EnumOpportunityStatusFilter<"Opportunity"> | $Enums.OpportunityStatus
    verified?: BoolFilter<"Opportunity"> | boolean
    createdAt?: DateTimeFilter<"Opportunity"> | Date | string
    updatedAt?: DateTimeFilter<"Opportunity"> | Date | string
  }

  export type ApplicationUpsertWithWhereUniqueWithoutApplicantInput = {
    where: ApplicationWhereUniqueInput
    update: XOR<ApplicationUpdateWithoutApplicantInput, ApplicationUncheckedUpdateWithoutApplicantInput>
    create: XOR<ApplicationCreateWithoutApplicantInput, ApplicationUncheckedCreateWithoutApplicantInput>
  }

  export type ApplicationUpdateWithWhereUniqueWithoutApplicantInput = {
    where: ApplicationWhereUniqueInput
    data: XOR<ApplicationUpdateWithoutApplicantInput, ApplicationUncheckedUpdateWithoutApplicantInput>
  }

  export type ApplicationUpdateManyWithWhereWithoutApplicantInput = {
    where: ApplicationScalarWhereInput
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyWithoutApplicantInput>
  }

  export type ApplicationScalarWhereInput = {
    AND?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
    OR?: ApplicationScalarWhereInput[]
    NOT?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
    id?: StringFilter<"Application"> | string
    opportunityId?: StringFilter<"Application"> | string
    applicantId?: StringFilter<"Application"> | string
    message?: StringFilter<"Application"> | string
    status?: EnumApplicationStatusFilter<"Application"> | $Enums.ApplicationStatus
    createdAt?: DateTimeFilter<"Application"> | Date | string
    updatedAt?: DateTimeFilter<"Application"> | Date | string
  }

  export type MatchExplanationUpsertWithWhereUniqueWithoutGraduateInput = {
    where: MatchExplanationWhereUniqueInput
    update: XOR<MatchExplanationUpdateWithoutGraduateInput, MatchExplanationUncheckedUpdateWithoutGraduateInput>
    create: XOR<MatchExplanationCreateWithoutGraduateInput, MatchExplanationUncheckedCreateWithoutGraduateInput>
  }

  export type MatchExplanationUpdateWithWhereUniqueWithoutGraduateInput = {
    where: MatchExplanationWhereUniqueInput
    data: XOR<MatchExplanationUpdateWithoutGraduateInput, MatchExplanationUncheckedUpdateWithoutGraduateInput>
  }

  export type MatchExplanationUpdateManyWithWhereWithoutGraduateInput = {
    where: MatchExplanationScalarWhereInput
    data: XOR<MatchExplanationUpdateManyMutationInput, MatchExplanationUncheckedUpdateManyWithoutGraduateInput>
  }

  export type MatchExplanationScalarWhereInput = {
    AND?: MatchExplanationScalarWhereInput | MatchExplanationScalarWhereInput[]
    OR?: MatchExplanationScalarWhereInput[]
    NOT?: MatchExplanationScalarWhereInput | MatchExplanationScalarWhereInput[]
    id?: StringFilter<"MatchExplanation"> | string
    graduateId?: StringFilter<"MatchExplanation"> | string
    opportunityId?: StringFilter<"MatchExplanation"> | string
    explanation?: StringFilter<"MatchExplanation"> | string
    createdAt?: DateTimeFilter<"MatchExplanation"> | Date | string
    updatedAt?: DateTimeFilter<"MatchExplanation"> | Date | string
  }

  export type SkillRequestUpsertWithWhereUniqueWithoutEmployerInput = {
    where: SkillRequestWhereUniqueInput
    update: XOR<SkillRequestUpdateWithoutEmployerInput, SkillRequestUncheckedUpdateWithoutEmployerInput>
    create: XOR<SkillRequestCreateWithoutEmployerInput, SkillRequestUncheckedCreateWithoutEmployerInput>
  }

  export type SkillRequestUpdateWithWhereUniqueWithoutEmployerInput = {
    where: SkillRequestWhereUniqueInput
    data: XOR<SkillRequestUpdateWithoutEmployerInput, SkillRequestUncheckedUpdateWithoutEmployerInput>
  }

  export type SkillRequestUpdateManyWithWhereWithoutEmployerInput = {
    where: SkillRequestScalarWhereInput
    data: XOR<SkillRequestUpdateManyMutationInput, SkillRequestUncheckedUpdateManyWithoutEmployerInput>
  }

  export type SkillRequestScalarWhereInput = {
    AND?: SkillRequestScalarWhereInput | SkillRequestScalarWhereInput[]
    OR?: SkillRequestScalarWhereInput[]
    NOT?: SkillRequestScalarWhereInput | SkillRequestScalarWhereInput[]
    id?: StringFilter<"SkillRequest"> | string
    name?: StringFilter<"SkillRequest"> | string
    employerId?: StringFilter<"SkillRequest"> | string
    status?: EnumSkillRequestStatusFilter<"SkillRequest"> | $Enums.SkillRequestStatus
    createdAt?: DateTimeFilter<"SkillRequest"> | Date | string
    updatedAt?: DateTimeFilter<"SkillRequest"> | Date | string
  }

  export type PhoneOtpUpsertWithWhereUniqueWithoutUserInput = {
    where: PhoneOtpWhereUniqueInput
    update: XOR<PhoneOtpUpdateWithoutUserInput, PhoneOtpUncheckedUpdateWithoutUserInput>
    create: XOR<PhoneOtpCreateWithoutUserInput, PhoneOtpUncheckedCreateWithoutUserInput>
  }

  export type PhoneOtpUpdateWithWhereUniqueWithoutUserInput = {
    where: PhoneOtpWhereUniqueInput
    data: XOR<PhoneOtpUpdateWithoutUserInput, PhoneOtpUncheckedUpdateWithoutUserInput>
  }

  export type PhoneOtpUpdateManyWithWhereWithoutUserInput = {
    where: PhoneOtpScalarWhereInput
    data: XOR<PhoneOtpUpdateManyMutationInput, PhoneOtpUncheckedUpdateManyWithoutUserInput>
  }

  export type PhoneOtpScalarWhereInput = {
    AND?: PhoneOtpScalarWhereInput | PhoneOtpScalarWhereInput[]
    OR?: PhoneOtpScalarWhereInput[]
    NOT?: PhoneOtpScalarWhereInput | PhoneOtpScalarWhereInput[]
    id?: StringFilter<"PhoneOtp"> | string
    userId?: StringFilter<"PhoneOtp"> | string
    phone?: StringFilter<"PhoneOtp"> | string
    codeHash?: StringFilter<"PhoneOtp"> | string
    attempts?: IntFilter<"PhoneOtp"> | number
    expiresAt?: DateTimeFilter<"PhoneOtp"> | Date | string
    used?: BoolFilter<"PhoneOtp"> | boolean
    createdAt?: DateTimeFilter<"PhoneOtp"> | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutReviewerInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutReviewerInput, ReviewUncheckedUpdateWithoutReviewerInput>
    create: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutReviewerInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutReviewerInput, ReviewUncheckedUpdateWithoutReviewerInput>
  }

  export type ReviewUpdateManyWithWhereWithoutReviewerInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutReviewerInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: StringFilter<"Review"> | string
    applicationId?: StringFilter<"Review"> | string
    reviewerId?: StringFilter<"Review"> | string
    revieweeId?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutRevieweeInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutRevieweeInput, ReviewUncheckedUpdateWithoutRevieweeInput>
    create: XOR<ReviewCreateWithoutRevieweeInput, ReviewUncheckedCreateWithoutRevieweeInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutRevieweeInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutRevieweeInput, ReviewUncheckedUpdateWithoutRevieweeInput>
  }

  export type ReviewUpdateManyWithWhereWithoutRevieweeInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutRevieweeInput>
  }

  export type UserSkillCreateWithoutSkillInput = {
    id?: string
    experienceLevel?: $Enums.ExperienceLevel
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSkillsInput
  }

  export type UserSkillUncheckedCreateWithoutSkillInput = {
    id?: string
    userId: string
    experienceLevel?: $Enums.ExperienceLevel
    createdAt?: Date | string
  }

  export type UserSkillCreateOrConnectWithoutSkillInput = {
    where: UserSkillWhereUniqueInput
    create: XOR<UserSkillCreateWithoutSkillInput, UserSkillUncheckedCreateWithoutSkillInput>
  }

  export type UserSkillCreateManySkillInputEnvelope = {
    data: UserSkillCreateManySkillInput | UserSkillCreateManySkillInput[]
    skipDuplicates?: boolean
  }

  export type OpportunitySkillCreateWithoutSkillInput = {
    id?: string
    opportunity: OpportunityCreateNestedOneWithoutSkillsInput
  }

  export type OpportunitySkillUncheckedCreateWithoutSkillInput = {
    id?: string
    opportunityId: string
  }

  export type OpportunitySkillCreateOrConnectWithoutSkillInput = {
    where: OpportunitySkillWhereUniqueInput
    create: XOR<OpportunitySkillCreateWithoutSkillInput, OpportunitySkillUncheckedCreateWithoutSkillInput>
  }

  export type OpportunitySkillCreateManySkillInputEnvelope = {
    data: OpportunitySkillCreateManySkillInput | OpportunitySkillCreateManySkillInput[]
    skipDuplicates?: boolean
  }

  export type UserSkillUpsertWithWhereUniqueWithoutSkillInput = {
    where: UserSkillWhereUniqueInput
    update: XOR<UserSkillUpdateWithoutSkillInput, UserSkillUncheckedUpdateWithoutSkillInput>
    create: XOR<UserSkillCreateWithoutSkillInput, UserSkillUncheckedCreateWithoutSkillInput>
  }

  export type UserSkillUpdateWithWhereUniqueWithoutSkillInput = {
    where: UserSkillWhereUniqueInput
    data: XOR<UserSkillUpdateWithoutSkillInput, UserSkillUncheckedUpdateWithoutSkillInput>
  }

  export type UserSkillUpdateManyWithWhereWithoutSkillInput = {
    where: UserSkillScalarWhereInput
    data: XOR<UserSkillUpdateManyMutationInput, UserSkillUncheckedUpdateManyWithoutSkillInput>
  }

  export type OpportunitySkillUpsertWithWhereUniqueWithoutSkillInput = {
    where: OpportunitySkillWhereUniqueInput
    update: XOR<OpportunitySkillUpdateWithoutSkillInput, OpportunitySkillUncheckedUpdateWithoutSkillInput>
    create: XOR<OpportunitySkillCreateWithoutSkillInput, OpportunitySkillUncheckedCreateWithoutSkillInput>
  }

  export type OpportunitySkillUpdateWithWhereUniqueWithoutSkillInput = {
    where: OpportunitySkillWhereUniqueInput
    data: XOR<OpportunitySkillUpdateWithoutSkillInput, OpportunitySkillUncheckedUpdateWithoutSkillInput>
  }

  export type OpportunitySkillUpdateManyWithWhereWithoutSkillInput = {
    where: OpportunitySkillScalarWhereInput
    data: XOR<OpportunitySkillUpdateManyMutationInput, OpportunitySkillUncheckedUpdateManyWithoutSkillInput>
  }

  export type OpportunitySkillScalarWhereInput = {
    AND?: OpportunitySkillScalarWhereInput | OpportunitySkillScalarWhereInput[]
    OR?: OpportunitySkillScalarWhereInput[]
    NOT?: OpportunitySkillScalarWhereInput | OpportunitySkillScalarWhereInput[]
    id?: StringFilter<"OpportunitySkill"> | string
    opportunityId?: StringFilter<"OpportunitySkill"> | string
    skillId?: StringFilter<"OpportunitySkill"> | string
  }

  export type UserCreateWithoutSkillsInput = {
    id?: string
    firebaseUid: string
    name: string
    email: string
    emailVerified?: boolean
    phone?: string | null
    phoneVerified?: boolean
    role?: $Enums.Role
    bio?: string | null
    companyName?: string | null
    jobTitle?: string | null
    location?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    opportunities?: OpportunityCreateNestedManyWithoutEmployerInput
    applications?: ApplicationCreateNestedManyWithoutApplicantInput
    matchExplanations?: MatchExplanationCreateNestedManyWithoutGraduateInput
    skillRequests?: SkillRequestCreateNestedManyWithoutEmployerInput
    otps?: PhoneOtpCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewCreateNestedManyWithoutRevieweeInput
  }

  export type UserUncheckedCreateWithoutSkillsInput = {
    id?: string
    firebaseUid: string
    name: string
    email: string
    emailVerified?: boolean
    phone?: string | null
    phoneVerified?: boolean
    role?: $Enums.Role
    bio?: string | null
    companyName?: string | null
    jobTitle?: string | null
    location?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    opportunities?: OpportunityUncheckedCreateNestedManyWithoutEmployerInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutApplicantInput
    matchExplanations?: MatchExplanationUncheckedCreateNestedManyWithoutGraduateInput
    skillRequests?: SkillRequestUncheckedCreateNestedManyWithoutEmployerInput
    otps?: PhoneOtpUncheckedCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutRevieweeInput
  }

  export type UserCreateOrConnectWithoutSkillsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSkillsInput, UserUncheckedCreateWithoutSkillsInput>
  }

  export type SkillCreateWithoutUsersInput = {
    id?: string
    name: string
    category?: string | null
    createdAt?: Date | string
    opportunities?: OpportunitySkillCreateNestedManyWithoutSkillInput
  }

  export type SkillUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    category?: string | null
    createdAt?: Date | string
    opportunities?: OpportunitySkillUncheckedCreateNestedManyWithoutSkillInput
  }

  export type SkillCreateOrConnectWithoutUsersInput = {
    where: SkillWhereUniqueInput
    create: XOR<SkillCreateWithoutUsersInput, SkillUncheckedCreateWithoutUsersInput>
  }

  export type UserUpsertWithoutSkillsInput = {
    update: XOR<UserUpdateWithoutSkillsInput, UserUncheckedUpdateWithoutSkillsInput>
    create: XOR<UserCreateWithoutSkillsInput, UserUncheckedCreateWithoutSkillsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSkillsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSkillsInput, UserUncheckedUpdateWithoutSkillsInput>
  }

  export type UserUpdateWithoutSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    opportunities?: OpportunityUpdateManyWithoutEmployerNestedInput
    applications?: ApplicationUpdateManyWithoutApplicantNestedInput
    matchExplanations?: MatchExplanationUpdateManyWithoutGraduateNestedInput
    skillRequests?: SkillRequestUpdateManyWithoutEmployerNestedInput
    otps?: PhoneOtpUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutRevieweeNestedInput
  }

  export type UserUncheckedUpdateWithoutSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    opportunities?: OpportunityUncheckedUpdateManyWithoutEmployerNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutApplicantNestedInput
    matchExplanations?: MatchExplanationUncheckedUpdateManyWithoutGraduateNestedInput
    skillRequests?: SkillRequestUncheckedUpdateManyWithoutEmployerNestedInput
    otps?: PhoneOtpUncheckedUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutRevieweeNestedInput
  }

  export type SkillUpsertWithoutUsersInput = {
    update: XOR<SkillUpdateWithoutUsersInput, SkillUncheckedUpdateWithoutUsersInput>
    create: XOR<SkillCreateWithoutUsersInput, SkillUncheckedCreateWithoutUsersInput>
    where?: SkillWhereInput
  }

  export type SkillUpdateToOneWithWhereWithoutUsersInput = {
    where?: SkillWhereInput
    data: XOR<SkillUpdateWithoutUsersInput, SkillUncheckedUpdateWithoutUsersInput>
  }

  export type SkillUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    opportunities?: OpportunitySkillUpdateManyWithoutSkillNestedInput
  }

  export type SkillUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    opportunities?: OpportunitySkillUncheckedUpdateManyWithoutSkillNestedInput
  }

  export type UserCreateWithoutOpportunitiesInput = {
    id?: string
    firebaseUid: string
    name: string
    email: string
    emailVerified?: boolean
    phone?: string | null
    phoneVerified?: boolean
    role?: $Enums.Role
    bio?: string | null
    companyName?: string | null
    jobTitle?: string | null
    location?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: UserSkillCreateNestedManyWithoutUserInput
    applications?: ApplicationCreateNestedManyWithoutApplicantInput
    matchExplanations?: MatchExplanationCreateNestedManyWithoutGraduateInput
    skillRequests?: SkillRequestCreateNestedManyWithoutEmployerInput
    otps?: PhoneOtpCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewCreateNestedManyWithoutRevieweeInput
  }

  export type UserUncheckedCreateWithoutOpportunitiesInput = {
    id?: string
    firebaseUid: string
    name: string
    email: string
    emailVerified?: boolean
    phone?: string | null
    phoneVerified?: boolean
    role?: $Enums.Role
    bio?: string | null
    companyName?: string | null
    jobTitle?: string | null
    location?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: UserSkillUncheckedCreateNestedManyWithoutUserInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutApplicantInput
    matchExplanations?: MatchExplanationUncheckedCreateNestedManyWithoutGraduateInput
    skillRequests?: SkillRequestUncheckedCreateNestedManyWithoutEmployerInput
    otps?: PhoneOtpUncheckedCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutRevieweeInput
  }

  export type UserCreateOrConnectWithoutOpportunitiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOpportunitiesInput, UserUncheckedCreateWithoutOpportunitiesInput>
  }

  export type OpportunitySkillCreateWithoutOpportunityInput = {
    id?: string
    skill: SkillCreateNestedOneWithoutOpportunitiesInput
  }

  export type OpportunitySkillUncheckedCreateWithoutOpportunityInput = {
    id?: string
    skillId: string
  }

  export type OpportunitySkillCreateOrConnectWithoutOpportunityInput = {
    where: OpportunitySkillWhereUniqueInput
    create: XOR<OpportunitySkillCreateWithoutOpportunityInput, OpportunitySkillUncheckedCreateWithoutOpportunityInput>
  }

  export type OpportunitySkillCreateManyOpportunityInputEnvelope = {
    data: OpportunitySkillCreateManyOpportunityInput | OpportunitySkillCreateManyOpportunityInput[]
    skipDuplicates?: boolean
  }

  export type ApplicationCreateWithoutOpportunityInput = {
    id?: string
    message: string
    status?: $Enums.ApplicationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    applicant: UserCreateNestedOneWithoutApplicationsInput
    reviews?: ReviewCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateWithoutOpportunityInput = {
    id?: string
    applicantId: string
    message: string
    status?: $Enums.ApplicationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationCreateOrConnectWithoutOpportunityInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutOpportunityInput, ApplicationUncheckedCreateWithoutOpportunityInput>
  }

  export type ApplicationCreateManyOpportunityInputEnvelope = {
    data: ApplicationCreateManyOpportunityInput | ApplicationCreateManyOpportunityInput[]
    skipDuplicates?: boolean
  }

  export type MatchExplanationCreateWithoutOpportunityInput = {
    id?: string
    explanation: string
    createdAt?: Date | string
    updatedAt?: Date | string
    graduate: UserCreateNestedOneWithoutMatchExplanationsInput
  }

  export type MatchExplanationUncheckedCreateWithoutOpportunityInput = {
    id?: string
    graduateId: string
    explanation: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchExplanationCreateOrConnectWithoutOpportunityInput = {
    where: MatchExplanationWhereUniqueInput
    create: XOR<MatchExplanationCreateWithoutOpportunityInput, MatchExplanationUncheckedCreateWithoutOpportunityInput>
  }

  export type MatchExplanationCreateManyOpportunityInputEnvelope = {
    data: MatchExplanationCreateManyOpportunityInput | MatchExplanationCreateManyOpportunityInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOpportunitiesInput = {
    update: XOR<UserUpdateWithoutOpportunitiesInput, UserUncheckedUpdateWithoutOpportunitiesInput>
    create: XOR<UserCreateWithoutOpportunitiesInput, UserUncheckedCreateWithoutOpportunitiesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOpportunitiesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOpportunitiesInput, UserUncheckedUpdateWithoutOpportunitiesInput>
  }

  export type UserUpdateWithoutOpportunitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: UserSkillUpdateManyWithoutUserNestedInput
    applications?: ApplicationUpdateManyWithoutApplicantNestedInput
    matchExplanations?: MatchExplanationUpdateManyWithoutGraduateNestedInput
    skillRequests?: SkillRequestUpdateManyWithoutEmployerNestedInput
    otps?: PhoneOtpUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutRevieweeNestedInput
  }

  export type UserUncheckedUpdateWithoutOpportunitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: UserSkillUncheckedUpdateManyWithoutUserNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutApplicantNestedInput
    matchExplanations?: MatchExplanationUncheckedUpdateManyWithoutGraduateNestedInput
    skillRequests?: SkillRequestUncheckedUpdateManyWithoutEmployerNestedInput
    otps?: PhoneOtpUncheckedUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutRevieweeNestedInput
  }

  export type OpportunitySkillUpsertWithWhereUniqueWithoutOpportunityInput = {
    where: OpportunitySkillWhereUniqueInput
    update: XOR<OpportunitySkillUpdateWithoutOpportunityInput, OpportunitySkillUncheckedUpdateWithoutOpportunityInput>
    create: XOR<OpportunitySkillCreateWithoutOpportunityInput, OpportunitySkillUncheckedCreateWithoutOpportunityInput>
  }

  export type OpportunitySkillUpdateWithWhereUniqueWithoutOpportunityInput = {
    where: OpportunitySkillWhereUniqueInput
    data: XOR<OpportunitySkillUpdateWithoutOpportunityInput, OpportunitySkillUncheckedUpdateWithoutOpportunityInput>
  }

  export type OpportunitySkillUpdateManyWithWhereWithoutOpportunityInput = {
    where: OpportunitySkillScalarWhereInput
    data: XOR<OpportunitySkillUpdateManyMutationInput, OpportunitySkillUncheckedUpdateManyWithoutOpportunityInput>
  }

  export type ApplicationUpsertWithWhereUniqueWithoutOpportunityInput = {
    where: ApplicationWhereUniqueInput
    update: XOR<ApplicationUpdateWithoutOpportunityInput, ApplicationUncheckedUpdateWithoutOpportunityInput>
    create: XOR<ApplicationCreateWithoutOpportunityInput, ApplicationUncheckedCreateWithoutOpportunityInput>
  }

  export type ApplicationUpdateWithWhereUniqueWithoutOpportunityInput = {
    where: ApplicationWhereUniqueInput
    data: XOR<ApplicationUpdateWithoutOpportunityInput, ApplicationUncheckedUpdateWithoutOpportunityInput>
  }

  export type ApplicationUpdateManyWithWhereWithoutOpportunityInput = {
    where: ApplicationScalarWhereInput
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyWithoutOpportunityInput>
  }

  export type MatchExplanationUpsertWithWhereUniqueWithoutOpportunityInput = {
    where: MatchExplanationWhereUniqueInput
    update: XOR<MatchExplanationUpdateWithoutOpportunityInput, MatchExplanationUncheckedUpdateWithoutOpportunityInput>
    create: XOR<MatchExplanationCreateWithoutOpportunityInput, MatchExplanationUncheckedCreateWithoutOpportunityInput>
  }

  export type MatchExplanationUpdateWithWhereUniqueWithoutOpportunityInput = {
    where: MatchExplanationWhereUniqueInput
    data: XOR<MatchExplanationUpdateWithoutOpportunityInput, MatchExplanationUncheckedUpdateWithoutOpportunityInput>
  }

  export type MatchExplanationUpdateManyWithWhereWithoutOpportunityInput = {
    where: MatchExplanationScalarWhereInput
    data: XOR<MatchExplanationUpdateManyMutationInput, MatchExplanationUncheckedUpdateManyWithoutOpportunityInput>
  }

  export type OpportunityCreateWithoutSkillsInput = {
    id?: string
    title: string
    description: string
    type?: $Enums.OpportunityType
    location: string
    payment?: number | null
    paymentType?: $Enums.PaymentType
    deadline?: Date | string | null
    status?: $Enums.OpportunityStatus
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    employer: UserCreateNestedOneWithoutOpportunitiesInput
    applications?: ApplicationCreateNestedManyWithoutOpportunityInput
    matchExplanations?: MatchExplanationCreateNestedManyWithoutOpportunityInput
  }

  export type OpportunityUncheckedCreateWithoutSkillsInput = {
    id?: string
    title: string
    description: string
    type?: $Enums.OpportunityType
    location: string
    payment?: number | null
    paymentType?: $Enums.PaymentType
    deadline?: Date | string | null
    employerId: string
    status?: $Enums.OpportunityStatus
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ApplicationUncheckedCreateNestedManyWithoutOpportunityInput
    matchExplanations?: MatchExplanationUncheckedCreateNestedManyWithoutOpportunityInput
  }

  export type OpportunityCreateOrConnectWithoutSkillsInput = {
    where: OpportunityWhereUniqueInput
    create: XOR<OpportunityCreateWithoutSkillsInput, OpportunityUncheckedCreateWithoutSkillsInput>
  }

  export type SkillCreateWithoutOpportunitiesInput = {
    id?: string
    name: string
    category?: string | null
    createdAt?: Date | string
    users?: UserSkillCreateNestedManyWithoutSkillInput
  }

  export type SkillUncheckedCreateWithoutOpportunitiesInput = {
    id?: string
    name: string
    category?: string | null
    createdAt?: Date | string
    users?: UserSkillUncheckedCreateNestedManyWithoutSkillInput
  }

  export type SkillCreateOrConnectWithoutOpportunitiesInput = {
    where: SkillWhereUniqueInput
    create: XOR<SkillCreateWithoutOpportunitiesInput, SkillUncheckedCreateWithoutOpportunitiesInput>
  }

  export type OpportunityUpsertWithoutSkillsInput = {
    update: XOR<OpportunityUpdateWithoutSkillsInput, OpportunityUncheckedUpdateWithoutSkillsInput>
    create: XOR<OpportunityCreateWithoutSkillsInput, OpportunityUncheckedCreateWithoutSkillsInput>
    where?: OpportunityWhereInput
  }

  export type OpportunityUpdateToOneWithWhereWithoutSkillsInput = {
    where?: OpportunityWhereInput
    data: XOR<OpportunityUpdateWithoutSkillsInput, OpportunityUncheckedUpdateWithoutSkillsInput>
  }

  export type OpportunityUpdateWithoutSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumOpportunityTypeFieldUpdateOperationsInput | $Enums.OpportunityType
    location?: StringFieldUpdateOperationsInput | string
    payment?: NullableIntFieldUpdateOperationsInput | number | null
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumOpportunityStatusFieldUpdateOperationsInput | $Enums.OpportunityStatus
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employer?: UserUpdateOneRequiredWithoutOpportunitiesNestedInput
    applications?: ApplicationUpdateManyWithoutOpportunityNestedInput
    matchExplanations?: MatchExplanationUpdateManyWithoutOpportunityNestedInput
  }

  export type OpportunityUncheckedUpdateWithoutSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumOpportunityTypeFieldUpdateOperationsInput | $Enums.OpportunityType
    location?: StringFieldUpdateOperationsInput | string
    payment?: NullableIntFieldUpdateOperationsInput | number | null
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employerId?: StringFieldUpdateOperationsInput | string
    status?: EnumOpportunityStatusFieldUpdateOperationsInput | $Enums.OpportunityStatus
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUncheckedUpdateManyWithoutOpportunityNestedInput
    matchExplanations?: MatchExplanationUncheckedUpdateManyWithoutOpportunityNestedInput
  }

  export type SkillUpsertWithoutOpportunitiesInput = {
    update: XOR<SkillUpdateWithoutOpportunitiesInput, SkillUncheckedUpdateWithoutOpportunitiesInput>
    create: XOR<SkillCreateWithoutOpportunitiesInput, SkillUncheckedCreateWithoutOpportunitiesInput>
    where?: SkillWhereInput
  }

  export type SkillUpdateToOneWithWhereWithoutOpportunitiesInput = {
    where?: SkillWhereInput
    data: XOR<SkillUpdateWithoutOpportunitiesInput, SkillUncheckedUpdateWithoutOpportunitiesInput>
  }

  export type SkillUpdateWithoutOpportunitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserSkillUpdateManyWithoutSkillNestedInput
  }

  export type SkillUncheckedUpdateWithoutOpportunitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserSkillUncheckedUpdateManyWithoutSkillNestedInput
  }

  export type OpportunityCreateWithoutApplicationsInput = {
    id?: string
    title: string
    description: string
    type?: $Enums.OpportunityType
    location: string
    payment?: number | null
    paymentType?: $Enums.PaymentType
    deadline?: Date | string | null
    status?: $Enums.OpportunityStatus
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    employer: UserCreateNestedOneWithoutOpportunitiesInput
    skills?: OpportunitySkillCreateNestedManyWithoutOpportunityInput
    matchExplanations?: MatchExplanationCreateNestedManyWithoutOpportunityInput
  }

  export type OpportunityUncheckedCreateWithoutApplicationsInput = {
    id?: string
    title: string
    description: string
    type?: $Enums.OpportunityType
    location: string
    payment?: number | null
    paymentType?: $Enums.PaymentType
    deadline?: Date | string | null
    employerId: string
    status?: $Enums.OpportunityStatus
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: OpportunitySkillUncheckedCreateNestedManyWithoutOpportunityInput
    matchExplanations?: MatchExplanationUncheckedCreateNestedManyWithoutOpportunityInput
  }

  export type OpportunityCreateOrConnectWithoutApplicationsInput = {
    where: OpportunityWhereUniqueInput
    create: XOR<OpportunityCreateWithoutApplicationsInput, OpportunityUncheckedCreateWithoutApplicationsInput>
  }

  export type UserCreateWithoutApplicationsInput = {
    id?: string
    firebaseUid: string
    name: string
    email: string
    emailVerified?: boolean
    phone?: string | null
    phoneVerified?: boolean
    role?: $Enums.Role
    bio?: string | null
    companyName?: string | null
    jobTitle?: string | null
    location?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: UserSkillCreateNestedManyWithoutUserInput
    opportunities?: OpportunityCreateNestedManyWithoutEmployerInput
    matchExplanations?: MatchExplanationCreateNestedManyWithoutGraduateInput
    skillRequests?: SkillRequestCreateNestedManyWithoutEmployerInput
    otps?: PhoneOtpCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewCreateNestedManyWithoutRevieweeInput
  }

  export type UserUncheckedCreateWithoutApplicationsInput = {
    id?: string
    firebaseUid: string
    name: string
    email: string
    emailVerified?: boolean
    phone?: string | null
    phoneVerified?: boolean
    role?: $Enums.Role
    bio?: string | null
    companyName?: string | null
    jobTitle?: string | null
    location?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: UserSkillUncheckedCreateNestedManyWithoutUserInput
    opportunities?: OpportunityUncheckedCreateNestedManyWithoutEmployerInput
    matchExplanations?: MatchExplanationUncheckedCreateNestedManyWithoutGraduateInput
    skillRequests?: SkillRequestUncheckedCreateNestedManyWithoutEmployerInput
    otps?: PhoneOtpUncheckedCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutRevieweeInput
  }

  export type UserCreateOrConnectWithoutApplicationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
  }

  export type ReviewCreateWithoutApplicationInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    reviewer: UserCreateNestedOneWithoutReviewsGivenInput
    reviewee: UserCreateNestedOneWithoutReviewsReceivedInput
  }

  export type ReviewUncheckedCreateWithoutApplicationInput = {
    id?: string
    reviewerId: string
    revieweeId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutApplicationInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutApplicationInput, ReviewUncheckedCreateWithoutApplicationInput>
  }

  export type ReviewCreateManyApplicationInputEnvelope = {
    data: ReviewCreateManyApplicationInput | ReviewCreateManyApplicationInput[]
    skipDuplicates?: boolean
  }

  export type OpportunityUpsertWithoutApplicationsInput = {
    update: XOR<OpportunityUpdateWithoutApplicationsInput, OpportunityUncheckedUpdateWithoutApplicationsInput>
    create: XOR<OpportunityCreateWithoutApplicationsInput, OpportunityUncheckedCreateWithoutApplicationsInput>
    where?: OpportunityWhereInput
  }

  export type OpportunityUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: OpportunityWhereInput
    data: XOR<OpportunityUpdateWithoutApplicationsInput, OpportunityUncheckedUpdateWithoutApplicationsInput>
  }

  export type OpportunityUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumOpportunityTypeFieldUpdateOperationsInput | $Enums.OpportunityType
    location?: StringFieldUpdateOperationsInput | string
    payment?: NullableIntFieldUpdateOperationsInput | number | null
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumOpportunityStatusFieldUpdateOperationsInput | $Enums.OpportunityStatus
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employer?: UserUpdateOneRequiredWithoutOpportunitiesNestedInput
    skills?: OpportunitySkillUpdateManyWithoutOpportunityNestedInput
    matchExplanations?: MatchExplanationUpdateManyWithoutOpportunityNestedInput
  }

  export type OpportunityUncheckedUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumOpportunityTypeFieldUpdateOperationsInput | $Enums.OpportunityType
    location?: StringFieldUpdateOperationsInput | string
    payment?: NullableIntFieldUpdateOperationsInput | number | null
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employerId?: StringFieldUpdateOperationsInput | string
    status?: EnumOpportunityStatusFieldUpdateOperationsInput | $Enums.OpportunityStatus
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: OpportunitySkillUncheckedUpdateManyWithoutOpportunityNestedInput
    matchExplanations?: MatchExplanationUncheckedUpdateManyWithoutOpportunityNestedInput
  }

  export type UserUpsertWithoutApplicationsInput = {
    update: XOR<UserUpdateWithoutApplicationsInput, UserUncheckedUpdateWithoutApplicationsInput>
    create: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApplicationsInput, UserUncheckedUpdateWithoutApplicationsInput>
  }

  export type UserUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: UserSkillUpdateManyWithoutUserNestedInput
    opportunities?: OpportunityUpdateManyWithoutEmployerNestedInput
    matchExplanations?: MatchExplanationUpdateManyWithoutGraduateNestedInput
    skillRequests?: SkillRequestUpdateManyWithoutEmployerNestedInput
    otps?: PhoneOtpUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutRevieweeNestedInput
  }

  export type UserUncheckedUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: UserSkillUncheckedUpdateManyWithoutUserNestedInput
    opportunities?: OpportunityUncheckedUpdateManyWithoutEmployerNestedInput
    matchExplanations?: MatchExplanationUncheckedUpdateManyWithoutGraduateNestedInput
    skillRequests?: SkillRequestUncheckedUpdateManyWithoutEmployerNestedInput
    otps?: PhoneOtpUncheckedUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutRevieweeNestedInput
  }

  export type ReviewUpsertWithWhereUniqueWithoutApplicationInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutApplicationInput, ReviewUncheckedUpdateWithoutApplicationInput>
    create: XOR<ReviewCreateWithoutApplicationInput, ReviewUncheckedCreateWithoutApplicationInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutApplicationInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutApplicationInput, ReviewUncheckedUpdateWithoutApplicationInput>
  }

  export type ReviewUpdateManyWithWhereWithoutApplicationInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutApplicationInput>
  }

  export type UserCreateWithoutOtpsInput = {
    id?: string
    firebaseUid: string
    name: string
    email: string
    emailVerified?: boolean
    phone?: string | null
    phoneVerified?: boolean
    role?: $Enums.Role
    bio?: string | null
    companyName?: string | null
    jobTitle?: string | null
    location?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: UserSkillCreateNestedManyWithoutUserInput
    opportunities?: OpportunityCreateNestedManyWithoutEmployerInput
    applications?: ApplicationCreateNestedManyWithoutApplicantInput
    matchExplanations?: MatchExplanationCreateNestedManyWithoutGraduateInput
    skillRequests?: SkillRequestCreateNestedManyWithoutEmployerInput
    reviewsGiven?: ReviewCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewCreateNestedManyWithoutRevieweeInput
  }

  export type UserUncheckedCreateWithoutOtpsInput = {
    id?: string
    firebaseUid: string
    name: string
    email: string
    emailVerified?: boolean
    phone?: string | null
    phoneVerified?: boolean
    role?: $Enums.Role
    bio?: string | null
    companyName?: string | null
    jobTitle?: string | null
    location?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: UserSkillUncheckedCreateNestedManyWithoutUserInput
    opportunities?: OpportunityUncheckedCreateNestedManyWithoutEmployerInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutApplicantInput
    matchExplanations?: MatchExplanationUncheckedCreateNestedManyWithoutGraduateInput
    skillRequests?: SkillRequestUncheckedCreateNestedManyWithoutEmployerInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutRevieweeInput
  }

  export type UserCreateOrConnectWithoutOtpsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOtpsInput, UserUncheckedCreateWithoutOtpsInput>
  }

  export type UserUpsertWithoutOtpsInput = {
    update: XOR<UserUpdateWithoutOtpsInput, UserUncheckedUpdateWithoutOtpsInput>
    create: XOR<UserCreateWithoutOtpsInput, UserUncheckedCreateWithoutOtpsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOtpsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOtpsInput, UserUncheckedUpdateWithoutOtpsInput>
  }

  export type UserUpdateWithoutOtpsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: UserSkillUpdateManyWithoutUserNestedInput
    opportunities?: OpportunityUpdateManyWithoutEmployerNestedInput
    applications?: ApplicationUpdateManyWithoutApplicantNestedInput
    matchExplanations?: MatchExplanationUpdateManyWithoutGraduateNestedInput
    skillRequests?: SkillRequestUpdateManyWithoutEmployerNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutRevieweeNestedInput
  }

  export type UserUncheckedUpdateWithoutOtpsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: UserSkillUncheckedUpdateManyWithoutUserNestedInput
    opportunities?: OpportunityUncheckedUpdateManyWithoutEmployerNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutApplicantNestedInput
    matchExplanations?: MatchExplanationUncheckedUpdateManyWithoutGraduateNestedInput
    skillRequests?: SkillRequestUncheckedUpdateManyWithoutEmployerNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutRevieweeNestedInput
  }

  export type ApplicationCreateWithoutReviewsInput = {
    id?: string
    message: string
    status?: $Enums.ApplicationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    opportunity: OpportunityCreateNestedOneWithoutApplicationsInput
    applicant: UserCreateNestedOneWithoutApplicationsInput
  }

  export type ApplicationUncheckedCreateWithoutReviewsInput = {
    id?: string
    opportunityId: string
    applicantId: string
    message: string
    status?: $Enums.ApplicationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationCreateOrConnectWithoutReviewsInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutReviewsInput, ApplicationUncheckedCreateWithoutReviewsInput>
  }

  export type UserCreateWithoutReviewsGivenInput = {
    id?: string
    firebaseUid: string
    name: string
    email: string
    emailVerified?: boolean
    phone?: string | null
    phoneVerified?: boolean
    role?: $Enums.Role
    bio?: string | null
    companyName?: string | null
    jobTitle?: string | null
    location?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: UserSkillCreateNestedManyWithoutUserInput
    opportunities?: OpportunityCreateNestedManyWithoutEmployerInput
    applications?: ApplicationCreateNestedManyWithoutApplicantInput
    matchExplanations?: MatchExplanationCreateNestedManyWithoutGraduateInput
    skillRequests?: SkillRequestCreateNestedManyWithoutEmployerInput
    otps?: PhoneOtpCreateNestedManyWithoutUserInput
    reviewsReceived?: ReviewCreateNestedManyWithoutRevieweeInput
  }

  export type UserUncheckedCreateWithoutReviewsGivenInput = {
    id?: string
    firebaseUid: string
    name: string
    email: string
    emailVerified?: boolean
    phone?: string | null
    phoneVerified?: boolean
    role?: $Enums.Role
    bio?: string | null
    companyName?: string | null
    jobTitle?: string | null
    location?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: UserSkillUncheckedCreateNestedManyWithoutUserInput
    opportunities?: OpportunityUncheckedCreateNestedManyWithoutEmployerInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutApplicantInput
    matchExplanations?: MatchExplanationUncheckedCreateNestedManyWithoutGraduateInput
    skillRequests?: SkillRequestUncheckedCreateNestedManyWithoutEmployerInput
    otps?: PhoneOtpUncheckedCreateNestedManyWithoutUserInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutRevieweeInput
  }

  export type UserCreateOrConnectWithoutReviewsGivenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsGivenInput, UserUncheckedCreateWithoutReviewsGivenInput>
  }

  export type UserCreateWithoutReviewsReceivedInput = {
    id?: string
    firebaseUid: string
    name: string
    email: string
    emailVerified?: boolean
    phone?: string | null
    phoneVerified?: boolean
    role?: $Enums.Role
    bio?: string | null
    companyName?: string | null
    jobTitle?: string | null
    location?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: UserSkillCreateNestedManyWithoutUserInput
    opportunities?: OpportunityCreateNestedManyWithoutEmployerInput
    applications?: ApplicationCreateNestedManyWithoutApplicantInput
    matchExplanations?: MatchExplanationCreateNestedManyWithoutGraduateInput
    skillRequests?: SkillRequestCreateNestedManyWithoutEmployerInput
    otps?: PhoneOtpCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewCreateNestedManyWithoutReviewerInput
  }

  export type UserUncheckedCreateWithoutReviewsReceivedInput = {
    id?: string
    firebaseUid: string
    name: string
    email: string
    emailVerified?: boolean
    phone?: string | null
    phoneVerified?: boolean
    role?: $Enums.Role
    bio?: string | null
    companyName?: string | null
    jobTitle?: string | null
    location?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: UserSkillUncheckedCreateNestedManyWithoutUserInput
    opportunities?: OpportunityUncheckedCreateNestedManyWithoutEmployerInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutApplicantInput
    matchExplanations?: MatchExplanationUncheckedCreateNestedManyWithoutGraduateInput
    skillRequests?: SkillRequestUncheckedCreateNestedManyWithoutEmployerInput
    otps?: PhoneOtpUncheckedCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
  }

  export type UserCreateOrConnectWithoutReviewsReceivedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsReceivedInput, UserUncheckedCreateWithoutReviewsReceivedInput>
  }

  export type ApplicationUpsertWithoutReviewsInput = {
    update: XOR<ApplicationUpdateWithoutReviewsInput, ApplicationUncheckedUpdateWithoutReviewsInput>
    create: XOR<ApplicationCreateWithoutReviewsInput, ApplicationUncheckedCreateWithoutReviewsInput>
    where?: ApplicationWhereInput
  }

  export type ApplicationUpdateToOneWithWhereWithoutReviewsInput = {
    where?: ApplicationWhereInput
    data: XOR<ApplicationUpdateWithoutReviewsInput, ApplicationUncheckedUpdateWithoutReviewsInput>
  }

  export type ApplicationUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    opportunity?: OpportunityUpdateOneRequiredWithoutApplicationsNestedInput
    applicant?: UserUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    opportunityId?: StringFieldUpdateOperationsInput | string
    applicantId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutReviewsGivenInput = {
    update: XOR<UserUpdateWithoutReviewsGivenInput, UserUncheckedUpdateWithoutReviewsGivenInput>
    create: XOR<UserCreateWithoutReviewsGivenInput, UserUncheckedCreateWithoutReviewsGivenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsGivenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsGivenInput, UserUncheckedUpdateWithoutReviewsGivenInput>
  }

  export type UserUpdateWithoutReviewsGivenInput = {
    id?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: UserSkillUpdateManyWithoutUserNestedInput
    opportunities?: OpportunityUpdateManyWithoutEmployerNestedInput
    applications?: ApplicationUpdateManyWithoutApplicantNestedInput
    matchExplanations?: MatchExplanationUpdateManyWithoutGraduateNestedInput
    skillRequests?: SkillRequestUpdateManyWithoutEmployerNestedInput
    otps?: PhoneOtpUpdateManyWithoutUserNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutRevieweeNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsGivenInput = {
    id?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: UserSkillUncheckedUpdateManyWithoutUserNestedInput
    opportunities?: OpportunityUncheckedUpdateManyWithoutEmployerNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutApplicantNestedInput
    matchExplanations?: MatchExplanationUncheckedUpdateManyWithoutGraduateNestedInput
    skillRequests?: SkillRequestUncheckedUpdateManyWithoutEmployerNestedInput
    otps?: PhoneOtpUncheckedUpdateManyWithoutUserNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutRevieweeNestedInput
  }

  export type UserUpsertWithoutReviewsReceivedInput = {
    update: XOR<UserUpdateWithoutReviewsReceivedInput, UserUncheckedUpdateWithoutReviewsReceivedInput>
    create: XOR<UserCreateWithoutReviewsReceivedInput, UserUncheckedCreateWithoutReviewsReceivedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsReceivedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsReceivedInput, UserUncheckedUpdateWithoutReviewsReceivedInput>
  }

  export type UserUpdateWithoutReviewsReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: UserSkillUpdateManyWithoutUserNestedInput
    opportunities?: OpportunityUpdateManyWithoutEmployerNestedInput
    applications?: ApplicationUpdateManyWithoutApplicantNestedInput
    matchExplanations?: MatchExplanationUpdateManyWithoutGraduateNestedInput
    skillRequests?: SkillRequestUpdateManyWithoutEmployerNestedInput
    otps?: PhoneOtpUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutReviewerNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: UserSkillUncheckedUpdateManyWithoutUserNestedInput
    opportunities?: OpportunityUncheckedUpdateManyWithoutEmployerNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutApplicantNestedInput
    matchExplanations?: MatchExplanationUncheckedUpdateManyWithoutGraduateNestedInput
    skillRequests?: SkillRequestUncheckedUpdateManyWithoutEmployerNestedInput
    otps?: PhoneOtpUncheckedUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
  }

  export type UserCreateWithoutMatchExplanationsInput = {
    id?: string
    firebaseUid: string
    name: string
    email: string
    emailVerified?: boolean
    phone?: string | null
    phoneVerified?: boolean
    role?: $Enums.Role
    bio?: string | null
    companyName?: string | null
    jobTitle?: string | null
    location?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: UserSkillCreateNestedManyWithoutUserInput
    opportunities?: OpportunityCreateNestedManyWithoutEmployerInput
    applications?: ApplicationCreateNestedManyWithoutApplicantInput
    skillRequests?: SkillRequestCreateNestedManyWithoutEmployerInput
    otps?: PhoneOtpCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewCreateNestedManyWithoutRevieweeInput
  }

  export type UserUncheckedCreateWithoutMatchExplanationsInput = {
    id?: string
    firebaseUid: string
    name: string
    email: string
    emailVerified?: boolean
    phone?: string | null
    phoneVerified?: boolean
    role?: $Enums.Role
    bio?: string | null
    companyName?: string | null
    jobTitle?: string | null
    location?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: UserSkillUncheckedCreateNestedManyWithoutUserInput
    opportunities?: OpportunityUncheckedCreateNestedManyWithoutEmployerInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutApplicantInput
    skillRequests?: SkillRequestUncheckedCreateNestedManyWithoutEmployerInput
    otps?: PhoneOtpUncheckedCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutRevieweeInput
  }

  export type UserCreateOrConnectWithoutMatchExplanationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMatchExplanationsInput, UserUncheckedCreateWithoutMatchExplanationsInput>
  }

  export type OpportunityCreateWithoutMatchExplanationsInput = {
    id?: string
    title: string
    description: string
    type?: $Enums.OpportunityType
    location: string
    payment?: number | null
    paymentType?: $Enums.PaymentType
    deadline?: Date | string | null
    status?: $Enums.OpportunityStatus
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    employer: UserCreateNestedOneWithoutOpportunitiesInput
    skills?: OpportunitySkillCreateNestedManyWithoutOpportunityInput
    applications?: ApplicationCreateNestedManyWithoutOpportunityInput
  }

  export type OpportunityUncheckedCreateWithoutMatchExplanationsInput = {
    id?: string
    title: string
    description: string
    type?: $Enums.OpportunityType
    location: string
    payment?: number | null
    paymentType?: $Enums.PaymentType
    deadline?: Date | string | null
    employerId: string
    status?: $Enums.OpportunityStatus
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: OpportunitySkillUncheckedCreateNestedManyWithoutOpportunityInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutOpportunityInput
  }

  export type OpportunityCreateOrConnectWithoutMatchExplanationsInput = {
    where: OpportunityWhereUniqueInput
    create: XOR<OpportunityCreateWithoutMatchExplanationsInput, OpportunityUncheckedCreateWithoutMatchExplanationsInput>
  }

  export type UserUpsertWithoutMatchExplanationsInput = {
    update: XOR<UserUpdateWithoutMatchExplanationsInput, UserUncheckedUpdateWithoutMatchExplanationsInput>
    create: XOR<UserCreateWithoutMatchExplanationsInput, UserUncheckedCreateWithoutMatchExplanationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMatchExplanationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMatchExplanationsInput, UserUncheckedUpdateWithoutMatchExplanationsInput>
  }

  export type UserUpdateWithoutMatchExplanationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: UserSkillUpdateManyWithoutUserNestedInput
    opportunities?: OpportunityUpdateManyWithoutEmployerNestedInput
    applications?: ApplicationUpdateManyWithoutApplicantNestedInput
    skillRequests?: SkillRequestUpdateManyWithoutEmployerNestedInput
    otps?: PhoneOtpUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutRevieweeNestedInput
  }

  export type UserUncheckedUpdateWithoutMatchExplanationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: UserSkillUncheckedUpdateManyWithoutUserNestedInput
    opportunities?: OpportunityUncheckedUpdateManyWithoutEmployerNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutApplicantNestedInput
    skillRequests?: SkillRequestUncheckedUpdateManyWithoutEmployerNestedInput
    otps?: PhoneOtpUncheckedUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutRevieweeNestedInput
  }

  export type OpportunityUpsertWithoutMatchExplanationsInput = {
    update: XOR<OpportunityUpdateWithoutMatchExplanationsInput, OpportunityUncheckedUpdateWithoutMatchExplanationsInput>
    create: XOR<OpportunityCreateWithoutMatchExplanationsInput, OpportunityUncheckedCreateWithoutMatchExplanationsInput>
    where?: OpportunityWhereInput
  }

  export type OpportunityUpdateToOneWithWhereWithoutMatchExplanationsInput = {
    where?: OpportunityWhereInput
    data: XOR<OpportunityUpdateWithoutMatchExplanationsInput, OpportunityUncheckedUpdateWithoutMatchExplanationsInput>
  }

  export type OpportunityUpdateWithoutMatchExplanationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumOpportunityTypeFieldUpdateOperationsInput | $Enums.OpportunityType
    location?: StringFieldUpdateOperationsInput | string
    payment?: NullableIntFieldUpdateOperationsInput | number | null
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumOpportunityStatusFieldUpdateOperationsInput | $Enums.OpportunityStatus
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employer?: UserUpdateOneRequiredWithoutOpportunitiesNestedInput
    skills?: OpportunitySkillUpdateManyWithoutOpportunityNestedInput
    applications?: ApplicationUpdateManyWithoutOpportunityNestedInput
  }

  export type OpportunityUncheckedUpdateWithoutMatchExplanationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumOpportunityTypeFieldUpdateOperationsInput | $Enums.OpportunityType
    location?: StringFieldUpdateOperationsInput | string
    payment?: NullableIntFieldUpdateOperationsInput | number | null
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employerId?: StringFieldUpdateOperationsInput | string
    status?: EnumOpportunityStatusFieldUpdateOperationsInput | $Enums.OpportunityStatus
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: OpportunitySkillUncheckedUpdateManyWithoutOpportunityNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutOpportunityNestedInput
  }

  export type UserCreateWithoutSkillRequestsInput = {
    id?: string
    firebaseUid: string
    name: string
    email: string
    emailVerified?: boolean
    phone?: string | null
    phoneVerified?: boolean
    role?: $Enums.Role
    bio?: string | null
    companyName?: string | null
    jobTitle?: string | null
    location?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: UserSkillCreateNestedManyWithoutUserInput
    opportunities?: OpportunityCreateNestedManyWithoutEmployerInput
    applications?: ApplicationCreateNestedManyWithoutApplicantInput
    matchExplanations?: MatchExplanationCreateNestedManyWithoutGraduateInput
    otps?: PhoneOtpCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewCreateNestedManyWithoutRevieweeInput
  }

  export type UserUncheckedCreateWithoutSkillRequestsInput = {
    id?: string
    firebaseUid: string
    name: string
    email: string
    emailVerified?: boolean
    phone?: string | null
    phoneVerified?: boolean
    role?: $Enums.Role
    bio?: string | null
    companyName?: string | null
    jobTitle?: string | null
    location?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: UserSkillUncheckedCreateNestedManyWithoutUserInput
    opportunities?: OpportunityUncheckedCreateNestedManyWithoutEmployerInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutApplicantInput
    matchExplanations?: MatchExplanationUncheckedCreateNestedManyWithoutGraduateInput
    otps?: PhoneOtpUncheckedCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutRevieweeInput
  }

  export type UserCreateOrConnectWithoutSkillRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSkillRequestsInput, UserUncheckedCreateWithoutSkillRequestsInput>
  }

  export type UserUpsertWithoutSkillRequestsInput = {
    update: XOR<UserUpdateWithoutSkillRequestsInput, UserUncheckedUpdateWithoutSkillRequestsInput>
    create: XOR<UserCreateWithoutSkillRequestsInput, UserUncheckedCreateWithoutSkillRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSkillRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSkillRequestsInput, UserUncheckedUpdateWithoutSkillRequestsInput>
  }

  export type UserUpdateWithoutSkillRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: UserSkillUpdateManyWithoutUserNestedInput
    opportunities?: OpportunityUpdateManyWithoutEmployerNestedInput
    applications?: ApplicationUpdateManyWithoutApplicantNestedInput
    matchExplanations?: MatchExplanationUpdateManyWithoutGraduateNestedInput
    otps?: PhoneOtpUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutRevieweeNestedInput
  }

  export type UserUncheckedUpdateWithoutSkillRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: UserSkillUncheckedUpdateManyWithoutUserNestedInput
    opportunities?: OpportunityUncheckedUpdateManyWithoutEmployerNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutApplicantNestedInput
    matchExplanations?: MatchExplanationUncheckedUpdateManyWithoutGraduateNestedInput
    otps?: PhoneOtpUncheckedUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutRevieweeNestedInput
  }

  export type UserSkillCreateManyUserInput = {
    id?: string
    skillId: string
    experienceLevel?: $Enums.ExperienceLevel
    createdAt?: Date | string
  }

  export type OpportunityCreateManyEmployerInput = {
    id?: string
    title: string
    description: string
    type?: $Enums.OpportunityType
    location: string
    payment?: number | null
    paymentType?: $Enums.PaymentType
    deadline?: Date | string | null
    status?: $Enums.OpportunityStatus
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationCreateManyApplicantInput = {
    id?: string
    opportunityId: string
    message: string
    status?: $Enums.ApplicationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchExplanationCreateManyGraduateInput = {
    id?: string
    opportunityId: string
    explanation: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SkillRequestCreateManyEmployerInput = {
    id?: string
    name: string
    status?: $Enums.SkillRequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhoneOtpCreateManyUserInput = {
    id?: string
    phone: string
    codeHash: string
    attempts?: number
    expiresAt: Date | string
    used?: boolean
    createdAt?: Date | string
  }

  export type ReviewCreateManyReviewerInput = {
    id?: string
    applicationId: string
    revieweeId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewCreateManyRevieweeInput = {
    id?: string
    applicationId: string
    reviewerId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type UserSkillUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    experienceLevel?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skill?: SkillUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserSkillUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
    experienceLevel?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSkillUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
    experienceLevel?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpportunityUpdateWithoutEmployerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumOpportunityTypeFieldUpdateOperationsInput | $Enums.OpportunityType
    location?: StringFieldUpdateOperationsInput | string
    payment?: NullableIntFieldUpdateOperationsInput | number | null
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumOpportunityStatusFieldUpdateOperationsInput | $Enums.OpportunityStatus
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: OpportunitySkillUpdateManyWithoutOpportunityNestedInput
    applications?: ApplicationUpdateManyWithoutOpportunityNestedInput
    matchExplanations?: MatchExplanationUpdateManyWithoutOpportunityNestedInput
  }

  export type OpportunityUncheckedUpdateWithoutEmployerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumOpportunityTypeFieldUpdateOperationsInput | $Enums.OpportunityType
    location?: StringFieldUpdateOperationsInput | string
    payment?: NullableIntFieldUpdateOperationsInput | number | null
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumOpportunityStatusFieldUpdateOperationsInput | $Enums.OpportunityStatus
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: OpportunitySkillUncheckedUpdateManyWithoutOpportunityNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutOpportunityNestedInput
    matchExplanations?: MatchExplanationUncheckedUpdateManyWithoutOpportunityNestedInput
  }

  export type OpportunityUncheckedUpdateManyWithoutEmployerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumOpportunityTypeFieldUpdateOperationsInput | $Enums.OpportunityType
    location?: StringFieldUpdateOperationsInput | string
    payment?: NullableIntFieldUpdateOperationsInput | number | null
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumOpportunityStatusFieldUpdateOperationsInput | $Enums.OpportunityStatus
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUpdateWithoutApplicantInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    opportunity?: OpportunityUpdateOneRequiredWithoutApplicationsNestedInput
    reviews?: ReviewUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutApplicantInput = {
    id?: StringFieldUpdateOperationsInput | string
    opportunityId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateManyWithoutApplicantInput = {
    id?: StringFieldUpdateOperationsInput | string
    opportunityId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchExplanationUpdateWithoutGraduateInput = {
    id?: StringFieldUpdateOperationsInput | string
    explanation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    opportunity?: OpportunityUpdateOneRequiredWithoutMatchExplanationsNestedInput
  }

  export type MatchExplanationUncheckedUpdateWithoutGraduateInput = {
    id?: StringFieldUpdateOperationsInput | string
    opportunityId?: StringFieldUpdateOperationsInput | string
    explanation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchExplanationUncheckedUpdateManyWithoutGraduateInput = {
    id?: StringFieldUpdateOperationsInput | string
    opportunityId?: StringFieldUpdateOperationsInput | string
    explanation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillRequestUpdateWithoutEmployerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumSkillRequestStatusFieldUpdateOperationsInput | $Enums.SkillRequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillRequestUncheckedUpdateWithoutEmployerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumSkillRequestStatusFieldUpdateOperationsInput | $Enums.SkillRequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillRequestUncheckedUpdateManyWithoutEmployerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumSkillRequestStatusFieldUpdateOperationsInput | $Enums.SkillRequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhoneOtpUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    codeHash?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhoneOtpUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    codeHash?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhoneOtpUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    codeHash?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutReviewerInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    application?: ApplicationUpdateOneRequiredWithoutReviewsNestedInput
    reviewee?: UserUpdateOneRequiredWithoutReviewsReceivedNestedInput
  }

  export type ReviewUncheckedUpdateWithoutReviewerInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    revieweeId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutReviewerInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    revieweeId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutRevieweeInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    application?: ApplicationUpdateOneRequiredWithoutReviewsNestedInput
    reviewer?: UserUpdateOneRequiredWithoutReviewsGivenNestedInput
  }

  export type ReviewUncheckedUpdateWithoutRevieweeInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    reviewerId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutRevieweeInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    reviewerId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSkillCreateManySkillInput = {
    id?: string
    userId: string
    experienceLevel?: $Enums.ExperienceLevel
    createdAt?: Date | string
  }

  export type OpportunitySkillCreateManySkillInput = {
    id?: string
    opportunityId: string
  }

  export type UserSkillUpdateWithoutSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    experienceLevel?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSkillsNestedInput
  }

  export type UserSkillUncheckedUpdateWithoutSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    experienceLevel?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSkillUncheckedUpdateManyWithoutSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    experienceLevel?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpportunitySkillUpdateWithoutSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    opportunity?: OpportunityUpdateOneRequiredWithoutSkillsNestedInput
  }

  export type OpportunitySkillUncheckedUpdateWithoutSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    opportunityId?: StringFieldUpdateOperationsInput | string
  }

  export type OpportunitySkillUncheckedUpdateManyWithoutSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    opportunityId?: StringFieldUpdateOperationsInput | string
  }

  export type OpportunitySkillCreateManyOpportunityInput = {
    id?: string
    skillId: string
  }

  export type ApplicationCreateManyOpportunityInput = {
    id?: string
    applicantId: string
    message: string
    status?: $Enums.ApplicationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchExplanationCreateManyOpportunityInput = {
    id?: string
    graduateId: string
    explanation: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OpportunitySkillUpdateWithoutOpportunityInput = {
    id?: StringFieldUpdateOperationsInput | string
    skill?: SkillUpdateOneRequiredWithoutOpportunitiesNestedInput
  }

  export type OpportunitySkillUncheckedUpdateWithoutOpportunityInput = {
    id?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
  }

  export type OpportunitySkillUncheckedUpdateManyWithoutOpportunityInput = {
    id?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
  }

  export type ApplicationUpdateWithoutOpportunityInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicant?: UserUpdateOneRequiredWithoutApplicationsNestedInput
    reviews?: ReviewUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutOpportunityInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicantId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateManyWithoutOpportunityInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicantId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchExplanationUpdateWithoutOpportunityInput = {
    id?: StringFieldUpdateOperationsInput | string
    explanation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    graduate?: UserUpdateOneRequiredWithoutMatchExplanationsNestedInput
  }

  export type MatchExplanationUncheckedUpdateWithoutOpportunityInput = {
    id?: StringFieldUpdateOperationsInput | string
    graduateId?: StringFieldUpdateOperationsInput | string
    explanation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchExplanationUncheckedUpdateManyWithoutOpportunityInput = {
    id?: StringFieldUpdateOperationsInput | string
    graduateId?: StringFieldUpdateOperationsInput | string
    explanation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyApplicationInput = {
    id?: string
    reviewerId: string
    revieweeId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewUpdateWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewer?: UserUpdateOneRequiredWithoutReviewsGivenNestedInput
    reviewee?: UserUpdateOneRequiredWithoutReviewsReceivedNestedInput
  }

  export type ReviewUncheckedUpdateWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewerId?: StringFieldUpdateOperationsInput | string
    revieweeId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewerId?: StringFieldUpdateOperationsInput | string
    revieweeId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
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