import ProductItem from './ProductItem';
import classes from './Products.module.css';

const items = [
	{
		id: 'p1',
		title: 'LED Television',
		price: 700,
		description:
			'Get more room for viewing your screen with wider angle display',
		imageUrl:
			'https://cdn.shopify.com/s/files/1/2660/5202/products/shopify-image_544fc979-d65d-4847-9982-60177ff61db2_1400x.jpg?v=1611364553'
	},
	{
		id: 'p2',
		title: 'De Rosa TT Disc',
		price: 20000,
		description: 'De Rosa TT03 Disk Time Trial Bicycle',
		imageUrl:
			'https://static.wixstatic.com/media/50fef3_06b0add1a89c4ca6b4412aabfe48d3f0~mv2.png/v1/fill/w_843,h_562,al_c,usm_0.66_1.00_0.01/50fef3_06b0add1a89c4ca6b4412aabfe48d3f0~mv2.png'
	}
];

const Products = (props) => {
	return (
		<section className={classes.products}>
			<h2>Buy your favorite products</h2>
			{items.map((item) => {
				return (
					<ul key={item.id}>
						<ProductItem
							id={item.id}
							title={item.title}
							price={item.price}
							description={item.description}
							imageUrl={item.imageUrl}
						/>
					</ul>
				);
			})}
		</section>
	);
};

export default Products;
