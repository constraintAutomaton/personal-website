#import "./basic-typst-resume-template/src/lib.typ": *
#import "@preview/hidden-bib:0.1.1": hidden-bibliography

// Put your personal information here, replacing mine
#let name = "Bryan-Elliott Tam"
#let email = "bryan_elliott_tam@protonmail.com"
#let github = "github.com/constraintAutomaton"
#let personal-site = "constraint-automaton.pp.ua/"
#let orcid="0000-0003-3467-9755"
#let html_output = sys.inputs.at("html", default:false)


#let set_page = true

#if html_output == "true"{
  set_page = false
}

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
  set_page:set_page
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

#if html_output == false {
  hidden-bibliography(
    bibliography("works.bib", title:none, style:"chicago-author-date")
  )
}else{
  bibliography("works.bib", title:"TO_REMOVE", style:"chicago-author-date")
}