export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bit: any;
  numeric: any;
  timestamp: Date;
  uuid: any;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** expression to compare columns of type bit. All fields are combined with logical 'AND'. */
export type Bit_Comparison_Exp = {
  _eq?: Maybe<Scalars['bit']>;
  _gt?: Maybe<Scalars['bit']>;
  _gte?: Maybe<Scalars['bit']>;
  _in?: Maybe<Array<Scalars['bit']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['bit']>;
  _lte?: Maybe<Scalars['bit']>;
  _neq?: Maybe<Scalars['bit']>;
  _nin?: Maybe<Array<Scalars['bit']>>;
};

/** columns and relationships of "cities" */
export type Cities = {
  __typename?: 'cities';
  _id: Scalars['uuid'];
  /** An object relationship */
  country: Countries;
  country_id: Scalars['uuid'];
  created_at?: Maybe<Scalars['timestamp']>;
  /** An array relationship */
  customers_addresses: Array<Customers_Address>;
  /** An aggregated array relationship */
  customers_addresses_aggregate: Customers_Address_Aggregate;
  full_name: Scalars['String'];
  short_name?: Maybe<Scalars['String']>;
  /** An array relationship */
  stores: Array<Stores>;
  /** An aggregated array relationship */
  stores_aggregate: Stores_Aggregate;
};

/** columns and relationships of "cities" */
export type CitiesCustomers_AddressesArgs = {
  distinct_on?: Maybe<Array<Customers_Address_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Customers_Address_Order_By>>;
  where?: Maybe<Customers_Address_Bool_Exp>;
};

/** columns and relationships of "cities" */
export type CitiesCustomers_Addresses_AggregateArgs = {
  distinct_on?: Maybe<Array<Customers_Address_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Customers_Address_Order_By>>;
  where?: Maybe<Customers_Address_Bool_Exp>;
};

/** columns and relationships of "cities" */
export type CitiesStoresArgs = {
  distinct_on?: Maybe<Array<Stores_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stores_Order_By>>;
  where?: Maybe<Stores_Bool_Exp>;
};

/** columns and relationships of "cities" */
export type CitiesStores_AggregateArgs = {
  distinct_on?: Maybe<Array<Stores_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stores_Order_By>>;
  where?: Maybe<Stores_Bool_Exp>;
};

/** aggregated selection of "cities" */
export type Cities_Aggregate = {
  __typename?: 'cities_aggregate';
  aggregate?: Maybe<Cities_Aggregate_Fields>;
  nodes: Array<Cities>;
};

/** aggregate fields of "cities" */
export type Cities_Aggregate_Fields = {
  __typename?: 'cities_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Cities_Max_Fields>;
  min?: Maybe<Cities_Min_Fields>;
};

/** aggregate fields of "cities" */
export type Cities_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Cities_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "cities" */
export type Cities_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Cities_Max_Order_By>;
  min?: Maybe<Cities_Min_Order_By>;
};

/** input type for inserting array relation for remote table "cities" */
export type Cities_Arr_Rel_Insert_Input = {
  data: Array<Cities_Insert_Input>;
  on_conflict?: Maybe<Cities_On_Conflict>;
};

/** Boolean expression to filter rows from the table "cities". All fields are combined with a logical 'AND'. */
export type Cities_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Cities_Bool_Exp>>>;
  _id?: Maybe<Uuid_Comparison_Exp>;
  _not?: Maybe<Cities_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Cities_Bool_Exp>>>;
  country?: Maybe<Countries_Bool_Exp>;
  country_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamp_Comparison_Exp>;
  customers_addresses?: Maybe<Customers_Address_Bool_Exp>;
  full_name?: Maybe<String_Comparison_Exp>;
  short_name?: Maybe<String_Comparison_Exp>;
  stores?: Maybe<Stores_Bool_Exp>;
};

/** unique or primary key constraints on table "cities" */
export enum Cities_Constraint {
  /** unique or primary key constraint */
  CitiesPkey = 'cities_pkey'
}

/** input type for inserting data into table "cities" */
export type Cities_Insert_Input = {
  _id?: Maybe<Scalars['uuid']>;
  country?: Maybe<Countries_Obj_Rel_Insert_Input>;
  country_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  customers_addresses?: Maybe<Customers_Address_Arr_Rel_Insert_Input>;
  full_name?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
  stores?: Maybe<Stores_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Cities_Max_Fields = {
  __typename?: 'cities_max_fields';
  _id?: Maybe<Scalars['uuid']>;
  country_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  full_name?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "cities" */
export type Cities_Max_Order_By = {
  _id?: Maybe<Order_By>;
  country_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  full_name?: Maybe<Order_By>;
  short_name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Cities_Min_Fields = {
  __typename?: 'cities_min_fields';
  _id?: Maybe<Scalars['uuid']>;
  country_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  full_name?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "cities" */
export type Cities_Min_Order_By = {
  _id?: Maybe<Order_By>;
  country_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  full_name?: Maybe<Order_By>;
  short_name?: Maybe<Order_By>;
};

/** response of any mutation on the table "cities" */
export type Cities_Mutation_Response = {
  __typename?: 'cities_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Cities>;
};

/** input type for inserting object relation for remote table "cities" */
export type Cities_Obj_Rel_Insert_Input = {
  data: Cities_Insert_Input;
  on_conflict?: Maybe<Cities_On_Conflict>;
};

/** on conflict condition type for table "cities" */
export type Cities_On_Conflict = {
  constraint: Cities_Constraint;
  update_columns: Array<Cities_Update_Column>;
  where?: Maybe<Cities_Bool_Exp>;
};

/** ordering options when selecting data from "cities" */
export type Cities_Order_By = {
  _id?: Maybe<Order_By>;
  country?: Maybe<Countries_Order_By>;
  country_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  customers_addresses_aggregate?: Maybe<Customers_Address_Aggregate_Order_By>;
  full_name?: Maybe<Order_By>;
  short_name?: Maybe<Order_By>;
  stores_aggregate?: Maybe<Stores_Aggregate_Order_By>;
};

/** primary key columns input for table: "cities" */
export type Cities_Pk_Columns_Input = {
  _id: Scalars['uuid'];
};

/** select columns of table "cities" */
export enum Cities_Select_Column {
  /** column name */
  Id = '_id',
  /** column name */
  CountryId = 'country_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FullName = 'full_name',
  /** column name */
  ShortName = 'short_name'
}

/** input type for updating data in table "cities" */
export type Cities_Set_Input = {
  _id?: Maybe<Scalars['uuid']>;
  country_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  full_name?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
};

/** update columns of table "cities" */
export enum Cities_Update_Column {
  /** column name */
  Id = '_id',
  /** column name */
  CountryId = 'country_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FullName = 'full_name',
  /** column name */
  ShortName = 'short_name'
}

/** columns and relationships of "countries" */
export type Countries = {
  __typename?: 'countries';
  _id: Scalars['uuid'];
  /** An array relationship */
  cities: Array<Cities>;
  /** An aggregated array relationship */
  cities_aggregate: Cities_Aggregate;
  /** An array relationship */
  countries_currencies: Array<Countries_Currency>;
  /** An aggregated array relationship */
  countries_currencies_aggregate: Countries_Currency_Aggregate;
  created_at?: Maybe<Scalars['timestamp']>;
  currency?: Maybe<Scalars['String']>;
  /** An array relationship */
  customers_addresses: Array<Customers_Address>;
  /** An aggregated array relationship */
  customers_addresses_aggregate: Customers_Address_Aggregate;
  emoji?: Maybe<Scalars['String']>;
  emoji_u?: Maybe<Scalars['String']>;
  iso_2?: Maybe<Scalars['String']>;
  iso_3?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  phone_code?: Maybe<Scalars['Int']>;
};

/** columns and relationships of "countries" */
export type CountriesCitiesArgs = {
  distinct_on?: Maybe<Array<Cities_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Cities_Order_By>>;
  where?: Maybe<Cities_Bool_Exp>;
};

/** columns and relationships of "countries" */
export type CountriesCities_AggregateArgs = {
  distinct_on?: Maybe<Array<Cities_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Cities_Order_By>>;
  where?: Maybe<Cities_Bool_Exp>;
};

/** columns and relationships of "countries" */
export type CountriesCountries_CurrenciesArgs = {
  distinct_on?: Maybe<Array<Countries_Currency_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Countries_Currency_Order_By>>;
  where?: Maybe<Countries_Currency_Bool_Exp>;
};

/** columns and relationships of "countries" */
export type CountriesCountries_Currencies_AggregateArgs = {
  distinct_on?: Maybe<Array<Countries_Currency_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Countries_Currency_Order_By>>;
  where?: Maybe<Countries_Currency_Bool_Exp>;
};

/** columns and relationships of "countries" */
export type CountriesCustomers_AddressesArgs = {
  distinct_on?: Maybe<Array<Customers_Address_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Customers_Address_Order_By>>;
  where?: Maybe<Customers_Address_Bool_Exp>;
};

/** columns and relationships of "countries" */
export type CountriesCustomers_Addresses_AggregateArgs = {
  distinct_on?: Maybe<Array<Customers_Address_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Customers_Address_Order_By>>;
  where?: Maybe<Customers_Address_Bool_Exp>;
};

/** aggregated selection of "countries" */
export type Countries_Aggregate = {
  __typename?: 'countries_aggregate';
  aggregate?: Maybe<Countries_Aggregate_Fields>;
  nodes: Array<Countries>;
};

/** aggregate fields of "countries" */
export type Countries_Aggregate_Fields = {
  __typename?: 'countries_aggregate_fields';
  avg?: Maybe<Countries_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Countries_Max_Fields>;
  min?: Maybe<Countries_Min_Fields>;
  stddev?: Maybe<Countries_Stddev_Fields>;
  stddev_pop?: Maybe<Countries_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Countries_Stddev_Samp_Fields>;
  sum?: Maybe<Countries_Sum_Fields>;
  var_pop?: Maybe<Countries_Var_Pop_Fields>;
  var_samp?: Maybe<Countries_Var_Samp_Fields>;
  variance?: Maybe<Countries_Variance_Fields>;
};

/** aggregate fields of "countries" */
export type Countries_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Countries_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "countries" */
export type Countries_Aggregate_Order_By = {
  avg?: Maybe<Countries_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Countries_Max_Order_By>;
  min?: Maybe<Countries_Min_Order_By>;
  stddev?: Maybe<Countries_Stddev_Order_By>;
  stddev_pop?: Maybe<Countries_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Countries_Stddev_Samp_Order_By>;
  sum?: Maybe<Countries_Sum_Order_By>;
  var_pop?: Maybe<Countries_Var_Pop_Order_By>;
  var_samp?: Maybe<Countries_Var_Samp_Order_By>;
  variance?: Maybe<Countries_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "countries" */
export type Countries_Arr_Rel_Insert_Input = {
  data: Array<Countries_Insert_Input>;
  on_conflict?: Maybe<Countries_On_Conflict>;
};

/** aggregate avg on columns */
export type Countries_Avg_Fields = {
  __typename?: 'countries_avg_fields';
  phone_code?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "countries" */
export type Countries_Avg_Order_By = {
  phone_code?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "countries". All fields are combined with a logical 'AND'. */
export type Countries_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Countries_Bool_Exp>>>;
  _id?: Maybe<Uuid_Comparison_Exp>;
  _not?: Maybe<Countries_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Countries_Bool_Exp>>>;
  cities?: Maybe<Cities_Bool_Exp>;
  countries_currencies?: Maybe<Countries_Currency_Bool_Exp>;
  created_at?: Maybe<Timestamp_Comparison_Exp>;
  currency?: Maybe<String_Comparison_Exp>;
  customers_addresses?: Maybe<Customers_Address_Bool_Exp>;
  emoji?: Maybe<String_Comparison_Exp>;
  emoji_u?: Maybe<String_Comparison_Exp>;
  iso_2?: Maybe<String_Comparison_Exp>;
  iso_3?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  phone_code?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "countries" */
export enum Countries_Constraint {
  /** unique or primary key constraint */
  CountriesFullNameKey = 'countries_full_name_key',
  /** unique or primary key constraint */
  CountriesIso_2Key = 'countries_iso_2_key',
  /** unique or primary key constraint */
  CountriesPkey = 'countries_pkey',
  /** unique or primary key constraint */
  CountriesShortNameKey = 'countries_short_name_key'
}

/** columns and relationships of "countries_currency" */
export type Countries_Currency = {
  __typename?: 'countries_currency';
  _id: Scalars['uuid'];
  abbreviation?: Maybe<Scalars['String']>;
  /** An object relationship */
  country: Countries;
  country_id: Scalars['uuid'];
  created_at?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
};

/** aggregated selection of "countries_currency" */
export type Countries_Currency_Aggregate = {
  __typename?: 'countries_currency_aggregate';
  aggregate?: Maybe<Countries_Currency_Aggregate_Fields>;
  nodes: Array<Countries_Currency>;
};

/** aggregate fields of "countries_currency" */
export type Countries_Currency_Aggregate_Fields = {
  __typename?: 'countries_currency_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Countries_Currency_Max_Fields>;
  min?: Maybe<Countries_Currency_Min_Fields>;
};

/** aggregate fields of "countries_currency" */
export type Countries_Currency_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Countries_Currency_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "countries_currency" */
export type Countries_Currency_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Countries_Currency_Max_Order_By>;
  min?: Maybe<Countries_Currency_Min_Order_By>;
};

/** input type for inserting array relation for remote table "countries_currency" */
export type Countries_Currency_Arr_Rel_Insert_Input = {
  data: Array<Countries_Currency_Insert_Input>;
  on_conflict?: Maybe<Countries_Currency_On_Conflict>;
};

/** Boolean expression to filter rows from the table "countries_currency". All fields are combined with a logical 'AND'. */
export type Countries_Currency_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Countries_Currency_Bool_Exp>>>;
  _id?: Maybe<Uuid_Comparison_Exp>;
  _not?: Maybe<Countries_Currency_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Countries_Currency_Bool_Exp>>>;
  abbreviation?: Maybe<String_Comparison_Exp>;
  country?: Maybe<Countries_Bool_Exp>;
  country_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamp_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "countries_currency" */
export enum Countries_Currency_Constraint {
  /** unique or primary key constraint */
  CountriesCurrencyAbbreviationKey = 'countries_currency_abbreviation_key',
  /** unique or primary key constraint */
  CountriesCurrencyPkey = 'countries_currency_pkey'
}

/** input type for inserting data into table "countries_currency" */
export type Countries_Currency_Insert_Input = {
  _id?: Maybe<Scalars['uuid']>;
  abbreviation?: Maybe<Scalars['String']>;
  country?: Maybe<Countries_Obj_Rel_Insert_Input>;
  country_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Countries_Currency_Max_Fields = {
  __typename?: 'countries_currency_max_fields';
  _id?: Maybe<Scalars['uuid']>;
  abbreviation?: Maybe<Scalars['String']>;
  country_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "countries_currency" */
export type Countries_Currency_Max_Order_By = {
  _id?: Maybe<Order_By>;
  abbreviation?: Maybe<Order_By>;
  country_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Countries_Currency_Min_Fields = {
  __typename?: 'countries_currency_min_fields';
  _id?: Maybe<Scalars['uuid']>;
  abbreviation?: Maybe<Scalars['String']>;
  country_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "countries_currency" */
export type Countries_Currency_Min_Order_By = {
  _id?: Maybe<Order_By>;
  abbreviation?: Maybe<Order_By>;
  country_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
};

/** response of any mutation on the table "countries_currency" */
export type Countries_Currency_Mutation_Response = {
  __typename?: 'countries_currency_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Countries_Currency>;
};

/** input type for inserting object relation for remote table "countries_currency" */
export type Countries_Currency_Obj_Rel_Insert_Input = {
  data: Countries_Currency_Insert_Input;
  on_conflict?: Maybe<Countries_Currency_On_Conflict>;
};

/** on conflict condition type for table "countries_currency" */
export type Countries_Currency_On_Conflict = {
  constraint: Countries_Currency_Constraint;
  update_columns: Array<Countries_Currency_Update_Column>;
  where?: Maybe<Countries_Currency_Bool_Exp>;
};

/** ordering options when selecting data from "countries_currency" */
export type Countries_Currency_Order_By = {
  _id?: Maybe<Order_By>;
  abbreviation?: Maybe<Order_By>;
  country?: Maybe<Countries_Order_By>;
  country_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
};

/** primary key columns input for table: "countries_currency" */
export type Countries_Currency_Pk_Columns_Input = {
  _id: Scalars['uuid'];
};

/** select columns of table "countries_currency" */
export enum Countries_Currency_Select_Column {
  /** column name */
  Id = '_id',
  /** column name */
  Abbreviation = 'abbreviation',
  /** column name */
  CountryId = 'country_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description'
}

/** input type for updating data in table "countries_currency" */
export type Countries_Currency_Set_Input = {
  _id?: Maybe<Scalars['uuid']>;
  abbreviation?: Maybe<Scalars['String']>;
  country_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
};

/** update columns of table "countries_currency" */
export enum Countries_Currency_Update_Column {
  /** column name */
  Id = '_id',
  /** column name */
  Abbreviation = 'abbreviation',
  /** column name */
  CountryId = 'country_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description'
}

/** input type for incrementing integer column in table "countries" */
export type Countries_Inc_Input = {
  phone_code?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "countries" */
export type Countries_Insert_Input = {
  _id?: Maybe<Scalars['uuid']>;
  cities?: Maybe<Cities_Arr_Rel_Insert_Input>;
  countries_currencies?: Maybe<Countries_Currency_Arr_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamp']>;
  currency?: Maybe<Scalars['String']>;
  customers_addresses?: Maybe<Customers_Address_Arr_Rel_Insert_Input>;
  emoji?: Maybe<Scalars['String']>;
  emoji_u?: Maybe<Scalars['String']>;
  iso_2?: Maybe<Scalars['String']>;
  iso_3?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone_code?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Countries_Max_Fields = {
  __typename?: 'countries_max_fields';
  _id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  currency?: Maybe<Scalars['String']>;
  emoji?: Maybe<Scalars['String']>;
  emoji_u?: Maybe<Scalars['String']>;
  iso_2?: Maybe<Scalars['String']>;
  iso_3?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone_code?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "countries" */
export type Countries_Max_Order_By = {
  _id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  currency?: Maybe<Order_By>;
  emoji?: Maybe<Order_By>;
  emoji_u?: Maybe<Order_By>;
  iso_2?: Maybe<Order_By>;
  iso_3?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  phone_code?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Countries_Min_Fields = {
  __typename?: 'countries_min_fields';
  _id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  currency?: Maybe<Scalars['String']>;
  emoji?: Maybe<Scalars['String']>;
  emoji_u?: Maybe<Scalars['String']>;
  iso_2?: Maybe<Scalars['String']>;
  iso_3?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone_code?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "countries" */
export type Countries_Min_Order_By = {
  _id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  currency?: Maybe<Order_By>;
  emoji?: Maybe<Order_By>;
  emoji_u?: Maybe<Order_By>;
  iso_2?: Maybe<Order_By>;
  iso_3?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  phone_code?: Maybe<Order_By>;
};

/** response of any mutation on the table "countries" */
export type Countries_Mutation_Response = {
  __typename?: 'countries_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Countries>;
};

/** input type for inserting object relation for remote table "countries" */
export type Countries_Obj_Rel_Insert_Input = {
  data: Countries_Insert_Input;
  on_conflict?: Maybe<Countries_On_Conflict>;
};

/** on conflict condition type for table "countries" */
export type Countries_On_Conflict = {
  constraint: Countries_Constraint;
  update_columns: Array<Countries_Update_Column>;
  where?: Maybe<Countries_Bool_Exp>;
};

/** ordering options when selecting data from "countries" */
export type Countries_Order_By = {
  _id?: Maybe<Order_By>;
  cities_aggregate?: Maybe<Cities_Aggregate_Order_By>;
  countries_currencies_aggregate?: Maybe<Countries_Currency_Aggregate_Order_By>;
  created_at?: Maybe<Order_By>;
  currency?: Maybe<Order_By>;
  customers_addresses_aggregate?: Maybe<Customers_Address_Aggregate_Order_By>;
  emoji?: Maybe<Order_By>;
  emoji_u?: Maybe<Order_By>;
  iso_2?: Maybe<Order_By>;
  iso_3?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  phone_code?: Maybe<Order_By>;
};

/** primary key columns input for table: "countries" */
export type Countries_Pk_Columns_Input = {
  _id: Scalars['uuid'];
};

/** select columns of table "countries" */
export enum Countries_Select_Column {
  /** column name */
  Id = '_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Currency = 'currency',
  /** column name */
  Emoji = 'emoji',
  /** column name */
  EmojiU = 'emoji_u',
  /** column name */
  Iso_2 = 'iso_2',
  /** column name */
  Iso_3 = 'iso_3',
  /** column name */
  Name = 'name',
  /** column name */
  PhoneCode = 'phone_code'
}

/** input type for updating data in table "countries" */
export type Countries_Set_Input = {
  _id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  currency?: Maybe<Scalars['String']>;
  emoji?: Maybe<Scalars['String']>;
  emoji_u?: Maybe<Scalars['String']>;
  iso_2?: Maybe<Scalars['String']>;
  iso_3?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone_code?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Countries_Stddev_Fields = {
  __typename?: 'countries_stddev_fields';
  phone_code?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "countries" */
export type Countries_Stddev_Order_By = {
  phone_code?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Countries_Stddev_Pop_Fields = {
  __typename?: 'countries_stddev_pop_fields';
  phone_code?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "countries" */
export type Countries_Stddev_Pop_Order_By = {
  phone_code?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Countries_Stddev_Samp_Fields = {
  __typename?: 'countries_stddev_samp_fields';
  phone_code?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "countries" */
export type Countries_Stddev_Samp_Order_By = {
  phone_code?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Countries_Sum_Fields = {
  __typename?: 'countries_sum_fields';
  phone_code?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "countries" */
export type Countries_Sum_Order_By = {
  phone_code?: Maybe<Order_By>;
};

/** columns and relationships of "countries_taxes" */
export type Countries_Taxes = {
  __typename?: 'countries_taxes';
  _id: Scalars['uuid'];
  abbreviation?: Maybe<Scalars['String']>;
  country_id: Scalars['uuid'];
  created_at?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
  /** An array relationship */
  products: Array<Products>;
  /** An aggregated array relationship */
  products_aggregate: Products_Aggregate;
  value?: Maybe<Scalars['numeric']>;
};

/** columns and relationships of "countries_taxes" */
export type Countries_TaxesProductsArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};

/** columns and relationships of "countries_taxes" */
export type Countries_TaxesProducts_AggregateArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};

/** aggregated selection of "countries_taxes" */
export type Countries_Taxes_Aggregate = {
  __typename?: 'countries_taxes_aggregate';
  aggregate?: Maybe<Countries_Taxes_Aggregate_Fields>;
  nodes: Array<Countries_Taxes>;
};

/** aggregate fields of "countries_taxes" */
export type Countries_Taxes_Aggregate_Fields = {
  __typename?: 'countries_taxes_aggregate_fields';
  avg?: Maybe<Countries_Taxes_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Countries_Taxes_Max_Fields>;
  min?: Maybe<Countries_Taxes_Min_Fields>;
  stddev?: Maybe<Countries_Taxes_Stddev_Fields>;
  stddev_pop?: Maybe<Countries_Taxes_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Countries_Taxes_Stddev_Samp_Fields>;
  sum?: Maybe<Countries_Taxes_Sum_Fields>;
  var_pop?: Maybe<Countries_Taxes_Var_Pop_Fields>;
  var_samp?: Maybe<Countries_Taxes_Var_Samp_Fields>;
  variance?: Maybe<Countries_Taxes_Variance_Fields>;
};

/** aggregate fields of "countries_taxes" */
export type Countries_Taxes_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Countries_Taxes_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "countries_taxes" */
export type Countries_Taxes_Aggregate_Order_By = {
  avg?: Maybe<Countries_Taxes_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Countries_Taxes_Max_Order_By>;
  min?: Maybe<Countries_Taxes_Min_Order_By>;
  stddev?: Maybe<Countries_Taxes_Stddev_Order_By>;
  stddev_pop?: Maybe<Countries_Taxes_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Countries_Taxes_Stddev_Samp_Order_By>;
  sum?: Maybe<Countries_Taxes_Sum_Order_By>;
  var_pop?: Maybe<Countries_Taxes_Var_Pop_Order_By>;
  var_samp?: Maybe<Countries_Taxes_Var_Samp_Order_By>;
  variance?: Maybe<Countries_Taxes_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "countries_taxes" */
export type Countries_Taxes_Arr_Rel_Insert_Input = {
  data: Array<Countries_Taxes_Insert_Input>;
  on_conflict?: Maybe<Countries_Taxes_On_Conflict>;
};

/** aggregate avg on columns */
export type Countries_Taxes_Avg_Fields = {
  __typename?: 'countries_taxes_avg_fields';
  value?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "countries_taxes" */
export type Countries_Taxes_Avg_Order_By = {
  value?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "countries_taxes". All fields are combined with a logical 'AND'. */
export type Countries_Taxes_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Countries_Taxes_Bool_Exp>>>;
  _id?: Maybe<Uuid_Comparison_Exp>;
  _not?: Maybe<Countries_Taxes_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Countries_Taxes_Bool_Exp>>>;
  abbreviation?: Maybe<String_Comparison_Exp>;
  country_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamp_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  products?: Maybe<Products_Bool_Exp>;
  value?: Maybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "countries_taxes" */
export enum Countries_Taxes_Constraint {
  /** unique or primary key constraint */
  CountriesTaxesPkey = 'countries_taxes_pkey'
}

/** input type for incrementing integer column in table "countries_taxes" */
export type Countries_Taxes_Inc_Input = {
  value?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "countries_taxes" */
export type Countries_Taxes_Insert_Input = {
  _id?: Maybe<Scalars['uuid']>;
  abbreviation?: Maybe<Scalars['String']>;
  country_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
  products?: Maybe<Products_Arr_Rel_Insert_Input>;
  value?: Maybe<Scalars['numeric']>;
};

/** aggregate max on columns */
export type Countries_Taxes_Max_Fields = {
  __typename?: 'countries_taxes_max_fields';
  _id?: Maybe<Scalars['uuid']>;
  abbreviation?: Maybe<Scalars['String']>;
  country_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['numeric']>;
};

/** order by max() on columns of table "countries_taxes" */
export type Countries_Taxes_Max_Order_By = {
  _id?: Maybe<Order_By>;
  abbreviation?: Maybe<Order_By>;
  country_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Countries_Taxes_Min_Fields = {
  __typename?: 'countries_taxes_min_fields';
  _id?: Maybe<Scalars['uuid']>;
  abbreviation?: Maybe<Scalars['String']>;
  country_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['numeric']>;
};

/** order by min() on columns of table "countries_taxes" */
export type Countries_Taxes_Min_Order_By = {
  _id?: Maybe<Order_By>;
  abbreviation?: Maybe<Order_By>;
  country_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** response of any mutation on the table "countries_taxes" */
export type Countries_Taxes_Mutation_Response = {
  __typename?: 'countries_taxes_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Countries_Taxes>;
};

/** input type for inserting object relation for remote table "countries_taxes" */
export type Countries_Taxes_Obj_Rel_Insert_Input = {
  data: Countries_Taxes_Insert_Input;
  on_conflict?: Maybe<Countries_Taxes_On_Conflict>;
};

/** on conflict condition type for table "countries_taxes" */
export type Countries_Taxes_On_Conflict = {
  constraint: Countries_Taxes_Constraint;
  update_columns: Array<Countries_Taxes_Update_Column>;
  where?: Maybe<Countries_Taxes_Bool_Exp>;
};

/** ordering options when selecting data from "countries_taxes" */
export type Countries_Taxes_Order_By = {
  _id?: Maybe<Order_By>;
  abbreviation?: Maybe<Order_By>;
  country_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  products_aggregate?: Maybe<Products_Aggregate_Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: "countries_taxes" */
export type Countries_Taxes_Pk_Columns_Input = {
  _id: Scalars['uuid'];
};

/** select columns of table "countries_taxes" */
export enum Countries_Taxes_Select_Column {
  /** column name */
  Id = '_id',
  /** column name */
  Abbreviation = 'abbreviation',
  /** column name */
  CountryId = 'country_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "countries_taxes" */
export type Countries_Taxes_Set_Input = {
  _id?: Maybe<Scalars['uuid']>;
  abbreviation?: Maybe<Scalars['String']>;
  country_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['numeric']>;
};

/** aggregate stddev on columns */
export type Countries_Taxes_Stddev_Fields = {
  __typename?: 'countries_taxes_stddev_fields';
  value?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "countries_taxes" */
export type Countries_Taxes_Stddev_Order_By = {
  value?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Countries_Taxes_Stddev_Pop_Fields = {
  __typename?: 'countries_taxes_stddev_pop_fields';
  value?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "countries_taxes" */
export type Countries_Taxes_Stddev_Pop_Order_By = {
  value?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Countries_Taxes_Stddev_Samp_Fields = {
  __typename?: 'countries_taxes_stddev_samp_fields';
  value?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "countries_taxes" */
export type Countries_Taxes_Stddev_Samp_Order_By = {
  value?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Countries_Taxes_Sum_Fields = {
  __typename?: 'countries_taxes_sum_fields';
  value?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "countries_taxes" */
export type Countries_Taxes_Sum_Order_By = {
  value?: Maybe<Order_By>;
};

/** update columns of table "countries_taxes" */
export enum Countries_Taxes_Update_Column {
  /** column name */
  Id = '_id',
  /** column name */
  Abbreviation = 'abbreviation',
  /** column name */
  CountryId = 'country_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/** aggregate var_pop on columns */
export type Countries_Taxes_Var_Pop_Fields = {
  __typename?: 'countries_taxes_var_pop_fields';
  value?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "countries_taxes" */
export type Countries_Taxes_Var_Pop_Order_By = {
  value?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Countries_Taxes_Var_Samp_Fields = {
  __typename?: 'countries_taxes_var_samp_fields';
  value?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "countries_taxes" */
export type Countries_Taxes_Var_Samp_Order_By = {
  value?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Countries_Taxes_Variance_Fields = {
  __typename?: 'countries_taxes_variance_fields';
  value?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "countries_taxes" */
export type Countries_Taxes_Variance_Order_By = {
  value?: Maybe<Order_By>;
};

/** update columns of table "countries" */
export enum Countries_Update_Column {
  /** column name */
  Id = '_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Currency = 'currency',
  /** column name */
  Emoji = 'emoji',
  /** column name */
  EmojiU = 'emoji_u',
  /** column name */
  Iso_2 = 'iso_2',
  /** column name */
  Iso_3 = 'iso_3',
  /** column name */
  Name = 'name',
  /** column name */
  PhoneCode = 'phone_code'
}

/** aggregate var_pop on columns */
export type Countries_Var_Pop_Fields = {
  __typename?: 'countries_var_pop_fields';
  phone_code?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "countries" */
export type Countries_Var_Pop_Order_By = {
  phone_code?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Countries_Var_Samp_Fields = {
  __typename?: 'countries_var_samp_fields';
  phone_code?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "countries" */
export type Countries_Var_Samp_Order_By = {
  phone_code?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Countries_Variance_Fields = {
  __typename?: 'countries_variance_fields';
  phone_code?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "countries" */
export type Countries_Variance_Order_By = {
  phone_code?: Maybe<Order_By>;
};

/** columns and relationships of "customers" */
export type Customers = {
  __typename?: 'customers';
  _id: Scalars['uuid'];
  accept_emarketing?: Maybe<Scalars['bit']>;
  created_at?: Maybe<Scalars['timestamp']>;
  /** An array relationship */
  customers_addresses: Array<Customers_Address>;
  /** An aggregated array relationship */
  customers_addresses_aggregate: Customers_Address_Aggregate;
  /** An array relationship */
  customers_tags: Array<Customers_Tags>;
  /** An aggregated array relationship */
  customers_tags_aggregate: Customers_Tags_Aggregate;
  /** An array relationship */
  draft_orders: Array<Draft_Orders>;
  /** An aggregated array relationship */
  draft_orders_aggregate: Draft_Orders_Aggregate;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  /** An array relationship */
  orders: Array<Orders>;
  /** An aggregated array relationship */
  orders_aggregate: Orders_Aggregate;
  phone_number?: Maybe<Scalars['String']>;
};

/** columns and relationships of "customers" */
export type CustomersCustomers_AddressesArgs = {
  distinct_on?: Maybe<Array<Customers_Address_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Customers_Address_Order_By>>;
  where?: Maybe<Customers_Address_Bool_Exp>;
};

/** columns and relationships of "customers" */
export type CustomersCustomers_Addresses_AggregateArgs = {
  distinct_on?: Maybe<Array<Customers_Address_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Customers_Address_Order_By>>;
  where?: Maybe<Customers_Address_Bool_Exp>;
};

/** columns and relationships of "customers" */
export type CustomersCustomers_TagsArgs = {
  distinct_on?: Maybe<Array<Customers_Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Customers_Tags_Order_By>>;
  where?: Maybe<Customers_Tags_Bool_Exp>;
};

/** columns and relationships of "customers" */
export type CustomersCustomers_Tags_AggregateArgs = {
  distinct_on?: Maybe<Array<Customers_Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Customers_Tags_Order_By>>;
  where?: Maybe<Customers_Tags_Bool_Exp>;
};

/** columns and relationships of "customers" */
export type CustomersDraft_OrdersArgs = {
  distinct_on?: Maybe<Array<Draft_Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Draft_Orders_Order_By>>;
  where?: Maybe<Draft_Orders_Bool_Exp>;
};

/** columns and relationships of "customers" */
export type CustomersDraft_Orders_AggregateArgs = {
  distinct_on?: Maybe<Array<Draft_Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Draft_Orders_Order_By>>;
  where?: Maybe<Draft_Orders_Bool_Exp>;
};

/** columns and relationships of "customers" */
export type CustomersOrdersArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};

/** columns and relationships of "customers" */
export type CustomersOrders_AggregateArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};

/** columns and relationships of "customers_address" */
export type Customers_Address = {
  __typename?: 'customers_address';
  _id: Scalars['uuid'];
  address?: Maybe<Scalars['String']>;
  /** An object relationship */
  city: Cities;
  city_id: Scalars['uuid'];
  /** An object relationship */
  country: Countries;
  country_id: Scalars['uuid'];
  created_at?: Maybe<Scalars['timestamp']>;
  /** An object relationship */
  customer: Customers;
  customer_id: Scalars['uuid'];
  latitude?: Maybe<Scalars['numeric']>;
  longitude?: Maybe<Scalars['numeric']>;
};

/** aggregated selection of "customers_address" */
export type Customers_Address_Aggregate = {
  __typename?: 'customers_address_aggregate';
  aggregate?: Maybe<Customers_Address_Aggregate_Fields>;
  nodes: Array<Customers_Address>;
};

/** aggregate fields of "customers_address" */
export type Customers_Address_Aggregate_Fields = {
  __typename?: 'customers_address_aggregate_fields';
  avg?: Maybe<Customers_Address_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Customers_Address_Max_Fields>;
  min?: Maybe<Customers_Address_Min_Fields>;
  stddev?: Maybe<Customers_Address_Stddev_Fields>;
  stddev_pop?: Maybe<Customers_Address_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Customers_Address_Stddev_Samp_Fields>;
  sum?: Maybe<Customers_Address_Sum_Fields>;
  var_pop?: Maybe<Customers_Address_Var_Pop_Fields>;
  var_samp?: Maybe<Customers_Address_Var_Samp_Fields>;
  variance?: Maybe<Customers_Address_Variance_Fields>;
};

/** aggregate fields of "customers_address" */
export type Customers_Address_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Customers_Address_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "customers_address" */
export type Customers_Address_Aggregate_Order_By = {
  avg?: Maybe<Customers_Address_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Customers_Address_Max_Order_By>;
  min?: Maybe<Customers_Address_Min_Order_By>;
  stddev?: Maybe<Customers_Address_Stddev_Order_By>;
  stddev_pop?: Maybe<Customers_Address_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Customers_Address_Stddev_Samp_Order_By>;
  sum?: Maybe<Customers_Address_Sum_Order_By>;
  var_pop?: Maybe<Customers_Address_Var_Pop_Order_By>;
  var_samp?: Maybe<Customers_Address_Var_Samp_Order_By>;
  variance?: Maybe<Customers_Address_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "customers_address" */
export type Customers_Address_Arr_Rel_Insert_Input = {
  data: Array<Customers_Address_Insert_Input>;
  on_conflict?: Maybe<Customers_Address_On_Conflict>;
};

/** aggregate avg on columns */
export type Customers_Address_Avg_Fields = {
  __typename?: 'customers_address_avg_fields';
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "customers_address" */
export type Customers_Address_Avg_Order_By = {
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "customers_address". All fields are combined with a logical 'AND'. */
export type Customers_Address_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Customers_Address_Bool_Exp>>>;
  _id?: Maybe<Uuid_Comparison_Exp>;
  _not?: Maybe<Customers_Address_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Customers_Address_Bool_Exp>>>;
  address?: Maybe<String_Comparison_Exp>;
  city?: Maybe<Cities_Bool_Exp>;
  city_id?: Maybe<Uuid_Comparison_Exp>;
  country?: Maybe<Countries_Bool_Exp>;
  country_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamp_Comparison_Exp>;
  customer?: Maybe<Customers_Bool_Exp>;
  customer_id?: Maybe<Uuid_Comparison_Exp>;
  latitude?: Maybe<Numeric_Comparison_Exp>;
  longitude?: Maybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "customers_address" */
export enum Customers_Address_Constraint {
  /** unique or primary key constraint */
  CustomersAddressPkey = 'customers_address_pkey'
}

/** input type for incrementing integer column in table "customers_address" */
export type Customers_Address_Inc_Input = {
  latitude?: Maybe<Scalars['numeric']>;
  longitude?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "customers_address" */
export type Customers_Address_Insert_Input = {
  _id?: Maybe<Scalars['uuid']>;
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Cities_Obj_Rel_Insert_Input>;
  city_id?: Maybe<Scalars['uuid']>;
  country?: Maybe<Countries_Obj_Rel_Insert_Input>;
  country_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  customer?: Maybe<Customers_Obj_Rel_Insert_Input>;
  customer_id?: Maybe<Scalars['uuid']>;
  latitude?: Maybe<Scalars['numeric']>;
  longitude?: Maybe<Scalars['numeric']>;
};

/** aggregate max on columns */
export type Customers_Address_Max_Fields = {
  __typename?: 'customers_address_max_fields';
  _id?: Maybe<Scalars['uuid']>;
  address?: Maybe<Scalars['String']>;
  city_id?: Maybe<Scalars['uuid']>;
  country_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  customer_id?: Maybe<Scalars['uuid']>;
  latitude?: Maybe<Scalars['numeric']>;
  longitude?: Maybe<Scalars['numeric']>;
};

/** order by max() on columns of table "customers_address" */
export type Customers_Address_Max_Order_By = {
  _id?: Maybe<Order_By>;
  address?: Maybe<Order_By>;
  city_id?: Maybe<Order_By>;
  country_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  customer_id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Customers_Address_Min_Fields = {
  __typename?: 'customers_address_min_fields';
  _id?: Maybe<Scalars['uuid']>;
  address?: Maybe<Scalars['String']>;
  city_id?: Maybe<Scalars['uuid']>;
  country_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  customer_id?: Maybe<Scalars['uuid']>;
  latitude?: Maybe<Scalars['numeric']>;
  longitude?: Maybe<Scalars['numeric']>;
};

/** order by min() on columns of table "customers_address" */
export type Customers_Address_Min_Order_By = {
  _id?: Maybe<Order_By>;
  address?: Maybe<Order_By>;
  city_id?: Maybe<Order_By>;
  country_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  customer_id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
};

/** response of any mutation on the table "customers_address" */
export type Customers_Address_Mutation_Response = {
  __typename?: 'customers_address_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Customers_Address>;
};

/** input type for inserting object relation for remote table "customers_address" */
export type Customers_Address_Obj_Rel_Insert_Input = {
  data: Customers_Address_Insert_Input;
  on_conflict?: Maybe<Customers_Address_On_Conflict>;
};

/** on conflict condition type for table "customers_address" */
export type Customers_Address_On_Conflict = {
  constraint: Customers_Address_Constraint;
  update_columns: Array<Customers_Address_Update_Column>;
  where?: Maybe<Customers_Address_Bool_Exp>;
};

/** ordering options when selecting data from "customers_address" */
export type Customers_Address_Order_By = {
  _id?: Maybe<Order_By>;
  address?: Maybe<Order_By>;
  city?: Maybe<Cities_Order_By>;
  city_id?: Maybe<Order_By>;
  country?: Maybe<Countries_Order_By>;
  country_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  customer?: Maybe<Customers_Order_By>;
  customer_id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
};

/** primary key columns input for table: "customers_address" */
export type Customers_Address_Pk_Columns_Input = {
  _id: Scalars['uuid'];
};

/** select columns of table "customers_address" */
export enum Customers_Address_Select_Column {
  /** column name */
  Id = '_id',
  /** column name */
  Address = 'address',
  /** column name */
  CityId = 'city_id',
  /** column name */
  CountryId = 'country_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  Latitude = 'latitude',
  /** column name */
  Longitude = 'longitude'
}

/** input type for updating data in table "customers_address" */
export type Customers_Address_Set_Input = {
  _id?: Maybe<Scalars['uuid']>;
  address?: Maybe<Scalars['String']>;
  city_id?: Maybe<Scalars['uuid']>;
  country_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  customer_id?: Maybe<Scalars['uuid']>;
  latitude?: Maybe<Scalars['numeric']>;
  longitude?: Maybe<Scalars['numeric']>;
};

/** aggregate stddev on columns */
export type Customers_Address_Stddev_Fields = {
  __typename?: 'customers_address_stddev_fields';
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "customers_address" */
export type Customers_Address_Stddev_Order_By = {
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Customers_Address_Stddev_Pop_Fields = {
  __typename?: 'customers_address_stddev_pop_fields';
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "customers_address" */
export type Customers_Address_Stddev_Pop_Order_By = {
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Customers_Address_Stddev_Samp_Fields = {
  __typename?: 'customers_address_stddev_samp_fields';
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "customers_address" */
export type Customers_Address_Stddev_Samp_Order_By = {
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Customers_Address_Sum_Fields = {
  __typename?: 'customers_address_sum_fields';
  latitude?: Maybe<Scalars['numeric']>;
  longitude?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "customers_address" */
export type Customers_Address_Sum_Order_By = {
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
};

/** update columns of table "customers_address" */
export enum Customers_Address_Update_Column {
  /** column name */
  Id = '_id',
  /** column name */
  Address = 'address',
  /** column name */
  CityId = 'city_id',
  /** column name */
  CountryId = 'country_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  Latitude = 'latitude',
  /** column name */
  Longitude = 'longitude'
}

/** aggregate var_pop on columns */
export type Customers_Address_Var_Pop_Fields = {
  __typename?: 'customers_address_var_pop_fields';
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "customers_address" */
export type Customers_Address_Var_Pop_Order_By = {
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Customers_Address_Var_Samp_Fields = {
  __typename?: 'customers_address_var_samp_fields';
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "customers_address" */
export type Customers_Address_Var_Samp_Order_By = {
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Customers_Address_Variance_Fields = {
  __typename?: 'customers_address_variance_fields';
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "customers_address" */
export type Customers_Address_Variance_Order_By = {
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
};

/** aggregated selection of "customers" */
export type Customers_Aggregate = {
  __typename?: 'customers_aggregate';
  aggregate?: Maybe<Customers_Aggregate_Fields>;
  nodes: Array<Customers>;
};

/** aggregate fields of "customers" */
export type Customers_Aggregate_Fields = {
  __typename?: 'customers_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Customers_Max_Fields>;
  min?: Maybe<Customers_Min_Fields>;
};

/** aggregate fields of "customers" */
export type Customers_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Customers_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "customers" */
export type Customers_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Customers_Max_Order_By>;
  min?: Maybe<Customers_Min_Order_By>;
};

/** input type for inserting array relation for remote table "customers" */
export type Customers_Arr_Rel_Insert_Input = {
  data: Array<Customers_Insert_Input>;
  on_conflict?: Maybe<Customers_On_Conflict>;
};

/** Boolean expression to filter rows from the table "customers". All fields are combined with a logical 'AND'. */
export type Customers_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Customers_Bool_Exp>>>;
  _id?: Maybe<Uuid_Comparison_Exp>;
  _not?: Maybe<Customers_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Customers_Bool_Exp>>>;
  accept_emarketing?: Maybe<Bit_Comparison_Exp>;
  created_at?: Maybe<Timestamp_Comparison_Exp>;
  customers_addresses?: Maybe<Customers_Address_Bool_Exp>;
  customers_tags?: Maybe<Customers_Tags_Bool_Exp>;
  draft_orders?: Maybe<Draft_Orders_Bool_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  first_name?: Maybe<String_Comparison_Exp>;
  last_name?: Maybe<String_Comparison_Exp>;
  orders?: Maybe<Orders_Bool_Exp>;
  phone_number?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "customers" */
export enum Customers_Constraint {
  /** unique or primary key constraint */
  CustomersEmailKey = 'customers_email_key',
  /** unique or primary key constraint */
  CustomersPkey = 'customers_pkey'
}

/** input type for inserting data into table "customers" */
export type Customers_Insert_Input = {
  _id?: Maybe<Scalars['uuid']>;
  accept_emarketing?: Maybe<Scalars['bit']>;
  created_at?: Maybe<Scalars['timestamp']>;
  customers_addresses?: Maybe<Customers_Address_Arr_Rel_Insert_Input>;
  customers_tags?: Maybe<Customers_Tags_Arr_Rel_Insert_Input>;
  draft_orders?: Maybe<Draft_Orders_Arr_Rel_Insert_Input>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  orders?: Maybe<Orders_Arr_Rel_Insert_Input>;
  phone_number?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Customers_Max_Fields = {
  __typename?: 'customers_max_fields';
  _id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "customers" */
export type Customers_Max_Order_By = {
  _id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  phone_number?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Customers_Min_Fields = {
  __typename?: 'customers_min_fields';
  _id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "customers" */
export type Customers_Min_Order_By = {
  _id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  phone_number?: Maybe<Order_By>;
};

/** response of any mutation on the table "customers" */
export type Customers_Mutation_Response = {
  __typename?: 'customers_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Customers>;
};

/** input type for inserting object relation for remote table "customers" */
export type Customers_Obj_Rel_Insert_Input = {
  data: Customers_Insert_Input;
  on_conflict?: Maybe<Customers_On_Conflict>;
};

/** on conflict condition type for table "customers" */
export type Customers_On_Conflict = {
  constraint: Customers_Constraint;
  update_columns: Array<Customers_Update_Column>;
  where?: Maybe<Customers_Bool_Exp>;
};

/** ordering options when selecting data from "customers" */
export type Customers_Order_By = {
  _id?: Maybe<Order_By>;
  accept_emarketing?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  customers_addresses_aggregate?: Maybe<Customers_Address_Aggregate_Order_By>;
  customers_tags_aggregate?: Maybe<Customers_Tags_Aggregate_Order_By>;
  draft_orders_aggregate?: Maybe<Draft_Orders_Aggregate_Order_By>;
  email?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  orders_aggregate?: Maybe<Orders_Aggregate_Order_By>;
  phone_number?: Maybe<Order_By>;
};

/** primary key columns input for table: "customers" */
export type Customers_Pk_Columns_Input = {
  _id: Scalars['uuid'];
};

/** select columns of table "customers" */
export enum Customers_Select_Column {
  /** column name */
  Id = '_id',
  /** column name */
  AcceptEmarketing = 'accept_emarketing',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  LastName = 'last_name',
  /** column name */
  PhoneNumber = 'phone_number'
}

/** input type for updating data in table "customers" */
export type Customers_Set_Input = {
  _id?: Maybe<Scalars['uuid']>;
  accept_emarketing?: Maybe<Scalars['bit']>;
  created_at?: Maybe<Scalars['timestamp']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['String']>;
};

/** columns and relationships of "customers_tags" */
export type Customers_Tags = {
  __typename?: 'customers_tags';
  _id: Scalars['uuid'];
  costumer_id: Scalars['uuid'];
  created_at?: Maybe<Scalars['timestamp']>;
  /** An object relationship */
  customer: Customers;
  tag?: Maybe<Scalars['String']>;
};

/** aggregated selection of "customers_tags" */
export type Customers_Tags_Aggregate = {
  __typename?: 'customers_tags_aggregate';
  aggregate?: Maybe<Customers_Tags_Aggregate_Fields>;
  nodes: Array<Customers_Tags>;
};

/** aggregate fields of "customers_tags" */
export type Customers_Tags_Aggregate_Fields = {
  __typename?: 'customers_tags_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Customers_Tags_Max_Fields>;
  min?: Maybe<Customers_Tags_Min_Fields>;
};

/** aggregate fields of "customers_tags" */
export type Customers_Tags_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Customers_Tags_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "customers_tags" */
export type Customers_Tags_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Customers_Tags_Max_Order_By>;
  min?: Maybe<Customers_Tags_Min_Order_By>;
};

/** input type for inserting array relation for remote table "customers_tags" */
export type Customers_Tags_Arr_Rel_Insert_Input = {
  data: Array<Customers_Tags_Insert_Input>;
  on_conflict?: Maybe<Customers_Tags_On_Conflict>;
};

/** Boolean expression to filter rows from the table "customers_tags". All fields are combined with a logical 'AND'. */
export type Customers_Tags_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Customers_Tags_Bool_Exp>>>;
  _id?: Maybe<Uuid_Comparison_Exp>;
  _not?: Maybe<Customers_Tags_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Customers_Tags_Bool_Exp>>>;
  costumer_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamp_Comparison_Exp>;
  customer?: Maybe<Customers_Bool_Exp>;
  tag?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "customers_tags" */
export enum Customers_Tags_Constraint {
  /** unique or primary key constraint */
  CustomersTagsPkey = 'customers_tags_pkey'
}

/** input type for inserting data into table "customers_tags" */
export type Customers_Tags_Insert_Input = {
  _id?: Maybe<Scalars['uuid']>;
  costumer_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  customer?: Maybe<Customers_Obj_Rel_Insert_Input>;
  tag?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Customers_Tags_Max_Fields = {
  __typename?: 'customers_tags_max_fields';
  _id?: Maybe<Scalars['uuid']>;
  costumer_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  tag?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "customers_tags" */
export type Customers_Tags_Max_Order_By = {
  _id?: Maybe<Order_By>;
  costumer_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  tag?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Customers_Tags_Min_Fields = {
  __typename?: 'customers_tags_min_fields';
  _id?: Maybe<Scalars['uuid']>;
  costumer_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  tag?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "customers_tags" */
export type Customers_Tags_Min_Order_By = {
  _id?: Maybe<Order_By>;
  costumer_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  tag?: Maybe<Order_By>;
};

/** response of any mutation on the table "customers_tags" */
export type Customers_Tags_Mutation_Response = {
  __typename?: 'customers_tags_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Customers_Tags>;
};

/** input type for inserting object relation for remote table "customers_tags" */
export type Customers_Tags_Obj_Rel_Insert_Input = {
  data: Customers_Tags_Insert_Input;
  on_conflict?: Maybe<Customers_Tags_On_Conflict>;
};

/** on conflict condition type for table "customers_tags" */
export type Customers_Tags_On_Conflict = {
  constraint: Customers_Tags_Constraint;
  update_columns: Array<Customers_Tags_Update_Column>;
  where?: Maybe<Customers_Tags_Bool_Exp>;
};

/** ordering options when selecting data from "customers_tags" */
export type Customers_Tags_Order_By = {
  _id?: Maybe<Order_By>;
  costumer_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  customer?: Maybe<Customers_Order_By>;
  tag?: Maybe<Order_By>;
};

/** primary key columns input for table: "customers_tags" */
export type Customers_Tags_Pk_Columns_Input = {
  _id: Scalars['uuid'];
};

/** select columns of table "customers_tags" */
export enum Customers_Tags_Select_Column {
  /** column name */
  Id = '_id',
  /** column name */
  CostumerId = 'costumer_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Tag = 'tag'
}

/** input type for updating data in table "customers_tags" */
export type Customers_Tags_Set_Input = {
  _id?: Maybe<Scalars['uuid']>;
  costumer_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  tag?: Maybe<Scalars['String']>;
};

/** update columns of table "customers_tags" */
export enum Customers_Tags_Update_Column {
  /** column name */
  Id = '_id',
  /** column name */
  CostumerId = 'costumer_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Tag = 'tag'
}

/** update columns of table "customers" */
export enum Customers_Update_Column {
  /** column name */
  Id = '_id',
  /** column name */
  AcceptEmarketing = 'accept_emarketing',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  LastName = 'last_name',
  /** column name */
  PhoneNumber = 'phone_number'
}

/** columns and relationships of "draft_orders" */
export type Draft_Orders = {
  __typename?: 'draft_orders';
  _id: Scalars['uuid'];
  created_at?: Maybe<Scalars['timestamp']>;
  /** An object relationship */
  customer: Customers;
  customer_id: Scalars['uuid'];
  /** An array relationship */
  draft_orders_details: Array<Draft_Orders_Details>;
  /** An aggregated array relationship */
  draft_orders_details_aggregate: Draft_Orders_Details_Aggregate;
  entry_date?: Maybe<Scalars['timestamp']>;
  /** An object relationship */
  store: Stores;
  store_id: Scalars['uuid'];
  sub_total: Scalars['numeric'];
  tax_total: Scalars['numeric'];
  total?: Maybe<Scalars['numeric']>;
};

/** columns and relationships of "draft_orders" */
export type Draft_OrdersDraft_Orders_DetailsArgs = {
  distinct_on?: Maybe<Array<Draft_Orders_Details_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Draft_Orders_Details_Order_By>>;
  where?: Maybe<Draft_Orders_Details_Bool_Exp>;
};

/** columns and relationships of "draft_orders" */
export type Draft_OrdersDraft_Orders_Details_AggregateArgs = {
  distinct_on?: Maybe<Array<Draft_Orders_Details_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Draft_Orders_Details_Order_By>>;
  where?: Maybe<Draft_Orders_Details_Bool_Exp>;
};

/** aggregated selection of "draft_orders" */
export type Draft_Orders_Aggregate = {
  __typename?: 'draft_orders_aggregate';
  aggregate?: Maybe<Draft_Orders_Aggregate_Fields>;
  nodes: Array<Draft_Orders>;
};

/** aggregate fields of "draft_orders" */
export type Draft_Orders_Aggregate_Fields = {
  __typename?: 'draft_orders_aggregate_fields';
  avg?: Maybe<Draft_Orders_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Draft_Orders_Max_Fields>;
  min?: Maybe<Draft_Orders_Min_Fields>;
  stddev?: Maybe<Draft_Orders_Stddev_Fields>;
  stddev_pop?: Maybe<Draft_Orders_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Draft_Orders_Stddev_Samp_Fields>;
  sum?: Maybe<Draft_Orders_Sum_Fields>;
  var_pop?: Maybe<Draft_Orders_Var_Pop_Fields>;
  var_samp?: Maybe<Draft_Orders_Var_Samp_Fields>;
  variance?: Maybe<Draft_Orders_Variance_Fields>;
};

/** aggregate fields of "draft_orders" */
export type Draft_Orders_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Draft_Orders_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "draft_orders" */
export type Draft_Orders_Aggregate_Order_By = {
  avg?: Maybe<Draft_Orders_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Draft_Orders_Max_Order_By>;
  min?: Maybe<Draft_Orders_Min_Order_By>;
  stddev?: Maybe<Draft_Orders_Stddev_Order_By>;
  stddev_pop?: Maybe<Draft_Orders_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Draft_Orders_Stddev_Samp_Order_By>;
  sum?: Maybe<Draft_Orders_Sum_Order_By>;
  var_pop?: Maybe<Draft_Orders_Var_Pop_Order_By>;
  var_samp?: Maybe<Draft_Orders_Var_Samp_Order_By>;
  variance?: Maybe<Draft_Orders_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "draft_orders" */
export type Draft_Orders_Arr_Rel_Insert_Input = {
  data: Array<Draft_Orders_Insert_Input>;
  on_conflict?: Maybe<Draft_Orders_On_Conflict>;
};

/** aggregate avg on columns */
export type Draft_Orders_Avg_Fields = {
  __typename?: 'draft_orders_avg_fields';
  sub_total?: Maybe<Scalars['Float']>;
  tax_total?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "draft_orders" */
export type Draft_Orders_Avg_Order_By = {
  sub_total?: Maybe<Order_By>;
  tax_total?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "draft_orders". All fields are combined with a logical 'AND'. */
export type Draft_Orders_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Draft_Orders_Bool_Exp>>>;
  _id?: Maybe<Uuid_Comparison_Exp>;
  _not?: Maybe<Draft_Orders_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Draft_Orders_Bool_Exp>>>;
  created_at?: Maybe<Timestamp_Comparison_Exp>;
  customer?: Maybe<Customers_Bool_Exp>;
  customer_id?: Maybe<Uuid_Comparison_Exp>;
  draft_orders_details?: Maybe<Draft_Orders_Details_Bool_Exp>;
  entry_date?: Maybe<Timestamp_Comparison_Exp>;
  store?: Maybe<Stores_Bool_Exp>;
  store_id?: Maybe<Uuid_Comparison_Exp>;
  sub_total?: Maybe<Numeric_Comparison_Exp>;
  tax_total?: Maybe<Numeric_Comparison_Exp>;
  total?: Maybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "draft_orders" */
export enum Draft_Orders_Constraint {
  /** unique or primary key constraint */
  DraftOrdersPkey = 'draft_orders_pkey'
}

/** columns and relationships of "draft_orders_details" */
export type Draft_Orders_Details = {
  __typename?: 'draft_orders_details';
  _id: Scalars['uuid'];
  created_at?: Maybe<Scalars['timestamp']>;
  discount_total?: Maybe<Scalars['numeric']>;
  /** An object relationship */
  draft_order: Draft_Orders;
  draft_order_id: Scalars['uuid'];
  price?: Maybe<Scalars['numeric']>;
  product_lot_id: Scalars['uuid'];
  /** An object relationship */
  products_lot: Products_Lots;
  quantity?: Maybe<Scalars['Int']>;
  sub_total?: Maybe<Scalars['numeric']>;
  tax_total?: Maybe<Scalars['numeric']>;
  total?: Maybe<Scalars['numeric']>;
};

/** aggregated selection of "draft_orders_details" */
export type Draft_Orders_Details_Aggregate = {
  __typename?: 'draft_orders_details_aggregate';
  aggregate?: Maybe<Draft_Orders_Details_Aggregate_Fields>;
  nodes: Array<Draft_Orders_Details>;
};

/** aggregate fields of "draft_orders_details" */
export type Draft_Orders_Details_Aggregate_Fields = {
  __typename?: 'draft_orders_details_aggregate_fields';
  avg?: Maybe<Draft_Orders_Details_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Draft_Orders_Details_Max_Fields>;
  min?: Maybe<Draft_Orders_Details_Min_Fields>;
  stddev?: Maybe<Draft_Orders_Details_Stddev_Fields>;
  stddev_pop?: Maybe<Draft_Orders_Details_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Draft_Orders_Details_Stddev_Samp_Fields>;
  sum?: Maybe<Draft_Orders_Details_Sum_Fields>;
  var_pop?: Maybe<Draft_Orders_Details_Var_Pop_Fields>;
  var_samp?: Maybe<Draft_Orders_Details_Var_Samp_Fields>;
  variance?: Maybe<Draft_Orders_Details_Variance_Fields>;
};

/** aggregate fields of "draft_orders_details" */
export type Draft_Orders_Details_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Draft_Orders_Details_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "draft_orders_details" */
export type Draft_Orders_Details_Aggregate_Order_By = {
  avg?: Maybe<Draft_Orders_Details_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Draft_Orders_Details_Max_Order_By>;
  min?: Maybe<Draft_Orders_Details_Min_Order_By>;
  stddev?: Maybe<Draft_Orders_Details_Stddev_Order_By>;
  stddev_pop?: Maybe<Draft_Orders_Details_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Draft_Orders_Details_Stddev_Samp_Order_By>;
  sum?: Maybe<Draft_Orders_Details_Sum_Order_By>;
  var_pop?: Maybe<Draft_Orders_Details_Var_Pop_Order_By>;
  var_samp?: Maybe<Draft_Orders_Details_Var_Samp_Order_By>;
  variance?: Maybe<Draft_Orders_Details_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "draft_orders_details" */
export type Draft_Orders_Details_Arr_Rel_Insert_Input = {
  data: Array<Draft_Orders_Details_Insert_Input>;
  on_conflict?: Maybe<Draft_Orders_Details_On_Conflict>;
};

/** aggregate avg on columns */
export type Draft_Orders_Details_Avg_Fields = {
  __typename?: 'draft_orders_details_avg_fields';
  discount_total?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  sub_total?: Maybe<Scalars['Float']>;
  tax_total?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "draft_orders_details" */
export type Draft_Orders_Details_Avg_Order_By = {
  discount_total?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  sub_total?: Maybe<Order_By>;
  tax_total?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "draft_orders_details". All fields are combined with a logical 'AND'. */
export type Draft_Orders_Details_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Draft_Orders_Details_Bool_Exp>>>;
  _id?: Maybe<Uuid_Comparison_Exp>;
  _not?: Maybe<Draft_Orders_Details_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Draft_Orders_Details_Bool_Exp>>>;
  created_at?: Maybe<Timestamp_Comparison_Exp>;
  discount_total?: Maybe<Numeric_Comparison_Exp>;
  draft_order?: Maybe<Draft_Orders_Bool_Exp>;
  draft_order_id?: Maybe<Uuid_Comparison_Exp>;
  price?: Maybe<Numeric_Comparison_Exp>;
  product_lot_id?: Maybe<Uuid_Comparison_Exp>;
  products_lot?: Maybe<Products_Lots_Bool_Exp>;
  quantity?: Maybe<Int_Comparison_Exp>;
  sub_total?: Maybe<Numeric_Comparison_Exp>;
  tax_total?: Maybe<Numeric_Comparison_Exp>;
  total?: Maybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "draft_orders_details" */
export enum Draft_Orders_Details_Constraint {
  /** unique or primary key constraint */
  DraftOrdersDetailsPkey = 'draft_orders_details_pkey'
}

/** input type for incrementing integer column in table "draft_orders_details" */
export type Draft_Orders_Details_Inc_Input = {
  discount_total?: Maybe<Scalars['numeric']>;
  price?: Maybe<Scalars['numeric']>;
  quantity?: Maybe<Scalars['Int']>;
  sub_total?: Maybe<Scalars['numeric']>;
  tax_total?: Maybe<Scalars['numeric']>;
  total?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "draft_orders_details" */
export type Draft_Orders_Details_Insert_Input = {
  _id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  discount_total?: Maybe<Scalars['numeric']>;
  draft_order?: Maybe<Draft_Orders_Obj_Rel_Insert_Input>;
  draft_order_id?: Maybe<Scalars['uuid']>;
  price?: Maybe<Scalars['numeric']>;
  product_lot_id?: Maybe<Scalars['uuid']>;
  products_lot?: Maybe<Products_Lots_Obj_Rel_Insert_Input>;
  quantity?: Maybe<Scalars['Int']>;
  sub_total?: Maybe<Scalars['numeric']>;
  tax_total?: Maybe<Scalars['numeric']>;
  total?: Maybe<Scalars['numeric']>;
};

/** aggregate max on columns */
export type Draft_Orders_Details_Max_Fields = {
  __typename?: 'draft_orders_details_max_fields';
  _id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  discount_total?: Maybe<Scalars['numeric']>;
  draft_order_id?: Maybe<Scalars['uuid']>;
  price?: Maybe<Scalars['numeric']>;
  product_lot_id?: Maybe<Scalars['uuid']>;
  quantity?: Maybe<Scalars['Int']>;
  sub_total?: Maybe<Scalars['numeric']>;
  tax_total?: Maybe<Scalars['numeric']>;
  total?: Maybe<Scalars['numeric']>;
};

/** order by max() on columns of table "draft_orders_details" */
export type Draft_Orders_Details_Max_Order_By = {
  _id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  discount_total?: Maybe<Order_By>;
  draft_order_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  product_lot_id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  sub_total?: Maybe<Order_By>;
  tax_total?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Draft_Orders_Details_Min_Fields = {
  __typename?: 'draft_orders_details_min_fields';
  _id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  discount_total?: Maybe<Scalars['numeric']>;
  draft_order_id?: Maybe<Scalars['uuid']>;
  price?: Maybe<Scalars['numeric']>;
  product_lot_id?: Maybe<Scalars['uuid']>;
  quantity?: Maybe<Scalars['Int']>;
  sub_total?: Maybe<Scalars['numeric']>;
  tax_total?: Maybe<Scalars['numeric']>;
  total?: Maybe<Scalars['numeric']>;
};

/** order by min() on columns of table "draft_orders_details" */
export type Draft_Orders_Details_Min_Order_By = {
  _id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  discount_total?: Maybe<Order_By>;
  draft_order_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  product_lot_id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  sub_total?: Maybe<Order_By>;
  tax_total?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** response of any mutation on the table "draft_orders_details" */
export type Draft_Orders_Details_Mutation_Response = {
  __typename?: 'draft_orders_details_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Draft_Orders_Details>;
};

/** input type for inserting object relation for remote table "draft_orders_details" */
export type Draft_Orders_Details_Obj_Rel_Insert_Input = {
  data: Draft_Orders_Details_Insert_Input;
  on_conflict?: Maybe<Draft_Orders_Details_On_Conflict>;
};

/** on conflict condition type for table "draft_orders_details" */
export type Draft_Orders_Details_On_Conflict = {
  constraint: Draft_Orders_Details_Constraint;
  update_columns: Array<Draft_Orders_Details_Update_Column>;
  where?: Maybe<Draft_Orders_Details_Bool_Exp>;
};

/** ordering options when selecting data from "draft_orders_details" */
export type Draft_Orders_Details_Order_By = {
  _id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  discount_total?: Maybe<Order_By>;
  draft_order?: Maybe<Draft_Orders_Order_By>;
  draft_order_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  product_lot_id?: Maybe<Order_By>;
  products_lot?: Maybe<Products_Lots_Order_By>;
  quantity?: Maybe<Order_By>;
  sub_total?: Maybe<Order_By>;
  tax_total?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** primary key columns input for table: "draft_orders_details" */
export type Draft_Orders_Details_Pk_Columns_Input = {
  _id: Scalars['uuid'];
};

/** select columns of table "draft_orders_details" */
export enum Draft_Orders_Details_Select_Column {
  /** column name */
  Id = '_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DiscountTotal = 'discount_total',
  /** column name */
  DraftOrderId = 'draft_order_id',
  /** column name */
  Price = 'price',
  /** column name */
  ProductLotId = 'product_lot_id',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  SubTotal = 'sub_total',
  /** column name */
  TaxTotal = 'tax_total',
  /** column name */
  Total = 'total'
}

/** input type for updating data in table "draft_orders_details" */
export type Draft_Orders_Details_Set_Input = {
  _id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  discount_total?: Maybe<Scalars['numeric']>;
  draft_order_id?: Maybe<Scalars['uuid']>;
  price?: Maybe<Scalars['numeric']>;
  product_lot_id?: Maybe<Scalars['uuid']>;
  quantity?: Maybe<Scalars['Int']>;
  sub_total?: Maybe<Scalars['numeric']>;
  tax_total?: Maybe<Scalars['numeric']>;
  total?: Maybe<Scalars['numeric']>;
};

/** aggregate stddev on columns */
export type Draft_Orders_Details_Stddev_Fields = {
  __typename?: 'draft_orders_details_stddev_fields';
  discount_total?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  sub_total?: Maybe<Scalars['Float']>;
  tax_total?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "draft_orders_details" */
export type Draft_Orders_Details_Stddev_Order_By = {
  discount_total?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  sub_total?: Maybe<Order_By>;
  tax_total?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Draft_Orders_Details_Stddev_Pop_Fields = {
  __typename?: 'draft_orders_details_stddev_pop_fields';
  discount_total?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  sub_total?: Maybe<Scalars['Float']>;
  tax_total?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "draft_orders_details" */
export type Draft_Orders_Details_Stddev_Pop_Order_By = {
  discount_total?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  sub_total?: Maybe<Order_By>;
  tax_total?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Draft_Orders_Details_Stddev_Samp_Fields = {
  __typename?: 'draft_orders_details_stddev_samp_fields';
  discount_total?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  sub_total?: Maybe<Scalars['Float']>;
  tax_total?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "draft_orders_details" */
export type Draft_Orders_Details_Stddev_Samp_Order_By = {
  discount_total?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  sub_total?: Maybe<Order_By>;
  tax_total?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Draft_Orders_Details_Sum_Fields = {
  __typename?: 'draft_orders_details_sum_fields';
  discount_total?: Maybe<Scalars['numeric']>;
  price?: Maybe<Scalars['numeric']>;
  quantity?: Maybe<Scalars['Int']>;
  sub_total?: Maybe<Scalars['numeric']>;
  tax_total?: Maybe<Scalars['numeric']>;
  total?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "draft_orders_details" */
export type Draft_Orders_Details_Sum_Order_By = {
  discount_total?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  sub_total?: Maybe<Order_By>;
  tax_total?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** update columns of table "draft_orders_details" */
export enum Draft_Orders_Details_Update_Column {
  /** column name */
  Id = '_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DiscountTotal = 'discount_total',
  /** column name */
  DraftOrderId = 'draft_order_id',
  /** column name */
  Price = 'price',
  /** column name */
  ProductLotId = 'product_lot_id',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  SubTotal = 'sub_total',
  /** column name */
  TaxTotal = 'tax_total',
  /** column name */
  Total = 'total'
}

/** aggregate var_pop on columns */
export type Draft_Orders_Details_Var_Pop_Fields = {
  __typename?: 'draft_orders_details_var_pop_fields';
  discount_total?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  sub_total?: Maybe<Scalars['Float']>;
  tax_total?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "draft_orders_details" */
export type Draft_Orders_Details_Var_Pop_Order_By = {
  discount_total?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  sub_total?: Maybe<Order_By>;
  tax_total?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Draft_Orders_Details_Var_Samp_Fields = {
  __typename?: 'draft_orders_details_var_samp_fields';
  discount_total?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  sub_total?: Maybe<Scalars['Float']>;
  tax_total?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "draft_orders_details" */
export type Draft_Orders_Details_Var_Samp_Order_By = {
  discount_total?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  sub_total?: Maybe<Order_By>;
  tax_total?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Draft_Orders_Details_Variance_Fields = {
  __typename?: 'draft_orders_details_variance_fields';
  discount_total?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  sub_total?: Maybe<Scalars['Float']>;
  tax_total?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "draft_orders_details" */
export type Draft_Orders_Details_Variance_Order_By = {
  discount_total?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  sub_total?: Maybe<Order_By>;
  tax_total?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** input type for incrementing integer column in table "draft_orders" */
export type Draft_Orders_Inc_Input = {
  sub_total?: Maybe<Scalars['numeric']>;
  tax_total?: Maybe<Scalars['numeric']>;
  total?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "draft_orders" */
export type Draft_Orders_Insert_Input = {
  _id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  customer?: Maybe<Customers_Obj_Rel_Insert_Input>;
  customer_id?: Maybe<Scalars['uuid']>;
  draft_orders_details?: Maybe<Draft_Orders_Details_Arr_Rel_Insert_Input>;
  entry_date?: Maybe<Scalars['timestamp']>;
  store?: Maybe<Stores_Obj_Rel_Insert_Input>;
  store_id?: Maybe<Scalars['uuid']>;
  sub_total?: Maybe<Scalars['numeric']>;
  tax_total?: Maybe<Scalars['numeric']>;
  total?: Maybe<Scalars['numeric']>;
};

/** aggregate max on columns */
export type Draft_Orders_Max_Fields = {
  __typename?: 'draft_orders_max_fields';
  _id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  customer_id?: Maybe<Scalars['uuid']>;
  entry_date?: Maybe<Scalars['timestamp']>;
  store_id?: Maybe<Scalars['uuid']>;
  sub_total?: Maybe<Scalars['numeric']>;
  tax_total?: Maybe<Scalars['numeric']>;
  total?: Maybe<Scalars['numeric']>;
};

/** order by max() on columns of table "draft_orders" */
export type Draft_Orders_Max_Order_By = {
  _id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  customer_id?: Maybe<Order_By>;
  entry_date?: Maybe<Order_By>;
  store_id?: Maybe<Order_By>;
  sub_total?: Maybe<Order_By>;
  tax_total?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Draft_Orders_Min_Fields = {
  __typename?: 'draft_orders_min_fields';
  _id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  customer_id?: Maybe<Scalars['uuid']>;
  entry_date?: Maybe<Scalars['timestamp']>;
  store_id?: Maybe<Scalars['uuid']>;
  sub_total?: Maybe<Scalars['numeric']>;
  tax_total?: Maybe<Scalars['numeric']>;
  total?: Maybe<Scalars['numeric']>;
};

/** order by min() on columns of table "draft_orders" */
export type Draft_Orders_Min_Order_By = {
  _id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  customer_id?: Maybe<Order_By>;
  entry_date?: Maybe<Order_By>;
  store_id?: Maybe<Order_By>;
  sub_total?: Maybe<Order_By>;
  tax_total?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** response of any mutation on the table "draft_orders" */
export type Draft_Orders_Mutation_Response = {
  __typename?: 'draft_orders_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Draft_Orders>;
};

/** input type for inserting object relation for remote table "draft_orders" */
export type Draft_Orders_Obj_Rel_Insert_Input = {
  data: Draft_Orders_Insert_Input;
  on_conflict?: Maybe<Draft_Orders_On_Conflict>;
};

/** on conflict condition type for table "draft_orders" */
export type Draft_Orders_On_Conflict = {
  constraint: Draft_Orders_Constraint;
  update_columns: Array<Draft_Orders_Update_Column>;
  where?: Maybe<Draft_Orders_Bool_Exp>;
};

/** ordering options when selecting data from "draft_orders" */
export type Draft_Orders_Order_By = {
  _id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  customer?: Maybe<Customers_Order_By>;
  customer_id?: Maybe<Order_By>;
  draft_orders_details_aggregate?: Maybe<Draft_Orders_Details_Aggregate_Order_By>;
  entry_date?: Maybe<Order_By>;
  store?: Maybe<Stores_Order_By>;
  store_id?: Maybe<Order_By>;
  sub_total?: Maybe<Order_By>;
  tax_total?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** primary key columns input for table: "draft_orders" */
export type Draft_Orders_Pk_Columns_Input = {
  _id: Scalars['uuid'];
};

/** select columns of table "draft_orders" */
export enum Draft_Orders_Select_Column {
  /** column name */
  Id = '_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  EntryDate = 'entry_date',
  /** column name */
  StoreId = 'store_id',
  /** column name */
  SubTotal = 'sub_total',
  /** column name */
  TaxTotal = 'tax_total',
  /** column name */
  Total = 'total'
}

/** input type for updating data in table "draft_orders" */
export type Draft_Orders_Set_Input = {
  _id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  customer_id?: Maybe<Scalars['uuid']>;
  entry_date?: Maybe<Scalars['timestamp']>;
  store_id?: Maybe<Scalars['uuid']>;
  sub_total?: Maybe<Scalars['numeric']>;
  tax_total?: Maybe<Scalars['numeric']>;
  total?: Maybe<Scalars['numeric']>;
};

/** aggregate stddev on columns */
export type Draft_Orders_Stddev_Fields = {
  __typename?: 'draft_orders_stddev_fields';
  sub_total?: Maybe<Scalars['Float']>;
  tax_total?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "draft_orders" */
export type Draft_Orders_Stddev_Order_By = {
  sub_total?: Maybe<Order_By>;
  tax_total?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Draft_Orders_Stddev_Pop_Fields = {
  __typename?: 'draft_orders_stddev_pop_fields';
  sub_total?: Maybe<Scalars['Float']>;
  tax_total?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "draft_orders" */
export type Draft_Orders_Stddev_Pop_Order_By = {
  sub_total?: Maybe<Order_By>;
  tax_total?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Draft_Orders_Stddev_Samp_Fields = {
  __typename?: 'draft_orders_stddev_samp_fields';
  sub_total?: Maybe<Scalars['Float']>;
  tax_total?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "draft_orders" */
export type Draft_Orders_Stddev_Samp_Order_By = {
  sub_total?: Maybe<Order_By>;
  tax_total?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Draft_Orders_Sum_Fields = {
  __typename?: 'draft_orders_sum_fields';
  sub_total?: Maybe<Scalars['numeric']>;
  tax_total?: Maybe<Scalars['numeric']>;
  total?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "draft_orders" */
export type Draft_Orders_Sum_Order_By = {
  sub_total?: Maybe<Order_By>;
  tax_total?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** update columns of table "draft_orders" */
export enum Draft_Orders_Update_Column {
  /** column name */
  Id = '_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  EntryDate = 'entry_date',
  /** column name */
  StoreId = 'store_id',
  /** column name */
  SubTotal = 'sub_total',
  /** column name */
  TaxTotal = 'tax_total',
  /** column name */
  Total = 'total'
}

/** aggregate var_pop on columns */
export type Draft_Orders_Var_Pop_Fields = {
  __typename?: 'draft_orders_var_pop_fields';
  sub_total?: Maybe<Scalars['Float']>;
  tax_total?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "draft_orders" */
export type Draft_Orders_Var_Pop_Order_By = {
  sub_total?: Maybe<Order_By>;
  tax_total?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Draft_Orders_Var_Samp_Fields = {
  __typename?: 'draft_orders_var_samp_fields';
  sub_total?: Maybe<Scalars['Float']>;
  tax_total?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "draft_orders" */
export type Draft_Orders_Var_Samp_Order_By = {
  sub_total?: Maybe<Order_By>;
  tax_total?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Draft_Orders_Variance_Fields = {
  __typename?: 'draft_orders_variance_fields';
  sub_total?: Maybe<Scalars['Float']>;
  tax_total?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "draft_orders" */
export type Draft_Orders_Variance_Order_By = {
  sub_total?: Maybe<Order_By>;
  tax_total?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** columns and relationships of "kardex" */
export type Kardex = {
  __typename?: 'kardex';
  _id: Scalars['uuid'];
  created_at?: Maybe<Scalars['timestamp']>;
  product_lot_id: Scalars['uuid'];
  /** An object relationship */
  products_lot: Products_Lots;
  quantity?: Maybe<Scalars['numeric']>;
  type_movement_id: Scalars['uuid'];
  /** An object relationship */
  types_movement: Types_Movements;
};

/** aggregated selection of "kardex" */
export type Kardex_Aggregate = {
  __typename?: 'kardex_aggregate';
  aggregate?: Maybe<Kardex_Aggregate_Fields>;
  nodes: Array<Kardex>;
};

/** aggregate fields of "kardex" */
export type Kardex_Aggregate_Fields = {
  __typename?: 'kardex_aggregate_fields';
  avg?: Maybe<Kardex_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Kardex_Max_Fields>;
  min?: Maybe<Kardex_Min_Fields>;
  stddev?: Maybe<Kardex_Stddev_Fields>;
  stddev_pop?: Maybe<Kardex_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Kardex_Stddev_Samp_Fields>;
  sum?: Maybe<Kardex_Sum_Fields>;
  var_pop?: Maybe<Kardex_Var_Pop_Fields>;
  var_samp?: Maybe<Kardex_Var_Samp_Fields>;
  variance?: Maybe<Kardex_Variance_Fields>;
};

/** aggregate fields of "kardex" */
export type Kardex_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Kardex_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "kardex" */
export type Kardex_Aggregate_Order_By = {
  avg?: Maybe<Kardex_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Kardex_Max_Order_By>;
  min?: Maybe<Kardex_Min_Order_By>;
  stddev?: Maybe<Kardex_Stddev_Order_By>;
  stddev_pop?: Maybe<Kardex_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Kardex_Stddev_Samp_Order_By>;
  sum?: Maybe<Kardex_Sum_Order_By>;
  var_pop?: Maybe<Kardex_Var_Pop_Order_By>;
  var_samp?: Maybe<Kardex_Var_Samp_Order_By>;
  variance?: Maybe<Kardex_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "kardex" */
export type Kardex_Arr_Rel_Insert_Input = {
  data: Array<Kardex_Insert_Input>;
  on_conflict?: Maybe<Kardex_On_Conflict>;
};

/** aggregate avg on columns */
export type Kardex_Avg_Fields = {
  __typename?: 'kardex_avg_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "kardex" */
export type Kardex_Avg_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "kardex". All fields are combined with a logical 'AND'. */
export type Kardex_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Kardex_Bool_Exp>>>;
  _id?: Maybe<Uuid_Comparison_Exp>;
  _not?: Maybe<Kardex_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Kardex_Bool_Exp>>>;
  created_at?: Maybe<Timestamp_Comparison_Exp>;
  product_lot_id?: Maybe<Uuid_Comparison_Exp>;
  products_lot?: Maybe<Products_Lots_Bool_Exp>;
  quantity?: Maybe<Numeric_Comparison_Exp>;
  type_movement_id?: Maybe<Uuid_Comparison_Exp>;
  types_movement?: Maybe<Types_Movements_Bool_Exp>;
};

/** unique or primary key constraints on table "kardex" */
export enum Kardex_Constraint {
  /** unique or primary key constraint */
  KardexPkey = 'kardex_pkey'
}

/** input type for incrementing integer column in table "kardex" */
export type Kardex_Inc_Input = {
  quantity?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "kardex" */
export type Kardex_Insert_Input = {
  _id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  product_lot_id?: Maybe<Scalars['uuid']>;
  products_lot?: Maybe<Products_Lots_Obj_Rel_Insert_Input>;
  quantity?: Maybe<Scalars['numeric']>;
  type_movement_id?: Maybe<Scalars['uuid']>;
  types_movement?: Maybe<Types_Movements_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Kardex_Max_Fields = {
  __typename?: 'kardex_max_fields';
  _id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  product_lot_id?: Maybe<Scalars['uuid']>;
  quantity?: Maybe<Scalars['numeric']>;
  type_movement_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "kardex" */
export type Kardex_Max_Order_By = {
  _id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  product_lot_id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  type_movement_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Kardex_Min_Fields = {
  __typename?: 'kardex_min_fields';
  _id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  product_lot_id?: Maybe<Scalars['uuid']>;
  quantity?: Maybe<Scalars['numeric']>;
  type_movement_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "kardex" */
export type Kardex_Min_Order_By = {
  _id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  product_lot_id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  type_movement_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "kardex" */
export type Kardex_Mutation_Response = {
  __typename?: 'kardex_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Kardex>;
};

/** input type for inserting object relation for remote table "kardex" */
export type Kardex_Obj_Rel_Insert_Input = {
  data: Kardex_Insert_Input;
  on_conflict?: Maybe<Kardex_On_Conflict>;
};

/** on conflict condition type for table "kardex" */
export type Kardex_On_Conflict = {
  constraint: Kardex_Constraint;
  update_columns: Array<Kardex_Update_Column>;
  where?: Maybe<Kardex_Bool_Exp>;
};

/** ordering options when selecting data from "kardex" */
export type Kardex_Order_By = {
  _id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  product_lot_id?: Maybe<Order_By>;
  products_lot?: Maybe<Products_Lots_Order_By>;
  quantity?: Maybe<Order_By>;
  type_movement_id?: Maybe<Order_By>;
  types_movement?: Maybe<Types_Movements_Order_By>;
};

/** primary key columns input for table: "kardex" */
export type Kardex_Pk_Columns_Input = {
  _id: Scalars['uuid'];
};

/** select columns of table "kardex" */
export enum Kardex_Select_Column {
  /** column name */
  Id = '_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ProductLotId = 'product_lot_id',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  TypeMovementId = 'type_movement_id'
}

/** input type for updating data in table "kardex" */
export type Kardex_Set_Input = {
  _id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  product_lot_id?: Maybe<Scalars['uuid']>;
  quantity?: Maybe<Scalars['numeric']>;
  type_movement_id?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Kardex_Stddev_Fields = {
  __typename?: 'kardex_stddev_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "kardex" */
export type Kardex_Stddev_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Kardex_Stddev_Pop_Fields = {
  __typename?: 'kardex_stddev_pop_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "kardex" */
export type Kardex_Stddev_Pop_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Kardex_Stddev_Samp_Fields = {
  __typename?: 'kardex_stddev_samp_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "kardex" */
export type Kardex_Stddev_Samp_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Kardex_Sum_Fields = {
  __typename?: 'kardex_sum_fields';
  quantity?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "kardex" */
export type Kardex_Sum_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** update columns of table "kardex" */
export enum Kardex_Update_Column {
  /** column name */
  Id = '_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ProductLotId = 'product_lot_id',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  TypeMovementId = 'type_movement_id'
}

/** aggregate var_pop on columns */
export type Kardex_Var_Pop_Fields = {
  __typename?: 'kardex_var_pop_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "kardex" */
export type Kardex_Var_Pop_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Kardex_Var_Samp_Fields = {
  __typename?: 'kardex_var_samp_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "kardex" */
export type Kardex_Var_Samp_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Kardex_Variance_Fields = {
  __typename?: 'kardex_variance_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "kardex" */
export type Kardex_Variance_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "cities" */
  delete_cities?: Maybe<Cities_Mutation_Response>;
  /** delete single row from the table: "cities" */
  delete_cities_by_pk?: Maybe<Cities>;
  /** delete data from the table: "countries" */
  delete_countries?: Maybe<Countries_Mutation_Response>;
  /** delete single row from the table: "countries" */
  delete_countries_by_pk?: Maybe<Countries>;
  /** delete data from the table: "countries_currency" */
  delete_countries_currency?: Maybe<Countries_Currency_Mutation_Response>;
  /** delete single row from the table: "countries_currency" */
  delete_countries_currency_by_pk?: Maybe<Countries_Currency>;
  /** delete data from the table: "countries_taxes" */
  delete_countries_taxes?: Maybe<Countries_Taxes_Mutation_Response>;
  /** delete single row from the table: "countries_taxes" */
  delete_countries_taxes_by_pk?: Maybe<Countries_Taxes>;
  /** delete data from the table: "customers" */
  delete_customers?: Maybe<Customers_Mutation_Response>;
  /** delete data from the table: "customers_address" */
  delete_customers_address?: Maybe<Customers_Address_Mutation_Response>;
  /** delete single row from the table: "customers_address" */
  delete_customers_address_by_pk?: Maybe<Customers_Address>;
  /** delete single row from the table: "customers" */
  delete_customers_by_pk?: Maybe<Customers>;
  /** delete data from the table: "customers_tags" */
  delete_customers_tags?: Maybe<Customers_Tags_Mutation_Response>;
  /** delete single row from the table: "customers_tags" */
  delete_customers_tags_by_pk?: Maybe<Customers_Tags>;
  /** delete data from the table: "draft_orders" */
  delete_draft_orders?: Maybe<Draft_Orders_Mutation_Response>;
  /** delete single row from the table: "draft_orders" */
  delete_draft_orders_by_pk?: Maybe<Draft_Orders>;
  /** delete data from the table: "draft_orders_details" */
  delete_draft_orders_details?: Maybe<Draft_Orders_Details_Mutation_Response>;
  /** delete single row from the table: "draft_orders_details" */
  delete_draft_orders_details_by_pk?: Maybe<Draft_Orders_Details>;
  /** delete data from the table: "kardex" */
  delete_kardex?: Maybe<Kardex_Mutation_Response>;
  /** delete single row from the table: "kardex" */
  delete_kardex_by_pk?: Maybe<Kardex>;
  /** delete data from the table: "orders" */
  delete_orders?: Maybe<Orders_Mutation_Response>;
  /** delete single row from the table: "orders" */
  delete_orders_by_pk?: Maybe<Orders>;
  /** delete data from the table: "orders_details" */
  delete_orders_details?: Maybe<Orders_Details_Mutation_Response>;
  /** delete single row from the table: "orders_details" */
  delete_orders_details_by_pk?: Maybe<Orders_Details>;
  /** delete data from the table: "price_rule" */
  delete_price_rule?: Maybe<Price_Rule_Mutation_Response>;
  /** delete single row from the table: "price_rule" */
  delete_price_rule_by_pk?: Maybe<Price_Rule>;
  /** delete data from the table: "products" */
  delete_products?: Maybe<Products_Mutation_Response>;
  /** delete single row from the table: "products" */
  delete_products_by_pk?: Maybe<Products>;
  /** delete data from the table: "products_categories" */
  delete_products_categories?: Maybe<Products_Categories_Mutation_Response>;
  /** delete single row from the table: "products_categories" */
  delete_products_categories_by_pk?: Maybe<Products_Categories>;
  /** delete data from the table: "products_lots" */
  delete_products_lots?: Maybe<Products_Lots_Mutation_Response>;
  /** delete single row from the table: "products_lots" */
  delete_products_lots_by_pk?: Maybe<Products_Lots>;
  /** delete data from the table: "products_media" */
  delete_products_media?: Maybe<Products_Media_Mutation_Response>;
  /** delete single row from the table: "products_media" */
  delete_products_media_by_pk?: Maybe<Products_Media>;
  /** delete data from the table: "products_tags" */
  delete_products_tags?: Maybe<Products_Tags_Mutation_Response>;
  /** delete single row from the table: "products_tags" */
  delete_products_tags_by_pk?: Maybe<Products_Tags>;
  /** delete data from the table: "stores" */
  delete_stores?: Maybe<Stores_Mutation_Response>;
  /** delete single row from the table: "stores" */
  delete_stores_by_pk?: Maybe<Stores>;
  /** delete data from the table: "stores_categories" */
  delete_stores_categories?: Maybe<Stores_Categories_Mutation_Response>;
  /** delete single row from the table: "stores_categories" */
  delete_stores_categories_by_pk?: Maybe<Stores_Categories>;
  /** delete data from the table: "types_movements" */
  delete_types_movements?: Maybe<Types_Movements_Mutation_Response>;
  /** delete single row from the table: "types_movements" */
  delete_types_movements_by_pk?: Maybe<Types_Movements>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "cities" */
  insert_cities?: Maybe<Cities_Mutation_Response>;
  /** insert a single row into the table: "cities" */
  insert_cities_one?: Maybe<Cities>;
  /** insert data into the table: "countries" */
  insert_countries?: Maybe<Countries_Mutation_Response>;
  /** insert data into the table: "countries_currency" */
  insert_countries_currency?: Maybe<Countries_Currency_Mutation_Response>;
  /** insert a single row into the table: "countries_currency" */
  insert_countries_currency_one?: Maybe<Countries_Currency>;
  /** insert a single row into the table: "countries" */
  insert_countries_one?: Maybe<Countries>;
  /** insert data into the table: "countries_taxes" */
  insert_countries_taxes?: Maybe<Countries_Taxes_Mutation_Response>;
  /** insert a single row into the table: "countries_taxes" */
  insert_countries_taxes_one?: Maybe<Countries_Taxes>;
  /** insert data into the table: "customers" */
  insert_customers?: Maybe<Customers_Mutation_Response>;
  /** insert data into the table: "customers_address" */
  insert_customers_address?: Maybe<Customers_Address_Mutation_Response>;
  /** insert a single row into the table: "customers_address" */
  insert_customers_address_one?: Maybe<Customers_Address>;
  /** insert a single row into the table: "customers" */
  insert_customers_one?: Maybe<Customers>;
  /** insert data into the table: "customers_tags" */
  insert_customers_tags?: Maybe<Customers_Tags_Mutation_Response>;
  /** insert a single row into the table: "customers_tags" */
  insert_customers_tags_one?: Maybe<Customers_Tags>;
  /** insert data into the table: "draft_orders" */
  insert_draft_orders?: Maybe<Draft_Orders_Mutation_Response>;
  /** insert data into the table: "draft_orders_details" */
  insert_draft_orders_details?: Maybe<Draft_Orders_Details_Mutation_Response>;
  /** insert a single row into the table: "draft_orders_details" */
  insert_draft_orders_details_one?: Maybe<Draft_Orders_Details>;
  /** insert a single row into the table: "draft_orders" */
  insert_draft_orders_one?: Maybe<Draft_Orders>;
  /** insert data into the table: "kardex" */
  insert_kardex?: Maybe<Kardex_Mutation_Response>;
  /** insert a single row into the table: "kardex" */
  insert_kardex_one?: Maybe<Kardex>;
  /** insert data into the table: "orders" */
  insert_orders?: Maybe<Orders_Mutation_Response>;
  /** insert data into the table: "orders_details" */
  insert_orders_details?: Maybe<Orders_Details_Mutation_Response>;
  /** insert a single row into the table: "orders_details" */
  insert_orders_details_one?: Maybe<Orders_Details>;
  /** insert a single row into the table: "orders" */
  insert_orders_one?: Maybe<Orders>;
  /** insert data into the table: "price_rule" */
  insert_price_rule?: Maybe<Price_Rule_Mutation_Response>;
  /** insert a single row into the table: "price_rule" */
  insert_price_rule_one?: Maybe<Price_Rule>;
  /** insert data into the table: "products" */
  insert_products?: Maybe<Products_Mutation_Response>;
  /** insert data into the table: "products_categories" */
  insert_products_categories?: Maybe<Products_Categories_Mutation_Response>;
  /** insert a single row into the table: "products_categories" */
  insert_products_categories_one?: Maybe<Products_Categories>;
  /** insert data into the table: "products_lots" */
  insert_products_lots?: Maybe<Products_Lots_Mutation_Response>;
  /** insert a single row into the table: "products_lots" */
  insert_products_lots_one?: Maybe<Products_Lots>;
  /** insert data into the table: "products_media" */
  insert_products_media?: Maybe<Products_Media_Mutation_Response>;
  /** insert a single row into the table: "products_media" */
  insert_products_media_one?: Maybe<Products_Media>;
  /** insert a single row into the table: "products" */
  insert_products_one?: Maybe<Products>;
  /** insert data into the table: "products_tags" */
  insert_products_tags?: Maybe<Products_Tags_Mutation_Response>;
  /** insert a single row into the table: "products_tags" */
  insert_products_tags_one?: Maybe<Products_Tags>;
  /** insert data into the table: "stores" */
  insert_stores?: Maybe<Stores_Mutation_Response>;
  /** insert data into the table: "stores_categories" */
  insert_stores_categories?: Maybe<Stores_Categories_Mutation_Response>;
  /** insert a single row into the table: "stores_categories" */
  insert_stores_categories_one?: Maybe<Stores_Categories>;
  /** insert a single row into the table: "stores" */
  insert_stores_one?: Maybe<Stores>;
  /** insert data into the table: "types_movements" */
  insert_types_movements?: Maybe<Types_Movements_Mutation_Response>;
  /** insert a single row into the table: "types_movements" */
  insert_types_movements_one?: Maybe<Types_Movements>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "cities" */
  update_cities?: Maybe<Cities_Mutation_Response>;
  /** update single row of the table: "cities" */
  update_cities_by_pk?: Maybe<Cities>;
  /** update data of the table: "countries" */
  update_countries?: Maybe<Countries_Mutation_Response>;
  /** update single row of the table: "countries" */
  update_countries_by_pk?: Maybe<Countries>;
  /** update data of the table: "countries_currency" */
  update_countries_currency?: Maybe<Countries_Currency_Mutation_Response>;
  /** update single row of the table: "countries_currency" */
  update_countries_currency_by_pk?: Maybe<Countries_Currency>;
  /** update data of the table: "countries_taxes" */
  update_countries_taxes?: Maybe<Countries_Taxes_Mutation_Response>;
  /** update single row of the table: "countries_taxes" */
  update_countries_taxes_by_pk?: Maybe<Countries_Taxes>;
  /** update data of the table: "customers" */
  update_customers?: Maybe<Customers_Mutation_Response>;
  /** update data of the table: "customers_address" */
  update_customers_address?: Maybe<Customers_Address_Mutation_Response>;
  /** update single row of the table: "customers_address" */
  update_customers_address_by_pk?: Maybe<Customers_Address>;
  /** update single row of the table: "customers" */
  update_customers_by_pk?: Maybe<Customers>;
  /** update data of the table: "customers_tags" */
  update_customers_tags?: Maybe<Customers_Tags_Mutation_Response>;
  /** update single row of the table: "customers_tags" */
  update_customers_tags_by_pk?: Maybe<Customers_Tags>;
  /** update data of the table: "draft_orders" */
  update_draft_orders?: Maybe<Draft_Orders_Mutation_Response>;
  /** update single row of the table: "draft_orders" */
  update_draft_orders_by_pk?: Maybe<Draft_Orders>;
  /** update data of the table: "draft_orders_details" */
  update_draft_orders_details?: Maybe<Draft_Orders_Details_Mutation_Response>;
  /** update single row of the table: "draft_orders_details" */
  update_draft_orders_details_by_pk?: Maybe<Draft_Orders_Details>;
  /** update data of the table: "kardex" */
  update_kardex?: Maybe<Kardex_Mutation_Response>;
  /** update single row of the table: "kardex" */
  update_kardex_by_pk?: Maybe<Kardex>;
  /** update data of the table: "orders" */
  update_orders?: Maybe<Orders_Mutation_Response>;
  /** update single row of the table: "orders" */
  update_orders_by_pk?: Maybe<Orders>;
  /** update data of the table: "orders_details" */
  update_orders_details?: Maybe<Orders_Details_Mutation_Response>;
  /** update single row of the table: "orders_details" */
  update_orders_details_by_pk?: Maybe<Orders_Details>;
  /** update data of the table: "price_rule" */
  update_price_rule?: Maybe<Price_Rule_Mutation_Response>;
  /** update single row of the table: "price_rule" */
  update_price_rule_by_pk?: Maybe<Price_Rule>;
  /** update data of the table: "products" */
  update_products?: Maybe<Products_Mutation_Response>;
  /** update single row of the table: "products" */
  update_products_by_pk?: Maybe<Products>;
  /** update data of the table: "products_categories" */
  update_products_categories?: Maybe<Products_Categories_Mutation_Response>;
  /** update single row of the table: "products_categories" */
  update_products_categories_by_pk?: Maybe<Products_Categories>;
  /** update data of the table: "products_lots" */
  update_products_lots?: Maybe<Products_Lots_Mutation_Response>;
  /** update single row of the table: "products_lots" */
  update_products_lots_by_pk?: Maybe<Products_Lots>;
  /** update data of the table: "products_media" */
  update_products_media?: Maybe<Products_Media_Mutation_Response>;
  /** update single row of the table: "products_media" */
  update_products_media_by_pk?: Maybe<Products_Media>;
  /** update data of the table: "products_tags" */
  update_products_tags?: Maybe<Products_Tags_Mutation_Response>;
  /** update single row of the table: "products_tags" */
  update_products_tags_by_pk?: Maybe<Products_Tags>;
  /** update data of the table: "stores" */
  update_stores?: Maybe<Stores_Mutation_Response>;
  /** update single row of the table: "stores" */
  update_stores_by_pk?: Maybe<Stores>;
  /** update data of the table: "stores_categories" */
  update_stores_categories?: Maybe<Stores_Categories_Mutation_Response>;
  /** update single row of the table: "stores_categories" */
  update_stores_categories_by_pk?: Maybe<Stores_Categories>;
  /** update data of the table: "types_movements" */
  update_types_movements?: Maybe<Types_Movements_Mutation_Response>;
  /** update single row of the table: "types_movements" */
  update_types_movements_by_pk?: Maybe<Types_Movements>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};

/** mutation root */
export type Mutation_RootDelete_CitiesArgs = {
  where: Cities_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Cities_By_PkArgs = {
  _id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_CountriesArgs = {
  where: Countries_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Countries_By_PkArgs = {
  _id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Countries_CurrencyArgs = {
  where: Countries_Currency_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Countries_Currency_By_PkArgs = {
  _id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Countries_TaxesArgs = {
  where: Countries_Taxes_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Countries_Taxes_By_PkArgs = {
  _id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_CustomersArgs = {
  where: Customers_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Customers_AddressArgs = {
  where: Customers_Address_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Customers_Address_By_PkArgs = {
  _id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Customers_By_PkArgs = {
  _id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Customers_TagsArgs = {
  where: Customers_Tags_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Customers_Tags_By_PkArgs = {
  _id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Draft_OrdersArgs = {
  where: Draft_Orders_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Draft_Orders_By_PkArgs = {
  _id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Draft_Orders_DetailsArgs = {
  where: Draft_Orders_Details_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Draft_Orders_Details_By_PkArgs = {
  _id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_KardexArgs = {
  where: Kardex_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Kardex_By_PkArgs = {
  _id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_OrdersArgs = {
  where: Orders_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Orders_By_PkArgs = {
  _id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Orders_DetailsArgs = {
  where: Orders_Details_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Orders_Details_By_PkArgs = {
  _id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Price_RuleArgs = {
  where: Price_Rule_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Price_Rule_By_PkArgs = {
  _id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_ProductsArgs = {
  where: Products_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Products_By_PkArgs = {
  _id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Products_CategoriesArgs = {
  where: Products_Categories_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Products_Categories_By_PkArgs = {
  _id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Products_LotsArgs = {
  where: Products_Lots_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Products_Lots_By_PkArgs = {
  _id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Products_MediaArgs = {
  where: Products_Media_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Products_Media_By_PkArgs = {
  _id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Products_TagsArgs = {
  where: Products_Tags_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Products_Tags_By_PkArgs = {
  _id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_StoresArgs = {
  where: Stores_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Stores_By_PkArgs = {
  _id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Stores_CategoriesArgs = {
  where: Stores_Categories_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Stores_Categories_By_PkArgs = {
  _id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Types_MovementsArgs = {
  where: Types_Movements_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Types_Movements_By_PkArgs = {
  _id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  _id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootInsert_CitiesArgs = {
  objects: Array<Cities_Insert_Input>;
  on_conflict?: Maybe<Cities_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Cities_OneArgs = {
  object: Cities_Insert_Input;
  on_conflict?: Maybe<Cities_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_CountriesArgs = {
  objects: Array<Countries_Insert_Input>;
  on_conflict?: Maybe<Countries_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Countries_CurrencyArgs = {
  objects: Array<Countries_Currency_Insert_Input>;
  on_conflict?: Maybe<Countries_Currency_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Countries_Currency_OneArgs = {
  object: Countries_Currency_Insert_Input;
  on_conflict?: Maybe<Countries_Currency_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Countries_OneArgs = {
  object: Countries_Insert_Input;
  on_conflict?: Maybe<Countries_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Countries_TaxesArgs = {
  objects: Array<Countries_Taxes_Insert_Input>;
  on_conflict?: Maybe<Countries_Taxes_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Countries_Taxes_OneArgs = {
  object: Countries_Taxes_Insert_Input;
  on_conflict?: Maybe<Countries_Taxes_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_CustomersArgs = {
  objects: Array<Customers_Insert_Input>;
  on_conflict?: Maybe<Customers_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Customers_AddressArgs = {
  objects: Array<Customers_Address_Insert_Input>;
  on_conflict?: Maybe<Customers_Address_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Customers_Address_OneArgs = {
  object: Customers_Address_Insert_Input;
  on_conflict?: Maybe<Customers_Address_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Customers_OneArgs = {
  object: Customers_Insert_Input;
  on_conflict?: Maybe<Customers_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Customers_TagsArgs = {
  objects: Array<Customers_Tags_Insert_Input>;
  on_conflict?: Maybe<Customers_Tags_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Customers_Tags_OneArgs = {
  object: Customers_Tags_Insert_Input;
  on_conflict?: Maybe<Customers_Tags_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Draft_OrdersArgs = {
  objects: Array<Draft_Orders_Insert_Input>;
  on_conflict?: Maybe<Draft_Orders_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Draft_Orders_DetailsArgs = {
  objects: Array<Draft_Orders_Details_Insert_Input>;
  on_conflict?: Maybe<Draft_Orders_Details_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Draft_Orders_Details_OneArgs = {
  object: Draft_Orders_Details_Insert_Input;
  on_conflict?: Maybe<Draft_Orders_Details_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Draft_Orders_OneArgs = {
  object: Draft_Orders_Insert_Input;
  on_conflict?: Maybe<Draft_Orders_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_KardexArgs = {
  objects: Array<Kardex_Insert_Input>;
  on_conflict?: Maybe<Kardex_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Kardex_OneArgs = {
  object: Kardex_Insert_Input;
  on_conflict?: Maybe<Kardex_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_OrdersArgs = {
  objects: Array<Orders_Insert_Input>;
  on_conflict?: Maybe<Orders_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Orders_DetailsArgs = {
  objects: Array<Orders_Details_Insert_Input>;
  on_conflict?: Maybe<Orders_Details_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Orders_Details_OneArgs = {
  object: Orders_Details_Insert_Input;
  on_conflict?: Maybe<Orders_Details_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Orders_OneArgs = {
  object: Orders_Insert_Input;
  on_conflict?: Maybe<Orders_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Price_RuleArgs = {
  objects: Array<Price_Rule_Insert_Input>;
  on_conflict?: Maybe<Price_Rule_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Price_Rule_OneArgs = {
  object: Price_Rule_Insert_Input;
  on_conflict?: Maybe<Price_Rule_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ProductsArgs = {
  objects: Array<Products_Insert_Input>;
  on_conflict?: Maybe<Products_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Products_CategoriesArgs = {
  objects: Array<Products_Categories_Insert_Input>;
  on_conflict?: Maybe<Products_Categories_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Products_Categories_OneArgs = {
  object: Products_Categories_Insert_Input;
  on_conflict?: Maybe<Products_Categories_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Products_LotsArgs = {
  objects: Array<Products_Lots_Insert_Input>;
  on_conflict?: Maybe<Products_Lots_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Products_Lots_OneArgs = {
  object: Products_Lots_Insert_Input;
  on_conflict?: Maybe<Products_Lots_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Products_MediaArgs = {
  objects: Array<Products_Media_Insert_Input>;
  on_conflict?: Maybe<Products_Media_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Products_Media_OneArgs = {
  object: Products_Media_Insert_Input;
  on_conflict?: Maybe<Products_Media_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Products_OneArgs = {
  object: Products_Insert_Input;
  on_conflict?: Maybe<Products_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Products_TagsArgs = {
  objects: Array<Products_Tags_Insert_Input>;
  on_conflict?: Maybe<Products_Tags_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Products_Tags_OneArgs = {
  object: Products_Tags_Insert_Input;
  on_conflict?: Maybe<Products_Tags_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_StoresArgs = {
  objects: Array<Stores_Insert_Input>;
  on_conflict?: Maybe<Stores_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Stores_CategoriesArgs = {
  objects: Array<Stores_Categories_Insert_Input>;
  on_conflict?: Maybe<Stores_Categories_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Stores_Categories_OneArgs = {
  object: Stores_Categories_Insert_Input;
  on_conflict?: Maybe<Stores_Categories_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Stores_OneArgs = {
  object: Stores_Insert_Input;
  on_conflict?: Maybe<Stores_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Types_MovementsArgs = {
  objects: Array<Types_Movements_Insert_Input>;
  on_conflict?: Maybe<Types_Movements_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Types_Movements_OneArgs = {
  object: Types_Movements_Insert_Input;
  on_conflict?: Maybe<Types_Movements_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_CitiesArgs = {
  _set?: Maybe<Cities_Set_Input>;
  where: Cities_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Cities_By_PkArgs = {
  _set?: Maybe<Cities_Set_Input>;
  pk_columns: Cities_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_CountriesArgs = {
  _inc?: Maybe<Countries_Inc_Input>;
  _set?: Maybe<Countries_Set_Input>;
  where: Countries_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Countries_By_PkArgs = {
  _inc?: Maybe<Countries_Inc_Input>;
  _set?: Maybe<Countries_Set_Input>;
  pk_columns: Countries_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Countries_CurrencyArgs = {
  _set?: Maybe<Countries_Currency_Set_Input>;
  where: Countries_Currency_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Countries_Currency_By_PkArgs = {
  _set?: Maybe<Countries_Currency_Set_Input>;
  pk_columns: Countries_Currency_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Countries_TaxesArgs = {
  _inc?: Maybe<Countries_Taxes_Inc_Input>;
  _set?: Maybe<Countries_Taxes_Set_Input>;
  where: Countries_Taxes_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Countries_Taxes_By_PkArgs = {
  _inc?: Maybe<Countries_Taxes_Inc_Input>;
  _set?: Maybe<Countries_Taxes_Set_Input>;
  pk_columns: Countries_Taxes_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_CustomersArgs = {
  _set?: Maybe<Customers_Set_Input>;
  where: Customers_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Customers_AddressArgs = {
  _inc?: Maybe<Customers_Address_Inc_Input>;
  _set?: Maybe<Customers_Address_Set_Input>;
  where: Customers_Address_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Customers_Address_By_PkArgs = {
  _inc?: Maybe<Customers_Address_Inc_Input>;
  _set?: Maybe<Customers_Address_Set_Input>;
  pk_columns: Customers_Address_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Customers_By_PkArgs = {
  _set?: Maybe<Customers_Set_Input>;
  pk_columns: Customers_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Customers_TagsArgs = {
  _set?: Maybe<Customers_Tags_Set_Input>;
  where: Customers_Tags_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Customers_Tags_By_PkArgs = {
  _set?: Maybe<Customers_Tags_Set_Input>;
  pk_columns: Customers_Tags_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Draft_OrdersArgs = {
  _inc?: Maybe<Draft_Orders_Inc_Input>;
  _set?: Maybe<Draft_Orders_Set_Input>;
  where: Draft_Orders_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Draft_Orders_By_PkArgs = {
  _inc?: Maybe<Draft_Orders_Inc_Input>;
  _set?: Maybe<Draft_Orders_Set_Input>;
  pk_columns: Draft_Orders_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Draft_Orders_DetailsArgs = {
  _inc?: Maybe<Draft_Orders_Details_Inc_Input>;
  _set?: Maybe<Draft_Orders_Details_Set_Input>;
  where: Draft_Orders_Details_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Draft_Orders_Details_By_PkArgs = {
  _inc?: Maybe<Draft_Orders_Details_Inc_Input>;
  _set?: Maybe<Draft_Orders_Details_Set_Input>;
  pk_columns: Draft_Orders_Details_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_KardexArgs = {
  _inc?: Maybe<Kardex_Inc_Input>;
  _set?: Maybe<Kardex_Set_Input>;
  where: Kardex_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Kardex_By_PkArgs = {
  _inc?: Maybe<Kardex_Inc_Input>;
  _set?: Maybe<Kardex_Set_Input>;
  pk_columns: Kardex_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_OrdersArgs = {
  _inc?: Maybe<Orders_Inc_Input>;
  _set?: Maybe<Orders_Set_Input>;
  where: Orders_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Orders_By_PkArgs = {
  _inc?: Maybe<Orders_Inc_Input>;
  _set?: Maybe<Orders_Set_Input>;
  pk_columns: Orders_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Orders_DetailsArgs = {
  _inc?: Maybe<Orders_Details_Inc_Input>;
  _set?: Maybe<Orders_Details_Set_Input>;
  where: Orders_Details_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Orders_Details_By_PkArgs = {
  _inc?: Maybe<Orders_Details_Inc_Input>;
  _set?: Maybe<Orders_Details_Set_Input>;
  pk_columns: Orders_Details_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Price_RuleArgs = {
  _inc?: Maybe<Price_Rule_Inc_Input>;
  _set?: Maybe<Price_Rule_Set_Input>;
  where: Price_Rule_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Price_Rule_By_PkArgs = {
  _inc?: Maybe<Price_Rule_Inc_Input>;
  _set?: Maybe<Price_Rule_Set_Input>;
  pk_columns: Price_Rule_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_ProductsArgs = {
  _inc?: Maybe<Products_Inc_Input>;
  _set?: Maybe<Products_Set_Input>;
  where: Products_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Products_By_PkArgs = {
  _inc?: Maybe<Products_Inc_Input>;
  _set?: Maybe<Products_Set_Input>;
  pk_columns: Products_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Products_CategoriesArgs = {
  _set?: Maybe<Products_Categories_Set_Input>;
  where: Products_Categories_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Products_Categories_By_PkArgs = {
  _set?: Maybe<Products_Categories_Set_Input>;
  pk_columns: Products_Categories_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Products_LotsArgs = {
  _inc?: Maybe<Products_Lots_Inc_Input>;
  _set?: Maybe<Products_Lots_Set_Input>;
  where: Products_Lots_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Products_Lots_By_PkArgs = {
  _inc?: Maybe<Products_Lots_Inc_Input>;
  _set?: Maybe<Products_Lots_Set_Input>;
  pk_columns: Products_Lots_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Products_MediaArgs = {
  _set?: Maybe<Products_Media_Set_Input>;
  where: Products_Media_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Products_Media_By_PkArgs = {
  _set?: Maybe<Products_Media_Set_Input>;
  pk_columns: Products_Media_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Products_TagsArgs = {
  _set?: Maybe<Products_Tags_Set_Input>;
  where: Products_Tags_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Products_Tags_By_PkArgs = {
  _set?: Maybe<Products_Tags_Set_Input>;
  pk_columns: Products_Tags_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_StoresArgs = {
  _set?: Maybe<Stores_Set_Input>;
  where: Stores_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Stores_By_PkArgs = {
  _set?: Maybe<Stores_Set_Input>;
  pk_columns: Stores_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Stores_CategoriesArgs = {
  _set?: Maybe<Stores_Categories_Set_Input>;
  where: Stores_Categories_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Stores_Categories_By_PkArgs = {
  _set?: Maybe<Stores_Categories_Set_Input>;
  pk_columns: Stores_Categories_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Types_MovementsArgs = {
  _set?: Maybe<Types_Movements_Set_Input>;
  where: Types_Movements_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Types_Movements_By_PkArgs = {
  _set?: Maybe<Types_Movements_Set_Input>;
  pk_columns: Types_Movements_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** expression to compare columns of type numeric. All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: Maybe<Scalars['numeric']>;
  _gt?: Maybe<Scalars['numeric']>;
  _gte?: Maybe<Scalars['numeric']>;
  _in?: Maybe<Array<Scalars['numeric']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['numeric']>;
  _lte?: Maybe<Scalars['numeric']>;
  _neq?: Maybe<Scalars['numeric']>;
  _nin?: Maybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "orders" */
export type Orders = {
  __typename?: 'orders';
  _id: Scalars['uuid'];
  created_at?: Maybe<Scalars['timestamp']>;
  /** An object relationship */
  customer: Customers;
  customer_id: Scalars['uuid'];
  discount_total?: Maybe<Scalars['numeric']>;
  entry_date?: Maybe<Scalars['timestamp']>;
  /** An array relationship */
  orders_details: Array<Orders_Details>;
  /** An aggregated array relationship */
  orders_details_aggregate: Orders_Details_Aggregate;
  /** An object relationship */
  store: Stores;
  store_id: Scalars['uuid'];
  sub_total?: Maybe<Scalars['numeric']>;
  tax_total?: Maybe<Scalars['numeric']>;
  total?: Maybe<Scalars['numeric']>;
};

/** columns and relationships of "orders" */
export type OrdersOrders_DetailsArgs = {
  distinct_on?: Maybe<Array<Orders_Details_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Details_Order_By>>;
  where?: Maybe<Orders_Details_Bool_Exp>;
};

/** columns and relationships of "orders" */
export type OrdersOrders_Details_AggregateArgs = {
  distinct_on?: Maybe<Array<Orders_Details_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Details_Order_By>>;
  where?: Maybe<Orders_Details_Bool_Exp>;
};

/** aggregated selection of "orders" */
export type Orders_Aggregate = {
  __typename?: 'orders_aggregate';
  aggregate?: Maybe<Orders_Aggregate_Fields>;
  nodes: Array<Orders>;
};

/** aggregate fields of "orders" */
export type Orders_Aggregate_Fields = {
  __typename?: 'orders_aggregate_fields';
  avg?: Maybe<Orders_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Orders_Max_Fields>;
  min?: Maybe<Orders_Min_Fields>;
  stddev?: Maybe<Orders_Stddev_Fields>;
  stddev_pop?: Maybe<Orders_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Orders_Stddev_Samp_Fields>;
  sum?: Maybe<Orders_Sum_Fields>;
  var_pop?: Maybe<Orders_Var_Pop_Fields>;
  var_samp?: Maybe<Orders_Var_Samp_Fields>;
  variance?: Maybe<Orders_Variance_Fields>;
};

/** aggregate fields of "orders" */
export type Orders_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Orders_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "orders" */
export type Orders_Aggregate_Order_By = {
  avg?: Maybe<Orders_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Orders_Max_Order_By>;
  min?: Maybe<Orders_Min_Order_By>;
  stddev?: Maybe<Orders_Stddev_Order_By>;
  stddev_pop?: Maybe<Orders_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Orders_Stddev_Samp_Order_By>;
  sum?: Maybe<Orders_Sum_Order_By>;
  var_pop?: Maybe<Orders_Var_Pop_Order_By>;
  var_samp?: Maybe<Orders_Var_Samp_Order_By>;
  variance?: Maybe<Orders_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "orders" */
export type Orders_Arr_Rel_Insert_Input = {
  data: Array<Orders_Insert_Input>;
  on_conflict?: Maybe<Orders_On_Conflict>;
};

/** aggregate avg on columns */
export type Orders_Avg_Fields = {
  __typename?: 'orders_avg_fields';
  discount_total?: Maybe<Scalars['Float']>;
  sub_total?: Maybe<Scalars['Float']>;
  tax_total?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "orders" */
export type Orders_Avg_Order_By = {
  discount_total?: Maybe<Order_By>;
  sub_total?: Maybe<Order_By>;
  tax_total?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "orders". All fields are combined with a logical 'AND'. */
export type Orders_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Orders_Bool_Exp>>>;
  _id?: Maybe<Uuid_Comparison_Exp>;
  _not?: Maybe<Orders_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Orders_Bool_Exp>>>;
  created_at?: Maybe<Timestamp_Comparison_Exp>;
  customer?: Maybe<Customers_Bool_Exp>;
  customer_id?: Maybe<Uuid_Comparison_Exp>;
  discount_total?: Maybe<Numeric_Comparison_Exp>;
  entry_date?: Maybe<Timestamp_Comparison_Exp>;
  orders_details?: Maybe<Orders_Details_Bool_Exp>;
  store?: Maybe<Stores_Bool_Exp>;
  store_id?: Maybe<Uuid_Comparison_Exp>;
  sub_total?: Maybe<Numeric_Comparison_Exp>;
  tax_total?: Maybe<Numeric_Comparison_Exp>;
  total?: Maybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "orders" */
export enum Orders_Constraint {
  /** unique or primary key constraint */
  OrdersPkey = 'orders_pkey'
}

/** columns and relationships of "orders_details" */
export type Orders_Details = {
  __typename?: 'orders_details';
  _id: Scalars['uuid'];
  created_at?: Maybe<Scalars['timestamp']>;
  discount_total?: Maybe<Scalars['numeric']>;
  /** An object relationship */
  order: Orders;
  order_id: Scalars['uuid'];
  price?: Maybe<Scalars['numeric']>;
  /** An object relationship */
  price_rule: Price_Rule;
  price_rule_id: Scalars['uuid'];
  product_lot_id: Scalars['uuid'];
  /** An object relationship */
  products_lot: Products_Lots;
  quantity?: Maybe<Scalars['Int']>;
  sub_total?: Maybe<Scalars['numeric']>;
  tax_total?: Maybe<Scalars['numeric']>;
  total?: Maybe<Scalars['numeric']>;
};

/** aggregated selection of "orders_details" */
export type Orders_Details_Aggregate = {
  __typename?: 'orders_details_aggregate';
  aggregate?: Maybe<Orders_Details_Aggregate_Fields>;
  nodes: Array<Orders_Details>;
};

/** aggregate fields of "orders_details" */
export type Orders_Details_Aggregate_Fields = {
  __typename?: 'orders_details_aggregate_fields';
  avg?: Maybe<Orders_Details_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Orders_Details_Max_Fields>;
  min?: Maybe<Orders_Details_Min_Fields>;
  stddev?: Maybe<Orders_Details_Stddev_Fields>;
  stddev_pop?: Maybe<Orders_Details_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Orders_Details_Stddev_Samp_Fields>;
  sum?: Maybe<Orders_Details_Sum_Fields>;
  var_pop?: Maybe<Orders_Details_Var_Pop_Fields>;
  var_samp?: Maybe<Orders_Details_Var_Samp_Fields>;
  variance?: Maybe<Orders_Details_Variance_Fields>;
};

/** aggregate fields of "orders_details" */
export type Orders_Details_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Orders_Details_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "orders_details" */
export type Orders_Details_Aggregate_Order_By = {
  avg?: Maybe<Orders_Details_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Orders_Details_Max_Order_By>;
  min?: Maybe<Orders_Details_Min_Order_By>;
  stddev?: Maybe<Orders_Details_Stddev_Order_By>;
  stddev_pop?: Maybe<Orders_Details_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Orders_Details_Stddev_Samp_Order_By>;
  sum?: Maybe<Orders_Details_Sum_Order_By>;
  var_pop?: Maybe<Orders_Details_Var_Pop_Order_By>;
  var_samp?: Maybe<Orders_Details_Var_Samp_Order_By>;
  variance?: Maybe<Orders_Details_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "orders_details" */
export type Orders_Details_Arr_Rel_Insert_Input = {
  data: Array<Orders_Details_Insert_Input>;
  on_conflict?: Maybe<Orders_Details_On_Conflict>;
};

/** aggregate avg on columns */
export type Orders_Details_Avg_Fields = {
  __typename?: 'orders_details_avg_fields';
  discount_total?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  sub_total?: Maybe<Scalars['Float']>;
  tax_total?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "orders_details" */
export type Orders_Details_Avg_Order_By = {
  discount_total?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  sub_total?: Maybe<Order_By>;
  tax_total?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "orders_details". All fields are combined with a logical 'AND'. */
export type Orders_Details_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Orders_Details_Bool_Exp>>>;
  _id?: Maybe<Uuid_Comparison_Exp>;
  _not?: Maybe<Orders_Details_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Orders_Details_Bool_Exp>>>;
  created_at?: Maybe<Timestamp_Comparison_Exp>;
  discount_total?: Maybe<Numeric_Comparison_Exp>;
  order?: Maybe<Orders_Bool_Exp>;
  order_id?: Maybe<Uuid_Comparison_Exp>;
  price?: Maybe<Numeric_Comparison_Exp>;
  price_rule?: Maybe<Price_Rule_Bool_Exp>;
  price_rule_id?: Maybe<Uuid_Comparison_Exp>;
  product_lot_id?: Maybe<Uuid_Comparison_Exp>;
  products_lot?: Maybe<Products_Lots_Bool_Exp>;
  quantity?: Maybe<Int_Comparison_Exp>;
  sub_total?: Maybe<Numeric_Comparison_Exp>;
  tax_total?: Maybe<Numeric_Comparison_Exp>;
  total?: Maybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "orders_details" */
export enum Orders_Details_Constraint {
  /** unique or primary key constraint */
  OrdersDetailsPkey = 'orders_details_pkey'
}

/** input type for incrementing integer column in table "orders_details" */
export type Orders_Details_Inc_Input = {
  discount_total?: Maybe<Scalars['numeric']>;
  price?: Maybe<Scalars['numeric']>;
  quantity?: Maybe<Scalars['Int']>;
  sub_total?: Maybe<Scalars['numeric']>;
  tax_total?: Maybe<Scalars['numeric']>;
  total?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "orders_details" */
export type Orders_Details_Insert_Input = {
  _id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  discount_total?: Maybe<Scalars['numeric']>;
  order?: Maybe<Orders_Obj_Rel_Insert_Input>;
  order_id?: Maybe<Scalars['uuid']>;
  price?: Maybe<Scalars['numeric']>;
  price_rule?: Maybe<Price_Rule_Obj_Rel_Insert_Input>;
  price_rule_id?: Maybe<Scalars['uuid']>;
  product_lot_id?: Maybe<Scalars['uuid']>;
  products_lot?: Maybe<Products_Lots_Obj_Rel_Insert_Input>;
  quantity?: Maybe<Scalars['Int']>;
  sub_total?: Maybe<Scalars['numeric']>;
  tax_total?: Maybe<Scalars['numeric']>;
  total?: Maybe<Scalars['numeric']>;
};

/** aggregate max on columns */
export type Orders_Details_Max_Fields = {
  __typename?: 'orders_details_max_fields';
  _id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  discount_total?: Maybe<Scalars['numeric']>;
  order_id?: Maybe<Scalars['uuid']>;
  price?: Maybe<Scalars['numeric']>;
  price_rule_id?: Maybe<Scalars['uuid']>;
  product_lot_id?: Maybe<Scalars['uuid']>;
  quantity?: Maybe<Scalars['Int']>;
  sub_total?: Maybe<Scalars['numeric']>;
  tax_total?: Maybe<Scalars['numeric']>;
  total?: Maybe<Scalars['numeric']>;
};

/** order by max() on columns of table "orders_details" */
export type Orders_Details_Max_Order_By = {
  _id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  discount_total?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  price_rule_id?: Maybe<Order_By>;
  product_lot_id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  sub_total?: Maybe<Order_By>;
  tax_total?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Orders_Details_Min_Fields = {
  __typename?: 'orders_details_min_fields';
  _id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  discount_total?: Maybe<Scalars['numeric']>;
  order_id?: Maybe<Scalars['uuid']>;
  price?: Maybe<Scalars['numeric']>;
  price_rule_id?: Maybe<Scalars['uuid']>;
  product_lot_id?: Maybe<Scalars['uuid']>;
  quantity?: Maybe<Scalars['Int']>;
  sub_total?: Maybe<Scalars['numeric']>;
  tax_total?: Maybe<Scalars['numeric']>;
  total?: Maybe<Scalars['numeric']>;
};

/** order by min() on columns of table "orders_details" */
export type Orders_Details_Min_Order_By = {
  _id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  discount_total?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  price_rule_id?: Maybe<Order_By>;
  product_lot_id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  sub_total?: Maybe<Order_By>;
  tax_total?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** response of any mutation on the table "orders_details" */
export type Orders_Details_Mutation_Response = {
  __typename?: 'orders_details_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Orders_Details>;
};

/** input type for inserting object relation for remote table "orders_details" */
export type Orders_Details_Obj_Rel_Insert_Input = {
  data: Orders_Details_Insert_Input;
  on_conflict?: Maybe<Orders_Details_On_Conflict>;
};

/** on conflict condition type for table "orders_details" */
export type Orders_Details_On_Conflict = {
  constraint: Orders_Details_Constraint;
  update_columns: Array<Orders_Details_Update_Column>;
  where?: Maybe<Orders_Details_Bool_Exp>;
};

/** ordering options when selecting data from "orders_details" */
export type Orders_Details_Order_By = {
  _id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  discount_total?: Maybe<Order_By>;
  order?: Maybe<Orders_Order_By>;
  order_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  price_rule?: Maybe<Price_Rule_Order_By>;
  price_rule_id?: Maybe<Order_By>;
  product_lot_id?: Maybe<Order_By>;
  products_lot?: Maybe<Products_Lots_Order_By>;
  quantity?: Maybe<Order_By>;
  sub_total?: Maybe<Order_By>;
  tax_total?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** primary key columns input for table: "orders_details" */
export type Orders_Details_Pk_Columns_Input = {
  _id: Scalars['uuid'];
};

/** select columns of table "orders_details" */
export enum Orders_Details_Select_Column {
  /** column name */
  Id = '_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DiscountTotal = 'discount_total',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  Price = 'price',
  /** column name */
  PriceRuleId = 'price_rule_id',
  /** column name */
  ProductLotId = 'product_lot_id',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  SubTotal = 'sub_total',
  /** column name */
  TaxTotal = 'tax_total',
  /** column name */
  Total = 'total'
}

/** input type for updating data in table "orders_details" */
export type Orders_Details_Set_Input = {
  _id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  discount_total?: Maybe<Scalars['numeric']>;
  order_id?: Maybe<Scalars['uuid']>;
  price?: Maybe<Scalars['numeric']>;
  price_rule_id?: Maybe<Scalars['uuid']>;
  product_lot_id?: Maybe<Scalars['uuid']>;
  quantity?: Maybe<Scalars['Int']>;
  sub_total?: Maybe<Scalars['numeric']>;
  tax_total?: Maybe<Scalars['numeric']>;
  total?: Maybe<Scalars['numeric']>;
};

/** aggregate stddev on columns */
export type Orders_Details_Stddev_Fields = {
  __typename?: 'orders_details_stddev_fields';
  discount_total?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  sub_total?: Maybe<Scalars['Float']>;
  tax_total?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "orders_details" */
export type Orders_Details_Stddev_Order_By = {
  discount_total?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  sub_total?: Maybe<Order_By>;
  tax_total?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Orders_Details_Stddev_Pop_Fields = {
  __typename?: 'orders_details_stddev_pop_fields';
  discount_total?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  sub_total?: Maybe<Scalars['Float']>;
  tax_total?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "orders_details" */
export type Orders_Details_Stddev_Pop_Order_By = {
  discount_total?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  sub_total?: Maybe<Order_By>;
  tax_total?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Orders_Details_Stddev_Samp_Fields = {
  __typename?: 'orders_details_stddev_samp_fields';
  discount_total?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  sub_total?: Maybe<Scalars['Float']>;
  tax_total?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "orders_details" */
export type Orders_Details_Stddev_Samp_Order_By = {
  discount_total?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  sub_total?: Maybe<Order_By>;
  tax_total?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Orders_Details_Sum_Fields = {
  __typename?: 'orders_details_sum_fields';
  discount_total?: Maybe<Scalars['numeric']>;
  price?: Maybe<Scalars['numeric']>;
  quantity?: Maybe<Scalars['Int']>;
  sub_total?: Maybe<Scalars['numeric']>;
  tax_total?: Maybe<Scalars['numeric']>;
  total?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "orders_details" */
export type Orders_Details_Sum_Order_By = {
  discount_total?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  sub_total?: Maybe<Order_By>;
  tax_total?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** update columns of table "orders_details" */
export enum Orders_Details_Update_Column {
  /** column name */
  Id = '_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DiscountTotal = 'discount_total',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  Price = 'price',
  /** column name */
  PriceRuleId = 'price_rule_id',
  /** column name */
  ProductLotId = 'product_lot_id',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  SubTotal = 'sub_total',
  /** column name */
  TaxTotal = 'tax_total',
  /** column name */
  Total = 'total'
}

/** aggregate var_pop on columns */
export type Orders_Details_Var_Pop_Fields = {
  __typename?: 'orders_details_var_pop_fields';
  discount_total?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  sub_total?: Maybe<Scalars['Float']>;
  tax_total?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "orders_details" */
export type Orders_Details_Var_Pop_Order_By = {
  discount_total?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  sub_total?: Maybe<Order_By>;
  tax_total?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Orders_Details_Var_Samp_Fields = {
  __typename?: 'orders_details_var_samp_fields';
  discount_total?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  sub_total?: Maybe<Scalars['Float']>;
  tax_total?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "orders_details" */
export type Orders_Details_Var_Samp_Order_By = {
  discount_total?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  sub_total?: Maybe<Order_By>;
  tax_total?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Orders_Details_Variance_Fields = {
  __typename?: 'orders_details_variance_fields';
  discount_total?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  sub_total?: Maybe<Scalars['Float']>;
  tax_total?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "orders_details" */
export type Orders_Details_Variance_Order_By = {
  discount_total?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  sub_total?: Maybe<Order_By>;
  tax_total?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** input type for incrementing integer column in table "orders" */
export type Orders_Inc_Input = {
  discount_total?: Maybe<Scalars['numeric']>;
  sub_total?: Maybe<Scalars['numeric']>;
  tax_total?: Maybe<Scalars['numeric']>;
  total?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "orders" */
export type Orders_Insert_Input = {
  _id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  customer?: Maybe<Customers_Obj_Rel_Insert_Input>;
  customer_id?: Maybe<Scalars['uuid']>;
  discount_total?: Maybe<Scalars['numeric']>;
  entry_date?: Maybe<Scalars['timestamp']>;
  orders_details?: Maybe<Orders_Details_Arr_Rel_Insert_Input>;
  store?: Maybe<Stores_Obj_Rel_Insert_Input>;
  store_id?: Maybe<Scalars['uuid']>;
  sub_total?: Maybe<Scalars['numeric']>;
  tax_total?: Maybe<Scalars['numeric']>;
  total?: Maybe<Scalars['numeric']>;
};

/** aggregate max on columns */
export type Orders_Max_Fields = {
  __typename?: 'orders_max_fields';
  _id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  customer_id?: Maybe<Scalars['uuid']>;
  discount_total?: Maybe<Scalars['numeric']>;
  entry_date?: Maybe<Scalars['timestamp']>;
  store_id?: Maybe<Scalars['uuid']>;
  sub_total?: Maybe<Scalars['numeric']>;
  tax_total?: Maybe<Scalars['numeric']>;
  total?: Maybe<Scalars['numeric']>;
};

/** order by max() on columns of table "orders" */
export type Orders_Max_Order_By = {
  _id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  customer_id?: Maybe<Order_By>;
  discount_total?: Maybe<Order_By>;
  entry_date?: Maybe<Order_By>;
  store_id?: Maybe<Order_By>;
  sub_total?: Maybe<Order_By>;
  tax_total?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Orders_Min_Fields = {
  __typename?: 'orders_min_fields';
  _id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  customer_id?: Maybe<Scalars['uuid']>;
  discount_total?: Maybe<Scalars['numeric']>;
  entry_date?: Maybe<Scalars['timestamp']>;
  store_id?: Maybe<Scalars['uuid']>;
  sub_total?: Maybe<Scalars['numeric']>;
  tax_total?: Maybe<Scalars['numeric']>;
  total?: Maybe<Scalars['numeric']>;
};

/** order by min() on columns of table "orders" */
export type Orders_Min_Order_By = {
  _id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  customer_id?: Maybe<Order_By>;
  discount_total?: Maybe<Order_By>;
  entry_date?: Maybe<Order_By>;
  store_id?: Maybe<Order_By>;
  sub_total?: Maybe<Order_By>;
  tax_total?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** response of any mutation on the table "orders" */
export type Orders_Mutation_Response = {
  __typename?: 'orders_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Orders>;
};

/** input type for inserting object relation for remote table "orders" */
export type Orders_Obj_Rel_Insert_Input = {
  data: Orders_Insert_Input;
  on_conflict?: Maybe<Orders_On_Conflict>;
};

/** on conflict condition type for table "orders" */
export type Orders_On_Conflict = {
  constraint: Orders_Constraint;
  update_columns: Array<Orders_Update_Column>;
  where?: Maybe<Orders_Bool_Exp>;
};

/** ordering options when selecting data from "orders" */
export type Orders_Order_By = {
  _id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  customer?: Maybe<Customers_Order_By>;
  customer_id?: Maybe<Order_By>;
  discount_total?: Maybe<Order_By>;
  entry_date?: Maybe<Order_By>;
  orders_details_aggregate?: Maybe<Orders_Details_Aggregate_Order_By>;
  store?: Maybe<Stores_Order_By>;
  store_id?: Maybe<Order_By>;
  sub_total?: Maybe<Order_By>;
  tax_total?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** primary key columns input for table: "orders" */
export type Orders_Pk_Columns_Input = {
  _id: Scalars['uuid'];
};

/** select columns of table "orders" */
export enum Orders_Select_Column {
  /** column name */
  Id = '_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  DiscountTotal = 'discount_total',
  /** column name */
  EntryDate = 'entry_date',
  /** column name */
  StoreId = 'store_id',
  /** column name */
  SubTotal = 'sub_total',
  /** column name */
  TaxTotal = 'tax_total',
  /** column name */
  Total = 'total'
}

/** input type for updating data in table "orders" */
export type Orders_Set_Input = {
  _id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  customer_id?: Maybe<Scalars['uuid']>;
  discount_total?: Maybe<Scalars['numeric']>;
  entry_date?: Maybe<Scalars['timestamp']>;
  store_id?: Maybe<Scalars['uuid']>;
  sub_total?: Maybe<Scalars['numeric']>;
  tax_total?: Maybe<Scalars['numeric']>;
  total?: Maybe<Scalars['numeric']>;
};

/** aggregate stddev on columns */
export type Orders_Stddev_Fields = {
  __typename?: 'orders_stddev_fields';
  discount_total?: Maybe<Scalars['Float']>;
  sub_total?: Maybe<Scalars['Float']>;
  tax_total?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "orders" */
export type Orders_Stddev_Order_By = {
  discount_total?: Maybe<Order_By>;
  sub_total?: Maybe<Order_By>;
  tax_total?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Orders_Stddev_Pop_Fields = {
  __typename?: 'orders_stddev_pop_fields';
  discount_total?: Maybe<Scalars['Float']>;
  sub_total?: Maybe<Scalars['Float']>;
  tax_total?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "orders" */
export type Orders_Stddev_Pop_Order_By = {
  discount_total?: Maybe<Order_By>;
  sub_total?: Maybe<Order_By>;
  tax_total?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Orders_Stddev_Samp_Fields = {
  __typename?: 'orders_stddev_samp_fields';
  discount_total?: Maybe<Scalars['Float']>;
  sub_total?: Maybe<Scalars['Float']>;
  tax_total?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "orders" */
export type Orders_Stddev_Samp_Order_By = {
  discount_total?: Maybe<Order_By>;
  sub_total?: Maybe<Order_By>;
  tax_total?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Orders_Sum_Fields = {
  __typename?: 'orders_sum_fields';
  discount_total?: Maybe<Scalars['numeric']>;
  sub_total?: Maybe<Scalars['numeric']>;
  tax_total?: Maybe<Scalars['numeric']>;
  total?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "orders" */
export type Orders_Sum_Order_By = {
  discount_total?: Maybe<Order_By>;
  sub_total?: Maybe<Order_By>;
  tax_total?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** update columns of table "orders" */
export enum Orders_Update_Column {
  /** column name */
  Id = '_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  DiscountTotal = 'discount_total',
  /** column name */
  EntryDate = 'entry_date',
  /** column name */
  StoreId = 'store_id',
  /** column name */
  SubTotal = 'sub_total',
  /** column name */
  TaxTotal = 'tax_total',
  /** column name */
  Total = 'total'
}

/** aggregate var_pop on columns */
export type Orders_Var_Pop_Fields = {
  __typename?: 'orders_var_pop_fields';
  discount_total?: Maybe<Scalars['Float']>;
  sub_total?: Maybe<Scalars['Float']>;
  tax_total?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "orders" */
export type Orders_Var_Pop_Order_By = {
  discount_total?: Maybe<Order_By>;
  sub_total?: Maybe<Order_By>;
  tax_total?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Orders_Var_Samp_Fields = {
  __typename?: 'orders_var_samp_fields';
  discount_total?: Maybe<Scalars['Float']>;
  sub_total?: Maybe<Scalars['Float']>;
  tax_total?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "orders" */
export type Orders_Var_Samp_Order_By = {
  discount_total?: Maybe<Order_By>;
  sub_total?: Maybe<Order_By>;
  tax_total?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Orders_Variance_Fields = {
  __typename?: 'orders_variance_fields';
  discount_total?: Maybe<Scalars['Float']>;
  sub_total?: Maybe<Scalars['Float']>;
  tax_total?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "orders" */
export type Orders_Variance_Order_By = {
  discount_total?: Maybe<Order_By>;
  sub_total?: Maybe<Order_By>;
  tax_total?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** columns and relationships of "price_rule" */
export type Price_Rule = {
  __typename?: 'price_rule';
  _id: Scalars['uuid'];
  created_at?: Maybe<Scalars['timestamp']>;
  ends_at?: Maybe<Scalars['timestamp']>;
  once_per_costumer?: Maybe<Scalars['bit']>;
  /** An array relationship */
  orders_details: Array<Orders_Details>;
  /** An aggregated array relationship */
  orders_details_aggregate: Orders_Details_Aggregate;
  percent?: Maybe<Scalars['bit']>;
  price?: Maybe<Scalars['numeric']>;
  /** An object relationship */
  product: Products;
  product_id: Scalars['uuid'];
  starts_at?: Maybe<Scalars['timestamp']>;
  value?: Maybe<Scalars['numeric']>;
};

/** columns and relationships of "price_rule" */
export type Price_RuleOrders_DetailsArgs = {
  distinct_on?: Maybe<Array<Orders_Details_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Details_Order_By>>;
  where?: Maybe<Orders_Details_Bool_Exp>;
};

/** columns and relationships of "price_rule" */
export type Price_RuleOrders_Details_AggregateArgs = {
  distinct_on?: Maybe<Array<Orders_Details_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Details_Order_By>>;
  where?: Maybe<Orders_Details_Bool_Exp>;
};

/** aggregated selection of "price_rule" */
export type Price_Rule_Aggregate = {
  __typename?: 'price_rule_aggregate';
  aggregate?: Maybe<Price_Rule_Aggregate_Fields>;
  nodes: Array<Price_Rule>;
};

/** aggregate fields of "price_rule" */
export type Price_Rule_Aggregate_Fields = {
  __typename?: 'price_rule_aggregate_fields';
  avg?: Maybe<Price_Rule_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Price_Rule_Max_Fields>;
  min?: Maybe<Price_Rule_Min_Fields>;
  stddev?: Maybe<Price_Rule_Stddev_Fields>;
  stddev_pop?: Maybe<Price_Rule_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Price_Rule_Stddev_Samp_Fields>;
  sum?: Maybe<Price_Rule_Sum_Fields>;
  var_pop?: Maybe<Price_Rule_Var_Pop_Fields>;
  var_samp?: Maybe<Price_Rule_Var_Samp_Fields>;
  variance?: Maybe<Price_Rule_Variance_Fields>;
};

/** aggregate fields of "price_rule" */
export type Price_Rule_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Price_Rule_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "price_rule" */
export type Price_Rule_Aggregate_Order_By = {
  avg?: Maybe<Price_Rule_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Price_Rule_Max_Order_By>;
  min?: Maybe<Price_Rule_Min_Order_By>;
  stddev?: Maybe<Price_Rule_Stddev_Order_By>;
  stddev_pop?: Maybe<Price_Rule_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Price_Rule_Stddev_Samp_Order_By>;
  sum?: Maybe<Price_Rule_Sum_Order_By>;
  var_pop?: Maybe<Price_Rule_Var_Pop_Order_By>;
  var_samp?: Maybe<Price_Rule_Var_Samp_Order_By>;
  variance?: Maybe<Price_Rule_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "price_rule" */
export type Price_Rule_Arr_Rel_Insert_Input = {
  data: Array<Price_Rule_Insert_Input>;
  on_conflict?: Maybe<Price_Rule_On_Conflict>;
};

/** aggregate avg on columns */
export type Price_Rule_Avg_Fields = {
  __typename?: 'price_rule_avg_fields';
  price?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "price_rule" */
export type Price_Rule_Avg_Order_By = {
  price?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "price_rule". All fields are combined with a logical 'AND'. */
export type Price_Rule_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Price_Rule_Bool_Exp>>>;
  _id?: Maybe<Uuid_Comparison_Exp>;
  _not?: Maybe<Price_Rule_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Price_Rule_Bool_Exp>>>;
  created_at?: Maybe<Timestamp_Comparison_Exp>;
  ends_at?: Maybe<Timestamp_Comparison_Exp>;
  once_per_costumer?: Maybe<Bit_Comparison_Exp>;
  orders_details?: Maybe<Orders_Details_Bool_Exp>;
  percent?: Maybe<Bit_Comparison_Exp>;
  price?: Maybe<Numeric_Comparison_Exp>;
  product?: Maybe<Products_Bool_Exp>;
  product_id?: Maybe<Uuid_Comparison_Exp>;
  starts_at?: Maybe<Timestamp_Comparison_Exp>;
  value?: Maybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "price_rule" */
export enum Price_Rule_Constraint {
  /** unique or primary key constraint */
  PriceRulePkey = 'price_rule_pkey'
}

/** input type for incrementing integer column in table "price_rule" */
export type Price_Rule_Inc_Input = {
  price?: Maybe<Scalars['numeric']>;
  value?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "price_rule" */
export type Price_Rule_Insert_Input = {
  _id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  ends_at?: Maybe<Scalars['timestamp']>;
  once_per_costumer?: Maybe<Scalars['bit']>;
  orders_details?: Maybe<Orders_Details_Arr_Rel_Insert_Input>;
  percent?: Maybe<Scalars['bit']>;
  price?: Maybe<Scalars['numeric']>;
  product?: Maybe<Products_Obj_Rel_Insert_Input>;
  product_id?: Maybe<Scalars['uuid']>;
  starts_at?: Maybe<Scalars['timestamp']>;
  value?: Maybe<Scalars['numeric']>;
};

/** aggregate max on columns */
export type Price_Rule_Max_Fields = {
  __typename?: 'price_rule_max_fields';
  _id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  ends_at?: Maybe<Scalars['timestamp']>;
  price?: Maybe<Scalars['numeric']>;
  product_id?: Maybe<Scalars['uuid']>;
  starts_at?: Maybe<Scalars['timestamp']>;
  value?: Maybe<Scalars['numeric']>;
};

/** order by max() on columns of table "price_rule" */
export type Price_Rule_Max_Order_By = {
  _id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  ends_at?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  starts_at?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Price_Rule_Min_Fields = {
  __typename?: 'price_rule_min_fields';
  _id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  ends_at?: Maybe<Scalars['timestamp']>;
  price?: Maybe<Scalars['numeric']>;
  product_id?: Maybe<Scalars['uuid']>;
  starts_at?: Maybe<Scalars['timestamp']>;
  value?: Maybe<Scalars['numeric']>;
};

/** order by min() on columns of table "price_rule" */
export type Price_Rule_Min_Order_By = {
  _id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  ends_at?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  starts_at?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** response of any mutation on the table "price_rule" */
export type Price_Rule_Mutation_Response = {
  __typename?: 'price_rule_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Price_Rule>;
};

/** input type for inserting object relation for remote table "price_rule" */
export type Price_Rule_Obj_Rel_Insert_Input = {
  data: Price_Rule_Insert_Input;
  on_conflict?: Maybe<Price_Rule_On_Conflict>;
};

/** on conflict condition type for table "price_rule" */
export type Price_Rule_On_Conflict = {
  constraint: Price_Rule_Constraint;
  update_columns: Array<Price_Rule_Update_Column>;
  where?: Maybe<Price_Rule_Bool_Exp>;
};

/** ordering options when selecting data from "price_rule" */
export type Price_Rule_Order_By = {
  _id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  ends_at?: Maybe<Order_By>;
  once_per_costumer?: Maybe<Order_By>;
  orders_details_aggregate?: Maybe<Orders_Details_Aggregate_Order_By>;
  percent?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  product?: Maybe<Products_Order_By>;
  product_id?: Maybe<Order_By>;
  starts_at?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: "price_rule" */
export type Price_Rule_Pk_Columns_Input = {
  _id: Scalars['uuid'];
};

/** select columns of table "price_rule" */
export enum Price_Rule_Select_Column {
  /** column name */
  Id = '_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EndsAt = 'ends_at',
  /** column name */
  OncePerCostumer = 'once_per_costumer',
  /** column name */
  Percent = 'percent',
  /** column name */
  Price = 'price',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  StartsAt = 'starts_at',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "price_rule" */
export type Price_Rule_Set_Input = {
  _id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  ends_at?: Maybe<Scalars['timestamp']>;
  once_per_costumer?: Maybe<Scalars['bit']>;
  percent?: Maybe<Scalars['bit']>;
  price?: Maybe<Scalars['numeric']>;
  product_id?: Maybe<Scalars['uuid']>;
  starts_at?: Maybe<Scalars['timestamp']>;
  value?: Maybe<Scalars['numeric']>;
};

/** aggregate stddev on columns */
export type Price_Rule_Stddev_Fields = {
  __typename?: 'price_rule_stddev_fields';
  price?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "price_rule" */
export type Price_Rule_Stddev_Order_By = {
  price?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Price_Rule_Stddev_Pop_Fields = {
  __typename?: 'price_rule_stddev_pop_fields';
  price?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "price_rule" */
export type Price_Rule_Stddev_Pop_Order_By = {
  price?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Price_Rule_Stddev_Samp_Fields = {
  __typename?: 'price_rule_stddev_samp_fields';
  price?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "price_rule" */
export type Price_Rule_Stddev_Samp_Order_By = {
  price?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Price_Rule_Sum_Fields = {
  __typename?: 'price_rule_sum_fields';
  price?: Maybe<Scalars['numeric']>;
  value?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "price_rule" */
export type Price_Rule_Sum_Order_By = {
  price?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** update columns of table "price_rule" */
export enum Price_Rule_Update_Column {
  /** column name */
  Id = '_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EndsAt = 'ends_at',
  /** column name */
  OncePerCostumer = 'once_per_costumer',
  /** column name */
  Percent = 'percent',
  /** column name */
  Price = 'price',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  StartsAt = 'starts_at',
  /** column name */
  Value = 'value'
}

/** aggregate var_pop on columns */
export type Price_Rule_Var_Pop_Fields = {
  __typename?: 'price_rule_var_pop_fields';
  price?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "price_rule" */
export type Price_Rule_Var_Pop_Order_By = {
  price?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Price_Rule_Var_Samp_Fields = {
  __typename?: 'price_rule_var_samp_fields';
  price?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "price_rule" */
export type Price_Rule_Var_Samp_Order_By = {
  price?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Price_Rule_Variance_Fields = {
  __typename?: 'price_rule_variance_fields';
  price?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "price_rule" */
export type Price_Rule_Variance_Order_By = {
  price?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** columns and relationships of "products" */
export type Products = {
  __typename?: 'products';
  _id: Scalars['uuid'];
  cost?: Maybe<Scalars['numeric']>;
  /** An object relationship */
  countries_tax: Countries_Taxes;
  country_tax_id: Scalars['uuid'];
  created_at?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
  full_name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  price_compared?: Maybe<Scalars['numeric']>;
  /** An array relationship */
  price_rules: Array<Price_Rule>;
  /** An aggregated array relationship */
  price_rules_aggregate: Price_Rule_Aggregate;
  product_category_id: Scalars['uuid'];
  /** An object relationship */
  products_category: Products_Categories;
  /** An array relationship */
  products_lots: Array<Products_Lots>;
  /** An aggregated array relationship */
  products_lots_aggregate: Products_Lots_Aggregate;
  /** An array relationship */
  products_media: Array<Products_Media>;
  /** An aggregated array relationship */
  products_media_aggregate: Products_Media_Aggregate;
  /** An array relationship */
  products_tags: Array<Products_Tags>;
  /** An aggregated array relationship */
  products_tags_aggregate: Products_Tags_Aggregate;
  /** An object relationship */
  store: Stores;
  store_id: Scalars['uuid'];
};

/** columns and relationships of "products" */
export type ProductsPrice_RulesArgs = {
  distinct_on?: Maybe<Array<Price_Rule_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Price_Rule_Order_By>>;
  where?: Maybe<Price_Rule_Bool_Exp>;
};

/** columns and relationships of "products" */
export type ProductsPrice_Rules_AggregateArgs = {
  distinct_on?: Maybe<Array<Price_Rule_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Price_Rule_Order_By>>;
  where?: Maybe<Price_Rule_Bool_Exp>;
};

/** columns and relationships of "products" */
export type ProductsProducts_LotsArgs = {
  distinct_on?: Maybe<Array<Products_Lots_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Lots_Order_By>>;
  where?: Maybe<Products_Lots_Bool_Exp>;
};

/** columns and relationships of "products" */
export type ProductsProducts_Lots_AggregateArgs = {
  distinct_on?: Maybe<Array<Products_Lots_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Lots_Order_By>>;
  where?: Maybe<Products_Lots_Bool_Exp>;
};

/** columns and relationships of "products" */
export type ProductsProducts_MediaArgs = {
  distinct_on?: Maybe<Array<Products_Media_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Media_Order_By>>;
  where?: Maybe<Products_Media_Bool_Exp>;
};

/** columns and relationships of "products" */
export type ProductsProducts_Media_AggregateArgs = {
  distinct_on?: Maybe<Array<Products_Media_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Media_Order_By>>;
  where?: Maybe<Products_Media_Bool_Exp>;
};

/** columns and relationships of "products" */
export type ProductsProducts_TagsArgs = {
  distinct_on?: Maybe<Array<Products_Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Tags_Order_By>>;
  where?: Maybe<Products_Tags_Bool_Exp>;
};

/** columns and relationships of "products" */
export type ProductsProducts_Tags_AggregateArgs = {
  distinct_on?: Maybe<Array<Products_Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Tags_Order_By>>;
  where?: Maybe<Products_Tags_Bool_Exp>;
};

/** aggregated selection of "products" */
export type Products_Aggregate = {
  __typename?: 'products_aggregate';
  aggregate?: Maybe<Products_Aggregate_Fields>;
  nodes: Array<Products>;
};

/** aggregate fields of "products" */
export type Products_Aggregate_Fields = {
  __typename?: 'products_aggregate_fields';
  avg?: Maybe<Products_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Products_Max_Fields>;
  min?: Maybe<Products_Min_Fields>;
  stddev?: Maybe<Products_Stddev_Fields>;
  stddev_pop?: Maybe<Products_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Products_Stddev_Samp_Fields>;
  sum?: Maybe<Products_Sum_Fields>;
  var_pop?: Maybe<Products_Var_Pop_Fields>;
  var_samp?: Maybe<Products_Var_Samp_Fields>;
  variance?: Maybe<Products_Variance_Fields>;
};

/** aggregate fields of "products" */
export type Products_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Products_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "products" */
export type Products_Aggregate_Order_By = {
  avg?: Maybe<Products_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Products_Max_Order_By>;
  min?: Maybe<Products_Min_Order_By>;
  stddev?: Maybe<Products_Stddev_Order_By>;
  stddev_pop?: Maybe<Products_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Products_Stddev_Samp_Order_By>;
  sum?: Maybe<Products_Sum_Order_By>;
  var_pop?: Maybe<Products_Var_Pop_Order_By>;
  var_samp?: Maybe<Products_Var_Samp_Order_By>;
  variance?: Maybe<Products_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "products" */
export type Products_Arr_Rel_Insert_Input = {
  data: Array<Products_Insert_Input>;
  on_conflict?: Maybe<Products_On_Conflict>;
};

/** aggregate avg on columns */
export type Products_Avg_Fields = {
  __typename?: 'products_avg_fields';
  cost?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  price_compared?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "products" */
export type Products_Avg_Order_By = {
  cost?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  price_compared?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "products". All fields are combined with a logical 'AND'. */
export type Products_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Products_Bool_Exp>>>;
  _id?: Maybe<Uuid_Comparison_Exp>;
  _not?: Maybe<Products_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Products_Bool_Exp>>>;
  cost?: Maybe<Numeric_Comparison_Exp>;
  countries_tax?: Maybe<Countries_Taxes_Bool_Exp>;
  country_tax_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamp_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  full_name?: Maybe<String_Comparison_Exp>;
  price?: Maybe<Numeric_Comparison_Exp>;
  price_compared?: Maybe<Numeric_Comparison_Exp>;
  price_rules?: Maybe<Price_Rule_Bool_Exp>;
  product_category_id?: Maybe<Uuid_Comparison_Exp>;
  products_category?: Maybe<Products_Categories_Bool_Exp>;
  products_lots?: Maybe<Products_Lots_Bool_Exp>;
  products_media?: Maybe<Products_Media_Bool_Exp>;
  products_tags?: Maybe<Products_Tags_Bool_Exp>;
  store?: Maybe<Stores_Bool_Exp>;
  store_id?: Maybe<Uuid_Comparison_Exp>;
};

/** columns and relationships of "products_categories" */
export type Products_Categories = {
  __typename?: 'products_categories';
  _id: Scalars['uuid'];
  created_at?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
  /** An array relationship */
  products: Array<Products>;
  /** An aggregated array relationship */
  products_aggregate: Products_Aggregate;
  store_id: Scalars['uuid'];
};

/** columns and relationships of "products_categories" */
export type Products_CategoriesProductsArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};

/** columns and relationships of "products_categories" */
export type Products_CategoriesProducts_AggregateArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};

/** aggregated selection of "products_categories" */
export type Products_Categories_Aggregate = {
  __typename?: 'products_categories_aggregate';
  aggregate?: Maybe<Products_Categories_Aggregate_Fields>;
  nodes: Array<Products_Categories>;
};

/** aggregate fields of "products_categories" */
export type Products_Categories_Aggregate_Fields = {
  __typename?: 'products_categories_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Products_Categories_Max_Fields>;
  min?: Maybe<Products_Categories_Min_Fields>;
};

/** aggregate fields of "products_categories" */
export type Products_Categories_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Products_Categories_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "products_categories" */
export type Products_Categories_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Products_Categories_Max_Order_By>;
  min?: Maybe<Products_Categories_Min_Order_By>;
};

/** input type for inserting array relation for remote table "products_categories" */
export type Products_Categories_Arr_Rel_Insert_Input = {
  data: Array<Products_Categories_Insert_Input>;
  on_conflict?: Maybe<Products_Categories_On_Conflict>;
};

/** Boolean expression to filter rows from the table "products_categories". All fields are combined with a logical 'AND'. */
export type Products_Categories_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Products_Categories_Bool_Exp>>>;
  _id?: Maybe<Uuid_Comparison_Exp>;
  _not?: Maybe<Products_Categories_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Products_Categories_Bool_Exp>>>;
  created_at?: Maybe<Timestamp_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  products?: Maybe<Products_Bool_Exp>;
  store_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "products_categories" */
export enum Products_Categories_Constraint {
  /** unique or primary key constraint */
  ProductsCategoriesPkey = 'products_categories_pkey'
}

/** input type for inserting data into table "products_categories" */
export type Products_Categories_Insert_Input = {
  _id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
  products?: Maybe<Products_Arr_Rel_Insert_Input>;
  store_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Products_Categories_Max_Fields = {
  __typename?: 'products_categories_max_fields';
  _id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
  store_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "products_categories" */
export type Products_Categories_Max_Order_By = {
  _id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  store_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Products_Categories_Min_Fields = {
  __typename?: 'products_categories_min_fields';
  _id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
  store_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "products_categories" */
export type Products_Categories_Min_Order_By = {
  _id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  store_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "products_categories" */
export type Products_Categories_Mutation_Response = {
  __typename?: 'products_categories_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Products_Categories>;
};

/** input type for inserting object relation for remote table "products_categories" */
export type Products_Categories_Obj_Rel_Insert_Input = {
  data: Products_Categories_Insert_Input;
  on_conflict?: Maybe<Products_Categories_On_Conflict>;
};

/** on conflict condition type for table "products_categories" */
export type Products_Categories_On_Conflict = {
  constraint: Products_Categories_Constraint;
  update_columns: Array<Products_Categories_Update_Column>;
  where?: Maybe<Products_Categories_Bool_Exp>;
};

/** ordering options when selecting data from "products_categories" */
export type Products_Categories_Order_By = {
  _id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  products_aggregate?: Maybe<Products_Aggregate_Order_By>;
  store_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "products_categories" */
export type Products_Categories_Pk_Columns_Input = {
  _id: Scalars['uuid'];
};

/** select columns of table "products_categories" */
export enum Products_Categories_Select_Column {
  /** column name */
  Id = '_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  StoreId = 'store_id'
}

/** input type for updating data in table "products_categories" */
export type Products_Categories_Set_Input = {
  _id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
  store_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "products_categories" */
export enum Products_Categories_Update_Column {
  /** column name */
  Id = '_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  StoreId = 'store_id'
}

/** unique or primary key constraints on table "products" */
export enum Products_Constraint {
  /** unique or primary key constraint */
  ProductsPkey = 'products_pkey'
}

/** input type for incrementing integer column in table "products" */
export type Products_Inc_Input = {
  cost?: Maybe<Scalars['numeric']>;
  price?: Maybe<Scalars['numeric']>;
  price_compared?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "products" */
export type Products_Insert_Input = {
  _id?: Maybe<Scalars['uuid']>;
  cost?: Maybe<Scalars['numeric']>;
  countries_tax?: Maybe<Countries_Taxes_Obj_Rel_Insert_Input>;
  country_tax_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
  full_name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  price_compared?: Maybe<Scalars['numeric']>;
  price_rules?: Maybe<Price_Rule_Arr_Rel_Insert_Input>;
  product_category_id?: Maybe<Scalars['uuid']>;
  products_category?: Maybe<Products_Categories_Obj_Rel_Insert_Input>;
  products_lots?: Maybe<Products_Lots_Arr_Rel_Insert_Input>;
  products_media?: Maybe<Products_Media_Arr_Rel_Insert_Input>;
  products_tags?: Maybe<Products_Tags_Arr_Rel_Insert_Input>;
  store?: Maybe<Stores_Obj_Rel_Insert_Input>;
  store_id?: Maybe<Scalars['uuid']>;
};

/** columns and relationships of "products_lots" */
export type Products_Lots = {
  __typename?: 'products_lots';
  _id: Scalars['uuid'];
  created_at?: Maybe<Scalars['timestamp']>;
  /** An array relationship */
  draft_orders_details: Array<Draft_Orders_Details>;
  /** An aggregated array relationship */
  draft_orders_details_aggregate: Draft_Orders_Details_Aggregate;
  entry_date?: Maybe<Scalars['timestamp']>;
  entry_quantity?: Maybe<Scalars['Int']>;
  expires_date?: Maybe<Scalars['timestamp']>;
  /** An array relationship */
  kardexes: Array<Kardex>;
  /** An aggregated array relationship */
  kardexes_aggregate: Kardex_Aggregate;
  /** An array relationship */
  orders_details: Array<Orders_Details>;
  /** An aggregated array relationship */
  orders_details_aggregate: Orders_Details_Aggregate;
  /** An object relationship */
  product: Products;
  product_id: Scalars['uuid'];
  product_media_id?: Maybe<Scalars['uuid']>;
  quantity?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** columns and relationships of "products_lots" */
export type Products_LotsDraft_Orders_DetailsArgs = {
  distinct_on?: Maybe<Array<Draft_Orders_Details_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Draft_Orders_Details_Order_By>>;
  where?: Maybe<Draft_Orders_Details_Bool_Exp>;
};

/** columns and relationships of "products_lots" */
export type Products_LotsDraft_Orders_Details_AggregateArgs = {
  distinct_on?: Maybe<Array<Draft_Orders_Details_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Draft_Orders_Details_Order_By>>;
  where?: Maybe<Draft_Orders_Details_Bool_Exp>;
};

/** columns and relationships of "products_lots" */
export type Products_LotsKardexesArgs = {
  distinct_on?: Maybe<Array<Kardex_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kardex_Order_By>>;
  where?: Maybe<Kardex_Bool_Exp>;
};

/** columns and relationships of "products_lots" */
export type Products_LotsKardexes_AggregateArgs = {
  distinct_on?: Maybe<Array<Kardex_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kardex_Order_By>>;
  where?: Maybe<Kardex_Bool_Exp>;
};

/** columns and relationships of "products_lots" */
export type Products_LotsOrders_DetailsArgs = {
  distinct_on?: Maybe<Array<Orders_Details_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Details_Order_By>>;
  where?: Maybe<Orders_Details_Bool_Exp>;
};

/** columns and relationships of "products_lots" */
export type Products_LotsOrders_Details_AggregateArgs = {
  distinct_on?: Maybe<Array<Orders_Details_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Details_Order_By>>;
  where?: Maybe<Orders_Details_Bool_Exp>;
};

/** aggregated selection of "products_lots" */
export type Products_Lots_Aggregate = {
  __typename?: 'products_lots_aggregate';
  aggregate?: Maybe<Products_Lots_Aggregate_Fields>;
  nodes: Array<Products_Lots>;
};

/** aggregate fields of "products_lots" */
export type Products_Lots_Aggregate_Fields = {
  __typename?: 'products_lots_aggregate_fields';
  avg?: Maybe<Products_Lots_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Products_Lots_Max_Fields>;
  min?: Maybe<Products_Lots_Min_Fields>;
  stddev?: Maybe<Products_Lots_Stddev_Fields>;
  stddev_pop?: Maybe<Products_Lots_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Products_Lots_Stddev_Samp_Fields>;
  sum?: Maybe<Products_Lots_Sum_Fields>;
  var_pop?: Maybe<Products_Lots_Var_Pop_Fields>;
  var_samp?: Maybe<Products_Lots_Var_Samp_Fields>;
  variance?: Maybe<Products_Lots_Variance_Fields>;
};

/** aggregate fields of "products_lots" */
export type Products_Lots_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Products_Lots_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "products_lots" */
export type Products_Lots_Aggregate_Order_By = {
  avg?: Maybe<Products_Lots_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Products_Lots_Max_Order_By>;
  min?: Maybe<Products_Lots_Min_Order_By>;
  stddev?: Maybe<Products_Lots_Stddev_Order_By>;
  stddev_pop?: Maybe<Products_Lots_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Products_Lots_Stddev_Samp_Order_By>;
  sum?: Maybe<Products_Lots_Sum_Order_By>;
  var_pop?: Maybe<Products_Lots_Var_Pop_Order_By>;
  var_samp?: Maybe<Products_Lots_Var_Samp_Order_By>;
  variance?: Maybe<Products_Lots_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "products_lots" */
export type Products_Lots_Arr_Rel_Insert_Input = {
  data: Array<Products_Lots_Insert_Input>;
  on_conflict?: Maybe<Products_Lots_On_Conflict>;
};

/** aggregate avg on columns */
export type Products_Lots_Avg_Fields = {
  __typename?: 'products_lots_avg_fields';
  entry_quantity?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "products_lots" */
export type Products_Lots_Avg_Order_By = {
  entry_quantity?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "products_lots". All fields are combined with a logical 'AND'. */
export type Products_Lots_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Products_Lots_Bool_Exp>>>;
  _id?: Maybe<Uuid_Comparison_Exp>;
  _not?: Maybe<Products_Lots_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Products_Lots_Bool_Exp>>>;
  created_at?: Maybe<Timestamp_Comparison_Exp>;
  draft_orders_details?: Maybe<Draft_Orders_Details_Bool_Exp>;
  entry_date?: Maybe<Timestamp_Comparison_Exp>;
  entry_quantity?: Maybe<Int_Comparison_Exp>;
  expires_date?: Maybe<Timestamp_Comparison_Exp>;
  kardexes?: Maybe<Kardex_Bool_Exp>;
  orders_details?: Maybe<Orders_Details_Bool_Exp>;
  product?: Maybe<Products_Bool_Exp>;
  product_id?: Maybe<Uuid_Comparison_Exp>;
  product_media_id?: Maybe<Uuid_Comparison_Exp>;
  quantity?: Maybe<Int_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "products_lots" */
export enum Products_Lots_Constraint {
  /** unique or primary key constraint */
  ProductsLotsPkey = 'products_lots_pkey'
}

/** input type for incrementing integer column in table "products_lots" */
export type Products_Lots_Inc_Input = {
  entry_quantity?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "products_lots" */
export type Products_Lots_Insert_Input = {
  _id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  draft_orders_details?: Maybe<Draft_Orders_Details_Arr_Rel_Insert_Input>;
  entry_date?: Maybe<Scalars['timestamp']>;
  entry_quantity?: Maybe<Scalars['Int']>;
  expires_date?: Maybe<Scalars['timestamp']>;
  kardexes?: Maybe<Kardex_Arr_Rel_Insert_Input>;
  orders_details?: Maybe<Orders_Details_Arr_Rel_Insert_Input>;
  product?: Maybe<Products_Obj_Rel_Insert_Input>;
  product_id?: Maybe<Scalars['uuid']>;
  product_media_id?: Maybe<Scalars['uuid']>;
  quantity?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Products_Lots_Max_Fields = {
  __typename?: 'products_lots_max_fields';
  _id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  entry_date?: Maybe<Scalars['timestamp']>;
  entry_quantity?: Maybe<Scalars['Int']>;
  expires_date?: Maybe<Scalars['timestamp']>;
  product_id?: Maybe<Scalars['uuid']>;
  product_media_id?: Maybe<Scalars['uuid']>;
  quantity?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "products_lots" */
export type Products_Lots_Max_Order_By = {
  _id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  entry_date?: Maybe<Order_By>;
  entry_quantity?: Maybe<Order_By>;
  expires_date?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  product_media_id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Products_Lots_Min_Fields = {
  __typename?: 'products_lots_min_fields';
  _id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  entry_date?: Maybe<Scalars['timestamp']>;
  entry_quantity?: Maybe<Scalars['Int']>;
  expires_date?: Maybe<Scalars['timestamp']>;
  product_id?: Maybe<Scalars['uuid']>;
  product_media_id?: Maybe<Scalars['uuid']>;
  quantity?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "products_lots" */
export type Products_Lots_Min_Order_By = {
  _id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  entry_date?: Maybe<Order_By>;
  entry_quantity?: Maybe<Order_By>;
  expires_date?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  product_media_id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** response of any mutation on the table "products_lots" */
export type Products_Lots_Mutation_Response = {
  __typename?: 'products_lots_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Products_Lots>;
};

/** input type for inserting object relation for remote table "products_lots" */
export type Products_Lots_Obj_Rel_Insert_Input = {
  data: Products_Lots_Insert_Input;
  on_conflict?: Maybe<Products_Lots_On_Conflict>;
};

/** on conflict condition type for table "products_lots" */
export type Products_Lots_On_Conflict = {
  constraint: Products_Lots_Constraint;
  update_columns: Array<Products_Lots_Update_Column>;
  where?: Maybe<Products_Lots_Bool_Exp>;
};

/** ordering options when selecting data from "products_lots" */
export type Products_Lots_Order_By = {
  _id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  draft_orders_details_aggregate?: Maybe<Draft_Orders_Details_Aggregate_Order_By>;
  entry_date?: Maybe<Order_By>;
  entry_quantity?: Maybe<Order_By>;
  expires_date?: Maybe<Order_By>;
  kardexes_aggregate?: Maybe<Kardex_Aggregate_Order_By>;
  orders_details_aggregate?: Maybe<Orders_Details_Aggregate_Order_By>;
  product?: Maybe<Products_Order_By>;
  product_id?: Maybe<Order_By>;
  product_media_id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** primary key columns input for table: "products_lots" */
export type Products_Lots_Pk_Columns_Input = {
  _id: Scalars['uuid'];
};

/** select columns of table "products_lots" */
export enum Products_Lots_Select_Column {
  /** column name */
  Id = '_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EntryDate = 'entry_date',
  /** column name */
  EntryQuantity = 'entry_quantity',
  /** column name */
  ExpiresDate = 'expires_date',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  ProductMediaId = 'product_media_id',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "products_lots" */
export type Products_Lots_Set_Input = {
  _id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  entry_date?: Maybe<Scalars['timestamp']>;
  entry_quantity?: Maybe<Scalars['Int']>;
  expires_date?: Maybe<Scalars['timestamp']>;
  product_id?: Maybe<Scalars['uuid']>;
  product_media_id?: Maybe<Scalars['uuid']>;
  quantity?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Products_Lots_Stddev_Fields = {
  __typename?: 'products_lots_stddev_fields';
  entry_quantity?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "products_lots" */
export type Products_Lots_Stddev_Order_By = {
  entry_quantity?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Products_Lots_Stddev_Pop_Fields = {
  __typename?: 'products_lots_stddev_pop_fields';
  entry_quantity?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "products_lots" */
export type Products_Lots_Stddev_Pop_Order_By = {
  entry_quantity?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Products_Lots_Stddev_Samp_Fields = {
  __typename?: 'products_lots_stddev_samp_fields';
  entry_quantity?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "products_lots" */
export type Products_Lots_Stddev_Samp_Order_By = {
  entry_quantity?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Products_Lots_Sum_Fields = {
  __typename?: 'products_lots_sum_fields';
  entry_quantity?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "products_lots" */
export type Products_Lots_Sum_Order_By = {
  entry_quantity?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** update columns of table "products_lots" */
export enum Products_Lots_Update_Column {
  /** column name */
  Id = '_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EntryDate = 'entry_date',
  /** column name */
  EntryQuantity = 'entry_quantity',
  /** column name */
  ExpiresDate = 'expires_date',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  ProductMediaId = 'product_media_id',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  Title = 'title'
}

/** aggregate var_pop on columns */
export type Products_Lots_Var_Pop_Fields = {
  __typename?: 'products_lots_var_pop_fields';
  entry_quantity?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "products_lots" */
export type Products_Lots_Var_Pop_Order_By = {
  entry_quantity?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Products_Lots_Var_Samp_Fields = {
  __typename?: 'products_lots_var_samp_fields';
  entry_quantity?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "products_lots" */
export type Products_Lots_Var_Samp_Order_By = {
  entry_quantity?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Products_Lots_Variance_Fields = {
  __typename?: 'products_lots_variance_fields';
  entry_quantity?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "products_lots" */
export type Products_Lots_Variance_Order_By = {
  entry_quantity?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** aggregate max on columns */
export type Products_Max_Fields = {
  __typename?: 'products_max_fields';
  _id?: Maybe<Scalars['uuid']>;
  cost?: Maybe<Scalars['numeric']>;
  country_tax_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
  full_name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  price_compared?: Maybe<Scalars['numeric']>;
  product_category_id?: Maybe<Scalars['uuid']>;
  store_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "products" */
export type Products_Max_Order_By = {
  _id?: Maybe<Order_By>;
  cost?: Maybe<Order_By>;
  country_tax_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  full_name?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  price_compared?: Maybe<Order_By>;
  product_category_id?: Maybe<Order_By>;
  store_id?: Maybe<Order_By>;
};

/** columns and relationships of "products_media" */
export type Products_Media = {
  __typename?: 'products_media';
  _id: Scalars['uuid'];
  created_at?: Maybe<Scalars['timestamp']>;
  path?: Maybe<Scalars['String']>;
  primary_media?: Maybe<Scalars['Boolean']>;
  /** An object relationship */
  product: Products;
  product_id: Scalars['uuid'];
};

/** aggregated selection of "products_media" */
export type Products_Media_Aggregate = {
  __typename?: 'products_media_aggregate';
  aggregate?: Maybe<Products_Media_Aggregate_Fields>;
  nodes: Array<Products_Media>;
};

/** aggregate fields of "products_media" */
export type Products_Media_Aggregate_Fields = {
  __typename?: 'products_media_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Products_Media_Max_Fields>;
  min?: Maybe<Products_Media_Min_Fields>;
};

/** aggregate fields of "products_media" */
export type Products_Media_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Products_Media_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "products_media" */
export type Products_Media_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Products_Media_Max_Order_By>;
  min?: Maybe<Products_Media_Min_Order_By>;
};

/** input type for inserting array relation for remote table "products_media" */
export type Products_Media_Arr_Rel_Insert_Input = {
  data: Array<Products_Media_Insert_Input>;
  on_conflict?: Maybe<Products_Media_On_Conflict>;
};

/** Boolean expression to filter rows from the table "products_media". All fields are combined with a logical 'AND'. */
export type Products_Media_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Products_Media_Bool_Exp>>>;
  _id?: Maybe<Uuid_Comparison_Exp>;
  _not?: Maybe<Products_Media_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Products_Media_Bool_Exp>>>;
  created_at?: Maybe<Timestamp_Comparison_Exp>;
  path?: Maybe<String_Comparison_Exp>;
  primary_media?: Maybe<Boolean_Comparison_Exp>;
  product?: Maybe<Products_Bool_Exp>;
  product_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "products_media" */
export enum Products_Media_Constraint {
  /** unique or primary key constraint */
  ProductsMediaPkey = 'products_media_pkey'
}

/** input type for inserting data into table "products_media" */
export type Products_Media_Insert_Input = {
  _id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  path?: Maybe<Scalars['String']>;
  primary_media?: Maybe<Scalars['Boolean']>;
  product?: Maybe<Products_Obj_Rel_Insert_Input>;
  product_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Products_Media_Max_Fields = {
  __typename?: 'products_media_max_fields';
  _id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  path?: Maybe<Scalars['String']>;
  product_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "products_media" */
export type Products_Media_Max_Order_By = {
  _id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  path?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Products_Media_Min_Fields = {
  __typename?: 'products_media_min_fields';
  _id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  path?: Maybe<Scalars['String']>;
  product_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "products_media" */
export type Products_Media_Min_Order_By = {
  _id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  path?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "products_media" */
export type Products_Media_Mutation_Response = {
  __typename?: 'products_media_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Products_Media>;
};

/** input type for inserting object relation for remote table "products_media" */
export type Products_Media_Obj_Rel_Insert_Input = {
  data: Products_Media_Insert_Input;
  on_conflict?: Maybe<Products_Media_On_Conflict>;
};

/** on conflict condition type for table "products_media" */
export type Products_Media_On_Conflict = {
  constraint: Products_Media_Constraint;
  update_columns: Array<Products_Media_Update_Column>;
  where?: Maybe<Products_Media_Bool_Exp>;
};

/** ordering options when selecting data from "products_media" */
export type Products_Media_Order_By = {
  _id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  path?: Maybe<Order_By>;
  primary_media?: Maybe<Order_By>;
  product?: Maybe<Products_Order_By>;
  product_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "products_media" */
export type Products_Media_Pk_Columns_Input = {
  _id: Scalars['uuid'];
};

/** select columns of table "products_media" */
export enum Products_Media_Select_Column {
  /** column name */
  Id = '_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Path = 'path',
  /** column name */
  PrimaryMedia = 'primary_media',
  /** column name */
  ProductId = 'product_id'
}

/** input type for updating data in table "products_media" */
export type Products_Media_Set_Input = {
  _id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  path?: Maybe<Scalars['String']>;
  primary_media?: Maybe<Scalars['Boolean']>;
  product_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "products_media" */
export enum Products_Media_Update_Column {
  /** column name */
  Id = '_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Path = 'path',
  /** column name */
  PrimaryMedia = 'primary_media',
  /** column name */
  ProductId = 'product_id'
}

/** aggregate min on columns */
export type Products_Min_Fields = {
  __typename?: 'products_min_fields';
  _id?: Maybe<Scalars['uuid']>;
  cost?: Maybe<Scalars['numeric']>;
  country_tax_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
  full_name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  price_compared?: Maybe<Scalars['numeric']>;
  product_category_id?: Maybe<Scalars['uuid']>;
  store_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "products" */
export type Products_Min_Order_By = {
  _id?: Maybe<Order_By>;
  cost?: Maybe<Order_By>;
  country_tax_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  full_name?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  price_compared?: Maybe<Order_By>;
  product_category_id?: Maybe<Order_By>;
  store_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "products" */
export type Products_Mutation_Response = {
  __typename?: 'products_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Products>;
};

/** input type for inserting object relation for remote table "products" */
export type Products_Obj_Rel_Insert_Input = {
  data: Products_Insert_Input;
  on_conflict?: Maybe<Products_On_Conflict>;
};

/** on conflict condition type for table "products" */
export type Products_On_Conflict = {
  constraint: Products_Constraint;
  update_columns: Array<Products_Update_Column>;
  where?: Maybe<Products_Bool_Exp>;
};

/** ordering options when selecting data from "products" */
export type Products_Order_By = {
  _id?: Maybe<Order_By>;
  cost?: Maybe<Order_By>;
  countries_tax?: Maybe<Countries_Taxes_Order_By>;
  country_tax_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  full_name?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  price_compared?: Maybe<Order_By>;
  price_rules_aggregate?: Maybe<Price_Rule_Aggregate_Order_By>;
  product_category_id?: Maybe<Order_By>;
  products_category?: Maybe<Products_Categories_Order_By>;
  products_lots_aggregate?: Maybe<Products_Lots_Aggregate_Order_By>;
  products_media_aggregate?: Maybe<Products_Media_Aggregate_Order_By>;
  products_tags_aggregate?: Maybe<Products_Tags_Aggregate_Order_By>;
  store?: Maybe<Stores_Order_By>;
  store_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "products" */
export type Products_Pk_Columns_Input = {
  _id: Scalars['uuid'];
};

/** select columns of table "products" */
export enum Products_Select_Column {
  /** column name */
  Id = '_id',
  /** column name */
  Cost = 'cost',
  /** column name */
  CountryTaxId = 'country_tax_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  FullName = 'full_name',
  /** column name */
  Price = 'price',
  /** column name */
  PriceCompared = 'price_compared',
  /** column name */
  ProductCategoryId = 'product_category_id',
  /** column name */
  StoreId = 'store_id'
}

/** input type for updating data in table "products" */
export type Products_Set_Input = {
  _id?: Maybe<Scalars['uuid']>;
  cost?: Maybe<Scalars['numeric']>;
  country_tax_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
  full_name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  price_compared?: Maybe<Scalars['numeric']>;
  product_category_id?: Maybe<Scalars['uuid']>;
  store_id?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Products_Stddev_Fields = {
  __typename?: 'products_stddev_fields';
  cost?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  price_compared?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "products" */
export type Products_Stddev_Order_By = {
  cost?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  price_compared?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Products_Stddev_Pop_Fields = {
  __typename?: 'products_stddev_pop_fields';
  cost?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  price_compared?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "products" */
export type Products_Stddev_Pop_Order_By = {
  cost?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  price_compared?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Products_Stddev_Samp_Fields = {
  __typename?: 'products_stddev_samp_fields';
  cost?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  price_compared?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "products" */
export type Products_Stddev_Samp_Order_By = {
  cost?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  price_compared?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Products_Sum_Fields = {
  __typename?: 'products_sum_fields';
  cost?: Maybe<Scalars['numeric']>;
  price?: Maybe<Scalars['numeric']>;
  price_compared?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "products" */
export type Products_Sum_Order_By = {
  cost?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  price_compared?: Maybe<Order_By>;
};

/** columns and relationships of "products_tags" */
export type Products_Tags = {
  __typename?: 'products_tags';
  _id: Scalars['uuid'];
  created_at?: Maybe<Scalars['timestamp']>;
  /** An object relationship */
  product: Products;
  product_id: Scalars['uuid'];
  tag?: Maybe<Scalars['String']>;
};

/** aggregated selection of "products_tags" */
export type Products_Tags_Aggregate = {
  __typename?: 'products_tags_aggregate';
  aggregate?: Maybe<Products_Tags_Aggregate_Fields>;
  nodes: Array<Products_Tags>;
};

/** aggregate fields of "products_tags" */
export type Products_Tags_Aggregate_Fields = {
  __typename?: 'products_tags_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Products_Tags_Max_Fields>;
  min?: Maybe<Products_Tags_Min_Fields>;
};

/** aggregate fields of "products_tags" */
export type Products_Tags_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Products_Tags_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "products_tags" */
export type Products_Tags_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Products_Tags_Max_Order_By>;
  min?: Maybe<Products_Tags_Min_Order_By>;
};

/** input type for inserting array relation for remote table "products_tags" */
export type Products_Tags_Arr_Rel_Insert_Input = {
  data: Array<Products_Tags_Insert_Input>;
  on_conflict?: Maybe<Products_Tags_On_Conflict>;
};

/** Boolean expression to filter rows from the table "products_tags". All fields are combined with a logical 'AND'. */
export type Products_Tags_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Products_Tags_Bool_Exp>>>;
  _id?: Maybe<Uuid_Comparison_Exp>;
  _not?: Maybe<Products_Tags_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Products_Tags_Bool_Exp>>>;
  created_at?: Maybe<Timestamp_Comparison_Exp>;
  product?: Maybe<Products_Bool_Exp>;
  product_id?: Maybe<Uuid_Comparison_Exp>;
  tag?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "products_tags" */
export enum Products_Tags_Constraint {
  /** unique or primary key constraint */
  ProductsTagsPkey = 'products_tags_pkey'
}

/** input type for inserting data into table "products_tags" */
export type Products_Tags_Insert_Input = {
  _id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  product?: Maybe<Products_Obj_Rel_Insert_Input>;
  product_id?: Maybe<Scalars['uuid']>;
  tag?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Products_Tags_Max_Fields = {
  __typename?: 'products_tags_max_fields';
  _id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  product_id?: Maybe<Scalars['uuid']>;
  tag?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "products_tags" */
export type Products_Tags_Max_Order_By = {
  _id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  tag?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Products_Tags_Min_Fields = {
  __typename?: 'products_tags_min_fields';
  _id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  product_id?: Maybe<Scalars['uuid']>;
  tag?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "products_tags" */
export type Products_Tags_Min_Order_By = {
  _id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  tag?: Maybe<Order_By>;
};

/** response of any mutation on the table "products_tags" */
export type Products_Tags_Mutation_Response = {
  __typename?: 'products_tags_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Products_Tags>;
};

/** input type for inserting object relation for remote table "products_tags" */
export type Products_Tags_Obj_Rel_Insert_Input = {
  data: Products_Tags_Insert_Input;
  on_conflict?: Maybe<Products_Tags_On_Conflict>;
};

/** on conflict condition type for table "products_tags" */
export type Products_Tags_On_Conflict = {
  constraint: Products_Tags_Constraint;
  update_columns: Array<Products_Tags_Update_Column>;
  where?: Maybe<Products_Tags_Bool_Exp>;
};

/** ordering options when selecting data from "products_tags" */
export type Products_Tags_Order_By = {
  _id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  product?: Maybe<Products_Order_By>;
  product_id?: Maybe<Order_By>;
  tag?: Maybe<Order_By>;
};

/** primary key columns input for table: "products_tags" */
export type Products_Tags_Pk_Columns_Input = {
  _id: Scalars['uuid'];
};

/** select columns of table "products_tags" */
export enum Products_Tags_Select_Column {
  /** column name */
  Id = '_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  Tag = 'tag'
}

/** input type for updating data in table "products_tags" */
export type Products_Tags_Set_Input = {
  _id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  product_id?: Maybe<Scalars['uuid']>;
  tag?: Maybe<Scalars['String']>;
};

/** update columns of table "products_tags" */
export enum Products_Tags_Update_Column {
  /** column name */
  Id = '_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  Tag = 'tag'
}

/** update columns of table "products" */
export enum Products_Update_Column {
  /** column name */
  Id = '_id',
  /** column name */
  Cost = 'cost',
  /** column name */
  CountryTaxId = 'country_tax_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  FullName = 'full_name',
  /** column name */
  Price = 'price',
  /** column name */
  PriceCompared = 'price_compared',
  /** column name */
  ProductCategoryId = 'product_category_id',
  /** column name */
  StoreId = 'store_id'
}

/** aggregate var_pop on columns */
export type Products_Var_Pop_Fields = {
  __typename?: 'products_var_pop_fields';
  cost?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  price_compared?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "products" */
export type Products_Var_Pop_Order_By = {
  cost?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  price_compared?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Products_Var_Samp_Fields = {
  __typename?: 'products_var_samp_fields';
  cost?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  price_compared?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "products" */
export type Products_Var_Samp_Order_By = {
  cost?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  price_compared?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Products_Variance_Fields = {
  __typename?: 'products_variance_fields';
  cost?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  price_compared?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "products" */
export type Products_Variance_Order_By = {
  cost?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  price_compared?: Maybe<Order_By>;
};

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "cities" */
  cities: Array<Cities>;
  /** fetch aggregated fields from the table: "cities" */
  cities_aggregate: Cities_Aggregate;
  /** fetch data from the table: "cities" using primary key columns */
  cities_by_pk?: Maybe<Cities>;
  /** fetch data from the table: "countries" */
  countries: Array<Countries>;
  /** fetch aggregated fields from the table: "countries" */
  countries_aggregate: Countries_Aggregate;
  /** fetch data from the table: "countries" using primary key columns */
  countries_by_pk?: Maybe<Countries>;
  /** fetch data from the table: "countries_currency" */
  countries_currency: Array<Countries_Currency>;
  /** fetch aggregated fields from the table: "countries_currency" */
  countries_currency_aggregate: Countries_Currency_Aggregate;
  /** fetch data from the table: "countries_currency" using primary key columns */
  countries_currency_by_pk?: Maybe<Countries_Currency>;
  /** fetch data from the table: "countries_taxes" */
  countries_taxes: Array<Countries_Taxes>;
  /** fetch aggregated fields from the table: "countries_taxes" */
  countries_taxes_aggregate: Countries_Taxes_Aggregate;
  /** fetch data from the table: "countries_taxes" using primary key columns */
  countries_taxes_by_pk?: Maybe<Countries_Taxes>;
  /** fetch data from the table: "customers" */
  customers: Array<Customers>;
  /** fetch data from the table: "customers_address" */
  customers_address: Array<Customers_Address>;
  /** fetch aggregated fields from the table: "customers_address" */
  customers_address_aggregate: Customers_Address_Aggregate;
  /** fetch data from the table: "customers_address" using primary key columns */
  customers_address_by_pk?: Maybe<Customers_Address>;
  /** fetch aggregated fields from the table: "customers" */
  customers_aggregate: Customers_Aggregate;
  /** fetch data from the table: "customers" using primary key columns */
  customers_by_pk?: Maybe<Customers>;
  /** fetch data from the table: "customers_tags" */
  customers_tags: Array<Customers_Tags>;
  /** fetch aggregated fields from the table: "customers_tags" */
  customers_tags_aggregate: Customers_Tags_Aggregate;
  /** fetch data from the table: "customers_tags" using primary key columns */
  customers_tags_by_pk?: Maybe<Customers_Tags>;
  /** fetch data from the table: "draft_orders" */
  draft_orders: Array<Draft_Orders>;
  /** fetch aggregated fields from the table: "draft_orders" */
  draft_orders_aggregate: Draft_Orders_Aggregate;
  /** fetch data from the table: "draft_orders" using primary key columns */
  draft_orders_by_pk?: Maybe<Draft_Orders>;
  /** fetch data from the table: "draft_orders_details" */
  draft_orders_details: Array<Draft_Orders_Details>;
  /** fetch aggregated fields from the table: "draft_orders_details" */
  draft_orders_details_aggregate: Draft_Orders_Details_Aggregate;
  /** fetch data from the table: "draft_orders_details" using primary key columns */
  draft_orders_details_by_pk?: Maybe<Draft_Orders_Details>;
  /** fetch data from the table: "kardex" */
  kardex: Array<Kardex>;
  /** fetch aggregated fields from the table: "kardex" */
  kardex_aggregate: Kardex_Aggregate;
  /** fetch data from the table: "kardex" using primary key columns */
  kardex_by_pk?: Maybe<Kardex>;
  /** fetch data from the table: "orders" */
  orders: Array<Orders>;
  /** fetch aggregated fields from the table: "orders" */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  /** fetch data from the table: "orders_details" */
  orders_details: Array<Orders_Details>;
  /** fetch aggregated fields from the table: "orders_details" */
  orders_details_aggregate: Orders_Details_Aggregate;
  /** fetch data from the table: "orders_details" using primary key columns */
  orders_details_by_pk?: Maybe<Orders_Details>;
  /** fetch data from the table: "price_rule" */
  price_rule: Array<Price_Rule>;
  /** fetch aggregated fields from the table: "price_rule" */
  price_rule_aggregate: Price_Rule_Aggregate;
  /** fetch data from the table: "price_rule" using primary key columns */
  price_rule_by_pk?: Maybe<Price_Rule>;
  /** fetch data from the table: "products" */
  products: Array<Products>;
  /** fetch aggregated fields from the table: "products" */
  products_aggregate: Products_Aggregate;
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>;
  /** fetch data from the table: "products_categories" */
  products_categories: Array<Products_Categories>;
  /** fetch aggregated fields from the table: "products_categories" */
  products_categories_aggregate: Products_Categories_Aggregate;
  /** fetch data from the table: "products_categories" using primary key columns */
  products_categories_by_pk?: Maybe<Products_Categories>;
  /** fetch data from the table: "products_lots" */
  products_lots: Array<Products_Lots>;
  /** fetch aggregated fields from the table: "products_lots" */
  products_lots_aggregate: Products_Lots_Aggregate;
  /** fetch data from the table: "products_lots" using primary key columns */
  products_lots_by_pk?: Maybe<Products_Lots>;
  /** fetch data from the table: "products_media" */
  products_media: Array<Products_Media>;
  /** fetch aggregated fields from the table: "products_media" */
  products_media_aggregate: Products_Media_Aggregate;
  /** fetch data from the table: "products_media" using primary key columns */
  products_media_by_pk?: Maybe<Products_Media>;
  /** fetch data from the table: "products_tags" */
  products_tags: Array<Products_Tags>;
  /** fetch aggregated fields from the table: "products_tags" */
  products_tags_aggregate: Products_Tags_Aggregate;
  /** fetch data from the table: "products_tags" using primary key columns */
  products_tags_by_pk?: Maybe<Products_Tags>;
  /** fetch data from the table: "stores" */
  stores: Array<Stores>;
  /** fetch aggregated fields from the table: "stores" */
  stores_aggregate: Stores_Aggregate;
  /** fetch data from the table: "stores" using primary key columns */
  stores_by_pk?: Maybe<Stores>;
  /** fetch data from the table: "stores_categories" */
  stores_categories: Array<Stores_Categories>;
  /** fetch aggregated fields from the table: "stores_categories" */
  stores_categories_aggregate: Stores_Categories_Aggregate;
  /** fetch data from the table: "stores_categories" using primary key columns */
  stores_categories_by_pk?: Maybe<Stores_Categories>;
  /** fetch data from the table: "types_movements" */
  types_movements: Array<Types_Movements>;
  /** fetch aggregated fields from the table: "types_movements" */
  types_movements_aggregate: Types_Movements_Aggregate;
  /** fetch data from the table: "types_movements" using primary key columns */
  types_movements_by_pk?: Maybe<Types_Movements>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};

/** query root */
export type Query_RootCitiesArgs = {
  distinct_on?: Maybe<Array<Cities_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Cities_Order_By>>;
  where?: Maybe<Cities_Bool_Exp>;
};

/** query root */
export type Query_RootCities_AggregateArgs = {
  distinct_on?: Maybe<Array<Cities_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Cities_Order_By>>;
  where?: Maybe<Cities_Bool_Exp>;
};

/** query root */
export type Query_RootCities_By_PkArgs = {
  _id: Scalars['uuid'];
};

/** query root */
export type Query_RootCountriesArgs = {
  distinct_on?: Maybe<Array<Countries_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Countries_Order_By>>;
  where?: Maybe<Countries_Bool_Exp>;
};

/** query root */
export type Query_RootCountries_AggregateArgs = {
  distinct_on?: Maybe<Array<Countries_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Countries_Order_By>>;
  where?: Maybe<Countries_Bool_Exp>;
};

/** query root */
export type Query_RootCountries_By_PkArgs = {
  _id: Scalars['uuid'];
};

/** query root */
export type Query_RootCountries_CurrencyArgs = {
  distinct_on?: Maybe<Array<Countries_Currency_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Countries_Currency_Order_By>>;
  where?: Maybe<Countries_Currency_Bool_Exp>;
};

/** query root */
export type Query_RootCountries_Currency_AggregateArgs = {
  distinct_on?: Maybe<Array<Countries_Currency_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Countries_Currency_Order_By>>;
  where?: Maybe<Countries_Currency_Bool_Exp>;
};

/** query root */
export type Query_RootCountries_Currency_By_PkArgs = {
  _id: Scalars['uuid'];
};

/** query root */
export type Query_RootCountries_TaxesArgs = {
  distinct_on?: Maybe<Array<Countries_Taxes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Countries_Taxes_Order_By>>;
  where?: Maybe<Countries_Taxes_Bool_Exp>;
};

/** query root */
export type Query_RootCountries_Taxes_AggregateArgs = {
  distinct_on?: Maybe<Array<Countries_Taxes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Countries_Taxes_Order_By>>;
  where?: Maybe<Countries_Taxes_Bool_Exp>;
};

/** query root */
export type Query_RootCountries_Taxes_By_PkArgs = {
  _id: Scalars['uuid'];
};

/** query root */
export type Query_RootCustomersArgs = {
  distinct_on?: Maybe<Array<Customers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Customers_Order_By>>;
  where?: Maybe<Customers_Bool_Exp>;
};

/** query root */
export type Query_RootCustomers_AddressArgs = {
  distinct_on?: Maybe<Array<Customers_Address_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Customers_Address_Order_By>>;
  where?: Maybe<Customers_Address_Bool_Exp>;
};

/** query root */
export type Query_RootCustomers_Address_AggregateArgs = {
  distinct_on?: Maybe<Array<Customers_Address_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Customers_Address_Order_By>>;
  where?: Maybe<Customers_Address_Bool_Exp>;
};

/** query root */
export type Query_RootCustomers_Address_By_PkArgs = {
  _id: Scalars['uuid'];
};

/** query root */
export type Query_RootCustomers_AggregateArgs = {
  distinct_on?: Maybe<Array<Customers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Customers_Order_By>>;
  where?: Maybe<Customers_Bool_Exp>;
};

/** query root */
export type Query_RootCustomers_By_PkArgs = {
  _id: Scalars['uuid'];
};

/** query root */
export type Query_RootCustomers_TagsArgs = {
  distinct_on?: Maybe<Array<Customers_Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Customers_Tags_Order_By>>;
  where?: Maybe<Customers_Tags_Bool_Exp>;
};

/** query root */
export type Query_RootCustomers_Tags_AggregateArgs = {
  distinct_on?: Maybe<Array<Customers_Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Customers_Tags_Order_By>>;
  where?: Maybe<Customers_Tags_Bool_Exp>;
};

/** query root */
export type Query_RootCustomers_Tags_By_PkArgs = {
  _id: Scalars['uuid'];
};

/** query root */
export type Query_RootDraft_OrdersArgs = {
  distinct_on?: Maybe<Array<Draft_Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Draft_Orders_Order_By>>;
  where?: Maybe<Draft_Orders_Bool_Exp>;
};

/** query root */
export type Query_RootDraft_Orders_AggregateArgs = {
  distinct_on?: Maybe<Array<Draft_Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Draft_Orders_Order_By>>;
  where?: Maybe<Draft_Orders_Bool_Exp>;
};

/** query root */
export type Query_RootDraft_Orders_By_PkArgs = {
  _id: Scalars['uuid'];
};

/** query root */
export type Query_RootDraft_Orders_DetailsArgs = {
  distinct_on?: Maybe<Array<Draft_Orders_Details_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Draft_Orders_Details_Order_By>>;
  where?: Maybe<Draft_Orders_Details_Bool_Exp>;
};

/** query root */
export type Query_RootDraft_Orders_Details_AggregateArgs = {
  distinct_on?: Maybe<Array<Draft_Orders_Details_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Draft_Orders_Details_Order_By>>;
  where?: Maybe<Draft_Orders_Details_Bool_Exp>;
};

/** query root */
export type Query_RootDraft_Orders_Details_By_PkArgs = {
  _id: Scalars['uuid'];
};

/** query root */
export type Query_RootKardexArgs = {
  distinct_on?: Maybe<Array<Kardex_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kardex_Order_By>>;
  where?: Maybe<Kardex_Bool_Exp>;
};

/** query root */
export type Query_RootKardex_AggregateArgs = {
  distinct_on?: Maybe<Array<Kardex_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kardex_Order_By>>;
  where?: Maybe<Kardex_Bool_Exp>;
};

/** query root */
export type Query_RootKardex_By_PkArgs = {
  _id: Scalars['uuid'];
};

/** query root */
export type Query_RootOrdersArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};

/** query root */
export type Query_RootOrders_AggregateArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};

/** query root */
export type Query_RootOrders_By_PkArgs = {
  _id: Scalars['uuid'];
};

/** query root */
export type Query_RootOrders_DetailsArgs = {
  distinct_on?: Maybe<Array<Orders_Details_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Details_Order_By>>;
  where?: Maybe<Orders_Details_Bool_Exp>;
};

/** query root */
export type Query_RootOrders_Details_AggregateArgs = {
  distinct_on?: Maybe<Array<Orders_Details_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Details_Order_By>>;
  where?: Maybe<Orders_Details_Bool_Exp>;
};

/** query root */
export type Query_RootOrders_Details_By_PkArgs = {
  _id: Scalars['uuid'];
};

/** query root */
export type Query_RootPrice_RuleArgs = {
  distinct_on?: Maybe<Array<Price_Rule_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Price_Rule_Order_By>>;
  where?: Maybe<Price_Rule_Bool_Exp>;
};

/** query root */
export type Query_RootPrice_Rule_AggregateArgs = {
  distinct_on?: Maybe<Array<Price_Rule_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Price_Rule_Order_By>>;
  where?: Maybe<Price_Rule_Bool_Exp>;
};

/** query root */
export type Query_RootPrice_Rule_By_PkArgs = {
  _id: Scalars['uuid'];
};

/** query root */
export type Query_RootProductsArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};

/** query root */
export type Query_RootProducts_AggregateArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};

/** query root */
export type Query_RootProducts_By_PkArgs = {
  _id: Scalars['uuid'];
};

/** query root */
export type Query_RootProducts_CategoriesArgs = {
  distinct_on?: Maybe<Array<Products_Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Categories_Order_By>>;
  where?: Maybe<Products_Categories_Bool_Exp>;
};

/** query root */
export type Query_RootProducts_Categories_AggregateArgs = {
  distinct_on?: Maybe<Array<Products_Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Categories_Order_By>>;
  where?: Maybe<Products_Categories_Bool_Exp>;
};

/** query root */
export type Query_RootProducts_Categories_By_PkArgs = {
  _id: Scalars['uuid'];
};

/** query root */
export type Query_RootProducts_LotsArgs = {
  distinct_on?: Maybe<Array<Products_Lots_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Lots_Order_By>>;
  where?: Maybe<Products_Lots_Bool_Exp>;
};

/** query root */
export type Query_RootProducts_Lots_AggregateArgs = {
  distinct_on?: Maybe<Array<Products_Lots_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Lots_Order_By>>;
  where?: Maybe<Products_Lots_Bool_Exp>;
};

/** query root */
export type Query_RootProducts_Lots_By_PkArgs = {
  _id: Scalars['uuid'];
};

/** query root */
export type Query_RootProducts_MediaArgs = {
  distinct_on?: Maybe<Array<Products_Media_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Media_Order_By>>;
  where?: Maybe<Products_Media_Bool_Exp>;
};

/** query root */
export type Query_RootProducts_Media_AggregateArgs = {
  distinct_on?: Maybe<Array<Products_Media_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Media_Order_By>>;
  where?: Maybe<Products_Media_Bool_Exp>;
};

/** query root */
export type Query_RootProducts_Media_By_PkArgs = {
  _id: Scalars['uuid'];
};

/** query root */
export type Query_RootProducts_TagsArgs = {
  distinct_on?: Maybe<Array<Products_Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Tags_Order_By>>;
  where?: Maybe<Products_Tags_Bool_Exp>;
};

/** query root */
export type Query_RootProducts_Tags_AggregateArgs = {
  distinct_on?: Maybe<Array<Products_Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Tags_Order_By>>;
  where?: Maybe<Products_Tags_Bool_Exp>;
};

/** query root */
export type Query_RootProducts_Tags_By_PkArgs = {
  _id: Scalars['uuid'];
};

/** query root */
export type Query_RootStoresArgs = {
  distinct_on?: Maybe<Array<Stores_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stores_Order_By>>;
  where?: Maybe<Stores_Bool_Exp>;
};

/** query root */
export type Query_RootStores_AggregateArgs = {
  distinct_on?: Maybe<Array<Stores_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stores_Order_By>>;
  where?: Maybe<Stores_Bool_Exp>;
};

/** query root */
export type Query_RootStores_By_PkArgs = {
  _id: Scalars['uuid'];
};

/** query root */
export type Query_RootStores_CategoriesArgs = {
  distinct_on?: Maybe<Array<Stores_Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stores_Categories_Order_By>>;
  where?: Maybe<Stores_Categories_Bool_Exp>;
};

/** query root */
export type Query_RootStores_Categories_AggregateArgs = {
  distinct_on?: Maybe<Array<Stores_Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stores_Categories_Order_By>>;
  where?: Maybe<Stores_Categories_Bool_Exp>;
};

/** query root */
export type Query_RootStores_Categories_By_PkArgs = {
  _id: Scalars['uuid'];
};

/** query root */
export type Query_RootTypes_MovementsArgs = {
  distinct_on?: Maybe<Array<Types_Movements_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Types_Movements_Order_By>>;
  where?: Maybe<Types_Movements_Bool_Exp>;
};

/** query root */
export type Query_RootTypes_Movements_AggregateArgs = {
  distinct_on?: Maybe<Array<Types_Movements_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Types_Movements_Order_By>>;
  where?: Maybe<Types_Movements_Bool_Exp>;
};

/** query root */
export type Query_RootTypes_Movements_By_PkArgs = {
  _id: Scalars['uuid'];
};

/** query root */
export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

/** query root */
export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

/** query root */
export type Query_RootUsers_By_PkArgs = {
  _id: Scalars['uuid'];
};

/** columns and relationships of "stores" */
export type Stores = {
  __typename?: 'stores';
  _id: Scalars['uuid'];
  address?: Maybe<Scalars['String']>;
  /** An object relationship */
  city: Cities;
  city_id: Scalars['uuid'];
  contact_email?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamp']>;
  /** An array relationship */
  draft_orders: Array<Draft_Orders>;
  /** An aggregated array relationship */
  draft_orders_aggregate: Draft_Orders_Aggregate;
  full_name?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  /** An array relationship */
  orders: Array<Orders>;
  /** An aggregated array relationship */
  orders_aggregate: Orders_Aggregate;
  /** An array relationship */
  products: Array<Products>;
  /** An aggregated array relationship */
  products_aggregate: Products_Aggregate;
  short_name?: Maybe<Scalars['String']>;
  /** An array relationship */
  stores_categories: Array<Stores_Categories>;
  /** An aggregated array relationship */
  stores_categories_aggregate: Stores_Categories_Aggregate;
  /** An array relationship */
  users: Array<Users>;
  /** An aggregated array relationship */
  users_aggregate: Users_Aggregate;
};

/** columns and relationships of "stores" */
export type StoresDraft_OrdersArgs = {
  distinct_on?: Maybe<Array<Draft_Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Draft_Orders_Order_By>>;
  where?: Maybe<Draft_Orders_Bool_Exp>;
};

/** columns and relationships of "stores" */
export type StoresDraft_Orders_AggregateArgs = {
  distinct_on?: Maybe<Array<Draft_Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Draft_Orders_Order_By>>;
  where?: Maybe<Draft_Orders_Bool_Exp>;
};

/** columns and relationships of "stores" */
export type StoresOrdersArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};

/** columns and relationships of "stores" */
export type StoresOrders_AggregateArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};

/** columns and relationships of "stores" */
export type StoresProductsArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};

/** columns and relationships of "stores" */
export type StoresProducts_AggregateArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};

/** columns and relationships of "stores" */
export type StoresStores_CategoriesArgs = {
  distinct_on?: Maybe<Array<Stores_Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stores_Categories_Order_By>>;
  where?: Maybe<Stores_Categories_Bool_Exp>;
};

/** columns and relationships of "stores" */
export type StoresStores_Categories_AggregateArgs = {
  distinct_on?: Maybe<Array<Stores_Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stores_Categories_Order_By>>;
  where?: Maybe<Stores_Categories_Bool_Exp>;
};

/** columns and relationships of "stores" */
export type StoresUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

/** columns and relationships of "stores" */
export type StoresUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

/** aggregated selection of "stores" */
export type Stores_Aggregate = {
  __typename?: 'stores_aggregate';
  aggregate?: Maybe<Stores_Aggregate_Fields>;
  nodes: Array<Stores>;
};

/** aggregate fields of "stores" */
export type Stores_Aggregate_Fields = {
  __typename?: 'stores_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Stores_Max_Fields>;
  min?: Maybe<Stores_Min_Fields>;
};

/** aggregate fields of "stores" */
export type Stores_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Stores_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "stores" */
export type Stores_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Stores_Max_Order_By>;
  min?: Maybe<Stores_Min_Order_By>;
};

/** input type for inserting array relation for remote table "stores" */
export type Stores_Arr_Rel_Insert_Input = {
  data: Array<Stores_Insert_Input>;
  on_conflict?: Maybe<Stores_On_Conflict>;
};

/** Boolean expression to filter rows from the table "stores". All fields are combined with a logical 'AND'. */
export type Stores_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Stores_Bool_Exp>>>;
  _id?: Maybe<Uuid_Comparison_Exp>;
  _not?: Maybe<Stores_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Stores_Bool_Exp>>>;
  address?: Maybe<String_Comparison_Exp>;
  city?: Maybe<Cities_Bool_Exp>;
  city_id?: Maybe<Uuid_Comparison_Exp>;
  contact_email?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamp_Comparison_Exp>;
  draft_orders?: Maybe<Draft_Orders_Bool_Exp>;
  full_name?: Maybe<String_Comparison_Exp>;
  logo?: Maybe<String_Comparison_Exp>;
  orders?: Maybe<Orders_Bool_Exp>;
  products?: Maybe<Products_Bool_Exp>;
  short_name?: Maybe<String_Comparison_Exp>;
  stores_categories?: Maybe<Stores_Categories_Bool_Exp>;
  users?: Maybe<Users_Bool_Exp>;
};

/** columns and relationships of "stores_categories" */
export type Stores_Categories = {
  __typename?: 'stores_categories';
  _id: Scalars['uuid'];
  created_at?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
  /** An object relationship */
  store: Stores;
  store_id: Scalars['uuid'];
};

/** aggregated selection of "stores_categories" */
export type Stores_Categories_Aggregate = {
  __typename?: 'stores_categories_aggregate';
  aggregate?: Maybe<Stores_Categories_Aggregate_Fields>;
  nodes: Array<Stores_Categories>;
};

/** aggregate fields of "stores_categories" */
export type Stores_Categories_Aggregate_Fields = {
  __typename?: 'stores_categories_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Stores_Categories_Max_Fields>;
  min?: Maybe<Stores_Categories_Min_Fields>;
};

/** aggregate fields of "stores_categories" */
export type Stores_Categories_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Stores_Categories_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "stores_categories" */
export type Stores_Categories_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Stores_Categories_Max_Order_By>;
  min?: Maybe<Stores_Categories_Min_Order_By>;
};

/** input type for inserting array relation for remote table "stores_categories" */
export type Stores_Categories_Arr_Rel_Insert_Input = {
  data: Array<Stores_Categories_Insert_Input>;
  on_conflict?: Maybe<Stores_Categories_On_Conflict>;
};

/** Boolean expression to filter rows from the table "stores_categories". All fields are combined with a logical 'AND'. */
export type Stores_Categories_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Stores_Categories_Bool_Exp>>>;
  _id?: Maybe<Uuid_Comparison_Exp>;
  _not?: Maybe<Stores_Categories_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Stores_Categories_Bool_Exp>>>;
  created_at?: Maybe<Timestamp_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  store?: Maybe<Stores_Bool_Exp>;
  store_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "stores_categories" */
export enum Stores_Categories_Constraint {
  /** unique or primary key constraint */
  StoresCategoriesPkey = 'stores_categories_pkey'
}

/** input type for inserting data into table "stores_categories" */
export type Stores_Categories_Insert_Input = {
  _id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
  store?: Maybe<Stores_Obj_Rel_Insert_Input>;
  store_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Stores_Categories_Max_Fields = {
  __typename?: 'stores_categories_max_fields';
  _id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
  store_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "stores_categories" */
export type Stores_Categories_Max_Order_By = {
  _id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  store_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Stores_Categories_Min_Fields = {
  __typename?: 'stores_categories_min_fields';
  _id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
  store_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "stores_categories" */
export type Stores_Categories_Min_Order_By = {
  _id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  store_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "stores_categories" */
export type Stores_Categories_Mutation_Response = {
  __typename?: 'stores_categories_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Stores_Categories>;
};

/** input type for inserting object relation for remote table "stores_categories" */
export type Stores_Categories_Obj_Rel_Insert_Input = {
  data: Stores_Categories_Insert_Input;
  on_conflict?: Maybe<Stores_Categories_On_Conflict>;
};

/** on conflict condition type for table "stores_categories" */
export type Stores_Categories_On_Conflict = {
  constraint: Stores_Categories_Constraint;
  update_columns: Array<Stores_Categories_Update_Column>;
  where?: Maybe<Stores_Categories_Bool_Exp>;
};

/** ordering options when selecting data from "stores_categories" */
export type Stores_Categories_Order_By = {
  _id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  store?: Maybe<Stores_Order_By>;
  store_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "stores_categories" */
export type Stores_Categories_Pk_Columns_Input = {
  _id: Scalars['uuid'];
};

/** select columns of table "stores_categories" */
export enum Stores_Categories_Select_Column {
  /** column name */
  Id = '_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  StoreId = 'store_id'
}

/** input type for updating data in table "stores_categories" */
export type Stores_Categories_Set_Input = {
  _id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
  store_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "stores_categories" */
export enum Stores_Categories_Update_Column {
  /** column name */
  Id = '_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  StoreId = 'store_id'
}

/** unique or primary key constraints on table "stores" */
export enum Stores_Constraint {
  /** unique or primary key constraint */
  StoresContactEmailKey = 'stores_contact_email_key',
  /** unique or primary key constraint */
  StoresPkey = 'stores_pkey'
}

/** input type for inserting data into table "stores" */
export type Stores_Insert_Input = {
  _id?: Maybe<Scalars['uuid']>;
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Cities_Obj_Rel_Insert_Input>;
  city_id?: Maybe<Scalars['uuid']>;
  contact_email?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamp']>;
  draft_orders?: Maybe<Draft_Orders_Arr_Rel_Insert_Input>;
  full_name?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  orders?: Maybe<Orders_Arr_Rel_Insert_Input>;
  products?: Maybe<Products_Arr_Rel_Insert_Input>;
  short_name?: Maybe<Scalars['String']>;
  stores_categories?: Maybe<Stores_Categories_Arr_Rel_Insert_Input>;
  users?: Maybe<Users_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Stores_Max_Fields = {
  __typename?: 'stores_max_fields';
  _id?: Maybe<Scalars['uuid']>;
  address?: Maybe<Scalars['String']>;
  city_id?: Maybe<Scalars['uuid']>;
  contact_email?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamp']>;
  full_name?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "stores" */
export type Stores_Max_Order_By = {
  _id?: Maybe<Order_By>;
  address?: Maybe<Order_By>;
  city_id?: Maybe<Order_By>;
  contact_email?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  full_name?: Maybe<Order_By>;
  logo?: Maybe<Order_By>;
  short_name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Stores_Min_Fields = {
  __typename?: 'stores_min_fields';
  _id?: Maybe<Scalars['uuid']>;
  address?: Maybe<Scalars['String']>;
  city_id?: Maybe<Scalars['uuid']>;
  contact_email?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamp']>;
  full_name?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "stores" */
export type Stores_Min_Order_By = {
  _id?: Maybe<Order_By>;
  address?: Maybe<Order_By>;
  city_id?: Maybe<Order_By>;
  contact_email?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  full_name?: Maybe<Order_By>;
  logo?: Maybe<Order_By>;
  short_name?: Maybe<Order_By>;
};

/** response of any mutation on the table "stores" */
export type Stores_Mutation_Response = {
  __typename?: 'stores_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Stores>;
};

/** input type for inserting object relation for remote table "stores" */
export type Stores_Obj_Rel_Insert_Input = {
  data: Stores_Insert_Input;
  on_conflict?: Maybe<Stores_On_Conflict>;
};

/** on conflict condition type for table "stores" */
export type Stores_On_Conflict = {
  constraint: Stores_Constraint;
  update_columns: Array<Stores_Update_Column>;
  where?: Maybe<Stores_Bool_Exp>;
};

/** ordering options when selecting data from "stores" */
export type Stores_Order_By = {
  _id?: Maybe<Order_By>;
  address?: Maybe<Order_By>;
  city?: Maybe<Cities_Order_By>;
  city_id?: Maybe<Order_By>;
  contact_email?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  draft_orders_aggregate?: Maybe<Draft_Orders_Aggregate_Order_By>;
  full_name?: Maybe<Order_By>;
  logo?: Maybe<Order_By>;
  orders_aggregate?: Maybe<Orders_Aggregate_Order_By>;
  products_aggregate?: Maybe<Products_Aggregate_Order_By>;
  short_name?: Maybe<Order_By>;
  stores_categories_aggregate?: Maybe<Stores_Categories_Aggregate_Order_By>;
  users_aggregate?: Maybe<Users_Aggregate_Order_By>;
};

/** primary key columns input for table: "stores" */
export type Stores_Pk_Columns_Input = {
  _id: Scalars['uuid'];
};

/** select columns of table "stores" */
export enum Stores_Select_Column {
  /** column name */
  Id = '_id',
  /** column name */
  Address = 'address',
  /** column name */
  CityId = 'city_id',
  /** column name */
  ContactEmail = 'contact_email',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FullName = 'full_name',
  /** column name */
  Logo = 'logo',
  /** column name */
  ShortName = 'short_name'
}

/** input type for updating data in table "stores" */
export type Stores_Set_Input = {
  _id?: Maybe<Scalars['uuid']>;
  address?: Maybe<Scalars['String']>;
  city_id?: Maybe<Scalars['uuid']>;
  contact_email?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamp']>;
  full_name?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
};

/** update columns of table "stores" */
export enum Stores_Update_Column {
  /** column name */
  Id = '_id',
  /** column name */
  Address = 'address',
  /** column name */
  CityId = 'city_id',
  /** column name */
  ContactEmail = 'contact_email',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FullName = 'full_name',
  /** column name */
  Logo = 'logo',
  /** column name */
  ShortName = 'short_name'
}

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "cities" */
  cities: Array<Cities>;
  /** fetch aggregated fields from the table: "cities" */
  cities_aggregate: Cities_Aggregate;
  /** fetch data from the table: "cities" using primary key columns */
  cities_by_pk?: Maybe<Cities>;
  /** fetch data from the table: "countries" */
  countries: Array<Countries>;
  /** fetch aggregated fields from the table: "countries" */
  countries_aggregate: Countries_Aggregate;
  /** fetch data from the table: "countries" using primary key columns */
  countries_by_pk?: Maybe<Countries>;
  /** fetch data from the table: "countries_currency" */
  countries_currency: Array<Countries_Currency>;
  /** fetch aggregated fields from the table: "countries_currency" */
  countries_currency_aggregate: Countries_Currency_Aggregate;
  /** fetch data from the table: "countries_currency" using primary key columns */
  countries_currency_by_pk?: Maybe<Countries_Currency>;
  /** fetch data from the table: "countries_taxes" */
  countries_taxes: Array<Countries_Taxes>;
  /** fetch aggregated fields from the table: "countries_taxes" */
  countries_taxes_aggregate: Countries_Taxes_Aggregate;
  /** fetch data from the table: "countries_taxes" using primary key columns */
  countries_taxes_by_pk?: Maybe<Countries_Taxes>;
  /** fetch data from the table: "customers" */
  customers: Array<Customers>;
  /** fetch data from the table: "customers_address" */
  customers_address: Array<Customers_Address>;
  /** fetch aggregated fields from the table: "customers_address" */
  customers_address_aggregate: Customers_Address_Aggregate;
  /** fetch data from the table: "customers_address" using primary key columns */
  customers_address_by_pk?: Maybe<Customers_Address>;
  /** fetch aggregated fields from the table: "customers" */
  customers_aggregate: Customers_Aggregate;
  /** fetch data from the table: "customers" using primary key columns */
  customers_by_pk?: Maybe<Customers>;
  /** fetch data from the table: "customers_tags" */
  customers_tags: Array<Customers_Tags>;
  /** fetch aggregated fields from the table: "customers_tags" */
  customers_tags_aggregate: Customers_Tags_Aggregate;
  /** fetch data from the table: "customers_tags" using primary key columns */
  customers_tags_by_pk?: Maybe<Customers_Tags>;
  /** fetch data from the table: "draft_orders" */
  draft_orders: Array<Draft_Orders>;
  /** fetch aggregated fields from the table: "draft_orders" */
  draft_orders_aggregate: Draft_Orders_Aggregate;
  /** fetch data from the table: "draft_orders" using primary key columns */
  draft_orders_by_pk?: Maybe<Draft_Orders>;
  /** fetch data from the table: "draft_orders_details" */
  draft_orders_details: Array<Draft_Orders_Details>;
  /** fetch aggregated fields from the table: "draft_orders_details" */
  draft_orders_details_aggregate: Draft_Orders_Details_Aggregate;
  /** fetch data from the table: "draft_orders_details" using primary key columns */
  draft_orders_details_by_pk?: Maybe<Draft_Orders_Details>;
  /** fetch data from the table: "kardex" */
  kardex: Array<Kardex>;
  /** fetch aggregated fields from the table: "kardex" */
  kardex_aggregate: Kardex_Aggregate;
  /** fetch data from the table: "kardex" using primary key columns */
  kardex_by_pk?: Maybe<Kardex>;
  /** fetch data from the table: "orders" */
  orders: Array<Orders>;
  /** fetch aggregated fields from the table: "orders" */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  /** fetch data from the table: "orders_details" */
  orders_details: Array<Orders_Details>;
  /** fetch aggregated fields from the table: "orders_details" */
  orders_details_aggregate: Orders_Details_Aggregate;
  /** fetch data from the table: "orders_details" using primary key columns */
  orders_details_by_pk?: Maybe<Orders_Details>;
  /** fetch data from the table: "price_rule" */
  price_rule: Array<Price_Rule>;
  /** fetch aggregated fields from the table: "price_rule" */
  price_rule_aggregate: Price_Rule_Aggregate;
  /** fetch data from the table: "price_rule" using primary key columns */
  price_rule_by_pk?: Maybe<Price_Rule>;
  /** fetch data from the table: "products" */
  products: Array<Products>;
  /** fetch aggregated fields from the table: "products" */
  products_aggregate: Products_Aggregate;
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>;
  /** fetch data from the table: "products_categories" */
  products_categories: Array<Products_Categories>;
  /** fetch aggregated fields from the table: "products_categories" */
  products_categories_aggregate: Products_Categories_Aggregate;
  /** fetch data from the table: "products_categories" using primary key columns */
  products_categories_by_pk?: Maybe<Products_Categories>;
  /** fetch data from the table: "products_lots" */
  products_lots: Array<Products_Lots>;
  /** fetch aggregated fields from the table: "products_lots" */
  products_lots_aggregate: Products_Lots_Aggregate;
  /** fetch data from the table: "products_lots" using primary key columns */
  products_lots_by_pk?: Maybe<Products_Lots>;
  /** fetch data from the table: "products_media" */
  products_media: Array<Products_Media>;
  /** fetch aggregated fields from the table: "products_media" */
  products_media_aggregate: Products_Media_Aggregate;
  /** fetch data from the table: "products_media" using primary key columns */
  products_media_by_pk?: Maybe<Products_Media>;
  /** fetch data from the table: "products_tags" */
  products_tags: Array<Products_Tags>;
  /** fetch aggregated fields from the table: "products_tags" */
  products_tags_aggregate: Products_Tags_Aggregate;
  /** fetch data from the table: "products_tags" using primary key columns */
  products_tags_by_pk?: Maybe<Products_Tags>;
  /** fetch data from the table: "stores" */
  stores: Array<Stores>;
  /** fetch aggregated fields from the table: "stores" */
  stores_aggregate: Stores_Aggregate;
  /** fetch data from the table: "stores" using primary key columns */
  stores_by_pk?: Maybe<Stores>;
  /** fetch data from the table: "stores_categories" */
  stores_categories: Array<Stores_Categories>;
  /** fetch aggregated fields from the table: "stores_categories" */
  stores_categories_aggregate: Stores_Categories_Aggregate;
  /** fetch data from the table: "stores_categories" using primary key columns */
  stores_categories_by_pk?: Maybe<Stores_Categories>;
  /** fetch data from the table: "types_movements" */
  types_movements: Array<Types_Movements>;
  /** fetch aggregated fields from the table: "types_movements" */
  types_movements_aggregate: Types_Movements_Aggregate;
  /** fetch data from the table: "types_movements" using primary key columns */
  types_movements_by_pk?: Maybe<Types_Movements>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};

/** subscription root */
export type Subscription_RootCitiesArgs = {
  distinct_on?: Maybe<Array<Cities_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Cities_Order_By>>;
  where?: Maybe<Cities_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootCities_AggregateArgs = {
  distinct_on?: Maybe<Array<Cities_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Cities_Order_By>>;
  where?: Maybe<Cities_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootCities_By_PkArgs = {
  _id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootCountriesArgs = {
  distinct_on?: Maybe<Array<Countries_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Countries_Order_By>>;
  where?: Maybe<Countries_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootCountries_AggregateArgs = {
  distinct_on?: Maybe<Array<Countries_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Countries_Order_By>>;
  where?: Maybe<Countries_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootCountries_By_PkArgs = {
  _id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootCountries_CurrencyArgs = {
  distinct_on?: Maybe<Array<Countries_Currency_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Countries_Currency_Order_By>>;
  where?: Maybe<Countries_Currency_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootCountries_Currency_AggregateArgs = {
  distinct_on?: Maybe<Array<Countries_Currency_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Countries_Currency_Order_By>>;
  where?: Maybe<Countries_Currency_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootCountries_Currency_By_PkArgs = {
  _id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootCountries_TaxesArgs = {
  distinct_on?: Maybe<Array<Countries_Taxes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Countries_Taxes_Order_By>>;
  where?: Maybe<Countries_Taxes_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootCountries_Taxes_AggregateArgs = {
  distinct_on?: Maybe<Array<Countries_Taxes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Countries_Taxes_Order_By>>;
  where?: Maybe<Countries_Taxes_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootCountries_Taxes_By_PkArgs = {
  _id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootCustomersArgs = {
  distinct_on?: Maybe<Array<Customers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Customers_Order_By>>;
  where?: Maybe<Customers_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootCustomers_AddressArgs = {
  distinct_on?: Maybe<Array<Customers_Address_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Customers_Address_Order_By>>;
  where?: Maybe<Customers_Address_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootCustomers_Address_AggregateArgs = {
  distinct_on?: Maybe<Array<Customers_Address_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Customers_Address_Order_By>>;
  where?: Maybe<Customers_Address_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootCustomers_Address_By_PkArgs = {
  _id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootCustomers_AggregateArgs = {
  distinct_on?: Maybe<Array<Customers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Customers_Order_By>>;
  where?: Maybe<Customers_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootCustomers_By_PkArgs = {
  _id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootCustomers_TagsArgs = {
  distinct_on?: Maybe<Array<Customers_Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Customers_Tags_Order_By>>;
  where?: Maybe<Customers_Tags_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootCustomers_Tags_AggregateArgs = {
  distinct_on?: Maybe<Array<Customers_Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Customers_Tags_Order_By>>;
  where?: Maybe<Customers_Tags_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootCustomers_Tags_By_PkArgs = {
  _id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootDraft_OrdersArgs = {
  distinct_on?: Maybe<Array<Draft_Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Draft_Orders_Order_By>>;
  where?: Maybe<Draft_Orders_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootDraft_Orders_AggregateArgs = {
  distinct_on?: Maybe<Array<Draft_Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Draft_Orders_Order_By>>;
  where?: Maybe<Draft_Orders_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootDraft_Orders_By_PkArgs = {
  _id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootDraft_Orders_DetailsArgs = {
  distinct_on?: Maybe<Array<Draft_Orders_Details_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Draft_Orders_Details_Order_By>>;
  where?: Maybe<Draft_Orders_Details_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootDraft_Orders_Details_AggregateArgs = {
  distinct_on?: Maybe<Array<Draft_Orders_Details_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Draft_Orders_Details_Order_By>>;
  where?: Maybe<Draft_Orders_Details_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootDraft_Orders_Details_By_PkArgs = {
  _id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootKardexArgs = {
  distinct_on?: Maybe<Array<Kardex_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kardex_Order_By>>;
  where?: Maybe<Kardex_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootKardex_AggregateArgs = {
  distinct_on?: Maybe<Array<Kardex_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kardex_Order_By>>;
  where?: Maybe<Kardex_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootKardex_By_PkArgs = {
  _id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootOrdersArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootOrders_AggregateArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootOrders_By_PkArgs = {
  _id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootOrders_DetailsArgs = {
  distinct_on?: Maybe<Array<Orders_Details_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Details_Order_By>>;
  where?: Maybe<Orders_Details_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootOrders_Details_AggregateArgs = {
  distinct_on?: Maybe<Array<Orders_Details_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Details_Order_By>>;
  where?: Maybe<Orders_Details_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootOrders_Details_By_PkArgs = {
  _id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootPrice_RuleArgs = {
  distinct_on?: Maybe<Array<Price_Rule_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Price_Rule_Order_By>>;
  where?: Maybe<Price_Rule_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPrice_Rule_AggregateArgs = {
  distinct_on?: Maybe<Array<Price_Rule_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Price_Rule_Order_By>>;
  where?: Maybe<Price_Rule_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPrice_Rule_By_PkArgs = {
  _id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootProductsArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootProducts_AggregateArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootProducts_By_PkArgs = {
  _id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootProducts_CategoriesArgs = {
  distinct_on?: Maybe<Array<Products_Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Categories_Order_By>>;
  where?: Maybe<Products_Categories_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootProducts_Categories_AggregateArgs = {
  distinct_on?: Maybe<Array<Products_Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Categories_Order_By>>;
  where?: Maybe<Products_Categories_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootProducts_Categories_By_PkArgs = {
  _id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootProducts_LotsArgs = {
  distinct_on?: Maybe<Array<Products_Lots_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Lots_Order_By>>;
  where?: Maybe<Products_Lots_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootProducts_Lots_AggregateArgs = {
  distinct_on?: Maybe<Array<Products_Lots_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Lots_Order_By>>;
  where?: Maybe<Products_Lots_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootProducts_Lots_By_PkArgs = {
  _id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootProducts_MediaArgs = {
  distinct_on?: Maybe<Array<Products_Media_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Media_Order_By>>;
  where?: Maybe<Products_Media_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootProducts_Media_AggregateArgs = {
  distinct_on?: Maybe<Array<Products_Media_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Media_Order_By>>;
  where?: Maybe<Products_Media_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootProducts_Media_By_PkArgs = {
  _id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootProducts_TagsArgs = {
  distinct_on?: Maybe<Array<Products_Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Tags_Order_By>>;
  where?: Maybe<Products_Tags_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootProducts_Tags_AggregateArgs = {
  distinct_on?: Maybe<Array<Products_Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Tags_Order_By>>;
  where?: Maybe<Products_Tags_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootProducts_Tags_By_PkArgs = {
  _id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootStoresArgs = {
  distinct_on?: Maybe<Array<Stores_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stores_Order_By>>;
  where?: Maybe<Stores_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootStores_AggregateArgs = {
  distinct_on?: Maybe<Array<Stores_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stores_Order_By>>;
  where?: Maybe<Stores_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootStores_By_PkArgs = {
  _id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootStores_CategoriesArgs = {
  distinct_on?: Maybe<Array<Stores_Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stores_Categories_Order_By>>;
  where?: Maybe<Stores_Categories_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootStores_Categories_AggregateArgs = {
  distinct_on?: Maybe<Array<Stores_Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stores_Categories_Order_By>>;
  where?: Maybe<Stores_Categories_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootStores_Categories_By_PkArgs = {
  _id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootTypes_MovementsArgs = {
  distinct_on?: Maybe<Array<Types_Movements_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Types_Movements_Order_By>>;
  where?: Maybe<Types_Movements_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootTypes_Movements_AggregateArgs = {
  distinct_on?: Maybe<Array<Types_Movements_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Types_Movements_Order_By>>;
  where?: Maybe<Types_Movements_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootTypes_Movements_By_PkArgs = {
  _id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootUsers_By_PkArgs = {
  _id: Scalars['uuid'];
};

/** expression to compare columns of type timestamp. All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamp']>;
  _gt?: Maybe<Scalars['timestamp']>;
  _gte?: Maybe<Scalars['timestamp']>;
  _in?: Maybe<Array<Scalars['timestamp']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamp']>;
  _lte?: Maybe<Scalars['timestamp']>;
  _neq?: Maybe<Scalars['timestamp']>;
  _nin?: Maybe<Array<Scalars['timestamp']>>;
};

/** columns and relationships of "types_movements" */
export type Types_Movements = {
  __typename?: 'types_movements';
  _id: Scalars['uuid'];
  created_at?: Maybe<Scalars['timestamp']>;
  credit?: Maybe<Scalars['bit']>;
  debit?: Maybe<Scalars['bit']>;
  description?: Maybe<Scalars['String']>;
  /** An array relationship */
  kardexes: Array<Kardex>;
  /** An aggregated array relationship */
  kardexes_aggregate: Kardex_Aggregate;
};

/** columns and relationships of "types_movements" */
export type Types_MovementsKardexesArgs = {
  distinct_on?: Maybe<Array<Kardex_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kardex_Order_By>>;
  where?: Maybe<Kardex_Bool_Exp>;
};

/** columns and relationships of "types_movements" */
export type Types_MovementsKardexes_AggregateArgs = {
  distinct_on?: Maybe<Array<Kardex_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kardex_Order_By>>;
  where?: Maybe<Kardex_Bool_Exp>;
};

/** aggregated selection of "types_movements" */
export type Types_Movements_Aggregate = {
  __typename?: 'types_movements_aggregate';
  aggregate?: Maybe<Types_Movements_Aggregate_Fields>;
  nodes: Array<Types_Movements>;
};

/** aggregate fields of "types_movements" */
export type Types_Movements_Aggregate_Fields = {
  __typename?: 'types_movements_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Types_Movements_Max_Fields>;
  min?: Maybe<Types_Movements_Min_Fields>;
};

/** aggregate fields of "types_movements" */
export type Types_Movements_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Types_Movements_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "types_movements" */
export type Types_Movements_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Types_Movements_Max_Order_By>;
  min?: Maybe<Types_Movements_Min_Order_By>;
};

/** input type for inserting array relation for remote table "types_movements" */
export type Types_Movements_Arr_Rel_Insert_Input = {
  data: Array<Types_Movements_Insert_Input>;
  on_conflict?: Maybe<Types_Movements_On_Conflict>;
};

/** Boolean expression to filter rows from the table "types_movements". All fields are combined with a logical 'AND'. */
export type Types_Movements_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Types_Movements_Bool_Exp>>>;
  _id?: Maybe<Uuid_Comparison_Exp>;
  _not?: Maybe<Types_Movements_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Types_Movements_Bool_Exp>>>;
  created_at?: Maybe<Timestamp_Comparison_Exp>;
  credit?: Maybe<Bit_Comparison_Exp>;
  debit?: Maybe<Bit_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  kardexes?: Maybe<Kardex_Bool_Exp>;
};

/** unique or primary key constraints on table "types_movements" */
export enum Types_Movements_Constraint {
  /** unique or primary key constraint */
  TypesMovementsPkey = 'types_movements_pkey'
}

/** input type for inserting data into table "types_movements" */
export type Types_Movements_Insert_Input = {
  _id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  credit?: Maybe<Scalars['bit']>;
  debit?: Maybe<Scalars['bit']>;
  description?: Maybe<Scalars['String']>;
  kardexes?: Maybe<Kardex_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Types_Movements_Max_Fields = {
  __typename?: 'types_movements_max_fields';
  _id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "types_movements" */
export type Types_Movements_Max_Order_By = {
  _id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Types_Movements_Min_Fields = {
  __typename?: 'types_movements_min_fields';
  _id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "types_movements" */
export type Types_Movements_Min_Order_By = {
  _id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
};

/** response of any mutation on the table "types_movements" */
export type Types_Movements_Mutation_Response = {
  __typename?: 'types_movements_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Types_Movements>;
};

/** input type for inserting object relation for remote table "types_movements" */
export type Types_Movements_Obj_Rel_Insert_Input = {
  data: Types_Movements_Insert_Input;
  on_conflict?: Maybe<Types_Movements_On_Conflict>;
};

/** on conflict condition type for table "types_movements" */
export type Types_Movements_On_Conflict = {
  constraint: Types_Movements_Constraint;
  update_columns: Array<Types_Movements_Update_Column>;
  where?: Maybe<Types_Movements_Bool_Exp>;
};

/** ordering options when selecting data from "types_movements" */
export type Types_Movements_Order_By = {
  _id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  credit?: Maybe<Order_By>;
  debit?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  kardexes_aggregate?: Maybe<Kardex_Aggregate_Order_By>;
};

/** primary key columns input for table: "types_movements" */
export type Types_Movements_Pk_Columns_Input = {
  _id: Scalars['uuid'];
};

/** select columns of table "types_movements" */
export enum Types_Movements_Select_Column {
  /** column name */
  Id = '_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Credit = 'credit',
  /** column name */
  Debit = 'debit',
  /** column name */
  Description = 'description'
}

/** input type for updating data in table "types_movements" */
export type Types_Movements_Set_Input = {
  _id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  credit?: Maybe<Scalars['bit']>;
  debit?: Maybe<Scalars['bit']>;
  description?: Maybe<Scalars['String']>;
};

/** update columns of table "types_movements" */
export enum Types_Movements_Update_Column {
  /** column name */
  Id = '_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Credit = 'credit',
  /** column name */
  Debit = 'debit',
  /** column name */
  Description = 'description'
}

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  _id: Scalars['uuid'];
  created_at?: Maybe<Scalars['timestamp']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  /** An object relationship */
  store: Stores;
  store_id: Scalars['uuid'];
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Users_Max_Order_By>;
  min?: Maybe<Users_Min_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  _id?: Maybe<Uuid_Comparison_Exp>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  created_at?: Maybe<Timestamp_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  first_name?: Maybe<String_Comparison_Exp>;
  last_name?: Maybe<String_Comparison_Exp>;
  password?: Maybe<String_Comparison_Exp>;
  store?: Maybe<Stores_Bool_Exp>;
  store_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  _id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  store?: Maybe<Stores_Obj_Rel_Insert_Input>;
  store_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  _id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  store_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  _id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  store_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  _id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  store_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  _id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  store_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
  _id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  store?: Maybe<Stores_Order_By>;
  store_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "users" */
export type Users_Pk_Columns_Input = {
  _id: Scalars['uuid'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Id = '_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Password = 'password',
  /** column name */
  StoreId = 'store_id'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  _id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  store_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Id = '_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Password = 'password',
  /** column name */
  StoreId = 'store_id'
}

/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};
