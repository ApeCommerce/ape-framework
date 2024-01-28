#! /bin/bash
stack=$1

test () {
  file=$1

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

if ! [-z $stack]; then
  test test/stack/docker-compose.$stack.yml
else
  for file in test/stack/docker-compose.*.yml; do
    test $file
  done
fi
