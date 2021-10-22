
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

-- sql to get active user information
SELECT DISTINCT ON (username) username, "location"."state", "location"."resort", "location"."date", "user"."is_on_snow" FROM "user" 
JOIN "location" ON "user"."id" = "location"."user_id"
ORDER BY username, "date" DESC;