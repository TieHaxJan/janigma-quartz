---
title: "Ethics for NLP"
tags: [Ethics4NLP]
date: 2025-08-21
draft: false
---

Eine Zusammenfassung der Inhalte der Vorlesung **Ethics for Natural Language Processing** aus dem Sommersemester 2025.

<a href="./Elective/InfoProcessing/Ethics4NLP/JSN_Ethics4NLP_Summary.pdf" target="_blank">Download</a>

**Inhalt:**
1. **Grundlagen von NLP und Ethik**
   * NLP wird in vielen Bereichen eingesetzt (Übersetzung, Information Retrieval, Textgenerierung).
   * Zentrale ethische Fragen: Bias, Transparenz, Fairness und gesellschaftliche Auswirkungen.
   * Herausforderungen: Datenqualität, kulturelle Unterschiede, potenzieller Missbrauch.

2. **Evaluierung von Sprachmodellen**
   * **Naive Ansätze:** Einzelbeispiele liefern nur anekdotische Evidenz.
   * **Benchmarking:** Standardisierte Tests, aber Gefahr von Datenkontamination und eingeschränkter Aussagekraft.
   * **Humanevaluation:** Wichtig, aber teuer und anfällig für Bias – muss wie ein sozialwissenschaftliches Experiment gestaltet werden.

3. **Testmethoden für NLP-Systeme**
   * **Re-Use menschlicher Tests:** z.B. IQ- oder Fachprüfungen, aber ungeeignet, da Annahmen über Vergleichbarkeit nicht halten.
   * **Behavioral Testing (CheckList):** Systematische Variation einzelner Faktoren (Negation, Synonyme, irrelevante Infos), um Verhalten zu analysieren.
   * Ziel: Verstehen, wie Modelle auf spezifische Veränderungen reagieren.

4. **Modellentwicklung und Dynamik**
   * LLMs (z.B. GPT-3.5 vs. GPT-4) entwickeln sich über Zeit – können Fähigkeiten gewinnen oder verlieren.
   * Konsequenz: Frühere Erkenntnisse über Modellfähigkeiten veralten.
   * Handlungsempfehlung: Versionen dokumentieren, regelmäßig neu evaluieren, möglichst offene Modelle nutzen.

5. **Erkennung von KI-generierten Texten**
   * Klassische Plagiatserkennung ungeeignet.
   * Klassifikatoren oft unzuverlässig, mit Bias gegen Nicht-Muttersprachler.
   * **Alternative:** Watermarking – unsichtbare Markierungen in generierten Texten, aber noch nicht ausgereift.
   * „Detection vs. Obfuscation“-Wettrennen → Kombination aus Technik und Regulierung nötig.

6. **Jailbreaking von LLMs**
   * Ziel: Modelle aus Sicherheitsrestriktionen herauslocken.
   * Methoden: Orthografische Tricks (Leetspeak), pragmatische Angriffe (Persona-Modulation, Task-Deflection), Low-Resource-Language-Angriffe, Data Poisoning.
   * Abwehr: Erweiterte RLHF, Daten-Monitoring, Scaffolding (separate Modelle zur Filterung).
   * Wie bei Text-Detektion: „Jailbreaking vs. Prevention“-Race.

7. **AI Agents und Autonomie**
   * Agenten: Systeme, die Umwelt wahrnehmen (Sensoren) und darauf reagieren (Aktuatoren).
   * Von einfachen Reflexagenten (Thermostat) bis zu komplexen autonomen Systemen (selbstfahrende Autos, Shopping-Assistenten).
   * Risiken: Unvorhersehbarkeit, schwerere Überwachung, Zielunter-Spezifikation („Paperclip-Maximizer“).
   * Multi-Agent-Interaktionen können neue, unerwartete Fähigkeiten hervorbringen.
   * Handlungsempfehlung: Sandboxing, Fail-Safes, langsame Einführung.

8. **Translational NLP und soziale Anwendungen**
   * Einsatz für gesellschaftlich relevante Aufgaben: Notfallkommunikation, Krankheitsüberwachung.
   * Notwendig: Zusammenarbeit von **NLP-Experten, Domänenexperten (SMEs) und Endnutzern**.
   * Risiken: Solutionism, fehlende Einbindung von Stakeholdern.
   * Ziel: Brücke zwischen Grundlagenforschung und praxisnahen Anwendungen.

<div style="text-align: center;">
    <iframe src="./Elective/InfoProcessing/Ethics4NLP/JSN_Ethics4NLP_Summary.pdf" width="100%" height="600px" style="border: none;"></iframe>
</div>