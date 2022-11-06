import json

from django.test import TestCase

from user.schemas import UserIn


class BackofficeLoginTest(TestCase):
    def test_signup(self):
        # Given
        payload = UserIn(
            username="test_name", email="test@google.com", password="test_password"
        )

        # When
        reponse = self.client.post(
            path="/users/",
            data=json.loads(payload.json()),
            content_type="application/json",
        )

        # Then
        self.assertEqual(reponse.status_code, 201)
