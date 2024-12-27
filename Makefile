help:
	@cat Makefile
up:
	docker compose up -d

down:
	docker compose down


restart: down up

bash:
	docker compose exec -ti node bash