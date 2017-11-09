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
VALUES ("Bose Bluetooth Speaker", "Electronics", 179, 40);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sony 43-inch Smart TV", "Electronics", 548, 17);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Geneva Office Chair", "Home", 120, 9);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Porthos Office Chair", "Home", 117, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Antique Vintage Bar Stool", "Home", 69, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("KONG Classic", "Pet", 7, 65);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dogwood Chew Toy", "Pet", 5, 31);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pyramid of Success", "Books", 11, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Inch and Miles", "Books", 13, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Coach Wooden and Me", "Books", 20, 6);