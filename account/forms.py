from django.contrib.auth.forms import AuthenticationForm, PasswordChangeForm
from django import forms

from .models import Customer


class UserLoginForm(AuthenticationForm):

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        for field in self.fields:
            self.fields[field].widget.attrs.update({'class': 'form-control mb-3'})