FROM tiangolo/uvicorn-gunicorn-fastapi:python3.9

RUN apt update \
    && apt install -y default-mysql-client \
    && apt install --no-install-recommends -y tzdata \
    && apt clean

WORKDIR /usr/src/app
COPY ./backend/docker/api/requirements.txt .
RUN pip install -U pip \
    && pip install --trusted-host pypi.python.org -r requirements.txt

COPY ./backend/app/sql_app /usr/src/app/app
COPY ./backend/app/db /usr/src/app/db
COPY ./backend/app/scripts /usr/src/app/scripts

# CMD [ "/bin/sh",  "-c", "./run.sh" ]