---
title: "Betriebssysteme"
tags: [BS]
date: 2024-02-13
draft: false
---
Eine Zusammenfassung der Inhalte der Vorlesung **Betriebssysteme** aus dem Wintersemester 2022/2023. 

<a href="./FS5/BS/JSN_BS_Summary.pdf" target="_blank">Download</a>

**Inhalt:**
1. **Grundlagen von Betriebssystemen & Prozessmanagement**  
   - Betriebssysteme verwalten **Hardware-Ressourcen**, bieten **Prozessisolation** und ermöglichen **Systemaufrufe (System Calls)**.  
   - Prozesse bestehen aus **virtuellem Speicher (Text, Daten, Heap, Stack)** und wechseln durch **Scheduling** zwischen verschiedenen Zuständen.  

2. **Speicherverwaltung & Paging**  
   - **Virtueller Speicher** erlaubt Programme, mehr Speicher zu adressieren, als physisch verfügbar ist.  
   - **Paging & Page Replacement Algorithmen** (FIFO, LRU, WSClock) sorgen für effiziente Nutzung des Hauptspeichers.  
   - **Segmentation & Hierarchical Paging** verbessern Speicherverwaltung, erzeugen aber zusätzlichen Verwaltungsaufwand.  

3. **Interprozesskommunikation (IPC) & Scheduling**  
   - **Message Passing** (send/receive) vs. **Shared Memory** für schnelle IPC.  
   - **Scheduling-Strategien**: Round-Robin, Priority Scheduling, Shortest Job First (SJF), Lottery Scheduling.  
   - **Multithreading**: **User-Level vs. Kernel-Level Threads**, POSIX-Threads zur effizienten Prozessverwaltung.  

4. **Geräteverwaltung & Dateisysteme**  
   - **Gerätekommunikation über I/O-Systeme** (Direct Memory Access, Interrupt-Handling, Buffering).  
   - **Dateisysteme (FAT, I-Nodes, Journaling FS, Virtual File Systems)** bestimmen Speicherung & Zugriff auf Daten.  
   - **Caching-Strategien** optimieren Speicherzugriffe (LRU, LFU, Write-Back, Write-Through).  

5. **Sicherheit, Virtualisierung & Deadlocks**  
   - **Authentifizierung & Zugriffskontrolle** (UNIX-Passwörter, Salted Hashes, Access Control Lists).  
   - **Bell-LaPadula & Biba-Modelle** definieren Sicherheitsrichtlinien für Datenschutz & Integrität.  
   - **Virtualisierungstechniken** (Full Virtualization, Paravirtualization, Trap-and-Emulate).  
   - **Deadlocks & Livelocks** durch verschiedene Strategien vermeidbar (Deadlock Prevention, Recovery).  

<div style="text-align: center;">
    <iframe src="./FS5/BS/JSN_BS_Summary.pdf" width="100%" height="600px" style="border: none;"></iframe>
</div>