import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify

#Database setup
engine = create_engine("sqlite:///hawaii.sqlite")


#Reflect an existing database into a new model
Base = automap_base()
#Feflect the tables
Base.prepare(engine, reflect=True)

#Save reference to the table
Measurements = Base.classes.measurements
Stations= Base.classes.stations

#Flask setup
app = Flask(__name__)

#Flask routes
@app.route("/")
def index():
    """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"/api/v1.0/precipitation<br/>"
        f"/api/v1.0/stations<br/>"
        f"/api/v1.0/tobs"
    )

@app.route("/api/v1.0/precipitation")
    session = Session(engine)
def precipitation():
    
   """Return a list of precipitation results, including the date and the precipitation"""
   
    #Query list of precipitation results
    presults = session.query().all()

    session.close()

    #Convert list of tuples into normal list
    prec_results = list(np.ravel(presults))

    #view information as json
    return jsonify (prec_results)


@app.route("/api/v1.0/stations")
def stations():
     session = Session(engine)

    """Return a list of stations from the dataset"""
    #Query list of station results
    sresults = session.query().all()

    session.close()

    #Convert list of tuples into normal list
    station_results = list(np.ravel(sresults))

    #view information as json
    return jsonify (station_results)

@app.route("tobs")
def tobs():
     session = Session(engine)

    """Return a list of of temperature observations for the previous year, including dates and temperature observations"""
    #Query list of temperature observations
    tresults = session.query().all()

    session.close()

    #Convert list of tuples into normal list
    temp_obsv = list(np.ravel(tresults))

    #view information as json
    return jsonify (temp_obsv)

if __name__ == "__main__":
    app.run(debug=True)      