## Simple image sharing
<section>
  <p>Once you have an image you can share it quicly</p>
  ![Docker images command](/app/assets/docker-images.png)
  <p>You can share your images using the public docker registry</p>
  <pre>
    <code data-trim>
      docker login -e="$DOCKER_EMAIL" -u="$DOCKER_USERNAME" -p="$DOCKER_PASSWORD"
      docker tag docker-presentation lvaldovinos/docker-presentation
      docker push lvaldovinos/docker-presentation
    </code>
  </pre>
</section>
<section>
  ![Docker hub website](/app/assets/docker-hub.png)
</section>
