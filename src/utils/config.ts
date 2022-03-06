export class Config {
  cookies: any
  instrument: string

  constructor(cookies: any, ins: string | null) {
    this.cookies = cookies
    this.instrument = ins ?? 'lyre'
  }

  setIns(ins: string) {
    this.instrument = ins
    this.cookies.set('ins', ins)
  }
}
