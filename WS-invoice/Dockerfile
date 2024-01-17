# Select the base image to build on top of
FROM python:3.12.1-alpine3.19

USER root

WORKDIR /home/site/wwwroot

# Copy python code to image
COPY . .

EXPOSE 5001

RUN apk update 

RUN apk add gcc

RUN apk add python3-dev

# install packages in requirements.txt
RUN pip install --upgrade pip

RUN pip install -r requirements.txt

CMD ["python3", "app.py"]
