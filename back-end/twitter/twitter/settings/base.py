from django.core.exceptions import ImproperlyConfigured
import json
from pathlib import Path
from unipath import Path

import os
# Calling the secret.json file
with open('secret.json') as f:
    secret = json.loads(f.read())
    
def get_secret(secret_name, secrets = secret):
    try:
        return secrets[secret_name]
    except:
        msg = 'La variable %s no existe' % secret_name
        raise ImproperlyConfigured(msg)

#BASE_DIR = Path(__file__).ancestor(3)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

SECRET_KEY = get_secret ("SECRET_KEY")

# Django Apps
DJANGO_APPS =  (
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
)

# Local Apps
LOCAL_APPS = (
    'applications.users',
    'applications.tweets',
    'applications.likes',
)

# Third Party Apps
THIRD_PARTY_APPS = (
    'rest_framework',
    'rest_framework.authtoken',
    'drf_yasg',
    "corsheaders",
    
)

# Aplicaciones
INSTALLED_APPS = [ 
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'rest_framework.authtoken',
    'drf_yasg',
    "corsheaders",
    'applications.users',
    'applications.tweets',
    'applications.likes',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    "corsheaders.middleware.CorsMiddleware",
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'twitter.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'twitter.wsgi.application'

# Password validation
# https://docs.djangoproject.com/en/4.2/ref/settings/#auth-password-validators


AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/4.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# Default primary key field type
# https://docs.djangoproject.com/en/4.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

AUTH_USER_MODEL = 'users.User'


#import os

#SUPERUSER_USERNAME = os.environ.get('DJANGO_SUPERUSER_USERNAME')
#SUPERUSER_EMAIL = os.environ.get('DJANGO_SUPERUSER_EMAIL')
#SUPERUSER_PASSWORD = os.environ.get('DJANGO_SUPERUSER_PASSWORD')

#if SUPERUSER_USERNAME and SUPERUSER_EMAIL and SUPERUSER_PASSWORD:
    # Crear el superusuario
#    try:
#        from django.contrib.auth import get_user_model
#        User = get_user_model()
#        if not User.objects.filter(username=SUPERUSER_USERNAME).exists():
#            User.objects.create_superuser(SUPERUSER_USERNAME, SUPERUSER_EMAIL, SUPERUSER_PASSWORD)
#            print(f'Superuser {SUPERUSER_USERNAME} created successfully.')
#         else:
#             print(f'Superuser {SUPERUSER_USERNAME} already exists.')
#     except Exception as e:
#         print(f'Error creating superuser: {str(e)}')
# else:
#     print('Please provide values for DJANGO_SUPERUSER_USERNAME, DJANGO_SUPERUSER_EMAIL, and DJANGO_SUPERUSER_PASSWORD environment variables.')
