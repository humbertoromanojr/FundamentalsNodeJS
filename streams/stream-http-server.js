import http from "node:http";
import { Transform } from "node:stream";

class InverseNumberStream extends Transform {
  _transform(chunk, encoding, callback) {
    const transformed = Number(chunk.toString()) * -1;

    console.log("I See Transformed: ", transformed);

    callback(null, Buffer.from(String(transformed)));
  }
}

// req => ReadableStream
// res => WritableStream

const server = http.createServer(async (req, res) => {
  const buffers = [];

  // after going through the entire file, which executes the lines below
  for await (const chunk of req) {
    buffers.push(chunk);
  }

  const fullStreamContent = Buffer.concat(buffers).toString();

  console.log("I see fullStreamContent: ", fullStreamContent);

  return res.end(fullStreamContent);
});

server.listen(3002, () => {
  console.log("Server runner now in port 3002");
});
