---
title: "Formale Methoden im Softwareentwurf"
tags: [FSME]
date: 2024-02-13
draft: false
---
Eine Zusammenfassung der Inhalte der Vorlesung **Formale Methoden im Softwareentwurf** aus dem Sommersemester 2022. 

<a href="./FS4/FSME/JSN_FMSE_Summary.pdf" target="_blank">Download</a>

**Inhalt:**
1. **Modellierung reaktiver Systeme & Transitionssysteme**  
   - Endliche Automaten bestehen aus **Zuständen, Zustandsübergängen, Start- und Endzuständen**.  
   - **Transitionssysteme erweitern Automaten**, indem sie Zustände ohne Endzustand und mit Aktionen modellieren.  
   - **Datenabhängige Systeme** enthalten **typisierte Variablen, Variablenbelegungen und Transitionen mit Bedingungen**.  

2. **Nebenläufigkeit & Kommunikation**  
   - Parallele Systeme werden mit **dem Operator „||“** kombiniert.  
   - **Verschränkung (Interleaving)** modelliert konkurrierende Prozesse ohne Kommunikation.  
   - **Kanalsysteme ermöglichen Kommunikation** über Nachrichtenpuffer (FIFO-Speicher).  

3. **Temporale Logik (LTL) & Model Checking**  
   - LTL (Linear Temporal Logic) erlaubt **Aussagen über zeitliches Verhalten eines Systems**.  
   - Model Checking überprüft **ob ein System die spezifizierten LTL-Formeln erfüllt**.  

4. **Promela & SPIN Model Checker**  
   - **Promela (Process Meta-Language)** dient zur Modellierung nebenläufiger Systeme.  
   - Verifikation mit **SPIN** (Simple Promela Interpreter) prüft auf **Deadlocks, Race Conditions & Safety-Eigenschaften**.  
   - **Korrektheitseigenschaften** können mit Assertions und Meta Labels überprüft werden.  

5. **Java Modeling Language (JML) & KeY Theorembeweiser**  
   - **JML ist eine Spezifikationssprache für Java**, um **formale Verträge für Methoden** zu definieren.  
   - **KeY** ist ein Theorembeweiser für **die Verifikation von Java-Programmen mit dynamischer Logik**.  

<div style="text-align: center;">
    <iframe src="./FS4/FSME/JSN_FMSE_Summary.pdf" width="100%" height="600px" style="border: none;"></iframe>
</div>