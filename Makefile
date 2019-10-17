.PHONY:start
start:
	hugo server -D


.PHONY:build
build:
	hugo

.PHONY: deploy
deploy: build
	firebase deploy