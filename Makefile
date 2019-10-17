
.PHONY:new-post
new-post:
	docker run --rm -it -v $(PWD):/src -u hugo jguyomard/hugo-builder hugo new posts/${post}


.PHONY:start
start:
	# docker run --rm -it -v $(PWD):/src -p 1313:1313 -u hugo jguyomard/hugo-builder hugo server -w --bind=0.0.0.0
	hugo server -D


.PHONY:build
build:
	hugo

.PHONY: deploy
deploy: build
	firebase deploy