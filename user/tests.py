import json

from django.test import TestCase

from user.factories import UserFactory
from user.schemas import EmailIn, SignupUserIn, UsernameIn


class BackofficeLoginTest(TestCase):
    def test_signup(self):
        # Given
        payload = SignupUserIn(username="test_name", email="test@google.com", password="test_password")

        # When
        reponse = self.client.post(
            path="/users/signup",
            data=json.loads(payload.json()),
            content_type="application/json",
        )

        # Then
        self.assertEqual(reponse.status_code, 200)

    def test_check_email(self):
        # Given
        UserFactory(email="test@google.com")
        payload = EmailIn(email="test@google.com")

        # When
        reponse = self.client.post(
            path="/users/duplicates/email",
            data=json.loads(payload.json()),
            content_type="application/json",
        )

        # Then
        self.assertEqual(reponse.status_code, 200)
        self.assertEqual(reponse.json()["duplicate"], True)

    def test_check_username(self):
        # Given
        UserFactory(username="test_user")
        payload = UsernameIn(username="test_user")

        # When
        reponse = self.client.post(
            path="/users/duplicates/username",
            data=json.loads(payload.json()),
            content_type="application/json",
        )

        # Then
        self.assertEqual(reponse.status_code, 200)
        self.assertEqual(reponse.json()["duplicate"], True)

    def test_auth_email(self):
        # Given
        payload = EmailIn(email="test@google.com")

        # When
        response = self.client.post(
            path="/users/authenticates/email",
            data=json.loads(payload.json()),
            content_type="application/json",
        )

        # Then
        self.assertEqual(response.status_code, 200)

    def test_auth_email_not_validation_type(self):
        # Given
        payload = {"email": "testtest"}

        # When
        response = self.client.post(
            path="/users/authenticates/email",
            data=payload,
            content_type="application/json",
        )

        # Then
        self.assertEqual(response.status_code, 200)

    # def test_login(self):
    #     UserFactory(email="test@test.com", password="test")
    #     payload = LoginUserIn(email="test@test.com", password="test")
    #
    #     response = self.client.post(
    #         path="/users/login",
    #         data=payload,
    #         content_type="application/json",
    #     )
    #     self.assertEqual(response.status_code, 200)
