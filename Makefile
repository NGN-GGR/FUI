# Regenerate Frollo design-token artifacts from DESIGN.md.
#
# DESIGN.md is the single source of truth. The three derived files
# (tailwind.theme.json, tokens.json, lint.json) are pure exports —
# never hand-edit any of them. Edit DESIGN.md, then `make`.
#
# Targets
#   make            same as `make all`
#   make all        regenerate all three derived files if DESIGN.md is newer
#   make tokens     regenerate tailwind.theme.json + tokens.json only
#   make tailwind   regenerate tailwind.theme.json only
#   make dtcg       regenerate tokens.json (W3C DTCG) only
#   make lint       run the linter and print findings to stdout
#   make lint-json  regenerate lint.json (linter output as JSON)
#   make check      verify all three derived files match a fresh re-run —
#                   exits non-zero if any have drifted. Suitable for
#                   CI / pre-commit.
#   make clean      remove the generated artifacts
#
# Note: Make is timestamp-based. If a derived file is somehow newer
# than DESIGN.md (e.g. someone hand-edited it), `make` will skip it.
# Use `make -B <target>` to force regeneration regardless of mtimes.

SOURCE    := DESIGN.md
TAILWIND  := tailwind.theme.json
DTCG      := tokens.json
LINT_JSON := lint.json
TOOL      := npx --yes @google/design.md

.PHONY: all tokens tailwind dtcg lint lint-json check clean help
.DEFAULT_GOAL := all

all: $(TAILWIND) $(DTCG) $(LINT_JSON)

tokens: $(TAILWIND) $(DTCG)

tailwind: $(TAILWIND)

dtcg: $(DTCG)

lint-json: $(LINT_JSON)

$(TAILWIND): $(SOURCE)
	@echo "  export → $@"
	@$(TOOL) export --format tailwind $< > $@

$(DTCG): $(SOURCE)
	@echo "  export → $@"
	@$(TOOL) export --format dtcg $< > $@

$(LINT_JSON): $(SOURCE)
	@echo "  lint   → $@"
	@$(TOOL) lint --format json $< > $@ || true   # warnings don't fail the export

lint:
	@$(TOOL) lint $(SOURCE)

check:
	@$(TOOL) export --format tailwind $(SOURCE) > /tmp/.frollo-tailwind.check
	@$(TOOL) export --format dtcg     $(SOURCE) > /tmp/.frollo-dtcg.check
	@$(TOOL) lint   --format json     $(SOURCE) > /tmp/.frollo-lint.check 2>/dev/null || true
	@fail=0; \
	if ! diff -q /tmp/.frollo-tailwind.check $(TAILWIND) > /dev/null 2>&1; then \
	  echo "✗ $(TAILWIND) is stale"; \
	  diff -u $(TAILWIND) /tmp/.frollo-tailwind.check | head -20; fail=1; \
	fi; \
	if ! diff -q /tmp/.frollo-dtcg.check $(DTCG) > /dev/null 2>&1; then \
	  echo "✗ $(DTCG) is stale"; \
	  diff -u $(DTCG) /tmp/.frollo-dtcg.check | head -20; fail=1; \
	fi; \
	if ! diff -q /tmp/.frollo-lint.check $(LINT_JSON) > /dev/null 2>&1; then \
	  echo "✗ $(LINT_JSON) is stale"; \
	  diff -u $(LINT_JSON) /tmp/.frollo-lint.check | head -20; fail=1; \
	fi; \
	rm -f /tmp/.frollo-tailwind.check /tmp/.frollo-dtcg.check /tmp/.frollo-lint.check; \
	if [ $$fail -eq 0 ]; then \
	  echo "✓ $(TAILWIND), $(DTCG) and $(LINT_JSON) are in sync with $(SOURCE)"; \
	else \
	  echo ""; \
	  echo "  to recover: 'make -B all' (force rebuild — ignores timestamps)"; \
	  exit 1; \
	fi

clean:
	@rm -f $(TAILWIND) $(DTCG) $(LINT_JSON)
	@echo "  removed $(TAILWIND) $(DTCG) $(LINT_JSON)"

help:
	@awk '/^# / { print substr($$0, 3) }' $(MAKEFILE_LIST) | sed -n '1,/^$$/p'
