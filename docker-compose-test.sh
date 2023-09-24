stack=$1
test=$2

docker compose -f docker-compose.$stack.yml run --rm --quiet-pull node yarn test:ci -c jest.config.$test.json
docker compose -f docker-compose.$stack.yml down
