export class Config {
  cookies: any
  instrument: string
  instruments: string[]

  constructor(cookies: any, ins: string | null) {
    this.cookies = cookies
    this.instrument = ins ?? 'lyre'
    this.instruments = ['lyre', 'zither', 'piano']
  }

  setIns(ins: string) {
    this.instrument = ins
    this.cookies.set('ins', ins)
  }
}
