from flask import Flask
from flask_pymongo import PyMongo
from flask.json import jsonify
from flask_cors import CORS, cross_origin
from bson.json_util import dumps
from pyspark import SparkContext
from pyspark.streaming import StreamingContext
from pyspark.sql import SparkSession
from pyspark.sql.functions import *
from pyspark.sql.types import StructType, StructField, StringType, IntegerType, ArrayType, DoubleType
#Create Flask app
app = Flask(__name__)
CORS(app)
#Config Mongo connection
app.config["MONGO_URI"] = "mongodb://20.165.162.136:27017/eonet"
mongo = PyMongo(app)



#Configure Spark
spark = SparkSession.\
    builder.\
    appName("streamingExampleRead").\
    config('spark.jars.packages', 'org.mongodb.spark:mongo-spark-connector_2.12:3.0.1').\
    config("spark.mongodb.input.uri", "mongodb://20.165.162.136:27017/eonet.events").\
    config("spark.mongodb.output.uri", "mongodb://20.165.162.136:27017/eonet.events").\
    config('spark.mongodb.change.stream.publish.full.document.only','true').\
    getOrCreate()

#Se eliminan datos duplicados
dataframe=spark.read.format("mongo").load().dropDuplicates()

#Routes
@app.route("/events")
def events():
    events = mongo.db.events.find()
    resp = dumps(events)
    return resp

@app.route("/categories")
def categories_get():
    categories = mongo.db.categories.find()
    resp = dumps(categories)
    return resp

@app.route("/events/<category>")
def events_from_category(category):
    print(category)
    pipeline =  [
        {
            '$match': {
                'categories': {
                    '$elemMatch': {
                        'title': category
                    }
                }
            }
        }
    ]
    
    events = mongo.db.events.aggregate(pipeline)
    resp = dumps(events)
    return resp

from flask import Response
import pandas as pd
@app.route("/total_event_by_category")
def get_total_event_by_category():
    
    total_by_category = dataframe.groupBy("categories").count()
    total_by_category = total_by_category.toPandas()
    total_by_category = total_by_category.to_dict(orient='records')

    total_by_category_json = jsonify(total_by_category)

    return total_by_category_json



if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)