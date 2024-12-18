from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Setting

# Create your views here.

class SettingsView(APIView):
    def get(self, request, format=None):
        settingsDict = {}
   
        try: 
            settingObjects = Setting.objects.all()

            for setting in settingObjects:
                settingsDict[setting.name] = setting.value

            return Response(settingsDict, status=200)

        except:
            return Response(status=404)

    def post(self, request, format=None):
        settings = request.data['settings']
        bad_settings = []
        for setting in settings:
            try:
                new_setting = Setting(name=setting['NAME'], value=setting['VALUE'])
                new_setting.save()
            except:
                bad_settings.append(setting)
        
        if len(bad_settings) > 0:
            return Response({"INVALID SETTINGS": bad_settings}, status=404)

        else:
            return Response(status=200)