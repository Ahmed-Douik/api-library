import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {

    @ApiProperty({ description: 'The name of the user', example: 'John Doe' })
    name: string;

    @ApiProperty({ description: 'The email of the user', example: 'john@example.com' })
    email: string;

    @ApiProperty({ description: 'The password of the user', example: 'secret123' })
    password: string;
}
