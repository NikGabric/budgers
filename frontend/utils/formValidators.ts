import { type LoginUserDto } from "../stores/user";

interface ValidationError {
  code: number;
  description: string;
}

interface ValidationResult {
  isSuccess: boolean;
  error?: ValidationError;
}

export const validateLoginUserDto = (
  loginUserDto: LoginUserDto
): ValidationResult => {
  const usernameValid: ValidationResult = validateUsername(
    loginUserDto.username
  );

  if (!usernameValid.isSuccess) return usernameValid;

  const passwordValid: ValidationResult = validatePassword(
    loginUserDto.password
  );

  if (!passwordValid.isSuccess) return passwordValid;

  return { isSuccess: true };
};

const validateUsername = (username: string): ValidationResult => {
  if (!username)
    return {
      isSuccess: false,
      error: {
        code: 1,
        description: "Username cannot be empty.",
      },
    };

  if (username.length < 3 || username.length > 16)
    return {
      isSuccess: false,
      error: {
        code: 2,
        description: "Username must be between 3 and 16 characters.",
      },
    };

  const validPattern = /^[a-zA-Z0-9_]+$/;
  if (!validPattern.test(username))
    return {
      isSuccess: false,
      error: {
        code: 3,
        description:
          "Username can only contain letters, numbers, and underscores.",
      },
    };

  return { isSuccess: true };
};

const validatePassword = (password: string): ValidationResult => {
  if (!password) {
    return {
      isSuccess: false,
      error: {
        code: 1,
        description: "Password cannot be empty.",
      },
    };
  }

  if (password.length < 8 || password.length > 32) {
    return {
      isSuccess: false,
      error: {
        code: 2,
        description: "Password must be between 8 and 32 characters.",
      },
    };
  }

  if (!/[A-Z]/.test(password)) {
    return {
      isSuccess: false,
      error: {
        code: 3,
        description: "Password must contain at least one uppercase letter.",
      },
    };
  }

  if (!/[a-z]/.test(password)) {
    return {
      isSuccess: false,
      error: {
        code: 4,
        description: "Password must contain at least one lowercase letter.",
      },
    };
  }

  if (!/\d/.test(password)) {
    return {
      isSuccess: false,
      error: {
        code: 5,
        description: "Password must contain at least one digit.",
      },
    };
  }

  const specialCharacters = /[!@#$%^&*(),.?":{}|<>]/;
  if (!specialCharacters.test(password)) {
    return {
      isSuccess: false,
      error: {
        code: 6,
        description: "Password must contain at least one special character.",
      },
    };
  }

  return { isSuccess: true };
};
