#! /bin/bash
test () {
  file=test/stack/docker-compose.$1.yml

  printf "\n================================================================\n"
  printf "TEST $file"
  printf "\n================================================================\n"

  docker compose -f $file run --quiet-pull --remove-orphans --rm node

  status=$?

  docker compose -f $file down --remove-orphans --volumes --timeout 0

  if [ $status != 0 ]; then
    exit 1
  fi

  sleep 1
}

test db.memory
test db.mysql
test db.sqlite
