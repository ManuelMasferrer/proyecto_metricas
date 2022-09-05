// import { Producto } from '../producto/producto.entity';

import {
    Column,
    Entity,
    JoinColumn,
    JoinTable,
    ManyToMany,
    OneToMany,
    OneToOne,
    ManyToOne,
    PrimaryGeneratedColumn,
  } from 'typeorm';

@Entity()
export class CategoriaproductoEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nombre: string;
   
    @ManyToOne(() => CategoriaproductoEntity, Producto => Producto.categoriaproducto )
    categoriaproducto: CategoriaproductoEntity;
    
}
