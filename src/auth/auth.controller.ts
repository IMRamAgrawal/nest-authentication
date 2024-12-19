import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  register(@Body() { email, password, name }) {
    return this.authService.register(email, password, name);
  }

  @Post('login')
  login(@Body() { email, password }) {
    return this.authService.login(email, password);
  }
}
