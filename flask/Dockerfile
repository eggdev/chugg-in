FROM ubuntu:latest

RUN apt-get update -y
RUN apt-get install -y python3-dev python3-pip build-essential

ENV SRC_DIR /usr/src/

WORKDIR ${SRC_DIR}

COPY ./ ${SRC_DIR}/flask

RUN pip3 install -r requirements.txt

ENTRYPOINT ["flask"]
CMD ["run", "--host=0.0.0.0"]