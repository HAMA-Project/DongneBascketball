import json

from django.test import TestCase

from user.factories import UserFactory
from user.schemas import UserIn


class BackofficeLoginTest(TestCase):
    def test_signup(self):
        # Given
        payload = UserIn(
            username="test_name", email="test@google.com", password="test_password"
        )

        # When
        reponse = self.client.post(
            path="/users/signup",
            data=json.loads(payload.json()),
            content_type="application/json",
        )

        # Then
        self.assertEqual(reponse.status_code, 201)

    def test_signup_already_exist_email(self):
        # Given
        UserFactory(email="test@google.com")
        payload = UserIn(
            username="test_name", email="test@google.com", password="test_password"
        )

        # When
        reponse = self.client.post(
            path="/users/signup",
            data=json.loads(payload.json()),
            content_type="application/json",
        )

        # Then
        self.assertEqual(reponse.status_code, 200)
        self.assertEqual(reponse.json()["message"], "Already Exist Email")

    def test_signup_users_must_have_an_email(self):
        # Given
        payload = UserIn(username="test_name", email="", password="test_password")

        # When
        reponse = self.client.post(
            path="/users/signup",
            data=json.loads(payload.json()),
            content_type="application/json",
        )

        # Then
        self.assertEqual(reponse.status_code, 200)
        self.assertEqual(reponse.json()["message"], "Users must have an email")
