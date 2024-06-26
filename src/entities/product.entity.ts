import { Entity, Column, PrimaryGeneratedColumn,OneToOne, OneToMany, ManyToOne, BaseEntity} from 'typeorm';
import { ProductTypesEntity } from './productType.entity';

@Entity("products")
export class ProductEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    price: number;
    @ManyToOne(()=>ProductTypesEntity, (productType) => productType.products)
    productType: ProductTypesEntity[];
}

