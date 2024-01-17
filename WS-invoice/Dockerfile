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

RUN apk add mupdf-tools

RUN apk add musl-dev

RUN apk add cmake

RUN apk add --no-cache \
        build-base \
        py3-numpy \
        py3-opencv \
        py3-pandas \
        py3-flask \
        py3-flask-limiter \
        py3-flask-cors \
        py3-werkzeug \
        py3-pymupdf \
        py3-pypdf2 \
        py3-easyocr \
        py3-setuptools

# install packages in requirements.txt
RUN pip install --upgrade pip

RUN pip install --upgrade setuptools

RUN pip install -r requirements.txt

CMD ["python3", "app.py"]
