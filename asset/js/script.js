document.addEventListener('DOMContentLoaded', e => {
  let keys = document.querySelector('.keys')
  let notes = ['do', 're', 'mi', 'fa', 'so', 'la', 'ti']
  let kk = {}

  for (let i = 3; i > 0; --i) {
    notes.forEach(note => {
      let key = document.createElement('div')
      key.className = 'key'
      key.id = note + i

      let img = document.createElement('img')
      img.src = `./asset/imgs/${note}.png`
      img.ondragstart = e => false
      key.appendChild(img)

      let audio = document.createElement('audio')
      audio.src = `./asset/media/lyre/${note}${i}.mp3`
      key.appendChild(audio)

      key.play = e => {
        key.classList.add('pressed')
        audio.currentTime = 0
        audio.play()
      }

      key.release = e => {
        key.classList.remove('pressed')
      }

      key.addEventListener('mousedown', key.play)
      key.addEventListener('mouseup', key.release)
      key.addEventListener('mouseleave', key.release)

      keys.appendChild(key)
      kk[key.id] = key
    })
  }

  let map_note = {
    'q': 'do3',
    'w': 're3',
    'e': 'mi3',
    'r': 'fa3',
    't': 'so3',
    'y': 'la3',
    'u': 'ti3',

    'a': 'do2',
    's': 're2',
    'd': 'mi2',
    'f': 'fa2',
    'g': 'so2',
    'h': 'la2',
    'j': 'ti2',

    'z': 'do1',
    'x': 're1',
    'c': 'mi1',
    'v': 'fa1',
    'b': 'so1',
    'n': 'la1',
    'm': 'ti1',
  }

  document.addEventListener('keydown', e => {
    if (e.repeat) return;
    let note = map_note[e.key]
    if (note) {
      kk[note].play()
    }
  })

  document.addEventListener('keyup', e => {
    let note = map_note[e.key]
    if (note) {
      kk[note].release()
    }
  })
})
