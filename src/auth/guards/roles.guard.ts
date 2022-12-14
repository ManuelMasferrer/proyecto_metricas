import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from 'src/usuario/role.enum';
// import { ROLES_KEY } from 'src/usuario/roles.decorator';
import * as request from 'supertest';
import { JwtAuthGuard } from './jwt-auth.guard';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>("roles", [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }

    const req  = context.switchToHttp().getRequest();
    console.log(req);

    return requiredRoles.some((role) => req.user.roles?.includes(role));
  }
}