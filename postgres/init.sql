-- init.sql
-- CREATE DATABASE budgy_dev;

\c budgy_dev;

CREATE TABLE transaction_type (
    transaction_type_id SERIAL PRIMARY KEY,
    type_name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE transaction (
    transaction_id SERIAL PRIMARY KEY,
    transaction_name VARCHAR(100) NOT NULL,
    amount NUMERIC(10, 2) NOT NULL,
    transaction_type_id INT NOT NULL,
    user_id UUID NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT NULL,
    CONSTRAINT fk_transaction_type
        FOREIGN KEY (transaction_type_id) 
        REFERENCES transaction_type (transaction_type_id) 
        ON DELETE CASCADE
);
