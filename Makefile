# Makefile
install: # install dependences
	npm install
	npm ci
brain-games: # execute file bin/brain-games.js
	node bin/brain-games.js
publish:
	npm publish --dry-run
lint: # execute eslint
	npx eslint .
brain-even: # execute file bin/brain-even.js
	node bin/brain-even.js
brain-calc: # execute file bin/brain-calc.js
	node bin/brain-calc.js
brain-gcd: # execute file bin/brain-gcd.js
	node bin/brain-gcd.js
brain-progression: # execute file bin/brain-progression.js
	node bin/brain-progression.js
