#import "@preview/basic-resume:0.2.8": *
#import "@preview/hidden-bib:0.1.1": hidden-bibliography

// Put your personal information here, replacing mine
#let name = "Bryan-Elliott Tam"
#let email = "bryan_elliott_tam@protonmail.com"
#let github = "https://github.com/constraintAutomaton"
#let personal-site = "https://constraint-automaton.pp.ua/"
#let orcid="0000-0003-3467-9755"
#show: resume.with(
  author: name,
  // All the lines below are optional.
  // For example, if you want to to hide your phone number:
  // feel free to comment those lines out and they will not show.
  email: email,
  orcid:orcid,
  github: github,
  personal-site: personal-site,
  accent-color: "#26428b",
  font: "New Computer Modern",
  paper: "us-letter",
  author-position: left,
  personal-info-position: left,
)

/*
* Lines that start with == are formatted into section headings
* You can use the specific formatting functions if needed
* The following formatting functions are listed below
* #edu(dates: "", degree: "", gpa: "", institution: "", location: "", consistent: false)
* #work(company: "", dates: "", location: "", title: "")
* #project(dates: "", name: "", role: "", url: "")
* certificates(name: "", issuer: "", url: "", date: "")
* #extracurriculars(activity: "", dates: "")
* There are also the following generic functions that don't apply any formatting
* #generic-two-by-two(top-left: "", top-right: "", bottom-left: "", bottom-right: "")
* #generic-one-by-two(left: "", right: "")
*/

#include "sections/education.typ"
#include "sections/publication.typ"
#include "sections/skills.typ"
#include "sections/work.typ"
#include "sections/project.typ"

#hidden-bibliography(
  bibliography("works.bib", title:none, style:"chicago-author-date")
)