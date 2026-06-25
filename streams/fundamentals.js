import { Readable, Writable } from "node:stream";

// ------------ Readable
class OneToHundredStream extends Readable {
  index = i;

  _read() {
    const i = this.index++;

    if (i > 100) {
      this.push(null);
    } else {
      const buf = Buffer.from(String(i));

      this.push(buf);
    }
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

new OneToHundredStream().pipe(new MultiplyByTenStream());
