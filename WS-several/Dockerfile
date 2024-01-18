FROM python:3.9.12-slim

WORKDIR /app

RUN pip install --upgrade pip

COPY . .

RUN apt-get update \
    && apt-get -y install libpq-dev gcc

RUN pip install -r requirements.txt

EXPOSE 5000

CMD ["python","app.py"]