FROM python:alpine

WORKDIR /usr/src/

COPY ./flask ./

RUN pip install flask

EXPOSE 8080

ENTRYPOINT ["python", "/usr/src/app.py"]
