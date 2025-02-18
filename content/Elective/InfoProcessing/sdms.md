---
title: "Scalable Data Management Systems"
tags: [SDMS]
date: 2024-02-13
draft: false
---
> [!warning] Warnung
> 
> Diese Vorlesung arbeitete noch mit JAVA.


Eine Zusammenfassung der Inhalte der Vorlesung **Scalable Data Management Systems** aus dem Wintersemester 2023/2024.

<a href="./Elective/InfoProcessing/SDMS/JSN_SDMS_Summary.pdf" target="_blank">Download</a>

**Inhalt:**
1. **Single-Node DBMS & Speicherverwaltung**  
   - Ein Single-Node DBMS verarbeitet Daten auf einem einzelnen Server mit mehreren **Schichten**
   - Unterschied zwischen **Row-Store (gut für Insert/Update/Delete)** und **Column-Store (effizient für Aggregationen)**.

2. **Verteilte Datenbanken (Distributed DBMS) & Skalierung**  
   - **Shared-Nothing Architektur**: Jeder Knoten hat eigene Daten, gute Skalierbarkeit.  
   - **Shared-Data Architektur** (Cloud): Mehrere Server greifen auf dieselben Daten zu.  
   - **Fragmentierungsschemas**: Daten werden **nach Round-Robin, Hash oder Range** verteilt.  
   - **Partitionierungstechniken** für **OLAP- und OLTP-Workloads**, um Abfragen effizient zu verarbeiten.  

3. **OLAP vs. OLTP & Indizierung**  
   - **OLAP (Online Analytical Processing)**: Aggregierte Analysen großer Datenmengen.  
   - **OLTP (Online Transaction Processing)**: Schnelle Transaktionsverarbeitung mit hoher Parallelität.  
   - **B+-Bäume, Bitmap-Indizes und materialisierte Sichten** verbessern Abfragegeschwindigkeit.  
   - **Joins in verteilten Systemen** nutzen verschiedene **Shuffling-Techniken (Symmetric, Asymmetric, Broadcast)**.  

4. **Konkurrenzkontrolle & Replikation**  
   - **ACID-Prinzipien (Atomicity, Consistency, Isolation, Durability)** für sichere Transaktionen.  
   - **Replikation** verbessert Fehlertoleranz (synchron/asynchron).  
   - **CAP-Theorem**: Konsistenz, Verfügbarkeit und Partitionstoleranz können nicht gleichzeitig maximiert werden.  

5. **Cloud-Datenbanken & Optimierungstechniken**  
   - **Google Spanner, Snowflake, Amazon Aurora** als Beispiele für verteilte Cloud-DBMS.  
   - **Query Optimierung**: Regelbasierte (Selection Pushdown) und kostenbasierte (Join-Ordering, Cardinality Estimation) Optimierungen.  
   - **Machine Learning für Datenoptimierung (DeepDB, RSPN)** zur Verbesserung der Kardinalitätsschätzungen.  
   - **MapReduce, Apache Spark & Streaming-Technologien** zur effizienten Verarbeitung großer Datenmengen.  

<div style="text-align: center;">
    <iframe src="./Elective/InfoProcessing/SDMS/JSN_SDMS_Summary.pdf" width="100%" height="600px" style="border: none;"></iframe>
</div>