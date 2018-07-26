# ------------------------------------------------------------------------------
# Available targets
# ------------------------------------------------------------------------------
.PHONY : all package

PREFIX ?= $(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))
SLUG ?= $(shell basename $(shell dirname $(realpath $(lastword $(MAKEFILE_LIST)))))

all : 
	@npm install --quiet --progress=false > /dev/null
	@npm run build --quiet --progress=false > /dev/null

clean :
	@rm -Rf dist/

distclean : clean
	@rm -Rf node_modules
	
package :
	@zip -q ${PREFIX}/${SLUG}.zip *.md *.php
	@zip -qur ${PREFIX}/${SLUG}.zip dist/ lib/ resources/ src/ vendor/
