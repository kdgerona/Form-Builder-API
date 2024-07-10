import { Injectable } from '@nestjs/common';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';
import { PrismaService } from '../../core/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class FormService {
  constructor(private prismaService: PrismaService) {}

  create(createFormDto: CreateFormDto) {
    return this.prismaService.form.create({
      data: createFormDto,
    });
  }

  findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.FormWhereUniqueInput;
    where?: Prisma.FormWhereInput;
    orderBy?: Prisma.FormOrderByWithRelationInput;
  }) {
    const { skip, take, cursor, where, orderBy } = params;

    return this.prismaService.form.findMany({
      skip,
      take,
      cursor,
      where: {
        ...where,
        tombstone: 0,
      },
      orderBy,
    });
  }

  findOne(id: string) {
    return this.prismaService.form.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: string, updateFormDto: UpdateFormDto) {
    return this.prismaService.form.update({
      data: updateFormDto,
      where: {
        id,
      },
    });
  }

  remove(id: string) {
    return this.prismaService.form.update({
      data: {
        tombstone: 1,
      },
      where: {
        id,
      },
    });
  }
}
