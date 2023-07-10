### Limpieza 
- Limpiar todo (volumenes, contenedores)
```
docker rm -f $(docker ps -a -q)
docker volume rm $(docker volume ls -q)
```

## 1. Levantar docker-compose con servicios de kafka y zookeeper.
Ir a carpeta Producer/kafka-docker
`docker compose -f=docker-compose-expose.yml up -`

## 2. Levantar DB
- Ir a carpeta MongoDB.
- docker compose up -d (--build si es necesario)

## 3. Levantar producer.
```
docker build . -t sd-prod:0.0.1
docker run --network="host"  sd-prod:0.0.1
```

## 4. Levantar consumer.
```
docker build . -t sd-consumer:0.0.1
docker run --network="host"  sd-consumer:0.0.1
```

### 4.1. Abrir contenedor para monitorear que se guardan datos: 
```
docker exec -it *contenedor id* bash
mongosh -u distribuidos -p Distribuidos1-2023-a-m-r
use admin > use eonet
db.events.find()
```
* Salir del contenedor

## 5. Levantar api.
```
docker build . -t sd-server:0.0.1
docker run –network=”host” sd-server:0.0.1
```

## 6. Levantar frontend.
- Ir a la carpeta Front
```
docker build . sd-front:0.0.1
docker run -p=80:80 sd-front:0.0.1
```
