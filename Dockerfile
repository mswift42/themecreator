FROM clojure
# COPY app.core /usr/src/app
WORKDIR /usr/src/app
CMD ["clj", "-M:fig:build"]
EXPOSE 9500/tcp
