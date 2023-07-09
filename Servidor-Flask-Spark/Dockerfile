FROM python:3.9-slim-buster
WORKDIR /app
COPY ./requirements.txt /app
RUN pip install -r requirements.txt
COPY . .
EXPOSE 5000
ENV FLASK_APP=app.py
CMD ["flask", "run", "--host", "0.0.0.0"]

FROM adoptopenjdk:11-jre-hotspot

USER root

RUN apt-get update && apt-get install -y wget tar
# Descargar Apache Spark
RUN wget -O spark.tgz https://dlcdn.apache.org/spark/spark-3.4.1/spark-3.4.1-bin-hadoop3.tgz && \
    tar -xvzf spark.tgz && \
    rm spark.tgz && \
    mv spark-3.4.1-bin-hadoop3 /spark

# Configurar las variables de entorno para Spark
ENV SPARK_HOME=/spark
ENV PATH=$PATH:$SPARK_HOME/bin


RUN apt-get update && apt-get install -y python3-pip
WORKDIR /app
COPY ./requirements.txt /app
RUN pip install -r requirements.txt
COPY . .
EXPOSE 5000
ENV FLASK_APP=app.py
CMD ["flask", "run", "--host", "0.0.0.0"]