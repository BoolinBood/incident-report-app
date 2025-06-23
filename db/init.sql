CREATE TYPE report_status AS ENUM ('Open', 'InProgress', 'Success');

CREATE TABLE category (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE incident_report (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title VARCHAR(80) NOT NULL,
  description TEXT,
  category_id INT NOT NULL,
  status report_status NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_category FOREIGN KEY (category_id) REFERENCES category(id)
);

INSERT INTO category (name) VALUES 
('Safety'),
('Maintenance');

INSERT INTO incident_report (title, description, category_id, status, created_at) VALUES 
('Fire alarm malfunction', 'The fire alarm on floor 5 is going off randomly.', 1, 'Open', NOW() - INTERVAL '1 day'),
('Wet floor sign missing', 'No caution sign placed near spill in hallway.', 1, 'InProgress', NOW() - INTERVAL '2 days'),
('Loose wiring in break room', 'Exposed wires behind the vending machine.', 1, 'Success', NOW() - INTERVAL '5 days'),
('Air conditioner not working', 'The AC in the main office is not cooling properly.', 2, 'Open', NOW() - INTERVAL '3 days'),
('Broken light fixture', 'Ceiling light is flickering in conference room A.', 2, 'Success', NOW() - INTERVAL '4 days'),
('Slippery staircase', 'Staircase near emergency exit is slippery when wet.', 1, 'Open', NOW() - INTERVAL '6 hours'),
('Elevator door jammed', 'Elevator door on B2 floor gets stuck sometimes.', 2, 'InProgress', NOW() - INTERVAL '1 day'),
('First aid kit expired', 'All items in first aid box are expired.', 1, 'Success', NOW() - INTERVAL '7 days'),
('Toilet flush broken', 'Flush not working in 2nd floor restroom.', 2, 'InProgress', NOW() - INTERVAL '3 hours'),
('Emergency exit blocked', 'Exit door near cafeteria is blocked by furniture.', 1, 'Open', NOW() - INTERVAL '12 hours');
