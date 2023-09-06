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
    'default': dj_database_url.config()
}

# Direction off JS - IMG - CSS
STATIC_URL = '/static/'
STATIC_DIR = os.path.join(BASE_DIR, 'staticfiles')
#STATIC_ROOT = BASE_DIR.child('staticfiles')
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'
# Direction off MEDIA
MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR.child('media')


CORS_ALLOWED_ORIGINS = [

    "http://localhost:5173",

]
