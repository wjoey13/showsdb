#!/bin/bash

export PGPASSWORD="nodepass"
database="animedb"

echo "configuring database: $database"

dropdb -U node_user animedb
createdb -U node_user animedb

psql -U node_user animedb < ./bin/sql/anime.sql

echo "$database was configured"