# The shell we use
SHELL := /bin/bash

# We like colors
# From: https://coderwall.com/p/izxssa/colored-makefile-for-golang-projects
RED=`tput setaf 1`
GREEN=`tput setaf 2`
RESET=`tput sgr0`
YELLOW=`tput setaf 3`

# Vars
NAME = api-docs
#VERSION := $(shell cat VERSION)
DOCKER := $(bash docker)
OPENAPISPEC = openapi.yaml

# Add the following 'help' target to your Makefile
# And add help text after each target name starting with '\#\#'
.PHONY: help
help: ## This help message
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.PHONY:
run: ## Start container in developer mode
	@echo "$(YELLOW)==> Running local in developer mode $(RESET)"
	@docker run --rm -p 3000:3000 --name api-docs-dev api-docs-dev1

.PHONY: build-local
build-local: ## Create a local test build
	@echo "$(YELLOW)==> Creating local build $(RESET)"
	@yarn run build

.PHONY: serve-local
serve-local: ## Serving "build" directory at "http://localhost:3000/"
	@echo "$(YELLOW)==> Serving "build" directory at "http://localhost:3000/" $(RESET)"
	@yarn run serve

.PHONY: redoc
redoc: ## Use ReDoc to view OpenAPI spec as HTML (standalone without docs)
	@echo "$(YELLOW)==> Starting ReDoc $(RESET)"
	@./node_modules/.bin/redoc-cli serve --watch openapi.yaml

.PHONY: lint-openapi
lint-openapi: ## Lint OpenAPI spec with Spectral
	@echo "$(YELLOW)==> Linting OpenAPI spec $(RESET)"
	@./node_modules/.bin/spectral lint openapi.yaml

.PHONY: build-prod
build-prod: ## Build production image
	@docker build --no-cache=true -t $(NAME) -f Dockerfile .

.PHONY: run-prod
run-prod: ## Start prod container locally on port 8080
	@echo "$(YELLOW)==> Please open your browser localhost:8080$(RESET)"
	@docker run --rm -p 8080:8080 --name public-api-docs $(NAME):latest
