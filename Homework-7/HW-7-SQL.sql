select first_name, last_name
from actor;

select UPPER(CONCAT(first_name, last_name)) as 'Actor Name'
from actor;

select*from actor;

select actor_id, first_name, last_name
from actor
where first_name = "Joe";

select last_name
from actor
where last_name like '%GEN%';

select last_name, first_name
from actor
where last_name like '%LI%'; 

select country_id, country
from country
where country in ('Afghanistan','Bangladesh','China');

select*from county

select*from actor  
add column description VARCHAR(25);

alter table actor
modify column description blob;
drop column  description;


select last_name, count(*) as 'Number Of Actors'
from actor group by last_name;

select last_name, count(*) as 'Number Of Actors'
from actor group by last_name having count(*) >=2;

update actor 
set first_name = 'HARPO'
where first_name = 'GROUCHO' and last_name ='WILLIAMS';

select* from actor;

update actor
set first_name = 'GROUCHO'
where actor_id = 172;

select*from actor;

describe sakila.address;

select*from staff;
select*from address;
select*from payment;

select first_name, last_name, address
from staff s
join address a
on s.address_id = a.address_id;

SELECT payment.staff_id, staff.first_name, staff.last_name, payment.amount, payment.payment_date
FROM staff INNER JOIN payment ON
staff.staff_id = payment.staff_id AND payment_date LIKE '2005-08%'; 

select*from film;

select f.title as 'Film Title', count(fa.actor_id) as 'Number Of Actors'
from film_actor fa
inner join film f
on fa.film_id = f.film_id
group by f.title;



select from title 
select count (*)from inventory
where film.film_id = inventory.film_id
as 'Number of copies'
from film
where title='Hunchback Impossible';

select*from payment;
select*from customer;

select c.first_name, c.last_name, sum(p.amount) as 'Total Pay'
from customer c
join payment p
on c.customer_id = p.customer_id;
group by c.last_name;

select title
from film where title
like 'K%' or title like 'Q%'
and title in
(
select title 
from film
where language_id = 1
);

select first_name, Last_name
from actor
where actor_id in
(
select actot_id
from film_actor
where film_id in
(
select film_id
from film
where title = 'Alone Trip'
));

select cus.first_name, cus.last_name, cus.email
from customer cus
join address a
on(cus.address_id = a.address_id)
join city cty
on(cty.city_id = a.city_id)
join country
on(country.country_id = cty.country_id)
where country= 'Canada';

select*from film;

select title, description from film
where film_id in
(
select film_id from film_category
where category_id in
(
select category_id from category
where name ="family"
));

select f.title, count(rental_id) as 'Times Rented'
from rental r
join inventory i
on(r.inventory_id = i.inventory_id)
join film f
on (i.film_id = f.film_id)
group by f.title
group by 'Times Rented' desc;

select*from store;

select s.store_id, sum(amount) as 'Revenue'
from payment p 
join rental r 
on (p.rental_id = r.rental_id)
join inventory i 
on (i.inventory_id = r.inventory_id)
join store s 
on (s.store_id = i.store_id)
group by s.store_id;

select s.store_id, cty.city, country.country
from store s 
join address a 
on (s.address_id = a.address_id)
join city cty
on (cty.city_id = a.city_id)
join country
on (country.country_id = cty.country_id);

select c.name as 'Genre', sum(p.amount) as 'Gross'
from category c 
join film_category fc
on (c.category_id=fc.category_id)
join inventory i 
on (fc.film_id=i.film_id)
join rental r 
on (i.inventory_id=r.inventory_id)
join payment p 
on(r.rental_id=p.rental_id)
group by c.name order by Gross limit 5;

create view genre_revenue as
select c.name as 'Genre', sum(p.amount) as 'Gross'
from category c 
join film_category fc 
on (c.category_id=fc.category_id)
join inventory i 
on (fc.film_id=i.film_id)
join inventory i 
on (fc.film_id=i.film_id)
join rental r 
on(i.inventory_id=r.inventory_id)
join payment p 
on(r.rental_id=p.rental_id)
group by c.name order by gross limit 5;

select*from genre_revenue;

drop view genre_revenue;
