---
title: "Soft Separation for Adaptive Robust Optimization"
authors:
- admin
- Ruiwei Jiang
date: "2026-09-28T00:00:00Z"

# Schedule page publish date (NOT publication's date).
publishDate: "2026-09-28T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["article"]

# Publication name and optional abbreviated publication name.
# publication: "arXiv preprint arXiv:2609.36275"
publication_short: "preprint arXiv:2609.36275"

abstract: We propose an algorithmic framework for solving adaptive robust optimization with provable guarantees on both tractability and solution accuracy. The framework introduces soft separation, a probabilistic mechanism for identifying worst-case uncertainty realizations via a time-inhomogeneous Markov chain. Rather than solving an exact separation problem in each iteration, which is intractable in general, the chain carries adversarial information across iterations, co-evolves with the optimization iterates, and recovers exact separation at terminal iterates with high probability. For continuous first-stage (here-and-now) decisions, we design a first-order method that uses soft separation to produce adaptive gradient estimates. Notably, we prove polynomial-time convergence in expectation to the global optimum. For mixed-integer here-and-now decisions, we embed soft separation within a branch-and-cut framework to generate valid cuts for the robust objective and obtain a high-probability certificate of global optimality. Numerical experiments demonstrate that the proposed methods scale favorably with problem dimension and scenario size relative to state-of-the-art approaches.

# Summary. An optional shortened abstract.
summary: We propose an algorithmic framework for solving adaptive robust optimization with provable guarantees on both tractability and solution accuracy. 

tags:
- Robust optimization
- soft separation
- Markov chain

featured: false

hugoblox:
  ids:
#    arXiv:2609.36275

links:
- type: preprint
  provider: arxiv
  id: 2609.36275
- type: code
  url: https://github.com/xuqy2002/SoftSeparationARO
# - type: slides
#  url: https://www.slideshare.net/
# - type: dataset
#  url: "#"
# - type: poster
#  url: "#"
# - type: source
#  url: "#"
# - type: video
#  url: https://youtube.com
# - type: custom
#  label: Custom Link
#  url: http://example.org

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
# image:
#  caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/s9CC2SKySJM)'
#  focal_point: ""
#  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects:
# - internal-project

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""


# This work is driven by the results in my [previous paper](/publication/conference-paper/) on LLMs.

# {{% callout note %}}
# Create your slides in Markdown - click the *Slides* button to check out the example.
# {{% /callout %}}

# Add the publication's **full text** or **supplementary notes** here. You can use rich formatting such as including [code, math, and images](https://docs.hugoblox.com/content/writing-markdown-latex/).

---
