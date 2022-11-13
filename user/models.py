from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.db import models


class UserManager(BaseUserManager):
    def create_user(self, email, username, password):
        user = self.model(
            email=email,
            username=username,
        )
        user.set_password(password)
        user.save(using=self._db)
        return 200, {"message": "success"}

    def create_superuser(self, email, password):
        user = self.create_user(email=email, password=password)
        user.is_admin = True
        user.save(using=self._db)
        return user


class User(AbstractBaseUser):
    username = models.CharField("이름", max_length=20)
    email = models.EmailField("이메일 주소", max_length=100, unique=True)
    password = models.CharField("비밀번호", max_length=128)
    join_date = models.DateTimeField("가입일", auto_now_add=True)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    objects = UserManager()

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True

    @property
    def is_staff(self):
        return self.is_admin

    class Meta(AbstractBaseUser.Meta):
        swappable = "AUTH_USER_MODEL"
        verbose_name = "user"
        verbose_name_plural = "users"
        db_table = "user"
