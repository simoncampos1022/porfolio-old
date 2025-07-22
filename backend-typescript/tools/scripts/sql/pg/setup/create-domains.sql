-- Domains for text fields
CREATE DOMAIN dom_char AS char(1) DEFAULT '';

CREATE DOMAIN dom_comment AS varchar(200) DEFAULT '';

CREATE DOMAIN dom_comment_long AS varchar(400) DEFAULT '';

CREATE DOMAIN dom_comment_xlong AS varchar(1000) DEFAULT '';

CREATE DOMAIN dom_lib AS varchar(50) DEFAULT '';

CREATE DOMAIN dom_lib_short AS varchar(20) DEFAULT '';

CREATE DOMAIN dom_lib_long AS varchar(100) DEFAULT '';

CREATE DOMAIN dom_lib_xlong AS varchar(200) DEFAULT '';

CREATE DOMAIN dom_text AS text DEFAULT '';

-- Domains for date/time fields
CREATE DOMAIN dom_date AS date DEFAULT NULL;

CREATE DOMAIN dom_datetime AS timestamp with time zone DEFAULT NULL;

CREATE DOMAIN dom_time AS time DEFAULT NULL;

-- Domains for boolean fields
CREATE DOMAIN dom_boolean AS boolean DEFAULT false;

-- Domains for numeric fields
CREATE DOMAIN dom_float AS float DEFAULT 0;

CREATE DOMAIN dom_integer AS integer DEFAULT 0;

CREATE DOMAIN dom_bigint AS bigint DEFAULT 0;

CREATE DOMAIN dom_numeric AS numeric(15, 2) DEFAULT 0;

-- Domains for keys
CREATE DOMAIN dom_fk AS integer DEFAULT NULL;

CREATE DOMAIN dom_pk AS integer DEFAULT NULL;

-- Special domains
CREATE DOMAIN dom_uuid AS uuid DEFAULT NULL;