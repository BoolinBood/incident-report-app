-- 1. Create the ENUM type for report_status
CREATE TYPE report_status AS ENUM ('Open', 'InProgress', 'Success');

-- 2. Create the category table
CREATE TABLE category (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

-- 3. Create the incident_report table
CREATE TABLE incident_report (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title VARCHAR(80) NOT NULL,
  description TEXT,
  category_id INT NOT NULL,
  status report_status NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_category FOREIGN KEY (category_id) REFERENCES category(id)
);
