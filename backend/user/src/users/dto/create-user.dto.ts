import { IsNumber, IsString, MaxLength, Min } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MaxLength(100)
  readonly username: string;

  @IsString()
  @MaxLength(100)
  readonly password: string;

  @IsNumber()
  @Min(1)
  readonly age: number;
}
