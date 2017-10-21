# TeamLaughingTribbleBackEnd <br />
Backend Django project for ParkHere CS160 SJSU
<br />
# i created different branch for each of us, work on your branch only to avoid bugs, pull request to master when you are ready
<br />
# Online - Pythonanywhere access <br />
   username: laughingtribble@gmail.com <br />
   password: laughingtribbleteam <br />
    
   Database password: parkheredb <br />
    
      all files can be view under files tab <br />
      URL for restapi: http://laughingtribble.pythonanywhere.com/ <br />

<br />
# Offline/Localhost - Installation on your machine
1. make sure you downloaded and installed python 3, Mysql server, DBMS software like MySQL workbench,sequel pro...
    . Download or clone the project to you local machine <br />

<br />
In terminal:
2. Install virtual env:<br />
    Mac and Window :pip install virtualenv
  <br />  
3. cd to the folder which contain the project<br />
4. set up virtual env for the project <br />
    Mac and Window: virtualenv venv<br />
    
5. Activate virtual env<br />
    Window: venv\Scripts\activate<br />
    Mac: source venv/bin/activate<br />
    
6. cd to TeamLaughingTribbleBackEnd/<br />
      pip install -r requirements.txt -> this will install all installed packages I have so far for this project.<br />
      
      # IMPORTANT: if you need to install something new, please do : pip freeze > requirements.txt. <br />
    
7. create mysql database parkhere 
    In TeamLaughingTribbleBackEnd/ParkHereBackend/settings.py, specify your localhost database information:
    
    ex: 
    DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'parkhere',
        'USER': 'root',
        'PASSWORD': '123',
        'HOST': 'localhost',
        'PORT': '3306'
    }
}


NOTICE on python anywhere host, we will use following configuration:

```DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'laughingtribble$parkhere',
        'USER': 'laughingtribble',
        'PASSWORD': 'parkheredb',
        'HOST': 'laughingtribble.mysql.pythonanywhere-services.com',
        'PORT': '3306'
    }
}```

8. cd to the folder contain manage.py. 
   ```python3 manage.py makemigrations
    python3 manage.py migrate```
    
9. Runserver
    ```python3 manage.py runserver```
    
