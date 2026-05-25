---
title: 'Robust Contextual Optimization with Missing Covariates'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - admin
  - Ruiwei Jiang

# Author notes (optional)
author_notes:
#  - 'Equal contribution'
#  - 'Equal contribution'

date: '2026-05-24T00:00:00Z'

# Schedule page publish date (NOT publication's date).
publishDate: '2026-05-24T00:00:00Z'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
# publication_types: ['paper-conference']

# Publication name and optional abbreviated publication name.
# publication: '<i></i>'

publication_short: 'Preliminary version appeared at <i>International Conference on Machine Learning (ICML) 2026</i> <span class="oral-highlight">(<strong>Oral Presentation, &lt;0.7% </strong>)</span>. '


abstract: Modern decision-making increasingly relies on contextual features (covariates) to improve optimization under uncertainty. In practice, however, such covariates are often only partially observed due to, e.g., data source heterogeneity or costly data collection. Nonetheless, most existing methods assume fully observed historical data and can become unreliable when this assumption is violated. We address this gap by proposing a distributionally robust optimization approach that exploits incomplete covariates to produce robust decisions without imputing a complete dataset. Our method builds ambiguity sets from the observed partial data and incorporates the general structure of the missingness mechanism, ensuring candidate distributions remain consistent with what is observed. Across settings with discrete or continuous covariates and outcomes, we derive tractable reformulations and establish finite-sample out-of-sample performance guarantees. Empirical results across a range of contextual decision-making tasks demonstrate that the proposed integrated approach consistently outperforms state-of-the-art baselines, including various impute-then-optimize pipelines, in both out-of-sample performance and reliability.

# Summary. An optional shortened abstract.
summary: This paper develops a principled and tractable framework for contextual decision-making with missing covariates that delivers stable and reliable out-of-sample performance. 

tags:
  - Contextual Optimization
  - Missing Data

# Display this page in the Featured widget?
featured: false

# Standard identifiers for auto-linking
hugoblox:
  ids:
#    doi: 10.5555/123456

# Custom links
links:
#  - type: pdf
#    url: ""
#  - type: code
#    url: 
#  - type: dataset
#    url: 
#  - type: slides
#    url: 
#  - type: source
#    url: 
#  - type: video
#    url: 

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# image:
#  caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/pLCdAaMFLTE)'
#  focal_point: ''
#  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects:
#  - example

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.

 slides: ""


# {{% callout note %}}
# Click the _Cite_ button above to demo the feature to enable visitors to import publication metadata into their reference management software.
# {{% /callout %}}

# {{% callout note %}}
# Create your slides in Markdown - click the _Slides_ button to check out the example.
# {{% /callout %}}

# Add the publication's **full text** or **supplementary notes** here. You can use rich formatting such as including [code, math, and images]# (https://docs.hugoblox.com/content/writing-markdown-latex/).

---


