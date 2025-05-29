SOURCE = main.typ sections/*.typ makefile

main.pdf: $(SOURCE)
	typst compile main.typ

main.html: $(SOURCE)
	typst compile main.typ -f html --features html

.PHONY: clean watch

watch:
	typst watch main.typ

clean:
	rm -f main.pdf