CREATE TABLE rent_a_book(
Title varchar(255),
Author varchar(255),
rentingprice int(255),
username varchar(255),
date_of_rent date(20),
due_date date(20)
);

INSERT INTO administration (Title, Author, rentingprice, username, date_of_rent, due_date)
VALUES ('Harry Potter and the goblet of fire', 'J. K. Rowling', '2', 'user_123', '20.03.2022', '20.04.2022');