type TAutoplay = number | false

export class Configuration {
  //
  private _autoplay: TAutoplay
  private _id: string
  private _loop: boolean

  // Selectors

  set autoplay(v: TAutoplay) {
    this._autoplay = 'number' === typeof v ? v : false
  }
  get autoplay(): TAutoplay {
    return this._autoplay
  }
}
