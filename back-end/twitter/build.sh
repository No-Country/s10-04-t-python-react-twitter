#!/usr/bin/env bash
# exit on error
set -o errexit

if [[ $CREATE_SUPERUSER ]];
then
  python manage.py createsuperuser --no-input
fi

pip install -r requirements.txt

python manage.py collectstatic --no-input
python manage.py makemigrations

python manage.py makemigrations users
python manage.py makemigrations likes
python manage.py makemigrations tweets

python manage.py migrate


