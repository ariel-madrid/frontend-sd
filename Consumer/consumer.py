from kafka import KafkaConsumer
from pymongo import MongoClient
import time
import json
import logging
KAFKA_IP = "127.0.0.1"
KAFKA_PORT = "9092"

MAX_WAIT_TIME_IN_SECONDS = 10
BATCH_SIZE = 10

def json_loader_deserializer(v):
    if v is None:
        return

    try:
        return json.loads(v.decode('utf-8'))
    except json.decoder.JSONDecodeError:
        logging.exception('Unable to decode: %s', v)
        return None

def main():
    # COnnect to mongo remote db.
    mongo_client = MongoClient("mongodb://distribuidos:Distribuidos1-2023-a-m-r-%C3%B1@localhost:27017/?authMechanism=DEFAULT")
    db = mongo_client["eonet"]
    events_collection = db["events"]
    
    # Create the Consumer instance.
    consumer = KafkaConsumer(
        "events",
        bootstrap_servers = [KAFKA_IP + ':' + KAFKA_PORT],
        auto_offset_reset='earliest',
        value_deserializer=json_loader_deserializer
    )
    
    # Start consuming events from events topic.
    events_received = []
    last_time_from_event_received = time.time()
    for message in consumer:
        
        #print("debug")
        print("%s:%d:%d: key=%s value=%s" % (message.topic, message.partition, message.offset, message.key, message.value))
        
        events_received.append(message.value)
        elapsed_time_since_last_event = time.time() - last_time_from_event_received

        if len(events_received) > 0 and (len(events_received) == BATCH_SIZE or elapsed_time_since_last_event > MAX_WAIT_TIME_IN_SECONDS):
        
            events_collection.insert_many(events_received)
            events_received = []

        last_time_from_event_received = time.time()
    
if __name__ == "__main__":
    
    main()