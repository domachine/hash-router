
build: components index.js
	@node_modules/.bin/component build --dev

components: component.json
	@node_modules/.bin/component install --dev

examples: build
	@node examples

test: build
	@echo Open test/index.html in your browser

clean:
	rm -fr build components template.js

.PHONY: clean build
