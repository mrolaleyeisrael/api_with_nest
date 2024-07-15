import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(['intern', 'admin', 'engineer'], { message: 'Invalid role' })
  role: 'intern' | 'admin' | 'engineer';
}
