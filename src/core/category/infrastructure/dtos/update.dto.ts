import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class UpdateCategoryDto {

  @IsNumber()
  @IsPositive()
  id: number;

  @IsString()
  @IsNotEmpty()
  name: string;
}
