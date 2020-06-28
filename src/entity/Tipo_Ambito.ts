import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class TIPOAMBITO {
    @PrimaryColumn({ type: "int" })
    id_tipo_ambito: number;
    @Column({ type: "nvarchar", length: 50, nullable: false })
    descripcion_tipo_ambito: string;
}