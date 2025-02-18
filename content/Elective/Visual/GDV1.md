---
title: "Grafische Datenverarbeitung 1"
tags: [GDV1]
date: 2024-02-13
draft: false
---
Eine Zusammenfassung der Inhalte der Vorlesung **Grafische Datenverarbeitung 1** aus dem Wintersemester 2023/2024. 

<a href="./Elective/Visual/GDV1/JSN_GDV1_Summary.pdf" target="_blank">Download</a>

**Inhalt:**
1. **Grafikpipeline und Rendering-Techniken**  
   - Die **Grafikpipeline** besteht aus mehreren Schritten: **Geometrie-Transformationen, Rasterisierung und Fragmentverarbeitung**.  
   - Moderne Grafikkarten nutzen **programmierbare Pipelines** (Vertex- und Fragment-Shader) für **effiziente 3D-Darstellung**.  
   - **Raytracing vs. Rasterization**: Raytracing erzeugt realistische Reflexionen und Schatten, benötigt aber hohe Rechenleistung.  

2. **3D-Transformationen und Projektionen**  
   - Transformationen ermöglichen das **Positionieren und Skalieren von Objekten** im 3D-Raum.  
   - **Homogene Koordinaten und Matrixmultiplikation** werden für Effizienz verwendet.  
   - **Parallele vs. Perspektivische Projektion**: Parallele Projektionen bewahren Parallelität, während perspektivische Projektionen **Fluchtpunkte** haben.  

3. **Beleuchtungsmodelle und Shading-Techniken**  
   - **Phong-Beleuchtungsmodell** für realistische Lichtberechnungen mit **Umgebungs-, Diffus- und Spiegelreflexionen**.  
   - **Shading-Techniken**

4. **Texturierung und Mapping-Verfahren**  
   - **Texture Mapping** legt 2D-Bilder auf 3D-Oberflächen.  
   - Erweiterte Verfahren wie **Bump Mapping, Parallax Mapping und Displacement Mapping** simulieren Oberflächenstrukturen.  
   - **Mip-Mapping und anisotropische Filterung** verbessern die Qualität bei entfernten Objekten.  

5. **Culling, Sichtbarkeitsberechnungen und Optimierungen**  
   - **Backface Culling** entfernt nicht sichtbare Rückseiten von Objekten.  
   - **Z-Buffering** und **Stenciling** sorgen für eine korrekte Tiefendarstellung.  
   - **Octrees, BSP-Trees und kd-Trees** helfen, Szenen effizient zu organisieren und die Renderzeit zu optimieren.  

<div style="text-align: center;">
    <iframe src="./Elective/Visual/GDV1/JSN_GDV1_Summary.pdf" width="100%" height="600px" style="border: none;"></iframe>
</div>