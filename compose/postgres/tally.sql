CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE "users" (
  "_id" uuid PRIMARY KEY DEFAULT (uuid_generate_v4 ()),
  "first_name" varchar,
  "last_name" varchar,
  "email" varchar(254),
  "password" varchar,
  "store_id" uuid NOT NULL,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "stores" (
  "_id" uuid PRIMARY KEY DEFAULT (uuid_generate_v4 ()),
  "full_name" varchar,
  "short_name" varchar,
  "logo" varchar,
  "address" varchar,
  "city_id" uuid NOT NULL,
  "contact_email" varchar(254) UNIQUE,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "stores_categories" (
  "_id" uuid PRIMARY KEY DEFAULT (uuid_generate_v4 ()),
  "store_id" uuid NOT NULL,
  "description" varchar,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "countries" (
  "_id" uuid PRIMARY KEY DEFAULT (uuid_generate_v4 ()),
  "full_name" varchar UNIQUE NOT NULL,
  "short_name" varchar,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "cities" (
  "_id" uuid PRIMARY KEY DEFAULT (uuid_generate_v4 ()),
  "full_name" varchar UNIQUE NOT NULL,
  "short_name" varchar,
  "country_id" uuid NOT NULL,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "countries_taxes" (
  "_id" uuid PRIMARY KEY DEFAULT (uuid_generate_v4 ()),
  "country_id" uuid NOT NULL,
  "description" varchar,
  "abbreviation" varchar,
  "value" decimal,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "countries_currency" (
  "_id" uuid PRIMARY KEY DEFAULT (uuid_generate_v4 ()),
  "country_id" uuid NOT NULL,
  "description" varchar,
  "abbreviation" varchar UNIQUE,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "products" (
  "_id" uuid PRIMARY KEY DEFAULT (uuid_generate_v4 ()),
  "full_name" varchar,
  "description" varchar,
  "store_id" uuid NOT NULL,
  "product_category_id" uuid NOT NULL,
  "price" decimal,
  "price_compared" decimal,
  "cost" decimal,
  "country_tax_id" uuid NOT NULL,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "products_categories" (
  "_id" uuid PRIMARY KEY DEFAULT (uuid_generate_v4 ()),
  "description" varchar,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "products_tags" (
  "_id" uuid PRIMARY KEY DEFAULT (uuid_generate_v4 ()),
  "product_id" uuid NOT NULL,
  "tag" varchar,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "products_media" (
  "_id" uuid PRIMARY KEY DEFAULT (uuid_generate_v4 ()),
  "product_id" uuid NOT NULL,
  "path" varchar,
  "primary_media" boolean,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "products_lots" (
  "_id" uuid PRIMARY KEY DEFAULT (uuid_generate_v4 ()),
  "product_id" uuid NOT NULL,
  "entry_date" timestamp DEFAULT (now()),
  "entry_quantity" int,
  "quantity" int,
  "expires_date" timestamp,
  "title" varchar,
  "product_media_id" uuid,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "kardex" (
  "_id" uuid PRIMARY KEY DEFAULT (uuid_generate_v4 ()),
  "product_lot_id" uuid NOT NULL,
  "type_movement_id" uuid NOT NULL,
  "quantity" decimal,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "types_movements" (
  "_id" uuid PRIMARY KEY DEFAULT (uuid_generate_v4 ()),
  "description" varchar,
  "credit" bit,
  "debit" bit,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "customers" (
  "_id" uuid PRIMARY KEY DEFAULT (uuid_generate_v4 ()),
  "first_name" varchar,
  "last_name" varchar,
  "email" varchar(254) UNIQUE,
  "phone_number" varchar,
  "accept_emarketing" bit,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "customers_tags" (
  "_id" uuid PRIMARY KEY DEFAULT (uuid_generate_v4 ()),
  "costumer_id" uuid NOT NULL,
  "tag" varchar,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "orders" (
  "_id" uuid PRIMARY KEY DEFAULT (uuid_generate_v4 ()),
  "entry_date" timestamp DEFAULT (now()),
  "store_id" uuid NOT NULL,
  "customer_id" uuid NOT NULL,
  "sub_total" decimal,
  "tax_total" decimal,
  "discount_total" decimal,
  "total" decimal,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "orders_details" (
  "_id" uuid PRIMARY KEY DEFAULT (uuid_generate_v4 ()),
  "order_id" uuid NOT NULL,
  "product_lot_id" uuid NOT NULL,
  "quantity" int,
  "price" decimal,
  "price_rule_id" uuid NOT NULL,
  "sub_total" decimal,
  "tax_total" decimal,
  "discount_total" decimal,
  "total" decimal,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "customers_address" (
  "_id" uuid PRIMARY KEY DEFAULT (uuid_generate_v4 ()),
  "customer_id" uuid NOT NULL,
  "city_id" uuid NOT NULL,
  "country_id" uuid NOT NULL,
  "address" varchar,
  "latitude" decimal(10,8),
  "longitude" decimal(11,8),
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "draft_orders" (
  "_id" uuid PRIMARY KEY DEFAULT (uuid_generate_v4 ()),
  "entry_date" timestamp DEFAULT (now()),
  "store_id" uuid NOT NULL,
  "customer_id" uuid NOT NULL,
  "sub_total" decimal NOT NULL,
  "tax_total" decimal NOT NULL,
  "total" decimal,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "draft_orders_details" (
  "_id" uuid PRIMARY KEY DEFAULT (uuid_generate_v4 ()),
  "draft_order_id" uuid NOT NULL,
  "product_lot_id" uuid NOT NULL,
  "quantity" int,
  "price" decimal,
  "sub_total" decimal,
  "tax_total" decimal,
  "discount_total" decimal,
  "total" decimal,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "price_rule" (
  "_id" uuid PRIMARY KEY DEFAULT (uuid_generate_v4 ()),
  "product_id" uuid NOT NULL,
  "starts_at" timestamp DEFAULT (now()),
  "ends_at" timestamp,
  "price" decimal,
  "once_per_costumer" bit,
  "value" decimal,
  "percent" bit,
  "created_at" timestamp DEFAULT (now())
);

ALTER TABLE "draft_orders_details" ADD FOREIGN KEY ("draft_order_id") REFERENCES "draft_orders" ("_id");

ALTER TABLE "draft_orders_details" ADD FOREIGN KEY ("product_lot_id") REFERENCES "products_lots" ("_id");

ALTER TABLE "draft_orders" ADD FOREIGN KEY ("customer_id") REFERENCES "customers" ("_id");

ALTER TABLE "draft_orders" ADD FOREIGN KEY ("store_id") REFERENCES "stores" ("_id");

ALTER TABLE "price_rule" ADD FOREIGN KEY ("product_id") REFERENCES "products" ("_id");

ALTER TABLE "orders_details" ADD FOREIGN KEY ("price_rule_id") REFERENCES "price_rule" ("_id");

ALTER TABLE "users" ADD FOREIGN KEY ("store_id") REFERENCES "stores" ("_id");

ALTER TABLE "countries_currency" ADD FOREIGN KEY ("country_id") REFERENCES "countries" ("_id");

ALTER TABLE "stores_categories" ADD FOREIGN KEY ("store_id") REFERENCES "stores" ("_id");

ALTER TABLE "cities" ADD FOREIGN KEY ("country_id") REFERENCES "countries" ("_id");

ALTER TABLE "stores" ADD FOREIGN KEY ("city_id") REFERENCES "cities" ("_id");

ALTER TABLE "orders" ADD FOREIGN KEY ("store_id") REFERENCES "stores" ("_id");

ALTER TABLE "orders" ADD FOREIGN KEY ("customer_id") REFERENCES "customers" ("_id");

ALTER TABLE "orders_details" ADD FOREIGN KEY ("order_id") REFERENCES "orders" ("_id");

ALTER TABLE "orders_details" ADD FOREIGN KEY ("product_lot_id") REFERENCES "products_lots" ("_id");

ALTER TABLE "customers_address" ADD FOREIGN KEY ("customer_id") REFERENCES "customers" ("_id");

ALTER TABLE "customers_tags" ADD FOREIGN KEY ("costumer_id") REFERENCES "customers" ("_id");

ALTER TABLE "customers_address" ADD FOREIGN KEY ("city_id") REFERENCES "cities" ("_id");

ALTER TABLE "customers_address" ADD FOREIGN KEY ("country_id") REFERENCES "countries" ("_id");

ALTER TABLE "products" ADD FOREIGN KEY ("store_id") REFERENCES "stores" ("_id");

ALTER TABLE "kardex" ADD FOREIGN KEY ("product_lot_id") REFERENCES "products_lots" ("_id");

ALTER TABLE "kardex" ADD FOREIGN KEY ("type_movement_id") REFERENCES "types_movements" ("_id");

ALTER TABLE "products_tags" ADD FOREIGN KEY ("product_id") REFERENCES "products" ("_id");

ALTER TABLE "products_media" ADD FOREIGN KEY ("_id") REFERENCES "products" ("_id");

ALTER TABLE "countries_taxes" ADD FOREIGN KEY ("_id") REFERENCES "countries" ("_id");

ALTER TABLE "products" ADD FOREIGN KEY ("country_tax_id") REFERENCES "countries_taxes" ("_id");

ALTER TABLE "products_lots" ADD FOREIGN KEY ("product_id") REFERENCES "products" ("_id");

ALTER TABLE "products" ADD FOREIGN KEY ("product_category_id") REFERENCES "products_categories" ("_id");
