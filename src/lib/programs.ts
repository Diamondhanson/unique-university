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

export const tuitionRows: { key: ProgramKey; tuition: string; reg: string; total: string }[] = [
  { key: 'nursing', tuition: 'XAF 650,000', reg: 'XAF 75,000', total: 'XAF 725,000' },
  { key: 'midwifery', tuition: 'XAF 650,000', reg: 'XAF 75,000', total: 'XAF 725,000' },
  { key: 'physiotherapy', tuition: 'XAF 600,000', reg: 'XAF 75,000', total: 'XAF 675,000' },
  { key: 'imaging', tuition: 'XAF 700,000', reg: 'XAF 75,000', total: 'XAF 775,000' },
  { key: 'pharmacy', tuition: 'XAF 650,000', reg: 'XAF 75,000', total: 'XAF 725,000' },
  { key: 'lab', tuition: 'XAF 700,000', reg: 'XAF 75,000', total: 'XAF 775,000' },
  { key: 'dental', tuition: 'XAF 650,000', reg: 'XAF 75,000', total: 'XAF 725,000' },
  { key: 'management', tuition: 'XAF 550,000', reg: 'XAF 75,000', total: 'XAF 625,000' },
  { key: 'computing', tuition: 'XAF 600,000', reg: 'XAF 75,000', total: 'XAF 675,000' }
]
