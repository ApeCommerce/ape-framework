docker compose -f docker-compose.db.mysql.yml run --rm --quiet-pull node
docker compose -f docker-compose.db.mysql.yml down -v -t0
