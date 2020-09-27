CREATE TABLE public.cities (
    _id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    full_name character varying NOT NULL,
    short_name character varying,
    country_id uuid NOT NULL,
    created_at timestamp without time zone DEFAULT now()
);
CREATE TABLE public.countries (
    _id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    full_name character varying NOT NULL,
    short_name character varying,
    created_at timestamp without time zone DEFAULT now()
);
CREATE TABLE public.countries_currency (
    _id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    country_id uuid NOT NULL,
    description character varying,
    abbreviation character varying,
    created_at timestamp without time zone DEFAULT now()
);
CREATE TABLE public.countries_taxes (
    _id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    country_id uuid NOT NULL,
    description character varying,
    abbreviation character varying,
    value numeric,
    created_at timestamp without time zone DEFAULT now()
);
CREATE TABLE public.customers (
    _id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    first_name character varying,
    last_name character varying,
    email character varying(254),
    phone_number character varying,
    accept_emarketing bit(1),
    created_at timestamp without time zone DEFAULT now()
);
CREATE TABLE public.customers_address (
    _id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    customer_id uuid NOT NULL,
    city_id uuid NOT NULL,
    country_id uuid NOT NULL,
    address character varying,
    latitude numeric(10,8),
    longitude numeric(11,8),
    created_at timestamp without time zone DEFAULT now()
);
CREATE TABLE public.customers_tags (
    _id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    costumer_id uuid NOT NULL,
    tag character varying,
    created_at timestamp without time zone DEFAULT now()
);
CREATE TABLE public.draft_orders (
    _id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    entry_date timestamp without time zone DEFAULT now(),
    store_id uuid NOT NULL,
    customer_id uuid NOT NULL,
    sub_total numeric NOT NULL,
    tax_total numeric NOT NULL,
    total numeric,
    created_at timestamp without time zone DEFAULT now()
);
CREATE TABLE public.draft_orders_details (
    _id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    draft_order_id uuid NOT NULL,
    product_lot_id uuid NOT NULL,
    quantity integer,
    price numeric,
    sub_total numeric,
    tax_total numeric,
    discount_total numeric,
    total numeric,
    created_at timestamp without time zone DEFAULT now()
);
CREATE TABLE public.kardex (
    _id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    product_lot_id uuid NOT NULL,
    type_movement_id uuid NOT NULL,
    quantity numeric,
    created_at timestamp without time zone DEFAULT now()
);
CREATE TABLE public.orders (
    _id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    entry_date timestamp without time zone DEFAULT now(),
    store_id uuid NOT NULL,
    customer_id uuid NOT NULL,
    sub_total numeric,
    tax_total numeric,
    discount_total numeric,
    total numeric,
    created_at timestamp without time zone DEFAULT now()
);
CREATE TABLE public.orders_details (
    _id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    order_id uuid NOT NULL,
    product_lot_id uuid NOT NULL,
    quantity integer,
    price numeric,
    price_rule_id uuid NOT NULL,
    sub_total numeric,
    tax_total numeric,
    discount_total numeric,
    total numeric,
    created_at timestamp without time zone DEFAULT now()
);
CREATE TABLE public.price_rule (
    _id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    product_id uuid NOT NULL,
    starts_at timestamp without time zone DEFAULT now(),
    ends_at timestamp without time zone,
    price numeric,
    once_per_costumer bit(1),
    value numeric,
    percent bit(1),
    created_at timestamp without time zone DEFAULT now()
);
CREATE TABLE public.products (
    _id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    full_name character varying,
    description character varying,
    store_id uuid NOT NULL,
    product_category_id uuid NOT NULL,
    price numeric,
    price_compared numeric,
    cost numeric,
    country_tax_id uuid NOT NULL,
    created_at timestamp without time zone DEFAULT now()
);
CREATE TABLE public.products_categories (
    _id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    description character varying,
    created_at timestamp without time zone DEFAULT now()
);
CREATE TABLE public.products_lots (
    _id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    product_id uuid NOT NULL,
    entry_date timestamp without time zone DEFAULT now(),
    entry_quantity integer,
    quantity integer,
    expires_date timestamp without time zone,
    title character varying,
    product_media_id uuid,
    created_at timestamp without time zone DEFAULT now()
);
CREATE TABLE public.products_media (
    _id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    product_id uuid NOT NULL,
    path character varying,
    primary_media boolean,
    created_at timestamp without time zone DEFAULT now()
);
CREATE TABLE public.products_tags (
    _id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    product_id uuid NOT NULL,
    tag character varying,
    created_at timestamp without time zone DEFAULT now()
);
CREATE TABLE public.stores (
    _id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    full_name character varying,
    short_name character varying,
    logo character varying,
    address character varying,
    city_id uuid NOT NULL,
    contact_email character varying(254),
    created_at timestamp without time zone DEFAULT now()
);
CREATE TABLE public.stores_categories (
    _id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    store_id uuid NOT NULL,
    description character varying,
    created_at timestamp without time zone DEFAULT now()
);
CREATE TABLE public.types_movements (
    _id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    description character varying,
    credit bit(1),
    debit bit(1),
    created_at timestamp without time zone DEFAULT now()
);
CREATE TABLE public.users (
    _id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    first_name character varying,
    last_name character varying,
    email character varying(254),
    password character varying,
    store_id uuid NOT NULL,
    created_at timestamp without time zone DEFAULT now()
);
ALTER TABLE ONLY public.cities
    ADD CONSTRAINT cities_full_name_key UNIQUE (full_name);
ALTER TABLE ONLY public.cities
    ADD CONSTRAINT cities_pkey PRIMARY KEY (_id);
ALTER TABLE ONLY public.countries_currency
    ADD CONSTRAINT countries_currency_abbreviation_key UNIQUE (abbreviation);
ALTER TABLE ONLY public.countries_currency
    ADD CONSTRAINT countries_currency_pkey PRIMARY KEY (_id);
ALTER TABLE ONLY public.countries
    ADD CONSTRAINT countries_full_name_key UNIQUE (full_name);
ALTER TABLE ONLY public.countries
    ADD CONSTRAINT countries_pkey PRIMARY KEY (_id);
ALTER TABLE ONLY public.countries_taxes
    ADD CONSTRAINT countries_taxes_pkey PRIMARY KEY (_id);
ALTER TABLE ONLY public.customers_address
    ADD CONSTRAINT customers_address_pkey PRIMARY KEY (_id);
ALTER TABLE ONLY public.customers
    ADD CONSTRAINT customers_email_key UNIQUE (email);
ALTER TABLE ONLY public.customers
    ADD CONSTRAINT customers_pkey PRIMARY KEY (_id);
ALTER TABLE ONLY public.customers_tags
    ADD CONSTRAINT customers_tags_pkey PRIMARY KEY (_id);
ALTER TABLE ONLY public.draft_orders_details
    ADD CONSTRAINT draft_orders_details_pkey PRIMARY KEY (_id);
ALTER TABLE ONLY public.draft_orders
    ADD CONSTRAINT draft_orders_pkey PRIMARY KEY (_id);
ALTER TABLE ONLY public.kardex
    ADD CONSTRAINT kardex_pkey PRIMARY KEY (_id);
ALTER TABLE ONLY public.orders_details
    ADD CONSTRAINT orders_details_pkey PRIMARY KEY (_id);
ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (_id);
ALTER TABLE ONLY public.price_rule
    ADD CONSTRAINT price_rule_pkey PRIMARY KEY (_id);
ALTER TABLE ONLY public.products_categories
    ADD CONSTRAINT products_categories_pkey PRIMARY KEY (_id);
ALTER TABLE ONLY public.products_lots
    ADD CONSTRAINT products_lots_pkey PRIMARY KEY (_id);
ALTER TABLE ONLY public.products_media
    ADD CONSTRAINT products_media_pkey PRIMARY KEY (_id);
ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (_id);
ALTER TABLE ONLY public.products_tags
    ADD CONSTRAINT products_tags_pkey PRIMARY KEY (_id);
ALTER TABLE ONLY public.stores_categories
    ADD CONSTRAINT stores_categories_pkey PRIMARY KEY (_id);
ALTER TABLE ONLY public.stores
    ADD CONSTRAINT stores_contact_email_key UNIQUE (contact_email);
ALTER TABLE ONLY public.stores
    ADD CONSTRAINT stores_pkey PRIMARY KEY (_id);
ALTER TABLE ONLY public.types_movements
    ADD CONSTRAINT types_movements_pkey PRIMARY KEY (_id);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (_id);
ALTER TABLE ONLY public.cities
    ADD CONSTRAINT cities_country_id_fkey FOREIGN KEY (country_id) REFERENCES public.countries(_id);
ALTER TABLE ONLY public.countries_currency
    ADD CONSTRAINT countries_currency_country_id_fkey FOREIGN KEY (country_id) REFERENCES public.countries(_id);
ALTER TABLE ONLY public.countries_taxes
    ADD CONSTRAINT countries_taxes__id_fkey FOREIGN KEY (_id) REFERENCES public.countries(_id);
ALTER TABLE ONLY public.customers_address
    ADD CONSTRAINT customers_address_city_id_fkey FOREIGN KEY (city_id) REFERENCES public.cities(_id);
ALTER TABLE ONLY public.customers_address
    ADD CONSTRAINT customers_address_country_id_fkey FOREIGN KEY (country_id) REFERENCES public.countries(_id);
ALTER TABLE ONLY public.customers_address
    ADD CONSTRAINT customers_address_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES public.customers(_id);
ALTER TABLE ONLY public.customers_tags
    ADD CONSTRAINT customers_tags_costumer_id_fkey FOREIGN KEY (costumer_id) REFERENCES public.customers(_id);
ALTER TABLE ONLY public.draft_orders
    ADD CONSTRAINT draft_orders_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES public.customers(_id);
ALTER TABLE ONLY public.draft_orders_details
    ADD CONSTRAINT draft_orders_details_draft_order_id_fkey FOREIGN KEY (draft_order_id) REFERENCES public.draft_orders(_id);
ALTER TABLE ONLY public.draft_orders_details
    ADD CONSTRAINT draft_orders_details_product_lot_id_fkey FOREIGN KEY (product_lot_id) REFERENCES public.products_lots(_id);
ALTER TABLE ONLY public.draft_orders
    ADD CONSTRAINT draft_orders_store_id_fkey FOREIGN KEY (store_id) REFERENCES public.stores(_id);
ALTER TABLE ONLY public.kardex
    ADD CONSTRAINT kardex_product_lot_id_fkey FOREIGN KEY (product_lot_id) REFERENCES public.products_lots(_id);
ALTER TABLE ONLY public.kardex
    ADD CONSTRAINT kardex_type_movement_id_fkey FOREIGN KEY (type_movement_id) REFERENCES public.types_movements(_id);
ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES public.customers(_id);
ALTER TABLE ONLY public.orders_details
    ADD CONSTRAINT orders_details_order_id_fkey FOREIGN KEY (order_id) REFERENCES public.orders(_id);
ALTER TABLE ONLY public.orders_details
    ADD CONSTRAINT orders_details_price_rule_id_fkey FOREIGN KEY (price_rule_id) REFERENCES public.price_rule(_id);
ALTER TABLE ONLY public.orders_details
    ADD CONSTRAINT orders_details_product_lot_id_fkey FOREIGN KEY (product_lot_id) REFERENCES public.products_lots(_id);
ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_store_id_fkey FOREIGN KEY (store_id) REFERENCES public.stores(_id);
ALTER TABLE ONLY public.price_rule
    ADD CONSTRAINT price_rule_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(_id);
ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_country_tax_id_fkey FOREIGN KEY (country_tax_id) REFERENCES public.countries_taxes(_id);
ALTER TABLE ONLY public.products_lots
    ADD CONSTRAINT products_lots_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(_id);
ALTER TABLE ONLY public.products_media
    ADD CONSTRAINT products_media__id_fkey FOREIGN KEY (_id) REFERENCES public.products(_id);
ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_product_category_id_fkey FOREIGN KEY (product_category_id) REFERENCES public.products_categories(_id);
ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_store_id_fkey FOREIGN KEY (store_id) REFERENCES public.stores(_id);
ALTER TABLE ONLY public.products_tags
    ADD CONSTRAINT products_tags_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(_id);
ALTER TABLE ONLY public.stores_categories
    ADD CONSTRAINT stores_categories_store_id_fkey FOREIGN KEY (store_id) REFERENCES public.stores(_id);
ALTER TABLE ONLY public.stores
    ADD CONSTRAINT stores_city_id_fkey FOREIGN KEY (city_id) REFERENCES public.cities(_id);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_store_id_fkey FOREIGN KEY (store_id) REFERENCES public.stores(_id);
