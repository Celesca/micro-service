import {
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MaxLength(100)
  readonly username: string;

  @IsString()
  @MaxLength(100)
  readonly password: string;

  @IsNumber()
  @IsOptional()
  readonly age?: number;

  @IsEmail()
  readonly email: string;
}
