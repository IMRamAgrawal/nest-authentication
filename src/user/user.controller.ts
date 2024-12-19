import { Controller, Get, Patch, Body, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('user')
@UseGuards(JwtAuthGuard)
export class UserController {
  constructor(private userService: UserService) {}

  @Get('profile')
  getProfile(@Req() req) {
    console.log("ra ", req);
    return this.userService.getProfile(req.user.userId);
  }

  @Patch('profile')
  updateProfile(@Req() req, @Body() data: { name: string }) {
    return this.userService.updateProfile(req.user.userId, data);
 }
}
