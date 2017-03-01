define npm_script_targets
TARGETS := $(shell node -e 'for (var k in require("./package.json").scripts) {console.log(k.replace(/:/g, "-"));}')
$$(TARGETS):
	yarn $(subst -,:,$(MAKECMDGOALS))

.PHONY: $$(TARGETS) yarn webpack update
endef

$(eval $(call npm_script_targets))

install:
	@echo " --- Installing yarn"
	make install-yarn
	@sleep 2s
	@echo " --- CInstalling libs"
	make yarn
	@echo " --- Compil webpack"
	make webpack
	@echo "SUCCESS"

install-yarn:
	npm install yarn@latest -g

update:
	@echo " --- Updating dependencies"
	make yarn
	@echo " --- Compil webpack"
	make webpack
	@echo "SUCCESS"

yarn:
	yarn

webpack:
	webpack --progress