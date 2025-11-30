export interface Question {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  category: string
}

export const assessmentQuestions: Question[] = [
  {
    id: 'q1',
    question: 'What is the preferred blood specimen for quantitative toxicology analysis?',
    options: [
      'Heart blood',
      'Peripheral blood (femoral vein)',
      'Subclavian vein blood',
      'Liver tissue homogenate'
    ],
    correctAnswer: 1,
    explanation: 'Peripheral blood from the femoral vein is preferred because it is less subject to postmortem redistribution compared to heart blood.',
    category: 'Toxicology'
  },
  {
    id: 'q2',
    question: 'Which postmortem change typically becomes fixed after 8-12 hours?',
    options: [
      'Rigor mortis',
      'Livor mortis',
      'Algor mortis',
      'Autolysis'
    ],
    correctAnswer: 1,
    explanation: 'Livor mortis (postmortem lividity) begins 1-2 hours after death and becomes fixed (non-blanching with pressure) after approximately 8-12 hours.',
    category: 'Postmortem Changes'
  },
  {
    id: 'q3',
    question: 'In myocardial infarction, when do neutrophils typically appear histologically?',
    options: [
      'Within 4 hours',
      '12-24 hours',
      '3-7 days',
      '1-2 weeks'
    ],
    correctAnswer: 1,
    explanation: 'Neutrophilic infiltration in myocardial infarction begins around 12-24 hours after the initial ischemic event.',
    category: 'Histology'
  },
  {
    id: 'q4',
    question: 'What distinguishes a stab wound from an incised wound?',
    options: [
      'Stab wounds have irregular edges',
      'Stab wounds are deeper than they are long',
      'Incised wounds always involve major vessels',
      'Incised wounds are always defensive injuries'
    ],
    correctAnswer: 1,
    explanation: 'Stab wounds have depth greater than length on the skin surface, while incised wounds have length greater than depth.',
    category: 'Forensic Pathology'
  },
  {
    id: 'q5',
    question: 'Which evisceration method removes organs from tongue to rectum as one block?',
    options: [
      'Virchow method',
      'Rokitansky method',
      'Ghon method',
      'Letulle method'
    ],
    correctAnswer: 3,
    explanation: 'The Letulle method involves en bloc removal of thoracic and abdominal organs together, from tongue to rectum, preserving anatomic relationships.',
    category: 'Internal Examination'
  },
  {
    id: 'q6',
    question: 'Cherry-red lividity is classically associated with which toxicologic finding?',
    options: [
      'Cyanide poisoning',
      'Carbon monoxide poisoning',
      'Opioid overdose',
      'Methanol toxicity'
    ],
    correctAnswer: 1,
    explanation: 'Cherry-red or pink livor mortis is characteristic of carbon monoxide poisoning due to carboxyhemoglobin formation.',
    category: 'Toxicology'
  },
  {
    id: 'q7',
    question: 'What percentage of coronary artery stenosis is generally considered critical?',
    options: [
      '>50%',
      '>60%',
      '>75%',
      '>90%'
    ],
    correctAnswer: 2,
    explanation: 'Greater than 75% cross-sectional stenosis is generally considered critical and flow-limiting.',
    category: 'Natural Disease'
  },
  {
    id: 'q8',
    question: 'Which of the following is NOT appropriate as an underlying cause of death?',
    options: [
      'Coronary atherosclerosis',
      'Cardiac arrest',
      'Metastatic lung carcinoma',
      'Chronic alcoholism'
    ],
    correctAnswer: 1,
    explanation: 'Cardiac arrest is a mechanism of death (how the body stopped functioning), not a disease or injury. It should not be listed as the underlying cause.',
    category: 'Cause of Death Reasoning'
  },
  {
    id: 'q9',
    question: 'When should respiratory protection (N95 or higher) be used during autopsy?',
    options: [
      'Only for known tuberculosis cases',
      'For all cases as standard precaution',
      'For suspected TB or other airborne pathogens',
      'Never necessary if wearing face shield'
    ],
    correctAnswer: 2,
    explanation: 'N95 respirators are required for suspected tuberculosis or other airborne pathogens. Standard cases require face shields for splash protection.',
    category: 'Safety'
  },
  {
    id: 'q10',
    question: 'Defensive wounds are most commonly found in which location?',
    options: [
      'Chest and abdomen',
      'Head and neck',
      'Hands and forearms',
      'Legs and feet'
    ],
    correctAnswer: 2,
    explanation: 'Defensive wounds from sharp force trauma are typically found on the hands (palms, fingers) and forearms as the victim attempts to ward off the attack.',
    category: 'Forensic Pathology'
  },
  {
    id: 'q11',
    question: 'What is the primary advantage of vitreous humor for postmortem chemistry?',
    options: [
      'Highest concentration of drugs',
      'Protected from decomposition and contamination',
      'Most accurate for time of death',
      'Contains all medications taken'
    ],
    correctAnswer: 1,
    explanation: 'Vitreous humor is relatively protected from putrefaction and contamination, making it valuable for chemistry (glucose, electrolytes, alcohol) even in decomposed bodies.',
    category: 'Toxicology'
  },
  {
    id: 'q12',
    question: 'Which organ shows the most rapid autolysis after death?',
    options: [
      'Liver',
      'Heart',
      'Pancreas',
      'Kidney'
    ],
    correctAnswer: 2,
    explanation: 'The pancreas undergoes extremely rapid autolysis due to its high enzyme content and can digest surrounding tissues.',
    category: 'Postmortem Changes'
  }
]
