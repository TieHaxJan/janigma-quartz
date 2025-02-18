---
title: "Architekturen und Entwurf von Rechnersystemen"
tags: [AER]
date: 2024-02-13
draft: false
---
Eine Zusammenfassung der Inhalte der Vorlesung **Architekturen und Entwurf von Rechnersystemen** aus dem Wintersemester 2021/2022. 

<a href="./FS3/AER/JSN_AER_Summary.pdf" target="_blank">Download</a>

**Inhalt:**
1. **Hardware-Beschreibungssprache BlueSpec (BSV)**  
   - Erweiterung von **Verilog**, verbindet **Verhaltens- und Strukturbeschreibung**.   
   - Ermöglicht **Synthese von Hardware** durch Regeln für **atomare Transaktionen**.  

2. **Nebenläufigkeit & Regelbasierte Ausführungssemantik**  
   - **Parallelität durch Regeln**, die Aktionen ausführen, wenn bestimmte Bedingungen erfüllt sind.  
   - Konflikte durch **Nebenläufigkeitsprobleme bei Zugriffen auf Speicher und Register**.  

3. **Rekonfigurierbare SoCs am Beispiel Xilinx Zynq 7000**  
   - Kombination aus **ARM Cortex-A9 CPU und FPGA-Logik** auf einem Chip.  
   - **Dynamische Rekonfiguration** ermöglicht Änderungen an Hardware während des Betriebs.  

4. **High-Level-Synthese (HLS) & Rechenbeschleuniger**  
   - **FPGA- und ASIC-Design** mit Hardware-Beschreibungssprachen für Spezialhardware.  
   - **Vergleich von Rechenbeschleunigern**: ASICs, FPGAs, DSPs, Many-Core-Systeme.  
   - **TaPaSCo** als Beispiel für task-paralleles Rechnen mit mehreren Processing Elements (PEs).  

5. **Cache-Architekturen & Speicherhierarchie**  
   - **Caches zur Reduzierung von Speicherzugriffszeiten**, inkl. **Direct-Mapped, Set-Associative & Fully-Associative Caches**.  
   - **Optimierungsstrategien für Caches**: Write-Through, Write-Back, Replacement Policies (LRU, LFU).  

<div style="text-align: center;">
    <iframe src="./FS3/AER/JSN_AER_Summary.pdf" width="100%" height="600px" style="border: none;"></iframe>
</div>
