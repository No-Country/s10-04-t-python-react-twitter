import os
import django
from django.contrib.auth import get_user_model
from applications.users.managers import UserManager  # Reemplace 'myapp' con el nombre de su aplicación

#si

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "twitter.settings.prod")  # Reemplace 'myproject' con el nombre de su proyecto Django
django.setup()

User = get_user_model()
user_manager = UserManager()

def create_superuser(): 
    email = os.environ.get('DJANGO_SUPERUSER_EMAIL')
    password = os.environ.get('DJANGO_SUPERUSER_PASSWORD')

    if email and password:
        if not User.objects.filter(email=email).exists():
            user = user_manager.create_superuser(email=email, password=password)
            print(f'Superuser {user.username} ({user.email}) created successfully.')
        else:
            print(f'Superuser with email {email} already exists.')
    else:
        print('Please provide values for DJANGO_SUPERUSER_EMAIL and DJANGO_SUPERUSER_PASSWORD environment variables.')


