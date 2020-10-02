To create a dump:

```bash
# Postgress Dump
docker exec -it tally-web_postgres_1 /bin/bash
  # Inside the shell...
  pg_dump -U postgres -d postgres > dump.sql

  ###### To add DB from dump to postgres ######
  # dropdb postgres -U postgres
  # createdb postgres -U postgres
  # psql -U postgres -d postgres < /[path to dump]
  #

# Copy dump.sql from the container
docker cp tally-web_postgres_1:/dump.sql ./

# Copy from local to container
docker cp ./[path to dump file] tally-web_postgres_1:/dump.sql

# Hasura metadata
# We need to recreate hasura metadata when the DB changes
hasura init hasura --endpoint https://tally-graphql.com/ # if we dont have any metadata
hasura migrate create "init" --from-server --schema "public"
hasura migrate apply --version "<version>" --skip-execution
hasura migrate status
```
