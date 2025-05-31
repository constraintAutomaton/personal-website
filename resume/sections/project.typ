#import "../basic-typst-resume-template/src/lib.typ": *

== Projects

=== Open Source Contribution

#project(
  name:"Comunica",
  url:"https://github.com/comunica/comunica"
)

#quote("A knowledge graph querying framework for JavaScript.", attribution: "Comunica")
During my PhD, I contributed to various modules, particularly focusing on decentralized querying.


#project(
  name:"pkg.pl",
  url:"https://github.com/bakaq/pkg.pl"
)

#quote("An experimental package manager for Scryer Prolog.", attribution: "pkg.pl") 
Contributed to enhancing dependency fetching and developing a lockfile system to improve reproducibility.


#project(
  name:"Freetube",
  url:"https://github.com/FreeTubeApp/FreeTube"
)

Freetube is a cross-platform YouTube client focused on privacy. Contributions include developing modules for #link("https://github.com/FreeTubeApp/FreeTube/pull/1867")[displaying viewing statistics (similar to "Stats for Nerds")], #link("https://github.com/FreeTubeApp/FreeTube/pull/1942")[searching viewing history and playlists], #link("https://github.com/FreeTubeApp/FreeTube/pull/1971")[implementing in-app media downloading], and #link("https://github.com/FreeTubeApp/FreeTube/pull/1812")[enhancing the UI styling of various elements].

=== Université Laval Courses
#project(
  name: "Patients triage with combinatorial optimization methods (Combinatorial Optimization, IFT-7020)"
)

Worked with another student to solve a combinatorial optimization problem involving hospital patient triage. Created a synthetic patient database and implemented solution methods using MiniZinc and a local search algorithm developed in Go.

- #link("https://gitlab.com/optimisation-combinatoire/tp/project/-/blob/master/Scheduling_of_patients_in_ER.pdf")[report]
- #link("https://gitlab.com/optimisation-combinatoire/tp")[source code]

#project(
  name: "Code analysis with z3 (Security and Formal Method, IFT-7010)"
)

Developed a program in Python using the Z3 library to perform static code analysis. Implemented analyses including path condition detection, automatic test generation, dead code detection, pre- and post-condition and invariant analysis, equivalence analysis, and security analysis.
- #link("https://gitlab.com/constraintAutomaton/z3-python-analysis")[source code]

#project(
  name: "Epicurean Cycling (Advanced Database, GLO-7035)"
)

Collaborated with another student to develop an application for planning bike rides that meet specified distance requirements and include stops near selected types of restaurants. Technologies used included Go, Docker, MongoDB, and Neo4j.

- #link("https://gitlab.com/glo-7035/velo-epicurien")[source code]

=== Personal Project

#project(
  name: "Shin Megami Tensei III demon summoning planner",
  url: "https://github.com/constraintAutomaton/smt3-fusion-kb-pl-generator"
)

Developed a fusion planning tool for Shin Megami Tensei III by converting a JSON dataset into RDF and a Prolog knowledge base, leveraging Prolog reasoning to generate optimized fusion plans.

#project(
  name: "Citation to wallpaper",
  url: "https://gitlab.com/constraintAutomaton/citation-wallpaper-linkded-data"
)

Developed software that converts citations stored in an RDF file into SVG wallpapers by enriching the data with additional information, such as author details, retrieved from DBpedia.

#project(
  name: "Remote-controlled car"
)

Design of a remote-controlled car from Raspberry Pi. The codes were made with the python programming language.

- #link("https://github.com/constraintAutomaton/PgU1")[Raspberry pi code]: github
- #link("https://github.com/constraintAutomaton/client_pgU1")[client code]

#project(
  name: "Distance sensors with laser and camera"
)

Design of a laser distance sensor with a webcam. The calculations were Performed with Opencv(python) and the graphical interface with
pyQt.

- #link("https://youtu.be/xnBF-KOUick")[video]
- #link("https://github.com/constraintAutomaton/client_pgU1/tree/master/pgU1_client/video_processing")[source code]

#project(
  name: "Manga Web Scraper"
)

Design of a Web Scraper to download manga chapters and convert them to PDF. The graphical interface is done with pyQt.

- #link("https://youtu.be/W9wOKKn00BE")[video]
- #link("https://github.com/constraintAutomaton/mangaScraper ")[source code]