---
title: "Polygon Clipping"
description: "The current state of the art in polygon clipping"
date: 2023-08-01
tags: [Polygon Clipping, Paper, Blog]
draft: false
---

---
# The current state of the art in polygon clipping
<div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
  <span>Jan Schulz-Nigmann</span>
  <a href="./papers/Polygon_Clipping.pdf" target="_blank">Download Full-Text</a>
  <a href="./papers/Polygon_Clipping.pdf" target="_blank" style="display: flex; align-items: center;">
    <img src="https://img.shields.io/badge/Open%20Access-Yes-brightgreen" alt="Open Access Badge" style="margin: 0;">
  </a>
</div>

---
<details>
<summary><strong>Cite this work (BibTeX)</strong></summary>

```bibtex
@misc{schulz2023polygon,
  title     = {The current state of the art in polygon clipping},
  author    = {Schulz-Nigmann, Jan},
  year      = {2023},
  howpublished = {\url{https://tiehaxjan.github.io/janigma-quartz/papers/Polygon_Clipping.pdf}},
  note      = {Accessed: 2025-07-04}
}
```
</details>

> [!note] License
> This paper is licensed under a [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License](https://creativecommons.org/licenses/by-nc-nd/4.0/).

## Abstract
The paper evaluates different polygon clipping algorithms and contrasts how well they perform in terms of
complexity and runtime. We look into algorithms such the Cohen-Sutherland, Cyrus-Beck, Dimri, Liang-Barsky, Vatti, Martinez-Rueda, Sutherland-Hodgman, Weiler-Atherton, Slater-Barsky,
and Greiner-Hormann. We evaluate each algorithm’s advantages and disadvantages and offer empirical support based on
benchmarking experiments. Degenerate intersections and self-intersecting polygons are both effectively handled by the Greiner-Hormann algorithm. Although significantly slower, the Foster-Hormann algorithm performs best with polygons of a median
size. The Maillot algorithm outperforms Sutherland-Hodgman.
Efficiency-wise, Slater-Barsky surpasses Sutherland-Hodgman.
Line clipping-based algorithms and novel methods like the point-based Dimri algorithm are compared. The paper also analyses
various libraries for polygon clipping, including General Polygon
Clipper (GPC), CGAL, Shapely, Boost.Geometry, and Clipper.
Each library makes use of many algorithms, including modified
versions of Vatti and Weiler-Atherton. We give benchmarking results to assess these libraries’ performance while taking runtime,
scalability, and handling of complicated polygons into account.
For big clips, the Boost.Polygon library performs better than
GPC and PolyBoolean.

## Keywords
Polygon Clipping, Clipping Algorithms, Clipping, Polygon, Computational Geometry, Clipping Libraries

## Table of Content
1. Introduction
2. Methodology
3. Algorithms throughout years of developemt
    1. Sutherland-Hodgman
    2. Weiler-Atherton
    3. Liang-Barsky
    4. Maillot
    5. Vatti
    6. Slater-Barsky
    7. Greiner-Hormann
    8. Zhang-Sabharwal
    9. Simonson
    10. Martinez-Rueda
    11. Foster-Hormann
    12. Dimri
4. Comparison
    - Limitations
5. Libraries
    - Performance
6. Conclusion

<div style="text-align: center;">
    <iframe src="./papers/Polygon_Clipping.pdf" width="100%" height="600px" style="border: none;"></iframe>
</div>