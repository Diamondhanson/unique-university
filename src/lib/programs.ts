export type ProgramKey =
  | 'nursing'
  | 'midwifery'
  | 'physiotherapy'
  | 'imaging'
  | 'pharmacy'
  | 'lab'
  | 'dental'
  | 'management'
  | 'computing'

export const programOrder: ProgramKey[] = [
  'nursing',
  'midwifery',
  'physiotherapy',
  'imaging',
  'pharmacy',
  'lab',
  'dental',
  'management',
  'computing'
]

export function isProgramKey(value: string): value is ProgramKey {
  return (programOrder as readonly string[]).includes(value)
}

export const programImages: Record<ProgramKey, string> = {
  nursing: '/photos/programs-nursing-practical.jpg',
  midwifery: '/photos/programs-midwifery-neonatal.jpg',
  physiotherapy: '/photos/programs-physiotherapy-clinical.jpg',
  imaging: '/photos/programs-imaging-ultrasound.jpg',
  pharmacy: '/photos/programs-pharmacy-dispensary.jpg',
  lab: '/photos/programs-lab-microscope.jpg',
  dental:
    'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=900&q=80',
  management: '/photos/programs-management-desk.jpg',
  computing:
    'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80'
}

// FCFA helpers ----------------------------------------------------------

export function formatFCFA(amount: number): string {
  return `${amount.toLocaleString('en-US')} FCFA`
}

// HND fee structure (3 years, per the official UBHI tuition sheet) -----

export type HndLevelKey = 'level1' | 'level2' | 'level3'

export type HndLevelFees = {
  registration?: number
  medicalCertificate?: number
  yearlyTuition: number
  internshipToHospitals?: number
  practical?: number
  reportPresentation?: number
  schoolTshirt?: number
  schoolIdentityCard?: number
  internshipSupervision?: number
  researchSupervisorAndDefense?: number
  total: number
}

export const hndLevels: Record<HndLevelKey, HndLevelFees> = {
  level1: {
    registration: 10_000,
    medicalCertificate: 5_000,
    yearlyTuition: 400_000,
    internshipToHospitals: 10_000,
    practical: 10_000,
    reportPresentation: 10_000,
    schoolTshirt: 4_000,
    schoolIdentityCard: 1_000,
    total: 450_000
  },
  level2: {
    yearlyTuition: 400_000,
    internshipToHospitals: 20_000,
    practical: 10_000,
    reportPresentation: 20_000,
    schoolTshirt: 4_000,
    internshipSupervision: 10_000,
    total: 460_000
  },
  level3: {
    yearlyTuition: 400_000,
    internshipToHospitals: 10_000,
    practical: 10_000,
    reportPresentation: 10_000,
    schoolTshirt: 4_000,
    internshipSupervision: 5_000,
    researchSupervisorAndDefense: 30_000,
    total: 465_000
  }
}

export const hndProgramTotal =
  hndLevels.level1.total + hndLevels.level2.total + hndLevels.level3.total

// Bachelor's top-up (BSc, 1 year after HND) ----------------------------

export const bachelorFees = {
  registration: 25_000,
  yearlyTuition: 500_000,
  total: 525_000
}

// Vocational (short courses, 1 year) -----------------------------------

export const vocationalFees = {
  registration: 10_000,
  tuitionFees: 300_000,
  internshipToHospitals: 10_000,
  practicals: 10_000,
  reportPresentation: 10_000,
  schoolTshirt: 4_000,
  schoolIdentityCard: 1_000,
  researchAndSupervisionDefense: 30_000,
  total: 375_000
}

// Ordered fee-line keys for translation lookup -------------------------

export const hndLineOrder: (keyof HndLevelFees)[] = [
  'registration',
  'medicalCertificate',
  'yearlyTuition',
  'internshipToHospitals',
  'practical',
  'reportPresentation',
  'schoolTshirt',
  'schoolIdentityCard',
  'internshipSupervision',
  'researchSupervisorAndDefense'
]

export const bachelorLineOrder: (keyof typeof bachelorFees)[] = [
  'registration',
  'yearlyTuition'
]

export const vocationalLineOrder: (keyof typeof vocationalFees)[] = [
  'registration',
  'tuitionFees',
  'internshipToHospitals',
  'practicals',
  'reportPresentation',
  'schoolTshirt',
  'schoolIdentityCard',
  'researchAndSupervisionDefense'
]
