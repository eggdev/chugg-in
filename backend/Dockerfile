FROM python:3.7.7-alpine

RUN pip install pipenv
RUN apt-get update && apt-get install -y --no-install-recommends gcc

ENV SRC_DIR /usr/src

WORKDIR ${SRC_DIR}/backend

COPY ./Pipfile ${SRC_DIR}/backend
COPY ./Pipfile.lock ${SRC_DIR}/backend

RUN pipenv install

COPY . ${SRC_DIR}/backend

CMD [ "python3", "/usr/src/backend/app.py" ]
