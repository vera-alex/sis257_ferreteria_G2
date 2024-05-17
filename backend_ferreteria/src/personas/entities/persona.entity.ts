import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('personas')
export class Persona {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 50, nullable: false })
  nombres: string;

  @Column('varchar', { length: 20, nullable: true })
  paterno: string;

  @Column('varchar', { length: 20, nullable: true })
  materno: string;

  @Column('varchar', { length: 100, nullable: false })
  direccion: string;

  @Column('varchar', { length: 15, nullable: false })
  telefono: string;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' })
  fechaModificacion: Date;
}