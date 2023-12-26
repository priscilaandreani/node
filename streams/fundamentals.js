import { Readable, Writable } from 'node:stream';

class OneToHundredStream extends Readable {
  index = 1;

  _read() {
    const i = this.index++;

    setTimeout(() => {
      if (i > 100) {
        this.push(null);
      } else {
        const buf = Buffer.from(`${i}\n`, 'utf-8');

        this.push(buf);
      }
    }, 1000);
  }
}

class MultiplyByTenStream extends Writable {
  _write(chunk, encoding, callback) {
    console.log(chunk.toString() * 10);

    callback();
  }
}

new OneToHundredStream().pipe(new MultiplyByTenStream());
