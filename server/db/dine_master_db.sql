-- \l to list all the databases --

-- \c <name of database> to connect to a particular database --

-- \d to list all the tables in the connected database --

-- \d <name of the table> lists the fields of the tables along with their data types --



CREATE TABLE restaurants(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    price_range INT NOT NULL check(price_range >= 1 AND price_range <= 5)
);

INSERT INTO restaurants (name,location,price_range) VALUES('The Laughing Buddha','Manipal',3);
INSERT INTO restaurants (name,location,price_range) VALUES('Mc Donalds','Manipal',2);
INSERT INTO restaurants (name,location,price_range) VALUES('Pizza Hut','Manipal',2);
INSERT INTO restaurants (name,location,price_range) VALUES('Vitos','Manipal',3);
INSERT INTO restaurants (name,location,price_range) VALUES('Manna Rolls','Manipal',1);
INSERT INTO restaurants (name,location,price_range) VALUES('Beera Mutton','Lucknow',2);

SELECT * FROM restaurants;








CREATE TABLE reviews (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    restaurant_id BIGINT NOT NULL REFERENCES restaurants(id),
    name VARCHAR(50) NOT NULL,
    review TEXT NOT NULL,
    rating INT NOT NULL check(
        rating >= 1
        and rating <= 5
    )
);
select *
from restaurants
    left join(
        select restaurant_id,
            count(*),
            TRUNC(AVG(rating, 1)) as average_rating
        from reviews
        group by restaurant_id
    ) reviews on restaurants.id = reviews.restaurant_id;

