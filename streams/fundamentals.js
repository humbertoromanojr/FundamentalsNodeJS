import { Readable, Writable, Transform } from "node:stream";
import { setTimeout } from "node:timers/promises";

// ------------ Readable
class OneToHundredStream extends Readable {
  index = i;

  _read() {
    const i = this.index++;

    setTimeout(() => {
      if (i > 100) {
        this.push(null);
      } else {
        const buf = Buffer.from(String(i));

        this.push(buf);
      }
    }, 1000);
  }
}

// new OneToHundredStream().pipe(process.stdout);

// ------------ Writable
class MultiplyByTenStream extends Writable {
  _write(chunk, encoding, callback) {
    console.log(Number(chunk.toString()) * 10);
    callback();
  }
}

// new OneToHundredStream().pipe(new MultiplyByTenStream());

// ------------ Transform
class InverseNumberStream extends Transform {
  _transform(chunk, encoding, callback) {
    const transformed = Number(chunk.toString()) * -1;

    callback(null, Buffer.from(String(transformed)));
  }
}

new OneToHundredStream()
  .pipe(new InverseNumberStream())
  .pipe(new MultiplyByTenStream());
