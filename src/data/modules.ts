import {
  Shield,
  Eye,
  Scissors,
  Heart,
  Scale,
  Clock,
  TestTube,
  Microscope,
  Building2,
  FileText,
  GitBranch,
  FolderOpen,
  LucideIcon,
} from 'lucide-react'

export interface Module {
  id: string
  title: string
  description: string
  icon: LucideIcon
  topics: string[]
  route: string
  badge?: string
  content: {
    overview: string
    objectives: string[]
    sections: Section[]
  }
}

export interface Section {
  id: string
  title: string
  content: string
  keyPoints?: string[]
  pitfalls?: string[]
}

export const modules: Module[] = [
  {
    id: 'intro-safety',
    title: 'Introduction & Safety',
    description: 'Essential PPE, biosafety, specimen handling, and documentation fundamentals',
    icon: Shield,
    topics: ['PPE', 'Sharp Safety', 'Biohazard Handling', 'Chain of Custody', 'Documentation'],
    route: '/module/intro-safety',
    badge: 'Start Here',
    content: {
      overview: 'Safety is paramount in the autopsy suite. This module covers essential personal protective equipment, biosafety protocols, specimen handling, and documentation practices.',
      objectives: [
        'Understand proper PPE selection and use in autopsy settings',
        'Apply biosafety principles to minimize occupational hazards',
        'Maintain chain of custody and proper specimen identification',
        'Document findings accurately and systematically',
      ],
      sections: [
        {
          id: 'ppe',
          title: 'Personal Protective Equipment',
          content: 'The autopsy environment presents unique hazards requiring comprehensive PPE. Standard protection includes double gloving, fluid-resistant gown, face shield or goggles, and respiratory protection when indicated.',
          keyPoints: [
            'Always use double gloves with frequent outer glove changes',
            'Face shields protect against splashes during organ removal',
            'N95 respirators required for suspected TB or other airborne pathogens',
            'Cut-resistant gloves underneath exam gloves when using sharp instruments',
          ],
          pitfalls: [
            'Failing to change gloves between cases or after contamination',
            'Using standard surgical masks instead of N95 for high-risk cases',
            'Inadequate eye protection during bone saw use',
          ],
        },
        {
          id: 'sharp-safety',
          title: 'Sharp Safety',
          content: 'Scalpels, scissors, and bone saws present significant injury risks. Proper handling, passing techniques, and disposal protocols are essential.',
          keyPoints: [
            'Never hand sharps directly to another person - use a tray or designated zone',
            'Cut away from yourself and others',
            'Dispose of sharps immediately in appropriate containers',
            'Use safety scalpels when available',
          ],
        },
        {
          id: 'biohazard',
          title: 'Biohazard Handling',
          content: 'All autopsy materials must be treated as potentially infectious. This includes blood, body fluids, tissues, and contaminated instruments.',
          keyPoints: [
            'Treat all cases as potentially infectious for bloodborne pathogens',
            'Use appropriate disinfectants (10% bleach solution or hospital-grade disinfectant)',
            'Properly bag and label all specimens',
            'Follow institutional protocols for high-risk cases (HIV, hepatitis, prion diseases)',
          ],
        },
        {
          id: 'documentation',
          title: 'Documentation & Chain of Custody',
          content: 'Accurate documentation begins before the first incision and continues throughout the autopsy. Proper specimen labeling and chain of custody are critical, especially in forensic cases.',
          keyPoints: [
            'Verify body identification using wristbands, toe tags, and facility records',
            'Document time of examination start and finish',
            'Label all specimens immediately upon collection',
            'Maintain chain of custody log for forensic cases',
            'Photography should be systematic and non-identifiable for educational use',
          ],
        },
      ],
    },
  },
  {
    id: 'external-exam',
    title: 'External Examination',
    description: 'Body measurements, postmortem changes, injury documentation, and artifact recognition',
    icon: Eye,
    topics: ['Body Measurements', 'Livor Mortis', 'Rigor Mortis', 'Injuries vs Artifacts', 'Pattern Recognition'],
    route: '/module/external-exam',
    content: {
      overview: 'The external examination is the foundation of every autopsy. It documents identifying features, postmortem changes, and injuries before internal examination.',
      objectives: [
        'Perform systematic external examination and measurements',
        'Recognize and interpret postmortem changes',
        'Distinguish antemortem injuries from postmortem artifacts',
        'Document pattern injuries and their significance',
      ],
      sections: [
        {
          id: 'measurements',
          title: 'Body Identification & Measurements',
          content: 'Standard measurements include body length, weight, and circumferences. These help with identification and provide context for organ weights.',
          keyPoints: [
            'Measure body length from crown to heel',
            'Record body weight before and after evisceration if needed',
            'Note any identifying features: scars, tattoos, medical devices',
            'Document clothing and personal effects in forensic cases',
          ],
        },
        {
          id: 'postmortem-changes',
          title: 'Livor, Rigor, and Algor Mortis',
          content: 'These classic postmortem changes help estimate time since death and can reveal body position after death.',
          keyPoints: [
            'Livor mortis: gravitational pooling of blood in dependent areas, begins 1-2 hours, fixed by 8-12 hours',
            'Rigor mortis: stiffening beginning in small muscles, peaks 12-24 hours, resolves by 36-48 hours',
            'Algor mortis: body cooling rate varies with environment (rough estimate: 1-1.5°F per hour)',
            'Cherry-red livor suggests carbon monoxide poisoning',
          ],
          pitfalls: [
            'Mistaking early decomposition changes for bruising',
            'Not recognizing shifted livor in moved bodies',
            'Over-reliance on rigor for precise time-of-death estimation',
          ],
        },
        {
          id: 'injuries-artifacts',
          title: 'Injuries vs Postmortem Artifacts',
          content: 'Distinguishing true antemortem injuries from postmortem changes is critical. Artifacts can mimic trauma.',
          keyPoints: [
            'Antemortem injuries show vital reaction: hemorrhage, inflammation',
            'Postmortem artifacts lack hemorrhage into surrounding tissues',
            'Common artifacts: skin slippage, drying/desiccation, pressure marks from surfaces',
            'Livor can be mistaken for bruising - blanches with pressure if not fixed',
          ],
        },
        {
          id: 'injury-patterns',
          title: 'Pattern Injuries',
          content: 'Certain injury patterns suggest specific mechanisms of trauma or violence.',
          keyPoints: [
            'Lacerations: blunt force causing tissue tearing, often over bony prominences',
            'Incisions: sharp force with clean edges, longer than deep',
            'Abrasions: superficial scraping of epidermis',
            'Defensive injuries: forearms, hands in sharp force trauma',
          ],
        },
      ],
    },
  },
  {
    id: 'internal-exam',
    title: 'Internal Examination Techniques',
    description: 'Evisceration methods (Virchow, Rokitansky, Ghon, Letulle), organ-by-organ examination',
    icon: Scissors,
    topics: ['Evisceration Methods', 'Virchow Technique', 'Rokitansky Technique', 'Organ Removal', 'Brain Removal'],
    route: '/module/internal-exam',
    content: {
      overview: 'Multiple systematic approaches exist for organ removal and examination. Each method has specific advantages for different case types.',
      objectives: [
        'Understand the major evisceration techniques',
        'Select appropriate method based on case type',
        'Perform systematic organ examination',
        'Recognize normal anatomic variations',
      ],
      sections: [
        {
          id: 'virchow',
          title: 'Virchow Method',
          content: 'Individual organ removal and examination. Each organ is removed separately, examined, and dissected on the cutting board.',
          keyPoints: [
            'Advantages: Detailed examination of each organ in situ, minimal cross-contamination',
            'Best for: Teaching, detailed anatomic assessment, infectious disease cases',
            'Disadvantages: Time-consuming, organs separated from anatomic relationships',
          ],
        },
        {
          id: 'rokitansky',
          title: 'Rokitansky Method',
          content: 'In-situ dissection with organs examined before removal. Vessels and connections dissected within the body.',
          keyPoints: [
            'Advantages: Preserves anatomic relationships, good for cardiovascular assessment',
            'Best for: Vascular disease, complex anatomic abnormalities',
            'Requires experience to dissect in confined space',
          ],
        },
        {
          id: 'ghon-letulle',
          title: 'Ghon and Letulle En Bloc Methods',
          content: 'Removal of organ blocks together, preserving relationships. Letulle removes nearly all thoracic and abdominal organs together.',
          keyPoints: [
            'Letulle: Complete evisceration from tongue to rectum as one block',
            'Advantages: Fast, preserves all anatomic relationships, good for teaching',
            'Best for: Routine hospital autopsies, complex multi-system disease',
            'Can be challenging to examine deep structures',
          ],
        },
        {
          id: 'heart-exam',
          title: 'Cardiovascular Examination',
          content: 'Systematic heart examination includes external inspection, chamber opening, coronary artery assessment, and valve examination.',
          keyPoints: [
            'Weigh heart after removing blood clots and trimming vessels',
            'Open chambers in physiologic flow pattern',
            'Cross-section coronary arteries at 3mm intervals (bread-loafing)',
            'Examine endocardium, myocardium, valves, and pericardium',
            'Normal adult heart weight: 250-350g (males), 200-300g (females)',
          ],
        },
        {
          id: 'lung-exam',
          title: 'Pulmonary Examination',
          content: 'Lungs should be examined for color, consistency, masses, and pleural surfaces.',
          keyPoints: [
            'Normal lung: pink-tan, crepitant (air-filled), floats in water',
            'Edema: heavy, boggy, fluid exudes from cut surface',
            'Pneumonia: consolidated areas that are firm, airless, sink in water',
            'Always palpate for masses or foreign bodies before sectioning',
          ],
        },
        {
          id: 'brain-removal',
          title: 'Brain Removal',
          content: 'Careful technique prevents artifacts and preserves anatomy for examination.',
          keyPoints: [
            'Coronal incision from mastoid to mastoid across vertex',
            'Reflect scalp anteriorly and posteriorly',
            'Use oscillating saw to make calvarium cuts',
            'Avoid cutting dura or brain surface with saw',
            'Cut cranial nerves, tentorium, and spinal cord to remove brain',
            'Consider formalin fixation for 1-2 weeks before sectioning if pathology suspected',
          ],
        },
      ],
    },
  },
  {
    id: 'natural-disease',
    title: 'Natural Disease Pathology',
    description: 'Cardiovascular, pulmonary, GI, renal, hepatic, and endocrine autopsy findings',
    icon: Heart,
    topics: ['Myocardial Infarction', 'Atherosclerosis', 'Pneumonia', 'Pulmonary Embolism', 'Cirrhosis'],
    route: '/module/natural-disease',
    content: {
      overview: 'Natural disease accounts for the majority of autopsy cases. Recognizing classic patterns of organ pathology is essential for determining cause of death.',
      objectives: [
        'Recognize gross findings of major cardiovascular diseases',
        'Identify pulmonary pathology patterns',
        'Understand gastrointestinal and hepatic disease in autopsy',
        'Correlate gross findings with clinical history',
      ],
      sections: [
        {
          id: 'mi',
          title: 'Myocardial Infarction Chronology',
          content: 'Acute MI is a leading cause of sudden death. Gross findings evolve over time.',
          keyPoints: [
            '< 12 hours: No gross changes visible',
            '12-24 hours: Pallor of infarcted myocardium',
            '1-3 days: Yellow-tan center with hyperemic border',
            '1-2 weeks: Soft, yellow, gelatinous appearance (highest rupture risk)',
            'Weeks to months: Firm gray-white scar',
            'Subendocardial infarcts: Inner 1/3 of wall, circumferential',
            'Transmural infarcts: Full thickness, typically single coronary territory',
          ],
        },
        {
          id: 'atherosclerosis',
          title: 'Coronary Atherosclerosis',
          content: 'Systematic examination of coronary arteries is essential in all adult autopsies.',
          keyPoints: [
            'Cross-section at 3mm intervals (bread-loafing)',
            'Estimate percent stenosis at worst narrowing',
            '>75% stenosis considered critical',
            'Assess for plaque rupture, thrombus, hemorrhage into plaque',
            'Document all three major vessels: LAD, LCX, RCA',
          ],
        },
        {
          id: 'pulmonary-findings',
          title: 'Pulmonary Pathology Patterns',
          content: 'Lungs show distinctive patterns in edema, pneumonia, and embolism.',
          keyPoints: [
            'Edema: Heavy (>2x normal), pink frothy fluid, often associated with heart failure',
            'Pneumonia: Consolidated, firm, airless areas; lobar vs bronchopneumonia patterns',
            'Pulmonary embolism: Wedge-shaped hemorrhagic infarcts, examine main pulmonary arteries',
            'ARDS: Diffuse alveolar damage, heavy lungs, hyaline membranes on histology',
          ],
        },
        {
          id: 'gi-liver',
          title: 'GI and Hepatic Pathology',
          content: 'Common autopsy findings include bleeding, perforation, ischemia, and cirrhosis.',
          keyPoints: [
            'GI bleeding: Identify source (varices, ulcer, diverticulosis, malignancy)',
            'Perforation: Look for peritonitis, free air, fecal contamination',
            'Ischemic bowel: Hemorrhagic, necrotic mucosa; check mesenteric vessels',
            'Cirrhosis: Nodular, firm liver; micronodular vs macronodular',
            'Liver weight: Normal 1200-1600g; cirrhotic often smaller',
          ],
        },
      ],
    },
  },
  {
    id: 'forensics',
    title: 'Forensic Pathology Foundations',
    description: 'Cause vs manner vs mechanism, blunt force, sharp force, gunshot wounds, asphyxia',
    icon: Scale,
    topics: ['Manner of Death', 'Blunt Force Trauma', 'Sharp Force Injuries', 'Asphyxia', 'Trauma Patterns'],
    route: '/module/forensics',
    content: {
      overview: 'Forensic pathology determines cause and manner of death in cases of violence, injury, and suspicious circumstances.',
      objectives: [
        'Distinguish cause, mechanism, and manner of death',
        'Recognize patterns of blunt and sharp force trauma',
        'Understand basic gunshot wound pathology',
        'Identify signs of asphyxia',
      ],
      sections: [
        {
          id: 'cause-manner-mechanism',
          title: 'Cause vs Manner vs Mechanism',
          content: 'These three concepts are distinct but related. Understanding the difference is fundamental to forensic pathology.',
          keyPoints: [
            'Cause: The disease or injury that initiated the lethal sequence',
            'Mechanism: The physiologic derangement that led to death',
            'Manner: Classification - Natural, Accident, Suicide, Homicide, Undetermined',
            'Example: Gunshot wound to chest (cause) → hemorrhage (mechanism) → homicide (manner)',
          ],
        },
        {
          id: 'blunt-force',
          title: 'Blunt Force Trauma',
          content: 'Blunt impact causes contusions, lacerations, and fractures. Pattern and distribution guide reconstruction.',
          keyPoints: [
            'Contusions: Hemorrhage into soft tissue from vessel rupture',
            'Lacerations: Tissue tearing, often over bone; irregular wound edges',
            'Fractures: Skull, ribs, long bones; pattern indicates impact force/direction',
            'Patterned injuries may reproduce shape of weapon or surface',
          ],
          pitfalls: [
            'Not recognizing that bruises can take hours to become visible',
            'Confusing lacerations with incised wounds',
            'Missing internal injuries despite minimal external trauma',
          ],
        },
        {
          id: 'sharp-force',
          title: 'Sharp Force Injuries',
          content: 'Stab wounds and incised wounds have distinct characteristics that aid in death investigation.',
          keyPoints: [
            'Stab wound: Depth greater than length on skin surface',
            'Incised wound: Length greater than depth; sharp, clean edges',
            'Document: Number, location, dimensions, direction of tracks',
            'Defensive wounds: Palms, forearms, hands - suggest struggle',
            'Hesitation marks: Multiple superficial parallel cuts - may indicate suicide',
          ],
        },
        {
          id: 'asphyxia',
          title: 'Asphyxia Patterns',
          content: 'Asphyxia results from oxygen deprivation. Findings are often subtle and nonspecific.',
          keyPoints: [
            'Petechiae: Pinpoint hemorrhages in conjunctiva, face, often seen in strangulation',
            'Ligature marks: Patterned abrasions/contusions on neck',
            'Hyoid/thyroid fractures: More common in manual strangulation, older victims',
            'Congestion and edema: Nonspecific but supportive findings',
          ],
          pitfalls: [
            'Absence of petechiae does not exclude asphyxia',
            'Hyoid fractures uncommon in young victims',
            'Postmortem hanging vs antemortem strangulation requires scene correlation',
          ],
        },
      ],
    },
  },
  {
    id: 'pm-changes',
    title: 'Postmortem Changes & Artifacts',
    description: 'Livor patterns, rigor timeline, autolysis, putrefaction, insect activity',
    icon: Clock,
    topics: ['Livor Mortis', 'Rigor Mortis', 'Autolysis', 'Putrefaction', 'Decomposition'],
    route: '/module/pm-changes',
    content: {
      overview: 'Postmortem changes begin immediately after death and can mimic or obscure antemortem pathology. Recognizing these changes prevents misinterpretation.',
      objectives: [
        'Understand the timeline of postmortem changes',
        'Distinguish decomposition from antemortem injury',
        'Recognize artifacts that mimic pathology',
        'Use postmortem changes to estimate time since death',
      ],
      sections: [
        {
          id: 'early-changes',
          title: 'Early Postmortem Changes',
          content: 'The first hours after death show predictable physical changes.',
          keyPoints: [
            'Livor mortis: Begins 1-2 hours, becomes fixed 8-12 hours',
            'Rigor mortis: Starts in small muscles 2-4 hours, peak 12-24 hours',
            'Algor mortis: Body cooling, rate varies with environment',
            'Loss of corneal clarity: Hours after death',
          ],
        },
        {
          id: 'autolysis',
          title: 'Autolysis',
          content: 'Cellular breakdown by endogenous enzymes. Certain organs autoly lyze rapidly.',
          keyPoints: [
            'Pancreas: Extremely rapid autolysis, can digest surrounding tissues',
            'GI mucosa: Sloughing and autolysis within hours',
            'Brain: Softening, liquefaction in decomposition',
            'Liver: Relatively resistant to early autolysis',
          ],
        },
        {
          id: 'putrefaction',
          title: 'Putrefaction & Decomposition',
          content: 'Bacterial decomposition creates gas, discoloration, and tissue breakdown.',
          keyPoints: [
            'Green discoloration: Right lower quadrant first (bacterial overgrowth)',
            'Bloating: Gas formation in tissues and body cavities',
            'Skin slippage: Epidermis separates from dermis',
            'Marbling: Discolored vascular pattern visible through skin',
            'Adipocere: Waxy, soap-like transformation in moist environments',
          ],
          pitfalls: [
            'Confusing livor with bruising in decomposed bodies',
            'Mistaking postmortem purge (fluid from nose/mouth) for hemorrhage',
            'Decomposition obscures subtle injuries',
          ],
        },
        {
          id: 'artifacts',
          title: 'Common Postmortem Artifacts',
          content: 'Medical intervention, resuscitation, and postmortem handling create artifacts.',
          keyPoints: [
            'CPR: Rib fractures, sternal fractures, myocardial contusions',
            'Medical devices: ET tubes, central lines, pacemakers',
            'Gastric/rectal temperature probe: Can mimic injury',
            'Refrigeration artifact: Skin changes mimicking abrasion',
            'Morgue table pressure: Can create livor-like marks',
          ],
        },
      ],
    },
  },
  {
    id: 'toxicology',
    title: 'Toxicology & Ancillary Testing',
    description: 'Sample selection, specimen types, alcohol, drugs, vitreous chemistry',
    icon: TestTube,
    topics: ['Sample Collection', 'Blood Specimens', 'Vitreous Humor', 'Drug Screening', 'Alcohol Testing'],
    route: '/module/toxicology',
    content: {
      overview: 'Toxicology testing requires proper specimen selection, collection, and interpretation. Different sample types have specific advantages.',
      objectives: [
        'Select appropriate specimens for toxicology testing',
        'Understand peripheral vs central blood sampling',
        'Interpret vitreous chemistry results',
        'Recognize limitations of postmortem toxicology',
      ],
      sections: [
        {
          id: 'specimen-types',
          title: 'Specimen Types & Selection',
          content: 'Each specimen type has specific uses and limitations.',
          keyPoints: [
            'Peripheral blood: Femoral vein preferred for quantitative drug levels',
            'Heart blood: Convenient but subject to postmortem redistribution',
            'Vitreous humor: Excellent for alcohol, electrolytes, glucose; protected from contamination',
            'Urine: Good for drug screening but not quantitation',
            'Bile: Concentrates drugs, good for screening',
            'Liver: Useful when blood unavailable or decomposed',
          ],
        },
        {
          id: 'postmortem-redistribution',
          title: 'Postmortem Redistribution',
          content: 'Drug concentrations change after death, especially in heart blood.',
          keyPoints: [
            'Drugs diffuse from organs (especially stomach, lungs, liver) into nearby vessels',
            'Heart blood levels often artificially elevated',
            'Lipophilic basic drugs most affected (e.g., tricyclic antidepressants)',
            'Peripheral blood (femoral) more reliable for quantitation',
            'Always interpret levels in context of case circumstances',
          ],
        },
        {
          id: 'vitreous',
          title: 'Vitreous Chemistry',
          content: 'Vitreous humor is protected from decomposition and provides valuable biochemical information.',
          keyPoints: [
            'Alcohol levels parallel blood but lag slightly',
            'Electrolytes: Potassium rises postmortem (not reliable after ~24 hours)',
            'Glucose and ketones: Screen for diabetic ketoacidosis',
            'Urea/creatinine: Indicate renal function',
            'Relatively protected from putrefaction',
          ],
        },
        {
          id: 'common-drugs',
          title: 'Common Drugs & Interpretation',
          content: 'Understanding therapeutic, toxic, and lethal ranges guides interpretation.',
          keyPoints: [
            'Alcohol: >0.08% legal impairment, >0.40% potentially lethal',
            'Opioids: Wide range of tolerance; chronic users tolerate high levels',
            'Carbon monoxide: >50% carboxyhemoglobin typically lethal',
            'Always correlate with scene, history, and autopsy findings',
            'Therapeutic levels do not exclude drug as cause of death (e.g., additive effects)',
          ],
          pitfalls: [
            'Relying solely on blood levels without scene context',
            'Not recognizing tolerance in chronic drug users',
            'Missing combined drug toxicity when individual levels are "therapeutic"',
          ],
        },
      ],
    },
  },
  {
    id: 'histology',
    title: 'Histology in Autopsy',
    description: 'Standard sampling protocols, key histologic patterns, organ-specific findings',
    icon: Microscope,
    topics: ['Tissue Sampling', 'MI Chronology', 'Pneumonia Patterns', 'Hepatic Pathology', 'Renal Findings'],
    route: '/module/histology',
    content: {
      overview: 'Histologic examination confirms and refines gross findings. Standard sampling protocols ensure comprehensive tissue evaluation.',
      objectives: [
        'Apply standard autopsy tissue sampling protocols',
        'Recognize key histologic patterns in major organs',
        'Correlate microscopic and gross findings',
        'Understand timing of tissue changes',
      ],
      sections: [
        {
          id: 'sampling',
          title: 'Standard Tissue Sampling',
          content: 'Systematic sampling ensures comprehensive histologic evaluation.',
          keyPoints: [
            'Cardiovascular: All cardiac chambers, coronary arteries, aorta',
            'Pulmonary: Both lungs (upper/lower lobes), hilum',
            'GI: Esophagus, stomach, small bowel, colon',
            'Liver: At least two sections; sample any focal lesions',
            'Kidneys: Cortex and medulla from both',
            'Brain: Sample if gross abnormalities; consider fixation before sectioning',
            'Any gross lesions or abnormalities must be sampled',
          ],
        },
        {
          id: 'mi-histo',
          title: 'Myocardial Infarction Histology',
          content: 'Microscopic changes precede gross findings and refine timing.',
          keyPoints: [
            '< 4 hours: Minimal or no changes visible microscopically',
            '4-12 hours: Early coagulation necrosis, wavy fibers',
            '12-24 hours: Neutrophilic infiltrate begins',
            '1-3 days: Extensive neutrophilic infiltrate, coagulation necrosis',
            '3-7 days: Macrophages appear, necrosis more evident',
            '1-2 weeks: Granulation tissue, new vessel formation',
            'Weeks-months: Collagenous scar',
          ],
        },
        {
          id: 'lung-histo',
          title: 'Pulmonary Histology Patterns',
          content: 'Microscopic examination differentiates edema, pneumonia, ARDS, and embolism.',
          keyPoints: [
            'Edema: Alveoli filled with pink proteinaceous fluid',
            'Pneumonia: Alveoli filled with neutrophils, fibrin, bacteria',
            'ARDS/DAD: Hyaline membranes lining alveoli, interstitial thickening',
            'Pulmonary embolism: Thrombus in vessel, hemorrhagic infarct',
          ],
        },
        {
          id: 'liver-histo',
          title: 'Hepatic Histology',
          content: 'Liver histology reveals patterns of injury, steatosis, cirrhosis, and necrosis.',
          keyPoints: [
            'Steatosis: Fat vacuoles in hepatocytes (macro- or microvesicular)',
            'Cirrhosis: Nodules of regenerating hepatocytes surrounded by fibrosis',
            'Acute necrosis: Centrilobular (zone 3) in hypoxia/toxins',
            'Cholestasis: Bile plugs in canaliculi',
          ],
        },
      ],
    },
  },
  {
    id: 'hospital-workflow',
    title: 'Hospital Autopsy Workflow',
    description: 'Consent, clinical correlation, communication, reporting',
    icon: Building2,
    topics: ['Consent', 'Clinical History', 'CPC Correlation', 'Communication', 'Report Writing'],
    route: '/module/hospital-workflow',
    content: {
      overview: 'Hospital autopsy workflow emphasizes clinical correlation, communication with care teams, and advancing medical knowledge.',
      objectives: [
        'Understand consent requirements for hospital autopsy',
        'Integrate clinical history into autopsy planning',
        'Communicate effectively with clinical teams',
        'Structure comprehensive autopsy reports',
      ],
      sections: [
        {
          id: 'consent',
          title: 'Consent & Authorization',
          content: 'Hospital autopsies require next-of-kin consent unless under medical examiner jurisdiction.',
          keyPoints: [
            'Full autopsy: Complete internal examination',
            'Limited autopsy: Specific organs or regions (chest only, no head, etc.)',
            'Restrictions must be documented and followed',
            'Religious and cultural considerations',
          ],
        },
        {
          id: 'clinical-review',
          title: 'Clinical History & Chart Review',
          content: 'Thorough pre-autopsy chart review guides examination and sampling.',
          keyPoints: [
            'Review admission history, hospital course, treatments',
            'Note premortem imaging, labs, cultures',
            'Identify clinical questions or diagnostic uncertainties',
            'Review death note and terminal events',
            'Plan special studies based on differential diagnosis',
          ],
        },
        {
          id: 'cpc',
          title: 'Clinicopathologic Correlation',
          content: 'The final report synthesizes autopsy findings with clinical course.',
          keyPoints: [
            'Were clinical diagnoses confirmed?',
            'Were there unexpected findings?',
            'What was the sequence of events leading to death?',
            'Could diagnosis or treatment have been modified?',
            'Educational value for care teams',
          ],
        },
        {
          id: 'communication',
          title: 'Communication with Care Teams',
          content: 'Effective communication enhances the educational and quality improvement value of autopsy.',
          keyPoints: [
            'Preliminary findings discussion when appropriate',
            'Final report should answer clinical questions',
            'Presentation at mortality conferences',
            'Sensitivity to emotional impact on care providers',
          ],
        },
      ],
    },
  },
  {
    id: 'forensic-workflow',
    title: 'Forensic Case Workflow',
    description: 'Scene investigation, evidence handling, forensic documentation, legal considerations',
    icon: FileText,
    topics: ['Scene Investigation', 'Chain of Custody', 'Evidence Collection', 'Forensic Photography', 'Legal Testimony'],
    route: '/module/forensic-workflow',
    content: {
      overview: 'Forensic cases require meticulous documentation, evidence preservation, and integration with death investigation systems.',
      objectives: [
        'Understand scene investigation principles',
        'Maintain proper chain of custody',
        'Document findings for legal proceedings',
        'Integrate autopsy with investigative context',
      ],
      sections: [
        {
          id: 'scene',
          title: 'Scene Investigation Overview',
          content: 'While often performed by investigators, understanding scene context is crucial for autopsy interpretation.',
          keyPoints: [
            'Body position and surroundings',
            'Weapons, drug paraphernalia, medications',
            'Signs of struggle or forced entry',
            'Environmental conditions (temperature, lighting)',
            'Scene photography and diagramming',
            'Witness statements and 911 calls',
          ],
        },
        {
          id: 'chain-custody',
          title: 'Chain of Custody',
          content: 'Every transfer of the body or evidence must be documented.',
          keyPoints: [
            'Document who transported body and when',
            'Verify body identification at each transfer',
            'Log all persons present during autopsy',
            'Evidence sealed, labeled, and signed by collector',
            'Continuous documentation from scene to final disposition',
          ],
        },
        {
          id: 'evidence',
          title: 'Evidence Collection',
          content: 'Physical evidence must be collected, preserved, and transferred properly.',
          keyPoints: [
            'Clothing: Paper bags (not plastic), air-dry if wet',
            'Trace evidence: Hairs, fibers, gunshot residue',
            'Swabs: Sexual assault kits, DNA collection',
            'Projectiles: Handle carefully, preserve rifling marks',
            'Document evidence location and condition photographically',
          ],
        },
        {
          id: 'forensic-photo',
          title: 'Forensic Photography',
          content: 'Comprehensive photographic documentation is essential for legal proceedings.',
          keyPoints: [
            'Overall body views before and after clothing removal',
            'Close-ups of all injuries with and without scale',
            'Document evidence in situ before collection',
            'Internal findings of forensic significance',
            'Photo log with case number, date, photographer',
          ],
        },
      ],
    },
  },
  {
    id: 'cod-reasoning',
    title: 'Cause-of-Death Reasoning',
    description: 'Immediate vs underlying cause, mechanistic chains, death certificate logic',
    icon: GitBranch,
    topics: ['Immediate Cause', 'Underlying Cause', 'Contributing Factors', 'Mechanistic Chains', 'Death Certificate'],
    route: '/module/cod-reasoning',
    content: {
      overview: 'Determining cause of death requires understanding the sequence from initiating event through terminal mechanisms.',
      objectives: [
        'Distinguish immediate, intermediate, and underlying causes',
        'Construct logical causal chains',
        'Identify contributing conditions',
        'Avoid common errors in cause-of-death determination',
      ],
      sections: [
        {
          id: 'definitions',
          title: 'Immediate vs Underlying Cause',
          content: 'The death certificate structure reflects the sequence of events leading to death.',
          keyPoints: [
            'Immediate cause: Final disease/condition causing death (e.g., cardiac arrest)',
            'Intermediate: Conditions leading to immediate cause (e.g., acute MI)',
            'Underlying: Disease/injury that started the sequence (e.g., coronary atherosclerosis)',
            'Contributing: Other significant conditions not directly causal (e.g., diabetes)',
          ],
        },
        {
          id: 'chains',
          title: 'Causal Chains',
          content: 'Each condition should cause the one above it. The chain must be logical and medically sound.',
          keyPoints: [
            'Example: Bronchopneumonia → due to → Immobility → due to → Hip fracture',
            'Each step should be a plausible consequence of the next',
            'Avoid vague mechanisms (cardiac arrest, respiratory failure) as underlying cause',
            'Time intervals should be consistent with disease process',
          ],
          pitfalls: [
            'Listing "cardiac arrest" or "respiratory failure" as underlying cause',
            'Illogical sequences (e.g., MI due to hypertension - should be "contributing")',
            'Listing too many conditions in causal chain',
          ],
        },
        {
          id: 'common-errors',
          title: 'Common Errors',
          content: 'Certain patterns of errors appear frequently in death certification.',
          keyPoints: [
            'Confusing mechanism with cause (cardiac arrest is a mechanism)',
            'Listing mode of dying rather than disease (e.g., "multi-organ failure")',
            'Inadequate specificity (e.g., "cancer" instead of "metastatic lung adenocarcinoma")',
            'Competing causes listed in sequence rather than as separate contributors',
          ],
        },
        {
          id: 'complex-cases',
          title: 'Complex Multi-System Cases',
          content: 'Many autopsy cases involve multiple organ system failures. Determining the initiating event is key.',
          keyPoints: [
            'Identify the earliest pathologic event',
            'Trace progression through organ systems',
            'Terminal events (sepsis, multi-organ failure) are often immediate causes',
            'Contributing conditions may be numerous but separate from causal chain',
          ],
        },
      ],
    },
  },
  {
    id: 'cases',
    title: 'Integrated Autopsy Cases',
    description: 'Synthetic case library covering natural, traumatic, toxic, and complex deaths',
    icon: FolderOpen,
    topics: ['Natural Deaths', 'Traumatic Deaths', 'Toxicologic Deaths', 'Infant Deaths', 'Complex Cases'],
    route: '/module/cases',
    content: {
      overview: 'Integrated cases combine external examination, internal findings, histology, and toxicology to build comprehensive reasoning skills.',
      objectives: [
        'Apply systematic autopsy approach to diverse cases',
        'Synthesize multiple data sources',
        'Formulate cause and manner of death',
        'Recognize patterns across case types',
      ],
      sections: [
        {
          id: 'natural-cases',
          title: 'Natural Death Cases',
          content: 'Common natural disease scenarios encountered in autopsy practice.',
          keyPoints: [
            'Acute myocardial infarction with coronary atherosclerosis',
            'Pulmonary embolism in postoperative patient',
            'Ruptured aortic aneurysm',
            'Bacterial pneumonia with sepsis',
            'Diabetic ketoacidosis',
            'GI bleeding from varices in cirrhotic patient',
          ],
        },
        {
          id: 'traumatic-cases',
          title: 'Traumatic Death Cases',
          content: 'Injury patterns and forensic correlation in traumatic deaths.',
          keyPoints: [
            'Motor vehicle collision with multiple blunt force injuries',
            'Fall from height with head trauma',
            'Sharp force injury with defensive wounds',
            'Blunt force trauma with patterned injuries',
            'Thermal injuries and smoke inhalation',
          ],
        },
        {
          id: 'toxic-cases',
          title: 'Toxicologic Death Cases',
          content: 'Drug overdoses and toxic exposures require careful toxicology correlation.',
          keyPoints: [
            'Opioid overdose with scene evidence',
            'Combined drug toxicity (polypharmacy)',
            'Carbon monoxide poisoning with cherry-red livor',
            'Alcohol toxicity with aspiration',
            'Medication toxicity in elderly patient',
          ],
        },
        {
          id: 'complex-cases',
          title: 'Complex Mixed Mechanism Deaths',
          content: 'Real-world cases often involve multiple contributing factors.',
          keyPoints: [
            'Traumatic injury complicated by medical comorbidities',
            'Natural disease with terminal complications',
            'Drug use in patient with cardiovascular disease',
            'Infection in immunocompromised patient',
            'Surgical complications in high-risk patient',
          ],
        },
      ],
    },
  },
]
