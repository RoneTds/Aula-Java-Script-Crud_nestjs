
import { Entity, PrimaryGenerationColum, Colum} from 'typeorm';

@Entity()
export class Report {
    @PrimaryGenerationColum()
    id: number;

    @Colum()
    title: string;

    @Colum()
    description: string;

    @Colum({ default: 'Em Analise'})
    status: string // pode ser "Em Analise", "Em Processo" ou "Concluido"

}