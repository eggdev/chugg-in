FROM python:alpine

ENV SRC_DIR /usr/src/

WORKDIR ${SRC_DIR}

COPY ./flask ${SRC_DIR}/flask

RUN pip install flask

EXPOSE 8080
