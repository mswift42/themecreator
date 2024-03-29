FROM clojure
# Better mount the cloned app.core directory
# COPY app.core /usr/src/app
RUN useradd -ms /bin/bash devel
USER devel
WORKDIR /usr/src/app
CMD ["clj", "-M:fig:build"]
EXPOSE 9500/tcp
