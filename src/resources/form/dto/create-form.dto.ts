import { IsString, IsOptional, ValidateNested, IsArray } from 'class-validator';
import { Type } from 'class-transformer';
import { Field } from '@prisma/client';

export class CreateFormDto {
  @IsString()
  @IsOptional()
  id?: string;

  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsArray()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => FieldDto)
  fields?: Field[];
}

export class FieldDto {
  @IsString()
  id: string;

  @IsString()
  @IsOptional()
  question?: string;
}
