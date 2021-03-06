#!/bin/bash
DIR="$( cd "$( dirname "$0" )" && pwd )"
cd $DIR
cd air/ && python3 crawl_data.py
cd ../power/ && python parse_data.py
cd ../uv/ &&  python update_data.py
cd ../gamma/data/ && python gammamonitor.py
cd $DIR && node csv2json.js
cd $DIR && python3 get_weather.py
cd $DIR && curl -o data/air_forecast.json http://opendata.epa.gov.tw/ws/Data/AQFN/?format=json
cd $DIR && python insert_data_to_server.py
cd $DIR && python3 insert_to_now_server.py
