DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
	id INTEGER(11) AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(30) NOT NULL,
	department_name VARCHAR(30) NOT NULL,
	price INTEGER(30),
	stock_quantity INTEGER(10),
	PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bose SoundLink Mini Bluetooth Speaker", "Electronics", 179, 40);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sony 43-inch 4K Smart LED TV", "Electronics", 548, 17);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Armen Living Geneva Office Chair", "Home", 120, 9);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Porthos Home Dallas Adjustable Office Chair", "Home", 117, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("TOPOWER American Antique vintage Industrial Bar Stool", "Home", 69, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("KONG Classic", "Pet", 7, 65);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dogwood Durable Real Wood Dog Chew Toy", "Pet", 5, 31);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Coach Wooden's Pyramid of Successr", "Books", 11, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Inch and Miles: The Journey to Success", "Books", 13, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Coach Wooden and Me: Our 50-Year Friendship On and Off the Court", "Books", 20, 6);