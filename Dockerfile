FROM python:alpine

WORKDIR /usr/src/

COPY ./flask /usr/src/flask

RUN pip install flask

EXPOSE 8080
