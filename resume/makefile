SOURCE = main.typ sections/*.typ makefile works.bib

main.pdf: $(SOURCE)
	typst compile main.typ

main.html: $(SOURCE)
	typst compile -f html --features html --input "html=true" main.typ

.PHONY: clean watch

watch:
	typst watch main.typ

clean:
	rm -f main.pdf