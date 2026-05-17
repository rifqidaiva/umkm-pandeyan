export type Reservation = {
  id: string
  spaceSlug: string
  bookedBy: string
  organization?: string
  address?: string
  date: string // YYYY-MM-DD
  startTime: string // HH:MM
  endTime: string // HH:MM
  description?: string
  participants?: number
  createdAt: string
}

export const reservations: Reservation[] = [
  {
    id: "r1",
    spaceSlug: "pendopo-utama",
    bookedBy: "Anakaya",
    organization: "REC x BIM UGM",
    address: "UGM",
    date: "2026-05-03",
    startTime: "07:00",
    endTime: "17:00",
    description: "Pengambilan sample biotilik untuk mengecek kualitas sungai",
    participants: 50,
    createdAt: new Date().toISOString(),
  },
  {
    id: "r2",
    spaceSlug: "gazebo-keluarga",
    bookedBy: "Budi",
    organization: "RT 01",
    address: "Pandeyan",
    date: "2026-05-02",
    startTime: "09:00",
    endTime: "12:00",
    description: "Arisan keluarga",
    participants: 12,
    createdAt: new Date().toISOString(),
  },
]

export function getReservationsForSpace(spaceSlug: string) {
  return reservations.filter((r) => r.spaceSlug === spaceSlug)
}

export function addReservation(res: Reservation) {
  reservations.push(res)
}

export function isSlotAvailable(spaceSlug: string, date: string, startTime: string, endTime: string) {
  const list = getReservationsForSpace(spaceSlug).filter((r) => r.date === date)
  const toMinutes = (t: string): number => {
    const parts = t.split(":")
    const h = Number(parts[0] ?? 0)
    const m = Number(parts[1] ?? 0)

    if (!Number.isFinite(h) || !Number.isFinite(m)) {
      throw new Error(`Invalid time format: "${t}". Expected "HH:MM".`)
    }

    return h * 60 + m
  }
  const s = toMinutes(startTime)
  const e = toMinutes(endTime)
  return !list.some((r) => {
    const rs = toMinutes(r.startTime)
    const re = toMinutes(r.endTime)
    return Math.max(rs, s) < Math.min(re, e)
  })
}
