DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products (
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(45) NOT NULL,
  department_name VARCHAR(30) NOT NULL,
  price DECIMAL(10, 2),
  stock_quantity INTEGER(11),
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Corn Dog Fryer", "Cookware", 50.00, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Fondue Set", "Cookware", 25.00, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Ice Cream Maker", "Cookware", 15.00, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Tarot Cards", "Games", 10.00, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nagchampa Insense", "Home Decor", 5.00, 125);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Salt Lamp", "Home Decor", 15.00, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Neti Pot", "Wellness", 10.00, 120);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("101 Easy Homemade Productsproducts", "Books", 20.00, 75);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dragon Food", "Pets", 15.00, 55);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Avatar Costume", "Parties & Fun", 10.00, 120);

