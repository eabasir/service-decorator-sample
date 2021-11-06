import { HttpException, HttpStatus } from '@nestjs/common';

export function SimpleGuard(allowed: boolean) {
  return function (
    target: Record<string, any>,
    _,
    descriptor: PropertyDescriptor,
  ) {
    const method = descriptor.value;

    descriptor.value = function (...args: Array<any>) {
      if (!allowed) {
        throw new HttpException('unauthenticated call!', HttpStatus.FORBIDDEN);
      }
      return method.apply(this, args);
    };
  };
}
