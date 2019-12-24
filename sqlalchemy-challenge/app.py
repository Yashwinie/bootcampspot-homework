import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify

#setup and save function to calculate last year of data for dataset
date_previousyear = dt.date(2017, 8, 23) - dt.timedelta(days=365)
##setup and save function to calculate the date one year ago from vacay time
prev_year_start = dt.date(2012, 5, 1) - dt.timedelta(days=365)
prev_year_end = dt.date(2012, 5, 15) - dt.timedelta(days=365)

#Database setup
engine = create_engine("sqlite:///hawaii.sqlite")
#Reflect an existing database into a new model
Base = automap_base()
#Reflect the tables
Base.prepare(engine, reflect=True)

#Save reference to tables
Measurement = Base.classes.measurement
Station = Base.classes.station

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
    presults = session.query(data_previousyear = session.query(Measurement.date, Measurement.prcp).filter(Measurement.date >= date_previousyear).all()

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
    sresults = session.query(Measurement.station, func.count(Measurement.station)).group_by(Measurement.station).order_by(func.count(Measurement.station).desc()).all()

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
    tresults = session.query(Measurement.tobs).\
    filter(Measurement.date >= date_previousyear).\
    filter(Measurement.station == 'USC00519281').all()

    session.close()

    #Convert list of tuples into normal list
    temp_obsv = list(np.ravel(tresults))

    #view information as json
    return jsonify (temp_obsv)

if __name__ == "__main__":
    app.run(debug=True)      