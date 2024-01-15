# Select the base image to build on top of
FROM mcr.microsoft.com/azure-functions/python:4-nightly-python3.10

USER root

WORKDIR /home/site/wwwroot

ENV CHROME_VERSION="120.0.6099.109"

# Install essential packages
RUN apt-get update && \
    wget https://dl.google.com/linux/chrome/deb/pool/main/g/google-chrome-stable/google-chrome-stable_${CHROME_VERSION}-1_amd64.deb

RUN apt install -y ./google-chrome-stable_${CHROME_VERSION}-1_amd64.deb

# Copy python code to image
COPY . .

RUN chmod 777 chromedriver-linux64/chromedriver

RUN cp chromedriver-linux64/chromedriver /usr/local/bin/

EXPOSE 5001

# install packages in requirements.txt
RUN pip install --upgrade pip && pip install -r requirements.txt

CMD ["python3", "app.py"]

