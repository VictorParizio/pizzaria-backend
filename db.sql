CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL
);

CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    order_date DATE NOT NULL,
    total_price DECIMAL(10,2) NOT NULL,
    user_id INT NOT NULL REFERENCES users(user_id)
);

CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(100) NOT NULL,
    product_description TEXT NOT NULL,
    product_price DECIMAL(10,2) NOT NULL,
    product_image_url VARCHAR(255)
);

CREATE TABLE order_product (
    order_code_id SERIAL PRIMARY KEY,
    order_id SMALLINT NOT NULL REFERENCES orders(order_id),
    product_id SMALLINT NOT NULL REFERENCES products(product_id),
    product_quantity SMALLINT NOT NULL,
    unit_price DECIMAL(10,2)
);

CREATE TABLE testimonials (
    testimonial_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    name TEXT NOT NULL,
    rating VARCHAR(10) NOT NULL,
    testimonial TEXT NOT NULL
);

INSERT INTO products (product_name, product_description, product_price, product_image_url)
VALUES
  ('Bacon com Milho', 'Pizza com molho de tomate, mozarela, bacon, milho e cebola.', '29.99', 'https://raw.githubusercontent.com/VictorParizio/images-pizza/main/pizzas/BaconMilho.jpeg'),
  ('Calabresa', 'Saborosa pizza com molho de tomate, mozarela, calabresa, cebola e azeitonas.', '26.99', 'https://raw.githubusercontent.com/VictorParizio/images-pizza/main/pizzas/Calabresa.jpeg'),
  ('Camarão com Catupiry', 'Pizza com molho de tomate, mozarela, camarão, catupiry e cebola.', '35.99', 'https://raw.githubusercontent.com/VictorParizio/images-pizza/main/pizzas/CamaraoCatupiry.jpeg'),
  ('Frango com Catupiry', 'Uma opção cremosa com molho de tomate, mozarela, frango desfiado e catupiry.', '28.99', 'https://raw.githubusercontent.com/VictorParizio/images-pizza/main/pizzas/FrangoCatupiry.jpeg'),
  ('Margherita', 'Clássica pizza italiana com molho de tomate, mozarela e manjericão fresco.', '25.99', 'https://raw.githubusercontent.com/VictorParizio/images-pizza/main/pizzas/Margherita.jpeg'),
  ('Margherita Especial', 'Versão especial da clássica Margherita, com mozarela de búfala e manjericão fresco.', '31.99', 'https://raw.githubusercontent.com/VictorParizio/images-pizza/main/pizzas/MargheritaEspecial.jpeg'),
  ('Mexicana', 'Pizza com molho de tomate, mozarela, carne moída, pimenta jalapeño, pimentão e cebola.', '33.99', 'https://raw.githubusercontent.com/VictorParizio/images-pizza/main/pizzas/Mexicana.jpeg'),
  ('Napolitana', 'Pizza com molho de tomate, mozarela, tomate em rodelas, azeitonas e manjericão fresco.', '30.99', 'https://raw.githubusercontent.com/VictorParizio/images-pizza/main/pizzas/Napolitana.jpeg'),
  ('Pepperoni', 'Uma explosão de sabor com molho de tomate, mozarela e fatias generosas de pepperoni.', '27.99', 'https://raw.githubusercontent.com/VictorParizio/images-pizza/main/pizzas/Pepperoni.jpeg'),
  ('Portuguesa', 'Tradicional pizza com molho de tomate, mozarela, presunto, mussarela, ovo, cebola e azeitonas.', '30.99', 'https://raw.githubusercontent.com/VictorParizio/images-pizza/main/pizzas/Portuguesa.jpeg'),
  ('Quatro Queijos', 'Deliciosa combinação de molho de tomate, mozarela, gorgonzola, parmesão e provolone.', '29.99', 'https://raw.githubusercontent.com/VictorParizio/images-pizza/main/pizzas/QuatroQueijos.jpeg'),
  ('Rúcula com Tomate Seco', 'Pizza com molho de tomate, mozarela, rúcula e tomate seco.', '32.99', 'https://raw.githubusercontent.com/VictorParizio/images-pizza/main/pizzas/RuculaTomateSeco.jpeg'),
  ('Siciliana', 'Pizza com molho de tomate, mozarela, aliche, orégano e azeitonas.', '31.99', 'https://raw.githubusercontent.com/VictorParizio/images-pizza/main/pizzas/Siciliana.jpeg'),
  ('Toscana', 'Pizza com molho de tomate, mozarela, calabresa, bacon e cebola.', '28.99', 'https://raw.githubusercontent.com/VictorParizio/images-pizza/main/pizzas/Toscana.jpeg'),
  ('Vegetariana', 'Saborosa opção vegetariana com molho de tomate, mozarela, pimentão, cebola, tomate, azeitonas e ervilhas.', '27.99', 'https://raw.githubusercontent.com/VictorParizio/images-pizza/main/pizzas/Vegetariana.jpeg');
    
INSERT INTO testimonials (user_id, name, rating, testimonial) VALUES
(1, 'Maria Silva', '⭐⭐⭐⭐⭐', 'A PizzarIA realmente superou minhas expectativas! Nunca imaginei que uma inteligência artificial pudesse criar pizzas tão saborosas.'),
(2, 'João Oliveira', '⭐⭐⭐⭐⭐', 'Como um entusiasta de tecnologia, fiquei intrigado quando ouvi falar da PizzarIA. As pizzas são incrivelmente criativas e deliciosas.'),
(3, 'Ana Souza', '⭐⭐⭐⭐⭐', 'Sou vegetariana e sempre tive dificuldade em encontrar boas opções de pizza. Mas isso mudou com a PizzarIA!'),
(4, 'Carlos Santos', '⭐⭐⭐⭐⭐', 'Como um aficionado por pizzas, estou sempre em busca da próxima grande novidade. E encontrei isso na PizzarIA.'),
(5, 'Juliana Ferreira', '⭐⭐⭐⭐⭐', 'A PizzarIA é simplesmente revolucionária! Eu e meus amigos estamos maravilhados com a qualidade e a originalidade das pizzas.'),
(6, 'Rafael Oliveira', '⭐⭐⭐⭐⭐', 'Depois de experimentar suas criações, fiquei impressionado! Estou completamente satisfeito e vou recomendar a todos os meus amigos!');




