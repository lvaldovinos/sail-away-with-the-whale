## Docker is lightweight
<section>
  <p>Creating a docker image requires a Dockerfile:</p>
  <pre>
    <code data-trim 
      data-noescape
    >
      <strong>FROM</strong> node:6-slim
      <strong>RUN</strong> mkdir /application 
      <strong>WORKDIR</strong> /application
      <strong>COPY</strong> package.json .
      <strong>COPY</strong> bower.json .
      <strong>RUN</strong> npm install
      <strong>COPY</strong> . /application
      <strong>EXPOSE</strong> 3000
      <strong>CMD</strong> ["node", "server.js"]
    </code>
  </pre>
</section>
<section>
  <p>Bulding your image:</p>
  <pre>
    <code data-trim>
      docker build -t docker-presentation .
    </code>
  </pre>
  <p>Once you have an image you can run your container:</p>
  <pre>
    <code data-trim>
      docker run -p 3000:3000 --name presentation docker-presentation
    </code>
  </pre>
</section>
