FROM ubuntu:20.04

RUN apt-get update \
    && apt install python3 python3-pip -y

WORKDIR /app

COPY . . 

RUN pip3 --no-cache-dir install -r requirements.txt

EXPOSE 5000

ENTRYPOINT ["python3"]
CMD ["flask_server.py"]