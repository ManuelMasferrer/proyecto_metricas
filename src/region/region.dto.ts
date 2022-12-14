import {
    IsNotEmpty,
    IsString
} from 'class-validator';
export class RegionDto {
    readonly id: string;
    @IsString()
    @IsNotEmpty()
    readonly nombre: string;
}
