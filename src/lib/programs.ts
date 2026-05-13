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
  nursing:
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80',
  midwifery:
    'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=900&q=80',
  physiotherapy:
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80',
  imaging:
    'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=900&q=80',
  pharmacy:
    'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=900&q=80',
  lab: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=900&q=80',
  dental:
    'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=900&q=80',
  management:
    'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=900&q=80',
  computing:
    'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80'
}

export type ProgramFees = {
  tuition: number
  registration: number
}

export const programFees: Record<ProgramKey, ProgramFees> = {
  nursing: { tuition: 650_000, registration: 75_000 },
  midwifery: { tuition: 650_000, registration: 75_000 },
  physiotherapy: { tuition: 600_000, registration: 75_000 },
  imaging: { tuition: 700_000, registration: 75_000 },
  pharmacy: { tuition: 650_000, registration: 75_000 },
  lab: { tuition: 700_000, registration: 75_000 },
  dental: { tuition: 650_000, registration: 75_000 },
  management: { tuition: 550_000, registration: 75_000 },
  computing: { tuition: 600_000, registration: 75_000 }
}

export function formatXAF(amount: number): string {
  return `XAF ${amount.toLocaleString('en-US')}`
}

export type FormattedFeeRow = {
  key: ProgramKey
  tuition: string
  reg: string
  total: string
}

export const tuitionRows: FormattedFeeRow[] = programOrder.map((key) => {
  const f = programFees[key]
  return {
    key,
    tuition: formatXAF(f.tuition),
    reg: formatXAF(f.registration),
    total: formatXAF(f.tuition + f.registration)
  }
})
