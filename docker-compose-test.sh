docker compose -f docker-compose.db.mariadb.yml run --rm --quiet-pull node
docker compose -f docker-compose.db.mariadb.yml down -v -t0
