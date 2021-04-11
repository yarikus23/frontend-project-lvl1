# Makefile
install: # install dependences
	npm install
	npm ci
brain-games: # execute file bin/brain-games.js
	node bin/brain-games.js
publish:
	npm publish --dry-run