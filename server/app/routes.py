import json
from collections import Counter
from typing import List

from flask import request
import app.functions as functions
from app import app


@app.route("/")
@app.route("/index")
def index():
    return "Hello, World!"


@app.route("/api/v1/service/status", methods=["GET"])
def status():
    return functions.status()


@app.route("/api/v1/service/test", methods=["GET"])
def test():
    return functions.test()


@app.route("/api/v1/service/test2/<user_id>", methods=["GET"])
def test2(user_id: int):
    return functions.test_2(user_id)
