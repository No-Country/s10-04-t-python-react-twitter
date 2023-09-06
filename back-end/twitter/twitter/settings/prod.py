from .base import *
import os
import dj_database_url

DEBUG = True

ALLOWED_HOSTS = []

RENDER_EXTERNAL_HOSTNAME = os.environ.get('RENDER_EXTERNAL_HOSTNAME')

if RENDER_EXTERNAL_HOSTNAME:
    ALLOWED_HOSTS.append(RENDER_EXTERNAL_HOSTNAME)

# Data BAse
DATABASES = {
    'default': dj_database_url.config(
        # Feel free to alter this value to suit your needs.
        default='postgres://twitterdb_vjb4_user:83kttfsJFPk6FO8g7xDut311eVbt2hGP@dpg-cjs92ftm702s73fd9l70-a/twitterdb_vjb4',
        conn_max_age=600
    )
}

# Direction off JS - IMG - CSS
STATIC_URL = '/static/'
STATIC_DIR = BASE_DIR.child('static')
STATIC_ROOT = BASE_DIR.child('staticfiles')

# Direction off MEDIA
MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR.child('media')


CORS_ALLOWED_ORIGINS = [

    "http://localhost:5173",

]