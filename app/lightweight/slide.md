## Docker is lightweight
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
<p>Bulding your image:</p>
<pre>
  <code data-trim>
    docker build -t docker-presentation .
  </code>
</pre>
