CREATE TABLE deals (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  company TEXT,
  sector TEXT,
  geography TEXT,
  size_musd NUMERIC,
  stage TEXT NOT NULL DEFAULT 'Sourcing',
  owner TEXT,
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);

CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  deal_id INT REFERENCES deals(id),
  title TEXT NOT NULL,
  due_at DATE,
  assignee TEXT,
  status TEXT DEFAULT 'open'
);
