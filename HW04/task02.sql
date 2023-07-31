-- create
CREATE TABLE StudentGroup (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  age INTEGER NOT NULL,
  address TEXT NOT NULL
);

-- insert
INSERT INTO StudentGroup (id, name, age, address) VALUES
            (1, 'Клава', 25, 'ул. Текстильщиков'),
            (2, 'Саша', 18, 'пер. Кривой'),
            (3, 'Гарик', 20, 'Хогвартс'),
            (4, 'Даша', 40, 'Мордор');

-- select
SELECT * FROM StudentGroup;