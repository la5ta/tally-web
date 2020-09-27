--
-- PostgreSQL database dump
--

-- Dumped from database version 12.3 (Debian 12.3-1.pgdg100+1)
-- Dumped by pg_dump version 12.3 (Debian 12.3-1.pgdg100+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: cities; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cities (
    id integer NOT NULL,
    full_name character varying,
    country_id integer,
    created_at timestamp without time zone
);


ALTER TABLE public.cities OWNER TO postgres;

--
-- Name: cities_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.cities_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cities_id_seq OWNER TO postgres;

--
-- Name: cities_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.cities_id_seq OWNED BY public.cities.id;


--
-- Name: countries; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.countries (
    id integer NOT NULL,
    full_name character varying,
    created_at timestamp without time zone
);


ALTER TABLE public.countries OWNER TO postgres;

--
-- Name: countries_currency; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.countries_currency (
    id integer NOT NULL,
    country_id integer,
    description character varying,
    abbreviation character varying,
    created_at timestamp without time zone
);


ALTER TABLE public.countries_currency OWNER TO postgres;

--
-- Name: countries_currency_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.countries_currency_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.countries_currency_id_seq OWNER TO postgres;

--
-- Name: countries_currency_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.countries_currency_id_seq OWNED BY public.countries_currency.id;


--
-- Name: countries_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.countries_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.countries_id_seq OWNER TO postgres;

--
-- Name: countries_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.countries_id_seq OWNED BY public.countries.id;


--
-- Name: countries_taxes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.countries_taxes (
    id integer NOT NULL,
    country_id integer,
    description character varying,
    abbreviation character varying,
    value numeric,
    created_at timestamp without time zone
);


ALTER TABLE public.countries_taxes OWNER TO postgres;

--
-- Name: countries_taxes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.countries_taxes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.countries_taxes_id_seq OWNER TO postgres;

--
-- Name: countries_taxes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.countries_taxes_id_seq OWNED BY public.countries_taxes.id;


--
-- Name: customers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.customers (
    id integer NOT NULL,
    first_name character varying,
    last_name character varying,
    email character varying,
    phone_number character varying,
    accept_emarketing bit(1),
    created_at timestamp without time zone
);


ALTER TABLE public.customers OWNER TO postgres;

--
-- Name: customers_address; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.customers_address (
    id integer NOT NULL,
    customer_id integer,
    city_id integer,
    country_id integer,
    address character varying,
    latitude numeric(10,8),
    longitude numeric(11,8),
    created_at timestamp without time zone
);


ALTER TABLE public.customers_address OWNER TO postgres;

--
-- Name: customers_address_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.customers_address_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.customers_address_id_seq OWNER TO postgres;

--
-- Name: customers_address_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.customers_address_id_seq OWNED BY public.customers_address.id;


--
-- Name: customers_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.customers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.customers_id_seq OWNER TO postgres;

--
-- Name: customers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.customers_id_seq OWNED BY public.customers.id;


--
-- Name: customers_tags; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.customers_tags (
    id integer NOT NULL,
    costumer_id integer,
    tag character varying,
    created_at timestamp without time zone
);


ALTER TABLE public.customers_tags OWNER TO postgres;

--
-- Name: customers_tags_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.customers_tags_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.customers_tags_id_seq OWNER TO postgres;

--
-- Name: customers_tags_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.customers_tags_id_seq OWNED BY public.customers_tags.id;


--
-- Name: draft_orders; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.draft_orders (
    id integer NOT NULL,
    entry_date timestamp without time zone,
    store_id integer,
    customer_id integer,
    sub_total numeric DEFAULT 0,
    tax_total numeric,
    discount_total numeric,
    total numeric,
    created_at timestamp without time zone
);


ALTER TABLE public.draft_orders OWNER TO postgres;

--
-- Name: draft_orders_details; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.draft_orders_details (
    id integer NOT NULL,
    draft_order_id integer,
    product_lot_id integer,
    quantity integer,
    price numeric,
    sub_total numeric,
    tax_total numeric,
    discount_total numeric,
    total numeric,
    created_at timestamp without time zone
);


ALTER TABLE public.draft_orders_details OWNER TO postgres;

--
-- Name: draft_orders_details_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.draft_orders_details_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.draft_orders_details_id_seq OWNER TO postgres;

--
-- Name: draft_orders_details_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.draft_orders_details_id_seq OWNED BY public.draft_orders_details.id;


--
-- Name: draft_orders_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.draft_orders_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.draft_orders_id_seq OWNER TO postgres;

--
-- Name: draft_orders_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.draft_orders_id_seq OWNED BY public.draft_orders.id;


--
-- Name: kardex; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.kardex (
    id integer NOT NULL,
    product_lot_id integer,
    type_movement_id integer,
    quantity numeric,
    created_at timestamp without time zone
);


ALTER TABLE public.kardex OWNER TO postgres;

--
-- Name: kardex_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.kardex_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.kardex_id_seq OWNER TO postgres;

--
-- Name: kardex_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.kardex_id_seq OWNED BY public.kardex.id;


--
-- Name: orders; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.orders (
    id integer NOT NULL,
    entry_date timestamp without time zone,
    store_id integer,
    customer_id integer,
    sub_total numeric,
    tax_total numeric,
    discount_total numeric,
    total numeric,
    created_at timestamp without time zone
);


ALTER TABLE public.orders OWNER TO postgres;

--
-- Name: orders_details; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.orders_details (
    id integer NOT NULL,
    order_id integer,
    product_lot_id integer,
    quantity integer,
    price numeric,
    price_rule_id integer,
    sub_total numeric,
    tax_total numeric,
    discount_total numeric,
    total numeric,
    created_at timestamp without time zone
);


ALTER TABLE public.orders_details OWNER TO postgres;

--
-- Name: orders_details_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.orders_details_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.orders_details_id_seq OWNER TO postgres;

--
-- Name: orders_details_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.orders_details_id_seq OWNED BY public.orders_details.id;


--
-- Name: orders_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.orders_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.orders_id_seq OWNER TO postgres;

--
-- Name: orders_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.orders_id_seq OWNED BY public.orders.id;


--
-- Name: price_rule; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.price_rule (
    id integer NOT NULL,
    product_id integer,
    starts_at timestamp without time zone,
    ends_at timestamp without time zone,
    price numeric,
    once_per_costumer bit(1),
    value numeric,
    percent bit(1),
    created_at timestamp without time zone
);


ALTER TABLE public.price_rule OWNER TO postgres;

--
-- Name: price_rule_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.price_rule_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.price_rule_id_seq OWNER TO postgres;

--
-- Name: price_rule_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.price_rule_id_seq OWNED BY public.price_rule.id;


--
-- Name: products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products (
    id integer NOT NULL,
    full_name character varying,
    description character varying,
    store_id integer,
    product_category_id integer,
    price numeric,
    price_compared numeric,
    cost numeric,
    country_tax_id integer,
    created_at timestamp without time zone
);


ALTER TABLE public.products OWNER TO postgres;

--
-- Name: products_categories; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products_categories (
    id integer NOT NULL,
    description character varying,
    created_at timestamp without time zone
);


ALTER TABLE public.products_categories OWNER TO postgres;

--
-- Name: products_categories_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.products_categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_categories_id_seq OWNER TO postgres;

--
-- Name: products_categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.products_categories_id_seq OWNED BY public.products_categories.id;


--
-- Name: products_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_id_seq OWNER TO postgres;

--
-- Name: products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;


--
-- Name: products_lots; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products_lots (
    id integer NOT NULL,
    product_id integer,
    entry_date timestamp without time zone,
    entry_quantity integer,
    quantity integer,
    expires_date timestamp without time zone,
    title character varying,
    product_media_id integer,
    created_at timestamp without time zone
);


ALTER TABLE public.products_lots OWNER TO postgres;

--
-- Name: products_lots_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.products_lots_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_lots_id_seq OWNER TO postgres;

--
-- Name: products_lots_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.products_lots_id_seq OWNED BY public.products_lots.id;


--
-- Name: products_media; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products_media (
    id integer NOT NULL,
    product_id integer,
    path character varying,
    primary_media boolean,
    created_at timestamp without time zone
);


ALTER TABLE public.products_media OWNER TO postgres;

--
-- Name: products_media_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.products_media_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_media_id_seq OWNER TO postgres;

--
-- Name: products_media_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.products_media_id_seq OWNED BY public.products_media.id;


--
-- Name: products_tags; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products_tags (
    id integer NOT NULL,
    product_id integer,
    tag character varying,
    created_at timestamp without time zone
);


ALTER TABLE public.products_tags OWNER TO postgres;

--
-- Name: products_tags_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.products_tags_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_tags_id_seq OWNER TO postgres;

--
-- Name: products_tags_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.products_tags_id_seq OWNED BY public.products_tags.id;


--
-- Name: stores; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.stores (
    id integer NOT NULL,
    full_name character varying,
    logo character varying,
    address character varying,
    city_id integer,
    contact_email character varying,
    created_at timestamp without time zone
);


ALTER TABLE public.stores OWNER TO postgres;

--
-- Name: stores_categories; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.stores_categories (
    id integer NOT NULL,
    store_id integer,
    description character varying,
    created_at timestamp without time zone
);


ALTER TABLE public.stores_categories OWNER TO postgres;

--
-- Name: stores_categories_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.stores_categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.stores_categories_id_seq OWNER TO postgres;

--
-- Name: stores_categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.stores_categories_id_seq OWNED BY public.stores_categories.id;


--
-- Name: stores_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.stores_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.stores_id_seq OWNER TO postgres;

--
-- Name: stores_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.stores_id_seq OWNED BY public.stores.id;


--
-- Name: types_movements; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.types_movements (
    id integer NOT NULL,
    description character varying,
    credit bit(1),
    debit bit(1),
    created_at timestamp without time zone
);


ALTER TABLE public.types_movements OWNER TO postgres;

--
-- Name: types_movements_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.types_movements_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.types_movements_id_seq OWNER TO postgres;

--
-- Name: types_movements_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.types_movements_id_seq OWNED BY public.types_movements.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    full_name character varying,
    email character varying,
    password character varying,
    store_id integer,
    created_at timestamp without time zone
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: cities id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cities ALTER COLUMN id SET DEFAULT nextval('public.cities_id_seq'::regclass);


--
-- Name: countries id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.countries ALTER COLUMN id SET DEFAULT nextval('public.countries_id_seq'::regclass);


--
-- Name: countries_currency id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.countries_currency ALTER COLUMN id SET DEFAULT nextval('public.countries_currency_id_seq'::regclass);


--
-- Name: countries_taxes id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.countries_taxes ALTER COLUMN id SET DEFAULT nextval('public.countries_taxes_id_seq'::regclass);


--
-- Name: customers id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customers ALTER COLUMN id SET DEFAULT nextval('public.customers_id_seq'::regclass);


--
-- Name: customers_address id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customers_address ALTER COLUMN id SET DEFAULT nextval('public.customers_address_id_seq'::regclass);


--
-- Name: customers_tags id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customers_tags ALTER COLUMN id SET DEFAULT nextval('public.customers_tags_id_seq'::regclass);


--
-- Name: draft_orders id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.draft_orders ALTER COLUMN id SET DEFAULT nextval('public.draft_orders_id_seq'::regclass);


--
-- Name: draft_orders_details id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.draft_orders_details ALTER COLUMN id SET DEFAULT nextval('public.draft_orders_details_id_seq'::regclass);


--
-- Name: kardex id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.kardex ALTER COLUMN id SET DEFAULT nextval('public.kardex_id_seq'::regclass);


--
-- Name: orders id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders ALTER COLUMN id SET DEFAULT nextval('public.orders_id_seq'::regclass);


--
-- Name: orders_details id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders_details ALTER COLUMN id SET DEFAULT nextval('public.orders_details_id_seq'::regclass);


--
-- Name: price_rule id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.price_rule ALTER COLUMN id SET DEFAULT nextval('public.price_rule_id_seq'::regclass);


--
-- Name: products id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);


--
-- Name: products_categories id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_categories ALTER COLUMN id SET DEFAULT nextval('public.products_categories_id_seq'::regclass);


--
-- Name: products_lots id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_lots ALTER COLUMN id SET DEFAULT nextval('public.products_lots_id_seq'::regclass);


--
-- Name: products_media id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_media ALTER COLUMN id SET DEFAULT nextval('public.products_media_id_seq'::regclass);


--
-- Name: products_tags id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_tags ALTER COLUMN id SET DEFAULT nextval('public.products_tags_id_seq'::regclass);


--
-- Name: stores id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.stores ALTER COLUMN id SET DEFAULT nextval('public.stores_id_seq'::regclass);


--
-- Name: stores_categories id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.stores_categories ALTER COLUMN id SET DEFAULT nextval('public.stores_categories_id_seq'::regclass);


--
-- Name: types_movements id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.types_movements ALTER COLUMN id SET DEFAULT nextval('public.types_movements_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: cities; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cities (id, full_name, country_id, created_at) FROM stdin;
\.


--
-- Data for Name: countries; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.countries (id, full_name, created_at) FROM stdin;
\.


--
-- Data for Name: countries_currency; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.countries_currency (id, country_id, description, abbreviation, created_at) FROM stdin;
\.


--
-- Data for Name: countries_taxes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.countries_taxes (id, country_id, description, abbreviation, value, created_at) FROM stdin;
\.


--
-- Data for Name: customers; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.customers (id, first_name, last_name, email, phone_number, accept_emarketing, created_at) FROM stdin;
\.


--
-- Data for Name: customers_address; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.customers_address (id, customer_id, city_id, country_id, address, latitude, longitude, created_at) FROM stdin;
\.


--
-- Data for Name: customers_tags; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.customers_tags (id, costumer_id, tag, created_at) FROM stdin;
\.


--
-- Data for Name: draft_orders; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.draft_orders (id, entry_date, store_id, customer_id, sub_total, tax_total, discount_total, total, created_at) FROM stdin;
\.


--
-- Data for Name: draft_orders_details; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.draft_orders_details (id, draft_order_id, product_lot_id, quantity, price, sub_total, tax_total, discount_total, total, created_at) FROM stdin;
\.


--
-- Data for Name: kardex; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.kardex (id, product_lot_id, type_movement_id, quantity, created_at) FROM stdin;
\.


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.orders (id, entry_date, store_id, customer_id, sub_total, tax_total, discount_total, total, created_at) FROM stdin;
\.


--
-- Data for Name: orders_details; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.orders_details (id, order_id, product_lot_id, quantity, price, price_rule_id, sub_total, tax_total, discount_total, total, created_at) FROM stdin;
\.


--
-- Data for Name: price_rule; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.price_rule (id, product_id, starts_at, ends_at, price, once_per_costumer, value, percent, created_at) FROM stdin;
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.products (id, full_name, description, store_id, product_category_id, price, price_compared, cost, country_tax_id, created_at) FROM stdin;
\.


--
-- Data for Name: products_categories; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.products_categories (id, description, created_at) FROM stdin;
\.


--
-- Data for Name: products_lots; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.products_lots (id, product_id, entry_date, entry_quantity, quantity, expires_date, title, product_media_id, created_at) FROM stdin;
\.


--
-- Data for Name: products_media; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.products_media (id, product_id, path, primary_media, created_at) FROM stdin;
\.


--
-- Data for Name: products_tags; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.products_tags (id, product_id, tag, created_at) FROM stdin;
\.


--
-- Data for Name: stores; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.stores (id, full_name, logo, address, city_id, contact_email, created_at) FROM stdin;
\.


--
-- Data for Name: stores_categories; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.stores_categories (id, store_id, description, created_at) FROM stdin;
\.


--
-- Data for Name: types_movements; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.types_movements (id, description, credit, debit, created_at) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, full_name, email, password, store_id, created_at) FROM stdin;
\.


--
-- Name: cities_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cities_id_seq', 1, false);


--
-- Name: countries_currency_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.countries_currency_id_seq', 1, false);


--
-- Name: countries_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.countries_id_seq', 1, false);


--
-- Name: countries_taxes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.countries_taxes_id_seq', 1, false);


--
-- Name: customers_address_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.customers_address_id_seq', 1, false);


--
-- Name: customers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.customers_id_seq', 1, false);


--
-- Name: customers_tags_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.customers_tags_id_seq', 1, false);


--
-- Name: draft_orders_details_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.draft_orders_details_id_seq', 1, false);


--
-- Name: draft_orders_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.draft_orders_id_seq', 1, false);


--
-- Name: kardex_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.kardex_id_seq', 1, false);


--
-- Name: orders_details_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.orders_details_id_seq', 1, false);


--
-- Name: orders_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.orders_id_seq', 1, false);


--
-- Name: price_rule_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.price_rule_id_seq', 1, false);


--
-- Name: products_categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.products_categories_id_seq', 1, false);


--
-- Name: products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.products_id_seq', 1, false);


--
-- Name: products_lots_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.products_lots_id_seq', 1, false);


--
-- Name: products_media_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.products_media_id_seq', 1, false);


--
-- Name: products_tags_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.products_tags_id_seq', 1, false);


--
-- Name: stores_categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.stores_categories_id_seq', 1, false);


--
-- Name: stores_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.stores_id_seq', 1, false);


--
-- Name: types_movements_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.types_movements_id_seq', 1, false);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 1, false);


--
-- Name: cities cities_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cities
    ADD CONSTRAINT cities_pkey PRIMARY KEY (id);


--
-- Name: countries_currency countries_currency_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.countries_currency
    ADD CONSTRAINT countries_currency_pkey PRIMARY KEY (id);


--
-- Name: countries countries_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.countries
    ADD CONSTRAINT countries_pkey PRIMARY KEY (id);


--
-- Name: countries_taxes countries_taxes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.countries_taxes
    ADD CONSTRAINT countries_taxes_pkey PRIMARY KEY (id);


--
-- Name: customers_address customers_address_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customers_address
    ADD CONSTRAINT customers_address_pkey PRIMARY KEY (id);


--
-- Name: customers customers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customers
    ADD CONSTRAINT customers_pkey PRIMARY KEY (id);


--
-- Name: customers_tags customers_tags_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customers_tags
    ADD CONSTRAINT customers_tags_pkey PRIMARY KEY (id);


--
-- Name: draft_orders_details draft_orders_details_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.draft_orders_details
    ADD CONSTRAINT draft_orders_details_pkey PRIMARY KEY (id);


--
-- Name: draft_orders draft_orders_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.draft_orders
    ADD CONSTRAINT draft_orders_pkey PRIMARY KEY (id);


--
-- Name: kardex kardex_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.kardex
    ADD CONSTRAINT kardex_pkey PRIMARY KEY (id);


--
-- Name: orders_details orders_details_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders_details
    ADD CONSTRAINT orders_details_pkey PRIMARY KEY (id);


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id);


--
-- Name: price_rule price_rule_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.price_rule
    ADD CONSTRAINT price_rule_pkey PRIMARY KEY (id);


--
-- Name: products_categories products_categories_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_categories
    ADD CONSTRAINT products_categories_pkey PRIMARY KEY (id);


--
-- Name: products_lots products_lots_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_lots
    ADD CONSTRAINT products_lots_pkey PRIMARY KEY (id);


--
-- Name: products_media products_media_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_media
    ADD CONSTRAINT products_media_pkey PRIMARY KEY (id);


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


--
-- Name: products_tags products_tags_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_tags
    ADD CONSTRAINT products_tags_pkey PRIMARY KEY (id);


--
-- Name: stores_categories stores_categories_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.stores_categories
    ADD CONSTRAINT stores_categories_pkey PRIMARY KEY (id);


--
-- Name: stores stores_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.stores
    ADD CONSTRAINT stores_pkey PRIMARY KEY (id);


--
-- Name: types_movements types_movements_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.types_movements
    ADD CONSTRAINT types_movements_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: cities cities_country_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cities
    ADD CONSTRAINT cities_country_id_fkey FOREIGN KEY (country_id) REFERENCES public.countries(id);


--
-- Name: countries_currency countries_currency_country_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.countries_currency
    ADD CONSTRAINT countries_currency_country_id_fkey FOREIGN KEY (country_id) REFERENCES public.countries(id);


--
-- Name: countries_taxes countries_taxes_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.countries_taxes
    ADD CONSTRAINT countries_taxes_id_fkey FOREIGN KEY (id) REFERENCES public.countries(id);


--
-- Name: customers_address customers_address_city_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customers_address
    ADD CONSTRAINT customers_address_city_id_fkey FOREIGN KEY (city_id) REFERENCES public.cities(id);


--
-- Name: customers_address customers_address_country_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customers_address
    ADD CONSTRAINT customers_address_country_id_fkey FOREIGN KEY (country_id) REFERENCES public.countries(id);


--
-- Name: customers_address customers_address_customer_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customers_address
    ADD CONSTRAINT customers_address_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES public.customers(id);


--
-- Name: customers_tags customers_tags_costumer_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customers_tags
    ADD CONSTRAINT customers_tags_costumer_id_fkey FOREIGN KEY (costumer_id) REFERENCES public.customers(id);


--
-- Name: draft_orders draft_orders_customer_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.draft_orders
    ADD CONSTRAINT draft_orders_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES public.customers(id);


--
-- Name: draft_orders_details draft_orders_details_draft_order_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.draft_orders_details
    ADD CONSTRAINT draft_orders_details_draft_order_id_fkey FOREIGN KEY (draft_order_id) REFERENCES public.draft_orders(id);


--
-- Name: draft_orders_details draft_orders_details_product_lot_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.draft_orders_details
    ADD CONSTRAINT draft_orders_details_product_lot_id_fkey FOREIGN KEY (product_lot_id) REFERENCES public.products_lots(id);


--
-- Name: draft_orders draft_orders_store_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.draft_orders
    ADD CONSTRAINT draft_orders_store_id_fkey FOREIGN KEY (store_id) REFERENCES public.stores(id);


--
-- Name: kardex kardex_product_lot_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.kardex
    ADD CONSTRAINT kardex_product_lot_id_fkey FOREIGN KEY (product_lot_id) REFERENCES public.products_lots(id);


--
-- Name: kardex kardex_type_movement_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.kardex
    ADD CONSTRAINT kardex_type_movement_id_fkey FOREIGN KEY (type_movement_id) REFERENCES public.types_movements(id);


--
-- Name: orders orders_customer_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES public.customers(id);


--
-- Name: orders_details orders_details_order_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders_details
    ADD CONSTRAINT orders_details_order_id_fkey FOREIGN KEY (order_id) REFERENCES public.orders(id);


--
-- Name: orders_details orders_details_price_rule_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders_details
    ADD CONSTRAINT orders_details_price_rule_id_fkey FOREIGN KEY (price_rule_id) REFERENCES public.price_rule(id);


--
-- Name: orders_details orders_details_product_lot_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders_details
    ADD CONSTRAINT orders_details_product_lot_id_fkey FOREIGN KEY (product_lot_id) REFERENCES public.products_lots(id);


--
-- Name: orders orders_store_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_store_id_fkey FOREIGN KEY (store_id) REFERENCES public.stores(id);


--
-- Name: price_rule price_rule_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.price_rule
    ADD CONSTRAINT price_rule_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id);


--
-- Name: products products_country_tax_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_country_tax_id_fkey FOREIGN KEY (country_tax_id) REFERENCES public.countries_taxes(id);


--
-- Name: products_lots products_lots_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_lots
    ADD CONSTRAINT products_lots_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id);


--
-- Name: products_media products_media_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_media
    ADD CONSTRAINT products_media_id_fkey FOREIGN KEY (id) REFERENCES public.products(id);


--
-- Name: products products_product_category_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_product_category_id_fkey FOREIGN KEY (product_category_id) REFERENCES public.products_categories(id);


--
-- Name: products products_store_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_store_id_fkey FOREIGN KEY (store_id) REFERENCES public.stores(id);


--
-- Name: products_tags products_tags_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_tags
    ADD CONSTRAINT products_tags_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id);


--
-- Name: stores_categories stores_categories_store_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.stores_categories
    ADD CONSTRAINT stores_categories_store_id_fkey FOREIGN KEY (store_id) REFERENCES public.stores(id);


--
-- Name: stores stores_city_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.stores
    ADD CONSTRAINT stores_city_id_fkey FOREIGN KEY (city_id) REFERENCES public.cities(id);


--
-- Name: users users_store_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_store_id_fkey FOREIGN KEY (store_id) REFERENCES public.stores(id);


--
-- PostgreSQL database dump complete
--

